import{u as O,r as m,_ as y}from"./index-ChiVvrNs.js";import{d as h,l as a}from"./index-Bl4AiOyE.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 5c0-1.1.9-2 2-2h8v2H4v6h8v2H4v8H2V5zm20 5v2.14a2 2 0 01-.73 1.54l-2.2 1.82 2.2 1.82a2 2 0 01.73 1.54V21h-2v-2.14l-2.5-2.06-2.5 2.06V21h-2v-2.14a2 2 0 01.73-1.54l2.2-1.82-2.2-1.82a2 2 0 01-.73-1.54V10h2v2.14l2.5 2.06 2.5-2.06V10h2z"}}]},P=h({name:"Functions1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=O(r),p=a(()=>["t-icon","t-icon-functions-1",o.value]),v=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(d,u.value)}});export{P as default};
