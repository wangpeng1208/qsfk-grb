import { request } from '@/utils/request';

export function list(params: any) {
  return request.post({
    url: '/adminapi/order/order/list',
    params,
  });
}
// orderDel
export function del(params: any) {
  return request.post({
    url: '/adminapi/order/order/del',
    params,
  });
}
// clear
export function clear() {
  return request.post({
    url: '/adminapi/order/order/clear',
  });
}

// notify
export function notify(params: any) {
  return request.post({
    url: '/adminapi/order/order/notify',
    params,
  });
}
// freeze
export function freeze(params: any) {
  return request.post({
    url: '/adminapi/order/order/freeze',
    params,
  });
}
// delBatch
export function delBatch(params: any) {
  return request.post({
    url: '/adminapi/order/order/delBatch',
    params,
  });
}

// 查看卡密
export function card(params: any) {
  return request.post({
    url: '/adminapi/order/order/card',
    params,
  });
}

