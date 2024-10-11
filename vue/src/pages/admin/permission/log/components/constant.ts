import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

export const columns: PrimaryTableCol<TableRowData>[] = [
  { colKey: 'id', type: 'multiple' },
  {
    colKey: 'username',
    title: '用户名',
  },
  {
    colKey: 'action',
    title: '访问链接',
    ellipsis: true,
  },
  {
    colKey: 'params',
    title: '请求参数',
    ellipsis: true,
  },
  {
    colKey: 'title',
    title: '标题',
    ellipsis: true,
    cell(h, props) {
      const parts = props.row.content.split(', 结果：');
      return h('span', parts[0]);
    },
  },
  {
    colKey: 'result',
    title: '结果',
    ellipsis: true,
    cell(h, props) {
      const parts = props.row.content.split(', 结果：');
      return h('span', parts[1]);
    },
  },
  {
    colKey: 'ip',
    title: 'IP',
  },
  {
    colKey: 'create_at',
    title: '日志时间',
    width: '160px',
  },
];
