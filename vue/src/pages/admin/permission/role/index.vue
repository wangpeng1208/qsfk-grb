<template>
  <t-card title="管理员角色管理" class="basic-container" :bordered="false">
    <div class="category-header c-flex">
      <div class="l"><t-button v-perms="['adminapi/permission/role/add']" theme="primary" @click="editRow()">添加</t-button></div>
    </div>

    <t-base-table class="basic-table" ref="tableRef" row-key="id" :data="lists" :columns="columns" :hover="lists.length > 0 ? true : false" :header-affixed-top="headerAffixedTop" :pagination="pagination" lazy-load table-layout="auto" max-height="100%" @page-change="onPageChange">
      <template #avatar="{ row }">
        <wp-image :src="row.avatar" style="width: 60px; height: 60px" />
      </template>
      <template #operate="{ row }">
        <t-space v-if="row.id != 1">
          <t-link v-perms="['adminapi/permission/role/edit']" theme="primary" hover="color" @click="editRow(row.id)">编辑</t-link>
          <t-link v-perms="['adminapi/permission/role/rule']" theme="primary" hover="color" @click="rulesRow(row.id)">分配权限</t-link>
          <t-link v-perms="['adminapi/permission/role/del']" theme="danger" hover="color" @click="deleteRow(row.id)">删除</t-link>
        </t-space>
      </template>
    </t-base-table>
    <edit-popup ref="editRef" @success="fetchData" />
    <rule-popup ref="ruleRef" @success="fetchData" />
  </t-card>
</template>
<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next';
import { computed, ref } from 'vue';

import { del, list } from '@/api/admin/permission/role';
import { prefix } from '@/config/global';
import { useSettingStore } from '@/store';

import { columns } from './components/constant';
import EditPopup from './components/edit.vue';
import RulePopup from './components/rule.vue';

const pagination = ref({
  defaultPageSize: 20,
  total: 0,
  defaultCurrent: 1,
});
const lists = ref([]);
// 避免丢失searchData·重要
const searchData = ref();
const fetchData = async (params = {}) => {
  searchData.value = params;
  const { data } = await list({
    page: pagination.value.defaultCurrent,
    limit: pagination.value.defaultPageSize,
    ...params,
  });
  lists.value = data.list;
  pagination.value.total = data.total;
};
fetchData();

const onPageChange = (curr: any) => {
  pagination.value.defaultCurrent = curr.current;
  pagination.value.defaultPageSize = curr.pageSize;
  // 翻页参数应传入搜索数据
  fetchData(searchData);
};

const store = useSettingStore();
const headerAffixedTop = computed(() => ({
  offsetTop: store.isUseTabsRouter ? 48 : 0,
  container: `.${prefix}-layout`,
}));
// 编辑/添加
const editRef = ref();
const editRow = (id = 0) => {
  editRef.value?.init(id);
};
const ruleRef = ref();
const rulesRow = (id = 0) => {
  ruleRef.value?.init(id, true);
};
// 删除
const deleteRow = async (id: number) => {
  const res = await del({ id });
  if (res.code === 1) {
    MessagePlugin.success('删除成功');
    fetchData();
  }
};
</script>
