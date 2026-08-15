const prefix = "t_preference_";
const getSetting = key => localStorage.getItem(prefix + key);

const preferredTag = getSetting("tag");
const travellingTimeout = getSetting("timeout") || 1500;
const REQUEST_TIMEOUT = 5000;
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

// 全部接口失败时的兜底 UI：给出可重试提示，而不是静默卡死
function showFatal() {
    let tip = document.getElementById("travellings-fatal");
    if (!tip) {
        tip = document.createElement("div");
        tip.id = "travellings-fatal";
        tip.style.cssText =
            "position:fixed;inset:0;display:flex;align-items:center;justify-content:center;" +
            "text-align:center;padding:1rem;font-family:sans-serif;color:#111827;background:#fff;z-index:9999;";
        document.body.appendChild(tip);
    }
    tip.innerHTML =
        '😢 开往暂不可用，请<a href="javascript:location.reload()" ' +
        'style="color:#5372b4;text-decoration:underline;">点击重试</a>';
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
        // 3. 全部失败：展示兜底 UI，并 5s 后自动重试
        console.error("开往失败:", e);
        showFatal();
        setTimeout(go, 5000);
    }
}

setTimeout(go, travellingTimeout);
