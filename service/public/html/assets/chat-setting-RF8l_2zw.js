import{u as h,r as O,_ as m}from"./index-0JxUx2HH.js";import{d as y,l as a}from"./index-DyfhlEKp.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1.5 2h21v9h-2V4h-17v14.3L6.12 16H13v2H6.88L1.5 22.7V2zM20 12.5v1.14a3.5 3.5 0 011.4.81l1-.57 1 1.73-1 .58a3.51 3.51 0 010 1.62l1 .57-1 1.73-1-.57c-.39.37-.87.65-1.4.81v1.15h-2v-1.15a3.5 3.5 0 01-1.4-.81l-1 .57-1-1.73 1-.57a3.5 3.5 0 010-1.62l-1-.58 1-1.73 1 .57c.39-.37.87-.65 1.4-.81V12.5h2zm-1 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"}}]},P=y({name:"ChatSettingIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=h(r),p=a(()=>["t-icon","t-icon-chat-setting",l.value]),v=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(g,u.value)}});export{P as default};
