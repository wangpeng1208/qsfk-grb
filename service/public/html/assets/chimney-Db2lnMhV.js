import{u as m,r as y,_ as h}from"./index-0JxUx2HH.js";import{d as O,l}from"./index-DyfhlEKp.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1.72 2h11.56l-1.27 5.08.36 4.12L15 9.88l7 3.5V22H1.93L2.99 7.09 1.72 2zm3.21 6l-.86 12H8v-6.62l2.44-1.22L10.08 8H4.93zm5.29-2l.5-2H4.28l.5 2h5.44zM10 20h4v-3h2v3h4v-5.38l-5-2.5-5 2.5V20z"}}]},P=O({name:"ChimneyIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:s}=m(t),p=l(()=>["t-icon","t-icon-chimney",a.value]),v=l(()=>c(c({},s.value),r.style)),u=l(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(d,u.value)}});export{P as default};
