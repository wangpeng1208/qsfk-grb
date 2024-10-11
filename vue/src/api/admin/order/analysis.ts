import { request } from '@/utils/request';

export function channel(params: any) {
  return request.post({
    url: '/adminapi/order/analysis/channel',
    params,
  });
}
