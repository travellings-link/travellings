
# 加入开往

## 1. 您的网页应满足

- 愿为开放的网络做出贡献（如乐于分享知识经验等）；
- 禁止采集站内容农场（对多站点聚合，源站不提供的数据进行统计不在此列。博客网站如果可以在搜索引擎中搜到很多相同的内容可能会被判定为“内容农场”。）；
- 禁止网站（尤其是博客网站）的文章包含如下内容：
  - 包含色情、暴力、血腥、低俗、引战等引人不适的内容
  - 包含辱骂、挑衅、诽谤、反动等违反法律法规的内容
  - 包含其它维护组成员认为的不适宜内容
- 正常更新维护中（国内无法正常访问会被移除）；
- 网页已有较多内容（应有20篇文章**或**10篇原创文章，需要已持续更新两个月以上，更新时间自博客第一篇内容时间开始算起）；
- 强制启用 https 。

引导页、个人主页、导航站等非博客网站也可以申请加入开往（在 Q&A 中有强调）。如果引导页有链接到博客子站，则需要博客符合上述的标准。个人主页的单页网站有很大可能会因为内容不丰富被驳回，建议用多个页面详细介绍。导航站视具体情况而定。

要求中的“网站已有较多内容”因为删库等非正常情况的存在一般情况下不会将未满足文章数量要求的成员删除。

开往鼓励规范转载，但不会对存在不规范转载现象的成员网站采取除提醒之外的任何措施。

加入开往的申请提交之后，我们会观察您的网站至少一个月，以确保您的网站稳定。算上申请时需要的已更新两个月，在初审时，您的网站需要至少持续更新三个月。

对于存在不适宜内容的成员网站，任何人都可以向我们反馈。

## 2. 将开往放到您网页**打开后就能看到的地方**（让友链接力下去）

- 💥 **重要**： 由于[不可抗的原因](https://github.com/travellings-link/travellings/issues/566)，请尽快将您网页 Travelling 指向的域名（包括图片素材），从 `https://travellings.now.sh` 更新为 `https://www.travellings.cn/go.html` 。

- **最佳实践**：将 `开往` 的外链（`https://www.travellings.cn/go.html`）放置在**打开后就能看到的地方**：
  - 如是英文导航，可使用 `Travelling` （而非 Travelling**s**）；
  - 如需 Font Awesome ，推荐 `fa-subway` （[点我预览](https://fontawesome.com/icons/subway?style=solid)，其他图标库可选火车地铁相关的图标，其次可选火箭飞船图标；**不**再推荐纸飞机图标，易与 Telegram 混淆）；
  - 如需 Emoji，推荐 `🚇`；
- **额外可选**：将开往的徽标放到您的底部或其他位置，表示对开往的支持：
  - 动图 GIF：`https://www.travellings.cn/assets/logo.gif`
  - 深色 PNG：`https://www.travellings.cn/assets/b.png`
  - 浅色 PNG：`https://www.travellings.cn/assets/w.png`
  - 方形 PNG：`https://www.travellings.cn/assets/travelling.png`
  - 方深 PNG：`https://www.travellings.cn/assets/travelling-dark.png`
  - 方浅 PNG：`https://www.travellings.cn/assets/travelling-light.png`
  - 矢量 SVG：`https://www.travellings.cn/assets/logo.svg`
  - 全部图片素材：可查阅`assets` 文件夹。
  - 💡 参考代码：（logo.gif 可替换为上方的其他图片，以适应您的网页主题；width 可限制图片的大小，让徽标看起来更合适。）
  - 🚀 CDN加速：如以上图片素材加载缓慢，可将链接中的 `https://www.travellings.cn/assets/` 替换为 `https://cdn.jsdelivr.net/gh/travellings-link/travellings/assets/` （已经有国内CDN加速了，加载速度应该不会太慢吧？）。

``` bash
<a href="https://www.travellings.cn/go.html" target="_blank" rel="noopener" title="开往-友链接力">
    <img src="https://www.travellings.cn/assets/logo.gif" alt="开往-友链接力" width="120">
</a>
```

【💡 示例】
![example1](https://www.travellings.cn/assets/example1.png)
![example2](https://www.travellings.cn/assets/example2.png)

## 3. 提个 issue，等待审核通过

我们至少会在每周周末处理您的issue，如您的站点观察期超过1个月，可以在@审核团队。

💡 常见的可能导致审核失败的原因与解决方案：

⛔ 把开往放到了默认收起的的菜单中

✅ 推荐放在打开网页就能看到的地方，便于访客看到并点击；

⛔ 网页没有启用 https

✅ 开启强制 https（有很多免费的途径，如面板一键开启等）；

⛔ 网页上的内容过少，如博文只有几篇

✅ 内容更新充盈后再来申请试试，参见开往对博客网站文章数量和内容的要求。

## 参与项目

如果你对我们跳转页的样式不满意，欢迎你提交新的样式，只需几步，即可自定义你的样式!

> 1.涉及到的所有的图片必须为SVG
>
> 2.必须为单页html，如有css可以写入html头
>
> 3.底部包含开往备案号
>
> 4.设计精美
>
> 5.提个PR至static文件夹下 @travellings-link/it

:::tip

如果你是新手，可以在static/libraries/classic.html的模板上进行修改！

:::
