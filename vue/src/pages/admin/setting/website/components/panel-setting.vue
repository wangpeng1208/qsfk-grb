<template>
  <div class="basic-container" :bordered="false">
    <t-form ref="formRef" label-align="left" :data="formData" :rules="FORM_RULES" :label-width="150">
      <t-form-item label="面板大logo" name="merchant_logo" tips="推荐宽高比2：1">
        <wp-upload theme="image" :initial="formData" name="merchant_logo" app="admin" :data="{ type: 'image' }" @update="handleUpdateImage" />
      </t-form-item>
      <t-form-item label="面板小logo" name="merchant_logo_sm" tips="推荐宽高比1：1">
        <wp-upload theme="image" :initial="formData" name="merchant_logo_sm" app="admin" :data="{ type: 'image' }" @update="handleUpdateImage" />
      </t-form-item>
      <t-form-item label="背景图片" name="admin_login_bg" tips="后台登录页背景图片，建议上传1920x1080高清图">
        <wp-upload theme="image" :initial="formData" name="admin_login_bg" app="admin" :data="{ type: 'image' }" @update="handleUpdateImage" />
      </t-form-item>
      <t-form-item>
        <t-space size="small">
          <t-button theme="primary" @click="submit" size="large">提交</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WebInfo',
};
</script>

<script setup lang="ts">
import { FormRule, MessagePlugin } from 'tdesign-vue-next';
import { reactive, ref } from 'vue';

import { editConfig, getConfig } from '@/api/admin/config/config';
import WpUpload from '@/components/upload/index.vue';

const formData = reactive({
  merchant_logo: '',
  merchant_logo_sm: '',
  admin_login_bg: '',
});
const handleUpdateImage = ({ name, url }: any) => {
  // @ts-ignore
  formData[name] = url;
};
// 获取配置
const fetchConfig = async () => {
  const { data } = await getConfig({
    field: Object.keys(formData),
  });
  for (const key in data) {
    // @ts-ignore
    formData[key] = data[key];
  }
};
fetchConfig();

const FORM_RULES: Record<string, FormRule[]> = {};
const formRef = ref();
const submit = async () => {
  const result = await formRef.value.validate();
  if (typeof result !== 'object' && result) {
    const res = await editConfig({
      data: formData,
    });
    if (res.code === 1) {
      MessagePlugin.success('操作成功');
    } else {
      MessagePlugin.error(res.msg);
    }
  }
};
</script>
