import{u as h,r as y,_ as m}from"./index-B4p2E3Fl.js";import{d as O,l as a}from"./index-CpJFga7x.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M18 2H6v2h1v4H1v14h22V8h-6V4h1V2zm-3 2v16h-2v-5h-2v5H9V4h6zM7 20H3V10h4v10zm10 0V10h4v10h-4zM13 6h-2v2h2V6z"}}]},P=O({name:"City13Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=h(r),v=a(()=>["t-icon","t-icon-city-13",o.value]),p=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>y(d,u.value)}});export{P as default};
