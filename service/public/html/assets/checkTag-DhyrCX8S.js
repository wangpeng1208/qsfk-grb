import{d as y,e as g,U as _,o as n,c as l,w as i,p as h,F as v,q as k,u as A,Q as S,b,t as B,B as V}from"./index-CpJFga7x.js";import{S as z}from"./index-fiMfjcvP.js";import"./slot-DL8tHB3s.js";const N=y({__name:"checkTag",props:{items:{type:Array,required:!0},modelValue:{type:[String,Number,Array],required:!0},size:{type:String,default:"medium"},variant:{type:String,default:"light-outline"}},emits:["actions","update:modelValue"],setup(o,{emit:u}){const r=o,{items:c}=r,t=g();_(()=>r.modelValue,e=>{Array.isArray(e)?e.length>0?t.value=1:t.value=0:t.value=e},{immediate:!0});const s=u,m=e=>{t.value=e,Array.isArray(r.modelValue)?s("actions",e):(s("actions",e),s("update:modelValue",e))};return(e,C)=>{const p=V,d=z;return n(),l(d,null,{default:i(()=>[(n(!0),h(v,null,k(A(c),(a,f)=>(n(),l(p,S(e.$attrs,{key:f,size:o.size,theme:a.value==t.value?"primary":"default",variant:a.value==t.value?"base":"outline",onClick:q=>m(a.value)}),{default:i(()=>[b(B(a.label),1)]),_:2},1040,["size","theme","variant","onClick"]))),128))]),_:1})}}});export{N as default};
