import{u as O,r as m,_ as y}from"./index-Bqwwrko2.js";import{d,l as n}from"./index-Dys89YLq.js";function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.25 4.5a3 3 0 016 0V8h1.46a3 3 0 011.51.4l4.13 2.42a3 3 0 011.33 3.54l-2.03 6.09a3 3 0 01-2.84 2.05H8.73a3 3 0 01-2.37-1.17l-4.84-6.29 1.02-1.52a2 2 0 012.1-.85l2.61.58V4.5zm3-1a1 1 0 00-1 1v11.25L4.2 14.62l-.22.34 3.96 5.15a1 1 0 00.8.39h8.07a1 1 0 00.95-.68l2.03-6.1a1 1 0 00-.45-1.17l-4.13-2.41a1 1 0 00-.5-.14h-3.46V4.5a1 1 0 00-1-1z"}}]},P=d({name:"GestureUpIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:r}=a,t=n(()=>e.size),{className:l,style:p}=O(t),c=n(()=>["t-icon","t-icon-gesture-up",l.value]),u=n(()=>s(s({},p.value),r.style)),v=n(()=>({class:c.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,v.value)}});export{P as default};
