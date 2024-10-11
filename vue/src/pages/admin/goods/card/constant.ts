import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

import { formatTime } from '@/utils/date';

export const listsColumns: PrimaryTableCol<TableRowData>[] = [
  {
    colKey: 'id',
    type: 'multiple',
    align: 'center',
    ellipsis: true,
  },
  {
    colKey: 'category_name',
    title: '商品分类',
    align: 'center',
    ellipsis: true,
  },
  {
    colKey: 'good_name',
    title: '商品名称',
    align: 'center',
    ellipsis: true,
  },
  {
    colKey: 'good_price',
    title: '商品价格',
    align: 'center',
    ellipsis: true,
  },
  {
    colKey: 'number',
    title: '卡号',
    align: 'center',
    ellipsis: true,
  },
  {
    colKey: 'secret',
    title: '卡密',
    align: 'center',
    ellipsis: true,
  },
  {
    colKey: 'status',
    title: '状态',
    align: 'center',
    ellipsis: true,
  },
  {
    colKey: 'create_at',
    title: '添加时间',
    cell(h, props) {
      return h('span', formatTime(props.row.create_at));
    },
  },
  {
    colKey: 'operation',
    title: '操作',
    fixed: 'right',
    align: 'center',
    ellipsis: true,
    minWidth: 125,
  },
];
export const statusList = [
  {
    label: '锁定中',
    value: 3,
  },
  {
    label: '已售出',
    value: 2,
  },
  {
    label: '未售出',
    value: 1,
  },
];
