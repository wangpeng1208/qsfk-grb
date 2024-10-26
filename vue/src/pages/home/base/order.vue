<template>
  <div class="home" style="background-image: linear-gradient(90deg, #f5f5fa, #f5f5fa 50%, #fff 0)">
    <div class="flex flex-col min-h-screen text-base font-sans">
      <header class="header fixed top-0 lg:z-40 z-20 bg-white w-full font-sans-alt">
        <div class="flex max-w-1440 mx-auto">
          <div class="header-logo flex-shrink-0 w-376 lg:block hidden">
            <a class="block h-54 max-w-200 -mt-8" href="/">
              <img :src="siteLogo" class="h-full w-full fill-current" />
            </a>
          </div>
          <nav class="header-nav z-30 flex flex-grow items-center bg-white px-16 whitespace-no-wrap lg:h-auto h-72 min-w-0">
            <div class="flex lg:hidden">
              <div class="h-24 w-24 mr-24 ml-8 md:ml-40">
                <button class="flex items-center mr-32 text-grey-1000 hover:text-grey-1000 fill-current focus:outline-none focus:shadow-outline" @click="showToggleSidebar">
                  <span class="flex items-center h-24 w-24 mr-8 p-2 flex-grow-0 flex-shrink-0">
                    <svg class="h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14">
                      <path d="M19,8H1A1,1,0,0,1,1,6H19a1,1,0,0,1,0,2Z"></path>
                      <path d="M19,2H1A1,1,0,0,1,1,0H19a1,1,0,0,1,0,2Z"></path>
                      <path d="M19,14H1a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <ul class="h-full mx-24 uppercase leading-tight text-sm font-semibold tracking-wide flex">
              <li class="flex items-center h-full mx-16" @click="homePage">
                <span class="header-item hover:text-xenon-600 border-b-2 flex items-center h-full cursor-pointer transition-fast-out"> 首页 </span>
              </li>

              <li class="flex items-center h-full mx-16" @click="orderPage">
                <span class="header-item header-item-active hover:text-xenon-600 border-b-2 flex items-center h-full cursor-pointer transition-fast-out"> 查询订单 </span>
              </li>

              <li class="flex items-center h-full mx-16" @click="aboutPage">
                <span class="header-item hover:text-xenon-600 border-b-2 flex items-center h-full cursor-pointer transition-fast-out"> 联系我们 </span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div class="flex-1 mx-auto w-full max-w-1440 bg-white pt-72">
        <div class="flex h-full" style="height: 100%; position: relative">
          <aside class="fixed top-0 flex-shrink-0 bg-x-gradient-grey-200-grey-400-80 leading-tight lg:w-376 lg:flex lg:flex-col z-30 h-screen w-full hidden" data-target="app.sidebar">
            <div class="lg:block h-72 flex-grow-0 flex-shrink-0 hidden"></div>
            <div class="flex-grow w-inherit overflow-y-auto h-full">
              <div class="h-full">
                <div class="px-40 pt-48 pb-24">
                  <button class="block mb-32 text-xs font-semibold leading-none uppercase tracking-wide text-grey-700-opacity-60 focus:outline-none">
                    <span> 商品栏目 </span>
                  </button>
                  <ul>
                    <li v-for="item in cateLists" class="mt-24 cursor-pointer" @click="initGoodsListByCate(item.id)">
                      <a class="flex items-center hover:text-xenon-600 transition-fast-out">
                        <span class="flex items-center">
                          {{ item.name }}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="px-40">
              <div class="items-center -mx-16 py-16 border-grey-400-opacity-60 border-solid border-t">
                <div class="block mx-16 py-8 text-sm text-grey-700 hover:text-grey-800 transition-fast-out">
                  <p v-html="siteInfo"></p>
                  骑士发卡（个人版）qqss.net
                </div>
              </div>
            </div>
            <button class="flex lg:hidden absolute items-center top-0 right-0 mt-48 mr-40 text-grey-700-opacity-90 hover:text-grey-700 fill-current transition-fast-out focus:outline-none focus:shadow-outline" @click="hiddenToggleSidebar">
              <span class="flex items-center h-16 w-16 mr-16 flex-grow-0 flex-shrink-0">
                <svg class="block h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                  <path d="M8.41,7l5.3-5.29A1,1,0,1,0,12.29.29L7,5.59,1.71.29A1,1,0,0,0,.29,1.71L5.59,7,.29,12.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L7,8.41l5.29,5.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
                </svg>
              </span>
              <span class="block flex-grow-0 flex-shrink-0 mt-2 font-sans-alt text-base leading-none"> 关闭 </span>
            </button>
          </aside>
          <div class="w-full lg:ml-376 overflow-x-hidden goods-con">
            <div class="p-24 md:px-56 md:pt-48 md:pb-24">
              <div class="mb-4 flex justify-between items-start">
                <div class="text-xs leading-tight">
                  <div class="font-sans-alt font-semibold tracking-wide">首页 / 查询订单</div>
                </div>
              </div>
              <div class="">
                <div class="bg-white p-4">
                  <div class="flex items center p-4">
                    <div class="flex-1">
                      <t-input v-model="inputVal" placeholder="请输入订单号或联系方式" size="large" />
                    </div>
                    <t-button size="large" class="bg-blue-500 text-white px-40 py-2 ml-2" @click="orderQuery(1)">{{ saveBtn.content }}</t-button>
                  </div>

                  <div class="flex items center p-4">
                    <div v-if="payResult">支付成功！！ 订单号为：{{ tradeNo }}</div>
                  </div>
                </div>
              </div>
              <div class="bg-white">
                <!-- 商品内容 -->
                <div class="p-4">
                  <h2 class="text-xl font-bold text-gray-800">查询结果</h2>
                  <div class="text-gray-700 mt-4">
                    <div class="order">
                      <div v-if="orderQueryStatus && pageType === 'detail'" class="container">
                        <t-row>
                          <t-col v-if="!order" class="col-lg-12">
                            <div class="no-order">
                              <p>没有查询到订单信息</p>
                            </div>
                          </t-col>

                          <t-col v-if="order.status == 0" class="col-lg-12">
                            <div class="no-order">
                              <p>订单未支付</p>
                            </div>
                          </t-col>

                          <t-col v-else :span="12">
                            <div class="order-list">
                              <t-button>订单号：{{ order.trade_no }}</t-button>
                              <div class="h" style="display: flex; justify-content: space-between; align-items: center">
                                <dl>
                                  <dt>下单时间</dt>
                                  <dd>{{ formatTime(order.create_at) }}</dd>
                                </dl>
                                <dl>
                                  <dt>付款方式</dt>
                                  <dd>{{ paytype }}</dd>
                                </dl>
                                <dl>
                                  <dt>支付金额</dt>
                                  <dd>{{ order.total_price }}元</dd>
                                </dl>
                                <dl>
                                  <dt>已发卡密</dt>
                                  <dd>发放卡密{{ order.quantity }}张</dd>
                                </dl>
                                <dl>
                                  <dt>商品名称</dt>
                                  <dd style="max-width: 303px">{{ goods.name }}</dd>
                                </dl>
                              </div>

                              <div style="text-align: center; padding: 20px; margin: 20px">
                                <div id="copyText" v-html="outCardsHtml"></div>
                                <div class="remark">
                                  <div v-html="goods.remark"></div>
                                </div>
                              </div>
                            </div>
                          </t-col>
                        </t-row>
                      </div>
                      <!-- 列表形式 -->
                      <div v-if="orderQueryStatus && pageType === 'list'" class="container">
                        <t-base-table class="basic-table" ref="tableRef" row-key="id" :data="orderList" :columns="columns" :hover="true" lazy-load max-height="100%" table-layout="auto">
                          <template #bottomContent>
                            <t-pagination v-if="pagination.total > pagination.defaultPageSize" v-model="pagination.defaultCurrent" v-model:pageSize="pagination.defaultPageSize" :total="pagination.total" :show-page-size="false" :total-content="false" style="margin-top: 10px" @current-change="orderQuery" />
                          </template>
                        </t-base-table>
                      </div>
                    </div>
                  </div>
                  <t-dialog v-model:visible="visibleModal" :close-on-overlay-click="false" header="提示" mode="modal" draggable confirm-btn="确定" :on-confirm="onSubmit">
                    <template #body>
                      <t-form ref="form" :label-align="'top'">
                        <t-form-item label="" name="name">
                          <t-input v-model="pwd" placeholder="请输入查询密码" :style="{ width: '500px' }" />
                        </t-form-item>
                      </t-form>
                    </template>
                  </t-dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Link, MessagePlugin, Tag } from 'tdesign-vue-next';
