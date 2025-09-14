import {DialogPlugin, Link, MessagePlugin, PrimaryTableCol, TableRowData, Tag } from 'tdesign-vue-next';
import { VNode } from 'vue';

import { freeze, notify} from '@/api/admin/order/order';
import { formatTime } from '@/utils/date';

interface StatusOption {
  value: number;
  label: string;
  theme: 'default' | 'primary' | 'warning' | 'danger' | 'success';
}

export const statusOptions: StatusOption[] = [
  {
    label: '未支付',
    value: 0,
    theme: 'warning',
  },
  {
    label: '已支付',
    value: 1,
    theme: 'success',
  },
  {
    label: '已关闭',
    value: 2,
    theme: 'danger',
  },

  {
    label: '已退款',
    value: 3,
    theme: 'warning',
  },
];
export const columns: PrimaryTableCol<TableRowData>[] = [
  {
    colKey: 'id',
    type: 'multiple',
    width: '50px',
  },
  {
    colKey: 'trade_no',
    title: '订单号',
    width: '80px',
    ellipsis: true,
  },
  {
    colKey: 'goods_name',
    title: '商品名',
    width: '80px',
    ellipsis: true,
  },
  {
    colKey: 'contact',
    title: '联系方式',
    minWidth: 100,
  },
  {
    colKey: 'quantity',
    title: '商品数量',
    minWidth: 100,
  },
  {
    colKey: 'total_price',
    title: '订单金额',
  },
  {
    colKey: 'channel',
    title: '支付渠道',
    cell: (h, { row }) => `${row.channel.title}`,
  },
  // status: 1 已支付, 2 已关闭, 3 已退款, 0 未支付
  {
    colKey: 'status',
    title: '订单状态',
    minWidth: 120,
    cell: (h, { row }) => {
      const statusOption = statusOptions.find((t) => t.value === row.status);
      const tag = h(
        Tag,
        {
          theme: statusOption.theme,
          variant: 'light',
        },
        () => statusOption?.label,
      );
      let html;
      if (row.status === 0) {
        html = h(
          Tag,
          {
            vPerms: "['adminapi/order/order/notify']",
            hover: 'color',
            size: 'small',
            theme: 'primary',
            style: 'margin-left: 10px; cursor: pointer;',
            onClick: () => {
              handleNotify(row);
            },
          },
          () => '补单',
        );
      } else {
        html = '';
      }
      return [tag, html];
    },
  },
  {
    colKey: 'cards_count',
    title: '取卡状态',
    cell: (h, { row }) => {
      return h(
        Tag,
        {
          theme: row.cards_count >= row.quantity ? 'success' : 'warning',
          variant: 'light',
        },
        () => {
          if (row.cards_count === 0) {
            return '未取卡';
          }
          if (row.cards_count >= row.quantity) {
            return '已取卡';
          }
          return '部分取卡';
        },
      );
    },
  },
  {
    colKey: 'is_freeze',
    title: '冻结',
    minWidth: 40,
    cell: (h, { row }): VNode | string => {
      let html: VNode | string = '';
      if (row.status === 1) {
        html = h(
          Link,
          {
            theme: row.is_freeze ? 'danger' : 'success',
            vPerms: "['adminapi/order/order/freeze']",
            hover: 'color',
            size: 'small',
            onClick: () => {
              hadleFreeze(row);
            },
          },
          () => (row.is_freeze ? '解冻' : '冻结'),
        );
      }
      return html;
    },
  },
  {
    colKey: 'create_ip',
    title: 'Ip',
  },
  {
    colKey: 'create_at',
    title: '下单时间',
    cell(h, props) {
      return h('span', formatTime(props.row.create_at));
    },
  },
  {
    colKey: 'operate',
    title: '操作',
    fixed: 'right',
    ellipsis: true,
    minWidth: 100,
  },
];

const handleAction = (row: TableRowData, action: Function, message: string) => {
  const confirmDialog = DialogPlugin.confirm({
    header: '提醒',
    body: message,
    confirmBtn: {
      content: '提交',
      theme: 'primary',
      loading: false,
    },
    closeOnOverlayClick: false,
    onConfirm: async () => {
      const res = await action({
        id: row.id,
      });
      if (res.code === 1) {
        MessagePlugin.success(res.msg);
        // 刷新单行列表数据
        row = Object.assign(row, res.data);
        confirmDialog.hide();
      } else {
        MessagePlugin.error(res.msg);
      }
    },
  });
};

const handleNotify = (row: TableRowData) => {
  handleAction(row, notify, '确认要设置这个订单已支付吗？该操作不可恢复');
};

const hadleFreeze = (row: TableRowData) => {
  let content;
  if (row.is_freeze === 1) {
    content = `确认要解冻吗？`;
  } else {
    content = `确认要冻结吗？此处用于存在投诉争议的订单，手工冻结。冻结后，该订单将不会被自动退款，也不会被自动结算。`;
  }
  handleAction(row, freeze, content);
};
