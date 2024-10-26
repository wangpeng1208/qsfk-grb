<template>
  <div class="basic-containers" :bordered="false">
    <t-form ref="formRef" label-align="left" :data="formData" :rules="FORM_RULES" :label-width="150">
      <t-form-item label="面板大logo" name="merchant_logo" tips="推荐宽高比2：1">
        <uploadImage
          :url="formData.merchant_logo"
          title="面板大logo"
          :style="{
            maxWidth: '200px',
            width: '200px',
            height: '100px',
          }"
          :maxlength="1"
          @setPic="(url: string) => handleUpdateImage('merchant_logo', url)"
          opt
        />
      </t-form-item>
      <t-form-item label="面板小logo" name="merchant_logo_sm" tips="推荐宽高比1：1">
        <uploadImage
          :url="formData.merchant_logo_sm"
          title="面板小logo"
          :style="{
            maxWidth: '100px',
            width: '100px',
            height: '100px',
          }"
          :maxlength="1"
          @setPic="(url: string) => handleUpdateImage('merchant_logo_sm', url)"
          opt
        />
      </t-form-item>
      <t-form-item label="背景图片" name="admin_login_bg" tips="后台登录页背景图片，建议上传1920x1080高清图">
        <uploadImage
          :url="formData.admin_login_bg"
          title="背景图片"
          :style="{
            maxWidth: '192px',
            width: '192px',
            height: '108px',
          }"
          :maxlength="1"
          @setPic="(url: string) => handleUpdateImage('admin_login_bg', url)"
          opt
        />
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
import uploadImage from '@/components/uploadPictures/image.vue';

const formData = reactive({
  merchant_logo: '',
  merchant_logo_sm: '',
  admin_login_bg: '',
});

const handleUpdateImage = (fieldName: string, url: string) => {
  // @ts-ignore
  formData[fieldName] = url;
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
