const prefix = "t_preference_";
const getSetting = key => localStorage.getItem(prefix + key);

const preferredTag = getSetting("tag");
const travellingTimeout = getSetting("timeout") || 1500;

let apiUrl = "https://api.travellings.cn/random";
if (preferredTag) apiUrl += "?tag=" + preferredTag;

const fetchWithTimeout = (url, timeoutMs) => {
    return Promise.race([
        fetch(url),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Request timeout')), timeoutMs)
        )
    ]);
};

const go = async () => {
    try {
        let res = await fetchWithTimeout(apiUrl, 5000);
        res = await res.json();
        if (!res.ok) {
            throw new Error("HTTP Error");
        }
        if (!res.success) {
            throw new Error("API Error");
        }
        location.href = res.data[0].url;
    } catch (e) {
        console.warn("Using backup due to: ", e);
        const res = await fetch("https://backup.api.travellings.cn/list.json");
        const data = await res.json();
        const list = data.data;
        const randomIndex = Math.floor(Math.random() * list.length);
        location.href = list[randomIndex].url;
    }
}

setTimeout(go, travellingTimeout);
