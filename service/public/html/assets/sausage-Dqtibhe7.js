import{u as O,r as m,_ as y}from"./index-B4p2E3Fl.js";import{d as g,l as a}from"./index-CpJFga7x.js";function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?s(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M20 2v2h2v2h-1.25a4.22 4.22 0 01-1.04 4.27l-9.44 9.44A4.22 4.22 0 016 20.75V22H4v-2H2v-2h1.25a4.22 4.22 0 011.04-4.27l9.44-9.44A4.22 4.22 0 0118 3.25V2h2zm-1.7 3.7a2.22 2.22 0 00-3.16 0L5.7 15.16a2.22 2.22 0 103.15 3.14l9.44-9.44c.87-.87.87-2.27 0-3.14z"}}]},P=g({name:"SausageIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=O(t),p=a(()=>["t-icon","t-icon-sausage",o.value]),u=a(()=>i(i({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(d,v.value)}});export{P as default};
