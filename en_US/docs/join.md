# Join the Travellings project

## 1. Your page should meet these requirements:

- Want to contribute to open networks (e.g. willing to share knowledge experiences, etc.)
- **Scraper sites and content farms are strictly forbidden.** (Websites that combining multiple sources, or providing statistics on data not provided by the source are excepted from this restriction.A blog site might be treated as a "content farm" if multiple same content can be found in search results.)InfoA single-page website for a personal homepage is likely to be rejected because of inadequate content, and it is suggested to utilize several pages for a comprehensive presentation.The web navigation website is subject to specific circumstances.
- No content that breaches laws and regulations, or impairs user experience (e. g. intrusive ads) is present.
- Normal Access(Whether the inspection robot can access and if the domain name has not been transferred from its original registrant inspections shall be the determining factor.)
- The webpage already contains a substantial amount of content(The requirement is to have either 20 articles **or** 10 original pieces, and the site must have been in operation for over two months, with the updating timeline starting from the date of the first content published on the blog.)
- For blog sites, it’s **advisable to** maintain an updating schedule that can accommodate both sporadic and regular posting of articles(Members who haven’t updated their blog posts for six months or more will be subject to a manual review and subsequently notified; however, this action is non-coercive.).
- Force enable HTTPS, **recommended** to enable HSTS.

:::info Info

- Landing pages, personal homepages, and web navigation website are eligible to apply for inclusion in Travellings.(as highlighted in the Q\&A session)
- If there are links on the landing pages directing to blog subdomains, the blog must adhere to the aforementioned standards.
- A single-page website for a personal homepage is likely to be rejected because of inadequate content, and it is suggested to utilize several pages for a comprehensive presentation.The web navigation website is subject to specific circumstances.
- For different websites applying to join the Travellings under the same independent domain, if their content is similar or they belong to the same category, only one of these sites will be admitted, or their landing pages will be consolidated and listed within the Travellings.
- Owing to the presence of exceptional circumstances like database deletion, under regular conditions, members who have not fulfilled the required volume of articles will not be removed based on the provision that ‘The webpage already contains a substantial amount of content’.
- In the case of member websites with consistently sparse content over a prolonged duration, the maintenance team members can initiate internal discussions and inform the site administrator, subsequently scheduling deletion of the website after a one-month grace period.
- Travellings promoting regulated reposting
- Anyone can report to us concerning member websites that contain inappropriate content.

:::

## 2. Put the Travelling link on your web page **where it can be clearly seen when opened your page**. (to pass the link on)

:::warning Important

Due to [force majeure reasons](https://github.com/travellings-link/travellings/issues/566), please change the domain name (including image materials) pointed to by your webpage Traveling from `https://travellings. now.sh` updated to `https://www.travellings.cn/go.html`.

:::

- **Best practice**: Place the `Travelling` link (`https://www.travellings.cn/go.html`) on the place that **can be easily seen when opening your page.**
  - For English navigation link, please use `Travelling` for reference (instead of Travelling**s**);
  - If you need Font Awesome icon, we suggest you to use `fa-subway` ([Preview link](https://fontawesome.com/icons/subway?style=solid). For other icon packs, you can choose train or subway related icons, and to a lesser extent, rocket ship icons. Paper plane icons are **no longer** recommended, as they are easily confused with Telegram.)
  - For Emoji, we recommend you to use `🚇`;
- **Extra & Optional:** Put the Travellings logo at the bottom of your page or somewhere else, to show your support for the Travellings project:
  - GIF: `https://www.travellings.cn/assets/logo.gif`
  - Dark PNG: `https://www.travellings.cn/assets/b.png`
  - Light PNG: `https://www.travellings.cn/assets/w.png`
  - Square (Transparent) PNG: `https://www.travellings.cn/assets/travelling.png`
  - Square (Dark) PNG: `https://www.travellings.cn/assets/travelling-dark.png`
  - Square (Light) PNG：`https://www.travellings.cn/assets/travelling-light.png`
  - Vector SVG: `https://www.travellings.cn/assets/logo.svg`
  - All picture materials: can be found in the `assets` folder.
  - 💡 Reference code: (logo.gif can be replaced with other images above to fit your web page theme; width can limit the size of the image to make the logo look more appropriate.)
  - 🚀 CDN acceleration: If the above image materials are slow to load, you can replace `https://www.travellings.cn/assets/` in the link with `https://cdn.jsdelivr.net/gh/travellings-link/ travellings/assets/` (It has been accelerated by domestic CDN, so the loading speed should not be too slow, right?).

```html
<a href="https://www.travellings.cn/go.html" target="_blank" rel="noopener" title="开往-友链接力">
    <img src="https://www.travellings.cn/assets/logo.gif" alt="开往-友链接力" width="120">
</a>
```

:::info Example

![example1](https://www.travellings.cn/assets/example1.png)
![example2](https://www.travellings.cn/assets/example2.png)

:::

## 3. Create an issue, then wait for approval

[Go to GitHub Issues page](https://github.com/travellings-link/travellings/issues)

We guarantee to handle your Issues, on a weekly basis at minimum over the weekend. Should your membership application remain unprocessed for over a month, feel free to mention (@) the most currently active maintenance group members or reach out via alternative communication channels that we have officially made known.

💡 Common reasons that may lead to review failure and corresponding solutions ：

⛔ Put ‘Travellings’ in the default minimized menu.\
✅ We recommend placing the ‘Travellings’ button/link in a location that’s visible as soon as the website loads, so that visitors can easily see and click on it;

⛔ The website has not enabled HTTPS\
✅ Enable Forced HTTPS (There are many free options available, such as ZeroSSL, Let's Encrypt, among others.);

⛔ 网页上的内容过少，如博文只有几篇\
✅ 内容更新充盈后再来申请试试，参见开往对博客网站文章数量和内容的要求。

## Participate in the project

If you are not satisfied with the style of our redirect page, feel free to submit new styles within the `public` folder. With just a few simple steps, you can customize your own styles!

> 1. All images involved must be in SVG format.
> 2. The page must be a single-page HTML; any CSS can be embedded directly into the HTML `<head>` section; and for JavaScript libraries, please ensure they are loaded via external public CDN.
> 3. It should include the ICP number of Travellings, and a link to the [Preferences](https://www.travellings.cn/preference) at the bottom of the page.
> 4. Embed `https://www.travellings.cn/assets/js/go.js` to directly implement jump logic and automatically use user preferences
> 5. Beautifully designed/creative
> 6. Please modify [List of other pages](https://www.travellings.cn/docs/pages) and add your page description and screenshots
> 7. Please modify **Go to Preferences** (located at `.vitepress/theme/components/Preferences.vue`) and add your custom page to the settings menu (located at line `34`)
> 8. Submit a Pull Request and @ the most recently active member of the maintenance team

:::tip

If you are a novice, you can modify it based on the original jump page~

:::

::: warning

If you make changes based on the default `go.html`, please **delete the following code** in the `<head>` tag **first**.

```html
<script>
    const customPage = localStorage.getItem("t_preference_page");
    if (customPage) {
        location.href = "./" + customPage;
    }
</script>
```

The above code is used to jump from the default page to the custom page set by the user. If the page itself is a custom page, it will cause a **jump-loop**.

:::
