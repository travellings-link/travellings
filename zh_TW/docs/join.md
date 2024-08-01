# 加入開往

## 1. 您的網頁應滿足

- 願為開放的網路做出貢獻，如樂於分享知識經驗等
- **禁止採集站內容農場**
  - 對多站點聚合，源站不提供的資料進行統計不在此列
  - 部落格網站如果可以在搜尋引擎中搜到很多相同的內容可能會被判定為「內容農場」
- 沒有違法違規和影響訪問體驗的內容，如：侵入式廣告或彈窗
- **沒有包括**涉政敏感、色情、暴力或是其它維護組成員認為的不適宜內容
- 正常訪問中，以巡查機器人是否可訪問和人工巡查時域名未過期未脫離原先主體為準
- 已有較多內容
  - 應有 20 篇文章 **或** 10 篇原創文章
  - 需要網站已創辦兩個月以上，更新時間自部落格第一篇內容時間開始算起
- 對於部落格網站，**推薦**能做到不定期或定期更新博文
  - 半年及以上不更新博文的成員被人工審查後將被通知，非強制
  - 半年及以上不更新成員的站點申請可能會被拒絕
- 強制啟用 https，**推薦**開啟 HSTS
- 非付費域名的相關限制：
  - 對於使用 `eu.org` 和 `github.io` 域名的站點，我們會對應提高稽核要求和巡查要求
  - 對於處於 Public Suffix List 內的免費域名，站長需要在我們提出 eTLD 免責宣告以後確定繼續加入開往
  - 使用不在 Public Suffix List 內的免費域名的站點申請可能會被拒絕
    - 例外情況：站點質量極高等

::: info 說明

- 引導頁、個人主頁、導航站等非部落格網站也可以申請加入開往（在 Q&A 中有強調）
  - 如果引導頁有連結到部落格子站，則需要部落格符合上述的標準
  - 個人主頁的單頁網站有很大可能會因為內容不豐富被駁回，建議用多個頁面詳細介紹。導航站視具體情況而定
- 對於一個獨立域名下申請加入開往的不同網站，如果它們的內容相似**或**型別相同，則透過其中一個網站，或者將它們的引導頁收錄到開往
- 要求中的「網站已有較多內容」，因為刪庫等非正常情況的存在，一般情況下不會將未滿足文章數量要求的成員刪除
- 對於長期處於內容較少狀態的成員網站，維護組成員可以經組內討論並通知站長，等待 1 個月後刪除
- 開往鼓勵規範轉載
- 對於存在不適宜內容的成員網站，任何人都可以向我們反饋
- 開往維護組對加入規則有制定、修改與解釋以上內容的權利，如以上內容有修改則按照最新版本的內容執行，內容修改後恕不另行通知

:::


## 2. 將「開往」圖示放到您網頁**開啟後就能看到的地方**（讓友鏈接力下去）

:::warning 重要

