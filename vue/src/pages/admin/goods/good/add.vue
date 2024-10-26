<template>
  <t-card class="basic-container" :bordered="false">
    <div class="basic_title">
      <div>
        <div class="sub_title">{{ title }}</div>
        <div class="line_title"></div>
      </div>
      <t-button variant="text" theme="default" @click="router.push('/admin/goods/index')">
        <template #icon><t-icon name="rollback" /></template>
        返回
      </t-button>
    </div>

    <t-form ref="form" class="base-form" :data="formData" :rules="FORM_RULES" label-align="left" :label-width="150" scroll-to-first-error="smooth" status-icon @submit="onSubmit">
      <t-form-item label="商品分类" name="cate_id">
        <t-select v-model="formData.cate_id" placeholder="请选择商品分类" size="medium" :style="{ width: '600px' }" :options="goodsCategory" />
      </t-form-item>
      <t-form-item label="商品名称" name="name" tips="填写商品名称，长度需在2-100位之间">
        <t-input v-model="formData.name" :maxlength="100" show-limit-number placeholder="请填写商品名称" size="medium" :style="{ width: '600px' }" />
      </t-form-item>
      <t-form-item label="价格设置" name="price">
        <t-space style="padding-bottom: 20px">
          <t-input-number v-model="formData.price" theme="normal" align="center" label="销售价格" suffix="元" tips="销售价格，范围在0.1-20000" placeholder="请填写销售价格" :style="{ width: '292px' }" size="medium"></t-input-number>
          <t-input-number v-model="formData.cost_price" theme="normal" align="center" label="成本价格" suffix="元" tips="成本价，方便统计。不得高于售价" placeholder="请填写成本价格" :style="{ width: '292px' }" size="medium"></t-input-number>
        </t-space>
      </t-form-item>

      <t-form-item label="限购设置" name="event_give">
        <t-space>
          <t-input-number v-model="formData.limit_quantity" theme="normal" align="center" label="最少购买" suffix="件" placeholder="请填写最少购买数量" :style="{ width: '292px' }" size="medium"></t-input-number>
          <t-input-number v-model="formData.limit_quantity_max" theme="normal" align="center" label="最多购买" suffix="件" placeholder="请填写最多购买数量" :style="{ width: '292px' }" size="medium"></t-input-number>
        </t-space>
      </t-form-item>

      <t-form-item label="售卡顺序" name="card_order">
        <wp-check-tag v-model="formData.card_order" :items="CARDORDER" />
      </t-form-item>

      <t-form-item label="提卡密码" name="take_card_type" tips="开启后，购买页面会提示买家填写取卡密码">
        <wp-check-tag v-model="formData.take_card_type" :items="TAKECARDTYPE" />
      </t-form-item>
      <t-form-item label="联系方式" name="contact_limit" tips="">
        <wp-check-tag v-model="formData.contact_limit" :items="CONTACTLIMIT" />
      </t-form-item>
      <div class="basic_title">
        <div>
          <div class="sub_title">优惠活动</div>
          <div class="line_title"></div>
        </div>
      </div>

      <t-form-item label="优惠券" name="coupon_type" tips="选择开启则表示该商品可以使用优惠券">
        <wp-check-tag v-model="formData.coupon_type" :items="TRUEFALSESWITCH" />
      </t-form-item>
      <t-form-item label="活动赠送" name="event_give">
        <wp-check-tag v-model="formData.event_give" :items="TRUEFALSESWITCH" @actions="addEventGiveNumber" />
      </t-form-item>
      <t-form-item v-if="formData.event_give.length" label="" name="event_give" tips="【倍数关系】每买a件，送b件。会展示在购买下单页总数上">
        <t-space direction="vertical">
          <div v-for="(item, i) in formData.event_give" :key="i">
            <t-space>
              <t-input-number v-model="item.num" theme="normal" align="center" label="买满：" suffix="件" placeholder="请填写买满数量" :style="{ width: '292px' }"></t-input-number>
              <t-input-number v-model="item.give_num" theme="normal" align="center" label="赠送：" suffix="件" placeholder="请填写赠送数量" :style="{ width: '292px' }"></t-input-number>
              <t-button theme="danger" variant="outline" @click="deleteEventGiveNumber(i)">删除</t-button>
              <t-button v-if="formData.event_give.length" variant="outline" theme="primary" @click="addEventGiveNumber(1)"> 添加 </t-button>
            </t-space>
          </div>
        </t-space>
      </t-form-item>
      <t-form-item label="附加赠送" name="addtion_give" tips="">
        <wp-check-tag v-model="formData.addtion_give" :items="TRUEFALSESWITCH" @actions="addtionGiveNumber" />
      </t-form-item>
      <t-form-item v-if="formData.addtion_give.length" label="" name="addtion_give" tips="【附加关系】若编辑（B商品，2,1）意思为买2个当前商品送B商品1个，取货时才会显示出来">
        <t-space v-if="formData.addtion_give.length" direction="vertical">
          <div v-for="(item, i) in formData.addtion_give" :key="i">
            <t-space>
              <t-select v-model="item.good_id" :style="{ width: '292px' }" placeholder="请选择商品">
                <t-option v-for="(val, key) in goosList" :key="key" :value="val.id" :label="val.name" />
              </t-select>
              <t-input v-model="item.bug_num" placeholder="请填写购买数量" type="number" theme="normal" :decimal-places="false" :min="1" :style="{ width: '138px' }" />
              <t-input v-model="item.give_num" placeholder="请填写赠送数量" type="number" theme="normal" :decimal-places="false" :min="1" :style="{ width: '138px' }" />
              <t-button theme="danger" variant="outline" @click="deleteAddtionGiveNumber(i)">删除</t-button>
              <t-button v-if="formData.addtion_give.length" variant="outline" theme="primary" @click="addtionGiveNumber(1)"> 添加 </t-button>
            </t-space>
          </div>
        </t-space>
      </t-form-item>
      <!-- 批发优惠 -->
      <t-form-item label="批发优惠" name="wholesale_discount_list" tips="">
        <wp-check-tag v-model="formData.wholesale_discount_list" :items="TRUEFALSESWITCH" @actions="addWholesaleNumber" />
      </t-form-item>
      <t-form-item v-if="formData.wholesale_discount_list.length" label="" name="wholesale_discount_list">
        <t-space direction="vertical">
          <div v-for="(item, i) in formData.wholesale_discount_list" :key="i">
            <t-space>
              <t-input-number v-model="item.num" theme="normal" align="right" label="数量：" suffix="件" placeholder="请填写购买数量" :style="{ width: '290px' }"></t-input-number>
              <t-input-number v-model="item.price" theme="normal" align="right" label="价格：" suffix="元" placeholder="请填写价格" :style="{ width: '290px' }"></t-input-number>
              <t-button theme="danger" variant="outline" @click="deleteWholesaleNumber(i)">删除</t-button>
              <t-button v-if="formData.wholesale_discount_list.length" variant="outline" theme="primary" @click="addWholesaleNumber(1)"> 添加 </t-button>
            </t-space>
          </div>
        </t-space>
      </t-form-item>

      <div class="basic_title">
        <div>
          <div class="sub_title">商品详情</div>
          <div class="line_title"></div>
        </div>
      </div>

      <t-form-item label="商品轮播图" name="slider_image" tips="建议尺寸：800*800，可拖拽改变图片顺序，默认首张图为主图，最多上传10张">
        <uploadImage
          :urls="formData.slider_image"
          title="上传商品图"
          :style="{
            maxWidth: '100px',
            width: '100px',
            height: '100px',
          }"
          :maxlength="10"
          @setPic="setPic"
          opt
        />
      </t-form-item>
      <t-form-item label="商品描述" name="content" tips="必填，商品描述会在买家选择商品时展示，建议写上您商品的简介，官网以及常见的问题" :style="{ width: '760px' }">
        <wp-editor v-model="formData.content" style="border: 1px solid var(--td-border-level-2-color); width: 100%" height="200px" mode="simple" user-type="admin" />
      </t-form-item>
      <!-- :toolbar-config="{
            toolbarKeys: ['color', 'bold', 'italic', 'underline', 'insertLink', 'fontFamily'],
          }" -->
      <t-form-item label="使用说明" name="remark" tips="必填，商品使用说明会在买家购买完成后展示，建议写上您的产品使用说明，售后联系方式等" :style="{ width: '760px' }">
        <wp-editor v-model="formData.remark" style="border: 1px solid var(--td-border-level-2-color); width: 100%" height="200px" mode="simple" user-type="admin" />
      </t-form-item>

      <t-form-item label="商品排序" name="sort" tips=""> <t-input-number v-model="formData.sort" :min="0" theme="normal" placeholder="" :style="{ width: '600px' }" size="medium" /> </t-form-item>

      <t-form-item>
        <t-button theme="primary" class="form-submit-confirm" @click="onSubmit2" :loading="saveLoading2" size="large"> {{ opt === 'add' ? '添加' : '编辑' }}并返回商品列表 </t-button>
        <t-button theme="default" class="form-submit-confirm" type="submit" :loading="saveLoading" variant="text" size="small"> {{ opt === 'add' ? '添加' : '编辑' }}后继续{{ opt === 'add' ? '添加' : '编辑' }}商品 </t-button>

        <!-- <t-button type="reset" class="form-submit-cancel" theme="default" variant="base"> 重置 </t-button> -->
      </t-form-item>
    </t-form>
  </t-card>
