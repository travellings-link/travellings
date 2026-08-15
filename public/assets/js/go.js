const prefix = "t_preference_";
const getSetting = key => localStorage.getItem(prefix + key);

const preferredTag = getSetting("tag");
const travellingTimeout = getSetting("timeout") || 1500;
const REQUEST_TIMEOUT = 10000;
const BACKUP_URL = "https://backup.api.travellings.cn/list.json";

let apiUrl = "https://api.travellings.cn/random";
if (preferredTag) apiUrl += "?tag=" + preferredTag;

// fetch 包装：带超时控制，避免弱网/接口挂起时页面永久卡在加载态
const fetchWithTimeout = (url, timeoutMs = REQUEST_TIMEOUT) => {
    return Promise.race([
        fetch(url),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Request timeout')), timeoutMs)
        )
    ]);
};

// 全部接口失败时的兜底 UI：精致卡片 + 转圈 + 自动重试进度提示，而不是静默卡死
// attempt 为已重试次数；达到上限后停止转圈并提示手动重试
const MAX_AUTO_RETRIES = 6;
let fatalAttempts = 0;
function showFatal(attempt = 1) {
    let tip = document.getElementById("travellings-fatal");
    if (!tip) {
        tip = document.createElement("div");
        tip.id = "travellings-fatal";
        tip.style.cssText =
            "position:fixed;inset:0;display:flex;align-items:center;justify-content:center;" +
            "padding:1.5rem;font-family:sans-serif;background:rgba(248,250,252,0.96);" +
            "backdrop-filter:blur(4px);z-index:9999;";
        tip.innerHTML =
            '<div style="text-align:center;max-width:360px;padding:32px 28px;' +
                'background:#fff;border-radius:20px;box-shadow:0 12px 40px rgba(15,23,42,0.12);">' +
                '<div style="font-size:46px;line-height:1;margin-bottom:16px;">😢</div>' +
                '<div style="font-size:20px;font-weight:600;color:#0f172a;margin-bottom:8px;">开往暂不可用</div>' +
                '<div id="tf-msg" style="font-size:14px;color:#64748b;line-height:1.6;margin-bottom:22px;"></div>' +
                '<div id="tf-spin" style="width:30px;height:30px;margin:0 auto 18px;border:3px solid #e2e8f0;' +
                    'border-top-color:#5372b4;border-radius:50%;animation:tf-spin 0.9s linear infinite;"></div>' +
                '<a href="javascript:location.reload()" ' +
                    'style="display:inline-block;padding:9px 24px;border-radius:999px;' +
                    'background:#5372b4;color:#fff;font-size:14px;font-weight:500;text-decoration:none;">立即重试</a>' +
            '</div>' +
            '<style>@keyframes tf-spin{to{transform:rotate(360deg)}}</style>';
        document.body.appendChild(tip);
    }
    const msg = tip.querySelector("#tf-msg");
    const spin = tip.querySelector("#tf-spin");
    if (attempt >= MAX_AUTO_RETRIES) {
        msg.textContent = "已多次重试仍无法连接，请点击按钮手动重试";
        spin.style.display = "none";
    } else {
        msg.textContent = `主接口与备份接口暂时都无法访问，正在为你自动重试（第 ${attempt} 次）…`;
        spin.style.display = "block";
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
