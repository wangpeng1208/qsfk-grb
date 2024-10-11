import { request } from '@/utils/request';

// 库存列表
export function list(params: any) {
  return request.post({
    url: '/adminapi/goods/card/list',
    params,
  });
}

// 添加卡密
export function add(data: any) {
  return request.post({
    url: '/adminapi/goods/card/add',
    data,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}
// 删除卡密
export function del(data: any) {
  return request.post({
    url: '/adminapi/goods/card/del',
    data,
  });
}

// 设置优先销售
export function first(data: any) {
  return request.post({
    url: '/adminapi/goods/card/first',
    data,
  });
}

// 一键清空卡密
export function clearGoodsCards() {
  return request.post({
    url: '/adminapi/goods/card/allDel',
  });
}