</template>
<script lang="ts">
export default {
  name: 'GoodsAdd',
};
</script>

<script setup lang="ts">
import { DialogPlugin, FormRule, MessagePlugin } from 'tdesign-vue-next';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { listSimple } from '@/api/admin/goods/category';
import { add, detail, edit, goodList } from '@/api/admin/goods/good';
import uploadImage from '@/components/uploadPictures/image.vue';

import { CARDORDER, CONTACTLIMIT, TAKECARDTYPE, TRUEFALSESWITCH } from './constant';

const router = useRouter();
const opt = ref('add');
const formData = ref({
  cate_id: '', // 分类id
  name: '', // 商品名
  slider_image: [], // 商品轮播图
  price: '', // 商品价格
  event_give: [], // 活动赠送
  addtion_give: [], // 附加赠送
  cost_price: '', // 成本价
  limit_quantity: '', // 起购数量
  limit_quantity_max: '', // 起购数量
  inventory_notify: 0, // 库存预警
  card_order: 0, // 售卡顺序
  selectcard_fee: '', // 自助选号费
  coupon_type: 0, // 优惠券
  take_card_type: 0, // 提卡密码
  contact_limit: 'mobile', //  客户信息
  content: '', // 商品说明
  remark: '', // 使用说明
  sort: '0',
  wholesale_discount: 0, // 批发优惠
  wholesale_discount_list: [],
});
const goosList = ref([]);

