import{p}from"./global-DaymibWd.js";import{k as v,e as s,l as g,x as m}from"./index-CpJFga7x.js";const h=v();function x(l){const{fetchFun:r,params:i={}}=l,t=s(!1),n=s(),a=s({defaultPageSize:20,total:0,defaultCurrent:1}),o=async()=>{t.value=!0;const e={page:a.value.defaultCurrent,limit:a.value.defaultPageSize,...i},{data:u}=await r(e);n.value=u.list,a.value={...a.value,total:u.total},t.value=!1},c=g(()=>({offsetTop:h.isUseTabsRouter?48:0,container:`.${p}-layout`})),f=e=>{a.value.defaultCurrent=e.current,a.value.defaultPageSize=e.pageSize,o()},d=m(async()=>{a.value.defaultCurrent=1,await o()});return{pagination:a,fetchData:o,dataLoading:t,headerAffixedTop:c,rehandlePageChange:f,lists:n,searchData:d}}export{x as t};
