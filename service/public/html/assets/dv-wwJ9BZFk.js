import{u as m,r as O,_ as d}from"./index-Bqwwrko2.js";import{d as h,l as a}from"./index-Dys89YLq.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h10v6.68c.46.69.77 1.47.92 2.32H14V7h8v10h-8v-4h-1.08a5.97 5.97 0 01-.92 2.32V22H2v-6.68a5.98 5.98 0 010-6.64V2zm2 4.8a5.97 5.97 0 016 0V4H4v2.8zm0 10.4V20h6v-2.8a5.97 5.97 0 01-6 0zM7 8a4 4 0 100 7.98A4 4 0 007 8zm9 1v6h4V9h-4z"}}]},P=h({name:"DvIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=m(t),v=a(()=>["t-icon","t-icon-dv",o.value]),p=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(y,u.value)}});export{P as default};