<script setup lang="ts">
// by xuanzhi33

const { type } = defineProps({
  type: {
    type: String,
    default: "maintainers"
  }
});

import { ref } from 'vue'
import MaintainersTable from './MaintainersTable.vue';
import maintainersData from "./maintainers";

console.log(type)
const maintainers = ref(maintainersData[type]);

</script>

<template>
  <slot name="active"></slot>
  <MaintainersTable :maintainers="maintainers" :isActive="true" />
  <slot name="inactive"></slot>
  <MaintainersTable :maintainers="maintainers" :isActive="false" />
</template>
