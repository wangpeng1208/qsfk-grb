<template>
  <t-drawer v-model:visible="visible" :close-on-overlay-click="true" :destroy-on-close="true" :size-draggable="true" size="80%" :header="title" :on-confirm="onSubmit">
    <div style="padding: 20px 0; max-width: 800px; margin: 0 auto">
      <t-descriptions :title="`${fetchData.trade_no}的订单详情`" table-layout="auto" bordered>
        <t-descriptions-item label="订单号">{{ fetchData?.trade_no }}</t-descriptions-item>
        <t-descriptions-item label="交易流水号">{{ fetchData?.transaction_id }}</t-descriptions-item>
        <t-descriptions-item label="商品ID">{{ fetchData.goods_id }}</t-descriptions-item>
        <t-descriptions-item label="商品名称">{{ fetchData.goods_name }}</t-descriptions-item>
        <t-descriptions-item label="卡密数量">{{ fetchData.quantity }}</t-descriptions-item>
        <t-descriptions-item label="商品单价">{{ fetchData.goods_price }}</t-descriptions-item>
        <t-descriptions-item label="商品成本价">{{ fetchData.goods_cost_price }}</t-descriptions-item>
        <t-descriptions-item label="总价">{{ fetchData.total_price }}</t-descriptions-item>
        <t-descriptions-item label="总成本价">{{ fetchData.total_cost_price }}</t-descriptions-item>
        <t-descriptions-item label="优惠券">
          <span v-if="fetchData.coupon_type">优惠{{ fetchData.coupon_price }}元</span>
          <span v-else>未使用</span>
        </t-descriptions-item>

        <t-descriptions-item label="取卡 密码">
          {{ fetchData.take_card_type === 2 ? fetchData.take_card_password : '未设置' }}
        </t-descriptions-item>
        <t-descriptions-item label="联系方式">{{ fetchData.contact }}</t-descriptions-item>
        <t-descriptions-item label="邮件通知">
          {{ fetchData.email_notify === 1 ? fetchData.email : '未设置' }}
        </t-descriptions-item>
        <t-descriptions-item label="短信通知">
          {{ fetchData.sms_notify === 1 ? fetchData.contact : '未设置' }}
        </t-descriptions-item>
        <t-descriptions-item label="支付类型">{{ paytype }}</t-descriptions-item>
        <t-descriptions-item label="交易通道">{{ fetchData?.channel?.title }}</t-descriptions-item>
        <t-descriptions-item label="状态">
          <t-tag v-for="status in filteredStatusOptions" :key="status.value" :theme="status.theme">
            {{ status.label }}
          </t-tag>
        </t-descriptions-item>
        <t-descriptions-item label="取卡状态">
          <template v-if="fetchData.cards_count > 0">
            <template v-if="fetchData.cards_count >= fetchData.quantity"> 已取 </template>
            <template v-else> 已取部分 </template>
          </template>
          <template v-else> 未取 </template>
        </t-descriptions-item>
        <t-descriptions-item label="提交时间">{{ formatTime(fetchData.create_at) }}</t-descriptions-item>
        <t-descriptions-item label="完成时间">
          {{ fetchData.success_at > 0 ? formatTime(fetchData.success_at) : '' }}
        </t-descriptions-item>
        <t-descriptions-item label="提交IP">{{ fetchData.create_ip }}</t-descriptions-item>
        <t-descriptions-item label="查询卡密">
          <a :href="'/order?orderId=' + fetchData.trade_no" target="_blank">查看</a>
        </t-descriptions-item>
      </t-descriptions>
    </div>
  </t-drawer>
</template>
<script lang="ts">
export default {
  name: 'RowDetail',
};
</script>
<script setup lang="ts">
import { computed, reactive, ref, toRefs } from 'vue';

import { formatTime } from '@/utils/date';

import { statusOptions } from './constant';

// props payTypeOptions

const props = defineProps({
  payTypeOptions: {
    type: Array as () => { value: string | number; label: string; ico: string }[],
    default: () => [],
  },
});
const { payTypeOptions } = toRefs(props);
const paytype = computed(() => {
  return payTypeOptions.value.find((item) => item.value === fetchData.paytype)?.label;
});
const filteredStatusOptions = computed(() => {
  return statusOptions.filter((status) => status.value === fetchData.status);
});
const title = ref('订单详情');
const visible = ref(false);
const fetchData = reactive<any>({});
const init = (row: any) => {
  visible.value = true;
  Object.assign(fetchData, row);
};
const onSubmit = () => {
  visible.value = false;
};
defineExpose({
  init,
});
</script>
