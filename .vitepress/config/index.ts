import { defineConfig } from 'vitepress'
import { zh_CN } from './zh_CN'
import { zh_TW } from './zh_TW'
import { en_US } from './en_US'

export default defineConfig({
  locales: {
    root: { label: '简体中文', ...zh_CN },
    zh_TW: { label: '繁體中文', ...zh_TW },
    en_US: { label: 'English', ...en_US },
  }
})