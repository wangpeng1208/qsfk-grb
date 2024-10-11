import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

export const columns: PrimaryTableCol<TableRowData>[] = [
  {
    colKey: 'channel_id',
    title: '渠道ID',
  },
  {
    colKey: 'title',
    title: '渠道名称',
  },
  {
    colKey: 'count',
    title: '提交订单',
  },
  {
    colKey: 'paid',
    title: '已付订单',
  },
  {
    colKey: 'unpaid',
    title: '未付订单',
  },
  {
    colKey: 'sum_money',
    title: '提交金额',
  },
];
