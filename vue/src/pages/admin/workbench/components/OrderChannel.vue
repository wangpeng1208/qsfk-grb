<template>
  <t-card title="总收款渠道" hover-shadow>
    <v-charts class="chart" :option="orderChannelOption()" autoresize />
  </t-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import vCharts from 'vue-echarts';

import { channelCollectionOrderPriceSum } from '@/api/admin/workbench';
import { loadECharts } from '@/utils/echarts';

const orderData = ref([]);

const orderChannelOption = () => {
  loadECharts();
  return {
    title: {
      show: false,
    },
    tooltip: {
      triggerOn: 'mousemove',
      trigger: 'item',
    },
    grid: {
      top: '3%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: orderData.value.map((item) => item.name),
    },
    yAxis: {
      type: 'value',
      splitNumber: 3,
    },
    series: [
      // 柱状图
      {
        type: 'bar',
        data: orderData.value.map((item) => item.value),
        barWidth: '30%',
        label: {
          show: true,
          formatter: '{b} : {c}',
        },
      },
    ],
  };
};

const fetchData = async () => {
  const res = await channelCollectionOrderPriceSum();
  orderData.value = res.data || [];
};
fetchData();
</script>
<style scoped>
.chart {
  height: 200px;
  width: 100%;
}
</style>
