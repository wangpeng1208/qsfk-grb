<template>
  <div v-if="!loading">
    <template v-if="setting.layout.value === 'side'">
      <t-layout key="side" :class="mainLayoutCls">
        <t-aside>
          <layout-side-nav />
        </t-aside>
        <t-layout>
          <t-header v-if="settingStore.showHeader"><layout-header /></t-header>
          <t-content><layout-content /></t-content>
        </t-layout>
      </t-layout>
    </template>

    <template v-else>
      <t-layout key="no-side">
        <t-header v-if="settingStore.showHeader"><layout-header /> </t-header>
        <t-layout :class="mainLayoutCls">
          <layout-side-nav />
          <layout-content />
        </t-layout>
      </t-layout>
    </template>
    <setting-com />
  </div>
</template>

<script setup lang="ts">
import '@/style/layout.less';
import 'tdesign-vue-next/dist/reset.css';

import { storeToRefs } from 'pinia';
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useSettingStore, useTabsRouterStore } from '@/store';

import LayoutContent from './components/LayoutContent.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutSideNav from './components/LayoutSideNav.vue';
import SettingCom from './setting.vue';

const route = useRoute();
const settingStore = useSettingStore();
const tabsRouterStore = useTabsRouterStore();
const setting = storeToRefs(settingStore);
const mainLayoutCls = computed(() => [
  {
    't-layout--with-sider': settingStore.showSidebar,
  },
]);

const appendNewRoute = () => {
  const {
    path,
    query,
    meta: { title },
    name,
  } = route;
  tabsRouterStore.appendTabRouterList({ path, query, title: title as string, name, isAlive: true, meta: route.meta });
};
const loading = ref(true);
onMounted(async () => {
  await settingStore.loadConfig();
  loading.value = false;
  appendNewRoute();
});

watch(
  () => route.path,
  () => {
    appendNewRoute();

    // document.querySelector(`.${prefix}-layout`).scrollTo({ top: 0, behavior: 'smooth' });
  },
);
</script>

<!-- eslint-disable-next-line vue-scoped-css/enforce-style-type -->
<style lang="less">
@import url('@/style/theme.css');
</style>
