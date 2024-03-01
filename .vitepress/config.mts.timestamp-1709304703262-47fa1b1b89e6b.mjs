// .vitepress/config.mts
import { defineConfig } from "file:///D:/Dev/travellings/node_modules/.pnpm/vitepress@1.0.0-rc.42_@algolia+client-search@4.22.1_@types+node@20.11.17_search-insights@2.13.0_typescript@5.3.3/node_modules/vitepress/dist/node/index.js";
import AutoSidebar from "file:///D:/Dev/travellings/node_modules/.pnpm/vite-plugin-vitepress-auto-sidebar@1.6.2_eslint@8.56.0_typescript@5.3.3_vite@5.1.1_vitepress@1.0.0-rc.42/node_modules/vite-plugin-vitepress-auto-sidebar/dist/index.mjs";
var config_default = defineConfig({
  title: "\u5F00\u5F80",
  description: "\u53CB\u94FE\u63A5\u529B",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "\u4E3B\u9875", link: "/" },
      { text: "\u6587\u6863", link: "/docs/intro", activeMatch: "/docs/" },
      { text: "\u535A\u5BA2", link: "/blog", activeMatch: "/blog" },
      { text: "\u516C\u544A", link: "/announcements", activeMatch: "/announcements" },
      { text: "\u8D5E\u52A9", link: "https://afdian.net/a/travellings" },
      { text: "\u6210\u5458\u5217\u8868", link: "https://list.travellings.cn" },
      { text: "\u5F00\u5F80", link: "/go.html", target: "_blank" }
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/travellings-link/travellings"
      },
      { icon: "twitter", link: "https://twitter.com/travellings_cn" }
    ],
    editLink: {
      pattern: "https://github.com/travellings-link/travellings/edit/master/:path",
      text: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
    },
    logo: {
      dark: "/assets/light.png",
      light: "/assets/dark.png"
    },
    siteTitle: false,
    footer: {
      message: 'Released under the GPL License.<br /><a href="https://beian.miit.gov.cn/">\u95FD ICP \u5907 2023011626 \u53F7 - 1</a><br /><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35059102000048">\u95FD\u516C\u7F51\u5B89\u5907 35059102000048 \u53F7</a>',
      copyright: "Copyright \xA9 2020-present Travellings"
    },
    docFooter: {
      prev: "\u4E0A\u4E00\u9875",
      next: "\u4E0B\u4E00\u9875"
    },
    darkModeSwitchLabel: "\u5916\u89C2",
    darkModeSwitchTitle: "\u5207\u6362\u5230\u6DF1\u8272\u6A21\u5F0F",
    lightModeSwitchTitle: "\u5207\u6362\u5230\u6D45\u8272\u6A21\u5F0F",
    sidebarMenuLabel: "\u76EE\u5F55",
    returnToTopLabel: "\u8FD4\u56DE\u9876\u90E8",
    externalLinkIcon: true
  },
  cleanUrls: true,
  locales: {
    root: {
      label: "\u7B80\u4F53\u4E2D\u6587",
      lang: "zh-CN"
    },
    zh_TW: {
      label: "\u7E41\u9AD4\u4E2D\u6587",
      lang: "zh-TW"
    },
    en_US: {
      label: "English",
      lang: "en-US"
    }
  },
  head: [
    ["link", { rel: "icon", href: "/assets/favicon.png" }],
    [
      "script",
      {
        async: "",
        src: "https://umami.luochancy.com/script.js",
        "data-website-id": "23ac5682-b5b5-4013-8a32-5ceb3e598df2"
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    theme: {
      light: "material-theme-lighter",
      dark: "material-theme-darker"
    },
    image: {
      lazyLoading: true
    }
  },
  sitemap: {
    hostname: "https://www.travellings.cn"
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
          "/blog/authors.yml"
        ]
      })
    ]
  },
  lastUpdated: true
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcRGV2XFxcXHRyYXZlbGxpbmdzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERldlxcXFx0cmF2ZWxsaW5nc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0Rldi90cmF2ZWxsaW5ncy8udml0ZXByZXNzL2NvbmZpZy5tdHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZXByZXNzXCI7XHJcbmltcG9ydCBBdXRvU2lkZWJhciBmcm9tIFwidml0ZS1wbHVnaW4tdml0ZXByZXNzLWF1dG8tc2lkZWJhclwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHRpdGxlOiBcIlx1NUYwMFx1NUY4MFwiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIlx1NTNDQlx1OTRGRVx1NjNBNVx1NTI5QlwiLFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXHJcbiAgICBuYXY6IFtcclxuICAgICAgeyB0ZXh0OiBcIlx1NEUzQlx1OTg3NVwiLCBsaW5rOiBcIi9cIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiXHU2NTg3XHU2ODYzXCIsIGxpbms6IFwiL2RvY3MvaW50cm9cIiwgYWN0aXZlTWF0Y2g6IFwiL2RvY3MvXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlx1NTM1QVx1NUJBMlwiLCBsaW5rOiBcIi9ibG9nXCIsIGFjdGl2ZU1hdGNoOiBcIi9ibG9nXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlx1NTE2Q1x1NTQ0QVwiLCBsaW5rOiBcIi9hbm5vdW5jZW1lbnRzXCIsIGFjdGl2ZU1hdGNoOiBcIi9hbm5vdW5jZW1lbnRzXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlx1OEQ1RVx1NTJBOVwiLCBsaW5rOiBcImh0dHBzOi8vYWZkaWFuLm5ldC9hL3RyYXZlbGxpbmdzXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlx1NjIxMFx1NTQ1OFx1NTIxN1x1ODg2OFwiLCBsaW5rOiBcImh0dHBzOi8vbGlzdC50cmF2ZWxsaW5ncy5jblwiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJcdTVGMDBcdTVGODBcIiwgbGluazogXCIvZ28uaHRtbFwiLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSxcclxuICAgIF0sXHJcblxyXG4gICAgc29jaWFsTGlua3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGljb246IFwiZ2l0aHViXCIsXHJcbiAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vdHJhdmVsbGluZ3MtbGluay90cmF2ZWxsaW5nc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7IGljb246IFwidHdpdHRlclwiLCBsaW5rOiBcImh0dHBzOi8vdHdpdHRlci5jb20vdHJhdmVsbGluZ3NfY25cIiB9LFxyXG4gICAgXSxcclxuXHJcbiAgICBlZGl0TGluazoge1xyXG4gICAgICBwYXR0ZXJuOlxyXG4gICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL3RyYXZlbGxpbmdzLWxpbmsvdHJhdmVsbGluZ3MvZWRpdC9tYXN0ZXIvOnBhdGhcIixcclxuICAgICAgdGV4dDogXCJcdTU3MjggR2l0SHViIFx1NEUwQVx1N0YxNlx1OEY5MVx1NkI2NFx1OTg3NVwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBsb2dvOiB7XHJcbiAgICAgIGRhcms6IFwiL2Fzc2V0cy9saWdodC5wbmdcIixcclxuICAgICAgbGlnaHQ6IFwiL2Fzc2V0cy9kYXJrLnBuZ1wiLFxyXG4gICAgfSxcclxuXHJcbiAgICBzaXRlVGl0bGU6IGZhbHNlLFxyXG5cclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBtZXNzYWdlOlxyXG4gICAgICAgICdSZWxlYXNlZCB1bmRlciB0aGUgR1BMIExpY2Vuc2UuPGJyIC8+PGEgaHJlZj1cImh0dHBzOi8vYmVpYW4ubWlpdC5nb3YuY24vXCI+XHU5NUZEIElDUCBcdTU5MDcgMjAyMzAxMTYyNiBcdTUzRjcgLSAxPC9hPjxiciAvPjxhIGhyZWY9XCJodHRwOi8vd3d3LmJlaWFuLmdvdi5jbi9wb3J0YWwvcmVnaXN0ZXJTeXN0ZW1JbmZvP3JlY29yZGNvZGU9MzUwNTkxMDIwMDAwNDhcIj5cdTk1RkRcdTUxNkNcdTdGNTFcdTVCODlcdTU5MDcgMzUwNTkxMDIwMDAwNDggXHU1M0Y3PC9hPicsXHJcbiAgICAgIGNvcHlyaWdodDogXCJDb3B5cmlnaHQgXHUwMEE5IDIwMjAtcHJlc2VudCBUcmF2ZWxsaW5nc1wiLFxyXG4gICAgfSxcclxuXHJcbiAgICBkb2NGb290ZXI6IHtcclxuICAgICAgcHJldjogXCJcdTRFMEFcdTRFMDBcdTk4NzVcIixcclxuICAgICAgbmV4dDogXCJcdTRFMEJcdTRFMDBcdTk4NzVcIixcclxuICAgIH0sXHJcblxyXG4gICAgZGFya01vZGVTd2l0Y2hMYWJlbDogXCJcdTU5MTZcdTg5QzJcIixcclxuICAgIGRhcmtNb2RlU3dpdGNoVGl0bGU6IFwiXHU1MjA3XHU2MzYyXHU1MjMwXHU2REYxXHU4MjcyXHU2QTIxXHU1RjBGXCIsXHJcbiAgICBsaWdodE1vZGVTd2l0Y2hUaXRsZTogXCJcdTUyMDdcdTYzNjJcdTUyMzBcdTZENDVcdTgyNzJcdTZBMjFcdTVGMEZcIixcclxuICAgIHNpZGViYXJNZW51TGFiZWw6IFwiXHU3NkVFXHU1RjU1XCIsXHJcbiAgICByZXR1cm5Ub1RvcExhYmVsOiBcIlx1OEZENFx1NTZERVx1OTg3Nlx1OTBFOFwiLFxyXG4gICAgZXh0ZXJuYWxMaW5rSWNvbjogdHJ1ZSxcclxuICB9LFxyXG5cclxuICBjbGVhblVybHM6IHRydWUsXHJcbiAgXHJcbiAgbG9jYWxlczoge1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBsYWJlbDogJ1x1N0I4MFx1NEY1M1x1NEUyRFx1NjU4NycsXHJcbiAgICAgIGxhbmc6ICd6aC1DTidcclxuICAgIH0sXHJcbiAgICB6aF9UVzoge1xyXG4gICAgICBsYWJlbDogJ1x1N0U0MVx1OUFENFx1NEUyRFx1NjU4NycsXHJcbiAgICAgIGxhbmc6ICd6aC1UVycsXHJcbiAgICB9LFxyXG4gICAgZW5fVVM6IHtcclxuICAgICAgbGFiZWw6ICdFbmdsaXNoJyxcclxuICAgICAgbGFuZzogJ2VuLVVTJyxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgaGVhZDogW1xyXG4gICAgW1wibGlua1wiLCB7IHJlbDogXCJpY29uXCIsIGhyZWY6IFwiL2Fzc2V0cy9mYXZpY29uLnBuZ1wiIH1dLFxyXG4gICAgW1xyXG4gICAgICBcInNjcmlwdFwiLFxyXG4gICAgICB7XHJcbiAgICAgICAgYXN5bmM6IFwiXCIsXHJcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vdW1hbWkubHVvY2hhbmN5LmNvbS9zY3JpcHQuanNcIixcclxuICAgICAgICBcImRhdGEtd2Vic2l0ZS1pZFwiOiBcIjIzYWM1NjgyLWI1YjUtNDAxMy04YTMyLTVjZWIzZTU5OGRmMlwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICBdLFxyXG5cclxuICBtYXJrZG93bjoge1xyXG4gICAgbGluZU51bWJlcnM6IHRydWUsXHJcbiAgICB0aGVtZToge1xyXG4gICAgICBsaWdodDogXCJtYXRlcmlhbC10aGVtZS1saWdodGVyXCIsXHJcbiAgICAgIGRhcms6IFwibWF0ZXJpYWwtdGhlbWUtZGFya2VyXCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgbGF6eUxvYWRpbmc6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHNpdGVtYXA6IHtcclxuICAgIGhvc3RuYW1lOiBcImh0dHBzOi8vd3d3LnRyYXZlbGxpbmdzLmNuXCIsXHJcbiAgfSxcclxuXHJcbiAgdml0ZToge1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICBBdXRvU2lkZWJhcih7XHJcbiAgICAgICAgdGl0bGVGcm9tRmlsZTogdHJ1ZSxcclxuICAgICAgICBwYXRoOiBcIi4vXCIsXHJcbiAgICAgICAgaWdub3JlTGlzdDogW1xyXG4gICAgICAgICAgXCJSRUFETUUubWRcIixcclxuICAgICAgICAgIFwicHVibGljXCIsXHJcbiAgICAgICAgICBcIi52aXRlcHJlc3NcIixcclxuICAgICAgICAgIFwibm9kZV9tb2R1bGVzXCIsXHJcbiAgICAgICAgICBcInBhY2thZ2UuanNvblwiLFxyXG4gICAgICAgICAgXCJwbnBtLWxvY2sueWFtbFwiLFxyXG4gICAgICAgICAgXCIuZ2l0aWdub3JlXCIsXHJcbiAgICAgICAgICBcIi5naXRcIixcclxuICAgICAgICAgIFwiLmdpdGh1YlwiLFxyXG4gICAgICAgICAgXCIvYmxvZy9hdXRob3JzLnltbFwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIGxhc3RVcGRhdGVkOiB0cnVlLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5USxTQUFTLG9CQUFvQjtBQUN0UyxPQUFPLGlCQUFpQjtBQUd4QixJQUFPLGlCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUE7QUFBQSxJQUVYLEtBQUs7QUFBQSxNQUNILEVBQUUsTUFBTSxnQkFBTSxNQUFNLElBQUk7QUFBQSxNQUN4QixFQUFFLE1BQU0sZ0JBQU0sTUFBTSxlQUFlLGFBQWEsU0FBUztBQUFBLE1BQ3pELEVBQUUsTUFBTSxnQkFBTSxNQUFNLFNBQVMsYUFBYSxRQUFRO0FBQUEsTUFDbEQsRUFBRSxNQUFNLGdCQUFNLE1BQU0sa0JBQWtCLGFBQWEsaUJBQWlCO0FBQUEsTUFDcEUsRUFBRSxNQUFNLGdCQUFNLE1BQU0sbUNBQW1DO0FBQUEsTUFDdkQsRUFBRSxNQUFNLDRCQUFRLE1BQU0sOEJBQThCO0FBQUEsTUFDcEQsRUFBRSxNQUFNLGdCQUFNLE1BQU0sWUFBWSxRQUFRLFNBQVM7QUFBQSxJQUNuRDtBQUFBLElBRUEsYUFBYTtBQUFBLE1BQ1g7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQSxFQUFFLE1BQU0sV0FBVyxNQUFNLHFDQUFxQztBQUFBLElBQ2hFO0FBQUEsSUFFQSxVQUFVO0FBQUEsTUFDUixTQUNFO0FBQUEsTUFDRixNQUFNO0FBQUEsSUFDUjtBQUFBLElBRUEsTUFBTTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUVBLFdBQVc7QUFBQSxJQUVYLFFBQVE7QUFBQSxNQUNOLFNBQ0U7QUFBQSxNQUNGLFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFFQSxXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBRUEscUJBQXFCO0FBQUEsSUFDckIscUJBQXFCO0FBQUEsSUFDckIsc0JBQXNCO0FBQUEsSUFDdEIsa0JBQWtCO0FBQUEsSUFDbEIsa0JBQWtCO0FBQUEsSUFDbEIsa0JBQWtCO0FBQUEsRUFDcEI7QUFBQSxFQUVBLFdBQVc7QUFBQSxFQUVYLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFFQSxNQUFNO0FBQUEsSUFDSixDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxzQkFBc0IsQ0FBQztBQUFBLElBQ3JEO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLEtBQUs7QUFBQSxRQUNMLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFVBQVU7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLFVBQVU7QUFBQSxFQUNaO0FBQUEsRUFFQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsTUFDUCxZQUFZO0FBQUEsUUFDVixlQUFlO0FBQUEsUUFDZixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUFBLEVBQ0EsYUFBYTtBQUNmLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
