import{u as m,r as O,_ as y}from"./index-CzBgriim.js";import{d,l as a}from"./index-Bbii3Das.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.28 1.11l.55.84c.47.7.75 1.4.92 2.09 1.65.15 2.88.8 3.56 1.23.71-.25 1.6-.3 2.44-.13 1.18.25 2.42.96 3.14 2.41.47.93.6 2.24.57 3.55a18.7 18.7 0 01-.65 4.25 12.8 12.8 0 01-1.63 3.79c-.69 1-1.69 1.92-3.01 1.92h-1.89c-.23.22-.52.42-.9.57-.6.25-1.36.37-2.38.37a6.29 6.29 0 01-2.37-.37 2.85 2.85 0 01-.9-.57H6.37c-1.27 0-2.18-1-2.77-1.97a13.85 13.85 0 01-1.47-3.76c-.35-1.4-.56-2.89-.6-4.23-.03-1.3.11-2.62.57-3.55a4.46 4.46 0 013.16-2.4 4.72 4.72 0 012.43.12c.6-.38 1.63-.93 3-1.16-.12-.36-.29-.7-.52-1.06l-.56-.83 1.67-1.1zm-.29 4.98c-1.12.2-1.94.68-2.4.99-.71 1.79-.7 4.43-.3 6.96.21 1.3.51 2.52.83 3.5.34 1.01.66 1.65.85 1.9l.03.03.02.04c.05.08.13.17.37.27.26.11.75.22 1.61.22a4.4 4.4 0 001.62-.22c.23-.1.32-.2.37-.28l.02-.03.03-.04c.2-.24.51-.88.84-1.9.32-.97.62-2.19.83-3.49.4-2.53.42-5.17-.28-6.96-.47-.31-1.3-.8-2.44-1l.01.85V8h-2V7v-.91zm6.54.96c.65 2.21.53 4.95.16 7.3a25.26 25.26 0 01-1.23 4.7h.7c.33 0 .8-.22 1.37-1.04.53-.79 1-1.91 1.35-3.18.34-1.26.54-2.6.58-3.78a6.02 6.02 0 00-.35-2.6c-.4-.81-1.08-1.2-1.77-1.35-.3-.06-.58-.07-.81-.05zm-11.05 0c-.24-.02-.52 0-.82.05-.7.15-1.36.54-1.77 1.35a6.1 6.1 0 00-.36 2.6c.03 1.18.22 2.53.54 3.8.32 1.27.75 2.4 1.24 3.2.53.86.92 1 1.06 1h1.18c-.12-.28-.22-.58-.33-.9-.35-1.07-.68-2.4-.9-3.8-.37-2.35-.49-5.09.16-7.3z"}}]},b=d({name:"PumpkinIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:c,style:p}=m(t),s=a(()=>["t-icon","t-icon-pumpkin",c.value]),u=a(()=>i(i({},p.value),r.style)),v=a(()=>({class:s.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(h,v.value)}});export{b as default};
