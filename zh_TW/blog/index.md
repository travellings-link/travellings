<script setup>
import Maintainers from '../../.vitepress/theme/components/Maintainers.vue'
import Changelog from '../../.vitepress/theme/components/Changelog.vue'
</script>
# 歡迎

歡迎來到開往的部落格頁面！:tada:

這裡主要存放一些開往計劃近期更新的內容，現在可以透過側邊欄查看對應時間的文章。

<!--在翻译时请翻译下方具名插槽 template 内的文字-->
## 維護組成員

<Maintainers>
<template #active>
最近活躍的維護者
</template>
<template #inactive>
其他維護者
</template>
</Maintainers>

## 更新日誌

::: info 說明
此處僅展示 Git 倉庫的最近 100 筆提交記錄，更多資訊請前往 [GitHub 倉庫](https://github.com/travellings-link/travellings) 查看。
:::

<Changelog>
<template #date>
時間
</template>
<template #message>
更新內容
</template>
<template #author>
提交者
</template>
<template #loading>
正在從 GitHub 取得數據...
</template>
<template #more>
前往 GitHub 查看更多
</template>
</Changelog>
