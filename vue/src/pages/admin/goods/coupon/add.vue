<template>
  <div class="anim-wrapper">
    <t-card title="添加优惠券" class="basic-container">
      <template #actions>
        <t-button variant="text" theme="default" @click="router.push('/admin/goods/coupon')">
          <template #icon><t-icon name="rollback" /></template>
          返回
        </t-button>
      </template>
      <t-form ref="form" class="base-form" :data="formData" :rules="FORM_RULES" label-align="left" :label-width="120" @submit="onSubmit">
        <t-form-item label="优惠券类型" name="couponTypeValue">
          <wp-check-tag v-model="couponTypeValue" :items="couponType" />
        </t-form-item>
        <t-form-item v-if="couponTypeValue != 1" :label="couponTypeValue === 2 ? '选择分类' : '选择商品'" :name="couponTypeValue === 2 ? 'cate_id' : 'goods_id'" :tips="couponTypeValue === 2 ? '【必选】请选择商品分类' : '【必选】请选择商品'">
          <t-select v-if="couponTypeValue === 2" v-model="formData.cate_id" placeholder="请选择商品分类" type="search" clearable :options="cateOptionsList" style="width: 415px" />
          <t-cascader v-if="couponTypeValue === 3" v-model="formData.goods_id" placeholder="请选择商品" type="search" clearable :options="cateOptionsList" style="width: 415px" trigger="hover" valueMode="onlyLeaf" />
        </t-form-item>

        <t-form-item label="折扣面额" name="amount" :tips="amountHelp">
          <t-space>
            <t-input-number v-model="formData.amount" theme="normal" placeholder="请填写数字" style="width: 415px" />
            <t-radio-group v-model="formData.type" :options="importType" />
          </t-space>
        </t-form-item>

        <t-form-item label="生成数量" name="quantity" tips="最多一次生成200张">
          <t-input-number v-model="formData.quantity" placeholder="填写优惠券生成数量" :max="200" :min="1" theme="normal" />
        </t-form-item>
        <t-form-item label="到期时间" name="expire_at" tips="过期优惠券系统将自动清理">
          <t-date-picker v-model="formData.expire_at" allow-input clearable placeholder="请选择到期时间" :disable-date="{ before: dayjs().add(0, 'day').endOf('day').format() }" presetsPlacement="right" />
        </t-form-item>
        <t-divider dashed style="width: 575px">高级设置</t-divider>
        <t-form-item label="使用门槛" name="min_banlance" tips="此功能为满减优惠卷，超过此金额的订单才可使用的优惠券。不填则无限制">
          <t-input-number v-model="formData.min_banlance" placeholder="请填写数字" theme="normal" />
        </t-form-item>
        <!-- 优惠券可使用次数 -->
        <t-form-item label="可使用次数" name="use_times" tips="优惠券可被使用次数">
          <t-input-number v-model="formData.use_times" placeholder="请填写使用次数" theme="normal" suffix="次" />
        </t-form-item>

        <t-form-item label="备注信息" name="remark">
          <t-textarea v-model="formData.remark" placeholder="可填写优惠券备注信息" :style="{ width: '415' }" />
        </t-form-item>

        <t-form-item>
          <div class="form-submit-confirm anim-wrapper">
            <t-button theme="primary" block size="large" type="submit" style="margin: 2px"> 提交 </t-button>
          </div>
        </t-form-item>
      </t-form>
    </t-card>
  </div>
</template>
<script lang="ts">
export default {
  name: 'GoodsCouponAdd',
};
</script>

<script setup lang="ts">
import { FormRule, MessagePlugin } from 'tdesign-vue-next';
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { listSimple } from '@/api/admin/goods/category';
import { structure } from '@/api/admin/goods/good';
import { add } from '@/api/admin/goods/coupon';
import { downloadFile } from '@/utils/common';
import { debounce } from '@/utils/common';
import { couponType, importType } from './components/constant';

const router = useRouter();

const formData = ref({
  cate_id: 0 as number | string | null,
  goods_id: null as number | string | null,
  type: 1,
  amount: '',
  quantity: '',
  min_banlance: '',
  expire_at: '',
  remark: '',
  import_coupon: 0,
  use_times: 1,
  receive: 0,
});

const amountHelp = ref('满减优惠券，设置多少元则抵扣总价的多少元');

const FORM_RULES: Record<string, FormRule[]> = {
  amount: [{ required: true, message: '请填写折扣面额', type: 'error' }],
  quantity: [{ required: true, message: '请填写数量', type: 'error' }],
  expire_at: [{ required: true, message: '请选择到期时间', type: 'error' }],
};
const couponTypeValue = ref(1);
watch(
  () => couponTypeValue.value,
  (val) => {
    if (val != 1) {
      formData.value.cate_id = 0;
    }
    if (val === 1) {
      formData.value.cate_id = 0;
      formData.value.goods_id = null;
    }
    if (val === 2) {
      initCateList(val);
      formData.value.cate_id = '';
      formData.value.goods_id = null;
      FORM_RULES.cate_id = [{ required: true, message: '请选择商品分类', type: 'error' }];
    }
    if (val === 3) {
      initCateList(val);
      formData.value.cate_id = 0;
      FORM_RULES.goods_id = [{ required: true, message: '请选择商品', type: 'error' }];
    }
  },
);

watch(
  () => formData.value.type,
  (val) => {
    if (val === 1) {
      amountHelp.value = `
      满减优惠券，设置多少元则抵扣总价的多少元
      `;
    } else {
      amountHelp.value = `
      折扣卡券，设置比例10%则是9折20%为8折，以此类推
      `;
    }
  },
);

const cateOptionsList = ref([]);
const initCateList = async (val: number) => {
  if (val === 2) {
    const { data } = await listSimple();
    cateOptionsList.value = data.list;
  }
  if (val === 3) {
    const { data } = await structure();
    cateOptionsList.value = data;
  }
};
const form = ref(null);

onMounted(() => {
  const { query } = router.currentRoute.value as any;
  if (query.cate_id) {
    // 默认选中对应的商品
    formData.value.cate_id = query.cate_id;
  }
});
const onSubmit = debounce(async () => {
  const result = await form.value.validate();
  if (typeof result !== 'object' && result) {
    const params = {
      ...formData.value,
      coupon_type: couponTypeValue.value,
    };
    const res = await add(params);
    if (res.code === 1) {
      MessagePlugin.success(res.msg);
      if (formData.value.import_coupon) {
        downloadFile(res.data.url);
      }
      setTimeout(() => {
        router.push('/admin/goods/coupon');
      }, 500);
    } else {
      MessagePlugin.error(`新增失败：${res.msg}`);
    }
  }
});
</script>

<style lang="less" scoped>
:deep(.t-textarea),
:deep(.t-input) {
  width: 415px;
}

// .anim-wrapper {
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .anim-wrapper:before {
//   content: "";
//   display: block;
//   background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, var(--td-brand-color) 50%, rgba(255, 255, 255, 0) 100%);
//   height: 5000px;
//   width: 50px;
//   transform: translate(0);
//   position: absolute;
//   animation: rotate 5s linear forwards infinite;
//   z-index: 0;
//   top: 50%;
//   transform-origin: top center;
// }

// @keyframes rotate {
//   0% {
//     transform: rotate(0)
//   }

//   to {
//     transform: rotate(360deg)
//   }
// }
</style>
