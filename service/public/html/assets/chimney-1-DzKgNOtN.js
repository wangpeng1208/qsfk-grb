import{u as h,r as y,_ as m}from"./index-ChiVvrNs.js";import{d as O,l as a}from"./index-Bl4AiOyE.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13.28 2H1.72l1.27 5.09L1.93 22H22V10h-9.66L12 7.07 13.28 2zM10.1 8l.23 2H8v10H4.07l.86-12h5.17zM4.78 6l-.5-2h6.44l-.5 2H4.78zM10 20v-8h10v8h-4v-4h-2v4h-4z"}}]},P=O({name:"Chimney1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=h(t),p=a(()=>["t-icon","t-icon-chimney-1",l.value]),v=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(d,u.value)}});export{P as default};
