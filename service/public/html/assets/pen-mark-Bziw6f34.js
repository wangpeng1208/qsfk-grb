import{u as m,r as O,_ as y}from"./index-Bqwwrko2.js";import{d,l as a}from"./index-Dys89YLq.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M23.55 6.88L17.33.65 3.98 14l-.57 2.83 3.97 3.96 2.83-.56L23.55 6.88zm-2.82 0L9.22 18.38l-1.18.24-2.46-2.45.24-1.18 11.5-11.5 3.4 3.39zM1.39 19.6l3.2 3.21 1.42-1.41L2.8 18.2 1.39 19.6z"}}]},j=d({name:"PenMarkIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:p}=m(t),c=a(()=>["t-icon","t-icon-pen-mark",o.value]),u=a(()=>s(s({},p.value),r.style)),f=a(()=>({class:c.value,style:u.value,onClick:v=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:v})}}));return()=>O(g,f.value)}});export{j as default};
