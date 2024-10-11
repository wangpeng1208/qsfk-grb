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
          <div class="w-full lg:ml-376 overflow-x-hidden goods-con">
            <div class="p-24 md:px-56 md:pt-48 md:pb-24">
              <div class="mb-4 flex justify-between items-start">
                <div class="text-xs leading-tight">
                  <div class="font-sans-alt font-semibold tracking-wide">
                    首页 /
                    {{ getCateNameById(currentCate) }}
                    / {{ goodsInfo.name }}
                  </div>
                </div>
              </div>
              <t-loading text="支付中..." :loading="payLoading" size="small" fullscreen></t-loading>
              <div class="grid grid-rows gap-4 sm:grid-cols-2">
                <div class="bg-white p-4">
                  <!-- 商品图片 -->
                  <img :src="goodsImg" alt="商品图片" class="w-fullobject-cover object-center" />
                </div>
                <div class="bg-white p-4">
                  <!-- <div class="flex items-center justify-between">
                    <h2 class="text-2xl font-bold text-gray-800">{{ goodsInfo.name }}</h2>
                  </div> -->
                  <div class="flex items-center justify-between"></div>
                  <div class="flex items center p-4">
                    <label for="contact" class="mr-5">商品价格</label>
                    <div>
                      <span class="text-xl font-bold text-red-400">￥{{ goodsInfo.price }}</span>
                    </div>
                  </div>
                  <div class="flex items-center justify-between center p-4">
                    <div class="flex items-center justify-between">
                      <label for="contact" class="mr-5">剩余库存</label>
                      <div>
                        {{ goodsInfo.cards_stock_count }}
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <label for="contact" class="mr-5">已售</label>
                      <div>
                        {{ goodsInfo.cards_sold_count }}
                      </div>
                    </div>
                  </div>
                  <t-divider> 开始下单 </t-divider>
                  <div class="flex items center p-4">
                    <label for="contact" class="mr-5 w-15">联系方式</label>
                    <div class="mr-5 w-40">
                      <t-input v-model="formData.contact" style="width: 260px" name="contact" :placeholder="contactText" clearable />
                    </div>
                  </div>
                  <div class="flex items center p-4">
                    <label for="num" class="mr-5 w-15">购买数量</label>
                    <t-input-number v-model="formData.quantity" :step="1" :max="goodsInfo.cards_stock_count" :min="goodsInfo.limit_quantity" auto-width clearable @change="handleChange" style="width: 260px" />
                  </div>

                  <div v-if="goodsInfo.coupon_type" class="flex items center p-4">
                    <label for="num" class="mr-5 w-15">用优惠券</label>
                    <div>
                      <t-switch v-model="couponBtnActive" />
                    </div>
                  </div>

                  <div v-if="couponBtnActive && goodsInfo.coupon_type" class="flex items center p-4">
                    <label for="num" class="mr-5 w-15">优惠券号</label>
                    <div>
                      <t-input v-model="formData.coupon_code" style="width: 260px" name="coupon_code" placeholder="请填写你的优惠券" />
                    </div>
                  </div>
                  <div v-if="!goodsInfo.buy_need_login && goodsInfo.take_card_type != 0" class="flex items center p-4">
                    <label for="num" class="mr-5 w-15">取卡密码</label>
                    <div>
                      <t-input v-if="goodsInfo.take_card_type != 0" style="width: 260px" v-model="formData.pwdforsearch" placeholder="请输入取卡密码（6-20位）" />
                    </div>
                  </div>
                  <div class="flex items center p-4">
                    <label for="num" class="mr-5 w-15">选择支付方式</label>
                  </div>
                  <div class="flex items center p-4">
                    <div class="variations__list" id="pay-type">
                      <span v-for="item in channel" class="pay-type btn" :class="payInfo.channel_id == item.channel_id ? 'active' : ''" @click="clickPayType(item.channel_id)">
                        <span style="float: left"> <img style="width: 21px" :src="getImgUrl(item.ico)" /> </span>

                        <span>{{ item.show_name }}</span>
                      </span>
                    </div>
                  </div>
                  <!-- 立即支付 -->
                  <div class="flex items center p-4">
                    <button class="bg-blue-500 text-white px-40 py-2 ml-2" @click="pay">
                      (￥{{ paymoneyTotal }} <span v-if="goodsInfo.coupon_type && formData.coupon_code" class="s">原价：{{ paymoney }}</span
                      >) 立即下单
                    </button>
                  </div>
                  <div class="flex items center p-4">
                    <div v-if="payResult">支付成功！！ 订单号为：{{ tradeNo }}</div>
                  </div>
                </div>
              </div>
              <div class="bg-white">
                <!-- 商品内容 -->
                <div class="p-4">
                  <h2 class="text-xl font-bold text-gray-800">商品详情</h2>
                  <div class="text-gray-700 mt-4">
                    <p v-html="goodsInfo.content"></p>
                  </div>
                </div>
                <div v-if="goodsInfo.wholesale_discount_list != null && goodsInfo.wholesale_discount_list.length > 0" class="p-4">
                  <h2 class="text-l font-bold text-gray-800">满减优惠</h2>

                  <div v-for="item in goodsInfo.wholesale_discount_list" class="flex items-center justify-between">
                    <label for="contact" class="mr-2">买满{{ item.num }}件</label>
                    <span class="text-sm font-bold text-red-400">单价{{ item.price }}元</span>
                  </div>
                </div>

                <div v-if="goodsInfo.event_give != null && goodsInfo.event_give.length > 0" class="p-4">
                  <h2 class="text-sl font-bold text-gray-800">活动赠送</h2>

                  <div v-for="item in goodsInfo.event_give" class="flex items-center justify-between">
                    <label for="contact" class="mr-2">每买{{ item.num }}件</label>
                    <span class="text-sm font-bold text-red-400">赠送{{ item.give_num }}件</span>
                  </div>
                </div>

                <div v-if="goodsInfo.addtion_give != null && goodsInfo.addtion_give.length > 0" class="p-4">
                  <h2 class="text-l font-bold text-gray-800">附加赠送</h2>
                  <div v-for="item in goodsInfo.addtion_give" class="flex items-center justify-between">
                    <label for="contact" class="mr-2">买满{{ item.bug_num }}件</label>
                    <span class="text-sm font-bold text-red-400"
                      >赠送`<b>{{ item.goods_name }}</b
                      >`商品{{ item.give_num }}件</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <t-dialog v-model:visible="agreementisibleModal" :close-on-overlay-click="false" header="购卡协议" mode="modal" draggable confirm-btn="同意协议，并继续下单" :on-confirm="agreementisibleModalOnSubmit">
      <template #body>
        <div v-html="agreementContent"></div>
      </template>
    </t-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, reactive, onMounted, watchEffect, watch } from 'vue';

