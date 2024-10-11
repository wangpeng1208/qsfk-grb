import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

import { formatTime } from '@/utils/date';
// 优惠券分类
export const couponType = [
  {
    label: '通用券',
    value: 1,
  },
  {
    label: '品类券',
    value: 2,
  },
  {
    label: '商品券',
    value: 3,
  },
];
// 是否可被主动领取
export const isReceive = [
  {
    label: '线下赠送',
    value: 0,
  },
  {
    label: '线上领取',
    value: 1,
  },
];
// 折扣类型
export const importType = [
  {
    label: '元',
    value: 1,
  },
  {
    label: '%',
    value: 100,
  },
];

// 到期时间 永久 自定义到期时间
export const expirationTime = [
  {
    label: '永久',
    value: 1,
  },
  {
    label: '自定义到期时间',
    value: 2,
  },
];

export const listsColumns: PrimaryTableCol<TableRowData>[] = [
  {
    colKey: 'id',
    type: 'multiple',
  },
  {
    colKey: 'code',
    title: '优惠券',
  },
  {
    colKey: 'coupon_type',
    title: '类型',
  },
  {
    colKey: 'coupon_name',
    title: '关联内容',
    width: '300px',
  },
  {
    colKey: 'amount',
    title: '面额',
  },
  {
    colKey: 'create_at',
    title: '生成时间',
    cell(h, props) {
      return h('span', formatTime(props.row.create_at));
    },
  },
  {
    colKey: 'status',
    title: '有效期',
  },
  {
    colKey: 'min_banlance',
    title: '使用条件',
  },
  {
    colKey: 'use_times',
    title: '剩余次数',
  },
  {
    colKey: 'remark',
    title: '备注',
  },
];
export const statusList = [
  {
    label: '已售出',
    value: 2,
  },
  {
    label: '未售出',
    value: 1,
  },
];