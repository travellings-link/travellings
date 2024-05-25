import { defineConfig } from "vitepress";
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "开往",
  description: "友链接力",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首頁", link: "/" },
      { text: "檔案", link: "/zh_TW/docs/", activeMatch: "/zh_TW/docs/" },
      { text: "部落格", link: "/zh_TW/blog/", activeMatch: "/zh_TW/blog/" },
      { text: "公告", link: "/zh_TW/announcements/", activeMatch: "/zh_TW/announcements/" },
      { text: "贊助", link: "https://afdian.net/a/travellings" },
      { text: "成員列表", link: "https://list.travellings.cn" },
      { text: "開往", link: "/go.html", target: "_blank" },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/travellings-link/travellings",
      },
      { icon: "twitter", link: "https://twitter.com/travellings_cn" },
      { icon: "telegram", link: "https://t.me/TravellingsCN"},
    ],

    editLink: {
      pattern:
        "https://github.com/travellings-link/travellings/edit/master/:path",
      text: "在 GitHub 上編輯此頁",
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
      prev: "上一頁",
      next: "下一頁",
    },

    darkModeSwitchLabel: "外觀",
    darkModeSwitchTitle: "切換到深色模式",
    lightModeSwitchTitle: "切換到淺色模式",
    sidebarMenuLabel: "目錄",
    returnToTopLabel: "回到頂部",
    externalLinkIcon: true,
  },

  cleanUrls: true,
  
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    },
    zh_TW: {
      label: '繁體中文',
      lang: 'zh-TW',
    },
    en_US: {
      label: 'English',
      lang: 'en-US',
    },
  },

  head: [
    ["link", { rel: "icon", href: "/assets/favicon.png" }],
    [
      "script",
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        name: '开往 Travellings',
        url: 'https://www.travellings.cn/',
        sameAs: 'https://github.com/travellings-link',
        logo: 'https://www.travellings.cn/assets/light.png',
        email: 'contact@travellings.cn',
        slogan: '我們期望透過友鏈接力讓網路流量變得開放。',
      }),
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
