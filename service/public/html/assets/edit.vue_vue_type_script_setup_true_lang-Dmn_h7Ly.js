import{a as x,c as F,e as I}from"./pay_type-R1bR_te5.js";import{_ as p}from"./index.vue_vue_type_script_setup_true_lang-B41-CfgU.js";import{d as R,r as V,e as d,o as M,c as q,w as s,a as o,M as _}from"./index-DyfhlEKp.js";import{I as A}from"./index-DB8QFTGe.js";import{F as B,a as C}from"./index-53D3hsao.js";import{D as E}from"./index-DWHfpBzf.js";const P={name:"EditPopup"},z=R({...P,emits:["success"],setup(S,{expose:g,emit:v}){const n={id:0,name:"",logo:"",ico:""},a=V({...n}),u=({name:t,url:e})=>{a[t]=e},i=d(!1),r=d("添加支付方式"),b=t=>{if(t)r.value="编辑支付方式",y(t);else{r.value="添加支付方式";for(const e in n)a[e]=n[e]}i.value=!0},y=async t=>{const{data:e}=await x({id:t});for(const l in a)e[l]!=null&&e[l]!==void 0&&(a[l]=e[l])};g({init:b});const w={name:[{required:!0,message:"名称必填",type:"error"}],ico:[{required:!0,message:"图标必须上传",type:"error"}]},k=v,f=d(),U=async()=>{const t=await f.value.validate();if(typeof t!="object"&&t){let e;a.id===0?e=await F(a):e=await I(a),e.code===1?(_.success(e.msg),i.value=!1,k("success")):_.error(e.msg)}};return(t,e)=>{const l=A,m=B,h=C,D=E;return M(),q(D,{visible:i.value,"onUpdate:visible":e[1]||(e[1]=c=>i.value=c),"close-on-overlay-click":!1,"destroy-on-close":!0,header:r.value,"on-confirm":U},{default:s(()=>[o(h,{ref_key:"formRef",ref:f,"label-align":"left",data:a,rules:w,"label-width":80},{default:s(()=>[o(m,{label:"名称",name:"name"},{default:s(()=>[o(l,{modelValue:a.name,"onUpdate:modelValue":e[0]||(e[0]=c=>a.name=c),clearable:"",placeholder:"请输入名称"},null,8,["modelValue"])]),_:1}),o(m,{label:"logo大图",name:"logo"},{default:s(()=>[o(p,{theme:"image",initial:a,name:"logo",app:"admin",data:{type:"image"},onUpdate:u},null,8,["initial"])]),_:1}),o(m,{label:"图标",name:"ico"},{default:s(()=>[o(p,{theme:"image",initial:a,name:"ico",app:"admin",data:{type:"image"},onUpdate:u},null,8,["initial"])]),_:1})]),_:1},8,["data"])]),_:1},8,["visible","header"])}}});export{z as _};
