import{i as v,d as k,e as l,k as D,l as K,f as P,o as u,c as f,w as h,g as d,a as _,h as T,b as z,p as N,t as R,n as V,u as I,D as M,M as g,B as $}from"./index-DyfhlEKp.js";import{p as q}from"./global-DaymibWd.js";import{_ as A}from"./search.vue_vue_type_script_setup_true_lang-vD_k9eIM.js";import{T as E}from"./index-BljZbolB.js";import{C as F}from"./index-BtWSimco.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./search-BUcBwgzl.js";import"./index-0JxUx2HH.js";import"./index-DB8QFTGe.js";import"./useLengthLimit-DKh2E-5w.js";import"./log-ZJhmUOBa.js";import"./useReadonly-CXHqkGFp.js";import"./const-BpWshxEh.js";import"./useVModel-CsuQbcSh.js";import"./useResizeObserver-Cdm0ScvH.js";import"./dep-d524834c-s9Vwwbzr.js";import"./browse-DwSqVlrQ.js";import"./close-circle-filled-VWO7_lX7.js";import"./index-53D3hsao.js";import"./dep-86139c71-C0IAGQhw.js";import"./form-model-Ba97jzoW.js";import"./dep-4cc4ef27-CAGvppEF.js";import"./dep-40320ba3-B1Ayvxeb.js";import"./index-DDt2zCY2.js";import"./dep-96cefb8b-B7fBVahI.js";import"./index-BD2FLwpo.js";import"./index-Dz3F8iWe.js";import"./dep-02de0cb4-VTr6AM5L.js";import"./useDefaultValue-Ddzubvc6.js";import"./index-BqUjqorV.js";import"./common-CF_MvV9u.js";import"./index-DJdMn3qi.js";import"./index-wZPh1Y2_.js";import"./useCommonClassName-DmyQvkIn.js";import"./number-D5fGb371.js";import"./index-Bwp-2Qz8.js";import"./index-c2cc7QiC.js";import"./observe-CfjnoQGd.js";import"./slot-cq2gaFzZ.js";import"./chevron-left-DYfq66NB.js";import"./chevron-right-Cq7dXvRT.js";import"./index-SBfgDntf.js";import"./index-B_MhyprB.js";import"./dep-eedf0c29-C1TTFeWr.js";import"./useVirtualScrollNew-DRIC9GW6.js";import"./dep-af55fe23-B3wLF_kD.js";import"./index-Yvpn3d-W.js";import"./helper-CJ_b_F_u.js";import"./dep-1858b432-QdwZEHj5.js";function j(o){return v.post({url:"/adminapi/permission/log/list",params:o})}function G(o){return v.post({url:"/adminapi/permission/log/delBatch",params:o})}const H=[{colKey:"id",type:"multiple"},{colKey:"username",title:"用户名"},{colKey:"action",title:"访问链接",ellipsis:!0},{colKey:"params",title:"请求参数",ellipsis:!0},{colKey:"title",title:"标题",ellipsis:!0,cell(o,e){const i=e.row.content.split(", 结果：");return o("span",i[0])}},{colKey:"result",title:"结果",ellipsis:!0,cell(o,e){const i=e.row.content.split(", 结果：");return o("span",i[1])}},{colKey:"ip",title:"IP"},{colKey:"create_at",title:"日志时间",width:"160px"}],J={class:"category-header c-flex"},L={class:"category-header c-flex"},O={class:"l"},Q={key:0,class:"selected-count"},W=k({__name:"index",setup(o){const e=l([]),i=t=>{e.value=t},y=async()=>{const t=M({header:"提醒",body:"是否确认删除？",confirmBtn:"确认",onConfirm:()=>{t.hide();const s={ids:e.value};G(s).then(r=>{r.code===1?(n(),g.success(r.msg),e.value=[]):g.error(r.msg)})},onClose:()=>{t.hide()}})},a=l({defaultPageSize:20,total:0,defaultCurrent:1}),c=l([]),p=l(!1),m=l(),n=async(t={})=>{m.value={...t},p.value=!0;const{data:s}=await j({page:a.value.defaultCurrent,limit:a.value.defaultPageSize,...m.value});c.value=s.list,a.value.total=s.total,p.value=!1};n();const x=t=>{a.value.defaultCurrent=t.current,a.value.defaultPageSize=t.pageSize,n(m.value)},C=D(),b=K(()=>({offsetTop:C.isUseTabsRouter?48:0,container:`.${q}-layout`}));return(t,s)=>{const r=$,w=E,B=F,S=P("perms");return u(),f(B,{title:"后台操作日志",class:"basic-container",bordered:!1},{default:h(()=>[d("div",J,[_(A,{ref:"searchFormRef",onSuccess:n},null,512)]),d("div",L,[d("div",O,[T((u(),f(r,{theme:"default",disabled:!e.value.length,onClick:y},{default:h(()=>[z(" 批量删除 ")]),_:1},8,["disabled"])),[[S,["adminapi/permission/log/delBatch"]]]),e.value.length?(u(),N("p",Q,"已选"+R(e.value.length)+"项",1)):V("",!0)])]),_(w,{ref:"tableRef","row-key":"id",data:c.value,columns:I(H),hover:c.value.length>0,"header-affixed-top":b.value,pagination:a.value,"lazy-load":"","max-height":"100%","selected-row-keys":e.value,onPageChange:x,onSelectChange:i,loading:p.value},null,8,["data","columns","hover","header-affixed-top","pagination","selected-row-keys","loading"])]),_:1})}}}),Je=U(W,[["__scopeId","data-v-44583a82"]]);export{Je as default};