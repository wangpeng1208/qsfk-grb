import { request } from '@/utils/request';

// 首页注册统计
export function indexCount() {
  return request.post({
    url: '/home/index/indexCount',
  });
}
// 获取模板配置
export function getSiteConfig() {
  return request.post({
    url: '/home/index/siteConfig',
  });
}

// 获取商品分类 CateListSimple
export function cateListSimple() {
  return request.post({
    url: '/home/index/cateListSimple',
  });
}

// 按分类找到商品列表
export function goodsListByCate(params: any) {
  return request.post({
    url: '/home/index/goodsListByCate',
    params,
  });
}

// 商品详情
export function getGoodsDetail(params: { id: number }) {
  return request.post({
    url: '/home/index/goodsDetail',
    params,
  });
}

// 优惠券信息
export function getCouponInfo(params: any) {
  return request.post({
    url: '/home/index/getCouponInfo',
    params,
  });
}