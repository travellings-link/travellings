<script setup>
import Maintainers from '../../.vitepress/theme/components/Maintainers.vue'
import Changelog from '../../.vitepress/theme/components/Changelog.vue'
</script>

# Welcome

Welcome to the blog page of Travellings Project! :tada:

This is where some of the recent updates of the Travellings project are stored. You can now view the corresponding articles by time in the sidebar.

<!--在翻译时请翻译下方具名插槽 template 内的文字-->

## Maintainers

<Maintainers type="maintainers">
<template #active>
Active Maintainers
</template>
<template #inactive>
Other Maintainers
</template>
</Maintainers>

## Inspectors

<Maintainers type="inspectors">
<template #active>
Active Inspectors
</template>
<template #inactive>
Other Inspectors
</template>
</Maintainers>

## Changelog

::: info
This page only shows the latest 100 commits of the Git repository. For more information, please visit the [GitHub repository](https://github.com/travellings-link/travellings)
:::

<Changelog>
<template #date>
Time
</template>
<template #message>
Message
</template>
<template #author>
Committer
</template>
<template #loading>
Loading data from GitHub...
</template>
<template #more>
See more on GitHub
</template>
</Changelog>