import { cateListSimple, getGoodsDetail, getCouponInfo } from '@/api/home/index.ts';
import { payChannel, payOrder, goPayment } from '@/api/home/pay.ts';
import { getGoodsOrderStatus } from '@/api/home/order';
import { getSiteStore } from '@/store';
import { useRoute } from 'vue-router';
import { getImgUrl } from '@/utils/common';
import './d.css';
import './normalize.css';
import { useRouter } from 'vue-router';

const siteStore = getSiteStore();
const route = useRoute();
const router = useRouter();
const goodsId = ref();
watchEffect(() => {
  goodsId.value = route.params.id;
});

// 当前所选栏目
const currentCate = ref(siteStore.getCurrentCate);
// 网站logo
const siteLogo = computed(() => siteStore.config.site_logo);
// 网站版权信息
const siteInfo = computed(() => siteStore.config.site_info_copyright);

// 商品详情
const goodsInfo = reactive({} as any);
// 栏目详情
const cateInfo = reactive({} as any);
// 产品图片
const goodsImg = ref(siteStore.config.goods_default_img);
const initgoodsInfo = async () => {
  const res = await getGoodsDetail({
    id: goodsId.value,
  });
  if (res.code === 1) {
    for (const key in res.data) {
      // @ts-ignore
      goodsInfo[key] = res.data[key];
      formData.goods_id = res.data.id;
    }
    if (res.data.slider_image != null && res.data.slider_image.length > 0) {
      goodsImg.value = res.data.slider_image[0];
    }
    for (const key in res.data.cate) {
      // @ts-ignore
      cateInfo[key] = res.data.cate[key];
      siteStore.setCurrentCate(cateInfo['id']);
      currentCate.value = cateInfo['id'];
    }
    initPayMoney();
  }
};
initgoodsInfo();

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
// 根据栏目id获取栏目名称
const getCateNameById = (id: number) => {
  const cate = cateListsAll.value.find((item) => item.id === id);
  return cate ? cate.name : '';
};

