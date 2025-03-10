<template>
  <t-card title="商品列表" class="basic-container" :bordered="false">
    <div class="category-header c-flex">
      <div class="l">
        <t-space>
          <t-select v-model="params.cate_id" :clear="fetchData" empty="没有分类" placeholder="全部分类" type="search" clearable :options="categoryList" />
          <t-input v-model="params.name" placeholder="请输入商品名" clearable>
            <template #suffix-icon>
              <search-icon />
            </template>
          </t-input>
          <t-button theme="default" variant="outline" @click="searchData">查询</t-button>
        </t-space>
      </div>
    </div>
    <t-base-table class="basic-table" :data="lists" :columns="COLUMNS" row-key="id" vertical-align="middle" :hover="lists.length > 0 ? true : false" :pagination="pagination" :loading="dataLoading" :header-affixed-top="headerAffixedTop" table-layout="auto" max-height="100%" @page-change="rehandlePageChange">
      <template #topContent>
        <t-button theme="primary" class="mb15" @click="router.push('/admin/goods/add')">
          <template #icon><t-icon name="add" /></template>
          添加商品
        </t-button>
      </template>
      <template #name="{ row }">
        <t-space direction="vertical" size="small" class="tag-demo light">
          <span>
            {{ row.name }}
            <t-tag v-if="row.wholesale_discount == 1" title="支持批发优惠" theme="success" variant="light" size="small" shape="round">惠</t-tag>
            <t-tag v-if="row.coupon_type == 1" title="支持优惠券" theme="primary" variant="light" size="small" shape="round">券</t-tag>
            <t-tag v-if="row.take_card_type != 0" title="提卡必填或选填取卡密码" theme="warning" variant="light" size="small" shape="round">取</t-tag>
            <t-tag v-if="row.visit_type == 1" title="商品购买页面需要访问密码" theme="danger" variant="light" size="small" shape="round">密</t-tag>
          </span>
        </t-space>
      </template>
      <template #cards_stock_counts="{ row }">
        <t-space size="small">
          <div v-if="row.cards_stock_counts === 0">缺货</div>
          <div v-else>
            <t-link size="small" theme="primary" underline @click="router.push(`/admin/goods/card?goods_id=${row.id}&status=1`)"> {{ row.cards_stock_counts }} 张 </t-link>
            <t-space size="small">
              <t-link size="small" theme="danger" @click="deleteAllCard(row)">清空</t-link>
            </t-space>
          </div>
        </t-space>
      </template>
      <template #cards_sold_counts="{ row }">
        <t-link size="small" theme="primary" underline @click="router.push(`/admin/goods/card?goods_id=${row.id}&status=2`)"> {{ row.cards_sold_counts }}张</t-link>
      </template>
      <template #status="{ row }">
        <t-switch v-model="row.status" :custom-value="[1, 0]" @click="changeStatus(row.id, row.status)"> </t-switch>
      </template>
      <template #create_at="{ row }">
        <span>{{ formatTime(row.create_at) }}</span>
      </template>

      <template #operation="{ row }">
        <t-space>
          <t-link theme="primary" hover="color" @click="router.push(`/admin/goods/card/add?goods_id=${row.id}`)" size="small">补货</t-link>
          <t-link theme="primary" hover="color" @click="editRow(row)" size="small">编辑</t-link>
          <t-link theme="danger" hover="color" @click="delRow(row)" size="small">删除</t-link>
        </t-space>
      </template>
      <template #empty>
        <result title="" tip="暂无相关数据" type="list"> </result>
      </template>
    </t-base-table>
    <t-loading :loading="loading" size="small" fullscreen />
  </t-card>
</template>

<script lang="ts">
export default {
  name: 'Goods',
};
</script>

<script setup lang="ts">
import { SearchIcon } from 'tdesign-icons-vue-next';
import { DialogPlugin, MessagePlugin } from 'tdesign-vue-next';
import { computed, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

import { listSimple } from '@/api/admin/goods/category';
import { del, emptiedCards, list, status } from '@/api/admin/goods/good';
import Result from '@/components/result/index.vue';
import { prefix } from '@/config/global';
import { useSettingStore } from '@/store';
import { formatTime } from '@/utils/date';

import { COLUMNS } from './constant';
import { debounce } from '@/utils/common';

const router = useRouter();
const params = reactive({
  cate_id: null,
  name: '',
});
const { query } = router.currentRoute.value as any;
if (query.cate_id) {
  params.cate_id = +query.cate_id;
}

const store = useSettingStore();

const lists = ref([]);
const pagination = ref({
  defaultPageSize: 20,
  total: 0,
  defaultCurrent: 1,
});

const loading = ref(false);
const dataLoading = ref(false);
const fetchData = debounce(async () => {
  dataLoading.value = true;
  const value = {
    page: pagination.value.defaultCurrent,
    limit: pagination.value.defaultPageSize,
    ...params,
  };
  try {
    const { data } = await list(value);
    lists.value = data.list;
    pagination.value = {
      ...pagination.value,
      total: data.total,
    };
  } catch (e) {
    // console.log(e);
  } finally {
    dataLoading.value = false;
  }
});
const searchData = debounce(fetchData);

const categoryList = ref([]);
const fetchGoodsCategory = async () => {
  const { data } = await listSimple();
  categoryList.value = data.list;
};
onMounted(() => {
  fetchData();
  fetchGoodsCategory();
});

const deleteAllCard = async (row: any) => {
  // 弹窗提示 是否删除
  const confirmDia = DialogPlugin({
    header: '提醒？',
    body: '确定清空该商品所有未售虚拟卡吗？',
    confirmBtn: '确认',
    onConfirm: ({ e }) => {
      confirmDia.hide();
      const { id } = row;
      const data = {
        id,
      };
      emptiedCards(data)
        .then((res) => {
          if (res.code === 1) {
            MessagePlugin.success('删除成功');
            fetchData();
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

const rehandlePageChange = (curr: any, pageInfo: any) => {
  pagination.value.defaultCurrent = curr.current;
  pagination.value.defaultPageSize = curr.pageSize;
  fetchData();
};

const delRow = async (row: any) => {
  const confirmDia = DialogPlugin({
    header: '提醒',
    body: `是否确认删除(${row.name})？`,
    confirmBtn: '确认',
    onConfirm: ({ e }) => {
      confirmDia.hide();
      const { id } = row;
      const data = {
        id,
      };
      del(data)
        .then((res) => {
          if (res.code === 1) {
            fetchData();
            MessagePlugin.success('删除成功');
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

const changeStatus = debounce(async (id: any, val: any) => {
  try {
    const res = await status({
      id,
      val,
    });
    if (res.code === 1) {
      MessagePlugin.success(res.msg);
    } else {
      MessagePlugin.error(res.msg);
    }
  } catch (error) {
    MessagePlugin.error('修改失败');
  }
});

const editRow = (row: any) => {
  const { id } = row;
  router.push(`/admin/goods/edit?id=${id}`);
};

const headerAffixedTop = computed(() => ({
  offsetTop: store.isUseTabsRouter ? 48 : 0,
  container: `.${prefix}-layout`,
}));
</script>
