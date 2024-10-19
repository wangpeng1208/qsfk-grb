import{d as z,l as g,ax as L,ay as q,az as H,bG as Y,bq as U,bH as Z,_ as h,a5 as $,C as tt,G as et,a as s,X as at,e as I,a9 as nt,N as rt,U as B,v as it,L as ot,ad as lt,m as st,o as F,c as j,w as y,g as u,b as C,t as D,z as ut,A as dt}from"./index-Bbii3Das.js";import{b as ct}from"./workbench-BmBtl6DM.js";import{T as vt}from"./index-DV6htPKJ.js";import{T as ft}from"./index-CpsbnJvy.js";import{S as mt}from"./index-BSb-NA9P.js";import{I as pt}from"./index-LB7-EXu2.js";import{C as ht}from"./index-tMpZz9fP.js";import{C as yt,R as gt}from"./index-C3KQRfvx.js";import{_ as _t}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CpVXpLih.js";import"./dep-96cefb8b-EGQiC2Rs.js";import"./useVModel-mAS2bV03.js";import"./useResizeObserver-C76GXHCj.js";import"./common-CF_MvV9u.js";import"./dep-d524834c-s9Vwwbzr.js";import"./useListener-CG-tjh3q.js";function V(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,a)}return e}function E(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?V(Object(e),!0).forEach(function(a){H(n,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):V(Object(e)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))})}return n}var bt={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M15 12h4.5L12 22 4.5 12H9V2h6v10z"}}]},wt=z({name:"ArrowTriangleDownFilledIcon",props:{size:{type:String},onClick:{type:Function}},setup(n,t){var{attrs:e}=t,a=g(()=>n.size),{className:r,style:_}=L(a),o=g(()=>["t-icon","t-icon-arrow-triangle-down-filled",r.value]),i=g(()=>E(E({},_.value),e.style)),c=g(()=>({class:o.value,style:i.value,onClick:w=>{var v;return(v=n.onClick)===null||v===void 0?void 0:v.call(n,{e:w})}}));return()=>q(bt,c.value)}});function M(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,a)}return e}function R(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?M(Object(e),!0).forEach(function(a){H(n,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):M(Object(e)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))})}return n}var St={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M15 12h4.5L12 2 4.5 12H9v10h6V12z"}}]},xt=z({name:"ArrowTriangleUpFilledIcon",props:{size:{type:String},onClick:{type:Function}},setup(n,t){var{attrs:e}=t,a=g(()=>n.size),{className:r,style:_}=L(a),o=g(()=>["t-icon","t-icon-arrow-triangle-up-filled",r.value]),i=g(()=>R(R({},_.value),e.style)),c=g(()=>({class:o.value,style:i.value,onClick:w=>{var v;return(v=n.onClick)===null||v===void 0?void 0:v.call(n,{e:w})}}));return()=>q(St,c.value)}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var Ot={animation:{type:Object},animationStart:Boolean,color:{type:String,validator:function(t){return t?["black","blue","red","orange","green"].includes(t):!0}},decimalPlaces:{type:Number},extra:{type:[String,Function]},format:{type:Function},loading:Boolean,prefix:{type:[String,Function]},separator:{type:String,default:","},suffix:{type:[String,Function]},title:{type:[String,Function]},trend:{type:String,validator:function(t){return t?["increase","decrease"].includes(t):!0}},trendPlacement:{type:String,default:"left",validator:function(t){return t?["left","right"].includes(t):!0}},unit:{type:[String,Function]},value:{type:Number}};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var G=function(t){return 1-Math.abs(Math.pow(t-1,4))},Pt=function(){function n(t){var e=this,a=t.from,r=t.to,_=t.duration,o=_===void 0?200:_,i=t.onStart,c=t.onUpdate,w=c===void 0?function(){}:c,v=t.onFinish;Z(this,n),h(this,"from",void 0),h(this,"to",void 0),h(this,"duration",void 0),h(this,"onStart",void 0),h(this,"onUpdate",void 0),h(this,"onFinish",void 0),h(this,"startTime",void 0),h(this,"started",void 0),h(this,"finished",void 0),h(this,"timer",void 0),h(this,"keys",void 0),h(this,"time",0),h(this,"elapsed",0),this.from=a,this.to=r,this.duration=o,this.onStart=i,this.onUpdate=w,this.onFinish=v,this.startTime=Date.now(),this.started=!1,this.finished=!1,this.timer=null,this.keys={},Object.entries(a).forEach(function(S){var b=$(S,2),m=b[0],x=b[1];e.to[m]===void 0&&(e.to[m]=x)}),Object.entries(r).forEach(function(S){var b=$(S,2),m=b[0],x=b[1];e.from[m]===void 0&&(e.from[m]=x)})}return Y(n,[{key:"update",value:function(){var e=this;if(this.time=Date.now(),!(this.time<this.startTime||this.finished)){if(this.elapsed>=this.duration){var a;this.finished=!0,(a=this.onFinish)===null||a===void 0||a.call(this,this.keys);return}var r=Math.min(this.time-this.startTime,this.duration);this.elapsed=r;var _=G(r/this.duration);if(Object.keys(this.to).forEach(function(i){var c=e.to[i]-e.from[i];e.keys[i]=e.from[i]+c*_}),!this.started){var o;(o=this.onStart)===null||o===void 0||o.call(this,this.keys),this.started=!0}this.onUpdate(this.keys)}}},{key:"polyfillStart",value:function(){var e=this,a=Date.now()-this.startTime,r=G(a/this.duration);this.timer=setInterval(function(){e.update(),e.finished&&clearInterval(e.timer)},r)}},{key:"normalStart",value:function(){var e=this,a=function(){e.update(),e.timer=requestAnimationFrame(a),e.finished&&(cancelAnimationFrame(e.timer),e.timer=null)};a()}},{key:"start",value:function(){this.startTime=Date.now(),U()<10?this.polyfillStart():this.normalStart()}},{key:"stop",value:function(){U()<10?clearInterval(this.timer):cancelAnimationFrame(this.timer),this.timer=null}}])}();/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var kt={black:"var(--td-text-color-primary)",blue:"var(--td-brand-color)",red:"var(--td-error-color)",orange:"var(--td-warning-color)",green:"var(--td-success-color)"};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var Ft=z({name:"TStatistic",props:Ot,setup:function(t,e){var a,r,_=e.expose,o=tt("statistic"),i=ot(),c=et({ArrowTriangleUpFilledIcon:xt,ArrowTriangleDownFilledIcon:wt}),w=c.ArrowTriangleUpFilledIcon,v=c.ArrowTriangleDownFilledIcon,S={increase:s(w,null,null),decrease:s(v,null,null)},b=g(function(){return at(t.value)?t.value:0}),m=I((a=(r=t.animation)===null||r===void 0?void 0:r.valueFrom)!==null&&a!==void 0?a:t.value),x=g(function(){var l,d,p;return(l=(d=t.decimalPlaces)!==null&&d!==void 0?d:(p=b.value.toString().split(".")[1])===null||p===void 0?void 0:p.length)!==null&&l!==void 0?l:0}),f=I(),X=nt(t),J=X.value,T=function(){var d,p,O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:(d=(p=t.animation)===null||p===void 0?void 0:p.valueFrom)!==null&&d!==void 0?d:0,P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:b.value;if(O!==P){var k;f.value=new Pt({from:{value:O},to:{value:P},duration:t.animation.duration,onUpdate:function(W){m.value=Number(W.value.toFixed(x.value))},onFinish:function(){m.value=P}}),(k=f.value)===null||k===void 0||k.start()}},K=g(function(){var l=m.value,d=t.decimalPlaces,p=t.separator;if(rt(t.format))return t.format(l);var O={minimumFractionDigits:d||0,maximumFractionDigits:d||20,useGrouping:!!p};return l=l.toLocaleString(void 0,O).replace(/,|，/g,p),l}),Q=g(function(){var l=t.color;return{color:kt[l]||l}});return B(function(){return t.animationStart},function(l){t.animation&&l&&!f.value&&T()}),B(J,function(l){if(f.value){var d;(d=f.value)===null||d===void 0||d.stop(),f.value=null}m.value=l,t.animationStart&&t.animation&&T()}),it(function(){return t.animation&&t.animationStart&&T()}),_({start:T}),function(){var l=t.trend?S[t.trend]:null,d=i("prefix")||(l&&t.trendPlacement!=="right"?l:null),p=i("suffix")||(l&&t.trendPlacement==="right"?l:null),O=i("title"),P=i("unit"),k=i("extra");return s("div",{class:o.value},[O&&s("div",{class:"".concat(o.value,"-title")},[O]),s(mt,{animation:"gradient",theme:"text",loading:!!t.loading},{default:function(){return[s("div",{class:"".concat(o.value,"-content"),style:Q.value},[d&&s("span",{class:"".concat(o.value,"-content-prefix")},[d]),s("span",{class:"".concat(o.value,"-content-value")},[K.value]),P&&s("span",{class:"".concat(o.value,"-content-unit")},[P]),p&&s("span",{class:"".concat(o.value,"-content-suffix")},[p])])]}}),k&&s("div",{class:"".concat(o.value,"-extra")},[k])])}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var jt=lt(Ft);const A=n=>(ut("data-v-5b23c4bd"),n=n(),dt(),n),Tt={style:{"padding-top":"var(--td-comp-paddingTB-l)"}},Ct={style:{display:"flex","justify-content":"space-between","padding-bottom":"5px"}},Dt=A(()=>u("div",{style:{flex:"1"}},"昨日销售",-1)),It={style:{display:"flex","justify-content":"center"}},zt={style:{display:"flex","justify-content":"space-between"}},At=A(()=>u("div",null,"平台总销售额",-1)),Nt={style:{"padding-top":"var(--td-comp-paddingTB-l)"}},Ut={style:{display:"flex","justify-content":"space-between","padding-bottom":"5px"}},$t=A(()=>u("div",{style:{width:"120px"}},"昨日",-1)),Bt={style:{display:"flex","justify-content":"center"}},Vt={style:{display:"flex","justify-content":"space-between"}},Et=A(()=>u("div",{style:{width:"120px"}},"总有效订单",-1)),Mt=z({__name:"BasicCard",setup(n){const t=st(),e=o=>{t.push({path:o})},a=I({today:0,yesterday:0,total:0,ratio:0}),r=I({today:0,yesterday:0,total:0});return(async()=>{const o=await ct(),{data:i}=o;a.value=i.price,r.value=i.order})(),(o,i)=>{const c=vt,w=ft,v=jt,S=pt,b=ht,m=yt,x=gt;return F(),j(x,{gutter:{xs:8,sm:16,md:20,lg:20,xl:20,xxl:20}},{default:y(()=>[s(m,{span:6},{default:y(()=>[s(b,{title:"销售额","header-bordered":"","hover-shadow":"",bordered:!1,style:{"border-top":"var(--td-brand-color) solid 3px"}},{title:y(()=>[s(c,{content:"点击进入订单列表面板"},{default:y(()=>[u("div",{onClick:i[0]||(i[0]=f=>e("/admin/order/list")),style:{cursor:"pointer"}}," 销售额统计 ")]),_:1})]),actions:y(()=>[s(w,{theme:"primary",variant:"light"},{default:y(()=>[C("今日")]),_:1})]),default:y(()=>{var f;return[s(v,{value:(f=a.value)==null?void 0:f.today,unit:"元"},null,8,["value"]),u("div",Tt,[u("div",Ct,[Dt,u("div",It,[u("div",null,[a.value.today>a.value.yesterday?(F(),j(S,{key:0,name:"arrow-triangle-up-filled",style:{color:"#d54941","font-size":"var(--td-font-size-body-large)"}})):(F(),j(S,{key:1,name:"arrow-triangle-down-filled",style:{color:"#2ba471","font-size":"var(--td-font-size-body-large)"}})),C(" "+D(a.value.yesterday)+" 元 ",1)])])]),u("div",zt,[At,u("div",null,D(a.value.total)+" 元",1)])])]}),_:1})]),_:1}),s(m,{span:6},{default:y(()=>[s(b,{title:"订单数","header-bordered":"","hover-shadow":"",bordered:!1,style:{"border-top":"rgb(159, 219, 29) solid 3px"}},{title:y(()=>[s(c,{content:"点击进入订单管理面板"},{default:y(()=>[u("div",{onClick:i[1]||(i[1]=f=>e("/admin/order/list")),style:{cursor:"pointer"}}," 订单统计 ")]),_:1})]),actions:y(()=>[s(w,{theme:"primary",variant:"light"},{default:y(()=>[C("今日")]),_:1})]),default:y(()=>{var f;return[s(v,{value:(f=r.value)==null?void 0:f.today,unit:"笔"},null,8,["value"]),u("div",Nt,[u("div",Ut,[$t,u("div",Bt,[u("div",null,[r.value.today>r.value.yesterday?(F(),j(S,{key:0,name:"arrow-triangle-up-filled",style:{color:"#d54941","font-size":"var(--td-font-size-body-large)"}})):(F(),j(S,{key:1,name:"arrow-triangle-down-filled",style:{color:"#2ba471","font-size":"var(--td-font-size-body-large)"}})),C(" "+D(r.value.yesterday)+" 笔 ",1)])])]),u("div",Vt,[Et,u("div",null,D(r.value.total)+" 笔",1)])])]}),_:1})]),_:1})]),_:1})}}}),re=_t(Mt,[["__scopeId","data-v-5b23c4bd"]]);export{re as default};
