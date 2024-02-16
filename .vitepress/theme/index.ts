// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
// import Layout from "./Layout.vue" disable for a while by author component
import Authors from "./components/Author.vue"

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "doc-footer-before": () => h(Authors),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
