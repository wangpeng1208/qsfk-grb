import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

export const COLUMNS: PrimaryTableCol<TableRowData>[] = [
  {
    colKey: 'id',
    title: '商品ID',
    ellipsis: true,
  },
  {
    colKey: 'name',
    title: '商品名称',
    width: '150px',
    ellipsis: true,
  },
  {
    colKey: 'cate_name',
    title: '商品分类',
    ellipsis: true,
  },
  {
    colKey: 'price',
    title: '价格(￥)',
    ellipsis: true,
  },
  {
    colKey: 'sort',
    title: '排序',
    ellipsis: true,
  },
  {
    colKey: 'status',
    title: '状态',
    ellipsis: true,
  },
  {
    colKey: 'create_at',
    title: '创建时间',
    ellipsis: true,
  },
  {
    colKey: 'cards_stock_counts',
    title: '库存',
    ellipsis: true,

    minWidth: 150,
  },
  {
    colKey: 'cards_sold_counts',
    title: '已售',
    ellipsis: true,
    minWidth: 100,
  },
  {
    colKey: 'operation',
    title: '操作',
    fixed: 'right',
    ellipsis: true,
    minWidth: 200,
  },
];

export const TRUEFALSESWITCH = [
  { label: '开启', value: 1 },
  { label: '关闭', value: 0 },
];

export const CARDORDER = [
  { label: '先售老卡', value: 0 },
  { label: '先售新卡', value: 1 },
  { label: '随机售卡', value: 2 },
];

export const TAKECARDTYPE = [
  { label: '关闭', value: 0 },
  { label: '选填', value: 1 },
  { label: '必填', value: 2 },
];

export const CONTACTLIMIT = [
  { label: '手机号码', value: 'mobile' },
  { label: 'QQ号码', value: 'qq' },
  { label: '任意字符', value: 'any' },
];
