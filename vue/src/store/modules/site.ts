import { defineStore } from 'pinia';
import { MessagePlugin } from 'tdesign-vue-next';

import { getSiteConfig } from '@/api/home/index';
import { store } from '@/store';

export const useSiteStore = defineStore('site', {
  state: () => ({
    config: {
      site_name: '',
      site_logo: '',
      merchant_logo: '',
      merchant_logo_sm: '',
      site_domain: '',
      site_info_qq: '',
      site_info_email: '',
      // 版权信息
      site_info_copyright: '',
      // 当前分类
      currentCate: 0,
      // 商品缺省图片
      goods_default_img: '',
      // 是否弹出购卡协议
      show_purchase_agreement: false,
      // 购卡协议
      shop_buy_protocol: '',
    },
  }),
  getters: {
    getSiteMerchantLogo: (state) => state.config?.merchant_logo,
    getSiteMerchantLogoSm: (state) => state.config?.merchant_logo_sm,
    getSiteUrl: (state) => state.config?.site_domain,
    getCurrentCate: (state) => state.config?.currentCate,
  },
  actions: {
    async getSiteConfig() {
      try {
        const { data } = await getSiteConfig();
        this.config = { ...this.config, ...data };
      } catch (e) {
        MessagePlugin.error(e.message);
      }
    },
    // 设置当前分类
    setCurrentCate(currentCate: number) {
      this.config.currentCate = currentCate;
    },
  },
  persist: {},
});

export function getSiteStore() {
  return useSiteStore(store);
}
