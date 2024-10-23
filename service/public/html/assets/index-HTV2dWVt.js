import{l as R,d as $}from"./pay_type-qjQt-0GT.js";import{p as D}from"./global-DaymibWd.js";import{d as I,e as d,k as L,l as N,j as V,f as M,o as n,c as p,w as e,b as s,a as o,g as v,h as f,u as j,M as A,B as U}from"./index-CpJFga7x.js";import{_ as q}from"./edit.vue_vue_type_script_setup_true_lang-BeMaIjl5.js";import{I as E}from"./index-DUYa5w0Y.js";import{T as F}from"./index-byKPUDsR.js";import{L as G}from"./index-aNeCThFX.js";import{P as H}from"./index-BJ0mh8x2.js";import{S as J}from"./index-fiMfjcvP.js";import{B as O}from"./index-DJO90WwP.js";import{C as Q}from"./index-DJSz0Bsf.js";import"./index.vue_vue_type_script_setup_true_lang-A7mutgrC.js";import"./config-DwzKgDR_.js";import"./index-BUM5b839.js";import"./index-9LK7MnuS.js";import"./observe-CfjnoQGd.js";import"./log-ZJhmUOBa.js";import"./close-circle-filled-1kZBSjap.js";import"./useCommonClassName-DGbYtLoH.js";import"./index-BSdzoAtq.js";import"./useDefaultValue-BJZ6w0Fl.js";import"./useVModel-CzdLJ13E.js";import"./dep-86139c71-Dc2HrHYK.js";import"./number--X5gY8kS.js";import"./dep-d524834c-s9Vwwbzr.js";import"./index-AQEtrbEO.js";import"./chevron-left-BX4tOZyG.js";import"./browse-CF75H87A.js";import"./delete-CwqryDI4.js";import"./dep-1858b432-D8vbiQ_j.js";import"./index--0mKpQel.js";import"./useLengthLimit-OjWIxDWr.js";import"./useReadonly-Bx8TEnun.js";import"./const-BD0RkfTU.js";import"./useResizeObserver-ONY0TviC.js";import"./index-jBP3p80B.js";import"./form-model-ChnUeRwN.js";import"./dep-4cc4ef27-DQG4x64P.js";import"./dep-40320ba3-B1Ayvxeb.js";import"./index-BcRf9bEE.js";import"./dep-96cefb8b-hs2i3_dz.js";import"./slot-DL8tHB3s.js";import"./dep-02de0cb4-9NqRuOAE.js";import"./dep-eedf0c29-v-LgRmZs.js";import"./index-Dk9r_Pa_.js";import"./common-CF_MvV9u.js";import"./index-BqrdyjaG.js";import"./index-Dhx8Vlw0.js";import"./index-DePaE_yS.js";import"./index-DnrQMYJZ.js";import"./index-BRf9TXQS.js";import"./chevron-right-DSRNsGLo.js";import"./useVirtualScrollNew-XoyDLD8W.js";import"./dep-af55fe23-3nGiADk5.js";import"./index-D7oq8DY2.js";import"./helper-DkMMPY9i.js";const W=[{colKey:"id",title:"ID"},{colKey:"name",title:"名称"},{colKey:"logo",title:"Logo"},{colKey:"ico",title:"图标"},{colKey:"operate",title:"操作",fixed:"right"}],X={class:"category-header c-flex"},Y={class:"l"},oe=I({__name:"index",setup(Z){const i=d({defaultPageSize:20,total:0,defaultCurrent:1}),l=d([]),r=async()=>{const{data:t}=await R({page:i.value.defaultCurrent,limit:i.value.defaultPageSize});l.value=t.list,i.value={defaultPageSize:t.limit,total:t.total,defaultCurrent:t.page}};r();const y=t=>{i.value.defaultCurrent=t.current,i.value.defaultPageSize=t.pageSize,r()},x=L(),C=N(()=>({offsetTop:x.isUseTabsRouter?48:0,container:`.${D}-layout`})),u=d(),_=t=>{u.value.init(t)},b=async t=>{(await $({id:t})).code===1&&(A.success("删除成功"),r())};return(t,m)=>{const w=E,k=F,S=U,h=V("wp-image"),g=G,T=H,z=J,P=O,B=Q,c=M("perms");return n(),p(B,{class:"basic-container",bordered:!1},{title:e(()=>[s(" 支付方式分类 "),o(k,{content:"用于显示选择支付方式；此处和支付授权渠道有关联；为系统预设性，非必要请勿删除",placement:"right"},{default:e(()=>[o(w,{name:"help-circle",style:{color:"var(--td-text-color-placeholder)"}})]),_:1})]),default:e(()=>[v("div",X,[v("div",Y,[f((n(),p(S,{theme:"primary",onClick:m[0]||(m[0]=a=>_(0))},{default:e(()=>[s("添加")]),_:1})),[[c,["adminapi/channel/payType/add"]]])])]),o(P,{class:"basic-table","row-key":"id",data:l.value,columns:j(W),hover:l.value.length>0,"header-affixed-top":C.value,pagination:i.value,"max-height":"auto","table-layout":"auto","lazy-load":"",onPageChange:y},{logo:e(({row:a})=>[o(h,{src:a.logo,style:{width:"80px",height:"30px"}},null,8,["src"])]),ico:e(({row:a})=>[o(h,{src:a.ico,shape:"circle",style:{width:"30px",height:"30px"}},null,8,["src"])]),operate:e(({row:a})=>[o(z,null,{default:e(()=>[f((n(),p(g,{theme:"primary",size:"small",onClick:K=>_(a.id)},{default:e(()=>[s("编辑")]),_:2},1032,["onClick"])),[[c,["adminapi/channel/payType/edit"]]]),o(T,{content:"确认删除吗",onConfirm:K=>b(a.id)},{default:e(()=>[f((n(),p(g,{theme:"danger",hover:"color",size:"small"},{default:e(()=>[s(" 删除 ")]),_:1})),[[c,["adminapi/channel/payType/del"]]])]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:1},8,["data","columns","hover","header-affixed-top","pagination"]),o(q,{ref_key:"editRef",ref:u,onSuccess:r},null,512)]),_:1})}}});export{oe as default};