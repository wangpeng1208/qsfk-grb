<template>
  <t-card title="优惠券列表" class="basic-container" :bordered="false">

    <div class="category-header c-flex">
      <div class="l">
        <t-space>
          <t-select v-model="params.coupon_type" :clear="fetchData" empty="类型" placeholder="全部类型" type="search"
            clearable :options="couponType" />
          <t-select v-if="params.coupon_type === 2" v-model="params.cate_id" placeholder="请选择商品分类" type="search"
            clearable :options="cateOptionsList" />
          <t-cascader v-if="params.coupon_type === 3" v-model="params.goods_id" placeholder="请选择商品" type="search"
            clearable :options="cateOptionsList" trigger="hover" />
        
          <t-button theme="default" variant="outline" @click="searchData">查询</t-button>
        </t-space>
      </div>
    </div>
    <t-table :data="list" :columns="listsColumns" row-key="id" vertical-align="top" :hover="list.length ? true : false"
      :pagination="pagination" :selected-row-keys="selectedRowKeys" :loading="dataLoading"
      :header-affixed-top="headerAffixedTop" max-height="auto" table-layout="auto" @page-change="rehandlePageChange"
      @select-change="rehandleSelectChange">
      <template #topContent>
        <div class="mb15">
          <t-button @click="router.push({ name: 'adminGoodsCouponAdd' })">
            <template #icon><t-icon name="add" /></template>
            添加优惠券
          </t-button>
          <t-button variant="base" theme="default" :disabled="!selectedRowKeys.length" @click="batchDel"> 批量删除
          </t-button>
          <p v-if="!!selectedRowKeys.length" class="selected-count">已选{{ selectedRowKeys.length }}项</p>
        </div>
      </template>
      <template #code="{ row }">
        <span title="点击复制" @click="copyText(row.code)">
          {{ row.code }}
        </span>
      </template>
      <template #coupon_type="{ row }">
        <t-tag v-if="row.coupon_type === 1" variant="outline" theme="danger">通用劵</t-tag>
        <t-tag v-if="row.coupon_type === 2" variant="outline" theme="success">品类劵</t-tag>
        <t-tag v-if="row.coupon_type === 3" variant="outline" theme="primary">商品劵</t-tag>
      </template>
      <template #coupon_name="{ row }">
        <span v-if="row.coupon_type === 1">店铺通用</span>
        <span v-if="row.coupon_type === 2">[分类]{{ row.coupon_name }}</span>
        <span v-if="row.coupon_type === 3">[商品]{{ row.coupon_name }}</span>
      </template>
      <template #amount="{ row }">
        <span v-if="row.type === 1">{{ row.amount }}</span>
        <span v-if="row.type === 100">{{ row.amount }}%</span>
      </template>
      <template #min_banlance="{ row }">
        <span v-if="row.min_banlance">{{ row.min_banlance }}</span>
        <span v-else>-</span>
      </template>
      <template #expire_day="{ row }">
        {{ row.expire_day }}
      </template>
      <template #empty>
        <result title="" tip="优惠券为空" type="list"> </result>
      </template>
    </t-table>

  </t-card>
</template>

<script lang="ts">
export default {
  name: 'GoodsCoponIndex',
};
</script>

<script setup lang="ts">
import { DialogPlugin, MessagePlugin } from 'tdesign-vue-next';
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import { batchDelGoodsCoupon, getGoodsCouponList } from '@/api/admin/goods/coupon';
import Result from '@/components/result/index.vue';
import { prefix } from '@/config/global';
import { useSettingStore } from '@/store';
import { copyText } from '@/utils/common';
import { listSimple } from '@/api/admin/goods/category';
import { structure } from '@/api/admin/goods/good';
import { listsColumns, couponType } from './components/constant';

const router = useRouter();
const store = useSettingStore();
const list = ref([]);
const pagination = ref({
  defaultPageSize: 20,
  total: 0,
  defaultCurrent: 1,
});

const dataLoading = ref(false);
const fetchData = async () => {
  const value = {
    ...params.value,
    page: pagination.value.defaultCurrent,
    limit: pagination.value.defaultPageSize,
  };
  dataLoading.value = true;
  try {
    const { data } = await getGoodsCouponList(value);
    list.value = data.list;
    pagination.value = {
      ...pagination.value,
      total: data.total,
    };
  } catch (e) {
    console.log(e);
  } finally {
    dataLoading.value = false;
  }
};



const params = ref({
  coupon_type: '' as number | string,
  name: '',
  cate_id: 0 as number | string | null,
  goods_id: null as number | string | null,
});
watch(
  () => params.value.coupon_type,
  (val) => {
    if (val != 1) {
      params.value.cate_id = 0;
    }
    if (val === 1) {
      params.value.cate_id = 0;
      params.value.goods_id = null;
    }
    if (val === 2) {
      initCateList(val);
      params.value.cate_id = '';
      params.value.goods_id = null;
    }
    if (val === 3) {
      initCateList(val);
      params.value.cate_id = 0;
    }
  },
);
const searchData = () => {
  fetchData();
};
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


onMounted(() => {
  fetchData();
});


const selectedRowKeys = ref([]);

const rehandleSelectChange = (val: (string | number)[]) => {
  selectedRowKeys.value = val as number[];
};
const rehandlePageChange = (curr: any, pageInfo: any) => {
  pagination.value.defaultCurrent = curr.current;
  pagination.value.defaultPageSize = curr.pageSize;
  fetchData();
};

const headerAffixedTop = computed(() => ({
  offsetTop: store.isUseTabsRouter ? 48 : 0,
  container: `.${prefix}-layout`,
}));
// const delUsetimes0 = async
// 批量删除
const batchDel = async () => {
  const confirmDia = DialogPlugin({
    header: '是否确认删除？',
    body: `未使用的优惠券会被删除至回收站，已使用或者已过期的优惠券会被直接删除！`,
    confirmBtn: '确认',
    onConfirm: ({ e }) => {
      confirmDia.hide();
      const data = {
        ids: selectedRowKeys.value,
      };
      batchDelGoodsCoupon(data)
        .then((res) => {
          if (res.code === 1) {
            MessagePlugin.success(res.msg);
            fetchData();
            // 重置选中
            selectedRowKeys.value = [];
          } else {
            MessagePlugin.error(`删除失败：${res.msg}`);
          }
        })
        .catch((error) => {
          MessagePlugin.error('删除失败');
        });
    },
    onClose: ({ e, trigger }) => {
      confirmDia.hide();
    },
  });
};

</script>
<style lang="less" scoped>
.selected-count {
  display: inline-block;
  margin-left: 8px;
  color: var(--td-text-color-secondary);
}

:deep(.t-table th),
:deep(.t-table td) {
  position: relative;
  padding: var(--td-comp-paddingTB-m) 0;
}
</style>
