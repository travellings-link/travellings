<script setup lang="ts">
// by xuanzhi33
defineProps<{
  maintainers: Record<string, { title: string, active: boolean }>,
  isActive: boolean
}>();

const getGithubUrl = (name: string) => {
  return `https://github.com/${name}`
}

const getGithubAvatar = (name: string) => {
  return `https://github.com/${name}.png`
}
</script>

<template>
    <table>
      <template v-for="(maintainer, name) in maintainers" :key="name">
        <tr v-if="maintainer.active === isActive">
          <td>
            <img :src="getGithubAvatar(name)" alt="avatar" width="40" />
          </td>
          <td>
            <a :href="getGithubUrl(name)">{{ name }}</a>
          </td>
          <td>{{ maintainer.title }}</td>
        </tr>
      </template>
    </table>
</template>