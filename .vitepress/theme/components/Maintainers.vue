<script setup lang="ts">
// by xuanzhi33

import { ref } from 'vue'
import MaintainersTable from './MaintainersTable.vue';
import maintainersData from "./maintainers";

const maintainers = ref(maintainersData);

</script>

<template>
  <slot name="active"></slot>
  <MaintainersTable :maintainers="maintainers" :isActive="true" />
  <slot name="inactive"></slot>
  <MaintainersTable :maintainers="maintainers" :isActive="false" />
</template>
