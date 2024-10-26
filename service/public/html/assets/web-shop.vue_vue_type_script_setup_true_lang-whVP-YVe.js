import{u as b}from"./image-23uimPBY.js";import{g as h,e as x}from"./config-2QvuSfWv.js";import{d as y,r as V,e as v,j as C,o as R,p as k,a as o,w as l,b as U,M as d,B}from"./index-Dys89YLq.js";import{R as F}from"./index-Q2T2ZnL7.js";import{F as S,a as j}from"./index-BYoZ1jRX.js";import{T as z}from"./index-CQi5G9rp.js";import{S as I}from"./index-DwGXmo2C.js";const M={class:"basic-containers",bordered:!1},T={name:"WebAgreement"},q=y({...T,setup(E){const t=V({shop_buy_protocol:"",show_purchase_agreement:1,goods_default_img:"",site_wordfilter_status:"",site_wordfilter_danger:""}),_=(s,e)=>{t[s]=e};(async()=>{const{data:s}=await h({field:Object.keys(t)});for(const e in s)t[e]=s[e]})();const m={},n=v(),u=async()=>{const s=await n.value.validate();if(typeof s!="object"&&s){const e=await x({data:t});e.code===1?d.success("操作成功"):d.error(e.msg)}};return(s,e)=>{const i=F,r=S,p=C("wp-editor"),f=z,c=B,g=I,w=j;return R(),k("div",M,[o(w,{ref_key:"formRef",ref:n,"label-align":"left",data:t,rules:m,"label-width":150,style:{"max-width":"900px"}},{default:l(()=>[o(r,{label:"是否弹出协议",name:"show_purchase_agreement",help:"用于自动弹出售卡协议，下单时需要先同意协议才能购买"},{default:l(()=>[o(i,{modelValue:t.show_purchase_agreement,"onUpdate:modelValue":e[0]||(e[0]=a=>t.show_purchase_agreement=a),options:[{label:"开启",value:1},{label:"关闭",value:0}]},null,8,["modelValue"])]),_:1}),o(r,{label:"购买协议",name:"shop_buy_protocol",tips:""},{default:l(()=>[o(p,{"model-value":t.shop_buy_protocol,"onUpdate:modelValue":e[1]||(e[1]=a=>t.shop_buy_protocol=a),"user-type":"admin",height:"300px",width:"100%",mode:"simple"},null,8,["model-value"])]),_:1}),o(r,{label:"商品缺省图",name:"goods_default_img",tips:"推荐宽高比1：1"},{default:l(()=>[o(b,{url:t.goods_default_img,title:"商品缺省图",style:{maxWidth:"100px",width:"100px",height:"100px"},maxlength:1,onSetPic:e[2]||(e[2]=a=>_("goods_default_img",a)),opt:""},null,8,["url"])]),_:1}),o(r,{label:"状态开关",name:"site_wordfilter_status",tips:"违禁词功能是否开启;受影响位置 ：商品分类名、商品名、商品描述、商品详情"},{default:l(()=>[o(i,{modelValue:t.site_wordfilter_status,"onUpdate:modelValue":e[3]||(e[3]=a=>t.site_wordfilter_status=a),options:[{label:"启用",value:1},{label:"关闭",value:0}]},null,8,["modelValue"])]),_:1}),o(r,{label:"违禁词",name:"site_wordfilter_danger"},{default:l(()=>[o(f,{modelValue:t.site_wordfilter_danger,"onUpdate:modelValue":e[4]||(e[4]=a=>t.site_wordfilter_danger=a),clearable:"",placeholder:"请输入要禁用的违禁词",tips:"使用“|”分隔",autosize:{minRows:5,maxRows:10}},null,8,["modelValue"])]),_:1}),o(r,null,{default:l(()=>[o(g,{size:"small"},{default:l(()=>[o(c,{theme:"primary",onClick:u,size:"large"},{default:l(()=>[U("提交")]),_:1})]),_:1})]),_:1})]),_:1},8,["data"])])}}});export{q as _};