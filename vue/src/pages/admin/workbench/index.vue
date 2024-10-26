<template>
  <gutter-row
    :columns="[
      { span: 12, component: BasicCard },
      { span: 12, component: SystemCard },
      { span: 12, component: MenuCard },
    ]"
  />
</template>

<script setup lang="ts">
import BasicCard from './components/BasicCard.vue';
import GutterRow from './components/GutterRow.vue';
import MenuCard from './components/MenuCard.vue';
import SystemCard from './components/SystemCard.vue';
</script>
