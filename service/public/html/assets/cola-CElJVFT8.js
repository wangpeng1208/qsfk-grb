import{u as m,r as O,_ as y}from"./index-ChiVvrNs.js";import{d,l}from"./index-Bl4AiOyE.js";function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_9398)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17.3.9l5.8 5.8-1.2 4.81-3.17 3.17c-.13.15-.29.31-.47.48L11.5 21.9 6.7 23.1.9 17.3l1.2-4.81 10.4-10.4L17.3.9zm-.42 12.8l2.7-2.7-1.52-1.53c-2.1 2.3-5.9 5.2-11.64 5.54l1.04 1.04c4.92.56 8.14-1.21 9.42-2.34zm-7.31 4.45L11 19.6l1.8-1.8c-.97.2-2.05.35-3.23.36zm-.53 2.3l-5.5-5.5-.43 1.74 4.2 4.2 1.73-.43zm-4.6-7.43c6.2.3 10.14-2.69 12.2-4.97L13 4.41 4.41 13l.03.02zm10.52-9.48l5.5 5.5.43-1.73-4.2-4.2-1.73.43z"}}]}]},h=d({name:"ColaIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:s}=m(t),p=l(()=>["t-icon","t-icon-cola",a.value]),u=l(()=>i(i({},s.value),r.style)),f=l(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>O(g,f.value)}});export{h as default};
