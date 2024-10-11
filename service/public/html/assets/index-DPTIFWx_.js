import{d as D,C as j,a1 as Z,c3 as _e,an as Ne,l as R,e as L,U,_ as v,a as o,P as Pe,a0 as Ae,G as te,J as Re,v as ne,T as X,a5 as re,aT as we,N as Ie,O as Le,bp as Y,a9 as xe,ao as Ee,Q,L as je,W as ke,ad as le}from"./index-DyfhlEKp.js";import{d as ue}from"./dep-96cefb8b-B7fBVahI.js";import{u as We}from"./useResizeObserver-Cdm0ScvH.js";import{a as pe}from"./useListener--fx8F2h_.js";import{c as Be}from"./chevron-left-DYfq66NB.js";import{c as De}from"./chevron-right-Cq7dXvRT.js";import{a as Me}from"./useCommonClassName-DmyQvkIn.js";import{u as ze}from"./useVModel-CsuQbcSh.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var F={default:{type:Function},destroyOnHide:{type:Boolean,default:!0},disabled:Boolean,draggable:{type:Boolean,default:!0},label:{type:[String,Function]},lazy:Boolean,panel:{type:[String,Function]},removable:Boolean,value:{type:[String,Number]},onRemove:Function};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function $(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),a.push.apply(a,n)}return a}function Ve(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?$(Object(a),!0).forEach(function(n){v(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):$(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}var ie=D({name:"TTabPanel",props:Ve({},F),setup:function(e){var a=j("tab-panel"),n=Z(),l=n.STATUS,d=Pe();_e();var s=Ne("tabs"),u=R(function(){return e.value===s.value.value}),r=L(e.lazy?u.value:!0);U(u,function(){u.value?r.value||(r.value=!0):e.destroyOnHide&&(r.value=!1)},{immediate:!0});var i=R(function(){return[a.value,v({},l.value.hidden,!u.value)]});return function(){return r.value?o("div",{class:i.value},[d("default","panel")]):null}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var P={action:{type:[String,Function]},addable:Boolean,disabled:Boolean,dragSort:Boolean,list:{type:Array},placement:{type:String,default:"top",validator:function(e){return e?["left","top","bottom","right"].includes(e):!0}},scrollPosition:{type:String,default:"auto",validator:function(e){return e?["auto","start","center","end"].includes(e):!0}},size:{type:String,default:"medium",validator:function(e){return e?["medium","large"].includes(e):!0}},theme:{type:String,default:"normal",validator:function(e){return e?["normal","card"].includes(e):!0}},value:{type:[String,Number],default:void 0},modelValue:{type:[String,Number],default:void 0},defaultValue:{type:[String,Number]},onAdd:Function,onChange:Function,onDragSort:Function,onRemove:Function};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var E=function(e){return(e==null?void 0:e.offsetWidth)||0},Fe=function(e){return(e==null?void 0:e.offsetLeft)||0};function Ue(t,e,a){var n=t.navsContainer,l=t.activeTab,d=t.rightOperations,s=t.leftOperations,u=E(l),r=E(n),i=Fe(l),f=E(d),C=E(s);if(a==="auto"){if(i-C<e)return i-C;if(i+u>e+r-f)return i+u-r+f}else{if(a==="start")return i-C;if(a==="center")return i+(u-r)/2;if(a==="end")return i+u-r+f}return e}function He(t,e,a){var n=t.navsContainer,l=t.activeTab,d=E(n),s=E(l);return a==="next"?e+d-s:e-d+s}function Ge(t){var e=t.navsWrap,a=t.navsContainer,n=t.rightOperations,l=t.toRightBtn,d=E(e),s=E(a),u=E(n),r=E(l);return d-s+u-r}function Xe(t,e){return Math.max(0,Math.min(t,e))}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var Ze=D({name:"TTabNavItem",props:{index:Number,active:{type:Boolean},theme:P.theme,size:P.size,placement:P.placement,label:{type:null},disabled:F.disabled,removable:F.removable,value:F.value,onClick:Function,onRemove:Function},setup:function(e){var a=L();Ae(a);var n=j("tabs__nav-item"),l=te({CloseIcon:Re}),d=l.CloseIcon,s=j(),u=Z(),r=u.STATUS,i=u.SIZE,f=function(O){var T=O.e;T&&T.stopPropagation(),e.onRemove({e:T,value:e.value,index:e.index})},C=function(O){e.disabled||e.onClick(O)},g=R(function(){return v(v(v(v(v(v(v(v({},n.value,!0),"".concat(s.value,"-tabs__nav--card"),e.theme==="card"),r.value.disabled,e.disabled),r.value.active,e.active),"".concat(s.value,"-is-left"),e.placement==="left"),"".concat(s.value,"-is-right"),e.placement==="right"),i.value.medium,e.size==="medium"),i.value.large,e.size==="large")}),m=function(){return o("div",{class:g.value,onClick:C,ref:a},[o("span",{class:"".concat(n.value,"-text-wrapper")},[e.label]),e.removable&&!e.disabled?o(d,{class:"remove-btn",onClick:f},null):null])},_=function(){return o("div",{class:g.value,onClick:C},[o("div",{class:["".concat(n.value,"-wrapper"),v(v({},r.value.disabled,e.disabled),r.value.active,e.active)],ref:a},[o("span",{class:"".concat(n.value,"-text-wrapper")},[e.label])]),e.removable&&!e.disabled?o(d,{class:"remove-btn",onClick:f},null):null])};return function(){return e.theme==="card"?m():_()}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var Je=D({props:{navs:{type:Array},placement:P.placement,value:P.value},setup:function(e){var a=j("tabs"),n=j(),l=L(),d=R(function(){return["".concat(a.value,"__bar"),"".concat(n.value,"-is-").concat(e.placement)]}),s=L(null),u=function(){for(var f,C=["left","right"].includes(e.placement.toLowerCase()),g=C?["height","top"]:["width","left"],m=re(g,2),_=m[0],N=m[1],O=0,T=0;T<e.navs.length;T++){var y;if(e.navs[T].props.value===e.value)break;O+=((y=e.navs[T])===null||y===void 0||(y=y.el)===null||y===void 0||(y=y.getBoundingClientRect())===null||y===void 0?void 0:y[_])||0}return e.navs[T]?v(v({},N,"".concat(O,"px")),_,"".concat(((f=e.navs[T].el)===null||f===void 0||(f=f.getBoundingClientRect())===null||f===void 0?void 0:f[_])||0,"px")):{}},r=function(){return s.value=u()};return ne(function(){X(function(){r()})}),U([function(){return e.navs},function(){return e.value},function(){return e.placement}],function(){X(function(){r()})}),We(l,ue(function(){r()},20)),function(){return o("div",{class:d.value,style:s.value,ref:l},null)}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function Ke(t,e){var a=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=Ye(t))||e){a&&(t=a);var n=0,l=function(){};return{s:l,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(i){throw i},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d,s=!0,u=!1;return{s:function(){a=a.call(t)},n:function(){var i=a.next();return s=i.done,i},e:function(i){u=!0,d=i},f:function(){try{s||a.return==null||a.return()}finally{if(u)throw d}}}}function Ye(t,e){if(t){if(typeof t=="string")return q(t,e);var a={}.toString.call(t).slice(8,-1);return a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set"?Array.from(t):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?q(t,e):void 0}}function q(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,n=Array(e);a<e;a++)n[a]=t[a];return n}var oe=function(e,a){var n=Ke(e),l;try{for(n.s();!(l=n.n()).done;){var d=l.value;d.getAttribute("draggable")&&a(d)}}catch(s){n.e(s)}finally{n.f()}},ee=function(e,a){var n;return oe(a,function(l){l.contains(e)&&(n=l)}),n};function Qe(t){var e=null,a,n=[],l=function(g){var m=g.target;a=m,m.style.opacity="0.5"},d=function(g){g.target.style.opacity=""},s=function(g){g.preventDefault()},u=function(g){var m=ee(g.target,e.children);m&&m!==a&&m.draggable&&(m.firstChild.style.outline="1px dashed #0052d9",n.includes(m)||n.push(m))},r=function(g){for(var m=g.target,_=0,N=n;_<N.length;_++){var O=N[_];O.contains(m)||(O.firstChild.style.outline="none")}},i=function(g){g.preventDefault(),oe(e.children,function(h){h.firstChild.style.outline="none"});var m=ee(g.target,e.children);if(m&&m.parentNode!==a&&m.draggable){var _,N=[].indexOf.call(e.children,a),O=[].indexOf.call(e.children,m);O>N&&(m=e.children[O+1]);var T=t.theme==="card"?N:N-1,y=t.theme==="card"?O:O-1;(_=t.onDragSort)===null||_===void 0||_.call(t,{currentIndex:T,current:t.panels[T].value,targetIndex:y,target:t.panels[y].value})}};function f(C){e=C,e.addEventListener("dragstart",l,!1),e.addEventListener("dragend",d,!1),e.addEventListener("dragover",s,!1),e.addEventListener("dragenter",u,!1),document.addEventListener("dragleave",r,!1),document.addEventListener("mousemove",r,!1),e.addEventListener("drop",i,!1)}return we(function(){e.removeEventListener("dragstart",l),e.removeEventListener("dragend",d),e.removeEventListener("dragover",s),e.removeEventListener("dragenter",u),document.removeEventListener("dragleave",r),document.removeEventListener("mousemove",r),e.removeEventListener("drop",i)}),{setNavsWrap:f}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function ae(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),a.push.apply(a,n)}return a}function B(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?ae(Object(a),!0).forEach(function(n){v(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ae(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}var $e=D(B(B({name:"TTabNav"},{resizeObserver:null}),{},{props:{theme:P.theme,panels:{type:Array,default:function(){return[]}},action:Array,value:P.value,placement:P.placement,scrollPosition:P.scrollPosition,size:P.size,disabled:P.disabled,addable:P.addable,onChange:P.onChange,onAdd:P.onAdd,onRemove:P.onRemove,dragSort:P.dragSort,onDragSort:P.onDragSort},setup:function(e){var a=j("tabs"),n=te({ChevronLeftIcon:Be,ChevronRightIcon:De,AddIcon:Me}),l=n.ChevronLeftIcon,d=n.ChevronRightIcon,s=n.AddIcon,u=j(),r=Z(),i=r.SIZE,f=L(0),C=L(),g=L(),m=L(),_=L(),N=L(),O=L(),T=L(0),y=function(){return{navsContainer:C.value,navsWrap:g.value,leftOperations:m.value,rightOperations:_.value,toRightBtn:N.value,activeTab:O.value}},h=R(function(){return["left","right"].includes(e.placement.toLowerCase())}),S=R(function(){return f.value>1}),x=R(function(){return f.value<T.value-1}),W=R(function(){return h.value?{}:{transform:"translate3d(".concat(-f.value,"px, 0, 0)")}}),w=R(function(){return e.addable?{"min-height":"48px"}:null}),k=R(function(){return v(v(v({},"".concat(a.value,"__btn"),!0),i.value.medium,e.size==="medium"),i.value.large,e.size==="large")}),M=R(function(){return B(v({},"".concat(a.value,"__btn--left"),!0),k.value)}),z=R(function(){return B(v({},"".concat(a.value,"__btn--right"),!0),k.value)}),ve=R(function(){return B(v({},"".concat(a.value,"__add-btn"),!0),k.value)}),ce=R(function(){return v(v(v(v({},"".concat(a.value,"__nav-container"),!0),"".concat(a.value,"__nav--card"),e.theme==="card"),"".concat(u.value,"-is-").concat(e.placement),!0),"".concat(u.value,"-is-addable"),e.addable)}),de=R(function(){return v(v({},"".concat(a.value,"__nav-scroll"),!0),"".concat(u.value,"-is-scrollable"),S.value||x.value)}),se=R(function(){return["".concat(a.value,"__nav-wrap"),"".concat(u.value,"-is-smooth"),v({},"".concat(u.value,"-is-vertical"),h.value)]}),V=function(c){f.value=Xe(c,T.value)},J=function(c){V(He(y(),f.value,c))},fe=function(c){if(!(!S.value&&!x.value)){c.preventDefault();var A=c.deltaX,I=c.deltaY;Math.abs(A)>Math.abs(I)?V(f.value+A):V(f.value+I)}},H=function(){setTimeout(function(){V(Ue(y(),f.value,e.scrollPosition))},0)},G=function(){X(function(){T.value=Ge(y())})};U([function(){return e.placement},function(){return e.panels}],G),U([function(){return e.scrollPosition}],H),pe(ue(G),C.value);var me=function(c){var A;(A=e.onAdd)===null||A===void 0||A.call(e,{e:c})},be=function(c,A){var I=A.value,p=A.disabled;if(p||e.value===I)return!1;e.onChange(I)},ge=function(c){var A=c.e,I=c.value,p=c.index;e.onRemove({e:A,value:I,index:p})},he=function(c){c!=null&&c.$el&&(c==null?void 0:c.value)===e.value&&O.value!==c.$el&&(O.value=c.$el,H())},Ce=Qe(e),ye=Ce.setNavsWrap;ne(function(){ye(g.value),G(),H()});var K=R(function(){return e.panels.map(function(b,c){var A,I;b!=null&&(A=b.children)!==null&&A!==void 0&&A.label?I=b.children.label():Ie(b.label)?I=b.label(Le):I=b.label||"选项卡".concat(c+1);var p=e.dragSort;return p&&b.draggable===!1&&(p=b.draggable),o(Ze,{ref:he,draggable:p,key:b.value,index:c,theme:e.theme,size:e.size,placement:e.placement,label:I,active:b.value===e.value,disabled:e.disabled||b.disabled,removable:b.removable,value:b.value,onClick:function(Se){return be(Se,b)},onRemove:ge},null)})}),Oe=function(){return[o("div",{ref:m,class:["".concat(a.value,"__operations"),"".concat(a.value,"__operations--left")]},[o(Y,{name:"fade",mode:"out-in",appear:!0},{default:function(){return[S.value?o("div",{class:M.value,onClick:function(){return J("prev")}},[o(l,null,null)]):null]}})]),o("div",{ref:_,class:["".concat(a.value,"__operations"),"".concat(a.value,"__operations--right")]},[o(Y,{name:"fade",mode:"out-in",appear:!0},{default:function(){return[x.value?o("div",{ref:N,class:z.value,onClick:function(){return J("next")}},[o(d,null,null)]):null]}}),e.addable?o("div",{class:ve.value,onClick:me},[o(s,null,null)]):null,e.action])]},Te=function(){return o("div",{class:ce.value},[o("div",{class:de.value,onWheel:fe},[o("div",{ref:g,class:se.value,style:W.value},[e.theme!=="card"&&o(Je,{placement:e.placement,value:e.value,navs:K.value},null),K.value])])])};return function(){return o("div",{ref:C,class:["".concat(a.value,"__nav")],style:w.value},[Oe(),Te()])}}}));/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var qe=D({name:"TTabs",props:P,setup:function(e){var a=j("tabs"),n=j(),l=je(),d=xe(e),s=d.value,u=d.modelValue,r=ze(s,u,e.defaultValue||"",e.onChange),i=re(r,2),f=i[0],C=i[1];Ee("tabs",{value:f});var g=function(h){var S;(S=e.onAdd)===null||S===void 0||S.call(e,{e:h.e})},m=function(h){C(h)},_=function(h){var S,x=h.e,W=h.value,w=h.index;(S=e.onRemove)===null||S===void 0||S.call(e,{value:W,index:w,e:x})},N=function(){var h=l("default");if(!h)return[];var S=function(W){return W.map(function(w){return w.children&&ke(w.children)?S(w.children):w}).flat().filter(function(w){return w.type.name==="TTabPanel"})};return S(h)},O=function(){var h,S=((h=e.list)!==null&&h!==void 0&&h.length?e.list:N())||[],x=l("action"),W=S.map(function(k){var M=k;return k.props&&Object.keys(k.props).forEach(function(z){M[z]=k.props[z]}),M}),w={theme:e.theme,value:f.value,size:e.size,disabled:e.disabled,placement:e.placement,scrollPosition:e.scrollPosition,addable:e.addable,panels:W,dragSort:e.dragSort,action:x};return o("div",{class:v(v({},"".concat(n.value,"-tabs__header"),!0),"".concat(n.value,"-is-").concat(e.placement),!0)},[o($e,Q(w,{onDragSort:e.onDragSort,onChange:m,onAdd:g,onRemove:_}),null)])},T=function(){var h,S=N();if((h=e.list)!==null&&h!==void 0&&h.length)return e.list.map(function(x){return o(ie,Q(x,{onRemove:_}),null)});if(S&&S.length)return o("div",{class:["".concat(n.value,"-tabs__content")]},[S])};return function(){return o("div",{class:[a.value]},[e.placement!=="bottom"?[O(),T()]:[T(),O()]])}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var va=le(qe),ca=le(ie);export{ca as T,va as a};
