const prefix = "t_preference_";
const getSetting = key => localStorage.getItem(prefix + key);

const preferredTag = getSetting("tag");
const travellingTimeout = getSetting("timeout") || 1500;
const REQUEST_TIMEOUT = 10000;
const BACKUP_URL = "https://backup.api.travellings.cn/list.json";

let apiUrl = "https://api.travellings.cn/random";
if (preferredTag) apiUrl += "?tag=" + preferredTag;

// fetch 包装：带超时控制，并用 AbortController 在超时后真正取消底层请求，
// 避免自动重试时累积大量未完成的 fetch 请求占用连接
const fetchWithTimeout = (url, timeoutMs = REQUEST_TIMEOUT) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    return fetch(url, { signal: controller.signal })
        .finally(() => clearTimeout(timer));
};

// 全部接口失败时的兜底 UI：精致卡片 + 转圈 + 自动重试进度提示，而不是静默卡死
// attempt 为已重试次数；达到上限后停止转圈并提示手动重试
const MAX_AUTO_RETRIES = 6;
let fatalAttempts = 0;
// 兜底 UI 的 DOM 构建与背景动画已抽到 assets/js/fatal-overlay.js（TravellingsFatal 组件）。
// 这里只负责重试调度：达到上限前转圈并提示自动重试，达到上限后停转圈并给出手动重试按钮。
function showFatal(attempt = 1) {
    let refs = window.__tfRefs;
    if (!refs) {
        refs = TravellingsFatal.createOverlay();
        document.body.appendChild(refs.root);
        TravellingsFatal.loadStationBg(refs.bg);
        window.__tfRefs = refs;
    }
    const msg = refs.msg;
    const spin = refs.spin;
    const retry = refs.retry;
    if (attempt >= MAX_AUTO_RETRIES) {
        msg.textContent = "已多次重试仍无法连接，请点击按钮手动重试";
        spin.style.display = "none";
        retry.style.display = "inline-block";
    } else {
        msg.textContent = `主接口与备份接口暂时都无法访问，正在为你自动重试（第 ${attempt} 次）…`;
        spin.style.display = "block";
        retry.style.display = "none";
    }
}

// 从友链列表里取一个随机站点并跳转；只选 status=RUN 的在线站点，避开死链
async function jumpFromList(data) {
    const all = (data && data.data) || [];
    const list = all.filter(s => s && s.status === "RUN" && s.url);
    if (!list.length) throw new Error("Empty list");
    const item = list[Math.floor(Math.random() * list.length)];
    location.href = item.url;
}

const go = async () => {
    try {
        // 1. 优先主接口
        try {
            let res = await fetchWithTimeout(apiUrl, REQUEST_TIMEOUT);
            if (!res.ok) throw new Error("HTTP Error");
            res = await res.json();
            if (!res.success) throw new Error("API Error");
            location.href = res.data[0].url;
            return;
        } catch (e) {
            console.warn("主接口不可用，尝试备份接口:", e);
        }
        // 2. 主接口失败，降级到备份接口（同样带超时保护）
        const res = await fetchWithTimeout(BACKUP_URL, REQUEST_TIMEOUT);
        if (!res.ok) throw new Error("Backup HTTP Error");
        await jumpFromList(await res.json());
    } catch (e) {
        // 3. 全部失败：展示兜底 UI，按上限自动重试，达到上限后停止转圈改提示手动重试
        console.error("开往失败:", e);
        fatalAttempts++;
        showFatal(fatalAttempts);
        if (fatalAttempts < MAX_AUTO_RETRIES) {
            setTimeout(go, 5000);
        }
    }
}

setTimeout(go, travellingTimeout);
