import { request } from '@/utils/request';

// 商品开始
export function list(data: any) {
  return request.post({
    url: '/adminapi/goods/good/list',
    params: data,
  });
}
// 获取商品数据 编辑时使用
export function detail(data: any) {
  return request.post({
    url: '/adminapi/goods/good/detail',
    params: data,
  });
}
// 编辑 新增商品数据
export function edit(data: any) {
  return request.post({
    url: '/adminapi/goods/good/edit',
    data,
  });
}
// 新增 商品数据
export function add(data: any) {
  return request.post({
    url: '/adminapi/goods/good/add',
    data,
  });
}

// 修改商品状态
export function status(data: any) {
  return request.post({
    url: '/adminapi/goods/good/status',
    data,
  });
}
// 删除商品
export function del(data: any) {
  return request.post({
    url: '/adminapi/goods/good/del',
    data,
  });
}
// 附加赠送用到的 获取商品列表id+name | 搜索用到
export function goodList() {
  return request.post({
    url: '/adminapi/goods/good/goodList',
  });
}
// 卡密放回收站 emptiedCards
export function emptiedCards(data: any) {
  return request.post({
    url: '/adminapi/goods/good/emptiedCards',
    data,
  });
}
// 商品分类 商品 树
export function structure() {
  return request.post({
    url: '/adminapi/goods/good/structure',
  });
}