import{u as m,r as O,_ as y}from"./index-ChiVvrNs.js";import{d as b,l as a}from"./index-Bl4AiOyE.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 5.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm2.86 5.4a5 5 0 11-5.72 0A4.24 4.24 0 0112 3.5a4.25 4.25 0 012.86 7.4zM12 12a3 3 0 100 6 3 3 0 000-6z"}}]},j=b({name:"Numbers81Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=m(t),p=a(()=>["t-icon","t-icon-numbers-8-1",o.value]),u=a(()=>s(s({},c.value),r.style)),f=a(()=>({class:p.value,style:u.value,onClick:v=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:v})}}));return()=>O(d,f.value)}});export{j as default};
