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
                <span class="header-item header-item-active hover:text-xenon-600 border-b-2 flex items-center h-full cursor-pointer transition-fast-out"> 首页 </span>
              </li>

              <li class="flex items-center h-full mx-16" @click="orderPage">
                <span class="header-item hover:text-xenon-600 border-b-2 flex items-center h-full cursor-pointer transition-fast-out"> 查询订单 </span>
              </li>

              <li class="flex items-center h-full mx-16" @click="aboutPage">
                <span class="header-item hover:text-xenon-600 border-b-2 flex items-center h-full cursor-pointer transition-fast-out"> 联系我们 </span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div class="flex-1 mx-auto w-full max-w-1440 bg-white pt-72">
        <div class="flex h-full">
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
                      <a class="flex items-center hover:text-xenon-600 transition-fast-out" :class="{ 'text-xenon-600': currentCate === item.id }">
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
          <div class="w-full lg:ml-376 overflow-x-hidden">
            <div class="p-24 md:px-56 md:pt-48 md:pb-24">
              <div class="mb-4 flex justify-between items-start">
                <div class="text-xs leading-tight">
                  <div class="font-sans-alt font-semibold tracking-wide">
                    首页 /
                    {{ getCateNameById(currentCate) }}
                  </div>
                </div>
              </div>
              <div v-if="goodLists.length">
                <div class="bg-white">
                  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div class="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 xl:gap-x-8 grid-cols-1">
                      <a v-for="product in goodLists" :key="product.id" :href="product.href" class="group cursor-pointer" @click="goodsPage(product.id)">
                        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                          <img :src="product.image" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
                        <p class="mt-1 text-sm font-medium text-gray-900">￥{{ product.price }}</p>
                      </a>
                    </div>
                  </div>
                </div>
                <t-pagination v-if="pagination.total > pagination.defaultPageSize" v-model="pagination.defaultCurrent" v-model:pageSize="pagination.defaultPageSize" :total="pagination.total" :show-page-size="false" style="margin-top: 10px" @current-change="changeGoodsList" />
              </div>
              <div v-else>当前所选栏目暂无商品</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';

import { cateListSimple, goodsListByCate } from '@/api/home/index.ts';
import { getSiteStore } from '@/store';

import './d.css';
import './normalize.css';
import router from '@/router';

const siteStore = getSiteStore();
// 当前所选栏目
const currentCate = ref(siteStore.getCurrentCate);
// 网站logo
const siteLogo = computed(() => siteStore.config.site_logo);
// 网站版权信息
const siteInfo = computed(() => siteStore.config.site_info_copyright);

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

// 分页信息
const pagination = ref({
  defaultPageSize: 15,
  total: 0,
  defaultCurrent: 1,
});
// 获取所有的商品 带分页
// 产品图片
const goodsImg = ref(siteStore.config.goods_default_img);
const goodLists = ref([]);
const initGoodsList = async (id = 0) => {
  const res = await goodsListByCate({
    id: id,
    page: pagination.value.defaultCurrent,
    limit: pagination.value.defaultPageSize,
  });
  if (res.code === 1) {
    goodLists.value = res.data.list;
    // 依次循环商品列表，判断是否有图片，没有则使用默认图片
    goodLists.value.forEach((item) => {
      if (item.slider_image != null && item.slider_image.length > 0) {
        item.image = item.slider_image[0];
      } else {
        item.image = goodsImg.value;
      }
    });
    pagination.value.total = res.data.total;
  }
};
// 按分类查找商品
const initGoodsListByCate = (id: number) => {
  currentCate.value = id;
  pagination.value.defaultCurrent = 1;
  initGoodsList(id);
  siteStore.setCurrentCate(id);
  if (showSidebar.value) {
    hiddenToggleSidebar();
  }
};
// 按分页查找商品
const changeGoodsList = (page: number) => {
  pagination.value.defaultCurrent = page;
  initGoodsList();
};

onMounted(() => {
  initCateList();
  initGoodsList(currentCate.value);
});
// 去商品详情页
const goodsPage = (id: number) => {
  router.push({ name: 'goods', params: { id } });
};
const homePage = () => {
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
// 根据栏目id获取栏目名称
const getCateNameById = (id: number) => {
  const cate = cateListsAll.value.find((item) => item.id === id);
  return cate ? cate.name : '';
};
</script>
