import{i as u,d as B,r as C,e as p,o as r,c as m,w as c,a as i,n as M,p as O,F as T,q as $,u as I,M as b}from"./index-CpJFga7x.js";import{_ as L}from"./index.vue_vue_type_script_setup_true_lang-A7mutgrC.js";import{I as N}from"./index--0mKpQel.js";import{F as P,a as S}from"./index-jBP3p80B.js";import{T as j}from"./index-B-07KYJf.js";import{R as G}from"./index-D7oq8DY2.js";import{D as z}from"./index-AQEtrbEO.js";function se(l){return u.post({url:"/adminapi/channel/collectionAccount/list",params:l})}function H(l){return u.post({url:"/adminapi/channel/collectionAccount/getFields",params:l})}function J(l){return u.post({url:"/adminapi/channel/collectionAccount/detail",params:l})}function Q(l){return u.post({url:"/adminapi/channel/collectionAccount/add",params:l})}function W(l){return u.post({url:"/adminapi/channel/collectionAccount/edit",params:l})}function re(l){return u.post({url:"/adminapi/channel/collectionAccount/del",params:l})}const ce=[{colKey:"id",title:"账号编号"},{colKey:"name",title:"账号备注"},{colKey:"code",title:"接口代码"},{colKey:"status",title:"状态"},{colKey:"operate",title:"操作",fixed:"right"}],X=[{label:"启用",value:1},{label:"禁用",value:0}],Y={name:"EditPopup"},ie=B({...Y,emits:["success"],setup(l,{expose:h,emit:g}){const V=({name:s,url:a})=>{e.params[s]=a},f={id:0,channel_id:0,name:"",rate_type:0,lowrate:0,status:1,params:{}},e=C({...f}),_=p(),d=p(!1),y=p(),w=async(s,a)=>{y.value=a?"编辑收款渠道账号":"添加收款渠道账号",e.channel_id=s;const{data:o}=await H({channel_id:e.channel_id});_.value=o,_.value.forEach(n=>{e.params[n.name]=""}),k(s,a),d.value=!0},k=async(s,a)=>{if(a){const{data:o}=await J({id:a});for(const n in e)o[n]!=null&&o[n]!==void 0&&(e[n]=o[n])}else for(const o in f)e[o]=f[o],e.channel_id=s};h({init:w});const U={name:[{required:!0,message:"账号备注必填",type:"error"}]},x=g,v=p(),A=async()=>{const s=await v.value.validate();if(typeof s!="object"&&s)try{const a=e.id>0?await W(e):await Q(e);a.code===1?(b.success(a.msg),d.value=!1,x("success")):b.error(a.msg)}catch(a){b.error(a.msg)}};return(s,a)=>{const o=N,n=P,F=j,R=G,D=S,K=z;return r(),m(K,{visible:d.value,"onUpdate:visible":a[3]||(a[3]=t=>d.value=t),"close-on-overlay-click":!1,"destroy-on-close":!0,header:y.value,"on-confirm":A},{default:c(()=>[i(D,{ref_key:"formRef",ref:v,"label-align":"left",data:e,rules:U,"label-width":100},{default:c(()=>[i(n,{label:"账号备注",name:"name"},{default:c(()=>[i(o,{modelValue:e.name,"onUpdate:modelValue":a[0]||(a[0]=t=>e.name=t),clearable:"",placeholder:"请输入账号备注"},null,8,["modelValue"])]),_:1}),e.rate_type==1?(r(),m(n,{key:0,label:"充值费率",name:"lowrate"},{default:c(()=>[i(o,{modelValue:e.lowrate,"onUpdate:modelValue":a[1]||(a[1]=t=>e.lowrate=t),clearable:"",placeholder:"请输入费率",suffix:"‰"},null,8,["modelValue"])]),_:1})):M("",!0),(r(!0),O(T,null,$(_.value,(t,E)=>(r(),m(n,{key:E,label:t.label,name:t.name},{default:c(()=>[t.label.includes("证书")?(r(),m(L,{key:0,initial:e.params,app:"admin",name:t.name,theme:"file-input",placeholder:`请上传${t.label}`,data:{type:"certificate"},onUpdate:V},null,8,["initial","name","placeholder"])):(r(),m(F,{key:1,modelValue:e.params[t.name],"onUpdate:modelValue":q=>e.params[t.name]=q,clearable:"",placeholder:`请输入${t.label}`},null,8,["modelValue","onUpdate:modelValue","placeholder"]))]),_:2},1032,["label","name"]))),128)),i(n,{label:"状态",name:"status"},{default:c(()=>[i(R,{modelValue:e.status,"onUpdate:modelValue":a[2]||(a[2]=t=>e.status=t),options:I(X)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["data"])]),_:1},8,["visible","header"])}}});export{ie as _,ce as c,re as d,se as l};
