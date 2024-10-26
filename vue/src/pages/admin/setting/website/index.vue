<template>
  <t-card title=" " :bordered="false">
    <t-tabs :default-value="1" size="medium" placement="left">
      <t-tab-panel v-for="(item, index) in tabList" :key="index" :value="item.value" :label="item.label">
        <component :is="item.component" />
      </t-tab-panel>
    </t-tabs>
  </t-card>
</template>

<script setup lang="ts">
import WebInfo from './components/web-info.vue';
import WebShop from './components/web-shop.vue';
import PanelSetting from './components/panel-setting.vue';

const tabList = [
  {
    label: '网站配置',
    component: WebInfo,
    value: 1,
  },
  {
    label: '商品相关',
    component: WebShop,
    value: 4,
  },
  {
    label: '面板配置',
    component: PanelSetting,
    value: 7,
  },
];
</script>
<style>
.basic-containers {
  padding: 0 20px;
}
</style>
