<template>
  <t-card title="订单配置" class="basic-container" :bordered="false">
    <t-form ref="formRef" label-align="left" :data="formData" :rules="FORM_RULES" :label-width="150" style="width: 800px">
      <t-form-item label="订单生成方式" name="order_trade_no_type" tips=" ">
        <!-- radio  -->
        <t-radio-group v-model="formData.order_trade_no_type" :options="tradeNoOptions" />
      </t-form-item>
      <t-form-item v-if="formData.order_trade_no_type == '0'" label="订单号前缀" name="order_trade_no_profix" help="">
        <t-input v-model="formData.order_trade_no_profix" clearable placeholder="请输入订单号前缀" />
      </t-form-item>
      <t-form-item label="订单标题" name="order_title_type" help="">
        <t-radio-group v-model="formData.order_title_type" :options="titleTypeOptions" />
      </t-form-item>
      <t-form-item v-if="formData.order_title_type == '2'" label="标题前缀" name="order_title_profix">
        <t-input v-model="formData.order_title_profix" clearable placeholder="" />
      </t-form-item>
      <t-form-item v-if="formData.order_title_type == '3'" label="自定义标题" name="order_title_str">
        <t-input v-model="formData.order_title_str" clearable placeholder="" />
      </t-form-item>

      <t-form-item label="订单超时时间" name="order_auto_close_time" tips="订单未付款的倒计时时间，可以使用小数点，比如0.5代表半分钟；倒计时结束，订单自动关闭">
        <t-input v-model="formData.order_auto_close_time" clearable placeholder="请输入订单超时时间" suffix="分钟" />
      </t-form-item>
      <t-form-item label="禁用简单联系方式" name="order_query_blackcontact">
        <t-textarea
          v-model="formData.order_query_blackcontact"
          clearable
          placeholder="请输入要禁用的简单联系方式"
          tips="防止出现简单联系方式，使用“|”分隔"
          :autosize="{
            minRows: 4,
            maxRows: 10,
          }"
        />
      </t-form-item>
      <t-divider />
      <t-form-item label="下单频率限制" name="order_create_limit_time_by_ip" tips="n秒内只允许同一IP下单一次，防止爆单">
        <t-input-number v-model="formData.order_create_limit_time_by_ip" theme="normal" :min="0" clearable placeholder="请输入秒数" suffix="秒" />
      </t-form-item>
      <t-divider />
      <t-form-item label="查询订单限制天数" name="order_query_limitday" tips="PC查单通过联系方式查询时，允许查看最近多少天的订单。留空则表示30天">
        <t-input-number v-model="formData.order_query_limitday" theme="normal" :min="0" clearable placeholder="请输入数字" suffix="天" />
      </t-form-item>
      <t-form-item>
        <t-space size="small">
          <t-button theme="primary" @click="submit">提交</t-button>
        </t-space>
      </t-form-item>
      <t-divider />
      "商家优惠设置有误，总价格不能小于等于0，请联系商家！" 说明计算后该订单的总价小于等于0，一般发生在优惠券面额超售。<br />
      "商家优惠设置有误，低于成本价，请联系商家！" 说明商品设置的成本价高于售价。<br />
      "支付接口不存在！", 一般发生在后台支付接口关闭或删除后，前台商铺页没有刷新页面。<br />
      "当前支付接口没有可用的账号！", 是指后台支付接口或自定义接口中没有状态正常的收款账号。<br />
      "请勿频繁下单！" ,是指命中了本页中 下单频率限制 的配置 <br />
    </t-form>
  </t-card>
</template>

<script setup lang="ts">
import { FormRule, MessagePlugin } from 'tdesign-vue-next';
import { reactive, ref } from 'vue';

import { editConfig, getConfig } from '@/api/admin/config/config';

const tradeNoOptions = [
  { label: '前缀+时间+随机字符', value: 0 },
  { label: '用户ID+时间+随机字符', value: 1 },
];
const titleTypeOptions = [
  { label: '商品名称', value: 0 },
  { label: '订单编号', value: 1 },
  { label: '前缀+订单编号', value: 2 },
  { label: '自定义', value: 3 },
];
const formData = reactive({
  order_trade_no_type: '',
  order_trade_no_profix: '',
  order_title_type: '',
  order_title_profix: '',
  order_title_str: '',
  order_auto_close_time: '',
  order_query_blackcontact: '',
  order_query_limitday: 3,
  order_create_limit_time_by_ip: 10,
});
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
  order_auto_close_time: [{ required: true, message: '请输入订单超时时间' }],
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