// 附加赠送的其余商品列表 和 默认打开的商品分类
const initGoods = async () => {
  const { data } = await goodList();
  if (router.currentRoute.value.query.id) {
    // 如果存在id，则过滤goosList中id等于此url携带id的数据
    // eslint-disable-next-line eqeqeq
    goosList.value = data.filter((item: any) => item.id != router.currentRoute.value.query.id);
  } else {
    goosList.value = data;
  }
  if (router.currentRoute.value.query.cate_id) {
    initGoodsCategory();
    formData.value.cate_id = router.currentRoute.value.query.cate_id as string;
  }
};
const addtionGiveNumber = (value: number) => {
  // 商品数量 如果小于2，则不允许开启附加赠送
  if (value && goosList.value.length < 2) {
    MessagePlugin.warning('至少要有两个商品才能开启附加赠送');
    return;
  }
  if (value) {
    // 添加addtionGive数组中项目数据
    formData.value.addtion_give.push({
      good_id: '',
      bug_num: '',
      give_num: '',
    });
  } else {
    formData.value.addtion_give = [];
  }
};
// 附加赠送删除按钮
const deleteAddtionGiveNumber = (index: number) => {
  formData.value.addtion_give.splice(index, 1);
  if (formData.value.addtion_give.length === 0) {
    formData.value.addtion_give = [];
  }
};

