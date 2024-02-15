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
      { text: "加入", link: "/docs/join", activeMatch: "/docs/" },
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
        "https://github.com/travellings-link/travellings/edit/master/docs/:path",
      text: "在 GitHub 上编辑此页",
    },

    logo: {
      dark: "/assets/light.png",
      light: "/assets/dark.png",
    },

    siteTitle: false,

    footer: {
      message:
        'Released under the GPL License.<br /><a href="https://beian.miit.gov.cn/">闽 ICP 备 2023011626 号 - 1</a><br /><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35059102000048">闽公网安备 35059102000048 号</a>',
      copyright: "Copyright © 2020-present Travellings",
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
  lang: "zh-CN",
  head: [
    ["link", { rel: "icon", href: "/assets/img/mini-logo.svg" }],
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
