import{u as y,r as m,_ as O}from"./index-CzBgriim.js";import{d as b,l as a}from"./index-Bbii3Das.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7 2v3h9.17A3 3 0 0118 3.17V2h2v1.17a3 3 0 010 5.66V19H8.83A3 3 0 017 20.83V22H5v-1.17A3 3 0 013.17 19H2v-2h1.17A3 3 0 015 15.17V7H2V5h3V2h2zm0 5v8.17A3 3 0 018.83 17H18V8.83A3 3 0 0116.17 7H7zm12-2a1 1 0 100 2 1 1 0 000-2zM6 17a1 1 0 100 2 1 1 0 000-2z"}}]},w=b({name:"SubwayLineIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=y(t),p=a(()=>["t-icon","t-icon-subway-line",o.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(d,v.value)}});export{w as default};
