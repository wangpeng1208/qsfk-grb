<template>
  <t-card title="后台操作日志" class="basic-container" :bordered="false">
    <div class="category-header c-flex">
      <row-search ref="searchFormRef" @success="fetchData" />
    </div>
    <div class="category-header c-flex">
      <div class="l">
        <t-button v-perms="['adminapi/permission/log/delBatch']" theme="default" :disabled="!selectedRowKeys.length" @click="batchDel"> 批量删除 </t-button>
        <p v-if="!!selectedRowKeys.length" class="selected-count">已选{{ selectedRowKeys.length }}项</p>
      </div>
    </div>
    <t-table ref="tableRef" row-key="id" :data="lists" :columns="columns" :hover="lists.length > 0 ? true : false" :header-affixed-top="headerAffixedTop" :pagination="pagination" lazy-load max-height="100%" :selected-row-keys="selectedRowKeys" @page-change="onPageChange" @select-change="rehandleSelectChange" :loading="loading" />
  </t-card>
</template>
<script setup lang="ts">
import { DialogPlugin, MessagePlugin } from 'tdesign-vue-next';
import { computed, ref } from 'vue';

import { delBatch, list } from '@/api/admin/permission/log';
import { prefix } from '@/config/global';
import { useSettingStore } from '@/store';

import { columns } from './components/constant';
import RowSearch from './components/search.vue';

const selectedRowKeys = ref<number[]>([]);

const rehandleSelectChange = (val: (string | number)[]) => {
  selectedRowKeys.value = val as number[];
};

// 批量删除
const batchDel = async () => {
  const confirmDia = DialogPlugin({
    header: '提醒',
    body: `是否确认删除？`,
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

const pagination = ref({
  defaultPageSize: 20,
  total: 0,
  defaultCurrent: 1,
});
const lists = ref([]);
const loading = ref(false);
// 避免丢失searchData·重要
const searchData = ref();
const fetchData = async (params = {}) => {
  searchData.value = { ...params };
  loading.value = true;
  const { data } = await list({
    page: pagination.value.defaultCurrent,
    limit: pagination.value.defaultPageSize,
    ...searchData.value,
  });
  lists.value = data.list;
  pagination.value.total = data.total;
  loading.value = false;
};
fetchData();

const onPageChange = (curr: any) => {
  pagination.value.defaultCurrent = curr.current;
  pagination.value.defaultPageSize = curr.pageSize;
  // 翻页参数应传入搜索数据
  fetchData(searchData.value);
};

const store = useSettingStore();
const headerAffixedTop = computed(() => ({
  offsetTop: store.isUseTabsRouter ? 48 : 0,
  container: `.${prefix}-layout`,
}));
</script>
<style lang="less" scoped>
.selected-count {
  display: inline-block;
  margin-left: 8px;
  color: var(--td-text-color-secondary);
}
</style>
