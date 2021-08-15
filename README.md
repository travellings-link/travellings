# 开往-友链接力 1.2

> 一群狼走得远……

想法来自 https://github.com/XXIIVV/webring

> 💥 **重要**： 由于不可抗的原因，请尽快将您网站 Travelling 指向的域名（包括图片素材），从 `https://travellings.now.sh` 更新为 `https://travellings.link` 。[点此赞助](http://afdian.net/@volfclub)，为新域名续费（请选 Travellings Sponsors）。

> 🔔 **留意**： 如您在用 Font Awesome ，推荐将开往更换为 `fa-subway` （[点我预览](https://fontawesome.com/icons/subway?style=solid)，其他图标库可选火车地铁相关的图标，其次可选火箭飞船图标；**不**再推荐纸飞机图标，易与 Telegram 混淆）；如需 Emoji，推荐 `🚇`。logo  徽标素材已更新，如您自行托管了徽标，可在 assets 文件夹里找到新的版本。

> ☕ **感谢**：特别感谢 @LEORChn @caibingcheng @ljcbaby ，反馈了一些存在问题的网站 —— 均已处理。

## 使用说明

“开往”取自“开放的网络”。将开往放入您的网页，表示您乐于分享并支持开放的网络。

每当有用户访问加入开往的网页时，点击开往后会**随机跳转**到另一个加入开往的网页。加入开往的网页越多，友链接力的规模越大，分享流量的规模也越大。

“ 网页E → 开往 → 网页X → 开往 → 网页A → 开往 → 网页M → 开往 → 网页P → 开往 → 网页L → 开往 → 网页E … ”

![example](https://travellings.link/assets/logo.gif)

> ✨ 新 logo 灵感：代表“世界”的星环 + 代表“穿梭”的列车 —— 相信你听到“开往”这个词最多的时候一定是在列车上，“由 xx 开往 xx 的列车……”。

---

### 1. 您的网页应满足：

- 愿为开放的网络做出贡献（如乐于分享知识经验等）；
- 没有违法以及影响体验的内容（如侵入式广告等）；
- 正常更新维护中（国内无法正常访问会被移除）；
- 网页已有较多内容（建议已更新半年以上）；
- 强制启用 https 。

### 2. 将开往放到您网页**打开后就能看到的地方**（让友链接力下去）：

- **最佳实践**：将 `开往` 的外链（`https://travellings.link`），加入您的**顶栏**导航或**侧栏**导航中，**便于访客看到并点击**：
  - 如是英文导航，可使用 `Travelling` （而非 Travelling**s**）；
  - 如需 Font Awesome ，推荐 `fa-subway` （[点我预览](https://fontawesome.com/icons/subway?style=solid)，其他图标库可选火车地铁相关的图标，其次可选火箭飞船图标；**不**再推荐纸飞机图标，易与 Telegram 混淆）；
  - 如需 Emoji，推荐 `🚇`；
- **额外可选**：将开往的徽标放到您的底部或其他位置，表示对开往的支持：
  - 动图 GIF：`https://travellings.link/assets/logo.gif`
  - 深色 PNG：`https://travellings.link/assets/b.png`
  - 浅色 PNG：`https://travellings.link/assets/w.png`
  - 方形 PNG：`https://travellings.link/assets/travelling.png`
  - 方深 PNG：`https://travellings.link/assets/travelling-dark.png`
  - 方浅 PNG：`https://travellings.link/assets/travelling-light.png`
  - 矢量 SVG：`https://travellings.link/assets/logo.svg`
  - 💡 参考代码：（logo.gif 可替换为上方的其他图片，以适应您的网页主题；width 可限制图片的大小，让徽标看起来更合适。）
  - 🚀 CDN加速：如以上图片素材加载缓慢，可将链接中的 `https://travellings.link/assets/` 替换为 `https://cdn.jsdelivr.net/gh/volfclub/travellings@12.0/assets/` 。

```
<a href="https://travellings.link/" target="_blank" rel="noopener" title="开往-友链接力">
    <img src="https://travellings.link/assets/logo.gif" alt="开往-友链接力" width="120">
</a>
```

- 简易方案：将上方的代码插到您网页打开后就能看到的地方，如顶栏侧栏。

【💡 举个例子】

- 顶部放置开往外链（必要），侧栏放置开往徽标（可选）；

![example1](https://travellings.link/assets/example1.png)

- 侧栏放置开往外链（必要），底部放置开往的徽标（可选）；

![example2](https://travellings.link/assets/example2.png)

### 3. 提个 issue，等待审核通过（每月维护一次左右）。

💡 常见的可能导致审核失败的原因：

- ⛔ 只在网页底部放置开往，或把开往放到了默认收起的的菜单中 —— ✅ 推荐放在顶栏侧栏等打开网页就能看到的地方，便于访客看到并点击；
- ⛔ 网页没有启用 https —— ✅ 开启强制 https（有很多免费的途径，如面板一键开启，静态网页可试试 Vercel 托管等）；
- ⛔ 网页上的内容过少，如博文只有几篇 —— ✅ 内容更新充盈后再来申请试试。

---

### ~~ 无缝接力 β ~~

~~可用 jsdelivr 加速，中间无开往跳转页。~~

> 🚨 不再推荐，可能更新不及时。

```
<head>
<script src="https://cdn.jsdelivr.net/gh/volfclub/travellings/assets/travelling.min.js"></script>
</head>
<body>
<a href="javascript:travelling()" title="开往-友链接力"><img src="https://cdn.jsdelivr.net/gh/volfclub/travellings/assets/logo.gif" alt="开往-友链接力" width="120"></a>
</body>
```

### 可选镜像

- `https://volfclub.github.io/travellings`

- `https://travellings.pages.dev`

- `https://travellings.netlify.com`

- [不推荐](https://www.vercel-status.com/incidents/r758bhbklgfd) `https://travellings.vercel.app`

---

## 网页收录 ✅

当打开网页无法直接看到徽标或外链时，有 * 标记。

| 序号 | 位置 | 名称 | 网址 |
| --- | --- | --- | --- |
| 0 | 缺省 | 开往 | https://github.com/volfclub/travelling |
| 1 | 侧栏 | 狼牌工作网址导航 | https://www.volf.club |
| 2 | 侧栏 | 音速装机 | https://sonic.volf.club |
| 3 | 顶栏 | 原谅糖 | https://yltang.cn |
| 4 | 底栏* | Barkure | https://guguga.cn |
| 6 | 底部* | Yamdr | https://www.yamdr.cn |
| 7 | 侧栏* | Arect和他的 | https://www.kanofans.com |
| 8 | 底栏* | Ryan Wang's Blog | https://ryanc.cc |
| 9 | 顶栏 | Seija | https://seija.me |
| 10 | 收起侧栏* | 致远博客 | https://blog.uniartisan.com |
| 11 | 顶栏 | JQM's Site | https://jinqimu.github.io |
| 12 | 中心 | CrownDaisy | https://crowndaisy.com |
| 13 | 底栏* | 殆己 | https://heycmm.cn |
| 15 | 顶栏 | Legroft | https://jinjis.cn |
| 16 | 侧栏 | FANTASY | https://blog.tigerxly.com |
| 17 | 侧栏 | DIego's Blog | http://blog.diego.plus:5800 |
| 18 | 顶栏 | 果子小酱 | https://sublimerui.top |
| 19 | 顶栏 | Sakura | https://cwxyr.me |
| 22 | 顶栏 | 五叶魔法书 | https://grimoire.cn |
| 23 | 侧栏 | 风渐远 | https://www.naraku.cn |
| 24 | 顶部 | XiYo吧 | https://www.xiyo8.cn |
| 25 | 侧栏 | 锴 | https://www.wangkai88.com |
| 26 | 侧栏 | Zeruns's Blog | https://blog.zeruns.tech |
| 27 | 顶栏 | Guqing's Blog | https://guqing.xyz |
| 29 | 侧栏 | 非礼勿言 | https://feiliwuyan.com |
| 30 | 侧栏 | 星云C馆 | https://www.m78.co |
| 31 | 顶栏 | Cheung | https://icheung.net |
| 32 | 侧栏 | 雁陎的自耕地 | https://www.sitstars.com |
| 33 | 顶栏 | 阿猫阿狗 | https://ionssource.cn |
| 35 | 侧栏 | 风也温柔 | https://blog.kaygb.com |
| 36 | 侧栏* | 云游君的小站 | https://www.yunyoujun.cn |
| 38 | 顶部 | Eltrac's Track | https://blog.guhub.cn |
| 39 | 侧栏 | yuaneuro的博客 | https://yuaneuro.cn |
| 41 | 顶栏 | krau'blog | https://krau.top |
| 42 | 侧栏 | Weifeng's Blog | https://wfblog.net |
| 45 | 顶部 | ajian | https://blog.yegetables.cn |
| 46 | 侧栏* | freejishu的美丽世界 | https://www.freejishu.com |
| 47 | 侧栏* | 小太の游乐园 | https://baka.fun |
| 48 | 顶栏 | Zhou‘s Blog | https://idream.ink |
| 49 | 侧栏 | 地皮-DefiedParty | https://dpii.club |
| 50 | 侧栏* | CORE | https://core.moe |
| 53 | 顶栏 | Lin. 's Blog | https://www.lin03.cn |
| 56 | 侧栏 | TigerRoot | https://blog.tigerroot.cn |
| 57 | 顶栏 | 蝶恋花 | https://kylin.dev |
| 59 | 顶栏 | Pluveto | https://www.pluvet.com |
| 61 | 侧栏 | 艺术长廊 | https://www.6zgm.com |
| 64 | 顶栏 | Ojhdt's Blog | https://blog.ojhdt.com |
| 65 | 顶栏 | 萌豚 Moechu | https://moechu.cn |
| 66 | 侧栏 | ncc的个人网站 | https://www.zqcnc.cn |
| 67 | 中心 | 刀客 | https://blog.mboker.cn |
| 70 | 顶栏 | 及时行乐 | https://www.jsxlo.com |
| 71 | 顶栏 | iSwl's Blog | https://blog.iswl.vip |
| 74 | 顶栏 | 顾盼の记事本 | https://gupan.site |
| 75 | 侧栏 | 爆胎的博客 | https://www.itggg.cn |
| 76 | 中心 | 花开陌上 | https://moshanghua.net |
| 77 | 顶栏 | 炎忍的博客 | https://blog.imyan.ren |
| 78 | 顶栏 | 青行三の个人博客 | https://blog.jiehua1995.xyz |
| 79 | 顶栏 | 有次博客 | https://you.ci |
| 81 | 顶栏 | SkyWT | https://skywt.cn |
| 82 | 底部 | 执手对影成双 | https://www.lipk.org |
| 83 | 顶部 | MySpace | https://www.zkl2333.com |
| 84 | 侧栏 | 皮毛技术君 | https://www.whoit.top |
| 85 | 顶栏 | Passer | https://takuron.top |
| 87 | 侧栏 | 山葵酱 | https://www.wasabi.fun |
| 88 | 顶栏 | Ying | https://blog.luvying.com |
| 89 | 侧栏 | 风之暇想 | https://www.fzxx.xyz |
| 90 | 顶栏 | 今今今生 | https://noheart.cn |
| 91 | 顶栏 | ADD-SP‘s Blog | https://www.addesp.com |
| 92 | 侧栏 | 游轶的小站 | https://blog.devyi.com |
| 93 | 顶栏 | MHuiG's Blog | https://blog.mhuig.top |
| 94 | 顶栏 | JalenChuh | https://blog.jalenchuh.cn |
| 95 | 顶栏 | LiuYun | https://blog.6yfz.cn |
| 96 | 顶栏 | Geek Era | https://www.geekera.cn |
| 98 | 顶栏 | Oo笑容太甜oO | https://kissbaofish.cn |
| 99 | 顶栏 | F君的博客 | https://blog.fkun.tech |


| 序号 | 位置 | 名称 | 网址 |
| --- | --- | --- | --- |
| 101 | 底栏 | Chr_小屋 | https://blog.chrxw.com |
| 103 | 顶栏 | tabris的遥远星系 | https://www.tabirstrees.top |
| 105 | 侧栏* | 螓首蛾眉 | https://jsun969.cn |
| 106 | 顶栏 | 服务猿's 学习笔记 | https://www.ishells.cn |
| 107 | 顶栏 | 尼采般地抒情 | https://www.wztlink1013.com |
| 108 | 顶栏 | Zkpeace | https://zkpeace.com |
| 111 | 侧栏* | Guang's blog | https://code016.com |
| 112 | 顶栏 | 挨拍的儿 | https://jimmyqin.cn |
| 116 |  中心 | Guyi’s Blog | https://www.y2jq.com |
| 117 | 顶栏 | 七米蓝 | https://www.chirmyram.top |
| 120 | 顶栏 | MZRME‘S | https://mzrme.com |
| 121 | 中心 | 归舟棹远 | https://www.tanknee.cn |
| 122 | 顶栏 | 人家故里 | https://fx7.top |
| 123 | 顶栏 | 丁丁の店 | https://blog.butanediol.me |
| 124 | 顶栏 | 饿龙不是龙哩 | https://loafing.cn |
| 125 | 侧栏 | 低调阁 | https://www.ddg.ink |
| 126 | 侧栏 | SWJ | https://blog.zggsong.cn |
| 127 | 顶栏 | Sanarous's Blog | https://bestzuo.cn |
| 128 | 顶栏 | HandSonic‘s Blog | https://handsonic.top |
| 130 | 顶栏 | Sorryfu | https://fushaolei.github.io |
| 131 | 侧栏 | TAOG's Blog | https://iktao.cn |
| 132 | 顶栏 | 静かな森 | https://innei.ren |
| 133 | 中心 | 杜老师说 | https://dusays.com |
| 134 | 顶部 | 独人欣赏 | https://www.wangyusong.cn |
| 135 | 顶部 | zcmimi's blog | https://blog.zcmimi.top |
| 136 | 侧栏 | TF的博客 | https://blog.tengfei.website |
| 137 | 侧栏 | 简兮小站 | https://www.zk1220.com |
| 139 | 侧栏 | Colsrch'Blog | https://colsrch.cn |
| 140 | 中心 | AzuSemisa's Blog | https://azusemisa.top |
| 142 | 顶栏 | 倚栏听风 | https://www.yilantingfeng.site |
| 143 | 侧栏 | Xu's Blog | https://hasaik.com |
| 144 | 侧栏 | 優萌初華 | https://shoka.lostyu.me |
| 145 | 顶栏 | MES | https://rain.moimo.me |
| 146 | 顶栏 | ZigZagK的博客 | https://zigzagk.top |
| 147 | 侧栏 | JsOnGmAX-博客 | https://jsongx.com |
| 148 | 顶栏 | Kiritoghy's Blog | https://www.kiritoghy.cn |
| 149 | 顶栏 | BORBER | https://www.cnblogs.com/borber |
| 151 | 顶栏 | 若非 | https://loafing.cn |
| 155 | 顶栏 | 不淡定的实验室 | https://xd.sh.cn |
| 156 | 侧栏 | Micah | https://realmicah.xyz |
| 157 | 顶栏 | 提莫酱的博客 | https://www.timochan.cn |
| 158 | 顶部 | COOL | https://www.coolku.cc |
| 159 | 侧栏 | 夏日鱼塘 | https://www.summerpond.cn |
| 160 | 侧栏 | 异国迷宫的十字路口 | https://blog.fivezha.cn |
| 162 | 顶栏 | 可定博客 | https://wnag.com.cn |
| 163 | 中心 | 新漫猫 | https://www.acg19.top |
| 164 | 顶栏 | Paddylin的博客 | https://www.paddylin.top |
| 165 | 顶栏 | 小孔成像 | https://kurumit3.top |
| 166 | 顶栏 | Lime Network Blog | https://blog.limecho.net |
| 167 | 顶栏 | Panedioic's blog | https://blog.pppane.com |
| 171 | 顶栏 | 大海的页面 | https://ccccc.cyou |
| 172 | 顶栏 | 56Kb/s | https://www.funix.cn |
| 173 | 顶栏 | 林克的编程小记 | https://www.codinglink.tech |
| 174 | 顶栏 | BD的小窝 | https://www.bluesdawn.top |
| 175 | 顶栏 | LBTSTO自由商店 | https://www.libertystore.one |
| 176 | 顶栏 | ChenYFanの博客 | https://blog.cyfan.top |
| 178 | 顶栏 | 江风引雨の小站 | https://blog.luzy.top |
| 179 | 中心 | 睿先森 | https://senorui.top |
| 180 | 顶栏 | 神州部落格 | https://www.szfc13.cn |
| 181 | 顶栏 | Declan's Blog | https://blog.lihaojin.cn |
| 182 | 侧栏 | 鲸一 | https://www.saroin.com |
| 183 | 顶栏* | JaneWu's Blog | https://zhenwu99.gitee.io |
| 186 | 侧栏 | Johnson的博客 | https://johnsonlee.site |
| 187 | 顶栏 | LeeBlog | https://www.leejean.top |
| 189 | 顶栏 | 忆星辰 | https://www.extingstudio.com |
| 190 | 顶栏 | YunShu'Blog | https://www.yunshu.site |
| 192 | 顶栏 | 小康的个人主页 | https://xiaokang.me |
| 193 | 顶栏 | 威廉伯爵 | https://megatontech.github.io |
| 194 | 顶栏 | hewith他和她 | https://heshun.run |
| 195 | 顶栏 | Huiris's Log | https://huiris.com |
| 196 | 顶栏 | iVampireSP的物语 | https://ivampiresp.com |
| 197 | 中心 | UTOPIA | https://ishya.top |
| 198 | 侧栏 | MBR的博客 | https://blog.mbrjun.cn |

| 序号 | 位置 | 名称 | 网址 |
| --- | --- | --- | --- |
| 200 | 顶栏 | 阿成儿Online | https://youdef.com |
| 201 | 顶栏 | 黑石博客 | https://www.heson10.com |
| 202 | 中心 | 云帆沧海 | https://yunfanch.com |
| 204 | 侧栏 | 飞刀博客 | https://www.feidaoboke.com |
| 205 | 顶栏 | 优速VPSUR测评 | https://vpsur.com |
| 206 | 侧栏 | 野肆的生活分享 | https://yexsi.com |
| 208 | 顶栏 | Juch 的导航 | https://vmert.com |
| 209 | 顶栏 | Openwit启智 | https://openwit.net |
| 210 | 中心 | The F Word | https://fiammanda.github.io |
| 211 | 顶栏 | Re Life | https://www.xiangshu233.cn |
| 212 | 顶栏 | qinxs小站 | https://7bxing.com |
| 213 | 顶栏 | 鱼跃此时海 | https://www.overme.cn |
| 214 | 侧栏 | Vinking的小站 | https://vinking.top |
| 215 | 顶栏 | MineCraft爱好者 | https://www.mmcee.cn |
| 216 | 顶栏 | anonymous's blog | https://www.wenbin.org.cn |
| 217 | 侧栏 | 阿方的博客 | https://fang.blog.miri.site |
| 218 | 侧栏* | 见字如面 | https://hiwannz.com |
| 219 | 顶栏 | 徐泽林的博客 | https://www.zlinblog.cn |
| 220 | 顶栏 | RhythmLian's Blog | https://rhythmlian.cn |
| 221 | 侧栏 | alpaca++ | https://alpaca.plus |
| 222 | 顶栏 | 越行勤‘s Blog | https://yingwiki.top |
| 223 | 侧栏 | 云生博客 | https://qikaile.tk |
| 224 | 中心 | Funs Life | https://funs.life |
| 225 | 中心 | 听得入迷空间 | https://www.tdrme.cn |
| 226 | 顶栏 | hongCYu's Blog | https://hongcyu.cn |
| 227 | 顶栏 | nEo | https://neo00.top |
| 229 | 顶栏 | TomyJan的博客 | https://blog.tomys.top |
| 230 | 顶栏 | 一点快乐 | https://www.yidiankuaile.com |
| 231 | 侧栏 | 白日梦研究所 | https://blog.angustar.com |
| 232 | 侧栏 | 十二博客 | https://blog.shiertx.com |
| 233 | 侧栏 | MoYi's Blog | https://blog.nekomoyi.com |
| 234 | 顶栏 | Troy & Chloe | https://www.yotroy.cool |
| 236 | 顶栏 | 林中小屋 | https://imszz.com |
| 238 | 顶栏 | Ender's Blog | https://ender.fun |
| 239 | 顶栏 | 拾忆小站 | https://www.syzhan.cn |
| 240 | 顶栏 | 嚣张的灯塔 | https://www.liuzhimin.vip |
| 241 | 顶栏 | W4J1e's blog | https://www.hin.cool |
| 242 | 侧栏 | 轻风记 | https://www.3328bk.cn |
| 243 | 中心 | Ganto的个人主页 | https://www.ganto.cn |
| 244 | 顶栏 | Weidows の Nest | https://weidows.github.io |
| 245 | 顶栏 | Magma Ink | https://magma.ink |
| 246 | 顶栏 | 幼稚园园长 |https://yzyyz.top |
| 247 | 中心 | 飞云师兄的主页 | www.idasx.com |
| 248 | 侧栏 | Xecades's Blog | https://blog.xecades.xyz |
| 249 | 顶栏 | Amos‘blog | https://blog.amoswu.cn |
| 250 | 侧栏 | Mr_God's Note | https://www.mrgod.cn |
| 251 | 顶栏 | 月光中的污点 | https://www.extlight.com |
| 252 | 顶栏 | Sekiro's Blog | https://666wxy666.github.io |
| 253 | 侧栏 | Err0r | https://err0r.top |
| 254 | 顶栏 | 余生 ' Blog | https://www.ysazw.cn |
| 255 | 顶栏 | 墨染 の 博客 | https://www.roaing.com |
| 256 | 顶栏 | 萌！萝莉 | https://loliloli.moe |
| 257 | 顶栏 | 秉性之松 | https://blog.iucky.cn |
| 258 | 底部 | 7WATE`S Blog | https://blog.7wate.com |
| 259 | 顶栏 | 吴李曾 | https://www.wulinzeng.vip |
| 260 | 顶部 | 斯莫笔记 | https://notes.zhangxiaocai.cn |
| 261 | 侧栏 | 且听书吟 | https://yufan.me |
| 262 | 顶栏 | Tony's blog | https://www.tonylsl.top |
| 263 | 顶栏 | 科学ADV整合站 | https://sciadv.mcseekeri.top |
| 264 | 顶栏 | 御坂の地下室 | https://misakaloli.com |
| 265 | 顶栏 | Steve Li's Blog | https://blog.stevelbr.top |
| 266 | 顶栏 | 凌维三度 | https://www.fwder.cn |
| 267 | 侧栏 | 当神奇降临 | https://blog.toutop.cn |
| 268 | 侧栏 | Hi,ghostsf | https://ghostsf.com |
| 269 | 顶栏 | 小白 の 博客 | https://www.xiaobai666.top |
| 270 | 顶栏 | MoLeft's Blog | https://www.moleft.cn |
| 271 | 顶栏 | Crash-Logs | https://crash-logs.cn |
| 272 | 顶栏 | 空域 | https://blog.moeworld.tech |
| 273 | 底栏* | lzlz000 | https://blog.lzlz.site |
| 274 | 顶栏 | Sakurai Kaede's Blog | https://sakurai.in |
| 275 | 顶栏 | Beelake's blog | https://beelake.github.io |
| 277 | 底部 | Caviar-X的博客 | https://caviar-x.top |
| 278 | 顶栏 | 不可方思 | https://irr.ink |
| 279 | 侧栏 | Ljcbaby 的 网络小屋 | https://blog.ljcbaby.top |
| 280 | 顶栏 | Caveolae - 乔治 | https://www.flagg.cn |
| 281 | 顶栏 | 爱极客 | https://www.aigeek.top |
| 282 | 顶栏 | Fox Home | https://foolishfox.cn |
| 283 | 顶栏 | Jin Yuhan's Blog | https://jin-yuhan.github.io |
| 284 | 顶栏 | GOOPHER’s Blog | https://goopher.tk |
| 285 | 侧栏* | 颢天图文 | https://www.zouht.com |
| 286 | 顶栏 | 水嗷博客 | https://www.shuiao.top |
| 287 | 顶栏 | 探索子 | https://exploro.one |
| 288 | 侧栏 |  Java_S | https://syjun.vip |
| **289** | 顶栏 | RS-Nocsi--博客论坛 | https://www.rsnocsi.cn |
| 290 | 侧栏 | 肥虫汽水摊 | https://blog.bugcola.com/note |
| 291 | 侧栏 | Debug客栈 | https://www.debuginn.cn |
| 292 | 顶栏 | Lin's Blog | https://linzeyin.github.io |
| 293 | 顶栏 | 杰瑞日志 | https://blog.jerryiweb.com |
| 294 | 顶栏 | Fadai's Blog | https://www.niuwx.cn |
| 295 | 顶栏 | 帮开心 | https://www.bangkaixin.com |
| 296 | 顶栏 | 灰域行者的罐头盒 | https://hacbox.me |
| 297 | 顶栏 | 阈 | https://www.limina.top |
| 298 | 顶栏 | E=mc² | https://lxh2006.tk |
| 299 | 顶栏 | Foxhole | https://blog.southfox.tk |

| 序号 | 位置 | 名称 | 网址 |
| --- | --- | --- | --- |
| 300 | 顶栏 | Hello! I’m 中二病晚期 | https://imfurry.com |
| 301 | 侧栏* | 萌新杰少の秘密基地 | https://imcys.com |
| 302 | 顶栏 | 希望的博客 | https://xiwangly.top |
| 303 | 中心 | WishMeLz | https://blog.itsse.cn |
| 304 | 侧栏 | 凝雀 | https://blog.gatesx.cn |
| **305** | 侧栏* | 新加卷的小宇宙 | https://www.hzq.life |
| 306 | 侧栏 | CAYZLH | https://cayzlh.com |
| 307 | 侧栏 | 咖里De | https://blog.garryde.com |
| 308 | 顶栏 | 贼ㄨ船 | https://blog.thiefship.com |
| 309 | 顶栏 | Eritque arcus's blog | https://eritque-arcus.tech |
| 310 | 顶栏 | kirito41dd's blog | https://www.kirito41dd.cn | 
| 311 | 顶栏 | 墨泽 | https://blog.imzy.ink |
| 312 | 顶栏 | 见字如晤 | https://www.jianziruw.com |
| 313 | 顶栏 | 繁星小站 | https://www.moeor.com |
| 314 | 侧栏 | 听闻 | https://sangxuesheng.com |
| 315 | 侧栏 | 南风的博客 | https://www.nfxwblog.com |
| 316 | 顶栏 | 沐の空间 | https://muspace.top |
| 317 | 侧栏 | 0.0个人博客 | https://wangdabao.js.cool |
| 318 | 侧栏 | 小毅博客 | https://xeblog.cn |
| 319 | 顶栏 | 膨胀的面包 | https://blog.error.work |
| 320 | 顶栏 | 演员UyoAhz | https://uyoahz.cn |
| 321 | 顶栏 | 惜时如命 | https://iamazing.cn |
| 322 | 侧栏 | zisu.dev | https://zisu.dev |
| 323 | 顶栏 | Revincx的小破站 | https://blog.revincx.icu |
| 324 | 顶栏 | 东方幻梦 | https://blog.badapple.pro |
| 325 | 中心 | xuanzhi33的小站 | https://www.xuanzhi33.cn |
| 326 | 顶部 | Xzy® Homepage | https://xzy.one |
| 327 | 侧栏 | 星路博客 | https://www.ariels.xyz |
| 328 | 顶栏 | K'Blog | https://www.amazingk.cn |
| 329 | 侧栏 | 阿苏可の小博客 | https://asuko.icu |
| 330 | 顶栏 | Godapex | https://www.godapex.com |
| 331 | 顶栏 | GZTime's Blog | https://blog.gztime.cc |
| 332 | 顶栏 | TIR: Today I Read | https://tir.cool |
| 333 | 顶栏 | Sakura_Team | https://sakurasep.club |
| 334 | 顶栏 | HKK's Diary | https://ihkk.net |
| 336 | 顶栏 | BBing's Blog | https://bbing.com.cn |
| 337 | 顶栏 | 雨临Lewis的博客 | https://lewky.cn |
| 338 | 中心 | Cusalt! | https://cusalt.com |
| 339 | 顶栏 | 雨中的博客 | https://www.wenchong.space |
| 340 | 顶栏 | 陈鑫磊的博客 | https://www.cxl2020mc.top |
| 341 | 顶栏 | 冻符「Minus-K」 | https://www.kawashiros.club |
| 342 | 顶栏 | Laugh | https://blog.laugh12321.cn |
| 343 | 中心 | 小理的小窝 | https://xiaolii.com |
| 344 | 顶栏 | 996 worker's ICU | https://www.996workers.icu |
| 345 | 顶栏 | Moyok的小屋 | https://blog.moyok.xyz |
| 346 | 顶栏 | Hicool嗨酷 | https://www.hicool.icu |
| 347 | 侧栏 | 云梦 ╮不浅の部落阁 | https://blog.adworld.top |
| 348 | 顶栏 | 李本伟的博客 | https://blog.libw.cc |
| 349 | 顶栏 | Po7mn1's Blog | https://blog.icecliffs.cn |
| 350 | 顶栏 | 人人都是艺术家 | https://here.sy |
| 351 | 顶栏 | 求索日记 | https://shuxhan.com |
| 352 | 顶栏 | Hey,Joker | https://jokerdig.com |
| 353 | 顶栏 | Morcat Blog | https://www.morcat.cn |
| 354 | 中心 | ldo's blog | https://ldo.one |
| 355 | 顶栏 | KatCloud | https://katcloud.cn |
| 356 | 顶栏 | 温华的博客 | https://wangquanguo.life |
| 357 | 顶栏 | 进击的学霸的博客 | https://blog.lovem.fun | 
| 358 | 顶栏 | 森木志 | https://imxxz.cn |
| 359 | 顶栏 | Y7n05h 技术分享 | https://blog.y7n05h.xyz |
| 360 | 顶栏 | 晓果冻 | https://www.chenmx.net | 
| 361 | 顶栏 | 若志随笔 | https://www.rz.sb |
| 362 | 顶栏 | 初 x 见 | https://chuxjian.asia |
| 363 | 顶栏 | 城北徐公 | https://www.cbxg.icu |
| 364 | 顶栏 | 二丫讲梵 | https://wiki.eryajf.net |
| 365 | 顶栏 | liuliのsite | https://back2me.cn |
| 366 | 侧栏 | totoro & home | https://totoro.site |
| 367 | 侧栏 | Thun888 | https://blog.thun888.xyz |
| 368 | 侧栏 | Sakitami的集装箱 | https://blog.skihome.xyz |
| 369 | 顶栏 | CairBin's Blog | https://cairbin.top |
| 370 | 顶栏 | Savant's Blog |  https://blog.lxscloud.top | 
| 371 | 顶栏 | 半闲 | https://zhaobanxian.top |
| 372 | 顶栏 | 沐瑾年 | https://lemonx.cn |
| 373 | 侧栏 | 逍遥隐士 | https://cry33.com |
| 374 | 顶栏 | RSSBlog | https://rssblog.cn |







---

## 下线列表 🔥

如误处理或已修复问题，请提个 issue 吧，我们会尽快处理。常见的原因如下：
- **LOST**：网页国内打不开或网址解析失败；
- **SSL**：SSL 证书配置错误，或未启用 https；
- **ERROR**：网页显示服务器或 CDN 报错信息；
- **BROKEN**：网页存在明显异常如 CSS 丢失等错误；
- **QUIT**：网页看不到“开往”了，或已申请退出；

| 序号 | 原因 | 名称 | 网址 |
| --- | --- | --- | --- |
| 5 | LOST | Emoticon | https://mQAQm.com |
| 14 | LOST | Yuki Yuki | https://wp.remudaisuki.top |
| 17 | SSL | DIego's Blog | http://blog.diego.plus:5800 |
| 20 | LOST | Muyulong's Blog | https://mmyyll.ml |
| 21 | QUIT | Oasis's Blog | https://blog.imoasis.cn |
| 28 | QUIT | lxxs的小屋 | https://lxxs.xyz |
| 34 | LOST | Zi_Gao的小站 | https://blog.zigao.info |
| 37 | LOST | Mr.Chrosing`s Home | https://nasity.cn |
| 40 | QUIT | Smilear's Blog | https://smilear.cn |
| 43 | QUIT | Nymane's Blog | https://www.nymane.xyz |
| 44 | LOST | 风吟 | https://blog.yilon.top |
| 51 | LOST | solar'blog | https://www.solarme.vip |
| 52 | QUIT | SpinTouch's Something | https://spinblog.tk |
| 54 | LOST | 王荣胜 | https://sqdxwz.top |
| 55 | QUIT | 自说自话 | https://rua.ink |
| 58 | LOST | 摸鱼堂 | https://blog.moefishtang.xyz |
| 60 | LOST | Ma's Blog | https://6773.ink |
| 62 | LOST | 遇见孤独 | https://blog.aenjoy.cn |
| 63 | SSL | LifeAlsoIsGG's blog | https://blog.lifeisgg.online |
| 68 | LOST | 静静的小窝 | https://wznmickey.com |
| 69 | LOST | xiadengmaのblog | https://blog.xiadengma.top |
| 72 | SSL | 魏巍 | https://paperbox.xyz |
| 73 | LOST | Leo’s Blog | https://www.isolitude.cn |
| 80 | ERROR | 德令哈 | https://www.deepwave.top |
| 86 | QUIT | 沐森西の博客 | https://dlizi.com |
| 97 | QUIT | 南瓜奶酪 | https://blog.china97.cn |
| 100 | SSL | The Palace | https://seiryu.cn |
| 102 | LOST | 土豆和豌豆 | https://www.luxinzhangyun.top |
| 104 | SSL | 728004090博客 | https://www.googlessr.top |
| 109 | LOST | NekoX | https://nekox.cn |
| 110 | QUIT | 低调小熊猫 | http://ilovey.live |
| 113 | ERROR | 莫逡巡的博客 | https://wangpl.top |
| 114 | QUIT | 三路清风 | https://www.yansanlu.com |
| 115 | LOST | 房东的猫 | https://www.fddmao.com |
| 118 | LOST | 旧叙新陈'Blog | https://jiuxuxinchen.xyz |
| 119 | SSL | 九汐 | https://blog.lu-sky.com |
| 129 | LOST | 雾漫江南 | https://oxoch.com |
| 138 | LOST | 满月技术君 | https://jishujun.com |
| 141 | SSL | UTS | https://uts.ski |
| 145 | LOST | SkYe's Blog | https://www.mrskye.cn |
| 146 | LOST | 开心果个人博客 | https://zhw150.top |
| 150 | LOST | NEROASMAR.TOP | https://neroasmar.top |
| 152 | LOST | Jim's Blog | https://www.iibaofu.cn |
| 153 | 重复 | 若非 | https://github.com/volfclub/travellings/issues/549 |
| 154 | LOST | 弥枳 | https://blog.coor.top |
| 161 | LOST | Flexiston's Blog | https://blog.flesx.cn |
| 168 | LOST | 靜海遺跡 | https://voidge.cf |
| 169 | LOST | 风月平分破 | https://www.1-365.cn |
| 170 | ERROR | 有梦想的咸鱼 | https://xianyum.cn |
| 177 | LOST | Pootey's Blog | https://www.pootey.com |
| 184 | LOST | Zoyua's blog | https://zoyua.cn |
| 185 | LOST | hermoso | https://www.webpages.show |
| 188 | LOST | Memories's home | https://blog.tedgao.com |
| 191 | ERROR | 菠萝涌浆 | https://www.boolo.top |
| 199 | LOST | 小陈网管的小窝 | https://blog.xcbili.cn |
| 203 | LOST | wmz's blog | https://wmzwsa.xyz |
| 207 | ERROR | 猫九大大のBlog | https://jianchengwang.info |
| 228 | LOST | Ty Blog | https://tyblog.com.cn |
| 235 | ERROR | luosw 的小窝 | https://luosw.fun |
| 237 | LOST | Sianx's Blog | https://blog.sianx.com |
| 276 | QUIT | 小麦的博客 | https://blog.lenrome.cn |
| 335 | ERROR | 已处理 | https://www.zhw150.top |

---

## Q&A

### Q：只能是博客加入吗？

A：**任何网页都可以**。

博客，主页，工具，导航等都可以，只要是乐于分享的网页就可以加入开往。

### Q：怎样支持开往？

A：😻 有两种方案可选。

- 参考使用说明中的 [额外可选](https://github.com/volfclub/travellings#2-%E5%B0%86%E5%BC%80%E5%BE%80%E6%94%BE%E5%88%B0%E6%82%A8%E7%BD%91%E9%A1%B5%E6%89%93%E5%BC%80%E5%90%8E%E5%B0%B1%E8%83%BD%E7%9C%8B%E5%88%B0%E7%9A%84%E5%9C%B0%E6%96%B9%E8%AE%A9%E5%8F%8B%E9%93%BE%E6%8E%A5%E5%8A%9B%E4%B8%8B%E5%8E%BB)，在你的网页上放置开往的徽标，帮助宣传让更多的人加入开往。

- [打赏作者](https://afdian.net/@volfclub)，一些零钱总能激励作者更新维护项目的积极性。

### Q：开往能增加我网页的流量吗？

A：**理论上会**。

不恰当的估算下：假设当前有 2 个网页加入了开往，每个网页有 10 人使用开往，那么每个网页似乎就增加了 `10*2*1/2=10` 的流量；如果有10个网页加入开往是不是还是平均下来增加 10 人的流量呢？显然不是，因为：

- 访客可通过开往多次友链接力；
- 有开往的网页多了，单站击量也会提高；

这样我们再算算，10个网页加入了开往，接力次数提升到3，每个网页有 15 人使用开往，那每个网页就增加了 `15*10*3/10=45` 的流量。
这也是为什么建议将开往的徽标放在您网页明显位置（推荐顶栏，侧栏）的原因，以便让友链一直接力下去，获得更多的流量。

实际上由于没有统计代码，不清楚流量具体的变化。但目前看来有更多站长在申请加入，故认为开往对网页流量是有益的 —— 至少站长们可以相互交友了 ;-)

### Q：开往是否安全会不会侵犯隐私？

A：安全，不侵犯隐私。

全部 https 抗劫持；开源**无统计代码***，不侵犯隐私；镜像自动部署，无人工干预。加入开往的网页全部经过人工筛选，确保流量从源头就是干净优质的。

> 2021年5月25日更新：事实上，由于 Travelling 现在使用 Cloudflare Page 托管加速，我们在**无统计代码**的情况下（不会使用 Cookies 或 数字指纹 等其他跟踪技术，有别于某些广告驱动的公司及其服务），可**大致模糊的**了解 Travelling 的使用情况（如 Travelling 页面的访问量） —— Cloudflare 向您承诺**隐私第一**（Privacy First） —— [“Our analytics are non-invasive and respect the privacy of your visitors.”](https://www.cloudflare.com/zh-cn/web-analytics/)

### Q：开往给站长和访客带来了什么？

A：网络曾经从封闭走向开放，如今又走向了封闭。在此环境下，独立网页（类似“独立游戏”）的流量或多或少的受到影响。开往尝试让传统友链“活跃”，让网页相互接力，让流量相互流动，让网络开放起来。

- 站长：表示您支持网络的开放，并可获得更多的流量。
- 访客：发现更多优质的网页，一场说走就走的网上旅行。

### Q：我想修改徽标配合我的网页？

A：`assets` 文件夹中有各种图片素材，可修改自行托管。

### Q ：我需要变更网址或其他信息

提个 issues 吧。

您也可在域名到期前尽早的设置重定向，开往也会在维护中注意到并更正网址。

> 💡 购买域名时不要只注意是否便宜，还要注意**续费**的价格。

### Q：举报问题网页或退出开往？

A：提个 issues 吧。
