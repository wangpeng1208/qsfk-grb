import { request } from '@/utils/request';

export const baseUrl = import.meta.env.MODE === 'release' ? window.location.origin : import.meta.env.VITE_API_URL;

/**
 * @description 表格--删除
 * @param {Number} param id {Number} 配置id
 */
export function tableDelApi(data: any) {
  return request.post({
    url: data.url,
    data: data.ids,
  });
}
