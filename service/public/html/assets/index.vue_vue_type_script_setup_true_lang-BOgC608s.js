import{b as c,a as S}from"./config-hc94wOqU.js";import{d as _,a9 as w,e as l,s as V,o as $,c as z,Q as B,u as O,M as R}from"./index-Bl4AiOyE.js";import{U as j}from"./index-Dkkg6vhj.js";const M={name:"WpUpload"},C=_({...M,props:{theme:String,initial:Object,name:String,app:String,accept:String,zft:String,data:{type:Object,default:()=>({})}},emits:["update"],setup(o,{emit:p}){const e=o,{accept:d,app:i,theme:f,zft:P}=w(e),n=l(d.value),t=l();V(()=>{let a;if(e.initial[e.name]&&e.initial[e.name].startsWith("http")?a=e.initial[e.name]:a=c+e.initial[e.name],e.initial&&e.name&&e.initial[e.name])switch(e.theme){case"image":n.value="image/*",t.value=[{url:a}];break;case"file":n.value="file/*",t.value=[{name:e.initial[e.name],url:a}];break;case"custom":t.value=[{name:e.initial[e.name],url:a}];break;case"file-input":t.value=[{name:e.initial[e.name],url:a}];break;case"file-flow":t.value=[{name:e.initial[e.name],url:a}];break;case"image-flow":t.value=[{url:a}];break;default:n.value="image/*",t.value=[{url:a}]}else t.value=[]});const s=p,v=a=>a.code===0?(R.error(a.msg),null):(e.initial&&e.name&&s("update",{name:e.name,url:a.data.url}),a.data),g=()=>{s("update",{name:e.name,url:""})},r=l();(()=>{switch(i.value){case"admin":r.value=`${c}${S}`;break}})();const b=localStorage.getItem(i.value)||"{}",{accessToken:h}=JSON.parse(b),m=l({});return i.value!==void 0&&(m.value={Authorization:`Bearer ${h}`}),(a,u)=>{const U=j;return $(),z(U,B(a.$attrs,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=k=>t.value=k),action:r.value,headers:m.value,theme:O(f),accept:n.value,"format-response":v,data:o.data,clearable:"",onRemove:g}),null,16,["modelValue","action","headers","theme","accept","data"])}}});export{C as _};