import { computed, ref, reactive, onMounted } from 'vue';

import { cateListSimple } from '@/api/home/index';

import { query } from '@/api/home/order';
import { getSiteStore } from '@/store';
import './d.css';
import './normalize.css';
import { useRouter } from 'vue-router';
import { formatTime } from '@/utils/date';

const siteStore = getSiteStore();

// 网站logo
const siteLogo = computed(() => siteStore.config.site_logo);
// 网站版权信息
const siteInfo = computed(() => siteStore.config.site_info_copyright);

const router = useRouter();

interface StatusOption {
  value: number;
  label: string;
  theme: 'default' | 'primary' | 'warning' | 'danger' | 'success';
}
const statusOptions: StatusOption[] = [
  {
    label: '未支付',
    value: 0,
    theme: 'warning',
  },
  {
    label: '已支付',
    value: 1,
    theme: 'success',
  },
  {
    label: '已关闭',
    value: 2,
    theme: 'danger',
  },

  {
    label: '已退款',
    value: 3,
    theme: 'warning',
  },
];
const columns = [
  {
    title: '订单号',
    colKey: 'trade_no',
  },
  {
    title: '下单时间',
    colKey: 'create_at',
    cell: (h: any, params: any) => {
      return h('span', formatTime(params.row.create_at));
    },
  },
  {
    title: '支付金额',
    colKey: 'total_price',
  },
  {
    title: '数量',
    colKey: 'quantity',
  },
  // 订单状态
  {
    title: '订单状态',
    colKey: 'status',
    cell: (h: any, params: any) => {
      const statusOption = statusOptions.find((t) => t.value === params.row.status);
      return h(
        Tag,
        {
          theme: statusOption.theme,
          variant: 'light',
        },
        () => statusOption?.label,
      );
    },
  },
  {
    title: '商品名称',
    colKey: 'goods_name',
  },
  {
    title: '操作',
    cell: (h: any, params: any) => {
      return h(
        Link,
        {
          theme: 'primary',
          size: 'small',
          onClick: () => {
            inputVal.value = params.row.trade_no;
            orderQuery(1);
          },
        },
        () => '查看订单',
      );
    },
  },
];

