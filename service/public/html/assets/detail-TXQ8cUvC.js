import{D as h}from"./index-AQEtrbEO.js";import{d as b,e as l,o as a,c as k,w as x,g as e,b as _,t as d,p as r,z as w,A as y}from"./index-CpJFga7x.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const i=o=>(w("data-v-4d41bd8e"),o=o(),y(),o),D={class:"info-block"},g={class:"info-item"},B=i(()=>e("h1",null,"卡号：",-1)),I={class:"info-item"},S=i(()=>e("h1",null,"卡密：",-1)),N={class:"info-item"},V=i(()=>e("h1",null,"卡密前缀：",-1)),z={key:0},A={key:1},E={name:"CardDetail"},T=b({...E,setup(o,{expose:p}){const s=l({number:"",secret:"",is_pre:0}),t=l(!1),u=n=>{t.value=!0,s.value={...n}},v=()=>{t.value=!1};return p({init:u}),(n,c)=>{const f=h;return a(),k(f,{visible:t.value,"onUpdate:visible":c[0]||(c[0]=m=>t.value=m),width:"600","close-on-overlay-click":!1,header:"查看卡密","on-confirm":v},{body:x(()=>[e("div",D,[e("div",g,[B,_(" "+d(s.value.number),1)]),e("div",I,[S,_(" "+d(s.value.secret),1)]),e("div",N,[V,s.value.is_pre===1?(a(),r("p",z,"显示")):(a(),r("p",A,"不显示"))])])]),_:1},8,["visible"])}}}),F=C(T,[["__scopeId","data-v-4d41bd8e"]]);export{F as default};
