import{u as f,r as m,_ as O}from"./index-CzBgriim.js";import{d as y,l as a}from"./index-Bbii3Das.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7 3h3.5v2H9v1.5H7V3zm5.5 0h3v2h-3V3zm5 0H21v3.5h-2V5h-1.5V3zM5 7.5V19h11.5v2H3V7.5h2zm4 1v3H7v-3h2zm12 0v3h-2v-3h2zm-12 5V15h1.5v2H7v-3.5h2zm12 0V17h-3.5v-2H19v-1.5h2zM12.5 15h3v2h-3v-2z"}}]},g=y({name:"FlipToBackIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=f(t),p=a(()=>["t-icon","t-icon-flip-to-back",o.value]),s=a(()=>v(v({},c.value),r.style)),h=a(()=>({class:p.value,style:s.value,onClick:u=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:u})}}));return()=>m(d,h.value)}});export{g as default};
