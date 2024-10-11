import { request } from '@/utils/request';

// 图片分类 树状结构
export function getCategoryListApi(params: any) {
  return request.post({
    url: '/adminapi/upload/getCategoryList',
    params,
  });
}

// createApi
export function createApi(data: any) {
  return request.post({
    url: '/adminapi/upload/createCategory',
    data,
  });
}
// categoryEditApi
export function categoryEditApi(data: any) {
  return request.post({
    url: '/adminapi/upload/editCategory',
    data,
  });
}
//     fileListApi
export function fileListApi(params: any) {
  return request.post({
    url: '/adminapi/upload/fileList',
    params,
  });
}

//     moveApi
export function moveApi(data: any) {
  return request.post({
    url: '/adminapi/upload/move',
    data,
  });
}
//     fileUpdateApi
export function fileUpdateApi(data: any) {
  return request.post({
    url: '/adminapi/upload/fileUpdateApi',
    data,
  });
}