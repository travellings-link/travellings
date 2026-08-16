const prefix = "t_preference_";
const getSetting = key => localStorage.getItem(prefix + key);

const preferredTag = getSetting("tag");
const travellingTimeout = getSetting("timeout") || 1500;
const REQUEST_TIMEOUT = 10000;
const BACKUP_URL = "https://backup.api.travellings.cn/list.json";
const STATUS_URL = "https://status.travellings.cn/";

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

// 全部接口失败时的兜底 UI：乡村车站设计（纯静态底图 + 中央「駅名標」站名牌通告）。
// 背景图经压缩（WebP 160KB / PNG 437KB），并优先使用 WebP，避免 CF 下加载缓慢。
// 文案克制：只保留核心信息 + 一个「查看状态」入口，去掉冗余装饰与多语言堆叠。
const MAX_AUTO_RETRIES = 6;
let fatalAttempts = 0;

// 探测浏览器是否支持 WebP，决定背景图回退
function pickBgUrl() {
    const webp = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
    const img = new Image();
    img.onload = img.onerror = null;
    img.src = webp;
    const ok = img.width > 0 && img.height > 0;
    return ok ? "./assets/img/station-bg.webp" : "./assets/img/station-bg.png";
}

function buildFatalOverlay() {
    const bgUrl = pickBgUrl();
    const root = document.createElement("div");
    root.id = "travellings-fatal";
    root.setAttribute("style",
        "position:fixed;inset:0;display:flex;align-items:center;justify-content:center;" +
        "padding:1.5rem;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei',system-ui,sans-serif;" +
        "background:linear-gradient(#7cc1dd,#f1ebd0);z-index:9999;");
    root.innerHTML =
        '<div style="position:absolute;inset:0;z-index:0;background:url(\'' + bgUrl + '\') center bottom / cover no-repeat, linear-gradient(#7cc1dd,#f1ebd0);"></div>' +
        '<div style="position:relative;z-index:1;width:344px;max-width:344px;padding:0;box-sizing:border-box;">' +
            '<div style="display:flex;justify-content:center;gap:118px;margin-bottom:-1px;">' +
                '<div style="width:2px;height:26px;background:linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,.55));"></div>' +
                '<div style="width:2px;height:26px;background:linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,.55));"></div>' +
            '</div>' +
            '<div style="position:relative;background:linear-gradient(180deg,#fffdf8 0%,#f7f3ea 100%);border-radius:18px;padding:22px 28px 26px;box-sizing:border-box;border:1px solid rgba(255,255,255,.7);box-shadow:0 1px 0 rgba(255,255,255,.95) inset,0 24px 60px rgba(40,46,30,.26);">' +
                '<div style="position:absolute;top:0;left:0;right:0;height:9px;border-radius:18px 18px 0 0;background:linear-gradient(90deg,#7fae6a,#5f9653);"></div>' +
                '<div style="position:absolute;top:12px;right:16px;font-size:11px;letter-spacing:.2em;color:#9aa492;font-weight:600;">运行状况 · STATUS</div>' +
                '<div style="font-size:23px;font-weight:700;color:#2c3326;letter-spacing:.1em;line-height:1.25;text-shadow:0 1px 0 rgba(255,255,255,.8);margin-top:14px;">行き先不明</div>' +
                '<div style="font-size:12px;letter-spacing:.22em;color:#8a9082;margin-top:2px;">Travellings · 行き先不明</div>' +
                '<div style="height:1px;background:linear-gradient(90deg,transparent,rgba(110,130,90,.38),transparent);margin:16px 0 14px;"></div>' +
                '<div id="tf-msg" style="font-size:13.5px;color:#586252;line-height:1.7;min-height:60px;"></div>' +
                '<a id="tf-status" href="' + STATUS_URL + '" target="_blank" rel="noopener" ' +
                    'style="display:block;margin-top:6px;margin-bottom:10px;color:#5f7a4e;font-size:13px;font-weight:600;text-decoration:none;">查看开往状态 ›</a>' +
                '<div id="tf-spin" style="width:30px;height:30px;margin:0 auto 4px;border:3px solid rgba(110,130,90,.26);border-top-color:#6f9e5a;border-radius:50%;animation:tf-spin .9s linear infinite;"></div>' +
                '<button id="tf-retry" type="button" class="tf-retry-btn" style="display:none;margin:14px auto 0;padding:10px 30px;border:none;border-radius:999px;background:linear-gradient(180deg,#c0392b,#a82e22);color:#fff;font-size:14px;font-weight:600;letter-spacing:.04em;cursor:pointer;box-shadow:0 8px 22px rgba(192,57,43,.4);">立即重试</button>' +
            '</div>' +
        '</div>' +
        '<style>@keyframes tf-spin{to{transform:rotate(360deg)}}' +
        '.tf-retry-btn{transition:transform .18s cubic-bezier(.25,1,.5,1),box-shadow .18s;}' +
        '.tf-retry-btn:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(192,57,43,.5);}' +
        '.tf-retry-btn:active{transform:translateY(1px);}' +
        '#tf-status:hover{text-decoration:underline;}</style>';

    const msg = root.querySelector("#tf-msg");
    const spin = root.querySelector("#tf-spin");
    const retry = root.querySelector("#tf-retry");
    retry.addEventListener("click", () => location.reload());
    return { root, msg, spin, retry };
}

// 兜底 UI 调度：达到上限前转圈并提示自动重试，达到上限后停转圈并给出手动重试按钮
function showFatal(attempt = 1) {
    let refs = window.__tfRefs;
    if (!refs) {
        refs = buildFatalOverlay();
        document.body.appendChild(refs.root);
        window.__tfRefs = refs;
    }
    const msg = refs.msg;
    const spin = refs.spin;
    const retry = refs.retry;
    if (attempt >= MAX_AUTO_RETRIES) {
        msg.textContent = "主接口与备份接口暂时都无法访问，请点击按钮手动重试";
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
