<template>
  <t-form layout="inline" label-width="100px">
    <t-form-item label="联系方式" name="contact">
      <t-input v-model="params.contact" clearable placeholder="请输入联系方式">
        <template #suffix-icon>
          <search-icon />
        </template>
      </t-input>
    </t-form-item>
    <t-form-item label="订单号码" name="trade_no">
      <t-input v-model="params.trade_no" clearable placeholder="请输入订单号码">
        <template #suffix-icon>
          <search-icon />
        </template>
      </t-input>
    </t-form-item>
    <t-form-item label="收款通道" name="channel_id">
      <t-select v-model="params.channel_id" :clear="fetchData" placeholder="请选择收款通道" type="search" clearable :options="payChannelOptions" />
    </t-form-item>
    <t-form-item label="支付方式" name="paytype">
      <t-select v-model="params.paytype" clearable placeholder="请选择支付方式">
        <t-option v-for="item in payTypeOptions" :key="item?.value" :value="item.value" :label="item.label">
          <div class="tdesign-demo__user-option">
            <img :src="item.ico" style="width: 16px" />
            <div class="tdesign-demo__user-option-info">
              <div>{{ item.label }}</div>
            </div>
          </div>
        </t-option>
      </t-select>
    </t-form-item>
    <t-form-item label="订单状态" name="status">
      <t-select v-model="params.status" :clear="fetchData" placeholder="全部分类" type="search" clearable :options="statusOptions" />
    </t-form-item>
    <t-form-item label="冻结状态" name="is_freeze">
      <t-select v-model="params.is_freeze" :clear="fetchData" placeholder="全部分类" type="search" clearable :options="freezeStatusOptions" />
    </t-form-item>
    <t-form-item label="商品ID" name="goods_id">
      <t-input v-model="params.goods_id" clearable placeholder="请输入商品ID">
        <template #suffix-icon>
          <search-icon />
        </template>
      </t-input>
    </t-form-item>
    <t-form-item label="下单时间" name="date_range">
      <t-date-range-picker enable-time-picker v-model="params.date_range" allow-input clearable cancel-range-select-limit />
    </t-form-item>
    <t-form-item>
      <t-space>
        <t-button theme="default" variant="outline" @click="fetchData">查询</t-button>
      </t-space>
    </t-form-item>
  </t-form>
</template>

<script lang="ts">
export default {
  name: 'RowSearch',
};
</script>
<script setup lang="ts">
import { SearchIcon } from 'tdesign-icons-vue-next';
import { reactive, ref, toRefs } from 'vue';

import { listSimple } from '@/api/admin/channel/collection';

import { statusOptions } from './constant';

const props = defineProps({
  payTypeOptions: {
    type: Array as () => { value: string | number; label: string; ico: string }[],
    default: () => [],
  },
});
const { payTypeOptions } = toRefs(props);

const params = reactive<any>({
  date_range: [],
});

const emit = defineEmits(['success']);
const fetchData = () => {
  emit('success', params);
};
// const statusOptions = ref([
//   { label: '全部订单', value: '' },
//   { label: '已成功', value: 1 },
//   { label: '未支付', value: 0 },
//   { label: '已退款', value: 3 },
// ]);
const freezeStatusOptions = ref([
  { label: '全部订单', value: '' },
  { label: '未冻结', value: 0 },
  { label: '已冻结', value: 1 },
]);

const payChannelOptions = ref();
// 加载支付通道
const initPayChannelOptions = async () => {
  const { data } = await listSimple();
  payChannelOptions.value = data;
};
initPayChannelOptions();
</script>

<style scoped>
.tdesign-demo__user-option {
  display: flex;
}

.tdesign-demo__user-option > img {
  max-width: 16px;
  max-height: 16px;
  border-radius: 50%;
}

.tdesign-demo__user-option-info {
  margin-left: 16px;
}
</style>
