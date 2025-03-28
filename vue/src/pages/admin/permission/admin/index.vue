<template>
  <t-card title="管理员管理" class="basic-container" :bordered="false">
    <div class="c-flex">
      <row-search ref="searchFormRef" @success="fetchData" />
    </div>
    <t-base-table class="basic-table" ref="tableRef" row-key="id" :data="lists" :columns="columns" :hover="lists.length > 0 ? true : false" :header-affixed-top="headerAffixedTop" :pagination="pagination" lazy-load table-layout="auto" max-height="auto" @page-change="onPageChange">
      <template #topContent>
        <t-button v-perms="['adminapi/permission/admin/add']" style="margin: 15px 0" theme="primary" @click="editRow()">添加</t-button>
      </template>
      <template #avatar="{ row }">
        <wp-image :src="row.avatar" style="width: 60px; height: 60px" shape="circle" />
      </template>
      <template #operate="{ row }">
        <t-space>
          <t-link v-perms="['adminapi/permission/admin/edit']" theme="primary" hover="color" @click="editRow(row.id)">编辑</t-link>
          <t-link v-if="row.id != 1" v-perms="['adminapi/permission/admin/setRoles']" theme="primary" hover="color" @click="roleRow(row.id)">分配角色</t-link>
          <t-popconfirm content="确认删除吗" @confirm="deleteRow(row.id)">
            <t-link theme="danger" v-perms="['adminapi/permission/admin/del']" hover="color"> 删除 </t-link>
          </t-popconfirm>
        </t-space>
      </template>
    </t-base-table>
    <edit-popup ref="editRef" @success="fetchData" />
    <role-popup ref="roleRef" @success="fetchData" />
  </t-card>
</template>
<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next';
import { computed, ref } from 'vue';

import { del, list } from '@/api/admin/permission/admin';
import { prefix } from '@/config/global';
import { useSettingStore } from '@/store';

import { columns } from './components/constant';
import EditPopup from './components/edit.vue';
import RolePopup from './components/role.vue';
import RowSearch from './components/search.vue';

const showSearchFrom = ref(false);
const searchText = computed(() => (showSearchFrom.value ? '收起搜索' : '展开搜索'));

const pagination = ref({
  defaultPageSize: 20,
  total: 0,
  defaultCurrent: 1,
});
const lists = ref([]);
// 避免丢失searchData·重要
const searchData = ref();
const fetchData = async (params = {}) => {
  searchData.value = { ...params };
  const { data } = await list({
    page: pagination.value.defaultCurrent,
    limit: pagination.value.defaultPageSize,
    ...searchData.value,
  });
  lists.value = data.list;
  pagination.value.total = data.total;
};
fetchData();

const onPageChange = (curr: any) => {
  pagination.value.defaultCurrent = curr.current;
  pagination.value.defaultPageSize = curr.pageSize;
  // 翻页参数应传入搜索数据
  fetchData(searchData.value);
};

const store = useSettingStore();
const headerAffixedTop = computed(
  () =>
    ({
      offsetTop: store.isUseTabsRouter ? 48 : 0,
      container: `.${prefix}-layout`,
    }) as any,
);
// 编辑/添加
const editRef = ref();
const editRow = (id = 0) => {
  editRef.value?.init(id);
};
const roleRef = ref();
const roleRow = (id = 0) => {
  roleRef.value?.init(id);
};
// 删除
const deleteRow = async (id: number) => {
  const res = await del({ id });
  if (res.code === 1) {
    MessagePlugin.success('删除成功');
    fetchData(searchData.value);
  } else {
    MessagePlugin.error(res.msg);
  }
};
</script>
