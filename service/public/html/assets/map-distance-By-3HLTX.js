import{u as f,r as O,_ as y}from"./index-B4p2E3Fl.js";import{d,l as n}from"./index-CpJFga7x.js";function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?l(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v20H2V2zm2 2v16h16V4H4zm12.5 3a.5.5 0 00-.5.5c0 .22.16.55.49.9a3.86 3.86 0 00.02 0c.33-.35.49-.68.49-.9a.5.5 0 00-.5-.5zm0 3.96c-.3-.2-.6-.4-.87-.62-.17-.14-.4-.33-.62-.58A3.47 3.47 0 0114 7.5a2.5 2.5 0 015 0c0 1-.6 1.8-1.01 2.26a6.1 6.1 0 01-.62.58c-.28.23-.58.42-.87.62zm-8-.96a.5.5 0 00-.5.5c0 .22.16.55.49.9l.01.02.01-.01c.33-.36.49-.69.49-.91a.5.5 0 00-.5-.5zm0 3.96c-.22-.15-.45-.3-.66-.46a5.54 5.54 0 01-.83-.74A3.47 3.47 0 016 10.5a2.5 2.5 0 015 0c0 1-.6 1.8-1.01 2.26a6.1 6.1 0 01-.83.75c-.21.16-.44.3-.66.45zm11.29-.37l-5.88 2.2-.7-1.88 5.88-2.2.7 1.88zm-8 3l-5.88 2.2-.7-1.88 5.88-2.2.7 1.88z"}}]},h=d({name:"MapDistanceIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:t}=a,r=n(()=>e.size),{className:c,style:s}=f(r),p=n(()=>["t-icon","t-icon-map-distance",c.value]),u=n(()=>i(i({},s.value),t.style)),m=n(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>O(g,m.value)}});export{h as default};