const { orderId } = router.currentRoute.value.query;
// 订单号、联系方式
const inputVal = ref('');
if (orderId) {
  inputVal.value = orderId as string;
}
const outCards = ref('');
const outCardsHtml = ref('');
const order = ref({
  trade_no: '',
  create_at: 1,
  total_price: '',
  quantity: '',
  status: 0,
});
const loading = ref(false);
const visibleModal = ref(false);
const pwd = ref('');
// 单条形式
const orderQueryStatus = ref(false);
// 结果形式
const pageType = ref<'list' | 'detail'>('list');
// list形式
const pagination = ref({
  defaultPageSize: 10,
  total: 0,
  defaultCurrent: 1,
});
// 列表形式时 订单列表数据
const orderList = ref([]);
// 支付方式
const paytype = ref('');
// 商品
const goods = ref({
  name: '',
  remark: '',
});
const orderQuery = async (step: number) => {
  if (!inputVal.value.length) {
    MessagePlugin.error('请输入订单号！');
    return;
  }

  if (step === 1) {
    pwd.value = '';
  }

  orderQueryStatus.value = false;
  loading.value = true;

  try {
    let res;

    const pageParams = {
      limit: pagination.value.defaultPageSize,
      page: pagination.value.defaultCurrent,
    };
    res = await query({
      orderid: inputVal.value,
      pwd: pwd.value,
      ...pageParams,
    });
    // 状态重置
    loading.value = false;

    // 需要输入查询密码
    if (res.code === 1001) {
      visibleModal.value = true;
      return;
    }
    // 查询失败
    if (res.code === 0) {
      MessagePlugin.error(res.msg);
      return;
    }

    orderQueryStatus.value = true;
    // 如果存在 res.data.list
    if (res.data.pageType === 'list') {
      pageType.value = 'list';
      orderList.value = res.data.list;
      pagination.value.total = res.data.total;
    } else {
      pageType.value = 'detail';
      order.value = res.data.order;
      outCards.value = res.data.outCards;
      outCardsHtml.value = outCards.value.replace(/\n/g, '<br />');
      paytype.value = res.data.paytype;
      goods.value = res.data.goods;
      visibleModal.value = false;
      pwd.value = '';
    }
    saveBtn.content = '查询';
    saveBtn.loading = false;
  } catch (error) {
    loading.value = false;
    MessagePlugin.error('查询出错');
  }
};
const saveBtn = reactive({
  content: '查询',
  loading: false,
});

