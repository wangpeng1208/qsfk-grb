<template>
  <t-card title="订单列表" :bordered="false">
    <template #actions>
      <a href="javascript:void(0)" @click="showSearchFrom = !showSearchFrom">{{ searchText }}</a>
    </template>
    <div class="category-header c-flex">
      <row-search v-if="showSearchFrom" ref="searchFormRef" :pay-type-options="payTypeOptions"
        @success="searchFetchData" />
    </div>
    <div class="category-header c-flex">
      <div class="l">
        <t-radio-group v-model="dateType" default-value="1" @change="dataTypeChange">
          <t-radio-button value="">全部</t-radio-button>
          <t-radio-button value="1">今日</t-radio-button>
          <t-radio-button value="2">昨日</t-radio-button>
          <t-radio-button value="3">本周</t-radio-button>
          <t-radio-button value="4">本月</t-radio-button>
          <t-radio-button value="5">本年</t-radio-button>
        </t-radio-group>
      </div>

      <div class="r c-flex">
        <t-button @click="clearData" variant="outline">清空已关闭</t-button>
        <t-button theme="danger" :disabled="!selectedRowKeys.length" @click="batchDel">选择删除<p
            v-if="!!selectedRowKeys.length" class="selected-count">({{ selectedRowKeys.length }})</p></t-button>

      </div>
    </div>
    <!-- table-layout="tableLayout ? 'auto' : 'fixed'" -->
    <t-table size="small" :data="lists" :columns="columns" row-key="id" vertical-align="middle"
      :hover="lists.length > 0 ? true : false" table-layout="auto" :pagination="pagination"
      :header-affixed-top="headerAffixedTop" max-height="100%" @page-change="rehandlePageChange"
      :selected-row-keys="selectedRowKeys" @select-change="rehandleSelectChange" lazy-load :loading="loading">
      <template #trade_no="{ row }">
        <t-tooltip placement="right" content="点击复制" theme="light">
          <div theme="primary" variant="outline" @click="copyText(row.trade_no)">{{ row.trade_no }}</div>
        </t-tooltip>
      </template>
      <template #operate="{ row }">
        <t-space>
          <t-link theme="primary" @click="detailRow(row)" size="small">详情</t-link>
          <t-link hover="color" size="small" variant="outline" theme="primary" @click="goPage(row.id)">查看卡密</t-link>
          <t-popconfirm content="确认删除吗" @confirm="delRow(row)">
            <t-link v-perms="['adminapi/order/order/del']" theme="danger" hover="color" size="small">
              删除
            </t-link>
          </t-popconfirm>
        </t-space>
      </template>
      <template #empty>
        <!-- <result title="" tip="暂无相关数据 " type="list"> </result> -->
      </template>
    </t-table>
    <row-detail ref="detailRef" :pay-type-options="payTypeOptions" />
  </t-card>
</template>

<script setup lang="ts">
import { DialogPlugin, MessagePlugin } from 'tdesign-vue-next';
import { computed, reactive, ref } from 'vue';

import { payTypeSimple } from '@/api/admin/channel/pay_type';
import { delBatch, clear, del, list } from '@/api/admin/order/order';
import { baseUrl } from '@/api/base';
import { prefix } from '@/config/global';
import { useSettingStore } from '@/store';
import { copyText, downloadFile } from '@/utils/common';

import { columns } from './components/constant';
import RowDetail from './components/detail.vue';
import RowSearch from './components/search.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const pagination = ref({
  defaultPageSize: 10,
  total: 0,
  defaultCurrent: 1,
});
const lists = ref([]);
const loading = ref(false);
// 搜索
const searchData = reactive<any>({});
const showSearchFrom = ref(false);
const searchText = computed(() => (showSearchFrom.value ? '收起搜索' : '展开搜索'));
const dateType = ref('');
// dateType变化
const dataTypeChange = (val: any) => {
  searchData.date_type = val;
  searchFetchData();
};

const clearData = async () => {
  const res = await clear();
  if (res.code === 1) {
    MessagePlugin.success(res.msg);
    fetchData();
  } else {
    MessagePlugin.error(res.msg);
  }
};
// 搜索
const searchFetchData = async (params = {}) => {
  // params 合并到 searchData
  Object.assign(searchData, params);
  pagination.value.defaultPageSize = 20;
  delete searchData.action;
  fetchData();
};
// 数据加载
const fetchData = async () => {
  const value = {
    page: pagination.value.defaultCurrent,
    limit: pagination.value.defaultPageSize,
    ...searchData,
  };
  loading.value = true;
  const res = await list(value);
  if (searchData.action === 'dump') {
    if (res.code === 1) {
      MessagePlugin.success(res.msg);
      downloadFile(res.data.url);
    } else {
      MessagePlugin.error(res.msg);
    }
  } else {
    lists.value = res.data.list;
    pagination.value = {
      ...pagination.value,
      total: res.data.total,
    };
  }
  loading.value = false;
};
fetchData();

const rehandlePageChange = (curr: any) => {
  pagination.value.defaultCurrent = curr.current;
  pagination.value.defaultPageSize = curr.pageSize;
  fetchData();
};
// 详情
const detailRef = ref();
const detailRow = (row: any) => {
  detailRef.value?.init(row);
  // 向子组件传递数据 payTypeOptions
};

const delRow = async (row: any) => {
  const res = await del({
    id: row.id,
  });
  if (res.code === 1) {
    MessagePlugin.success(res.msg);
    fetchData();
  } else {
    MessagePlugin.error(res.msg);
  }
};

const payTypeOptions = ref();
// 加载支付分类
const initPayTypeOptions = async () => {
  const { data } = await payTypeSimple();
  data.forEach((item: any, key: any) => {
    data[key].ico = baseUrl + item.ico;
  });
  // console.log(data);
  payTypeOptions.value = data;
};
initPayTypeOptions();

const store = useSettingStore();
const headerAffixedTop = computed(() => ({
  offsetTop: store.isUseTabsRouter ? 48 : 0,
  container: `.${prefix}-layout`,
}));

const selectedRowKeys = ref<number[]>([]);
const rehandleSelectChange = (val: (string | number)[]) => {
  selectedRowKeys.value = val as number[];
};
// 批量删除
const batchDel = async () => {
  const confirmDia = DialogPlugin({
    header: '提醒',
    body: `是否确认删除所选订单？`,
    confirmBtn: '确认',
    onConfirm: () => {
      confirmDia.hide();
      const data = {
        ids: selectedRowKeys.value,
      };
      delBatch(data).then((res) => {
        if (res.code === 1) {
          fetchData();
          MessagePlugin.success(res.msg);
          selectedRowKeys.value = [];
        } else {
          MessagePlugin.error(res.msg);
        }
      });
    },
    onClose: () => {
      confirmDia.hide();
    },
  });
};
const goPage = (id: number) => {
  router.push({
    name: 'adminOrderCard',
    query: {
      id,
    },
  });
};
</script>
<style lang="less" scoped>
.selected-count {
  display: inline-block;
  margin-left: 5px;
}
</style>