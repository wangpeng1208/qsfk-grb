import{u as h,r as m,_ as O}from"./index-ChiVvrNs.js";import{d as y,l as a}from"./index-Bl4AiOyE.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h7v2H4v5H2V2zm13 0h7v7h-2V4h-5V2zm-3 6.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm2.67 3.77a3.5 3.5 0 10-5.33 0A5 5 0 007 16.5v1h2v-1a3 3 0 116 0v1h2v-1a5 5 0 00-2.33-4.23zM4 15v5h5v2H2v-7h2zm18 0v7h-7v-2h5v-5h2z"}}]},b=y({name:"PortraitIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=h(t),p=a(()=>["t-icon","t-icon-portrait",o.value]),c=a(()=>v(v({},s.value),r.style)),u=a(()=>({class:p.value,style:c.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(d,u.value)}});export{b as default};
