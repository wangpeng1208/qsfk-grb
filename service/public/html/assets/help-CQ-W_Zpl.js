import{u as O,r as m,_ as y}from"./index-ChiVvrNs.js";import{d,l as a}from"./index-Bl4AiOyE.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 21h-2v-2h2v2zm-2-3.55v-2.38c0-1.15.51-2.1 1.13-2.87.62-.76 1.4-1.4 2.06-1.92a3.54 3.54 0 00-2.2-6.33c-1.54 0-2.85.99-3.34 2.37l-.33.94-1.89-.67.34-.94a5.55 5.55 0 118.65 6.2c-.65.52-1.27 1.04-1.74 1.61a2.58 2.58 0 00-.68 1.61v2.38h-2z"}}]},P=d({name:"HelpIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:p}=O(t),s=a(()=>["t-icon","t-icon-help",l.value]),v=a(()=>c(c({},p.value),r.style)),u=a(()=>({class:s.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(h,u.value)}});export{P as default};