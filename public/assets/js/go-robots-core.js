// go-robots-core.js
// 友链接力核心数据获取逻辑（与 go-robots.html 配套，抽出便于单元测试）。
// 设计：主接口优先，失败自动降级备份接口；两者均带 AbortController 超时取消与响应状态检查。
// 注意：本模块不访问任何浏览器 API（localStorage/DOM），tag 偏好由调用方传入，便于在 Node 下测试。

export const REQUEST_TIMEOUT = 10000;
export const BACKUP_URL = "https://backup.api.travellings.cn/list.json";

// fetch 包装：带超时控制，超时后通过 AbortController 真正取消底层请求，
// 避免自动重试时累积大量未完成的 fetch 请求占用连接
export function fetchWithTimeout(url, timeoutMs = REQUEST_TIMEOUT) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    return fetch(url, { signal: controller.signal })
        .finally(() => clearTimeout(timer));
}

// 从接口响应里挑一个在线站点（status=RUN 且有 url），列表为空则抛错
function pickOnlineSite(data) {
    const list = ((data && data.data) || [])
        .filter(s => s && s.status === "RUN" && s.url);
    if (!list.length) throw new Error("列表为空");
    const item = list[Math.floor(Math.random() * list.length)];
    return { name: item.name, url: item.url, tag: item.tag || "" };
}

// 请求随机网站：主接口失败自动降级到备份接口，二者均带超时与响应状态检查
// tag 为可选站点类型偏好（由调用方从 localStorage 读取后传入）
export async function requestRandomWebsite(tag) {
    // 备份接口：超时 + 响应状态检查 + 只取在线站点
    const tryBackup = async () => {
        const r = await fetchWithTimeout(BACKUP_URL, REQUEST_TIMEOUT);
        if (!r.ok) throw new Error(`备份接口 HTTP ${r.status}`);
        const d = await r.json();
        return pickOnlineSite(d);
    };

    const mainUrl = `https://api.travellings.cn/random${tag ? `?tag=${tag}` : ''}`;
    try {
        const r = await fetchWithTimeout(mainUrl, REQUEST_TIMEOUT);
        if (!r.ok) throw new Error(`主接口 HTTP ${r.status}`);
        const d = await r.json();
        if (d.success && d.data && d.data[0]) {
            return {
                name: d.data[0].name.trim(),
                url: d.data[0].url.trim(),
                tag: d.data[0].tag || ""
            };
        }
        throw new Error("主接口返回异常");
    } catch (e) {
        // 主接口任何失败（超时/!ok/结构异常）都降级到备份
        return tryBackup();
    }
}

// 带重试的数据获取：最多尝试 maxAttempts 次，全部失败则抛出最后一次错误
export async function fetchWithRetry(fetcher, maxAttempts = 3) {
    let lastError;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fetcher();
        } catch (e) {
            lastError = e;
        }
    }
    throw lastError;
}
