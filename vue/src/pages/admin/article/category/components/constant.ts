import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

import { formatTime } from '@/utils/date';

export const columns: PrimaryTableCol<TableRowData>[] = [
  {
    colKey: 'id',
    title: 'ID',
  },
  {
    colKey: 'name',
    title: '名称',
  },
  {
    colKey: 'alias',
    title: '别名',
  },
  {
    colKey: 'status',
    title: '状态',
  },
  {
    colKey: 'create_at',
    title: '添加时间',
    cell(h, props) {
      return h('span', formatTime(props.row.create_at));
    },
  },
  {
    colKey: 'operate',
    title: '操作',
    fixed: 'right',
  },
];

export const statusOptions = [
  {
    label: '正常',
    value: 1,
  },
  {
    label: '禁用',
    value: 0,
  },
];
