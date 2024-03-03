import { defineConfig } from "vitepress";
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "开往",
  description: "友链接力",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/docs/intro", activeMatch: "/docs/" },
      { text: "博客", link: "/blog/", activeMatch: "/blog/" },
      { text: "公告", link: "/announcements/", activeMatch: "/announcements/" },
      { text: "赞助", link: "https://afdian.net/a/travellings" },
      { text: "成员列表", link: "https://list.travellings.cn" },
      { text: "开往", link: "/go.html", target: "_blank" },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/travellings-link/travellings",
      },
      { icon: "twitter", link: "https://twitter.com/travellings_cn" },
    ],

    editLink: {
      pattern:
        "https://github.com/travellings-link/travellings/edit/master/:path",
      text: "在 GitHub 上编辑此页",
    },

    logo: {
      dark: "/assets/light.png",
      light: "/assets/dark.png",
    },

    siteTitle: false,

    footer: {
      copyright: "Copyright © 2020-2024 Travellings Project.",
      message:
          'Released under the GPL License.<br /><a href="https://beian.miit.gov.cn/">闽 ICP 备 2023011626 号 - 1</a><br /><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35059102000048">闽公网安备 35059102000048 号</a>',
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    darkModeSwitchLabel: "外观",
    darkModeSwitchTitle: "切换到深色模式",
    lightModeSwitchTitle: "切换到浅色模式",
    sidebarMenuLabel: "目录",
    returnToTopLabel: "返回顶部",
    externalLinkIcon: true,
  },

  cleanUrls: true,
  
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    },
    zh_TW: {
      label: '繁體中文（台灣）',
      lang: 'zh-TW',
      themeConfig.nav: [
        { text: "主頁", link: "/zh_TW/" },
        { text: "文件", link: "/zh_TW/docs/intro", activeMatch: "/zh_TW/docs/" },
        { text: "博客", link: "/zh_TW/blog/", activeMatch: "/zh_TW/blog/" },
        { text: "公告", link: "/zh_TW/announcements/", activeMatch: "/zh_TW/announcements/" },
        { text: "贊助", link: "https://afdian.net/a/travellings" },
        { text: "成員清單", link: "https://list.travellings.cn" },
        { text: "開往", link: "/go.html", target: "_blank" },
      ],
    },
    zh_HK: {
      label: '繁體中文（香港）',
      lang: 'zh-HK',
      themeConfig.nav: [
        { text: "主頁", link: "/zh_HK/" },
        { text: "文件", link: "/zh_HK/docs/intro", activeMatch: "/zh_HK/docs/" },
        { text: "博客", link: "/zh_HK/blog/", activeMatch: "/zh_HK/blog/" },
        { text: "公告", link: "/zh_HK/announcements/", activeMatch: "/zh_HK/announcements/" },
        { text: "贊助", link: "https://afdian.net/a/travellings" },
        { text: "成員清單", link: "https://list.travellings.cn" },
        { text: "開往", link: "/go.html", target: "_blank" },
      ],
    },
    en_US: {
      label: 'English',
      lang: 'en-US',
      themeConfig.nav: [
        { text: "Home", link: "/zh_HK/" },
        { text: "Docs", link: "/zh_HK/docs/intro", activeMatch: "/zh_HK/docs/" },
        { text: "Blog", link: "/zh_HK/blog/", activeMatch: "/zh_HK/blog/" },
        { text: "Announcements", link: "/zh_HK/announcements/", activeMatch: "/zh_HK/announcements/" },
        { text: "Sponsor", link: "https://afdian.net/a/travellings" },
        { text: "Members", link: "https://list.travellings.cn" },
        { text: "Travelling", link: "/go.html", target: "_blank" },
      ],
    },
  },

  head: [
    ["link", { rel: "icon", href: "/assets/favicon.png" }],
    [
      "script",
      {
        async: "",
        src: "https://umami.luochancy.com/script.js",
        "data-website-id": "23ac5682-b5b5-4013-8a32-5ceb3e598df2",
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    theme: {
      light: "material-theme-lighter",
      dark: "material-theme-darker",
    },
    image: {
      lazyLoading: true,
    },
  },

  sitemap: {
    hostname: "https://www.travellings.cn",
  },

  vite: {
    plugins: [
      AutoSidebar({
        titleFromFile: true,
        path: "./",
        ignoreList: [
          "README.md",
          "public",
          ".vitepress",
          "node_modules",
          "package.json",
          "pnpm-lock.yaml",
          ".gitignore",
          ".git",
          ".github",
          "/blog/authors.yml",
        ],
      }),
    ],
  },
  lastUpdated: true,
});
