<template>
  <t-dialog v-model:visible="visible" :close-on-overlay-click="false" :destroy-on-close="true" header="分配权限" :on-confirm="onSubmit">
    <t-space style="margin: 10px 20px">
      <!-- <span>展开折叠: </span>
      <t-switch v-model="expandAll" /> -->
      <span> 父子联动 </span>
      <t-switch v-model="checkStrictly" />
    </t-space>
    <t-tree
      ref="tree"
      v-model="formData.rules"
      :data="menuOptions"
      checkable
      :check-strictly="!checkStrictly"
      value-mode="all"
      hover
      line
      :expand-all="expandAll"
      :keys="{
        label: 'title',
        value: 'id',
        children: 'children',
      }"
    />
  </t-dialog>
</template>

<script lang="ts">
export default {
  name: 'AdminEditPopup',
};
</script>

<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next';
import { reactive, ref } from 'vue';

import { list } from '@/api/admin/permission/menu';
import { auth, detail } from '@/api/admin/permission/role';

const expandAll = ref(false);
const checkStrictly = ref(false);
// 用户资料
const formData = reactive({
  rules: [],
  id: 0,
});
// 所有菜单
const menuOptions = ref();
const initMenuAuthOptions = async () => {
  const { data } = await list({
    app: 'admin',
  });
  menuOptions.value = data.list;
};
// 数据
const fetchData = async () => {
  const { data } = await detail({ id: formData.id });
  for (const key in formData) {
    if (key === 'rules') {
      // @ts-ignore
      formData[key] = data[key].split(',').map((item) => Number(item));
    } else {
      // @ts-ignore
      formData[key] = data[key];
    }
  }
};
// 窗口初始化
const visible = ref(false);
const init = (id: number) => {
  initMenuAuthOptions();
  formData.id = id;
  fetchData();

  visible.value = true;
};

defineExpose({
  init,
});

const emit = defineEmits(['success']);
const onSubmit = async () => {
  try {
    const res = await auth(formData);
    if (res.code !== 1) {
      MessagePlugin.error(res.msg);
      return;
    }
    MessagePlugin.success('操作成功');
    visible.value = false;
    emit('success');
  } catch (e) {
    MessagePlugin.error(e.msg);
  }
};
</script>
