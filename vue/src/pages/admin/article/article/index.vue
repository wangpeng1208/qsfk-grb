<template>
  <t-card title="文章管理" class="basic-container" :bordered="false">
    <div class="category-header c-flex">
      <t-form layout="inline" label-width="auto">
        <t-form-item label="栏目分类" name="cate_id">
          <t-select v-model="params.cate_id" clearable placeholder="请选择栏目分类" :options="categoryOptions" />
        </t-form-item>
        <t-form-item label="状态" name="status">
          <t-select
            v-model="params.status"
            clearable
            placeholder="请选择状态"
            :options="[
              { label: '全部', value: '' },
              { label: '启用', value: '1' },
              { label: '禁用', value: '0' },
            ]"
          />
        </t-form-item>
        <t-form-item label="添加时间" name="date_range">
          <t-date-range-picker enable-time-picker v-model="params.date_range" allow-input clearable cancel-range-select-limit />
        </t-form-item>
        <t-form-item>
          <t-space>
            <t-button theme="default" variant="outline" @click="fetchData">查询</t-button>
          </t-space>
        </t-form-item>
      </t-form>
    </div>
    <div class="category-header c-flex">
      <div class="l">
        <t-button v-perms="['adminapi/article/article/add']" theme="primary" @click="editRow()">添加</t-button>
      </div>
    </div>
    <t-base-table class="basic-table" ref="tableRef" row-key="id" :data="lists" :columns="columns" :header-affixed-top="headerAffixedTop" max-height="auto" table-layout="auto" :pagination="pagination" lazy-load :loading="dataLoading" @page-change="rehandlePageChange">
      <template #operate="{ row }">
        <t-space>
          <t-link v-perms="['adminapi/article/article/edit']" theme="primary" size="small" @click="editRow(row)">编辑</t-link>
          <t-link v-perms="['adminapi/article/article/del']" theme="danger" size="small" @click="deleteRow(row.id)">删除</t-link>
        </t-space>
      </template>
    </t-base-table>
    <edit-popup ref="editRef" @success="fetchData" />
  </t-card>
</template>
<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next';
import { ref, reactive } from 'vue';
import { table } from '@/hooks/table';
import { del, list } from '@/api/admin/article/article';
import { listSimple } from '@/api/admin/article/category';
import { columns } from './components/constant';
import EditPopup from './components/edit.vue';

const params = reactive<any>({
  date_range: [],
});
const { pagination, fetchData, dataLoading, headerAffixedTop, rehandlePageChange, lists } = table({
  fetchFun: list,
  params,
});
fetchData();

const editRef = ref();
const editRow = (row: { [key: string]: any } | null = null) => {
  editRef.value.init(row);
};
const deleteRow = async (id: number) => {
  const res = await del({
    id,
  });
  if (res.code === 1) {
    MessagePlugin.success('删除成功');
    fetchData();
  } else {
    MessagePlugin.error(res.msg);
  }
};
// 分类
const categoryOptions = ref([]);
const initCategory = async () => {
  const res = await listSimple();
  if (res.code === 1) {
    categoryOptions.value = res.data;
  }
};
initCategory();
</script>
