import{p as Q}from"./pay_type-qjQt-0GT.js";import{a as W,l as X,d as Y,b as Z}from"./order-C6z0vfgf.js";import{d as ee,m as te,e as l,r as oe,l as P,k as ae,f as se,o as _,c as k,w as o,g as d,t as x,n as R,a,b as i,p as ie,u as D,y as re,h as ne,M as c,V as le,am as ce,D as me,B as pe}from"./index-CpJFga7x.js";import{p as de}from"./global-DaymibWd.js";import{c as ue}from"./constant-otAKJtZf.js";import{_ as fe}from"./detail.vue_vue_type_script_setup_true_lang-TSRFBxNm.js";import _e from"./search-DdjxAOCr.js";import{a as ve,R as he}from"./index-D7oq8DY2.js";import{T as ge}from"./index-byKPUDsR.js";import{L as ye}from"./index-aNeCThFX.js";import{P as Ce}from"./index-BJ0mh8x2.js";import{S as ke}from"./index-fiMfjcvP.js";import{T as xe}from"./index-DJO90WwP.js";import{C as be}from"./index-DJSz0Bsf.js";import{_ as Se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./date-dYGoxvTx.js";import"./index-BRf9TXQS.js";import"./useVModel-CzdLJ13E.js";import"./common-CF_MvV9u.js";import"./dep-40320ba3-B1Ayvxeb.js";import"./slot-DL8tHB3s.js";import"./index-BMPPlr2f.js";import"./collection-DaboJX6l.js";import"./search-DXIN59Oa.js";import"./index-B4p2E3Fl.js";import"./index--0mKpQel.js";import"./useLengthLimit-OjWIxDWr.js";import"./log-ZJhmUOBa.js";import"./useReadonly-Bx8TEnun.js";import"./const-BD0RkfTU.js";import"./useResizeObserver-ONY0TviC.js";import"./dep-d524834c-s9Vwwbzr.js";import"./browse-CF75H87A.js";import"./close-circle-filled-1kZBSjap.js";import"./index-jBP3p80B.js";import"./dep-86139c71-Dc2HrHYK.js";import"./form-model-ChnUeRwN.js";import"./dep-4cc4ef27-DQG4x64P.js";import"./index-DePaE_yS.js";import"./dep-02de0cb4-9NqRuOAE.js";import"./dep-96cefb8b-hs2i3_dz.js";import"./index-Dk9r_Pa_.js";import"./observe-CfjnoQGd.js";import"./index-DnrQMYJZ.js";import"./index-BcRf9bEE.js";import"./useDefaultValue-BJZ6w0Fl.js";import"./index-DN3cI5Ry.js";import"./index-BqrdyjaG.js";import"./index-Dhx8Vlw0.js";import"./useCommonClassName-DGbYtLoH.js";import"./number--X5gY8kS.js";import"./chevron-left-BX4tOZyG.js";import"./chevron-right-DSRNsGLo.js";import"./helper-DkMMPY9i.js";import"./dep-af55fe23-3nGiADk5.js";import"./dep-eedf0c29-v-LgRmZs.js";import"./useVirtualScrollNew-XoyDLD8W.js";import"./dep-1858b432-D8vbiQ_j.js";const Te={class:"category-header c-flex"},we={class:"category-header c-flex"},Pe={class:"l"},Re={class:"r c-flex"},De={key:0,class:"selected-count"},ze=["onClick"],Be=ee({__name:"index",setup(Ve){const z=te(),n=l({defaultPageSize:10,total:0,defaultCurrent:1}),v=l([]),h=l(!1),u=oe({}),f=l(!1),B=P(()=>f.value?"收起搜索":"展开搜索"),b=l(""),V=e=>{u.date_type=e,S()},$=async()=>{const e=await W();e.code===1?(c.success(e.msg),p()):c.error(e.msg)},S=async(e={})=>{Object.assign(u,e),n.value.defaultPageSize=20,delete u.action,p()},p=async()=>{const e={page:n.value.defaultCurrent,limit:n.value.defaultPageSize,...u};h.value=!0;const t=await X(e);u.action==="dump"?t.code===1?(c.success(t.msg),le(t.data.url)):c.error(t.msg):(v.value=t.data.list,n.value={...n.value,total:t.data.total}),h.value=!1};p();const O=e=>{n.value.defaultCurrent=e.current,n.value.defaultPageSize=e.pageSize,p()},T=l(),F=e=>{var t;(t=T.value)==null||t.init(e)},N=async e=>{const t=await Y({id:e.id});t.code===1?(c.success(t.msg),p()):c.error(t.msg)},g=l();(async()=>{const{data:e}=await Q();e.forEach((t,s)=>{e[s].ico=ce+t.ico}),g.value=e})();const U=ae(),j=P(()=>({offsetTop:U.isUseTabsRouter?48:0,container:`.${de}-layout`})),m=l([]),E=e=>{m.value=e},L=async()=>{const e=me({header:"提醒",body:"是否确认删除所选订单？",confirmBtn:"确认",onConfirm:()=>{e.hide();const t={ids:m.value};Z(t).then(s=>{s.code===1?(p(),c.success(s.msg),m.value=[]):c.error(s.msg)})},onClose:()=>{e.hide()}})},M=e=>{z.push({name:"adminOrderCard",query:{id:e}})};return(e,t)=>{const s=ve,q=he,w=pe,A=ge,y=ye,G=Ce,I=ke,K=xe,H=be,J=se("perms");return _(),k(H,{title:"订单列表",bordered:!1},{actions:o(()=>[d("a",{href:"javascript:void(0)",onClick:t[0]||(t[0]=r=>f.value=!f.value)},x(B.value),1)]),default:o(()=>[d("div",Te,[f.value?(_(),k(_e,{key:0,ref:"searchFormRef","pay-type-options":g.value,onSuccess:S},null,8,["pay-type-options"])):R("",!0)]),d("div",we,[d("div",Pe,[a(q,{modelValue:b.value,"onUpdate:modelValue":t[1]||(t[1]=r=>b.value=r),"default-value":"1",onChange:V},{default:o(()=>[a(s,{value:""},{default:o(()=>[i("全部")]),_:1}),a(s,{value:"1"},{default:o(()=>[i("今日")]),_:1}),a(s,{value:"2"},{default:o(()=>[i("昨日")]),_:1}),a(s,{value:"3"},{default:o(()=>[i("本周")]),_:1}),a(s,{value:"4"},{default:o(()=>[i("本月")]),_:1}),a(s,{value:"5"},{default:o(()=>[i("本年")]),_:1})]),_:1},8,["modelValue"])]),d("div",Re,[a(w,{onClick:$,variant:"outline"},{default:o(()=>[i("清空已关闭")]),_:1}),a(w,{theme:"danger",disabled:!m.value.length,onClick:L},{default:o(()=>[i("选择删除"),m.value.length?(_(),ie("p",De,"("+x(m.value.length)+")",1)):R("",!0)]),_:1},8,["disabled"])])]),a(K,{size:"small",data:v.value,columns:D(ue),"row-key":"id","vertical-align":"middle",hover:v.value.length>0,"table-layout":"auto",pagination:n.value,"header-affixed-top":j.value,"max-height":"100%",onPageChange:O,"selected-row-keys":m.value,onSelectChange:E,"lazy-load":"",loading:h.value},{trade_no:o(({row:r})=>[a(A,{placement:"right",content:"点击复制",theme:"light"},{default:o(()=>[d("div",{theme:"primary",variant:"outline",onClick:C=>D(re)(r.trade_no)},x(r.trade_no),9,ze)]),_:2},1024)]),operate:o(({row:r})=>[a(I,null,{default:o(()=>[a(y,{theme:"primary",onClick:C=>F(r),size:"small"},{default:o(()=>[i("详情")]),_:2},1032,["onClick"]),a(y,{hover:"color",size:"small",variant:"outline",theme:"primary",onClick:C=>M(r.id)},{default:o(()=>[i("查看卡密")]),_:2},1032,["onClick"]),a(G,{content:"确认删除吗",onConfirm:C=>N(r)},{default:o(()=>[ne((_(),k(y,{theme:"danger",hover:"color",size:"small"},{default:o(()=>[i(" 删除 ")]),_:1})),[[J,["adminapi/order/order/del"]]])]),_:2},1032,["onConfirm"])]),_:2},1024)]),empty:o(()=>[]),_:1},8,["data","columns","hover","pagination","header-affixed-top","selected-row-keys","loading"]),a(fe,{ref_key:"detailRef",ref:T,"pay-type-options":g.value},null,8,["pay-type-options"])]),_:1})}}}),jt=Se(Be,[["__scopeId","data-v-55dbd88d"]]);export{jt as default};