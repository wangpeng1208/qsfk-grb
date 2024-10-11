import { request } from '@/utils/request';

export function orderArea() {
  return request.post({
    url: '/adminapi/workbench/orderArea',
  });
}
// visitArea
export function visitArea() {
  return request.post({
    url: '/adminapi/workbench/visitArea',
  });
}

// basic
export function basic() {
  return request.post({
    url: '/adminapi/workbench/basic',
  });
}
// channelCollectionOrderPriceSum
export function channelCollectionOrderPriceSum() {
  return request.post({
    url: '/adminapi/workbench/channelCollectionOrderPriceSum',
  });
}

interface orderStatisDataParams {
  period: number;
  unit: 'day' | 'week' | 'month' | 'year';
}
// orderStatisData
export function orderStatisData(data: orderStatisDataParams) {
  return request.post({
    url: '/adminapi/workbench/orderStatisData',
    data,
  });
}

export interface userCollectionRankParams {
  unit: 'today' | 'week' | 'month' | 'year' | 'all';
}

// systemVersion
export function systemVersion() {
  return request.post({
    url: '/adminapi/workbench/systemVersion',
  });
}
