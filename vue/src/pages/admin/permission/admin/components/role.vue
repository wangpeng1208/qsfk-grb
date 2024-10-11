<template>
  <t-dialog v-model:visible="visible" :close-on-overlay-click="false" :destroy-on-close="true" header="分配权限" :on-confirm="onSubmit">
    <t-tree ref="tree" v-model="formData.role" :data="menuOptions" expand-all checkable :check-strictly="!checkStrictly" value-mode="all" hover line />
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

import { getRoles, setRoles } from '@/api/admin/permission/admin';
import { listSimpleTree } from '@/api/admin/permission/role';

const checkStrictly = ref(false);
// 用户资料
const formData = reactive({
  role: [],
  id: 0,
});
// 所有菜单
const menuOptions = ref();
const initMenuAuthOptions = async () => {
  const { data } = await listSimpleTree();
  menuOptions.value = data.list;
};
// 数据
const fetchData = async () => {
  const { data } = await getRoles({ id: formData.id });
  for (const key in formData) {
    if (key === 'role') {
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
    const res = await setRoles(formData);
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
