<template>
  <t-card title="商品分类" class="basic-container" :bordered="false">
    <t-table :data="lists" class="basic-table" drag-sort="row-handler" :columns="COLUMNS" row-key="id"
      vertical-align="middle" :hover="lists.length > 0 ? true : false" :selected-row-keys="selectedRowKeys"
      :loading="dataLoading" lazy-load :header-affixed-top="headerAffixedTop" max-height="100%" :pagination="pagination"
      :filter-value="filterValue" @drag-sort="onDragSort" @page-change="rehandlePageChange"
      @select-change="rehandleSelectChange" @filter-change="onFilterChange" table-layout="auto">
      <template #topContent>
        <t-button v-perms="['adminapi/goods/category/add']" class="mb15" @click="addRow()">
          <template #icon><t-icon name="add" /></template>
          添加分类
        </t-button>
      </template>
      <template #goods_count="{ row }">
        <t-space>
          <t-link size="small" theme="primary" @click="router.push(`/admin/goods/index?cate_id=${row.id}`)"> {{
    row.goods_count }}
          </t-link>
        </t-space>
      </template>
      <template #status="{ row }">
        <t-switch v-model="row.status" :custom-value="[1, 0]" @click="onChangeStatus(row)" />
      </template>
      <template #is_show="{ row }">
        <t-switch v-model="row.is_show" :custom-value="[1, 0]" @click="onChangeShow(row)" />
      </template>
      <template #image="{ row }">
        <wp-image :src="row.image" style="width: 60px; height: 60px" />
      </template>

      <template #operation="{ row }">
        <t-space>
          <t-link size="small" theme="primary" hover="color"
            @click="router.push(`/admin/goods/add?cate_id=${row.id}`)">添加商品</t-link>
          <t-link size="small" v-perms="['adminapi/goods/card']" theme="primary" hover="color"
            @click="router.push(`/admin/goods/card?cate_id=${row.id}`)">库存卡</t-link>
          <t-link size="small" v-perms="['adminapi/goods/category/edit']" theme="primary" hover="color"
            @click="editRow(row)">编辑</t-link>
          <t-link size="small" v-perms="['adminapi/goods/category/del']" theme="danger" hover="color"
            @click="delRow(row)">删除</t-link>
        </t-space>
      </template>
      <template #empty>
        <result title="" tip="商品分类为空" type="list"> </result>
      </template>
    </t-table>

    <edit-popup ref="editRef" @success="fetchData" />
  </t-card>
</template>

<script lang="ts">
export default {
  name: 'GoodsCategory',
};
</script>

<script setup lang="ts">
import { DialogPlugin, NotifyPlugin } from 'tdesign-vue-next';
import { computed, nextTick, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

import { del, list, status } from '@/api/admin/goods/category';
import Result from '@/components/result/index.vue';
import { prefix } from '@/config/global';
import { useSettingStore } from '@/store';

import { COLUMNS } from './components/constant';
import EditPopup from './components/edit.vue';
import { debounce } from '@/utils/common';

const store = useSettingStore();
const router = useRouter();
const search = reactive({
  name: '',
  status: '',
});

// 分页
const pagination = ref({
  defaultPageSize: 20,
  total: 0,
  defaultCurrent: 1,
});
// 列表数据
const lists = ref([]);
const dataLoading = ref(false);
const fetchData = async () => {
  dataLoading.value = true;
  const value = {
    page: pagination.value.defaultCurrent,
    limit: pagination.value.defaultPageSize,
    ...search,
  };
  try {
    const { data } = await list(value);
    lists.value = data.list;
    pagination.value = {
      ...pagination.value,
      total: data.total,
    };
  } catch (e) {
    // console.log(e);
  } finally {
    dataLoading.value = false;
  }
};

fetchData();

const selectedRowKeys = ref([]);
const rehandleSelectChange = (val: (string | number)[]) => {
  selectedRowKeys.value = val as number[];
};

const rehandlePageChange = (curr: any, pageInfo: any) => {
  pagination.value.defaultCurrent = curr.current;
  pagination.value.defaultPageSize = curr.pageSize;
  fetchData();
};


// 编辑添加弹窗
const editRef = ref();
const editRow = async (row: any) => {
  await nextTick();
  editRef.value?.open('edit');
  editRef.value?.getDetail(row);
};

const addRow = async () => {
  await nextTick();
  editRef.value?.open('add');
};

const delRow = async (row: any) => {
  const confirmDia = DialogPlugin({
    header: '提醒？',
    body: `是否确认删除(${row.name})？`,
    confirmBtn: '确认',
    onConfirm: () => {
      confirmDia.hide();
      const { id } = row;
      const data = {
        ids: [id],
      };
      del(data)
        .then((res) => {
          if (res.code === 1) {
            fetchData();
            NotifyPlugin.success({ title: '提醒', content: '删除成功' });
          } else {
            NotifyPlugin.success({ title: '提醒', content: `删除失败：${res.msg}` });
          }
        })
        .catch(() => {
          NotifyPlugin.success({ title: '提醒', content: `删除失败` });
        });
    },
    onClose: () => {
      confirmDia.hide();
    },
  });
};

const changeRow = async (data: any) => {
  try {
    const result = await status(data);
    if (result.code === 1) {
      NotifyPlugin.success({ title: '提醒', content: '修改成功' });
    } else {
      NotifyPlugin.error({ title: '提醒', content: `修改失败：${result.msg}` });
    }
  } catch (error) {
    NotifyPlugin.error({ title: '提醒', content: '修改失败' });
  }
  fetchData();
};

const onChangeStatus = debounce(async (row: any) => {
  const { id, status } = row;
  const data = {
    id,
    field: 'status',
    value: status,
  };
  changeRow(data);
});
const onChangeShow = debounce(async (row: any) => {
  const data = {
    id: row.id,
    field: 'is_show',
    value: row.is_show,
  };
  changeRow(data);
});
const onDragSort = (params: any) => {
  // console.log(params);
  if (params.currentIndex - params.targetIndex > 0) {
    // 上移
    const data = {
      id: params.current.id,
      field: 'sort',
      value: params.target.sort + 1,
    };
    changeRow(data);
  } else {
    // 下移
    const data = {
      id: params.current.id,
      field: 'sort',
      value: params.target.sort - 1,
    };
    changeRow(data);
  }
};

const filterValue = ref(null);
const onFilterChange = (value: any) => {
  filterValue.value = value;
  // console.log(value);
  search.name = value?.name;
  search.status = value?.status;
  fetchData();
};
const headerAffixedTop = computed(
  () =>
    ({
      offsetTop: store.isUseTabsRouter ? 48 : 0,
      container: `.${prefix}-layout`,
    }) as any,
);
</script>
