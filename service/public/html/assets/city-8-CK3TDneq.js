import{u as h,r as m,_ as y}from"./index-ChiVvrNs.js";import{d as O,l as a}from"./index-Bl4AiOyE.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h12v8h8v12H2V2zm10 8V8H9v2h3zm-3 2v2h3v-2H9zm-2-2V8H4v2h3zm-3 2v2h3v-2H4zm0 4v4h8v-4H4zm10 4h2v-4h2v4h2v-8h-6v8zM4 6h3V4H4v2zm5-2v2h3V4H9z"}}]},b=O({name:"City8Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=h(r),s=a(()=>["t-icon","t-icon-city-8",o.value]),p=a(()=>v(v({},c.value),t.style)),u=a(()=>({class:s.value,style:p.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(d,u.value)}});export{b as default};