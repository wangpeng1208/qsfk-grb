import{u as m,r as h,_ as O}from"./index-ChiVvrNs.js";import{d,l as a}from"./index-Bl4AiOyE.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v2h-1v16h1v2H2v-2h1V4H2V2zm3 2v16h2V4H5zm4 0v7a4.98 4.98 0 016 0V4H9zm8 0v16h2V4h-2zm-2 16v-5a3 3 0 10-6 0v5h6z"}}]},P=d({name:"Dam5Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=m(t),v=a(()=>["t-icon","t-icon-dam-5",o.value]),p=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>h(y,u.value)}});export{P as default};