由於[不可抗力因素](https://github.com/travellings-link/travellings/issues/566)，請盡快將您網頁Travelling 指向的網域名稱（包括圖片素材）從`https://travellings.now.sh ` 更新為`https://www.travellings.cn/go.html` 。

:::

- **最佳實踐**：將 `開往` 的外鏈（`https://www.travellings.cn/go.html`）放置在**打開後就能看到的地方**：
  - 如是英文導航，可使用 `Travelling` （而非 Travelling**s**）；
  - 如需Font Awesome ，推薦`fa-subway` （[點我預覽](https://fontawesome.com/icons/subway?style=solid)，其他圖標庫可選火車地鐵相關的圖標，其次可選火箭飛船圖標；**不**再推薦紙飛機圖標，易與Telegram 混淆）；
  - 如需 Emoji，推薦 `🚇`；
- **額外可選**：將開往的標誌放到您的底部或其他位置，表示對開往的支援：
  - 動圖 GIF：`https://www.travellings.cn/assets/logo.gif`
  - 深色 PNG：`https://www.travellings.cn/assets/b.png`
  - 淺色 PNG：`https://www.travellings.cn/assets/w.png`
  - 方形 PNG：`https://www.travellings.cn/assets/travelling.png`
  - 方深 PNG：`https://www.travellings.cn/assets/travelling-dark.png`
  - 方淺 PNG：`https://www.travellings.cn/assets/travelling-light.png`
  - 向量 SVG：`https://www.travellings.cn/assets/logo.svg`
  - 全部圖片素材：可參考`assets` 資料夾。
  - 💡 參考代碼：（logo.gif 可替換為上方的其他圖片，以適應您的網頁主題；width 可限制圖片的大小，讓標誌看起來更合適。）
  - 🚀 CDN 加速：如以上圖片素材載入緩慢，可將連結中的`https://www.travellings.cn/assets/` 替換為`https://cdn.jsdelivr.net/gh/travellings-link/travellings/ assets/` （已經有國內CDN 加速了，載入速度應該不會太慢吧？）

```html
<a href="https://www.travellings.cn/go.html" target="_blank" rel="noopener" title="開往-友鏈接力">
    <img src="https://www.travellings.cn/assets/logo.gif" alt="開往-友鏈接力" width="120">
</a>
```

:::info 範例

![example1](https://www.travellings.cn/assets/example1.png)
![example2](https://www.travellings.cn/assets/example2.png)

:::

## 3. 建立 Issue，等待審核通過

[前往 GitHub Issues 頁面](https://github.com/travellings-link/travellings/issues)

我們至少會在每週週末處理您的 Issue，如您的加入申請超過 1 個月還未審核，可以 @ 最近活躍的維護組成員或通過其它我們已經公示的聯繫渠道聯繫。

您的申請會因為一些原因被駁回。並且，若您在 15 天內未跟進回覆，我們會關閉您的 Issue，屆時需要您重新申請。

::: info 💡 常見的可能導致審核失敗的原因與解決方案：

⛔ 把開往放到了預設收起的選單中\
✅ 推薦放在打開網頁就能看到的地方，方便訪客看到並點擊；

⛔ 網頁沒有啟用 https\
✅ 開啟強制 https（有許多免費的途徑，可以使用 ZeroSSL, Let's Encrypt 等免費服務）；

⛔ 網頁上的內容過少，如博文只有幾篇\
✅ 內容更新充盈後再來申請試試，請參閱開往部落格網站文章數量和內容的要求。

:::

## 參加計畫

如果你對我們跳轉頁的樣式不滿意，歡迎你在 `public` 資料夾中提交新的樣式，只需幾步，即可自訂你的樣式!

> 1. 所有涉及的圖片必須是 SVG
> 2. 必須為單頁 html，如有 css 可以寫入 html 頭，JS 函式庫請使用外部公用 CDN
> 3. 底部包含開往備案號 和 指向 [開往偏好設定](https://www.travellings.cn/preference) 的鏈接
> 4. 嵌入 `https://www.travellings.cn/assets/js/go.js` 可直接實現跳轉邏輯，並自動使用使用者的偏好設置
> 5. 設計精美/有創意
> 6. 請一併修改 [其他頁面一覽](https://www.travellings.cn/zh_TW/docs/pages)，加入你的頁面描述和截圖
> 7. 請一併修改 **開往偏好設定** （位於 `.vitepress/theme/components/Preferences.vue`），將你的自訂頁面加入設定選單中（位於第 `34` 行）
> 8. 提交 Pull Request，並 @ 最近活躍的開往維護組成員

:::tip

如果你是新手，可以在原有跳轉頁的基礎上進行修改\~

:::

::: warning

如果你是以預設的 `go.html` 為基礎進行修改的，請**務必先刪除** `<head>` 中的以下程式：

```html
<script>
    const customPage = localStorage.getItem("t_preference_page");
    if (customPage) {
        location.href = "./" + customPage;
    }
</script>
```

以上程式碼用於實現從預設頁跳到使用者設定的自訂頁，如果頁面本身就是自訂頁便會造成**循環跳轉**。

:::
