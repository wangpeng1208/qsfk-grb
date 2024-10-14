import{d as K,l as f,ax as Y,ay as Z,az as ee,a9 as fe,a5 as be,e as R,a8 as ye,_ as I,U as M,G as ge,a as h,B as W,Q as he,L as pe,ad as we}from"./index-Bl4AiOyE.js";import{I as Ne}from"./index-CLnbRl90.js";import{u as Oe,a as Ce}from"./useCommonClassName-B8MbwXBA.js";import{u as Pe}from"./useVModel-HmF1Gebj.js";import{u as Ie}from"./useReadonly-DZtTxOfz.js";import{a as Se,b as je,l as G,g as D,f as z,d as Ve,e as xe,h as _e,i as Fe,c as Re}from"./number-jGqlEXl8.js";function q(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,l)}return n}function J(e){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?q(Object(n),!0).forEach(function(l){ee(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}var De={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17.5 15.91l-5.5-5.5-5.5 5.5-1.41-1.41L12 7.59l6.91 6.91-1.41 1.41z"}}]},ze=K({name:"ChevronUpIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:n}=a,l=f(()=>e.size),{className:s,style:y}=Y(l),N=f(()=>["t-icon","t-icon-chevron-up",s.value]),O=f(()=>J(J({},y.value),n.style)),C=f(()=>({class:N.value,style:O.value,onClick:o=>{var b;return(b=e.onClick)===null||b===void 0?void 0:b.call(e,{e:o})}}));return()=>Z(De,C.value)}});function X(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,l)}return n}function H(e){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?X(Object(n),!0).forEach(function(l){ee(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}var Ke={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 11h16v2H4v-2z"}}]},Ee=K({name:"RemoveIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:n}=a,l=f(()=>e.size),{className:s,style:y}=Y(l),N=f(()=>["t-icon","t-icon-remove",s.value]),O=f(()=>H(H({},y.value),n.style)),C=f(()=>({class:N.value,style:O.value,onClick:o=>{var b;return(b=e.onClick)===null||b===void 0?void 0:b.call(e,{e:o})}}));return()=>Z(Ke,C.value)}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var $e={align:{type:String,validator:function(a){return a?["left","center","right"].includes(a):!0}},allowInputOverLimit:{type:Boolean,default:!0},autoWidth:Boolean,decimalPlaces:{type:[String,Object],default:void 0},disabled:{type:Boolean,default:void 0},format:{type:Function},inputProps:{type:Object},label:{type:[String,Function]},largeNumber:Boolean,max:{type:[String,Number],default:1/0},min:{type:[String,Number],default:-1/0},placeholder:{type:String,default:void 0},readonly:{type:Boolean,default:void 0},size:{type:String,default:"medium",validator:function(a){return a?["small","medium","large"].includes(a):!0}},status:{type:String,default:"default",validator:function(a){return a?["default","success","warning","error"].includes(a):!0}},step:{type:[String,Number],default:1},suffix:{type:[String,Function]},theme:{type:String,default:"row",validator:function(a){return a?["column","row","normal"].includes(a):!0}},tips:{type:[String,Function]},value:{type:[String,Number],default:void 0},modelValue:{type:[String,Number],default:void 0},defaultValue:{type:[String,Number]},onBlur:Function,onChange:Function,onEnter:Function,onFocus:Function,onKeydown:Function,onKeypress:Function,onKeyup:Function,onValidate:Function};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function ke(e){var a=Oe(),n=a.classPrefix,l=a.sizeClassNames,s=a.statusClassNames,y=fe(e),N=y.value,O=y.modelValue,C=y.max,o=y.min,b=Pe(N,O,e.defaultValue,e.onChange),S=be(b,2),d=S[0],v=S[1],p=R(),m=R(""),P=ye(),x=Ie(),E=R(),$=f(function(){return P.value||!Se(d.value,e.min,e.largeNumber)}),k=f(function(){return P.value||!je(d.value,e.max,e.largeNumber)}),ae=f(function(){return["".concat(n.value,"-input-number"),l[e.size],I(I(I(I({},s.disabled,P.value),"".concat(n.value,"-is-controls-right"),e.theme==="column"),"".concat(n.value,"-input-number--").concat(e.theme),e.theme),"".concat(n.value,"-input-number--auto-width"),e.autoWidth)]}),ne=f(function(){return["".concat(n.value,"-input-number__decrease"),I({},s.disabled,$.value)]}),re=f(function(){return["".concat(n.value,"-input-number__increase"),I({},s.disabled,k.value)]}),j=function(u){var r;if(!u&&u!==0)return"";var t=u||u===0?String(u):"";if(!((r=p.value)!==null&&r!==void 0&&(r=r.inputRef)!==null&&r!==void 0&&r.contains(document.activeElement))){var i=z(t,{decimalPlaces:e.decimalPlaces,largeNumber:e.largeNumber,isToFixed:!0});t=i||i===0?String(i):"",e.format&&(t=String(e.format(u,{fixedNumber:t})))}return t};M(d,function(c){var u=e.largeNumber,r=e.decimalPlaces,t=[void 0,null].includes(c)?"":String(c);if(!u&&!Number.isNaN(m.value)){parseFloat(m.value)!==c&&(m.value=j(t));var i=Number(G(t,r,u));r!==void 0&&![void 0,null].includes(c)&&Number(i)!==Number(d.value)&&v(i,{type:"props",e:void 0})}u&&(m.value=j(t),r!==void 0&&G(t,r,u)!==c&&v(m.value,{type:"props",e:void 0}))},{immediate:!0}),M([d,C,o],function(){var c;if(![void 0,"",null].includes(d.value)){var u=e.max,r=e.min,t=e.largeNumber,i=D({value:d.value,largeNumber:t,max:u,min:r});E.value=i,(c=e.onValidate)===null||c===void 0||c.call(e,{error:i})}},{immediate:!0});var B=function(u){var r=Fe({op:u,step:e.step,max:e.max,min:e.min,lastValue:d.value,largeNumber:e.largeNumber}),t=e.largeNumber,i=e.max,g=e.min,w=D({value:r,largeNumber:t,max:i,min:g});return{overLimit:w,newValue:r}},A=function(u){if(!($.value||x.value)){var r=B("reduce");r.overLimit&&!e.allowInputOverLimit||v(r.newValue,{type:"reduce",e:u})}},L=function(u){if(!(k.value||x.value)){var r=B("add");r.overLimit&&!e.allowInputOverLimit||v(r.newValue,{type:"add",e:u})}},te=function(u,r){var t=r.e,i=Ve(u);if(xe(i,e.largeNumber)){if(m.value=i,e.largeNumber){v(i,{type:"input",e:t});return}if(_e(String(i),Number(d.value))){var g=i===""?void 0:Number(i);v(g,{type:"input",e:t})}}},le=function(u,r){var t,i=e.largeNumber,g=e.max,w=e.min,me=e.decimalPlaces;if(!e.allowInputOverLimit&&d.value!==void 0){var T=D({value:d.value,largeNumber:i,max:g,min:w});if(T==="below-minimum"){var _;v(w,{type:"blur",e:r.e}),(_=e.onBlur)===null||_===void 0||_.call(e,w,r);return}if(T==="exceed-maximum"){var F;v(g,{type:"blur",e:r.e}),(F=e.onBlur)===null||F===void 0||F.call(e,g,r);return}}var V=z(u,{decimalPlaces:me,largeNumber:i});m.value=j(V),V!==d.value&&v(V,{type:"blur",e:r.e}),(t=e.onBlur)===null||t===void 0||t.call(e,V,r)},ue=function(u,r){var t;m.value=d.value||d.value===0?String(d.value):"",(t=e.onFocus)===null||t===void 0||t.call(e,u,r)},ie=function(u,r){var t;if(!P.value){var i=r.e,g={ArrowUp:L,ArrowDown:A},w=i.code||i.key;g[w]!==void 0&&g[w](i),(t=e.onKeydown)===null||t===void 0||t.call(e,u,r)}},oe=function(u,r){var t;(t=e.onKeyup)===null||t===void 0||t.call(e,u,r)},ce=function(u,r){var t;(t=e.onKeypress)===null||t===void 0||t.call(e,u,r)},se=function(u,r){var t;m.value=j(u);var i=z(u,{decimalPlaces:e.decimalPlaces,largeNumber:e.largeNumber});i!==u&&String(i)!==u&&v(i,{type:"enter",e:r.e}),(t=e.onEnter)===null||t===void 0||t.call(e,i,r)},U=function(){p.value.focus()},de=function(){p.value.blur()},ve={onBlur:le,onFocus:ue,onKeydown:ie,onKeyup:oe,onKeypress:ce,onEnter:se,onClick:U};return{classPrefix:n,wrapClasses:ae,reduceClasses:ne,addClasses:re,tDisabled:P,isError:E,listeners:ve,userInput:m,tValue:d,inputRef:p,focus:U,blur:de,handleReduce:A,handleAdd:L,onInnerInputChange:te,isReadonly:x}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function Q(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,l)}return n}function Be(e){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?Q(Object(n),!0).forEach(function(l){I(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}var Ae=K({name:"TInputNumber",props:$e,setup:function(a,n){var l=pe(),s=ge({AddIcon:Ce,RemoveIcon:Ee,ChevronDownIcon:Re,ChevronUpIcon:ze}),y=s.AddIcon,N=s.RemoveIcon,O=s.ChevronDownIcon,C=s.ChevronUpIcon,o=ke(a),b=o.inputRef;return n.expose(Be({},o)),function(){var S=a.theme==="column"?h(O,{size:a.size},null):h(N,{size:a.size},null),d=a.theme==="column"?h(C,{size:a.size},null):h(y,{size:a.size},null),v=o.isError.value?"error":a.status,p=o.classPrefix.value,m=l("tips");return h("div",{class:o.wrapClasses.value},[a.theme!=="normal"&&h(W,{class:o.reduceClasses.value,disabled:o.tDisabled.value,onClick:o.handleReduce,variant:"outline",shape:"square",icon:function(){return S}},null),h(Ne,he({ref:b,disabled:o.tDisabled.value,readonly:o.isReadonly.value,autocomplete:"off",placeholder:a.placeholder,unselectable:o.isReadonly.value?"on":"off",autoWidth:a.autoWidth,align:a.align||(a.theme==="row"?"center":void 0),status:v,label:a.label,suffix:a.suffix},o.listeners,a.inputProps,{value:o.userInput.value,onChange:o.onInnerInputChange}),n.slots),a.theme!=="normal"&&h(W,{class:o.addClasses.value,disabled:o.tDisabled.value,onClick:o.handleAdd,variant:"outline",shape:"square",icon:function(){return d}},null),m&&h("div",{class:"".concat(p,"-input__tips ").concat(p,"-tips ").concat(p,"-is-").concat(v)},[m])])}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var qe=we(Ae);export{qe as I,ze as c};