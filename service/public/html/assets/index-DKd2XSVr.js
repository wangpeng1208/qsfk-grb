import{W as J,X as q,Y as me,Z as H,_ as w,$ as re,d as W,e as be,a0 as ye,C as R,G as he,a1 as ue,l as $,a as k,a2 as Ce,Q as ie,a3 as Pe,a4 as Ve,N as G,a5 as U,E as oe,a6 as _e,a7 as Se,O as Ie,a8 as se,a9 as Oe,U as K,aa as Ne,T as ke,r as xe,ab as Te,F as je,ac as Ee,L as we,ad as ce}from"./index-Bbii3Das.js";import{a as Fe}from"./index-m1SedByb.js";import{c as $e}from"./chevron-right-7vJVdvaT.js";import{S as Ae,F as Le}from"./index-D7A4xZ_W.js";import{T as De}from"./tree-store-BiQ5vlTd.js";import{u as Me}from"./useVModel-mAS2bV03.js";import{u as ze}from"./useDefaultValue-BDK8TpyG.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function ee(a){var e=a.value,n=a.multiple,t=a.treeStore,u=a.showAllLevels;if(n||e!==0&&!e||J(e))return"";var l=t&&t.getNodes(e);if(!(l&&l.length))return e;var i=l&&l[0].getPath();return i&&i.length?u?i.map(function(d){return d.label}).join(" / "):i[i.length-1].label:e}function Be(a){var e=a.value,n=a.multiple,t=a.treeStore,u=a.showAllLevels;if(!n)return[];if(n&&!J(e))return[];var l=t&&t.getNodes(e);return l?e.map(function(i){var d,v=t.getNodes(i);return u?X(v[0]):(d=v[0])===null||d===void 0?void 0:d.label}).filter(function(i){return!!i}):[]}function de(a){var e=[];return a.forEach(function(n){e[n.level]?e[n.level].push(n):e[n.level]=[n]}),e}function X(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"/";return a==null?void 0:a.getPath().map(function(n){return n.label}).join(e)}var fe=function(e){var n=[];return J(e)?e.length>0&&H(e[0])?n=e.map(function(t){return t.value}):e.length&&(n=e):Q(e)||(H(e)?n=[e.value]:n=[e]),n},Re=function(e,n,t){return n==="single"?e:t?e.map(function(u){return u[u.length-1]}):e[e.length-1]};function Q(a){return q(a)&&!isNaN(a)?!1:me(a)}function Je(a,e){var n=e.multiple,t=e.showAllLevels;return n&&!J(a)||!n&&J(a)&&!t}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function Ke(a,e,n){var t=n.disabled;return["".concat(a,"-cascader__icon"),w({},e.disabled,t)]}function ve(a,e,n){var t=n.checkStrictly,u=n.multiple,l=n.value,i=n.max,d=!t&&a.expanded&&(u?!a.isLeaf():!0)||t&&a.expanded,v=a.isLeaf(),f=a.disabled||u&&l.length>=i&&i!==0,C=a.checked||u&&!t&&a.expanded&&!v;return[w(w(w({},e.selected,!f&&C),e.expanded,!f&&d),e.disabled,f)]}function Xe(a,e,n,t,u){var l=u.size;return["".concat(a,"-cascader__item")].concat(re(ve(e,t,u)),[n[l],w(w({},"".concat(a,"-cascader__item--with-icon"),!!e.children),"".concat(a,"-cascader__item--leaf"),e.isLeaf())])}function Ge(a,e,n,t){return["".concat(a,"-cascader__item-icon"),"".concat(a,"-icon")].concat(re(ve(e,n,t)))}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function Ue(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!Pe(a)}var Ze={node:{type:Object,default:function(){return{}}},optionChild:{type:[Object,Array]},cascaderContext:{type:Object},onChange:Function,onClick:Function,onMouseenter:Function},We=W({name:"TCascaderItem",props:Ze,setup:function(e){var n=be();ye(n);var t=R("cascader__item"),u=R(),l=he({ChevronRightIcon:$e}),i=l.ChevronRightIcon,d=ue(),v=d.STATUS,f=d.SIZE,C=$(function(){return Xe(u.value,e.node,f.value,v.value,e.cascaderContext)}),p=$(function(){return Ge(u.value,e.node,v.value,e.cascaderContext)});function o(r,s){var g=s.inputVal,N=g?X(r):r.label;if(g){for(var y=N.split(g),x=[],T=0;T<y.length&&(x.push(k("span",{key:T},[y[T]])),T!==y.length-1);T++)x.push(k("span",{key:"".concat(T,"filter"),class:"".concat(t.value,"-label--filter")},[g]));return x}return N}function b(r,s){var g=o(r,s),N=k("span",{title:s.inputVal?X(r):r.label,class:["".concat(t.value,"-label"),"".concat(t.value,"-label--ellipsis")],role:"label"},[g]);return N}function c(r,s){var g=s.checkProps,N=s.value,y=s.max,x=s.inputVal,T=o(r,s);return k(Fe,ie({checked:r.checked,indeterminate:r.indeterminate,disabled:r.isDisabled()||N.length>=y&&y!==0,name:String(r.value),stopLabelTrigger:!!r.children,title:x?X(r):r.label,onChange:function(){e.onChange()}},g),Ue(T)?T:{default:function(){return[T]}})}return function(){var r=e.cascaderContext,s=e.node,g=e.optionChild,N=g&&r.multiple;return k("li",{ref:n,class:C.value,onClick:function(){return N?e.onChange():e.onClick()},onMouseenter:e.onMouseenter},[g||(r.multiple?c(s,r):b(s,r)),s.children&&(s.loading?k(Ce,{class:p.value,size:"small"},null):k(i,{class:p.value},null))])}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var A={autofocus:Boolean,borderless:Boolean,checkProps:{type:Object},checkStrictly:Boolean,clearable:Boolean,collapsedItems:{type:Function},disabled:{type:Boolean,default:void 0},empty:{type:[String,Function]},filter:{type:Function},filterable:Boolean,inputProps:{type:Object},keys:{type:Object},label:{type:[String,Function]},lazy:{type:Boolean,default:!0},load:{type:Function},loading:Boolean,loadingText:{type:[String,Function]},max:{type:Number,default:0},minCollapsedNum:{type:Number,default:0},multiple:Boolean,option:{type:Function},options:{type:Array,default:function(){return[]}},panelBottomContent:{type:[String,Function]},panelTopContent:{type:[String,Function]},placeholder:{type:String,default:void 0},popupProps:{type:Object},popupVisible:Boolean,prefixIcon:{type:Function},readonly:Boolean,reserveKeyword:Boolean,selectInputProps:{type:Object},showAllLevels:{type:Boolean,default:!0},size:{type:String,default:"medium",validator:function(e){return e?["large","medium","small"].includes(e):!0}},status:{type:String,default:"default",validator:function(e){return e?["default","success","warning","error"].includes(e):!0}},suffix:{type:[String,Function]},suffixIcon:{type:Function},tagInputProps:{type:Object},tagProps:{type:Object},tips:{type:[String,Function]},trigger:{type:String,default:"click",validator:function(e){return e?["click","hover"].includes(e):!0}},value:{type:[String,Number,Array],default:void 0},modelValue:{type:[String,Number,Array],default:void 0},defaultValue:{type:[String,Number,Array],default:function(){return[]}},valueDisplay:{type:[String,Function]},valueMode:{type:String,default:"onlyLeaf",validator:function(e){return e?["onlyLeaf","parentFirst","all"].includes(e):!0}},valueType:{type:String,default:"single",validator:function(e){return e?["single","full"].includes(e):!0}},onBlur:Function,onChange:Function,onFocus:Function,onPopupVisibleChange:Function,onRemove:Function};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function qe(a,e,n,t){var u=t.checkStrictly,l=t.multiple,i=t.treeStore,d=t.setVisible,v=t.setValue,f=t.setTreeNodes,C=t.setExpend,p=t.value,o=t.max,b=t.valueType,c=n.disabled||l&&p.length>=o&&o!==0;if(!c){if(a===e){var r=n.setExpanded(!0);i.refreshNodes(),i.replaceExpanded(r);var s=i.getNodes().filter(function(x){return x.visible});f(s),l&&C(r)}if(!l&&(n.isLeaf()||u)&&e==="click"){i.resetChecked();var g=n.setChecked(!n.checked),N=U(g,1),y=N[0];v(b==="single"?y:n.getPath().map(function(x){return x.value}),"check",n.getModel()),u||d(!1,{})}}}function Qe(a,e){var n=e.disabled,t=e.max,u=e.inputVal,l=e.multiple,i=e.setVisible,d=e.setValue,v=e.treeNodes,f=e.treeStore,C=e.valueType;if(!(!a||n||a.disabled)){var p=a.setChecked(!a.isChecked());if(q(t)&&t<0&&console.warn("TDesign Warn:","max should > 0"),!(p.length>t&&q(t)&&t>0)){if(p.length===0){var o=f.getExpanded();setTimeout(function(){f.replaceExpanded(o),f.refreshNodes()},0)}l||i(!1,{});var b=v.every(function(r){return p.indexOf(r.value)>-1});u&&b&&i(!1,{});var c=C==="single"?p:p.map(function(r){return f.getNode(r).getPath().map(function(s){return s.value})});d(c,a.checked?"uncheck":"check",a.getModel())}}}function Ye(a){var e=a.setVisible,n=a.multiple,t=a.setValue;e(!1,{}),t(n?[]:"","clear")}function te(a,e,n){var t=a.disabled,u=a.setValue,l=a.value,i=a.valueType,d=a.treeStore;if(!t)if(e!==void 0){var v=Ve(l),f=v.splice(e,1),C=d.getNodes(f[0])[0],p=C.setChecked(!C.isChecked()),o=i==="single"?p:p.map(function(b){return d.getNode(b).getPath().map(function(c){return c.value})});u(o,"uncheck",C.getModel()),G(n)&&n({value:p,node:C})}else G(n)&&n({value:l,node:void 0})}var He=function(e,n,t,u){if(n){var l=[];if(e){var i=function(v){if(v.isLeaf()){if(G(u))return u("".concat(e),v);var f=X(v,"");return f.indexOf("".concat(e))>-1}};l=n.nodes.filter(i)}else l=n.getNodes().filter(function(d){return d.visible});t(l)}},et=function(e,n,t){var u=fe(n);if(e){if(J(u)&&t.length===0){var l=new Map,i=U(u,1),d=i[0];if(!Q(d)){l.set(d,!0);var v=e.getNode(d);if(!v){e.refreshNodes();return}v.getParents().forEach(function(C){l.set(C.value,!0)});var f=Array.from(l.keys());e.replaceExpanded(f)}}e.getExpanded()&&t.length&&e.replaceExpanded(t),e.refreshNodes()}};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var pe=W({name:"TCascaderSubPanel",props:{option:A.option,empty:A.empty,trigger:A.trigger,onChange:A.onChange,loading:A.loading,loadingText:A.loadingText,cascaderContext:{type:Object}},setup:function(e){var n=_e(),t=R("cascader"),u=oe("cascader"),l=u.globalConfig,i=$(function(){return de(e.cascaderContext.treeNodes)}),d=function(o,b){var c=e.trigger,r=e.cascaderContext;qe(c,b,o,r)},v=function(o,b){var c=o.data.content?Se(o.data.content(Ie)):n("option",{params:{item:o.data,index:b}});return k(We,{key:o.value,node:o,optionChild:c,cascaderContext:e.cascaderContext,onClick:function(){d(o,"click")},onMouseenter:function(){d(o,"hover")},onChange:function(){Qe(o,e.cascaderContext)}},null)},f=function(o){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;return k("ul",{class:["".concat(t.value,"__menu"),"narrow-scrollbar",w(w({},"".concat(t.value,"__menu--segment"),c),"".concat(t.value,"__menu--filter"),b)],key:"".concat(t,"__menu").concat(r)},[o.map(function(s){return v(s,r)})])},C=function(){var o=e.cascaderContext,b=o.inputVal,c=o.treeNodes;return b?f(c,!0):i.value.map(function(r,s){return f(r,!1,s!==i.value.length-1,s)})};return function(){var p;return e.loading?p=n("loadingText",k("div",{class:"".concat(t.value,"__panel--empty")},[l.value.loadingText])):p=i.value.length?C():n("empty",k("div",{class:"".concat(t.value,"__panel--empty")},[l.value.empty])),k("div",{class:["".concat(t.value,"__panel"),w({},"".concat(t.value,"--normal"),i.value.length&&!e.loading)]},[p])}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function ae(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter(function(u){return Object.getOwnPropertyDescriptor(a,u).enumerable})),n.push.apply(n,t)}return n}function Z(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ae(Object(n),!0).forEach(function(t){w(a,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(n,t))})}return a}var tt=function(e,n,t,u){var l=xe({treeStore:null,inputVal:null,scopeVal:void 0,treeNodes:[],expend:[]});return{statusContext:l,cascaderContext:$(function(){var i=e.size,d=e.checkStrictly,v=e.lazy,f=e.multiple,C=e.filterable,p=e.clearable,o=e.checkProps,b=e.max,c=e.disabled,r=e.showAllLevels,s=e.minCollapsedNum,g=e.valueType;return Z(Z({value:l.scopeVal,size:i,checkStrictly:d,lazy:v,multiple:f,filterable:C,clearable:p,checkProps:o,max:b,disabled:c,showAllLevels:r,minCollapsedNum:s,valueType:g,visible:t.value},l),{},{setTreeNodes:function(y){l.treeNodes=y},setValue:function(y,x,T){Te(y,l.scopeVal)||n(y,{source:x,node:T})},setVisible:u,setInputVal:function(y){l.inputVal=y},setExpend:function(y){l.expend=y}})})}},ge=function(e){var n=se(),t=Oe(e),u=t.value,l=t.modelValue,i=t.popupVisible,d=Me(u,l,e.defaultValue,e.onChange),v=U(d,2),f=v[0],C=v[1],p=ze(i,!1,e.onPopupVisibleChange,"popupVisible"),o=U(p,2),b=o[0],c=o[1],r=tt(e,C,b,c),s=r.cascaderContext,g=r.statusContext,N=$(function(){return!!(e.filterable||G(e.filter))}),y=function(){var V=s.value,_=V.inputVal,j=V.treeStore,h=V.setTreeNodes;He(_,j,h,e.filter)},x=function(){var V=s.value,_=V.value,j=V.treeStore,h=g.expend;et(j,_,h),j.replaceChecked(fe(_))};K(function(){return e.options},function(){var P=e.options,V=e.keys,_=V===void 0?{}:V,j=e.checkStrictly,h=e.lazy,S=e.load,L=e.valueMode,F=g.treeStore;if(!(!P.length&&!F)){if(F)F.reload(P),F.refreshNodes();else{var D=new De({keys:Z(Z({},_),{},{children:Ne(_.children)?_.children:"children"}),checkable:!0,expandMutex:!0,expandParent:!0,lazy:h,load:S,valueMode:L,checkStrictly:j,onLoad:function(){ke(function(){D.refreshNodes(),y()})}});D.append(P),g.treeStore=D}x(),y()}},{immediate:!0,deep:!0}),K(function(){var P=e.checkStrictly,V=e.lazy,_=e.load,j=e.valueMode;return JSON.stringify({valueMode:j,checkStrictly:P,lazy:V,load:_})},function(){var P=g.treeStore;if(P){var V=e.checkStrictly,_=e.lazy,j=e.load,h=e.valueMode,S={checkStrictly:V,disabled:n,load:j,lazy:_,valueMode:h};P.setConfig(S)}},{immediate:!0}),K(f,function(){var P=s.value,V=P.setValue,_=P.multiple,j=P.valueType;Je(f.value,s.value)?V(_?[]:"","invalid-value"):g.scopeVal=_?[]:"",Q(f)||(g.scopeVal=Re(f.value,j,_)),g.treeStore&&(x(),y())},{immediate:!0}),K(function(){return b.value&&N.value},function(P){var V=s.value.setInputVal;P&&V("")}),K(function(){return g.inputVal},function(){y()});var T=function(V){var _=[];return V.forEach(function(j){var h,S=(h=g.treeStore)===null||h===void 0?void 0:h.getNodes(j);S&&S[0]&&_.push(S[0].data)}),_};return{cascaderContext:s,isFilterable:N,innerValue:f,getCascaderItems:T}};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function ne(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter(function(u){return Object.getOwnPropertyDescriptor(a,u).enumerable})),n.push.apply(n,t)}return n}function B(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ne(Object(n),!0).forEach(function(t){w(a,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(n,t))})}return a}var at=W({name:"TCascader",props:B({},A),setup:function(e,n){var t=n.slots,u=se(),l=R("cascader"),i=R(),d=ue(),v=d.STATUS,f=R("cascader__popup"),C=oe("cascader"),p=C.globalConfig,o=we(),b=ge(e),c=b.cascaderContext,r=b.innerValue,s=b.isFilterable,g=b.getCascaderItems,N=$(function(){return e.multiple?Be(c.value):ee(c.value)}),y=$(function(){return de(c.value.treeNodes)}),x=$(function(){var h;return c.value.visible&&!e.multiple&&ee(c.value)||((h=e.placeholder)!==null&&h!==void 0?h:p.value.placeholder)}),T=function(){if(e.suffixIcon||t.suffixIcon)return o("suffixIcon");var S=c.value,L=S.visible,F=S.disabled;return k(Le,{overlayClassName:Ke(i.value,v.value,c.value),isActive:L,disabled:F},null)},P=$(function(){var h=r.value instanceof Array?r.value:[r.value],S=e.multiple&&e.minCollapsedNum?h.slice(0,e.minCollapsedNum):r.value,L=g(h);return{value:r.value,selectedOptions:L,onClose:function(D){te(c.value,D,e.onRemove)},displayValue:S}}),V=function(){return o("valueDisplay",{params:P.value})},_=function(){var S=o("label");return e.multiple?S:S?k("div",{class:"".concat(i.value,"-tag-input__prefix")},[S]):null},j=$(function(){return[l.value,e.multiple?"".concat(l.value,"--multiple"):"".concat(l.value,"--single")]});return function(){var h,S=c.value,L=S.setVisible,F=S.visible,D=S.inputVal,Y=S.setInputVal;return k(Ae,ie({class:j.value,value:N.value,inputValue:F?D:"",popupVisible:F,keys:e.keys,allowInput:s.value,"min-collapsed-num":e.minCollapsedNum,"collapsed-items":e.collapsedItems,readonly:e.readonly,disabled:e.disabled,clearable:e.clearable,placeholder:x.value,multiple:e.multiple,loading:e.loading,status:e.status,tips:e.tips,borderless:e.borderless,label:_,valueDisplay:V,prefixIcon:e.prefixIcon,suffix:e.suffix,suffixIcon:function(){return T()},popupProps:B(B({},e.popupProps),{},{overlayInnerStyle:y.value.length&&!e.loading?{width:"auto"}:"",overlayClassName:[f.value,(h=e.popupProps)===null||h===void 0?void 0:h.overlayClassName]}),inputProps:B({size:e.size},e.inputProps),tagInputProps:B({size:e.size},e.tagInputProps),tagProps:B({},e.tagProps),onInputChange:function(E,O){var m,I;s.value&&(Y("".concat(E)),e==null||(m=e.selectInputProps)===null||m===void 0||(I=m.onInputChange)===null||I===void 0||I.call(m,E,O))},onTagChange:function(E,O){var m,I;O.trigger!=="enter"&&(te(c.value,O.index,e.onRemove),e==null||(m=e.selectInputProps)===null||m===void 0||(I=m.onTagChange)===null||I===void 0||I.call(m,E,O))},onPopupVisibleChange:function(E,O){var m,I;u.value||(L(E,O),e==null||(m=e.selectInputProps)===null||m===void 0||(I=m.onPopupVisibleChange)===null||I===void 0||I.call(m,E,O))},onBlur:function(E,O){var m,I,z;(m=e.onBlur)===null||m===void 0||m.call(e,{value:c.value.value,inputValue:O.inputValue||"",e:O.e}),e==null||(I=e.selectInputProps)===null||I===void 0||(z=I.onBlur)===null||z===void 0||z.call(I,E,O)},onFocus:function(E,O){var m,I,z;(m=e.onFocus)===null||m===void 0||m.call(e,{value:c.value.value,e:O.e}),e==null||(I=e.selectInputProps)===null||I===void 0||(z=I.onFocus)===null||z===void 0||z.call(I,E,O)},onClear:function(E){var O,m;Ye(c.value),e==null||(O=e.selectInputProps)===null||O===void 0||(m=O.onClear)===null||m===void 0||m.call(O,E)}},Ee(e.selectInputProps,["onTagChange","onInputChange","onPopupVisibleChange","onBlur","onFocus","onClear"])),{label:t.label,suffix:t.suffix,prefixIcon:t.prefixIcon,panel:function(){return k(je,null,[o("panelTopContent"),k(pe,{option:e.option,empty:e.empty,visible:F,trigger:e.trigger,loading:e.loading,loadingText:e.loadingText,cascaderContext:c.value},{option:t.option,empty:t.empty,loadingText:t.loadingText}),o("panelBottomContent")])},collapsedItems:t.collapsedItems})}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function le(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter(function(u){return Object.getOwnPropertyDescriptor(a,u).enumerable})),n.push.apply(n,t)}return n}function nt(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?le(Object(n),!0).forEach(function(t){w(a,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(n,t))})}return a}var lt=W({name:"TCascaderPanel",props:nt({},A),setup:function(e,n){var t=n.slots,u=ge(e),l=u.cascaderContext;return function(){return k(pe,{trigger:e.trigger,cascaderContext:l.value,empty:e.empty},{empty:t.empty,option:t.option,loadingText:t.loadingText})}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var ft=ce(at);ce(lt);export{ft as C};