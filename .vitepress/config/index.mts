import { defineConfig } from 'vitepress'
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";
import { zh_CN } from './zh_CN.mts'

export default defineConfig({
  locales: {
    root: { label: '简体中文', ...zh_CN },
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