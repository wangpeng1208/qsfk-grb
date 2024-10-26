<template>
  <t-row :gutter="{ xs: 8, sm: 16, md: 20, lg: 20, xl: 20, xxl: 20 }">
    <t-col :span="6">
      <t-card title="销售额" header-bordered hover-shadow :bordered="false" style="border-top: var(--td-brand-color) solid 3px">
        <template #title>
          <t-tooltip content="点击进入订单列表面板">
            <div @click="goPage('/admin/order/list')" style="cursor: pointer">销售额统计</div>
          </t-tooltip>
        </template>
        <template #actions>
          <t-tag theme="primary" variant="light">今日</t-tag>
        </template>
        <t-statistic :value="price?.today" unit="元"></t-statistic>

        <div style="padding-top: var(--td-comp-paddingTB-l)">
          <div style="display: flex; justify-content: space-between; padding-bottom: 5px">
            <div style="flex: 1">昨日销售</div>
            <div style="display: flex; justify-content: center">
              <div>
                <t-icon v-if="price.today > price.yesterday" name="arrow-triangle-up-filled" style="color: #d54941; font-size: var(--td-font-size-body-large)" />
                <t-icon v-else name="arrow-triangle-down-filled" style="color: #2ba471; font-size: var(--td-font-size-body-large)" />
                {{ price.yesterday }} 元
              </div>
            </div>
          </div>
          <div style="display: flex; justify-content: space-between">
            <div>平台总销售额</div>
            <div>{{ price.total }} 元</div>
          </div>
        </div>
      </t-card>
    </t-col>
    <t-col :span="6">
      <t-card title="订单数" header-bordered hover-shadow :bordered="false" style="border-top: rgb(159, 219, 29) solid 3px">
        <template #title>
          <t-tooltip content="点击进入订单管理面板">
            <div @click="goPage('/admin/order/list')" style="cursor: pointer">订单统计</div>
          </t-tooltip>
        </template>
        <template #actions>
          <t-tag theme="primary" variant="light">今日</t-tag>
        </template>
        <t-statistic :value="order?.today" unit="笔"> </t-statistic>
        <div style="padding-top: var(--td-comp-paddingTB-l)">
          <div style="display: flex; justify-content: space-between; padding-bottom: 5px">
            <div style="width: 120px">昨日</div>
            <div style="display: flex; justify-content: center">
              <div>
                <t-icon v-if="order.today > order.yesterday" name="arrow-triangle-up-filled" style="color: #d54941; font-size: var(--td-font-size-body-large)" />
                <t-icon v-else name="arrow-triangle-down-filled" style="color: #2ba471; font-size: var(--td-font-size-body-large)" />
                {{ order.yesterday }} 笔
              </div>
            </div>
          </div>
          <div style="display: flex; justify-content: space-between">
            <div style="width: 120px">总有效订单</div>
            <div>{{ order.total }} 笔</div>
          </div>
        </div>
      </t-card>
    </t-col>
  </t-row>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';

import { basic } from '@/api/admin/workbench';

const router = useRouter();
const goPage = (path: string) => {
  router.push({
    path,
  });
};
// const separator = () => h(Divider, { layout: 'vertical', style: 'height:100%' });

const price = ref({
  today: 0,
  yesterday: 0,
  total: 0,
  ratio: 0,
});
const order = ref({
  today: 0,
  yesterday: 0,
  total: 0,
});
const fetchData = async () => {
  const res = await basic();
  const { data } = res;
  price.value = data.price;
  order.value = data.order;
};
fetchData();
</script>
<style scoped>
:deep(.t-card__body) {
  padding-top: var(--td-comp-paddingTB-l) !important;
}

.icon {
  font-size: 60px;
  color: var(--td-brand-color);
  background: var(--td-brand-color-light);
  border-radius: var(--td-radius-medium);
  padding: 12px;
}
</style>
