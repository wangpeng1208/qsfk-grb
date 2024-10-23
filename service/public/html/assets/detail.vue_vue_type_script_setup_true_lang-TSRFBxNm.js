import{f as E}from"./date-dYGoxvTx.js";import{s as U}from"./constant-otAKJtZf.js";import{aa as W,N as P,O as F,d as D,an as $,C as X,E as G,a as t,F as b,Q as L,a1 as Y,e as B,ao as ee,_ as A,L as te,W as ae,ad as Z,a9 as re,l as R,r as ne,o as h,c as j,w as l,g as M,b as s,t as u,p as w,q as le,u as V}from"./index-CpJFga7x.js";import{i as q}from"./dep-40320ba3-B1Ayvxeb.js";import{u as oe}from"./slot-DL8tHB3s.js";import{T as se}from"./index-BRf9TXQS.js";import{D as ue}from"./index-BMPPlr2f.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var ie={bordered:Boolean,colon:Boolean,column:{type:Number,default:2},contentStyle:{type:Object},itemLayout:{type:String,default:"horizontal",validator:function(r){return r?["horizontal","vertical"].includes(r):!0}},items:{type:Array},labelStyle:{type:Object},layout:{type:String,default:"horizontal",validator:function(r){return r?["horizontal","vertical"].includes(r):!0}},size:{type:String,default:"medium",validator:function(r){return r?["small","medium","large"].includes(r):!0}},tableLayout:{type:String,default:"fixed",validator:function(r){return r?["fixed","auto"].includes(r):!0}},title:{type:[String,Function]}};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var K=Symbol("TDescriptions");/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var x=function(n){return n.props="props",n.slots="slots",n}(x||{});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function H(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return W(n)?n:P(n)?n(F,r):P(n==null?void 0:n.render)?n.render(F,r):n}function J(n,r,c){var g,S=(g=n.props)===null||g===void 0?void 0:g[r];if(S)return S;var _=n.children,v=(_==null?void 0:_[r])||(_==null?void 0:_[c]);return v?v==null?void 0:v():null}function O(n,r){return n===x.props}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var ce=D({name:"TDescriptionsRow",props:{row:Array,itemType:String},setup:function(r){var c=$(K),g=X("descriptions"),S=G("descriptions"),_=S.globalConfig,v=function(e){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"horizontal",C=["".concat(g.value,"__label")],f=null,o=null;O(r.itemType)?(f=e.label,o=e.span):(f=J(e,"label"),o=e.props.span);var T=y==="horizontal"?1:o;return t("td",L({colspan:T,class:C},{style:c.labelStyle}),[f,c.colon&&_.value.colonText])},p=function(e){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"horizontal",C=["".concat(g.value,"__content")],f=null,o=null;O(r.itemType)?(f=e.content,o=e.span):(f=J(e,"content","default"),o=e.props.span);var T=o>1&&y==="horizontal"?o*2-1:o;return t("td",L({colspan:T,class:C},{style:c.contentStyle}),[f])},a=function(){return t("tr",null,[r.row.map(function(e){return t(b,null,[v(e),p(e)])})])},z=function(){return t(b,null,[t("tr",null,[r.row.map(function(e){return v(e,"vertical")})]),t("tr",null,[r.row.map(function(e){return p(e,"vertical")})])])},k=function(){return t(b,null,[r.row.map(function(e){return t("tr",null,[v(e),p(e)])})])},m=function(){return t(b,null,[r.row.map(function(e){return t(b,null,[t("tr",null,[v(e)]),t("tr",null,[p(e)])])})])};return function(){return t(b,null,[c.layout==="horizontal"?c.itemLayout==="horizontal"?a():z():c.itemLayout==="horizontal"?k():m()])}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var pe=D({name:"TDescriptions",props:ie,setup:function(r){var c=X("descriptions"),g=Y(),S=g.SIZE,_=oe(),v=te(),p=B(x.props),a=function(){var i=r.column,e=r.layout,y=[];if(ae(r.items))y=r.items.map(function(d){return{label:H(d.label),content:H(d.content),span:d.span||1}}),p.value=x.props;else{var C=_("TDescriptionsItem");C.length!==0&&(y=C,p.value=x.slots)}if(e==="vertical")return[y];var f=[],o=i,T=[];return y.forEach(function(d,Q){var N=1;if(O(p.value))N=q(d.span)?N:d.span;else{var I;d.props=d.props||{},N=q((I=d.props)===null||I===void 0?void 0:I.span)?N:d.props.span,d.props.span=N}o>=N?(f.push(d),o-=N):(T.push(f),f=[d],o=i-N),Q===y.length-1&&(O(p.value)?d.span+=o:d.props.span+=o,T.push(f))}),T};ee(K,r);var z=function(){var i=["".concat(c.value,"__body"),S.value[r.size],A({},"".concat(c.value,"__body--fixed"),r.tableLayout==="fixed"),A({},"".concat(c.value,"__body--border"),r.bordered)];return t("table",{class:i},[t("tbody",null,[a().map(function(e){return t(ce,{"item-type":p.value,row:e},null)})])])},k=function(){var i=v("title");return i?t("div",{class:"".concat(c.value,"__header")},[i]):""};return function(){return t("div",{class:c.value},[k(),z()])}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var de={content:{type:[String,Function]},default:{type:[String,Function]},label:{type:[String,Function]},span:{type:Number,default:1}};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var fe=D({name:"TDescriptionsItem",props:de});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var ve=Z(pe),_e=Z(fe);const me={style:{padding:"20px 0","max-width":"800px",margin:"0 auto"}},ye={key:0},be={key:1},ge=["href"],he={name:"RowDetail"},xe=D({...he,props:{payTypeOptions:{type:Array,default:()=>[]}},setup(n,{expose:r}){const c=n,{payTypeOptions:g}=re(c),S=R(()=>{var m;return(m=g.value.find(i=>i.value===a.paytype))==null?void 0:m.label}),_=R(()=>U.filter(m=>m.value===a.status)),v=B("订单详情"),p=B(!1),a=ne({}),z=m=>{p.value=!0,Object.assign(a,m)},k=()=>{p.value=!1};return r({init:z}),(m,i)=>{const e=_e,y=se,C=ve,f=ue;return h(),j(f,{visible:p.value,"onUpdate:visible":i[0]||(i[0]=o=>p.value=o),"close-on-overlay-click":!0,"destroy-on-close":!0,"size-draggable":!0,size:"80%",header:v.value,"on-confirm":k},{default:l(()=>[M("div",me,[t(C,{title:`${a.trade_no}的订单详情`,"table-layout":"auto",bordered:""},{default:l(()=>[t(e,{label:"订单号"},{default:l(()=>[s(u(a==null?void 0:a.trade_no),1)]),_:1}),t(e,{label:"交易流水号"},{default:l(()=>[s(u(a==null?void 0:a.transaction_id),1)]),_:1}),t(e,{label:"商品ID"},{default:l(()=>[s(u(a.goods_id),1)]),_:1}),t(e,{label:"商品名称"},{default:l(()=>[s(u(a.goods_name),1)]),_:1}),t(e,{label:"卡密数量"},{default:l(()=>[s(u(a.quantity),1)]),_:1}),t(e,{label:"商品单价"},{default:l(()=>[s(u(a.goods_price),1)]),_:1}),t(e,{label:"商品成本价"},{default:l(()=>[s(u(a.goods_cost_price),1)]),_:1}),t(e,{label:"总价"},{default:l(()=>[s(u(a.total_price),1)]),_:1}),t(e,{label:"总成本价"},{default:l(()=>[s(u(a.total_cost_price),1)]),_:1}),t(e,{label:"优惠券"},{default:l(()=>[a.coupon_type?(h(),w("span",ye,"优惠"+u(a.coupon_price)+"元",1)):(h(),w("span",be,"未使用"))]),_:1}),t(e,{label:"取卡 密码"},{default:l(()=>[s(u(a.take_card_type===2?a.take_card_password:"未设置"),1)]),_:1}),t(e,{label:"联系方式"},{default:l(()=>[s(u(a.contact),1)]),_:1}),t(e,{label:"邮件通知"},{default:l(()=>[s(u(a.email_notify===1?a.email:"未设置"),1)]),_:1}),t(e,{label:"短信通知"},{default:l(()=>[s(u(a.sms_notify===1?a.contact:"未设置"),1)]),_:1}),t(e,{label:"支付类型"},{default:l(()=>[s(u(S.value),1)]),_:1}),t(e,{label:"交易通道"},{default:l(()=>{var o;return[s(u((o=a==null?void 0:a.channel)==null?void 0:o.title),1)]}),_:1}),t(e,{label:"状态"},{default:l(()=>[(h(!0),w(b,null,le(_.value,o=>(h(),j(y,{key:o.value,theme:o.theme},{default:l(()=>[s(u(o.label),1)]),_:2},1032,["theme"]))),128))]),_:1}),t(e,{label:"取卡状态"},{default:l(()=>[a.cards_count>0?(h(),w(b,{key:0},[a.cards_count>=a.quantity?(h(),w(b,{key:0},[s(" 已取 ")],64)):(h(),w(b,{key:1},[s(" 已取部分 ")],64))],64)):(h(),w(b,{key:1},[s(" 未取 ")],64))]),_:1}),t(e,{label:"提交时间"},{default:l(()=>[s(u(V(E)(a.create_at)),1)]),_:1}),t(e,{label:"完成时间"},{default:l(()=>[s(u(a.success_at>0?V(E)(a.success_at):""),1)]),_:1}),t(e,{label:"提交IP"},{default:l(()=>[s(u(a.create_ip),1)]),_:1}),t(e,{label:"查询卡密"},{default:l(()=>[M("a",{href:"/order?orderId="+a.trade_no,target:"_blank"},"查看",8,ge)]),_:1})]),_:1},8,["title"])])]),_:1},8,["visible","header"])}}});export{xe as _};