// 加载支付方式
const channel = ref([]);
const payInfo = reactive({
  channel_id: 0,
});
const loadChannel = async () => {
  const res = await payChannel();
  if (res.code) {
    channel.value = res.data;
    payInfo.channel_id = channel.value.length ? channel.value[0].channel_id : 0;
    formData.pid = payInfo.channel_id;
  } else {
    console.error('支付方式加载失败');
  }
};
loadChannel();

const contactLimitText = ref('无限制');
const contactText = ref('[必填]推荐填写QQ号或手机号!');
const initContactLimitText = () => {
  if (goodsInfo.contact_limit === 'any') {
    contactLimitText.value = '任意字符串';
  } else if (goodsInfo.contact_limit === 'mobile') {
    contactLimitText.value = '只能输入手机号';
    contactText.value = '[必填]请填写您的手机号!';
  } else if (goodsInfo.contact_limit === 'email') {
    contactLimitText.value = '只能输入邮箱';
    contactText.value = '[必填]请填写您的邮箱!';
  } else if (goodsInfo.contact_limit === 'qq') {
    contactLimitText.value = '只能输入QQ号';
    contactText.value = '[必填]请填写您的QQ号!';
  } else {
    contactLimitText.value = '[必填]请输入联系方式';
  }
};
initContactLimitText();

const checkTagValue1 = ref([]);
watch(
  () => checkTagValue1.value,
  (val) => {
    if (val.includes(1)) {
      contactText.value = '[必填]请填写您的手机号!';
    } else {
      initContactLimitText();
    }
    if (val.includes(2)) {
      formData.isemail = 1;
    } else {
      formData.isemail = 0;
    }
    initPayMoney();
  },
);

