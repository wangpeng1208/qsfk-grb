import{i as x,d as b,e as n,r as C,l as u,k as S,o as w,c as K,w as p,g as d,t as k,a as m,h as B,ag as D,u as P,V as T}from"./index-Bbii3Das.js";import{p as z}from"./global-DaymibWd.js";import F from"./OrderChannel-Bf0NvWwQ.js";import R from"./row-search-DGmdrMs5.js";import{B as V}from"./index-B7Cyio1B.js";import{C as j}from"./index-tMpZz9fP.js";import"./workbench-BmBtl6DM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./collection-CJNyyyLo.js";import"./pay_type-8C9HGVZO.js";import"./index-DBJlBd1d.js";import"./useLengthLimit-Drp21OsL.js";import"./log-ZJhmUOBa.js";import"./dep-02de0cb4-DlXaPlFV.js";import"./dep-4cc4ef27-CCky-4wQ.js";import"./dep-96cefb8b-EGQiC2Rs.js";import"./index-m1SedByb.js";import"./useVModel-mAS2bV03.js";import"./observe-CfjnoQGd.js";import"./common-CF_MvV9u.js";import"./useReadonly-P1VyeMVt.js";import"./dep-d524834c-s9Vwwbzr.js";import"./slot-Wx8ivmZH.js";import"./index-D7A4xZ_W.js";import"./index-CpVXpLih.js";import"./useResizeObserver-C76GXHCj.js";import"./index-CGpzlmyY.js";import"./const-DCUPODAK.js";import"./browse-Cwmf87g2.js";import"./close-circle-filled-DvQn5h9G.js";import"./useDefaultValue-BDK8TpyG.js";import"./index-CpsbnJvy.js";import"./index-DXOBqNco.js";import"./dep-86139c71-Cql-Ebvf.js";import"./form-model-9h0QNqcJ.js";import"./dep-40320ba3-B1Ayvxeb.js";import"./index-DKw_WWXq.js";import"./index-BL0Sakdl.js";import"./index-CknG8Rj8.js";import"./useCommonClassName-L0zFrjWC.js";import"./number-D-1MGlkC.js";import"./chevron-left-C_o2bTlZ.js";import"./chevron-right-7vJVdvaT.js";import"./index-DyMK9WKq.js";import"./index-DV6htPKJ.js";import"./dep-eedf0c29-xQnwgY39.js";import"./useVirtualScrollNew-JCNs8cdS.js";import"./dep-af55fe23-U_tvYUrP.js";import"./index-BdGTSLMf.js";import"./helper-DuXnSC7u.js";import"./dep-1858b432-DjAV0It-.js";function f(c){return x.post({url:"/adminapi/order/analysis/channel",params:c})}const N=[{colKey:"channel_id",title:"渠道ID"},{colKey:"title",title:"渠道名称"},{colKey:"count",title:"提交订单"},{colKey:"paid",title:"已付订单"},{colKey:"unpaid",title:"未付订单"},{colKey:"sum_money",title:"提交金额"}],O={class:"category-header c-flex"},Nt=b({__name:"index",setup(c){const t=n({defaultPageSize:20,total:0,defaultCurrent:1}),s=n([]),r=C({}),i=n(!0),h=u(()=>i.value?"收起搜索":"展开搜索"),l=async(a={})=>{if(Object.assign(r,a),r.action==="export"){const e={...r},o=await f(e);T(o.data.url)}else{const e={page:t.value.defaultCurrent,limit:t.value.defaultPageSize,...r},{data:o}=await f(e);s.value=o.list,t.value={...t.value,total:o.total}}};l();const v=a=>{t.value.defaultCurrent=a.current,t.value.defaultPageSize=a.pageSize,l()},g=S(),_=u(()=>({offsetTop:g.isUseTabsRouter?48:0,container:`.${z}-layout`}));return(a,e)=>{const o=V,y=j;return w(),K(y,{title:"支付渠道分析",class:"basic-container",bordered:!1},{actions:p(()=>[d("a",{href:"javascript:void(0)",onClick:e[0]||(e[0]=$=>i.value=!i.value)},k(h.value),1)]),default:p(()=>[m(F,{style:{"margin-bottom":"20px"}}),d("div",O,[B(m(R,{ref:"searchFormRef",onSuccess:l},null,512),[[D,i.value]])]),m(o,{class:"basic-table",data:s.value,columns:P(N),"row-key":"id","vertical-align":"middle",hover:s.value.length>0,pagination:t.value,"header-affixed-top":_.value,"table-layout":"auto","max-height":"100%",onPageChange:v},{empty:p(()=>[]),_:1},8,["data","columns","hover","pagination","header-affixed-top"])]),_:1})}}});export{Nt as default};
