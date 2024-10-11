<template>
  <div v-if="footer === 'merchant'" :class="prefix + '-footer'"><span v-html="siteInfoCopyright"></span></div>
  <div v-else :class="prefix + '-footer'">
    Powered by RolaSoft, Copyright © 2022-2024  All rights reserved <a style="margin:0 5px" size="small" href="http://www.qqss.net" target="_blank">骑士发卡系统(个人版)</a> 
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { prefix } from '@/config/global';
import { useSiteStore } from '@/store';

const siteStore = useSiteStore();
const siteInfoCopyright = computed(() => siteStore.config.site_info_copyright);

// 底部版权
const footer = ref('');
const app = window.location.pathname.split('/')[1];
switch (app) {
  case 'admin':
    footer.value = 'admin';
    break;
  case 'merchant':
    footer.value = 'merchant';
    break;
  default:
}
</script>

<style lang="less" scoped>
.@{starter-prefix}-footer {
  color: var(--td-text-color-placeholder);
  line-height: 20px;
  text-align: center;
  font-size: 12px;
}
a {
  color: var(--td-text-color-placeholder);
  text-decoration: none;
}
a:hover, a:focus {
    text-decoration: none;
    outline: none;
}
</style>
