import{u as f,r as d,_ as m}from"./index-B4p2E3Fl.js";import{d as O,l as n}from"./index-CpJFga7x.js";function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v20H2V2zm2 2v16h16v-6.5h-1c-1.02 0-1.99.4-2.7 1.12l-.3.3V18h-2v-7h2v1.33c.9-.54 1.93-.83 3-.83h1V4H4zm4 2v10h5v2H6V6h2z"}}]},P=O({name:"LogoAdobePhotoshop1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,o){var{attrs:t}=o,r=n(()=>e.size),{className:a,style:p}=f(r),c=n(()=>["t-icon","t-icon-logo-adobe-photoshop-1",a.value]),v=n(()=>s(s({},p.value),t.style)),u=n(()=>({class:c.value,style:v.value,onClick:h=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:h})}}));return()=>d(y,u.value)}});export{P as default};
