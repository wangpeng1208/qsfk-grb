import{u,r as m,_ as O}from"./index-B4p2E3Fl.js";import{d as y,l as a}from"./index-CpJFga7x.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h6v2h8V2h6v6h-2v8h2v6h-6v-2H8v2H2v-6h2V8H2V2zm4 6v8h2v2h8v-2h2V8h-2V6H8v2H6zm0-4H4v2h2V4zm14 2V4h-2v2h2zm-2 12v2h2v-2h-2zM6 20v-2H4v2h2z"}}]},P=y({name:"Transform1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=u(t),c=a(()=>["t-icon","t-icon-transform-1",o.value]),p=a(()=>i(i({},s.value),r.style)),h=a(()=>({class:c.value,style:p.value,onClick:f=>{var v;return(v=e.onClick)===null||v===void 0?void 0:v.call(e,{e:f})}}));return()=>m(d,h.value)}});export{P as default};
