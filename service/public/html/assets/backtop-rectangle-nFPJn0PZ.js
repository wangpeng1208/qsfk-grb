import{u as m,r as O,_ as y}from"./index-B4p2E3Fl.js";import{d as g,l as a}from"./index-CpJFga7x.js";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v20H2V2zm2 2v16h16V4H4zm13.5 4h-11V6h11v2zm-5.5.8l4.6 4.6-1.42 1.42L13 12.64v5.86h-2v-5.86l-2.18 2.18L7.4 13.4 12 8.8z"}}]},P=g({name:"BacktopRectangleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:p}=m(r),s=a(()=>["t-icon","t-icon-backtop-rectangle",o.value]),v=a(()=>i(i({},p.value),t.style)),u=a(()=>({class:s.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(d,u.value)}});export{P as default};
