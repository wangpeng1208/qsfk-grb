import{u as m,r as h,_ as O}from"./index-ChiVvrNs.js";import{d as y,l as a}from"./index-Bl4AiOyE.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 2.5a1.5 1.5 0 00-1.38.9l-.26.6H4.5v16h15V4h-5.86l-.26-.6A1.5 1.5 0 0012 2.5zM9.13 2a3.5 3.5 0 015.74 0h6.63v20h-19V2h6.63zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"}}]},P=y({name:"AssignmentIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=m(r),p=a(()=>["t-icon","t-icon-assignment",o.value]),v=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>h(g,u.value)}});export{P as default};
