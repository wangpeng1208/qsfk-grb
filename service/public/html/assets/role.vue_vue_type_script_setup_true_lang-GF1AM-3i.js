import{s as y,g}from"./admin-YJlX9y3d.js";import{l as k}from"./role-C0RGrh-L.js";import{d as b,e as i,r as h,o as w,c as x,w as D,a as V,M as n}from"./index-Bl4AiOyE.js";import{T as M}from"./index-DyWz2VZ8.js";import{D as S}from"./index-BKyk21AZ.js";const T={name:"AdminEditPopup"},U=b({...T,emits:["success"],setup(A,{expose:c,emit:m}){const u=i(!1),s=h({role:[],id:0}),r=i(),d=async()=>{const{data:e}=await k();r.value=e.list},p=async()=>{const{data:e}=await g({id:s.id});for(const t in s)t==="role"?s[t]=e[t].split(",").map(a=>Number(a)):s[t]=e[t]},o=i(!1);c({init:e=>{d(),s.id=e,p(),o.value=!0}});const f=m,v=async()=>{try{const e=await y(s);if(e.code!==1){n.error(e.msg);return}n.success("操作成功"),o.value=!1,f("success")}catch(e){n.error(e.msg)}};return(e,t)=>{const a=M,_=S;return w(),x(_,{visible:o.value,"onUpdate:visible":t[1]||(t[1]=l=>o.value=l),"close-on-overlay-click":!1,"destroy-on-close":!0,header:"分配权限","on-confirm":v},{default:D(()=>[V(a,{ref:"tree",modelValue:s.role,"onUpdate:modelValue":t[0]||(t[0]=l=>s.role=l),data:r.value,"expand-all":"",checkable:"","check-strictly":!u.value,"value-mode":"all",hover:"",line:""},null,8,["modelValue","data","check-strictly"])]),_:1},8,["visible"])}}});export{U as _};