const onSubmit = () => {
  if (pwd.value) {
    saveBtn.content = '查询中...';
    saveBtn.loading = true;
    orderQuery(2);
  } else {
    MessagePlugin.error('请输入查询密码');
  }
};

// 获取所有的商品栏目
const cateLists = ref([]);
const cateListsAll = ref([]);
const initCateList = async () => {
  const res = await cateListSimple();
  if (res.code === 1) {
    cateListsAll.value = res.data.list;
    cateLists.value = res.data.list;
    cateLists.value.unshift({ id: 0, name: '全部' });
  }
};

// 按分类查找商品
const initGoodsListByCate = (id: number) => {
  // 跳转至首页 并且设置当前栏目
  siteStore.setCurrentCate(id);
  router.push({
    name: 'index',
    params: {
      id,
    },
  });
};
const homePage = () => {
  siteStore.setCurrentCate(0);
  router.push({ name: 'index' });
};
// 去订单查询页
const orderPage = () => {
  router.push({ name: 'order' });
};
// 去联系我们
const aboutPage = () => {
  router.push({ name: 'about' });
};
onMounted(() => {
  initCateList();
});
// 显示侧边栏
const showSidebar = ref(false);
const showToggleSidebar = () => {
  showSidebar.value = true;
  const sidebar = document.querySelector('[data-target="app.sidebar"]');
  sidebar.classList.toggle('flex');
  sidebar.classList.toggle('flex-col');
  sidebar.classList.remove('hidden');
};
// 隐藏侧边栏
const hiddenToggleSidebar = () => {
  showSidebar.value = false;
  const sidebar = document.querySelector('[data-target="app.sidebar"]');
  sidebar.classList.toggle('hidden');
  sidebar.classList.remove('flex');
  sidebar.classList.remove('flex-col');
};

const formData = reactive({
  contact: '2410110533047c500d3e',
});

const payLoading = ref(false);
const payResult = ref(false);
const tradeNo = ref('');
</script>

<style>
.pay-type.active {
  border: 2px solid #4aadff;
  padding: 4px 15px !important;
}
.pay-type {
  align-items: center;
  font-weight: 500;
  color: #010101;
  padding: 5px 16px;
  border-radius: 1px;
  margin: 10px 5px;
  border-radius: 3px;
  border: 1px solid #e4e4e4;
  box-shadow:
    4px 4px 1px -1px rgba(32, 35, 51, 0.04),
    0 2px 4px rgba(32, 35, 51, 0.02) !important;
}
.pay-type img {
  margin-right: 10px;
}
.btn {
  display: inline-block;
  cursor: pointer;
  line-height: 1.42857143;
}
.order-list {
  box-shadow: 0 5px 5px #eeeeee73;
}
.order-list p {
  line-height: 1.6;
}
.order-list dl dt {
  text-align: center;
}
.order-list .h dl {
  margin-right: 10px;
}
.copyright {
  font-size: 14px;
  bottom: 64px;
  margin: 60px auto;
  color: var(--td-text-color-secondary);
  position: relative;
  bottom: 0;
}

.remark {
  padding: 10px;
  background: #f5f5f5;
  border-top: 1px solid #f2f2f2;
}
</style>
