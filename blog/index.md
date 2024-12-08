<script setup>
import Maintainers from '../.vitepress/theme/components/Maintainers.vue'
import Changelog from '../.vitepress/theme/components/Changelog.vue'
</script>
# 欢迎

欢迎来到开往的博客页面！:tada:

此处主要存放一些开往项目近期更新的内容，您现在可以通过侧边栏查看对应时间的文章。

<!--在翻译时请翻译下方具名插槽 template 内的文字-->
## 维护组成员

<Maintainers>
<template #active>
最近活跃的维护者
</template>
<template #inactive>
其他维护者
</template>
</Maintainers>

## 更新日志

::: info 说明
此处仅展示 Git 仓库的最近 100 条提交记录，更多信息请前往 [GitHub 仓库](https://github.com/travellings-link/travellings) 查看。
:::

<Changelog>
<template #date>
时间
</template>
<template #message>
更新内容
</template>
<template #author>
提交者
</template>
<template #loading>
正在从 GitHub 获取数据...
</template>
<template #more>
前往 GitHub 查看更多
</template>
</Changelog>
