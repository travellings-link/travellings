# Join the Travellings project

## 1. Your page should meet these requirements:

- Want to contribute to open networks (e.g. willing to share knowledge experiences, etc.)
- **Scraper sites and content farms are strictly forbidden.** (Websites that combining multiple sources, or providing statistics on data not provided by the source are excepted from this restriction.A blog site might be treated as a "content farm" if multiple same content can be found in search results.)
- 没有违法违规和影响访问体验的内容（如侵入式广告）
- 正常访问中（以巡查机器人是否可访问和人工巡查时域名未过期未脱离原先主体为准）
- 网页已有较多内容（应有 20 篇文章**或** 10 篇原创文章，需要网站已创办两个月以上，更新时间自博客第一篇内容时间开始算起）
- 对于博客网站，**推荐**能做到不定期或定期更新博文（半年及以上不更新博文的成员被人工审查后将被通知，非强制）
- Force enable HTTPS, **recommeneded** to enable HSTS.

:::info Info

- 引导页、个人主页、导航站等非博客网站也可以申请加入开往（在 Q\&A 中有强调）
- 如果引导页有链接到博客子站，则需要博客符合上述的标准
- 个人主页的单页网站有很大可能会因为内容不丰富被驳回，建议用多个页面详细介绍。导航站视具体情况而定
- 对于一个独立域名下申请加入开往的不同网站，如果它们的内容相似**或**类型相同，则通过其中一个网站，或者将它们的引导页收录到开往
- 要求中的“网站已有较多内容”因为删库等非正常情况的存在一般情况下不会将未满足文章数量要求的成员删除
- 对于长期处于内容较少状态的成员网站，维护组成员可以经组内讨论并通知站长，等待 1 个月后删除
- 开往鼓励规范转载
- 对于存在不适宜内容的成员网站，任何人都可以向我们反馈

:::

## 2. Put the Travelling link on your web page **where it can be clearly seen when opened your page**. (to pass the link on)

:::warning Important

由于[不可抗的原因](https://github.com/travellings-link/travellings/issues/566)，请尽快将您网页 Travelling 指向的域名（包括图片素材），从 `https://travellings.now.sh` 更新为 `https://www.travellings.cn/go.html` 。

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
  - 方浅 PNG：`https://www.travellings.cn/assets/travelling-light.png`
  - Vector SVG: `https://www.travellings.cn/assets/logo.svg`
  - 全部图片素材：可查阅`assets` 文件夹。
  - 💡 参考代码：（logo.gif 可替换为上方的其他图片，以适应您的网页主题；width 可限制图片的大小，让徽标看起来更合适。）
  - 🚀 CDN 加速：如以上图片素材加载缓慢，可将链接中的 `https://www.travellings.cn/assets/` 替换为 `https://cdn.jsdelivr.net/gh/travellings-link/travellings/assets/` （已经有国内 CDN 加速了，加载速度应该不会太慢吧？）。

```html
<a href="https://www.travellings.cn/go.html" target="_blank" rel="noopener" title="开往-友链接力">
    <img src="https://www.travellings.cn/assets/logo.gif" alt="开往-友链接力" width="120">
</a>
```

:::info 示例

![example1](https://www.travellings.cn/assets/example1.png)
![example2](https://www.travellings.cn/assets/example2.png)

:::

## 3. Create an issue, then wait for approval

[Go to GitHub Issues page](https://github.com/travellings-link/travellings/issues)

我们至少会在每周周末处理您的 Issue，如您的加入申请超过 1 个月还未审核，可以 @ 最近活跃的维护组成员或通过其它我们已经公示的联系渠道联系。

💡 常见的可能导致审核失败的原因与解决方案：

⛔ 把开往放到了默认收起的的菜单中

✅ 推荐放在打开网页就能看到的地方，便于访客看到并点击；

⛔ 网页没有启用 https

✅ 开启强制 https（有很多免费的途径，如面板一键开启等）；

⛔ 网页上的内容过少，如博文只有几篇

✅ 内容更新充盈后再来申请试试，参见开往对博客网站文章数量和内容的要求。

## 参与项目

如果你对我们跳转页的样式不满意，欢迎你在 `public` 文件夹中提交新的样式，只需几步，即可自定义你的样式!

> 1. 涉及到的所有的图片必须为 SVG
>
> 2. 必须为单页 html，如有 css 可以写入 html 头，JS 库请使用外部公共 CDN
>
> 3. 底部包含开往备案号 和 指向 [开往偏好设置](https://www.travellings.cn/preference) 的链接
>
> 4. 嵌入 `https://www.travellings.cn/assets/js/go.js` 可直接实现跳转逻辑，并自动使用用户的偏好设置
>
> 5. 设计精美/有创意
>
> 6. 请一并修改 [其他页面一览](https://www.travellings.cn/docs/pages)，加入你的页面描述和截图
>
> 7. 请一并修改 **开往偏好设置** （位于 `.vitepress/theme/components/Preferences.vue`），将你的自定义页面加入到设置菜单中（位于第 `34` 行）
>
> 8. 提个 Pull Request，并 @ 最近活跃的开往维护组成员

:::tip

如果你是新手，可以在原有跳转页的基础上进行修改\~

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

以上代码用于实现从默认页跳转到用户设置的自定义页，如果页面本身就是自定义页便会造成**循环跳转**。

:::
