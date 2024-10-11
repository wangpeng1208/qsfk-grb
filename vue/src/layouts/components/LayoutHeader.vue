<template>
  <c-header v-if="settingStore.showHeader" :show-logo="settingStore.showHeaderLogo" :layout="settingStore.layout" :is-fixed="settingStore.isHeaderFixed" :menu="headerMenu" :is-compact="settingStore.isSidebarCompact" />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import { usePermissionStore, useSettingStore } from '@/store';

import CHeader from './Header.vue';

const permissionStore = usePermissionStore();
const settingStore = useSettingStore();
const { asyncRoutes } = storeToRefs(permissionStore);
const headerMenu = computed(() => {
  if (settingStore.layout === 'mix') {
    if (settingStore.splitMenu) {
      return asyncRoutes.value.map((menu) => ({
        ...menu,
        children: [],
      }));
    }
    return [];
  }
  return asyncRoutes.value;
});
</script>
