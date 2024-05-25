import { defineConfig } from "vitepress";
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";

// https://vitepress.dev/reference/site-config
export const en_US = defineConfig({
  title: "开往",
  description: "友链接力",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/en_US/" },
      { text: "文档", link: "/en_US/docs/", activeMatch: "/en_US/docs/" },
      { text: "博客", link: "/en_US/blog/", activeMatch: "/en_US/blog/" },
      { text: "公告", link: "/en_US/announcements/", activeMatch: "/en_US/announcements/" },
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
      { icon: "telegram", link: "https://t.me/TravellingsCN"},
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
        slogan: '我们期望通过友链接力来让互联网流量变得开放。',
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
