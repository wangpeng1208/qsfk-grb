import{u as m,r as O,_ as y}from"./index-B4p2E3Fl.js";import{d,l as n}from"./index-CpJFga7x.js";function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6.34 3.93l-.7.7a9 9 0 000 12.73l.7.71-1.41 1.42-.7-.71a11 11 0 010-15.56l.7-.7 1.41 1.41zm12.73-1.41l.7.7a11 11 0 010 15.56l-.7.7-1.41-1.4.7-.72a9 9 0 000-12.72l-.7-.71 1.41-1.41zm-9.54 4.6l-.71.7a4.5 4.5 0 000 6.36l.7.7-1.4 1.42-.72-.7a6.5 6.5 0 010-9.2l.71-.7L9.53 7.1zm6.36-1.42l.7.7a6.5 6.5 0 010 9.2l-.7.7-1.42-1.41.71-.7a4.5 4.5 0 000-6.37l-.7-.7 1.4-1.42zM10 11a2 2 0 113 1.73V23h-2V12.73A2 2 0 0110 11z"}}]},h=d({name:"BaseStationIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:t}=a,r=n(()=>e.size),{className:l,style:c}=m(r),p=n(()=>["t-icon","t-icon-base-station",l.value]),u=n(()=>s(s({},c.value),t.style)),f=n(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>O(b,f.value)}});export{h as default};