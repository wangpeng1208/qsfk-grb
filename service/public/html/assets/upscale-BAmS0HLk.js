import{u as h,r as m,_ as O}from"./index-ChiVvrNs.js";import{d as y,l as a}from"./index-Bl4AiOyE.js";function v(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?v(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M15.06 2l6.9.03.05 6.91-2 .02-.02-3.53-5.03 5.03-1.42-1.42 5.03-5.03L15.04 4l.02-2zM2 2h10v2H4v6H2V2zm0 10h4v2H4v2H2v-4zm6 0h4v4h-2v-2H8v-2zm14 0v10h-8v-2h6v-8h2zM4 18v2h2v2H2v-4h2zm8 0v4H8v-2h2v-2h2z"}}]},z=y({name:"UpscaleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=h(t),c=a(()=>["t-icon","t-icon-upscale",l.value]),p=a(()=>i(i({},s.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(d,u.value)}});export{z as default};
