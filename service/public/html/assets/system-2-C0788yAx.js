import{u as m,r as y,_ as O}from"./index-0JxUx2HH.js";import{d as h,l as a}from"./index-DyfhlEKp.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10 4.37V13H8V4.05l.04-.14c.13-.41.45-1.11 1.06-1.73A4 4 0 0112 1a4 4 0 012.9 1.18c.6.62.93 1.32 1.06 1.73l.04.14v2.39h-2V4.37c-.08-.19-.24-.5-.52-.77A2 2 0 0012 3a2 2 0 00-1.48.6c-.28.27-.44.58-.52.77zM4.05 8h2.39v2H4.37c-.19.08-.5.24-.77.52A2 2 0 003 12a2 2 0 00.6 1.48c.27.28.58.44.77.52H13v2H4.05l-.14-.04a4.35 4.35 0 01-1.73-1.06A4 4 0 011 12a4 4 0 011.18-2.9 4.35 4.35 0 011.73-1.06L4.05 8zM11 8h8.95l.14.04c.41.13 1.11.45 1.73 1.06A4 4 0 0123 12a4 4 0 01-1.18 2.9c-.62.6-1.32.93-1.73 1.06l-.14.04h-2.39v-2h2.07c.19-.08.5-.24.77-.52A2 2 0 0021 12a2 2 0 00-.6-1.48 2.49 2.49 0 00-.77-.52H11V8zm5 3v8.95l-.04.14a4.35 4.35 0 01-1.06 1.73A4 4 0 0112 23a4 4 0 01-2.9-1.18 4.35 4.35 0 01-1.06-1.73L8 19.95v-2.39h2v2.07c.08.19.24.5.52.77A2 2 0 0012 21a2 2 0 001.48-.6c.28-.27.44-.58.52-.77V11h2z"}}]},P=h({name:"System2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:i}=m(r),p=a(()=>["t-icon","t-icon-system-2",l.value]),v=a(()=>s(s({},i.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var c;return(c=e.onClick)===null||c===void 0?void 0:c.call(e,{e:f})}}));return()=>y(d,u.value)}});export{P as default};
