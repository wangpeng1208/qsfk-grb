import{u as O,r as h,_ as m}from"./index-ChiVvrNs.js";import{d as y,l as a}from"./index-Bl4AiOyE.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_7418)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 .59L23.41 22 22 23.41l-1.91-1.91H2v-15h3.09L.59 2 2 .59zM7.09 8.5H4v11h14.09l-11-11zm.42-6h8.99v4H22v11.42l-2-2V8.5h-7.41l-2-2h3.91v-2h-5v1.62l-2-2.04V2.5z"}}]}]},b=y({name:"WorkOffIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=O(t),p=a(()=>["t-icon","t-icon-work-off",l.value]),f=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:f.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>h(d,v.value)}});export{b as default};
