import{g as R,e as I}from"./config-hc94wOqU.js";import{d as N,r as h,e as B,o as m,c as u,w as r,a as o,n as s,b as d,g as i,M as y,B as D}from"./index-Bl4AiOyE.js";import{R as F}from"./index-CkUJmLKO.js";import{F as O,a as T}from"./index-DZCrjQ_3.js";import{I as M}from"./index-CLnbRl90.js";import{T as P}from"./index-Cs4OI0Zk.js";import{D as S}from"./index-LkEl_aIh.js";import{I as j}from"./index-CCnSBKQl.js";import{S as z}from"./index-CmSpUa39.js";import{C as E}from"./index-DgoDdsYb.js";import"./helper-VFi8r3PY.js";import"./useVModel-HmF1Gebj.js";import"./dep-d524834c-s9Vwwbzr.js";import"./dep-86139c71-_Dj3X0D4.js";import"./dep-40320ba3-B1Ayvxeb.js";import"./dep-af55fe23-C5ZQDf4C.js";import"./dep-96cefb8b-D_Qrr7tD.js";import"./common-CF_MvV9u.js";import"./useLengthLimit-zZTqNE_r.js";import"./log-ZJhmUOBa.js";import"./useResizeObserver-BUPtuDKJ.js";import"./form-model-BN3AK5Zp.js";import"./dep-4cc4ef27-Bxo4BcuK.js";import"./const-BLdXWxIl.js";import"./close-circle-filled-xz65pYuL.js";import"./useReadonly-DZtTxOfz.js";import"./browse-CCDZKZZU.js";import"./useCommonClassName-B8MbwXBA.js";import"./number-jGqlEXl8.js";import"./slot-BjrDC6aI.js";const G=i("br",null,null,-1),L=i("br",null,null,-1),A=i("br",null,null,-1),H=i("br",null,null,-1),J=i("br",null,null,-1),qe=N({__name:"index",setup(K){const V=[{label:"前缀+时间+随机字符",value:0},{label:"用户ID+时间+随机字符",value:1}],x=[{label:"商品名称",value:0},{label:"订单编号",value:1},{label:"前缀+订单编号",value:2},{label:"自定义",value:3}],e=h({order_trade_no_type:"",order_trade_no_profix:"",order_title_type:"",order_title_profix:"",order_title_str:"",order_auto_close_time:"",order_query_blackcontact:"",order_query_limitday:3,order_create_limit_time_by_ip:10});(async()=>{const{data:_}=await R({field:Object.keys(e)});for(const t in _)e[t]=_[t]})();const g={order_auto_close_time:[{required:!0,message:"请输入订单超时时间"}]},c=B(),k=async()=>{const _=await c.value.validate();if(typeof _!="object"&&_){const t=await I({data:e});t.code===1?y.success("操作成功"):y.error(t.msg)}};return(_,t)=>{const f=F,a=O,n=M,v=P,p=S,b=j,C=D,U=z,q=T,w=E;return m(),u(w,{title:"订单配置",class:"basic-container",bordered:!1},{default:r(()=>[o(q,{ref_key:"formRef",ref:c,"label-align":"left",data:e,rules:g,"label-width":150,style:{width:"800px"}},{default:r(()=>[o(a,{label:"订单生成方式",name:"order_trade_no_type",tips:" "},{default:r(()=>[o(f,{modelValue:e.order_trade_no_type,"onUpdate:modelValue":t[0]||(t[0]=l=>e.order_trade_no_type=l),options:V},null,8,["modelValue"])]),_:1}),e.order_trade_no_type=="0"?(m(),u(a,{key:0,label:"订单号前缀",name:"order_trade_no_profix",help:""},{default:r(()=>[o(n,{modelValue:e.order_trade_no_profix,"onUpdate:modelValue":t[1]||(t[1]=l=>e.order_trade_no_profix=l),clearable:"",placeholder:"请输入订单号前缀"},null,8,["modelValue"])]),_:1})):s("",!0),o(a,{label:"订单标题",name:"order_title_type",help:""},{default:r(()=>[o(f,{modelValue:e.order_title_type,"onUpdate:modelValue":t[2]||(t[2]=l=>e.order_title_type=l),options:x},null,8,["modelValue"])]),_:1}),e.order_title_type=="2"?(m(),u(a,{key:1,label:"标题前缀",name:"order_title_profix"},{default:r(()=>[o(n,{modelValue:e.order_title_profix,"onUpdate:modelValue":t[3]||(t[3]=l=>e.order_title_profix=l),clearable:"",placeholder:""},null,8,["modelValue"])]),_:1})):s("",!0),e.order_title_type=="3"?(m(),u(a,{key:2,label:"自定义标题",name:"order_title_str"},{default:r(()=>[o(n,{modelValue:e.order_title_str,"onUpdate:modelValue":t[4]||(t[4]=l=>e.order_title_str=l),clearable:"",placeholder:""},null,8,["modelValue"])]),_:1})):s("",!0),o(a,{label:"订单超时时间",name:"order_auto_close_time",tips:"订单未付款的倒计时时间，可以使用小数点，比如0.5代表半分钟；倒计时结束，订单自动关闭"},{default:r(()=>[o(n,{modelValue:e.order_auto_close_time,"onUpdate:modelValue":t[5]||(t[5]=l=>e.order_auto_close_time=l),clearable:"",placeholder:"请输入订单超时时间",suffix:"分钟"},null,8,["modelValue"])]),_:1}),o(a,{label:"禁用简单联系方式",name:"order_query_blackcontact"},{default:r(()=>[o(v,{modelValue:e.order_query_blackcontact,"onUpdate:modelValue":t[6]||(t[6]=l=>e.order_query_blackcontact=l),clearable:"",placeholder:"请输入要禁用的简单联系方式",tips:"防止出现简单联系方式，使用“|”分隔",autosize:{minRows:4,maxRows:10}},null,8,["modelValue"])]),_:1}),o(p),o(a,{label:"下单频率限制",name:"order_create_limit_time_by_ip",tips:"n秒内只允许同一IP下单一次，防止爆单"},{default:r(()=>[o(b,{modelValue:e.order_create_limit_time_by_ip,"onUpdate:modelValue":t[7]||(t[7]=l=>e.order_create_limit_time_by_ip=l),theme:"normal",min:0,clearable:"",placeholder:"请输入秒数",suffix:"秒"},null,8,["modelValue"])]),_:1}),o(p),o(a,{label:"查询订单限制天数",name:"order_query_limitday",tips:"PC查单通过联系方式查询时，允许查看最近多少天的订单。留空则表示30天"},{default:r(()=>[o(b,{modelValue:e.order_query_limitday,"onUpdate:modelValue":t[8]||(t[8]=l=>e.order_query_limitday=l),theme:"normal",min:0,clearable:"",placeholder:"请输入数字",suffix:"天"},null,8,["modelValue"])]),_:1}),o(a,null,{default:r(()=>[o(U,{size:"small"},{default:r(()=>[o(C,{theme:"primary",onClick:k},{default:r(()=>[d("提交")]),_:1})]),_:1})]),_:1}),o(p),d(' "商家优惠设置有误，总价格不能小于等于0，请联系商家！" 说明计算后该订单的总价小于等于0，一般发生在优惠券面额超售。'),G,d(' "商家优惠设置有误，低于成本价，请联系商家！" 说明商品设置的成本价高于售价。'),L,d(' "支付接口不存在！", 一般发生在后台支付接口关闭或删除后，前台商铺页没有刷新页面。'),A,d(' "当前支付接口没有可用的账号！", 是指后台支付接口或自定义接口中没有状态正常的收款账号。'),H,d(' "请勿频繁下单！" ,是指命中了本页中 下单频率限制 的配置 '),J]),_:1},8,["data"])]),_:1})}}});export{qe as default};
