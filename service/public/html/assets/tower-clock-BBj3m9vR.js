import{u as m,r as h,_ as O}from"./index-0JxUx2HH.js";import{d as y,l as o}from"./index-DyfhlEKp.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 .93l5.29 1.98-.7 1.88-.59-.22V5h3v12h-2v6H7v-6H5V5h3v-.43l-.59.22-.7-1.88L12 .93zm-2 2.89V5h4V3.82l-2-.75-2 .75zM9 17v4h6v-4h-2v3h-2v-3H9zm8-2V7H7v8h10zm-5-5a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0z"}}]},b=y({name:"TowerClockIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:s}=m(t),v=o(()=>["t-icon","t-icon-tower-clock",a.value]),p=o(()=>c(c({},s.value),r.style)),u=o(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>h(d,u.value)}});export{b as default};
