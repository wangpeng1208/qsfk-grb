import{u as g,r as O,_ as m}from"./index-Bqwwrko2.js";import{d as y,l as n}from"./index-Dys89YLq.js";function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M19.5 7.57a3 3 0 110 6H16v1.46a3 3 0 01-.4 1.51l-2.42 4.13a3 3 0 01-3.54 1.34l-6.09-2.04a3 3 0 01-2.05-2.84V9.06a3 3 0 011.17-2.38l6.29-4.84 1.52 1.02a2 2 0 01.85 2.1l-.58 2.61h8.75zm1 3a1 1 0 00-1-1H8.25l1.13-5.05-.34-.22L3.9 8.26a1 1 0 00-.39.8v8.07a1 1 0 00.68.95l6.1 2.03a1 1 0 001.17-.45l2.41-4.13a1 1 0 00.14-.5v-3.46h5.5a1 1 0 001-1z"}}]},P=y({name:"GestureRightIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:r}=a,t=n(()=>e.size),{className:l,style:c}=g(t),p=n(()=>["t-icon","t-icon-gesture-right",l.value]),u=n(()=>s(s({},c.value),r.style)),v=n(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(d,v.value)}});export{P as default};