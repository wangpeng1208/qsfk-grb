import{u as h,r as m,_ as O}from"./index-CzBgriim.js";import{d as y,l as a}from"./index-Bbii3Das.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 2h16v5h3.5v11H19v4H5v-4H.5V7H4V2zm2 5h12V4H6v3zM2.5 9v7H5v-2h14v2h2.5V9h-19zM17 16H7v4h10v-4zm0-5.5h2v2h-2v-2z"}}]},b=y({name:"PrintIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=h(t),p=a(()=>["t-icon","t-icon-print",o.value]),c=a(()=>v(v({},s.value),r.style)),u=a(()=>({class:p.value,style:c.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(d,u.value)}});export{b as default};
