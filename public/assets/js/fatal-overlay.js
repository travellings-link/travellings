/*
 * fatal-overlay.js - 全部接口失败兜底 UI（视图层），与 go.js 配套使用。
 * 设计：乡村车站，纯静态底图 + 中央「駅名標」站名牌通告。
 * 零 CDN 依赖：所有样式内联，除背景图外无外部资源。
 */
(function (global) {
    "use strict";

    // 背景底图相对路径（与 fatal-overlay.js 同根目录）
    const BG_URL = "./assets/img/station-bg.png";

    // 遮罩模板：背景层 + 中央站名牌 + 关键帧/交互样式
    const TEMPLATE =
        '<div id="tf-bg" style="position:absolute;inset:0;z-index:0;"></div>' +
        '<div style="position:relative;z-index:1;width:344px;max-width:344px;padding:0;box-sizing:border-box;">' +
            // 站名牌顶部挂绳
            '<div style="display:flex;justify-content:center;gap:118px;margin-bottom:-1px;">' +
                '<div style="width:2px;height:26px;background:linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,.55));"></div>' +
                '<div style="width:2px;height:26px;background:linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,.55));"></div>' +
            '</div>' +
            // 站名牌主体：白底圆角卡片 + 绿色顶饰
            '<div style="position:relative;background:linear-gradient(180deg,#fffdf8 0%,#f7f3ea 100%);border-radius:18px;padding:22px 28px 26px;box-sizing:border-box;border:1px solid rgba(255,255,255,.7);box-shadow:0 1px 0 rgba(255,255,255,.95) inset,0 24px 60px rgba(40,46,30,.26);">' +
                '<div style="position:absolute;top:0;left:0;right:0;height:9px;border-radius:18px 18px 0 0;background:linear-gradient(90deg,#7fae6a,#5f9653);"></div>' +
                // 状态标签
                '<div style="display:inline-block;font-size:10px;letter-spacing:.18em;color:#5f7a4e;background:rgba(127,174,106,.16);padding:3px 11px;border-radius:999px;margin:14px 0 12px;">运行状况 · STATUS</div>' +
                // 站名（通告文案）
                '<div style="font-size:23px;font-weight:700;color:#2c3326;letter-spacing:.1em;line-height:1.25;text-shadow:0 1px 0 rgba(255,255,255,.8);">开往暂不可用</div>' +
                '<div style="font-size:11px;letter-spacing:.3em;color:#9aa487;margin-top:7px;text-transform:uppercase;">Travellings · 行き先不明</div>' +
                '<div style="height:1px;background:linear-gradient(90deg,transparent,rgba(110,130,90,.38),transparent);margin:16px 0 14px;"></div>' +
                // 详情文案 + 加载圈 + 重试按钮
                '<div id="tf-msg" style="font-size:13.5px;color:#586252;line-height:1.7;min-height:60px;"></div>' +
                '<div id="tf-spin" style="width:30px;height:30px;margin:16px auto 4px;border:3px solid rgba(110,130,90,.26);border-top-color:#6f9e5a;border-radius:50%;animation:tf-spin .9s linear infinite;"></div>' +
                '<button id="tf-retry" type="button" class="tf-retry-btn" style="display:none;margin-top:14px;padding:10px 30px;border:none;border-radius:999px;background:linear-gradient(180deg,#c0392b,#a82e22);color:#fff;font-size:14px;font-weight:600;letter-spacing:.04em;cursor:pointer;box-shadow:0 8px 22px rgba(192,57,43,.4);">立即重试</button>' +
            '</div>' +
        '</div>' +
        '<style>@keyframes tf-spin{to{transform:rotate(360deg)}}' +
        '.tf-retry-btn{transition:transform .18s cubic-bezier(.25,1,.5,1),box-shadow .18s;}' +
        '.tf-retry-btn:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(192,57,43,.5);}' +
        '.tf-retry-btn:active{transform:translateY(1px);}</style>';

    // 构建遮罩 DOM，返回各子元素引用（供 go.js 设置详情/重试逻辑）
    function createOverlay() {
        const root = document.createElement("div");
        root.id = "travellings-fatal";
        root.setAttribute("style",
            "position:fixed;inset:0;display:flex;align-items:center;justify-content:center;" +
            "padding:1.5rem;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei',system-ui,sans-serif;" +
            "background:#f3ebd6;z-index:9999;");
        root.innerHTML = TEMPLATE;

        const bg = root.querySelector("#tf-bg");
        const msg = root.querySelector("#tf-msg");
        const spin = root.querySelector("#tf-spin");
        const retry = root.querySelector("#tf-retry");

        // 点击重试：刷新页面
        retry.addEventListener("click", function () {
            location.reload();
        });

        return { root: root, bg: bg, msg: msg, spin: spin, retry: retry };
    }

    // 在 #tf-bg 上挂手绘车站底图（仅静态背景，无动画层）
    function loadStationBg(bgEl) {
        if (!bgEl || bgEl.dataset.station) return;
        bgEl.dataset.station = "1";
        bgEl.style.background =
            "url(\"" + BG_URL + "\") center bottom / cover no-repeat, linear-gradient(#7cc1dd,#f1ebd0)";
    }

    global.TravellingsFatal = {
        createOverlay: createOverlay,
        loadStationBg: loadStationBg
    };
})(window);
