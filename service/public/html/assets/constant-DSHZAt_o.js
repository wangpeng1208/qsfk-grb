import{n as o,f as m}from"./order-BR4xGto7.js";import{f as d}from"./date-DY_Aq1Lj.js";import{T as s}from"./index-BcNem8rV.js";import{L as u}from"./index-C8u_RSpS.js";import{D as f,M as n}from"./index-Dys89YLq.js";const h=[{label:"未支付",value:0,theme:"warning"},{label:"已支付",value:1,theme:"success"},{label:"已关闭",value:2,theme:"danger"},{label:"已退款",value:3,theme:"warning"}],b=[{colKey:"id",type:"multiple",width:"50px"},{colKey:"trade_no",title:"订单号",width:"80px",ellipsis:!0},{colKey:"goods_name",title:"商品名",width:"80px",ellipsis:!0},{colKey:"contact",title:"联系方式",minWidth:100},{colKey:"quantity",title:"商品数量",minWidth:100},{colKey:"total_price",title:"订单金额"},{colKey:"channel",title:"支付渠道",cell:(t,{row:e})=>`${e.channel.title}`},{colKey:"status",title:"订单状态",minWidth:120,cell:(t,{row:e})=>{const l=h.find(c=>c.value===e.status),a=t(s,{theme:l.theme,variant:"light"},()=>l==null?void 0:l.label);let i;return e.status===0?i=t(s,{vPerms:"['admin/order/order/notify']",hover:"color",size:"small",theme:"primary",style:"margin-left: 10px; cursor: pointer;",onClick:()=>{y(e)}},()=>"补单"):i="",[a,i]}},{colKey:"cards_count",title:"取卡状态",cell:(t,{row:e})=>t(s,{theme:e.cards_count>=e.quantity?"success":"warning",variant:"light"},()=>e.cards_count===0?"未取卡":e.cards_count>=e.quantity?"已取卡":"部分取卡")},{colKey:"is_freeze",title:"冻结",minWidth:40,cell:(t,{row:e})=>{let l="";return e.status===1&&(l=t(u,{theme:e.is_freeze?"danger":"success",vPerms:"['admin/order/order/freeze']",hover:"color",size:"small",onClick:()=>{p(e)}},()=>e.is_freeze?"解冻":"冻结")),l}},{colKey:"create_ip",title:"Ip"},{colKey:"create_at",title:"下单时间",cell(t,e){return t("span",d(e.row.create_at))}},{colKey:"operate",title:"操作",fixed:"right",ellipsis:!0,minWidth:100}],r=(t,e,l)=>{const a=f.confirm({header:"提醒",body:l,confirmBtn:{content:"提交",theme:"primary",loading:!1},closeOnOverlayClick:!1,onConfirm:async()=>{const i=await e({id:t.id});i.code===1?(n.success(i.msg),t=Object.assign(t,i.data),a.hide()):n.error(i.msg)}})},y=t=>{r(t,o,"确认要设置这个订单已支付吗？该操作不可恢复")},p=t=>{let e;t.is_freeze===1?e="确认要解冻吗？":e="确认要冻结吗？此处用于存在投诉争议的订单，手工冻结。冻结后，该订单将不会被自动退款，也不会被自动结算。",r(t,m,e)};export{b as c,h as s};
