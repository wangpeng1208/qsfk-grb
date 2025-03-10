<template>
  <t-card title="菜单管理" class="basic-container" :bordered="false">
    <div class="category-header c-flex">
      <div class="l">
        <t-button v-perms="['adminapi/permission/menu/add']" theme="primary" @click="editRow()">添加</t-button>
        <t-button theme="default" @click="toggleExpandAll">{{ expandAll ? '收起全部' : '展开全部' }}</t-button>
      </div>
    </div>
    <t-enhanced-table ref="tableRef" v-model:expandedTreeNodes="expandedTreeNodes" row-key="id" :data="lists" :columns="columns" :tree="treeConfig" :hover="lists.length > 0 ? true : false" max-height="auto" table-layout="auto" :header-affixed-top="headerAffixedTop" :tree-expand-and-fold-icon="treeExpandIcon" lazy-load>
      <template #icon="{ row }">
        <t-icon :name="row.icon" />
      </template>
      <template #hidden="{ row }">
        <t-tag v-if="row.hidden == 1" theme="danger" variant="light">隐藏</t-tag>
        <t-tag v-else theme="success" variant="light">显示</t-tag>
      </template>
      <!-- type -->
      <template #type="{ row }">
        <t-tag v-if="row.type == 'L'" theme="success" variant="light">目录</t-tag>
        <t-tag v-else-if="row.type == 'M'" theme="primary" variant="light">菜单</t-tag>
        <t-tag v-else-if="row.type == 'B'" theme="warning" variant="light">按钮</t-tag>
      </template>
      <template #operate="{ row }">
        <t-space>
          <t-link v-perms="['adminapi/permission/menu/add']" theme="primary" hover="color" @click="editRow(0, row.id)">添加</t-link>
          <t-link v-perms="['adminapi/permission/menu/edit']" theme="primary" hover="color" @click="editRow(row.id)">编辑</t-link>
          <t-popconfirm content="确认删除吗" @confirm="deleteRow(row.id)">
            <t-link v-perms="['adminapi/permission/menu/del']" theme="danger" hover="color"> 删除 </t-link>
          </t-popconfirm>
        </t-space>
      </template>
    </t-enhanced-table>
    <admin-menu-edit-popup ref="editRef" @success="fetchData" />
  </t-card>
</template>

<script setup lang="ts">
// todo 处理展开后的存储 避免刷新后的还原展开结构
import { ChevronDownIcon, ChevronRightIcon } from 'tdesign-icons-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';
// getCurrentInstance 用于获取当前组件实例；nextTick 用于在下次 DOM 更新循环结束之后执行延迟回调
import { computed, nextTick, reactive, ref } from 'vue';

import { del, list } from '@/api/admin/permission/menu';
import { prefix } from '@/config/global';
import { useSettingStore } from '@/store';

import { columns } from './components/constant';
import AdminMenuEditPopup from './components/edit.vue';

const expandedTreeNodes = ref([]);
// 自定义树形展开图标
const treeExpandAndFoldIconRender = (h: any, { type }: any) => {
  return type === 'expand' ? h(ChevronRightIcon) : h(ChevronDownIcon);
};
const treeExpandIcon = computed(() => {
  return treeExpandAndFoldIconRender;
});
// 结构收起全部/展开全部
const tableRef = ref(null);
const expandAll = ref(false);
function toggleExpandAll() {
  expandAll.value = !expandAll.value;
  refreshExpandAll();
}
const refreshExpandAll = async () => {
  await nextTick();
  if (expandAll.value) {
    tableRef.value.expandAll();
  } else {
    tableRef.value.foldAll();
  }
};

// 表格数据
const lists = ref([]);
const fetchData = async () => {
  const res = await list({});
  if (res.code) {
    lists.value = res.data.list;
  } else {
    MessagePlugin.error({ content: res.msg, duration: 0, closeBtn: true });
  }
};
fetchData();

const treeConfig = reactive({
  childrenKey: 'children',
  treeNodeColumnIndex: 0,
  indent: 25,
  expandTreeNodeOnClick: false,
});

// 编辑/添加
const editRef = ref();
const editRow = (id = 0, pid = 0) => {
  editRef.value?.init(id, pid);
};
const deleteRow = async (id: number) => {
  const { msg } = await del({ id });
  MessagePlugin.success(msg);
  fetchData();
};
// 表头吸顶
const store = useSettingStore();
const headerAffixedTop = computed(() => ({
  offsetTop: store.isUseTabsRouter ? 48 : 0,
  container: `.${prefix}-layout`,
}));
</script>
