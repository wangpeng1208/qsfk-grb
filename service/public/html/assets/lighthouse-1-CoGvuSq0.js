import{u as f,r as O,_ as y}from"./index-B4p2E3Fl.js";import{d as g,l}from"./index-CpJFga7x.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 .92l6.3 2.52-.74 1.86-.56-.22V10h2v2h-1.9c.16 1.9.51 3.94.88 5.67a71.32 71.32 0 00.96 3.98l.02.06v.01l.37 1.28h-6.11l-1-4h-.44l-1 4h-6.1l.36-1.27v-.02l.02-.06a36.56 36.56 0 00.28-1.07c.19-.72.43-1.74.68-2.91.37-1.73.72-3.76.89-5.67H5v-2h2V5.08l-.56.22-.74-1.86L12 .92zM9 4.28V10h6V4.28l-3-1.2-3 1.2zM15.09 12H8.9a50.07 50.07 0 01-.93 6.08A73.35 73.35 0 017.3 21h1.92l1-4h3.56l1 4h1.92c-.19-.74-.43-1.75-.68-2.92-.38-1.8-.77-4-.93-6.08zM11 6h2v2h-2V6z"}}]},P=g({name:"Lighthouse1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=l(()=>e.size),{className:a,style:c}=f(r),p=l(()=>["t-icon","t-icon-lighthouse-1",a.value]),u=l(()=>s(s({},c.value),t.style)),h=l(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>O(m,h.value)}});export{P as default};
