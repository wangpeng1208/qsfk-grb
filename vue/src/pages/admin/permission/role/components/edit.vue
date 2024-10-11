<template>
  <t-dialog v-model:visible="visible" :close-on-overlay-click="false" :destroy-on-close="true" :header="title" :on-confirm="onSubmit">
    <t-form ref="formRef" label-align="left" :data="formData" :rules="FORM_RULES" :label-width="80">
      <t-form-item label="上级角色" name="pid">
        <t-tree-select v-model="formData.pid" placeholder="请选择上级角色" :data="roleOptions" clearable filterable check-strictly :min-collapsed-num="2" />
      </t-form-item>
      <t-form-item label="角色名" name="name">
        <t-input v-model="formData.name" clearable placeholder="请输入角色名" />
      </t-form-item>
    </t-form>
  </t-dialog>
</template>

<script lang="ts">
export default {
  name: 'AdminEditPopup',
};
</script>

<script setup lang="ts">
import { FormRule, MessagePlugin } from 'tdesign-vue-next';
import { reactive, ref } from 'vue';

import { detail, edit, listSimpleTree } from '@/api/admin/permission/role';

const DATA = {
  pid: '',
  name: '',
  id: '',
};

const formData = reactive({ ...DATA });

const roleOptions = ref([]);

const initRoleOptions = async () => {
  const { data } = await listSimpleTree();
  roleOptions.value = data.list;
};
const visible = ref(false);
const title = ref('添加角色');
const init = (id: number) => {
  if (id) {
    title.value = '编辑角色';
    getDetail(id);
  } else {
    title.value = '添加角色';
    for (const key in DATA) {
      // @ts-ignore
      formData[key] = DATA[key];
    }
  }

  initRoleOptions();
  visible.value = true;
};

const getDetail = async (id: number) => {
  const { data } = await detail({ id });
  for (const key in formData) {
    if (data[key] != null && data[key] !== undefined) {
      if (key === 'role') {
        // todo 多选，避免子选择完后 父级被动选择，或者父级选择后，子级被动选择。实现部门管理的效果
        // @ts-ignore
        formData[key] = data[key].map((item: any) => item.id);
      } else {
        // @ts-ignore
        formData[key] = data[key];
      }
    }
  }
};

defineExpose({
  init,
});

const formRef = ref(null);

// 表单验证规则
const FORM_RULES: Record<string, FormRule[]> = {
  role: [{ required: true, message: '必填', type: 'error' }],
  name: [{ required: true, message: '必填', type: 'error' }],
};
const emit = defineEmits(['success']);
const onSubmit = async () => {
  const result = await formRef.value.validate();
  if (typeof result !== 'object' && result) {
    try {
      const res = await edit(formData);
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
  }
};
</script>
