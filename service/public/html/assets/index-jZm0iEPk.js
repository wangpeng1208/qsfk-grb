import{d as z,e as a,ae as A,af as C,l as M,o as h,p as b,g as s,a as e,w as o,F as N,n as D,b as L,t as R,ag as U,ah as q,M as f,B as E,z as H,A as P,m as $}from"./index-Dys89YLq.js";import{I as O}from"./index-B8o3bOvu.js";import{I as j}from"./index-k_yBcVp0.js";import{F as G,a as J}from"./index-BYoZ1jRX.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useReadonly-GuO_-cT8.js";import"./useVModel-ChUVkX5D.js";import"./log-ZJhmUOBa.js";import"./useResizeObserver-D_uTF440.js";import"./dep-d524834c-s9Vwwbzr.js";import"./close-circle-filled-6NKz9kYY.js";import"./dep-86139c71-BioGcMu7.js";import"./form-model-CIY_RhMw.js";import"./dep-4cc4ef27--AW_KZeX.js";import"./dep-40320ba3-B1Ayvxeb.js";const Q=r=>(H("data-v-2695ddad"),r=r(),P(),r),W={class:"h-full"},X={class:"login-container mx-auto"},Y={class:"cp"},Z=Q(()=>s("div",{class:"title-container"},[s("div",{class:"title margin-no"},"管理员登录")],-1)),ee={class:"copyright"},te=["innerHTML"],oe=z({__name:"index",setup(r){const m=a({url:""});(async()=>{const c=await q();m.value=c.data})();const v=$(),g=A();(()=>{g.accessToken&&(f.success("已登录, 正在跳转到工作台..."),v.push({path:"/admin/workbench"}))})();const y={username:"",password:""},I={username:[{required:!0,message:"用户名必填",type:"error"}],password:[{required:!0,message:"密码必填",type:"error"}]},x=a("password"),S=a(),n=a({...y}),l=a(!1),d=a("登 录"),i=a(!1),k=async c=>{if(c.validateResult===!0){d.value="登录中...",i.value=!0;try{await g.login(n.value),f.success("登陆成功"),v.push({path:"/admin/workbench"}),i.value=!1}catch(t){f.error(t.msg),i.value=!1,d.value="登录"}}},V=C(),B=M(()=>V.config.site_info_copyright);return(c,t)=>{const p=O,w=j,_=G,F=E,T=J;return h(),b("div",{class:"login-wrapper",style:U({background:m.value.url?`url(${m.value.url})  center repeat`:"none"})},[s("div",W,[s("div",X,[s("div",Y,[Z,e(T,{ref_key:"form",ref:S,class:"item-container",data:n.value,rules:I,"label-width":"0",onSubmit:k},{default:o(()=>[x.value=="password"?(h(),b(N,{key:0},[e(_,{name:"username"},{default:o(()=>[e(w,{modelValue:n.value.username,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value.username=u),size:"large",placeholder:"请输入账号/手机号/邮箱"},{"prefix-icon":o(()=>[e(p,{name:"user"})]),_:1},8,["modelValue"])]),_:1}),e(_,{name:"password"},{default:o(()=>[e(w,{modelValue:n.value.password,"onUpdate:modelValue":t[2]||(t[2]=u=>n.value.password=u),size:"large",type:l.value?"text":"password",clearable:"",placeholder:"请输入登录密码"},{"prefix-icon":o(()=>[e(p,{name:"lock-on"})]),"suffix-icon":o(()=>[e(p,{name:l.value?"browse":"browse-off",onClick:t[1]||(t[1]=u=>l.value=!l.value)},null,8,["name"])]),_:1},8,["modelValue","type"])]),_:1})],64)):D("",!0),e(_,{class:"btn-container"},{default:o(()=>[e(F,{block:"",type:"submit",size:"large",disabled:i.value},{default:o(()=>[L(R(d.value),1)]),_:1},8,["disabled"])]),_:1})]),_:1},8,["data"])])])]),s("footer",ee,[s("span",{innerHTML:B.value},null,8,te)])],4)}}}),be=K(oe,[["__scopeId","data-v-2695ddad"]]);export{be as default};