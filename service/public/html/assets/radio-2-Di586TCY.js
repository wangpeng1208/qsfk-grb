import{u as m,r as d,_ as O}from"./index-0JxUx2HH.js";import{d as y,l as a}from"./index-DyfhlEKp.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 3h22v16h-4v3h-2v-3H7v3H5v-3H1V3zm2 2v12h18V5H3zm12 4a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0zM5 8h4v2H5V8zm0 4h4v2H5v-2z"}}]},P=y({name:"Radio2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=m(t),v=a(()=>["t-icon","t-icon-radio-2",o.value]),p=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>d(h,u.value)}});export{P as default};
