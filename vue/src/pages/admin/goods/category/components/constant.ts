import { MoveIcon } from 'tdesign-icons-vue-next';
import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

import { formatTime } from '@/utils/date';

export const COLUMNS: PrimaryTableCol<TableRowData>[] = [
  {
    title: '排序',
    colKey: 'drag',
    width: '40px',
    cell: (h) => {
      return h(MoveIcon);
    },
    align: 'center',

    ellipsis: true,
  },
  {
    title: '分类名称',
    align: 'left',
    colKey: 'name',
    filter: {
      type: 'input',
      resetValue: '',
      // 按下 Enter 键时也触发确认搜索
      confirmEvents: ['onEnter'],
      props: {
        placeholder: '输入关键词搜索',
      },
      showConfirmAndReset: true,
    },

    ellipsis: true,
  },
  {
    title: '商品数量',
    colKey: 'goods_count',

    ellipsis: true,
  },

  {
    title: '状态',
    colKey: 'status',
    ellipsis: true,
  },
  {
    title: '创建时间',
    colKey: 'create_at',
    cell(h, props) {
      return h('span', formatTime(props.row.create_at));
    },
  },
  {
    align: 'left',
    colKey: 'operation',
    title: '操作',
    fixed: 'right',
    ellipsis: true,
  },
];