// 点击 优惠券 按钮
const couponBtnActive = ref(false);
// 如果couponBtnActive激活则 formData.is_coupon = 1 否则 formData.is_coupon = 0
watch(
  () => couponBtnActive.value,
  (val) => {
    if (val) {
      formData.is_coupon = 1;
      return;
    }
    formData.is_coupon = 0;
  },
);
// 点击支付方式按钮
const clickPayType = (id: number) => {
  payInfo.channel_id = id;
  formData.pid = id;
};
// 数量输入框切换
const handleChange = (v: number | string) => {
  if (v) {
    initPayMoney();
    if (v > goodsInfo.cards_stock_count) {
      MessagePlugin.error('库存不足');
    }
  }
};
const formData = reactive({
  goods_id: 0,
  contact: '',
  coupon_code: '',
  pwdforsearch: '',
  isemail: 0,
  email: '',
  pid: payInfo.channel_id,
  is_coupon: 0,
  quantity: goodsInfo.limit_quantity ? goodsInfo.limit_quantity : 1,
  agreement: false,
});
// 监听 formData.coupon_code 变化
watch(
  () => formData.coupon_code,
  (val) => {
    if (val) {
      initPayMoney();
    }
  },
);
// 对支付费用进行计算 取2未小数 不足补0
const toFixed = (num: number) => {
  return num.toFixed(2);
};
// get_discount_price 批发优惠单价计算
const getDiscountPrice = (price: any, list: any, quantity: any) => {
  const sort = list.sort((a: any, b: any) => {
    return a.num - b.num;
  });
  sort.forEach((item: any) => {
    if (quantity >= item.num) {
      price = item.price;
    }
  });
  return price;
};
// 原价
const paymoney = ref(0);
// 实际支付
const paymoneyTotal = ref(0);
// 批发优惠价
// 单价
const paymoneyDj = ref(0);
// 原单价
const paymoneyDjY = ref(0);
// 优惠券价格
const paymoneyYhj = ref(0);
const couponHelp = ref('');
const initPayMoney = async () => {
  paymoneyDjY.value = goodsInfo.price;
  paymoneyDj.value = goodsInfo.price;
  if (goodsInfo.wholesale_discount_list != null) {
    paymoneyDj.value = getDiscountPrice(goodsInfo.price, goodsInfo.wholesale_discount_list, formData.quantity);
  }
  // 原价*数量
  paymoney.value = paymoneyDjY.value * formData.quantity;
  // 如果批发优惠命中条件，优惠价*数量
  if (paymoneyDj.value > 0) {
    paymoneyTotal.value = paymoneyDj.value * formData.quantity;
  } else {
    paymoneyTotal.value = paymoney.value;
  }
  // 使用优惠券
  if (couponBtnActive.value === true && formData.coupon_code !== '') {
    // 获取优惠券信息
    const formDataCoupon = {
      coupon_code: formData.coupon_code,
      goods_id: goodsInfo.id,
      cate_id: cateInfo.id,
      quantity: formData.quantity,
      total_price: paymoneyDj.value * formData.quantity,
    };
    const res = await getCouponInfo(formDataCoupon);
    if (res.code === 1) {
      if (res.data.type === 1) {
        // 满减券
        paymoneyYhj.value = res.data.amount;
      } else if (res.data.type === 2) {
        // 折扣券
        paymoneyYhj.value = (paymoneyTotal.value * res.data.amount) / 100;
      }
      // 优惠券可用提示
      couponHelp.value = `优惠券可用,优惠${res.data.amount}${res.data.type === 1 ? '元' : '%'}`;
      // 如果优惠券金额大于订单金额，优惠券金额等于订单金额
      if (paymoneyYhj.value > paymoneyTotal.value) {
        paymoneyYhj.value = paymoneyTotal.value;
        couponHelp.value = `优惠券可用,优惠${res.data.amount}${res.data.type === 1 ? '元' : '%'}，但大于订单金额，本单享受全额优惠【0元购买】`;
      }
    } else {
      couponHelp.value = res.msg;
      paymoneyYhj.value = 0;
    }
  }
  paymoneyTotal.value = parseFloat(toFixed(Number(paymoneyTotal.value) - Number(paymoneyYhj.value)));
};
// 发起支付流程
// 判断是否是移动设备
const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
// 发起支付过程
const timer = ref<any>(null);
const payLoading = ref(false);
const payResult = ref(false);
const tradeNo = ref('');
// 是否弹出购买协议
const isAgreement = computed(() => siteStore.config.show_purchase_agreement);
const agreementisibleModal = ref(false);
const agreementisibleModalOnSubmit = () => {
  formData.agreement = true;
  agreementisibleModal.value = false;
  pay();
};
// 协议内容
const agreementContent = computed(() => siteStore.config.shop_buy_protocol);
// 发起支付
const pay = async () => {
  if (formData.contact === '') {
    MessagePlugin.error('请填写联系方式');
    return;
  }
  if (formData.quantity === 0) {
    MessagePlugin.error('购买数量不能为0');
    return;
  }
  if (formData.pid === 0) {
    MessagePlugin.error('请选择支付方式');
    return;
  }
  if (formData.is_coupon === 1 && formData.coupon_code === '') {
    MessagePlugin.error('请填写优惠券');
    return;
  }
  if (isAgreement && !formData.agreement) {
    // 弹出购买协议
    agreementisibleModal.value = true;
    return;
  }
  const res = await payOrder(formData);
  if (res.code === 1) {
    MessagePlugin.success(res.msg);
    // 跳转到支付页面
    const paymentUrl = await goPayment({
      trade_no: res.data.trade_no,
    });
    timer.value = setInterval(async () => {
      const result = await getOrderStatus(res.data.trade_no);
      if (result.code === 1) {
        // 支付成功
        MessagePlugin.success('支付成功! ');
        payResult.value = true;
        tradeNo.value = res.data.trade_no;
        payLoading.value = false;
        clearInterval(timer.value);
        paySuccessStatus.value = true;
      }
    }, 3000);
    await getOrderStatus(res.data.trade_no);
    // 1s后跳转
    setTimeout(() => {
      payLoading.value = true;
      if (isMobileDevice()) {
        location.href = paymentUrl;
      } else {
        window.open(paymentUrl);
      }
    }, 1000);
  } else {
    MessagePlugin.error(res.msg);
  }
};

// 订单状态
const paySuccessStatus = ref(false);
const getOrderStatus = async (trade_no: String) => {
  const res = await getGoodsOrderStatus({
    trade_no,
  });
  return res;
};
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
</style>
