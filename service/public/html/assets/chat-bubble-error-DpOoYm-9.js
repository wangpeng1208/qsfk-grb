import{u as b,r as m,_ as O}from"./index-Bqwwrko2.js";import{d as h,l as a}from"./index-Dys89YLq.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a9 9 0 00-6.54 15.19l.5.53L4.7 21H12a9 9 0 100-18zM1 12a11 11 0 1111 11H1.3l2.22-4A10.96 10.96 0 011 12zm12-5.5V14h-2V6.5h2zm-2 9h2v2h-2v-2z"}}]},P=h({name:"ChatBubbleErrorIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=b(t),p=a(()=>["t-icon","t-icon-chat-bubble-error",o.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(y,v.value)}});export{P as default};
