<template>
  <div class="basic-containers" :bordered="false">
    <t-form ref="formRef" label-align="left" :data="formData" :rules="FORM_RULES" :label-width="150" style="max-width: 900px">
      <t-form-item label="是否弹出协议" name="show_purchase_agreement" help="用于自动弹出售卡协议，下单时需要先同意协议才能购买">
        <t-radio-group
          v-model="formData.show_purchase_agreement"
          :options="[
            { label: '开启', value: 1 },
            { label: '关闭', value: 0 },
          ]"
        />
      </t-form-item>
      <t-form-item label="购买协议" name="shop_buy_protocol" tips="">
        <wp-editor v-model:model-value="formData.shop_buy_protocol" user-type="admin" height="300px" width="100%" mode="simple" />
      </t-form-item>
      <t-form-item label="商品缺省图" name="goods_default_img" tips="推荐宽高比1：1">
        <uploadImage
          :url="formData.goods_default_img"
          title="商品缺省图"
          :style="{
            maxWidth: '100px',
            width: '100px',
            height: '100px',
          }"
          :maxlength="1"
          @setPic="(url: string) => handleUpdateImage('goods_default_img', url)"
          opt
        />
      </t-form-item>

      <t-form-item label="状态开关" name="site_wordfilter_status" tips="违禁词功能是否开启;受影响位置 ：商品分类名、商品名、商品描述、商品详情">
        <t-radio-group
          v-model="formData.site_wordfilter_status"
          :options="[
            { label: '启用', value: 1 },
            { label: '关闭', value: 0 },
          ]"
        />
      </t-form-item>
      <t-form-item label="违禁词" name="site_wordfilter_danger">
        <t-textarea
          v-model="formData.site_wordfilter_danger"
          clearable
          placeholder="请输入要禁用的违禁词"
          tips="使用“|”分隔"
          :autosize="{
            minRows: 5,
            maxRows: 10,
          }"
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
  name: 'WebAgreement',
};
</script>

<script setup lang="ts">
import { FormRule, MessagePlugin } from 'tdesign-vue-next';
import { reactive, ref } from 'vue';
import uploadImage from '@/components/uploadPictures/image.vue';
import { editConfig, getConfig } from '@/api/admin/config/config';

const formData = reactive({
  shop_buy_protocol: '',
  show_purchase_agreement: 1,
  goods_default_img: '',
  site_wordfilter_status: '',
  site_wordfilter_danger: '',
});

const handleUpdateImage = (fieldName: string, url: string) => {
  // @ts-ignore
  formData[fieldName] = url;
};

// 获取邮置
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
