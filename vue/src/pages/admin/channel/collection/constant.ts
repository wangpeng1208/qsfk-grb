import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

export const columns: PrimaryTableCol<TableRowData>[] = [
  {
    colKey: 'id',
    title: 'ID',
  },
  {
    colKey: 'title',
    title: '标题',
  },
  {
    colKey: 'paytype',
    title: '分类',
  },
  {
    colKey: 'code',
    title: '接口',
  },
  {
    colKey: 'show_name',
    title: '名称',
  },
  {
    colKey: 'status',
    title: '状态',
  },
  {
    colKey: 'is_available',
    title: '平台',
  },
  {
    colKey: 'sort',
    title: '排序',
  },
  {
    colKey: 'operate',
    title: '操作',
    fixed: 'right',
  },
];
