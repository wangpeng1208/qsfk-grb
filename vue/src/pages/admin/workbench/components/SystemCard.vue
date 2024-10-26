<template>
  <t-card title="版本信息" hover-shadow :bordered="false">
    <t-skeleton v-if="loading" :row-col="rowCol"></t-skeleton>
    <div v-else>
      <div class="flex leading-9">
        <div class="w-20">当前版本</div>
        <span>
          <t-tag theme="success" hover="color" variant="light"> {{ workbenchData?.version }} </t-tag>
        </span>
      </div>
      <div class="flex leading-9">
        <div class="w-20">程序作者</div>
        <span> {{ workbenchData?.author?.email }}</span>
      </div>
      <div class="flex leading-9">
        <div class="w-20">开发公司</div>
        <span> {{ workbenchData?.author?.name }}</span>
      </div>
      <div class="flex leading-9">
        <div class="w-20">技术栈</div>
        <span>{{ workbenchData?.framework?.frontend }} {{ workbenchData?.framework?.backend }}</span>
      </div>
      <div class="flex leading-9">
        <div class="w-20">开源地址</div>
        <span>
          <a href="https://gitee.com/wp1208/qsfk-grb"><img src="https://gitee.com/wp1208/qsfk-grb/badge/star.svg?theme=white" alt="star" /></a>
        </span>
      </div>
    </div>
  </t-card>
</template>
<script setup lang="ts">
import { MessagePlugin, SkeletonProps } from 'tdesign-vue-next';
import { reactive, ref } from 'vue';

import { systemVersion } from '@/api/admin/workbench';
// import { formatTime } from '@/utils/date';

const workbenchData = reactive({
  version: '',
  authorize: {
    status: false,
    end_time: 0,
  },
  author: {
    name: '',
    email: '',
  },
  framework: {
    frontend: '',
    backend: '',
  },
  license: [],
});
const loading = ref(true);
const rowCol: SkeletonProps['rowCol'] = Array.from({ length: 4 }).map(() => [
  {
    type: 'rect',
    flex: '1',
    width: '80px',
    height: '10px',
  },
  {
    type: 'rect',
    flex: '1',
    width: '100%',
    height: '10px',
  },
]);
const initData = async () => {
  const res = await systemVersion();
  Object.assign(workbenchData, res.data);
  if (workbenchData.authorize.status === false) {
    MessagePlugin.error({ content: '软件未授权，部分功能被限制', duration: 0, closeBtn: true });
  }
  loading.value = false;
};
initData();
</script>

<style lang="less" scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
.leading-9 {
  line-height: 25px;
}
</style>
