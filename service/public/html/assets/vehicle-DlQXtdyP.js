import{u as f,r as m,_ as O}from"./index-CzBgriim.js";import{d as y,l as a}from"./index-Bbii3Das.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M0 5c0-1.1.9-2 2-2h11a2 2 0 012 2v2h-2V5H2v7h6v2H2v4h6v2H5.41L3.5 21.91 2.09 20.5l.5-.5H2a2 2 0 01-2-2V5zm11.32 3h10.36L24 13.8v7.7h-2V20H11v1.5H9v-7.7L11.32 8zM11 18h11v-3.8l-.08-.2H11.08l-.08.2V18zm.88-6h9.24l-.8-2h-7.64l-.8 2zM3 15h2v2H3v-2zm9 0h2v2h-2v-2zm7 0h2v2h-2v-2z"}}]},z=y({name:"VehicleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=f(t),s=a(()=>["t-icon","t-icon-vehicle",l.value]),p=a(()=>v(v({},c.value),r.style)),h=a(()=>({class:s.value,style:p.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>m(d,h.value)}});export{z as default};
