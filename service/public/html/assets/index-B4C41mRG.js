import{b as K,c as P}from"./role-D3Xq-rp3.js";import{p as T}from"./global-DaymibWd.js";import{d as N,e as l,k as V,l as L,j as M,f as j,o as r,c as s,w as o,g as C,h as p,b as c,a as d,u as A,n as I,M as U,B as q}from"./index-Dys89YLq.js";import{_ as E}from"./edit.vue_vue_type_script_setup_true_lang-B32YrtbH.js";import{_ as F}from"./rule.vue_vue_type_script_setup_true_lang-BfrQXVod.js";import{L as G}from"./index-C8u_RSpS.js";import{S as H}from"./index-DwGXmo2C.js";import{B as J}from"./index-DbnGGVSd.js";import{C as O}from"./index-D8Ix0oeU.js";import"./index-DCyPEPAa.js";import"./dep-86139c71-BioGcMu7.js";import"./dep-40320ba3-B1Ayvxeb.js";import"./index-fX6DPIvv.js";import"./useVModel-ChUVkX5D.js";import"./useDefaultValue-pk1y0m3m.js";import"./dep-af55fe23-hzblXEZ8.js";import"./dep-96cefb8b-CiB99TH1.js";import"./index-BTVA41u8.js";import"./observe-CfjnoQGd.js";import"./common-CF_MvV9u.js";import"./useReadonly-GuO_-cT8.js";import"./dep-d524834c-s9Vwwbzr.js";import"./slot-DKAjzcwC.js";import"./tree-store-ClV-hxBZ.js";import"./dep-eedf0c29-ErImML_u.js";import"./dep-6f8c2110-CYZdOZC2.js";import"./log-ZJhmUOBa.js";import"./useVirtualScrollNew-B7BxRQci.js";import"./useResizeObserver-D_uTF440.js";import"./dep-02de0cb4-_xWusXWA.js";import"./dep-4cc4ef27--AW_KZeX.js";import"./index-BA1slVbh.js";import"./index-CjM8dnKg.js";import"./index-k_yBcVp0.js";import"./close-circle-filled-6NKz9kYY.js";import"./index-BcNem8rV.js";import"./index-BYoZ1jRX.js";import"./form-model-CIY_RhMw.js";import"./index-9wlLuihG.js";import"./index-BK4MGBjS.js";import"./index-BT8Ia4HF.js";import"./index-Dka09D2p.js";import"./index-xCa1PnD5.js";import"./useCommonClassName-BZA0SnO7.js";import"./number-B3LVzGws.js";import"./index-Ci-WgI1t.js";import"./chevron-left-Ca8qIpvl.js";import"./chevron-right-Bz__VYX8.js";import"./index-Q2T2ZnL7.js";import"./helper-DDcUnKCP.js";import"./dep-1858b432-DPK9DfHI.js";const Q=[{colKey:"id",title:"ID"},{colKey:"name",title:"名称"},{colKey:"created_at",title:"创建时间"},{colKey:"updated_at",title:"修改时间"},{colKey:"operate",title:"操作"}],W={class:"category-header c-flex"},X={class:"l"},We=N({__name:"index",setup(Y){const i=l({defaultPageSize:20,total:0,defaultCurrent:1}),u=l([]),_=l(),n=async(e={})=>{_.value=e;const{data:t}=await K({page:i.value.defaultCurrent,limit:i.value.defaultPageSize,...e});u.value=t.list,i.value.total=t.total};n();const k=e=>{i.value.defaultCurrent=e.current,i.value.defaultPageSize=e.pageSize,n(_)},b=V(),x=L(()=>({offsetTop:b.isUseTabsRouter?48:0,container:`.${T}-layout`})),v=l(),h=(e=0)=>{var t;(t=v.value)==null||t.init(e)},g=l(),S=(e=0)=>{var t;(t=g.value)==null||t.init(e,!0)},w=async e=>{(await P({id:e})).code===1&&(U.success("删除成功"),n())};return(e,t)=>{const R=q,B=M("wp-image"),f=G,$=H,z=J,D=O,m=j("perms");return r(),s(D,{title:"管理员角色管理",class:"basic-container",bordered:!1},{default:o(()=>[C("div",W,[C("div",X,[p((r(),s(R,{theme:"primary",onClick:t[0]||(t[0]=a=>h())},{default:o(()=>[c("添加")]),_:1})),[[m,["adminapi/permission/role/add"]]])])]),d(z,{class:"basic-table",ref:"tableRef","row-key":"id",data:u.value,columns:A(Q),hover:u.value.length>0,"header-affixed-top":x.value,pagination:i.value,"lazy-load":"","table-layout":"auto","max-height":"100%",onPageChange:k},{avatar:o(({row:a})=>[d(B,{src:a.avatar,style:{width:"60px",height:"60px"}},null,8,["src"])]),operate:o(({row:a})=>[a.id!=1?(r(),s($,{key:0},{default:o(()=>[p((r(),s(f,{theme:"primary",hover:"color",onClick:y=>h(a.id)},{default:o(()=>[c("编辑")]),_:2},1032,["onClick"])),[[m,["adminapi/permission/role/edit"]]]),p((r(),s(f,{theme:"primary",hover:"color",onClick:y=>S(a.id)},{default:o(()=>[c("分配权限")]),_:2},1032,["onClick"])),[[m,["adminapi/permission/role/rule"]]]),p((r(),s(f,{theme:"danger",hover:"color",onClick:y=>w(a.id)},{default:o(()=>[c("删除")]),_:2},1032,["onClick"])),[[m,["adminapi/permission/role/del"]]])]),_:2},1024)):I("",!0)]),_:1},8,["data","columns","hover","header-affixed-top","pagination"]),d(E,{ref_key:"editRef",ref:v,onSuccess:n},null,512),d(F,{ref_key:"ruleRef",ref:g,onSuccess:n},null,512)]),_:1})}}});export{We as default};