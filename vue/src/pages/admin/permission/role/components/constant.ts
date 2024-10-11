import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

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
    colKey: 'created_at',
    title: '创建时间',
  },
  {
    colKey: 'updated_at',
    title: '修改时间',
  },
  {
    colKey: 'operate',
    title: '操作',
  },
];
