<template>
  <div class="basic-container" :bordered="false">
    <t-form ref="formRef" label-align="left" :data="formData" :rules="FORM_RULES" :label-width="150" style="max-width: 900px">
      <t-form-item v-if="formData.site_status === 0" label="网站关闭提示" name="site_close_tips" tips="网站关闭时显示的提示信息">
        <t-input v-model="formData.site_close_tips" clearable placeholder="请填写网站关闭提示" />
      </t-form-item>
      <t-form-item label="网站名称" name="site_name" tips="网站名称，显示在浏览器标签上">
        <t-input v-model="formData.site_name" clearable placeholder="请填写网站名称" />
      </t-form-item>
      <t-form-item label="网站副标题" name="site_subtitle" tips="网站副标题，显示在浏览器标签上">
        <t-input v-model="formData.site_subtitle" clearable placeholder="请填写网站副标题" />
      </t-form-item>
      <t-form-item label="网站关键字" name="site_keywords" tips="一般不超过100个字符，关键词用英文逗号隔开">
        <t-input v-model="formData.site_keywords" clearable placeholder="请填写网站关键字" />
      </t-form-item>
      <t-form-item label="网站描述" name="site_desc">
        <t-input v-model="formData.site_desc" clearable placeholder="请填写网站描述" />
      </t-form-item>
      <t-form-item label="网站域名" name="site_domain" tips="需要填写协议头(即https://或http://开头)" help="主站域名。用于资源链接和支付回调的地址生成补全">
        <t-input v-model="formData.site_domain" clearable placeholder="请输入网站域名" />
      </t-form-item>
      <!-- <t-form-item label="联系地址" name="site_info_address" tips="">
        <t-input v-model="formData.site_info_address" clearable placeholder="请填写联系地址" />
      </t-form-item> -->
      <t-form-item label="客服邮箱" name="site_info_email" tips="">
        <t-input v-model="formData.site_info_email" clearable placeholder="请填写客服邮箱" />
      </t-form-item>

      <!-- <t-form-item label="备案号码" name="site_info_icp">
        <t-input v-model="formData.site_info_icp" clearable placeholder="请填写备案号码" />
      </t-form-item> -->
      <t-form-item label="客服电话" name="site_info_tel">
        <t-input v-model="formData.site_info_tel" clearable placeholder="请填写客服电话" />
      </t-form-item>
      <!-- <t-form-item label="客服电话描述" name="site_info_tel_desc">
        <t-input v-model="formData.site_info_tel_desc" clearable placeholder="请填写客服电话描述" />
      </t-form-item> -->
      <t-form-item label="客服QQ" name="site_info_qq">
        <t-input v-model="formData.site_info_qq" clearable placeholder="请填写客服QQ" />
      </t-form-item>
      <t-form-item label="前台网站logo" name="site_logo" tips="推荐宽高比2：1">
        <wp-upload theme="image" :initial="formData" name="site_logo" app="admin" :data="{ type: 'image' }" @update="handleUpdateImage" />
      </t-form-item>
      <t-form-item label="版权信息" name="site_info_copyright" tips="前台底部(支持html标签)">
        <div style="display: flex; flex-direction: column; width: 900px">
          <t-textarea v-model="formData.site_info_copyright" clearable placeholder="请填写版权信息" />
          <div><span>预览：</span><span v-html="formData.site_info_copyright" /></div>
        </div>
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

const formData = reactive({
  site_status: 1,
  site_close_tips: '',
  site_name: '',
  site_subtitle: '',
  site_keywords: '',
  site_desc: '',
  site_logo: '',
  site_info_email: '',
  site_info_copyright: '',
  site_shop_copyright: '',
  site_info_tel: '',
  site_info_qq: '',
  site_domain: '',
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

const FORM_RULES: Record<string, FormRule[]> = {
  site_name: [{ required: true, message: '请填写网站名称' }],
  site_subtitle: [{ required: true, message: '请填写网站副标题' }],
};
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
