import{d as G,C as ot,E as ft,G as pt,H as dt,I as mt,J as vt,e as b,K as gt,v as yt,a as l,_ as H,L as ht,N as _t,O as Ct,P as bt,l as rt,Q as Ot,R as xt,S as wt,T as V,k as kt,m as Pt,r as St,j as jt,f as It,o as A,c as X,w as d,u as D,h as K,b as N,t as Et,D as $t,x as Z,B as Dt}from"./index-Bbii3Das.js";import{a as Nt,d as Tt,s as Ft}from"./category-BxaE_eVk.js";import Bt from"./index-DnBeYN_c.js";import{p as At}from"./global-DaymibWd.js";import{f as Xt}from"./date-CLNFQDy_.js";import Mt from"./move-cq6Rbtl0.js";import{_ as zt}from"./edit.vue_vue_type_script_setup_true_lang-DIJPcR24.js";import{I as Kt}from"./index-LB7-EXu2.js";import{L as Lt}from"./index-DccyryB8.js";import{S as Rt}from"./index-DyMK9WKq.js";import{S as Vt}from"./index-35BfIC0c.js";import{T as Ut}from"./index-B7Cyio1B.js";import{C as Gt}from"./index-tMpZz9fP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CzBgriim.js";import"./image-DdIZ-ren.js";import"./config-Cv3T-q4V.js";import"./index-CJyYWuBS.js";import"./index-COraBd8H.js";import"./observe-CfjnoQGd.js";import"./log-ZJhmUOBa.js";import"./close-circle-filled-DvQn5h9G.js";import"./useCommonClassName-L0zFrjWC.js";import"./index-SrsdP8h4.js";import"./useDefaultValue-BDK8TpyG.js";import"./useVModel-mAS2bV03.js";import"./dep-86139c71-Cql-Ebvf.js";import"./number-D-1MGlkC.js";import"./dep-d524834c-s9Vwwbzr.js";import"./index-xCgMvBgb.js";import"./index-DV6htPKJ.js";import"./index-CpVXpLih.js";import"./dep-96cefb8b-EGQiC2Rs.js";import"./useResizeObserver-C76GXHCj.js";import"./chevron-left-C_o2bTlZ.js";import"./browse-Cwmf87g2.js";import"./delete-OKWC_lpC.js";import"./dep-1858b432-DjAV0It-.js";import"./search-14eQaQIM.js";import"./index-BRgKdtyr.js";import"./helper-DuXnSC7u.js";import"./index-B9NUVFix.js";import"./chevron-right-7vJVdvaT.js";import"./slot-Wx8ivmZH.js";import"./index-OA6mVsn4.js";import"./dep-af55fe23-U_tvYUrP.js";import"./index-m1SedByb.js";import"./common-CF_MvV9u.js";import"./useReadonly-P1VyeMVt.js";import"./tree-store-BiQ5vlTd.js";import"./dep-eedf0c29-xQnwgY39.js";import"./dep-6f8c2110-CYZdOZC2.js";import"./dep-40320ba3-B1Ayvxeb.js";import"./useVirtualScrollNew-JCNs8cdS.js";import"./dep-02de0cb4-DlXaPlFV.js";import"./dep-4cc4ef27-CCky-4wQ.js";import"./index-CGpzlmyY.js";import"./useLengthLimit-Drp21OsL.js";import"./const-DCUPODAK.js";import"./index-BL0Sakdl.js";import"./index-CknG8Rj8.js";import"./index-DBJlBd1d.js";import"./index-D7A4xZ_W.js";import"./index-CpsbnJvy.js";import"./index-D2-a2ZeP.js";import"./index-DXOBqNco.js";import"./form-model-9h0QNqcJ.js";import"./browse-WZ845bVH.js";import"./delete-BjSeOAbg.js";import"./multiply-s0AQPpVk.js";import"./image-error-Ci8U6bwz.js";import"./add-CfTQQWjf.js";import"./index-BdGTSLMf.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var Ht={closeBtn:{type:[String,Boolean,Function],default:void 0},content:{type:[String,Function]},default:{type:[String,Function]},duration:{type:Number,default:3e3},footer:{type:[String,Function]},icon:{type:[Boolean,Function],default:!0},theme:{type:String,default:"info",validator:function(t){return t?["info","success","warning","error"].includes(t):!0}},title:{type:[String,Function]},onCloseBtnClick:Function,onDurationEnd:Function};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var Jt=6e3,w="16px",at={"top-left":{left:w,top:w},"top-right":{right:w,top:w},"bottom-right":{right:w,bottom:w},"bottom-left":{left:w,bottom:w}},it=Object.keys(at);/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var ct={duration:200,easing:"linear"},Qt=function(t,e){if(t){var n=(t==null?void 0:t.offsetHeight)||0,c=(t==null?void 0:t.offsetWidth)||0,f=Zt(e,c,n);f&&t.animate&&t.animate(f,ct)}},q=function(t,e,n){if(t){var c=(t==null?void 0:t.offsetHeight)||0,f=(t==null?void 0:t.offsetWidth)||0,s=qt(e,f,c);if(!s)return n();var u=t.animate&&t.animate(s,ct);u?u.onfinish=function(){n()}:(t.style.display="none",n())}},Zt=function(t,e,n){if(!it.includes(t))return null;if(t==="top-right")return[{opacity:0,transform:"translateX(".concat(e,"px)")},{opacity:1,transform:"translateX(0px)"}];if(t==="bottom-right")return[{opacity:0,transform:"translateX(".concat(e,"px)"),marginBottom:"-".concat(n,"px")},{opacity:1,transform:"translateX(0px)"}];if(t==="top-left")return[{opacity:0,transform:"translateX(-".concat(e,"px)")},{opacity:1,transform:"translateX(0px)"}];if(t==="bottom-left")return[{opacity:0,transform:"translateX(-".concat(e,"px)"),marginBottom:"-".concat(n,"px")},{opacity:1,transform:"translateX(0px)"}]},qt=function(t,e,n){if(!it.includes(t))return null;if(t==="top-right")return[{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:"translateX(".concat(e,"px)"),marginBottom:"-".concat(n,"px")}];if(t==="bottom-right")return[{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:"translateX(".concat(e,"px)")}];if(t==="top-left")return[{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:"translateX(-".concat(e,"px)"),marginBottom:"-".concat(n,"px")}];if(t==="bottom-left")return[{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:"translateX(-".concat(e,"px)")}]};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function Y(o,t){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);t&&(n=n.filter(function(c){return Object.getOwnPropertyDescriptor(o,c).enumerable})),e.push.apply(e,n)}return e}function W(o){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Y(Object(e),!0).forEach(function(n){H(o,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):Y(Object(e)).forEach(function(n){Object.defineProperty(o,n,Object.getOwnPropertyDescriptor(e,n))})}return o}var Yt=G({name:"TNotification",props:W(W({},Ht),{},{placement:String}),setup:function(t,e){var n=e.slots,c=e.expose,f=ot("notification"),s=ft("classPrefix"),u=s.classPrefix,_=pt({InfoCircleFilledIcon:dt,CheckCircleFilledIcon:mt,CloseIcon:vt}),O=_.InfoCircleFilledIcon,x=_.CheckCircleFilledIcon,v=_.CloseIcon,k=ht(),B=bt(),I=b(null),h=b(null),g=function(a){var m=h.value;q(m,t.placement,function(){var j;(j=t.onCloseBtnClick)===null||j===void 0||j.call(t,{e:a})})},i=function(){var a;if(t.icon===!1)return null;if(_t(t.icon))a=t.icon(Ct);else if(n.icon)a=n.icon(null);else if(t.theme){var m=t.theme==="success"?l(x,{class:"".concat(u.value,"-is-").concat(t.theme)},null):l(O,{class:"".concat(u.value,"-is-").concat(t.theme)},null);a=l("div",{class:"".concat(u.value,"-notification__icon")},[m])}return a},y=function(){var a=l(v,null,null);return l("span",{class:"".concat(u.value,"-message__close"),onClick:g},[k("closeBtn",a)])},E=function(){return l("div",{class:"".concat(f.value,"__content")},[B("default","content")])},$=function(){t.duration&&clearTimeout(I.value)},M=function(){t.duration&&(I.value=Number(setTimeout(function(){$();var a=h.value;q(a,t.placement,function(){var m;(m=t.onDurationEnd)===null||m===void 0||m.call(t)})},t.duration)))};return gt(function(){t.duration&&M()}),yt(function(){var r=h.value;Qt(r,t.placement)}),c({close:g}),function(){return l("div",{ref:h,class:"".concat(f.value),onMouseenter:$,onMouseleave:M},[i(),l("div",{class:"".concat(f.value,"__main")},[l("div",{class:"".concat(f.value,"__title__wrap")},[l("span",{class:"".concat(f.value,"__title")},[k("title")]),y()]),E(),k("footer")])])}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function tt(o,t){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);t&&(n=n.filter(function(c){return Object.getOwnPropertyDescriptor(o,c).enumerable})),e.push.apply(e,n)}return e}function R(o){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?tt(Object(e),!0).forEach(function(n){H(o,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):tt(Object(e)).forEach(function(n){Object.defineProperty(o,n,Object.getOwnPropertyDescriptor(e,n))})}return o}var Wt=G({props:{placement:{type:String,default:"top-right",validator:function(t){return["top-left","top-right","bottom-left","bottom-right"].indexOf(t)>-1}}},setup:function(t,e){var n=e.expose,c=ot("notification-list"),f=t.placement,s=b([]),u=b([]),_=rt(function(){return R({zIndex:Jt},at[f])}),O=function(i){return s.value.push(i),s.value.length-1},x=function(i){s.value.splice(i,1)},v=function(){s.value=[]},k=function(i){if(i)return isNaN(Number(i))?i:"".concat(i,"px")},B=function(i){var y={marginBottom:w};return i.offset&&(y.position="relative",y.left=k(i.offset[0]),y.top=k(i.offset[1])),i.zIndex&&(y["z-index"]=i.zIndex),y},I=function(i,y){return R(R({},y),{},{onCloseBtnClick:function($){return y.onCloseBtnClick&&y.onCloseBtnClick($),x(i)},onDurationEnd:function(){return y.onDurationEnd&&y.onDurationEnd(),x(i)}})},h=function(i){i&&u.value.push(i)};return n({add:O,remove:x,removeAll:v,list:s,notificationList:u}),function(){if(s.value.length)return l("div",{class:"".concat(c.value,"__show"),style:_.value},[s.value.map(function(g,i){return l(Yt,Ot({ref:h,key:g.id,style:B(g)},I(i,g)),null)})])}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function et(o,t){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);t&&(n=n.filter(function(c){return Object.getOwnPropertyDescriptor(o,c).enumerable})),e.push.apply(e,n)}return e}function U(o){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?et(Object(e),!0).forEach(function(n){H(o,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):et(Object(e)).forEach(function(n){Object.defineProperty(o,n,Object.getOwnPropertyDescriptor(e,n))})}return o}var nt=0,T=new Map,te=function(t){nt+=1;var e=U({placement:"top-right",zIndex:6e3,attach:"body",id:nt},t);e.content=t.content?t.content:"";var n=xt(e.attach);T.get(n)||T.set(n,{});var c=T.get(n)[e.placement];if(c)c.add(e);else{var f=document.createElement("div"),s=wt(Wt,{placement:e.placement}).mount(f);s.add(e),T.get(n)[e.placement]=s,c=s,n.appendChild(s.$el)}return new Promise(function(u){var _=T.get(n)[e.placement];V(function(){var O=_.notificationList;u(O==null?void 0:O.find(function(x){var v;return((v=x.$)===null||v===void 0||(v=v.vnode)===null||v===void 0?void 0:v.key)===e.id}))})})},F=function(t,e){var n=U(U({},e),{},{theme:t});return te(n)},L={info:function(t){return F("info",t)},success:function(t){return F("success",t)},warning:function(t){return F("warning",t)},error:function(t){return F("error",t)},close:function(t){t.then(function(e){return e.close()})},closeAll:function(){T.forEach(function(t){Object.keys(t).forEach(function(e){t[e].removeAll()})})}},S=F;S.install=function(o){o.config.globalProperties.$notify=F,Object.keys(L).forEach(function(t){o.config.globalProperties.$notify[t]=L[t]})};Object.keys(L).forEach(function(o){S[o]=L[o]});const ee=[{title:"排序",colKey:"drag",width:"40px",cell:o=>o(Mt),align:"center",ellipsis:!0},{title:"分类名称",align:"left",colKey:"name",filter:{type:"input",resetValue:"",confirmEvents:["onEnter"],props:{placeholder:"输入关键词搜索"},showConfirmAndReset:!0},ellipsis:!0},{title:"商品数量",colKey:"goods_count",ellipsis:!0},{title:"状态",colKey:"status",ellipsis:!0},{title:"创建时间",colKey:"create_at",cell(o,t){return o("span",Xt(t.row.create_at))}},{align:"left",colKey:"operation",title:"操作",fixed:"right",ellipsis:!0}],ne={name:"GoodsCategory"},xn=G({...ne,setup(o){const t=kt(),e=Pt(),n=St({name:"",status:""}),c=b({defaultPageSize:20,total:0,defaultCurrent:1}),f=b([]),s=b(!1),u=async()=>{s.value=!0;const r={page:c.value.defaultCurrent,limit:c.value.defaultPageSize,...n};try{const{data:a}=await Nt(r);f.value=a.list,c.value={...c.value,total:a.total}}catch{}finally{s.value=!1}};u();const _=b([]),O=r=>{_.value=r},x=(r,a)=>{c.value.defaultCurrent=r.current,c.value.defaultPageSize=r.pageSize,u()},v=b(),k=async r=>{var a,m;await V(),(a=v.value)==null||a.open("edit"),(m=v.value)==null||m.getDetail(r)},B=async()=>{var r;await V(),(r=v.value)==null||r.open("add")},I=async r=>{const a=$t({header:"提醒？",body:`是否确认删除(${r.name})？`,confirmBtn:"确认",onConfirm:()=>{a.hide();const{id:m}=r;Tt({ids:[m]}).then(P=>{P.code===1?(u(),S.success({title:"提醒",content:"删除成功"})):S.success({title:"提醒",content:`删除失败：${P.msg}`})}).catch(()=>{S.success({title:"提醒",content:"删除失败"})})},onClose:()=>{a.hide()}})},h=async r=>{try{const a=await Ft(r);a.code===1?S.success({title:"提醒",content:"修改成功"}):S.error({title:"提醒",content:`修改失败：${a.msg}`})}catch{S.error({title:"提醒",content:"修改失败"})}u()},g=Z(async r=>{const{id:a,status:m}=r;h({id:a,field:"status",value:m})}),i=Z(async r=>{const a={id:r.id,field:"is_show",value:r.is_show};h(a)}),y=r=>{if(r.currentIndex-r.targetIndex>0){const a={id:r.current.id,field:"sort",value:r.target.sort+1};h(a)}else{const a={id:r.current.id,field:"sort",value:r.target.sort-1};h(a)}},E=b(null),$=r=>{E.value=r,n.name=r==null?void 0:r.name,n.status=r==null?void 0:r.status,u()},M=rt(()=>({offsetTop:t.isUseTabsRouter?48:0,container:`.${At}-layout`}));return(r,a)=>{const m=Kt,j=Dt,P=Lt,J=Rt,Q=Vt,lt=jt("wp-image"),st=Ut,ut=Gt,z=It("perms");return A(),X(ut,{title:"商品分类",class:"basic-container",bordered:!1},{default:d(()=>[l(st,{data:f.value,class:"basic-table","drag-sort":"row-handler",columns:D(ee),"row-key":"id","vertical-align":"middle",hover:f.value.length>0,"selected-row-keys":_.value,loading:s.value,"lazy-load":"","header-affixed-top":M.value,"max-height":"100%",pagination:c.value,"filter-value":E.value,onDragSort:y,onPageChange:x,onSelectChange:O,onFilterChange:$,"table-layout":"auto"},{topContent:d(()=>[K((A(),X(j,{class:"mb15",onClick:a[0]||(a[0]=p=>B())},{icon:d(()=>[l(m,{name:"add"})]),default:d(()=>[N(" 添加分类 ")]),_:1})),[[z,["adminapi/goods/category/add"]]])]),goods_count:d(({row:p})=>[l(J,null,{default:d(()=>[l(P,{size:"small",theme:"primary",onClick:C=>D(e).push(`/admin/goods/index?cate_id=${p.id}`)},{default:d(()=>[N(Et(p.goods_count),1)]),_:2},1032,["onClick"])]),_:2},1024)]),status:d(({row:p})=>[l(Q,{modelValue:p.status,"onUpdate:modelValue":C=>p.status=C,"custom-value":[1,0],onClick:C=>D(g)(p)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),is_show:d(({row:p})=>[l(Q,{modelValue:p.is_show,"onUpdate:modelValue":C=>p.is_show=C,"custom-value":[1,0],onClick:C=>D(i)(p)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),image:d(({row:p})=>[l(lt,{src:p.image,style:{width:"60px",height:"60px"}},null,8,["src"])]),operation:d(({row:p})=>[l(J,null,{default:d(()=>[l(P,{size:"small",theme:"primary",hover:"color",onClick:C=>D(e).push(`/admin/goods/add?cate_id=${p.id}`)},{default:d(()=>[N("添加商品")]),_:2},1032,["onClick"]),K((A(),X(P,{size:"small",theme:"primary",hover:"color",onClick:C=>D(e).push(`/admin/goods/card?cate_id=${p.id}`)},{default:d(()=>[N("库存卡")]),_:2},1032,["onClick"])),[[z,["adminapi/goods/card"]]]),K((A(),X(P,{size:"small",theme:"primary",hover:"color",onClick:C=>k(p)},{default:d(()=>[N("编辑")]),_:2},1032,["onClick"])),[[z,["adminapi/goods/category/edit"]]]),K((A(),X(P,{size:"small",theme:"danger",hover:"color",onClick:C=>I(p)},{default:d(()=>[N("删除")]),_:2},1032,["onClick"])),[[z,["adminapi/goods/category/del"]]])]),_:2},1024)]),empty:d(()=>[l(Bt,{title:"",tip:"商品分类为空",type:"list"})]),_:1},8,["data","columns","hover","selected-row-keys","loading","header-affixed-top","pagination","filter-value"]),l(zt,{ref_key:"editRef",ref:v,onSuccess:u},null,512)]),_:1})}}});export{xn as default};
