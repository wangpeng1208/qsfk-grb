import{d as g,e as l,r as V,o as w,c as S,w as d,a as c,g as D,M as r,b$ as A}from"./index-Dys89YLq.js";import{a as B,d as M}from"./role-D3Xq-rp3.js";import{S as N}from"./index-BK4MGBjS.js";import{S as U}from"./index-DwGXmo2C.js";import{T as C}from"./index-fX6DPIvv.js";import{D as O}from"./index-9wlLuihG.js";const P=D("span",null," 父子联动 ",-1),T={name:"AdminEditPopup"},I=g({...T,emits:["success"],setup(E,{expose:m,emit:p}){const f=l(!1),n=l(!1),a=V({rules:[],id:0}),u=l(),_=async()=>{const{data:e}=await A({app:"admin"});u.value=e.list},v=async()=>{const{data:e}=await M({id:a.id});for(const t in a)t==="rules"?a[t]=e[t].split(",").map(i=>Number(i)):a[t]=e[t]},o=l(!1);m({init:e=>{_(),a.id=e,v(),o.value=!0}});const y=p,h=async()=>{try{const e=await B(a);if(e.code!==1){r.error(e.msg);return}r.success("操作成功"),o.value=!1,y("success")}catch(e){r.error(e.msg)}};return(e,t)=>{const i=N,b=U,k=C,x=O;return w(),S(x,{visible:o.value,"onUpdate:visible":t[2]||(t[2]=s=>o.value=s),"close-on-overlay-click":!1,"destroy-on-close":!0,header:"分配权限","on-confirm":h},{default:d(()=>[c(b,{style:{margin:"10px 20px"}},{default:d(()=>[P,c(i,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=s=>n.value=s)},null,8,["modelValue"])]),_:1}),c(k,{ref:"tree",modelValue:a.rules,"onUpdate:modelValue":t[1]||(t[1]=s=>a.rules=s),data:u.value,checkable:"","check-strictly":!n.value,"value-mode":"all",hover:"",line:"","expand-all":f.value,keys:{label:"title",value:"id",children:"children"}},null,8,["modelValue","data","check-strictly","expand-all"])]),_:1},8,["visible"])}}});export{I as _};
