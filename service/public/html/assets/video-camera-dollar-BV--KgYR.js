import{u as m,r as h,_ as d}from"./index-Bqwwrko2.js";import{d as O,l as n}from"./index-Dys89YLq.js";function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M0 4h17v4.43l7-4.2v15.5l-7-4V20H0V4zm17 9.42l5 2.85v-8.5l-5 3v2.65zM2 6v12h13V6H2zm7.5 1v1h2v2h-4v1h2a2 2 0 012 2v1a2 2 0 01-2 2v1h-2v-1h-2v-2h4v-1h-2a2 2 0 01-2-2v-1c0-1.1.9-2 2-2V7h2z"}}]},P=O({name:"VideoCameraDollarIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:r}=a,t=n(()=>e.size),{className:l,style:c}=m(t),s=n(()=>["t-icon","t-icon-video-camera-dollar",l.value]),p=n(()=>v(v({},c.value),r.style)),u=n(()=>({class:s.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>h(y,u.value)}});export{P as default};
