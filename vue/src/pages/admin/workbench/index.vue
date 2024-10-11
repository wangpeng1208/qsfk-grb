<template>
  <gutter-row
    :columns="[
      { span: 6, component: BasicCard },
      { span: 6, component: SystemCard },
      { span: 12, component: MenuCard },
    ]"
  />
</template>

<script setup lang="ts">
import BasicCard from './components/BasicCard.vue';
import GutterRow from './components/GutterRow.vue';
import MenuCard from './components/MenuCard.vue';
import SystemCard from './components/SystemCard.vue';
// <!-- 无人扶我青云志，我自踏雪至云巅 -->

</script>
