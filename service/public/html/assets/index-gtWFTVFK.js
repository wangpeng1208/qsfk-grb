import{a as P,d as R}from"./category-CWa6rpq2.js";import{p as $}from"./global-DaymibWd.js";import{d as D,e as l,k as N,l as V,f as L,o,c as i,w as e,g as C,h as d,b as s,a as u,u as M,M as A,B as U}from"./index-CpJFga7x.js";import{c as j,_ as q}from"./edit.vue_vue_type_script_setup_true_lang-DIYfULu7.js";import{T as E}from"./index-BRf9TXQS.js";import{L as F}from"./index-aNeCThFX.js";import{S as G}from"./index-fiMfjcvP.js";import{B as H}from"./index-DJO90WwP.js";import{C as I}from"./index-DJSz0Bsf.js";import"./date-dYGoxvTx.js";import"./index--0mKpQel.js";import"./useLengthLimit-OjWIxDWr.js";import"./log-ZJhmUOBa.js";import"./useReadonly-Bx8TEnun.js";import"./const-BD0RkfTU.js";import"./useVModel-CzdLJ13E.js";import"./useResizeObserver-ONY0TviC.js";import"./dep-d524834c-s9Vwwbzr.js";import"./browse-CF75H87A.js";import"./close-circle-filled-1kZBSjap.js";import"./index-jBP3p80B.js";import"./dep-86139c71-Dc2HrHYK.js";import"./form-model-ChnUeRwN.js";import"./dep-4cc4ef27-DQG4x64P.js";import"./dep-40320ba3-B1Ayvxeb.js";import"./index-D7oq8DY2.js";import"./helper-DkMMPY9i.js";import"./dep-af55fe23-3nGiADk5.js";import"./dep-96cefb8b-hs2i3_dz.js";import"./common-CF_MvV9u.js";import"./index-AQEtrbEO.js";import"./slot-DL8tHB3s.js";import"./dep-02de0cb4-9NqRuOAE.js";import"./index-byKPUDsR.js";import"./index-BcRf9bEE.js";import"./dep-eedf0c29-v-LgRmZs.js";import"./index-Dk9r_Pa_.js";import"./observe-CfjnoQGd.js";import"./index-BqrdyjaG.js";import"./index-Dhx8Vlw0.js";import"./useCommonClassName-DGbYtLoH.js";import"./number--X5gY8kS.js";import"./index-DePaE_yS.js";import"./index-DnrQMYJZ.js";import"./useDefaultValue-BJZ6w0Fl.js";import"./chevron-left-BX4tOZyG.js";import"./chevron-right-DSRNsGLo.js";import"./useVirtualScrollNew-XoyDLD8W.js";import"./dep-1858b432-D8vbiQ_j.js";const J={class:"category-header c-flex"},K={class:"l"},Ht=D({__name:"index",setup(O){const a=l({defaultPageSize:20,total:0,defaultCurrent:1}),m=l([]),f=l(!0),n=async()=>{const{data:t}=await P({page:a.value.defaultCurrent,limit:a.value.defaultPageSize});m.value=t.list,f.value=!1,a.value={defaultPageSize:t.limit,total:t.total,defaultCurrent:t.page}};n();const y=t=>{a.value.defaultCurrent=t.current,a.value.defaultPageSize=t.pageSize,n()},k=N(),b=V(()=>({offsetTop:k.isUseTabsRouter?48:0,container:`.${$}-layout`})),_=l(),g=(t=null)=>{_.value.init(t)},x=async t=>{(await R({id:t})).code===1&&(A.success("删除成功"),n())};return(t,p)=>{const S=U,v=E,h=F,z=G,w=H,B=I,c=L("perms");return o(),i(B,{title:"文章分类管理",class:"basic-container",bordered:!1},{default:e(()=>[C("div",J,[C("div",K,[d((o(),i(S,{theme:"primary",onClick:p[0]||(p[0]=r=>g())},{default:e(()=>[s("添加")]),_:1})),[[c,["adminapi/article/articleCategory/add"]]])])]),u(w,{class:"basic-table",ref:"tableRef","row-key":"id",data:m.value,columns:M(j),hover:m.value.length>0,"header-affixed-top":b.value,"max-height":"auto","table-layout":"auto",pagination:a.value,"lazy-load":"",loading:f.value,onPageChange:y},{status:e(({row:r})=>[r.status===1?(o(),i(v,{key:0,variant:"light",theme:"success"},{default:e(()=>[s("启用")]),_:1})):(o(),i(v,{key:1,variant:"light",theme:"danger"},{default:e(()=>[s("禁用")]),_:1}))]),operate:e(({row:r})=>[u(z,null,{default:e(()=>[d((o(),i(h,{theme:"primary",size:"small",onClick:T=>g(r)},{default:e(()=>[s("编辑")]),_:2},1032,["onClick"])),[[c,["adminapi/article/articleCategory/edit"]]]),d((o(),i(h,{theme:"danger",size:"small",onClick:T=>x(r.id)},{default:e(()=>[s("删除")]),_:2},1032,["onClick"])),[[c,["adminapi/article/articleCategory/del"]]])]),_:2},1024)]),_:1},8,["data","columns","hover","header-affixed-top","pagination","loading"]),u(q,{ref_key:"editRef",ref:_,onSuccess:n},null,512)]),_:1})}}});export{Ht as default};