import{d as M,m as A,k as E,e as _,U as K,v as O,l as j,o as s,c as f,w as a,g as h,a as l,u as C,n as i,b as d,p,t as r,y as q,D as F,M as V,B as H}from"./index-Bbii3Das.js";import{c as J,l as Q,g as W,b as X}from"./constant-CX6nb1Oy.js";import Y from"./index-DnBeYN_c.js";import{p as Z}from"./global-DaymibWd.js";import{l as w}from"./category-BxaE_eVk.js";import{s as ee}from"./good-DjB5F8nK.js";import{S as te}from"./index-DBJlBd1d.js";import{C as oe}from"./index-DKd2XSVr.js";import{S as ae}from"./index-DyMK9WKq.js";import{I as ne}from"./index-LB7-EXu2.js";import{T as se}from"./index-CpsbnJvy.js";import{T as ie}from"./index-B7Cyio1B.js";import{C as le}from"./index-tMpZz9fP.js";import{_ as pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./date-CLNFQDy_.js";import"./useLengthLimit-Drp21OsL.js";import"./log-ZJhmUOBa.js";import"./dep-02de0cb4-DlXaPlFV.js";import"./dep-4cc4ef27-CCky-4wQ.js";import"./dep-96cefb8b-EGQiC2Rs.js";import"./index-m1SedByb.js";import"./useVModel-mAS2bV03.js";import"./observe-CfjnoQGd.js";import"./common-CF_MvV9u.js";import"./useReadonly-P1VyeMVt.js";import"./dep-d524834c-s9Vwwbzr.js";import"./slot-Wx8ivmZH.js";import"./index-D7A4xZ_W.js";import"./index-CpVXpLih.js";import"./useResizeObserver-C76GXHCj.js";import"./index-CGpzlmyY.js";import"./const-DCUPODAK.js";import"./browse-Cwmf87g2.js";import"./close-circle-filled-DvQn5h9G.js";import"./useDefaultValue-BDK8TpyG.js";import"./chevron-right-7vJVdvaT.js";import"./tree-store-BiQ5vlTd.js";import"./dep-eedf0c29-xQnwgY39.js";import"./dep-86139c71-Cql-Ebvf.js";import"./dep-6f8c2110-CYZdOZC2.js";import"./dep-40320ba3-B1Ayvxeb.js";import"./index-DV6htPKJ.js";import"./index-BL0Sakdl.js";import"./index-CknG8Rj8.js";import"./useCommonClassName-L0zFrjWC.js";import"./number-D-1MGlkC.js";import"./chevron-left-C_o2bTlZ.js";import"./useVirtualScrollNew-JCNs8cdS.js";import"./dep-af55fe23-U_tvYUrP.js";import"./index-BdGTSLMf.js";import"./helper-DuXnSC7u.js";import"./dep-1858b432-DjAV0It-.js";import"./form-model-9h0QNqcJ.js";const re={class:"category-header c-flex"},ce={class:"l"},ue={class:"mb15"},de={key:0,class:"selected-count"},me=["onClick"],_e={key:0},fe={key:1},ye={key:2},ve={key:0},ge={key:1},he={key:0},Ce={key:1},ke={name:"GoodsCoponIndex"},be=M({...ke,setup(xe){const D=A(),B=E(),k=_([]),c=_({defaultPageSize:20,total:0,defaultCurrent:1}),b=_(!1),y=async()=>{const t={...n.value,page:c.value.defaultCurrent,limit:c.value.defaultPageSize};b.value=!0;try{const{data:o}=await W(t);k.value=o.list,c.value={...c.value,total:o.total}}catch(o){console.log(o)}finally{b.value=!1}},n=_({coupon_type:"",name:"",cate_id:0,goods_id:null});K(()=>n.value.coupon_type,t=>{t!=1&&(n.value.cate_id=0),t===1&&(n.value.cate_id=0,n.value.goods_id=null),t===2&&(T(t),n.value.cate_id="",n.value.goods_id=null),t===3&&(T(t),n.value.cate_id=0)});const P=()=>{y()},g=_([]),T=async t=>{if(t===2){const{data:o}=await w();g.value=o.list}if(t===3){const{data:o}=await ee();g.value=o}};O(()=>{y()});const u=_([]),I=t=>{u.value=t},U=(t,o)=>{c.value.defaultCurrent=t.current,c.value.defaultPageSize=t.pageSize,y()},z=j(()=>({offsetTop:B.isUseTabsRouter?48:0,container:`.${Z}-layout`})),G=async()=>{const t=F({header:"是否确认删除？",body:"未使用的优惠券会被删除至回收站，已使用或者已过期的优惠券会被直接删除！",confirmBtn:"确认",onConfirm:({e:o})=>{t.hide();const v={ids:u.value};X(v).then(m=>{m.code===1?(V.success(m.msg),y(),u.value=[]):V.error(`删除失败：${m.msg}`)}).catch(m=>{V.error("删除失败")})},onClose:({e:o,trigger:v})=>{t.hide()}})};return(t,o)=>{const v=te,m=oe,x=H,L=ae,N=ne,S=se,R=ie,$=le;return s(),f($,{title:"优惠券列表",class:"basic-container",bordered:!1},{default:a(()=>[h("div",re,[h("div",ce,[l(L,null,{default:a(()=>[l(v,{modelValue:n.value.coupon_type,"onUpdate:modelValue":o[0]||(o[0]=e=>n.value.coupon_type=e),clear:y,empty:"类型",placeholder:"全部类型",type:"search",clearable:"",options:C(J)},null,8,["modelValue","options"]),n.value.coupon_type===2?(s(),f(v,{key:0,modelValue:n.value.cate_id,"onUpdate:modelValue":o[1]||(o[1]=e=>n.value.cate_id=e),placeholder:"请选择商品分类",type:"search",clearable:"",options:g.value},null,8,["modelValue","options"])):i("",!0),n.value.coupon_type===3?(s(),f(m,{key:1,modelValue:n.value.goods_id,"onUpdate:modelValue":o[2]||(o[2]=e=>n.value.goods_id=e),placeholder:"请选择商品",type:"search",clearable:"",options:g.value,trigger:"hover"},null,8,["modelValue","options"])):i("",!0),l(x,{theme:"default",variant:"outline",onClick:P},{default:a(()=>[d("查询")]),_:1})]),_:1})])]),l(R,{data:k.value,columns:C(Q),"row-key":"id","vertical-align":"top",hover:!!k.value.length,pagination:c.value,"selected-row-keys":u.value,loading:b.value,"header-affixed-top":z.value,"max-height":"auto","table-layout":"auto",onPageChange:U,onSelectChange:I},{topContent:a(()=>[h("div",ue,[l(x,{onClick:o[3]||(o[3]=e=>C(D).push({name:"adminGoodsCouponAdd"}))},{icon:a(()=>[l(N,{name:"add"})]),default:a(()=>[d(" 添加优惠券 ")]),_:1}),l(x,{variant:"base",theme:"default",disabled:!u.value.length,onClick:G},{default:a(()=>[d(" 批量删除 ")]),_:1},8,["disabled"]),u.value.length?(s(),p("p",de,"已选"+r(u.value.length)+"项",1)):i("",!0)])]),code:a(({row:e})=>[h("span",{title:"点击复制",onClick:Se=>C(q)(e.code)},r(e.code),9,me)]),coupon_type:a(({row:e})=>[e.coupon_type===1?(s(),f(S,{key:0,variant:"outline",theme:"danger"},{default:a(()=>[d("通用劵")]),_:1})):i("",!0),e.coupon_type===2?(s(),f(S,{key:1,variant:"outline",theme:"success"},{default:a(()=>[d("品类劵")]),_:1})):i("",!0),e.coupon_type===3?(s(),f(S,{key:2,variant:"outline",theme:"primary"},{default:a(()=>[d("商品劵")]),_:1})):i("",!0)]),coupon_name:a(({row:e})=>[e.coupon_type===1?(s(),p("span",_e,"店铺通用")):i("",!0),e.coupon_type===2?(s(),p("span",fe,"[分类]"+r(e.coupon_name),1)):i("",!0),e.coupon_type===3?(s(),p("span",ye,"[商品]"+r(e.coupon_name),1)):i("",!0)]),amount:a(({row:e})=>[e.type===1?(s(),p("span",ve,r(e.amount),1)):i("",!0),e.type===100?(s(),p("span",ge,r(e.amount)+"%",1)):i("",!0)]),min_banlance:a(({row:e})=>[e.min_banlance?(s(),p("span",he,r(e.min_banlance),1)):(s(),p("span",Ce,"-"))]),expire_day:a(({row:e})=>[d(r(e.expire_day),1)]),empty:a(()=>[l(Y,{title:"",tip:"优惠券为空",type:"list"})]),_:1},8,["data","columns","hover","pagination","selected-row-keys","loading","header-affixed-top"])]),_:1})}}}),St=pe(be,[["__scopeId","data-v-bd751af5"]]);export{St as default};
