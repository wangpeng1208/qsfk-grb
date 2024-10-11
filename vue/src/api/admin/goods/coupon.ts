import { request } from '@/utils/request';

// 优惠券列表
export function getGoodsCouponList(params: any) {
  return request.post({
    url: '/adminapi/goods/coupon/index',
    params,
  });
}
// 添加
export function add(data: any) {
  return request.post({
    url: '/adminapi/goods/coupon/add',
    data,
  });
}
// 批量删除 batch_del
export function batchDelGoodsCoupon(params: any) {
  return request.post({
    url: '/adminapi/goods/coupon/batchDel',
    params,
  });
}