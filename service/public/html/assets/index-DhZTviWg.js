import{t as N}from"./table-DGXWDcg-.js";import{c as T,_ as U,d as M,l as A}from"./edit.vue_vue_type_script_setup_true_lang-hlOm30EJ.js";import{l as I}from"./category-amOm9UuY.js";import{d as O,r as j,e as y,f as q,o as m,c as p,w as e,g as _,a as t,u as i,b as c,h as u,M as V,B as E}from"./index-Bl4AiOyE.js";import{S as G}from"./index-B8hTW5gB.js";import{F as H,a as J}from"./index-DZCrjQ_3.js";import{D as K}from"./index-PQ79vYQK.js";import{S as Q}from"./index-CmSpUa39.js";import{L as W}from"./index-DYrnlY5q.js";import{B as X}from"./index-tzykTWLw.js";import{C as Y}from"./index-DgoDdsYb.js";import"./global-DaymibWd.js";import"./date-Cal8LyP_.js";import"./index-C23pHn_u.js";import"./useVModel-HmF1Gebj.js";import"./common-CF_MvV9u.js";import"./index-CLnbRl90.js";import"./useLengthLimit-zZTqNE_r.js";import"./log-ZJhmUOBa.js";import"./useReadonly-DZtTxOfz.js";import"./const-BLdXWxIl.js";import"./useResizeObserver-BUPtuDKJ.js";import"./dep-d524834c-s9Vwwbzr.js";import"./browse-CCDZKZZU.js";import"./close-circle-filled-xz65pYuL.js";import"./index-CkUJmLKO.js";import"./helper-VFi8r3PY.js";import"./dep-86139c71-_Dj3X0D4.js";import"./dep-40320ba3-B1Ayvxeb.js";import"./dep-af55fe23-C5ZQDf4C.js";import"./dep-96cefb8b-D_Qrr7tD.js";import"./index-BKyk21AZ.js";import"./dep-02de0cb4-B9D_IUaB.js";import"./dep-4cc4ef27-Bxo4BcuK.js";import"./index-BuecJDAw.js";import"./observe-CfjnoQGd.js";import"./slot-BjrDC6aI.js";import"./index-BXun50hP.js";import"./index-BACtxuGn.js";import"./useDefaultValue-DgMKt5hR.js";import"./form-model-BN3AK5Zp.js";import"./index-BtiChZpX.js";import"./index-CCnSBKQl.js";import"./useCommonClassName-B8MbwXBA.js";import"./number-jGqlEXl8.js";import"./chevron-left-BBFgH3SA.js";import"./chevron-right-BZPeNPTA.js";import"./index-BjJKviJA.js";import"./dep-eedf0c29-Hg3zrHFZ.js";import"./useVirtualScrollNew-BJRfmUbB.js";import"./dep-1858b432-B1ibg8Ju.js";const Z={class:"category-header c-flex"},ee={class:"category-header c-flex"},te={class:"l"},tt=O({__name:"index",setup(ae){const l=j({date_range:[]}),{pagination:x,fetchData:n,dataLoading:w,headerAffixedTop:B,rehandlePageChange:S,lists:R}=N({fetchFun:A,params:l});n();const f=y(),g=(r=null)=>{f.value.init(r)},D=async r=>{const a=await M({id:r});a.code===1?(V.success("删除成功"),n()):V.error(a.msg)},b=y([]);return(async()=>{const r=await I();r.code===1&&(b.value=r.data)})(),(r,a)=>{const h=G,s=H,P=K,v=E,k=Q,F=J,C=W,$=X,z=Y,d=q("perms");return m(),p(z,{title:"文章管理",class:"basic-container",bordered:!1},{default:e(()=>[_("div",Z,[t(F,{layout:"inline","label-width":"auto"},{default:e(()=>[t(s,{label:"栏目分类",name:"cate_id"},{default:e(()=>[t(h,{modelValue:l.cate_id,"onUpdate:modelValue":a[0]||(a[0]=o=>l.cate_id=o),clearable:"",placeholder:"请选择栏目分类",options:b.value},null,8,["modelValue","options"])]),_:1}),t(s,{label:"状态",name:"status"},{default:e(()=>[t(h,{modelValue:l.status,"onUpdate:modelValue":a[1]||(a[1]=o=>l.status=o),clearable:"",placeholder:"请选择状态",options:[{label:"全部",value:""},{label:"启用",value:"1"},{label:"禁用",value:"0"}]},null,8,["modelValue"])]),_:1}),t(s,{label:"添加时间",name:"date_range"},{default:e(()=>[t(P,{"enable-time-picker":"",modelValue:l.date_range,"onUpdate:modelValue":a[2]||(a[2]=o=>l.date_range=o),"allow-input":"",clearable:"","cancel-range-select-limit":""},null,8,["modelValue"])]),_:1}),t(s,null,{default:e(()=>[t(k,null,{default:e(()=>[t(v,{theme:"default",variant:"outline",onClick:i(n)},{default:e(()=>[c("查询")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_("div",ee,[_("div",te,[u((m(),p(v,{theme:"primary",onClick:a[3]||(a[3]=o=>g())},{default:e(()=>[c("添加")]),_:1})),[[d,["adminapi/article/article/add"]]])])]),t($,{class:"basic-table",ref:"tableRef","row-key":"id",data:i(R),columns:i(T),"header-affixed-top":i(B),"max-height":"auto","table-layout":"auto",pagination:i(x),"lazy-load":"",loading:i(w),onPageChange:i(S)},{operate:e(({row:o})=>[t(k,null,{default:e(()=>[u((m(),p(C,{theme:"primary",size:"small",onClick:L=>g(o)},{default:e(()=>[c("编辑")]),_:2},1032,["onClick"])),[[d,["adminapi/article/article/edit"]]]),u((m(),p(C,{theme:"danger",size:"small",onClick:L=>D(o.id)},{default:e(()=>[c("删除")]),_:2},1032,["onClick"])),[[d,["adminapi/article/article/del"]]])]),_:2},1024)]),_:1},8,["data","columns","header-affixed-top","pagination","loading","onPageChange"]),t(U,{ref_key:"editRef",ref:f,onSuccess:i(n)},null,8,["onSuccess"])]),_:1})}}});export{tt as default};