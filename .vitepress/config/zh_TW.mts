import { defineConfig } from "vitepress";
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";

// https://vitepress.dev/reference/site-config
export const zh_TW = defineConfig({
  title: "開往",
  description: "友鏈接力",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首頁", link: "/zh_TW/" },
      { text: "檔案", link: "/zh_TW/docs/", activeMatch: "/zh_TW/docs/" },
      { text: "部落格", link: "/zh_TW/blog/", activeMatch: "/zh_TW/blog/" },
      { text: "公告", link: "/zh_TW/announcements/", activeMatch: "/zh_TW/announcements/" },
      { text: "贊助", link: "https://afdian.com/a/travellings" },
      { text: "成員列表", link: "https://list.travellings.cn" },
      { text: "開往GO", link: "/go.html", target: "_blank" },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/travellings-link/travellings",
      },
      { icon: "twitter", link: "https://twitter.com/travellings_cn" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></svg>'
        }, 
        link: "https://t.me/TravellingsCN"
      },
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
