import{u as m,r as O,_ as h}from"./index-0JxUx2HH.js";import{d as y,l as o}from"./index-DyfhlEKp.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3.5 2.5h17v2h-17v-2zm-.82 3h18.64l1.18 5.9v2.1H21v8h-2v-8h-5v8H3v-8H1.5v-2.1l1.18-5.9zm2.32 8v6h7v-6H5zm15.48-2l-.8-4H4.32l-.8 4h16.96z"}}]},P=y({name:"StoreIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:v}=m(t),c=o(()=>["t-icon","t-icon-store",a.value]),p=o(()=>s(s({},v.value),r.style)),u=o(()=>({class:c.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(d,u.value)}});export{P as default};
