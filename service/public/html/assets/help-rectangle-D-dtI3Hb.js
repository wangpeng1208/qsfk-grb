import{u as m,r as O,_ as h}from"./index-ChiVvrNs.js";import{d as y,l as a}from"./index-Bl4AiOyE.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v20H2V2zm2 2v16h16V4H4zm8 3.25a2 2 0 00-1.89 1.33l-.33.95-1.89-.67.34-.94a4 4 0 116.24 4.47 7 7 0 00-1.1 1.01c-.27.34-.37.61-.37.85v1.25h-2v-1.25c0-.87.39-1.57.83-2.11.43-.53.97-.97 1.4-1.32A2 2 0 0012 7.25zm-1 9.25h2v2h-2v-2z"}}]},P=y({name:"HelpRectangleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:p}=m(t),s=a(()=>["t-icon","t-icon-help-rectangle",l.value]),v=a(()=>c(c({},p.value),r.style)),u=a(()=>({class:s.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(g,u.value)}});export{P as default};
