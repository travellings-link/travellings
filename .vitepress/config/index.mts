import { defineConfig } from 'vitepress'
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";
import { zh_CN } from './zh_CN.mts'
import { zh_TW } from './zh_TW.mts'
import { en_US } from './en_US.mts'

export default defineConfig({
  locales: {
    root: { label: '简体中文', ...zh_CN },
    zh_TW: { label: '繁體中文', ...zh_TW },
    en_US: { label: 'English', ...en_US },
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
})