import{u as h,r as g,_ as O}from"./index-ChiVvrNs.js";import{d as m,l as a}from"./index-Bl4AiOyE.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8780_6716)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.2 22.5h5.6l.45-2h2.5l.45 2h5.6l.63-2.84a10 10 0 001.49-13.77A5.02 5.02 0 0017 0a5 5 0 00-4 2.02c-1.35.08-2.7.4-4.01.95l-.92.4.78 1.83.92-.39c.76-.32 1.53-.54 2.3-.67A5.03 5.03 0 0017 10c1.61 0 3.05-.76 3.96-1.95a8 8 0 01-2.04 10.26l-.28.22-.44 1.97h-2.4l-.44-2H9.64l-.44 2H6.8l-.67-3-.5-.2A13.03 13.03 0 012 15.07V10.5h1.07L5.1 7.09l-.67-1.67c.81.1 1.74.5 2.6 1.45l.68.74L9.2 6.27l-.67-.74a5.92 5.92 0 00-5.76-2l-1.13.26 1.25 3.12-.96 1.59H0v7.42l.3.29a14.72 14.72 0 004.11 2.75l.79 3.54zm.3-11h2v-2h-2v2zM17 8a3 3 0 110-6 3 3 0 010 6z"}}]}]},b=m({name:"SavingPotIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=h(r),p=a(()=>["t-icon","t-icon-saving-pot",l.value]),v=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>g(y,u.value)}});export{b as default};