// 活动赠送逻辑开始
const addEventGiveNumber = (value: number) => {
  if (value) {
    formData.value.event_give.push({
      num: '',
      give_num: '',
    });
  } else {
    formData.value.event_give = [];
  }
};
const deleteEventGiveNumber = (index: number) => {
  formData.value.event_give.splice(index, 1);
  // 如果活动赠送数量为0，则关闭活动赠送
  if (formData.value.event_give.length === 0) {
    formData.value.event_give = [];
  }
};
// 批发优惠逻辑开始
const addWholesaleNumber = (value: number) => {
  if (value) {
    formData.value.wholesale_discount_list.push({
      num: '',
      price: '',
    });
  } else {
    formData.value.wholesale_discount_list = [];
  }
};
// 批发优惠删除按钮
const deleteWholesaleNumber = (index: number) => {
  formData.value.wholesale_discount_list.splice(index, 1);
  // 如果批发优惠数量为0，则关闭批发优惠
  if (formData.value.wholesale_discount_list.length === 0) {
    formData.value.wholesale_discount = 0;
  }
};
const title = ref('添加商品');
const getGoods = async () => {
  if (router.currentRoute.value.query.id) {
    try {
      const { data } = await detail({
        id: router.currentRoute.value.query.id,
      });
      formData.value = { ...data };
      // 如果 图片为空，则设置为空数组
      if (!formData.value.slider_image) {
        formData.value.slider_image = [];
      }
      opt.value = 'edit';
      title.value = '编辑商品';
    } catch (e) {
      console.log(e);
    }
  }
};

// 如果data.list为空 则DialogPlugin弹窗提示需要添加分类,确认跳转到分类页面
const goodsCategory = ref([]);
const initGoodsCategory = async () => {
  const { data } = await listSimple();
  if (data.list.length === 0) {
    const confirmDia = DialogPlugin({
      header: '提醒',
      body: '还没有商品分类，请先添加分类！',
      confirmBtn: '去分类页添加',
      closeOnOverlayClick: false,
      theme: 'warning',
      onConfirm: ({ e }) => {
        confirmDia.hide();
        router.push('/admin/goods/category');
      },
      onCloseBtnClick: ({ e }) => {
        confirmDia.hide();
        router.push('/admin/goods/category');
      },
      onCancel: ({ e }) => {
        confirmDia.hide();
        router.push('/admin/goods/category');
      },
    });
  }
  goodsCategory.value = data.list;
  // 默认第一个
  if (data.list.length) {
    formData.value.cate_id = data.list[0].value;
  }
};

const FORM_RULES: Record<string, FormRule[]> = {
  cate_id: [{ required: true, message: '请选择分类', type: 'error' }],
  name: [{ required: true, message: '请填写商品名', type: 'error' }],
  price: [{ required: true, message: '请填写商品价格', type: 'error' }],
  content: [{ required: true, message: '请填写商品详情', type: 'error' }],
  remark: [{ required: true, message: '请填写商品备注', type: 'error' }],
};

// form
const form = ref();
// 保存
const saveLoading = ref(false);
const onSubmit = async () => {
  const result = await form.value.validate();
  if (typeof result !== 'object' && result) {
    saveLoading.value = true;
    const submitForm = formData.value;
    // if (opt.value === 'add') {
    try {
      let res;
      if (opt.value === 'add') {
        res = await add(submitForm);
      } else {
        res = await edit(submitForm);
      }
      if (res.code === 1) {
        MessagePlugin.success(res.msg);
        // router.push('/goods/index');
      } else {
        MessagePlugin.error(`提交失败：${res.msg}`);
        return false;
      }
    } catch (error) {
      return false;
    }
    saveLoading.value = false;
    return true;
  } else {
    MessagePlugin.error('请填写完整信息');
    return false;
  }
};
const saveLoading2 = ref(false);
const onSubmit2 = async () => {
  saveLoading2.value = true;
  const result = await onSubmit();
  if (result) {
    router.push('/admin/goods/index');
  }
  saveLoading2.value = false;
  saveLoading.value = false;
};

initGoodsCategory();
getGoods();
initGoods();

const setPic = (res: any) => {
  // 首先获取当前 formData.value.slider_image 的长度
  const currentLength = formData.value.slider_image.length;
  // 计算添加新图片后，数组应该达到的最大长度
  const maxLength = Math.min(currentLength + res.length, 10);
  // 截取 res 数组的前 maxLength - currentLength 个元素
  const newImages = res.slice(0, maxLength - currentLength);
  // 将新图片添加到现有数组中
  formData.value.slider_image = [...formData.value.slider_image, ...newImages];
};
</script>
