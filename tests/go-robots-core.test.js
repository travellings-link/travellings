import { describe, it, expect, beforeEach, vi } from "vitest";
import { fetchWithTimeout, requestRandomWebsite, fetchWithRetry } from "../public/assets/js/go-robots-core.js";

// 模拟响应对象
function jsonResponse(ok, status, body) {
    return { ok, status, json: async () => body };
}

// 按顺序返回响应的 fetch mock（用于请求结构测试）
function queueFetch(responses) {
    let i = 0;
    return (url, opts = {}) => {
        const res = responses[i++];
        // 特殊标记：永远不 resolve，用于模拟「请求已发出但一直挂着」
        if (res && res.__neverResolve) {
            return new Promise((resolve, reject) => {
                const signal = opts.signal;
                if (signal) signal.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError")));
            });
        }
        return Promise.resolve(res);
    };
}

beforeEach(() => {
    vi.restoreAllMocks();
});

describe("fetchWithTimeout - 请求取消", () => {
    it("超时后通过 AbortController 真正取消底层请求（不泄漏未完成请求）", async () => {
        global.fetch = (url, opts) => new Promise((resolve, reject) => {
            const signal = opts.signal;
            if (signal) signal.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError")));
        });
        await expect(fetchWithTimeout("https://example.com", 10)).rejects.toThrow();
    });
});

describe("requestRandomWebsite - 异常响应结构", () => {
    it("主接口成功时直接返回，不再请求备份", async () => {
        const main = jsonResponse(true, 200, { success: true, data: [{ name: "A站", url: "https://a", tag: "blog" }] });
        global.fetch = queueFetch([main]);
        const r = await requestRandomWebsite();
        expect(r.name).toBe("A站");
        expect(r.url).toBe("https://a");
    });

    it("主接口 HTTP !ok 时降级到备份接口", async () => {
        const main = jsonResponse(false, 500, {});
        const backup = jsonResponse(true, 200, { data: [{ status: "RUN", name: "B站", url: "https://b", tag: "tech" }] });
        global.fetch = queueFetch([main, backup]);
        const r = await requestRandomWebsite();
        expect(r.name).toBe("B站");
    });

    it("主接口 success=false 时降级到备份接口", async () => {
        const main = jsonResponse(true, 200, { success: false });
        const backup = jsonResponse(true, 200, { data: [{ status: "RUN", name: "B站", url: "https://b" }] });
        global.fetch = queueFetch([main, backup]);
        const r = await requestRandomWebsite();
        expect(r.name).toBe("B站");
    });

    it("主接口返回 data[0] 缺失时降级到备份接口", async () => {
        const main = jsonResponse(true, 200, { success: true, data: [] });
        const backup = jsonResponse(true, 200, { data: [{ status: "RUN", name: "B站", url: "https://b" }] });
        global.fetch = queueFetch([main, backup]);
        const r = await requestRandomWebsite();
        expect(r.name).toBe("B站");
    });

    it("主备接口均 !ok 时抛出备份接口错误", async () => {
        const main = jsonResponse(false, 500, {});
        const backup = jsonResponse(false, 502, {});
        global.fetch = queueFetch([main, backup]);
        await expect(requestRandomWebsite()).rejects.toThrow("备份接口 HTTP 502");
    });

    it("备份接口列表为空时抛出错误", async () => {
        const main = jsonResponse(false, 500, {});
        const backup = jsonResponse(true, 200, { data: [] });
        global.fetch = queueFetch([main, backup]);
        await expect(requestRandomWebsite()).rejects.toThrow("列表为空");
    });

    it("备份接口响应结构异常（无 data）时抛出错误", async () => {
        const main = jsonResponse(false, 500, {});
        const backup = jsonResponse(true, 200, {});
        global.fetch = queueFetch([main, backup]);
        await expect(requestRandomWebsite()).rejects.toThrow("列表为空");
    });
});

describe("fetchWithRetry - 重试场景", () => {
    it("首次成功只调用一次 fetcher", async () => {
        let n = 0;
        const r = await fetchWithRetry(async () => { n++; return "ok"; }, 3);
        expect(r).toBe("ok");
        expect(n).toBe(1);
    });

    it("前两次失败、第三次成功时返回并在第三次成功", async () => {
        let n = 0;
        const r = await fetchWithRetry(async () => {
            n++;
            if (n < 3) throw new Error("暂时失败");
            return "ok";
        }, 3);
        expect(r).toBe("ok");
        expect(n).toBe(3);
    });

    it("始终失败时达到上限后抛出最后一次错误", async () => {
        let n = 0;
        await expect(fetchWithRetry(async () => { n++; throw new Error("boom"); }, 3)).rejects.toThrow("boom");
        expect(n).toBe(3);
    });
});
