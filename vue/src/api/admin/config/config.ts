import { request } from '@/utils/request';

export function getConfig(params: any) {
  return request.post({
    url: '/adminapi/config/config/getConfig',
    params,
  });
}

// editConfig
export function editConfig(data: any) {
  return request.post({
    url: '/adminapi/config/config/editConfig',
    data,
  });
}

// imgUpload
export const adminUpload = '/adminapi/upload/upload';

export const baseUrl = import.meta.env.VITE_API_URL;
