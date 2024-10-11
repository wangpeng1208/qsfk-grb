import { request } from '@/utils/request';

// 支付渠道
export function payChannel() {
  return request.post({
    url: '/home/pay/payChannel',
  });
}

// 订单支付
export function payOrder(params: any) {
  return request.post({
    url: '/home/pay/payOrder',
    params,
  });
}

// 去支付
export function goPayment(params: any) {
  // 跳转到支付宝支付
  const baseUrl = import.meta.env.MODE === 'release' ? window.location.origin : import.meta.env.VITE_API_URL;

  const url = new URL('/home/pay/pay', baseUrl);
  url.search = new URLSearchParams({ trade_no: params.trade_no }).toString();

  return url.toString();
}
