import{u as m,r as O,_ as y}from"./index-ChiVvrNs.js";import{d as g,l as n}from"./index-Bl4AiOyE.js";function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?c(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8.75 4.25C4.85 4.25 2 6.88 2 9.79c0 1.6.83 3.09 2.25 4.13a1 1 0 01.4.94l-.07.53.83-.42a1 1 0 01.77-.05 7.99 7.99 0 003.32.38c0-3.2 2.67-5.67 5.95-6.2-.41-2.62-3.12-4.85-6.7-4.85zm8.7 4.78C21 9.33 24 11.9 24 15.31c0 1.64-.71 3.1-1.83 4.2v1.95a1 1 0 01-1.5.87l-1.73-1c-.7.19-1.43.3-2.19.3-3.12 0-5.92-1.76-6.9-4.35a10.23 10.23 0 01-3.9-.34L3.8 18.02A1 1 0 012.36 17l.23-1.84A7.05 7.05 0 010 9.79c0-4.31 4.08-7.54 8.75-7.54 4.39 0 8.26 2.85 8.7 6.78zM5.26 7.5a1 1 0 012 0 1 1 0 01-2 0zm5 0a1 1 0 112 0v.01a1 1 0 11-2 0zm6.5 3.5h-.22c-2.95.1-5.03 2.13-5.03 4.31 0 .23.02.45.06.66.37 1.96 2.45 3.65 5.19 3.65.7 0 1.38-.11 2-.32a1 1 0 01.82.08l.6.35v-.66a1 1 0 01.35-.76 3.93 3.93 0 001.48-3c0-2.23-2.2-4.31-5.25-4.31zm-3.2 2.66a1 1 0 011-1h.01a1 1 0 110 2 1 1 0 01-1-1zm4.39 0a1 1 0 112 0 1 1 0 11-2 0z"}}]},z=g({name:"LogoWechatStrokeIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:t}=a,r=n(()=>e.size),{className:o,style:s}=m(r),p=n(()=>["t-icon","t-icon-logo-wechat-stroke",o.value]),u=n(()=>i(i({},s.value),t.style)),v=n(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(d,v.value)}});export{z as default};