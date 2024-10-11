import{_ as A,r as b}from"./dep-86139c71-C0IAGQhw.js";import{d as ke,E as De,G as qe,an as We,C as re,l as y,_ as V,X as Fe,e as L,at as ve,a9 as Ee,r as Pe,v as xe,a4 as He,as as Ue,U as Ie,au as _e,a as C,ao as ce,L as Ae,I as Ke,av as Ge,W as Ce,T as Xe,aa as Je,N as ee,a5 as Me,aw as Ye,Y as ze,ad as Re}from"./index-DyfhlEKp.js";import{s as je,v as Qe}from"./form-model-Ba97jzoW.js";import{i as Ve}from"./dep-40320ba3-B1Ayvxeb.js";import{u as Te,F as Ne,V as D,a as Ze}from"./const-BpWshxEh.js";import{c as er}from"./close-circle-filled-VWO7_lX7.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var rr={for:{type:String,default:""},help:{type:[String,Function]},label:{type:[String,Function],default:""},labelAlign:{type:String,validator:function(e){return e?["left","right","top"].includes(e):!0}},labelWidth:{type:[String,Number]},name:{type:String,default:""},requiredMark:{type:Boolean,default:void 0},rules:{type:Array},showErrorMessage:{type:Boolean,default:void 0},status:{type:String,default:""},statusIcon:{type:[Boolean,Function],default:void 0},successBorder:Boolean,tips:{type:[String,Function]}};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function ar(v,e){return v.replace(/\${(.*?)}/g,function(f,c){return e[c.trim()]||""})}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function Le(v,e){var f=Object.keys(v);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(v);e&&(c=c.filter(function(E){return Object.getOwnPropertyDescriptor(v,E).enumerable})),f.push.apply(f,c)}return f}function Oe(v){for(var e=1;e<arguments.length;e++){var f=arguments[e]!=null?arguments[e]:{};e%2?Le(Object(f),!0).forEach(function(c){V(v,c,f[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(f)):Le(Object(f)).forEach(function(c){Object.defineProperty(v,c,Object.getOwnPropertyDescriptor(f,c))})}return v}function Be(v,e){return e?"".concat(v,"__").concat(e).replace(/(\[|\]\.)/g,"_"):""}var tr=ke({name:"TFormItem",props:Oe({},rr),setup:function(e,f){var c=f.slots,E=Ae(),p=Te(),fe=De("form"),Y=fe.globalConfig,R=qe({CheckCircleFilledIcon:Ke,CloseCircleFilledIcon:er,ErrorCircleFilledIcon:Ge}),k=R.CheckCircleFilledIcon,F=R.CloseCircleFilledIcon,de=R.ErrorCircleFilledIcon,r=We(Ne,void 0),ae=re(),te=re("form-item"),me=y(function(){var t,l,a=(t=(l=e.requiredMark)!==null&&l!==void 0?l:r==null?void 0:r.requiredMark)!==null&&t!==void 0?t:Y.value.requiredMark,d=K.value.filter(function(o){return o.required}).length>0;return a??d}),ne=y(function(){return c.label||e.label}),ge=y(function(){return!!(r!=null&&r.colon&&ne.value)}),x=re("form__label"),q=y(function(){return Ve(e.labelAlign)?r==null?void 0:r.labelAlign:e.labelAlign}),S=y(function(){return Ve(e.labelWidth)?r==null?void 0:r.labelWidth:e.labelWidth}),pe=y(function(){return[p.value.label,V(V(V(V({},"".concat(x.value,"--required"),me.value),"".concat(x.value,"--top"),ne.value&&(q.value==="top"||!S.value)),"".concat(x.value,"--left"),q.value==="left"&&S.value),"".concat(x.value,"--right"),q.value==="right"&&S.value)]}),ye=function(){if(Number(S.value)!==0){var l={};return S.value&&q.value!=="top"&&(Fe(S.value)?l={width:"".concat(S.value,"px")}:l={width:S.value}),C("div",{class:pe.value,style:l},[C("label",{for:e.for||null},[E("label")]),ge.value&&Y.value.colonText])}},le=function(){var l=function(h){return C("span",{class:p.value.status},[C(h,null,null)])},a=I.value;if($.value===D.SUCCESS)return l(k);if(a!=null&&a[0]){var d=a[0].type||"error",o={error:F,warning:de}[d]||k;return l(o)}return null},ue=function(){var l=e.statusIcon;if(l!==!1){var a=E("statusIcon",{defaultNode:le()});if(a)return C("span",{class:p.value.status},[a]);if(a!==!1&&(a=r==null?void 0:r.renderContent("statusIcon",{defaultNode:le(),params:e}),a))return a}},be=y(function(){if(!_.value)return"";if($.value===D.SUCCESS)return e.successBorder?[p.value.success,p.value.successBorder].join(" "):p.value.success;if(I.value.length){var t=I.value[0].type||"error";return t==="error"?p.value.error:p.value.warning}}),H=y(function(){return[p.value.controls,be.value]}),ie=y(function(){var t={};return S.value&&q.value!=="top"&&(Fe(S.value)?t={marginLeft:"".concat(S.value,"px")}:t={marginLeft:S.value}),t}),I=L([]),U=L([]),$=L(D.TO_BE_VALIDATED),z=L(!1),Q=L(!1),T=function(){Q.value=!1,I.value=[],U.value=[],$.value=D.TO_BE_VALIDATED},he=function(){var l=Object.prototype.toString.call(ve(r==null?void 0:r.data,e.name)),a;return l==="[object String]"&&(a=""),l==="[object Array]"&&(a=[]),l==="[object Object]"&&(a={}),a},Se=function(){var t=A(b.mark(function l(){var a,d=arguments;return b.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:if(a=d.length>0&&d[0]!==void 0?d[0]:r==null?void 0:r.resetType,e.name){O.next=3;break}return O.abrupt("return");case 3:return a==="empty"?je(r==null?void 0:r.data,e.name,he()):a==="initial"&&je(r==null?void 0:r.data,e.name,w.value),O.next=6,Xe();case 6:z.value?Q.value=!0:T();case 7:case"end":return O.stop()}},l)}));return function(){return t.apply(this,arguments)}}(),se=y(function(){var t;return(t=r==null?void 0:r.errorMessage)!==null&&t!==void 0?t:Y.value.errorMessage}),K=y(function(){var t;if((t=e.rules)!==null&&t!==void 0&&t.length)return e.rules;if(!e.name)return[];var l="".concat(e.name).lastIndexOf(".")||-1,a="".concat(e.name).slice(l+1);return ve(r==null?void 0:r.rules,e.name)||ve(r==null?void 0:r.rules,a)||[]}),g=function(){var t=A(b.mark(function l(a){var d,o;return b.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(o={successList:[],errorList:[],rules:[],resultList:[],allowSetValue:!1},o.rules=a==="all"?K.value:K.value.filter(function(m){return(m.trigger||"change")===a}),!(K.value.length&&!((d=o.rules)!==null&&d!==void 0&&d.length))){h.next=4;break}return h.abrupt("return",o);case 4:return o.allowSetValue=!0,h.next=7,Qe(i.value,o.rules);case 7:return o.resultList=h.sent,o.errorList=o.resultList.filter(function(m){return m.result!==!0}).map(function(m){return Object.keys(m).forEach(function(X){if(!m.message&&se.value[X]){var oe=Je(e.label)?e.label:e.name;m.message=ar(se.value[X],{name:oe,validate:m[X]})}}),m}),o.successList=o.resultList.filter(function(m){return m.result===!0&&m.message&&m.type==="success"}),h.abrupt("return",o);case 11:case"end":return h.stop()}},l)}));return function(a){return t.apply(this,arguments)}}(),n=function(){var t=A(b.mark(function l(a,d){var o,O,h,m,X,oe;return b.wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return z.value=!0,W.value=d,J.next=4,g(a);case 4:return o=J.sent,O=o.successList,h=o.errorList,m=o.rules,X=o.resultList,oe=o.allowSetValue,oe&&(U.value=O,I.value=h),m.length&&($.value=h.length?D.FAIL:D.SUCCESS),Q.value&&T(),z.value=!1,J.abrupt("return",V({},e.name,h.length===0?!0:X));case 15:case"end":return J.stop()}},l)}));return function(a,d){return t.apply(this,arguments)}}(),u=function(){var t=A(b.mark(function l(a){var d,o,O;return b.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,g(a);case 2:return d=m.sent,o=d.errorList,O=d.resultList,m.abrupt("return",V({},e.name,o.length===0?!0:O));case 6:case"end":return m.stop()}},l)}));return function(a){return t.apply(this,arguments)}}(),s=function(l){!l&&!Ce(l)||(l.length===0&&(I.value=[],$.value=D.SUCCESS),I.value=l.map(function(a){return Oe(Oe({},a),{},{result:!1})}),$.value=D.FAIL)},i=y(function(){return(r==null?void 0:r.data)&&ve(r==null?void 0:r.data,e.name)}),w=L(void 0),M=Ee(e),P=M.name,N=Pe({name:P,resetHandler:T,resetField:Se,validate:n,validateOnly:u,setValidateMessage:s});xe(function(){w.value=He(i.value),r==null||r.children.push(N)}),Ue(function(){r&&(r.children=r==null?void 0:r.children.filter(function(t){return t!==N}))}),Ie(i,A(b.mark(function t(){return b.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n("change");case 2:case"end":return a.stop()}},t)})),{deep:!0}),Ie(function(){return[e.name,JSON.stringify(e.rules)].join(",")},function(){n("change")});var W=L(void 0),_=y(function(){return _e(W.value)?W.value:_e(e.showErrorMessage)?e.showErrorMessage:r==null?void 0:r.showErrorMessage}),j=y(function(){return[p.value.formItem,Be(te.value,e.name),V(V({},p.value.formItemWithHelp,Z.value),p.value.formItemWithExtra,we.value)]}),Z=y(function(){var t=E("help");return t?C("div",{class:p.value.help},[t]):null}),we=y(function(){var t,l=function(o){return C("div",{class:p.value.extra,title:o},[o])},a=I.value;return _.value&&a!==null&&a!==void 0&&(t=a[0])!==null&&t!==void 0&&t.message?l(a[0].message):U.value.length?l(U.value[0].message):null}),B=y(function(){var t=E("tips");if(!t)return null;var l=["".concat(te.value,"-tips"),"".concat(ae.value,"-tips"),"".concat(ae.value,"-is-").concat(e.status||"default")];return C("div",{class:l},[t])}),G=function(){var t=A(b.mark(function l(){return b.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n("blur");case 2:case"end":return d.stop()}},l)}));return function(){return t.apply(this,arguments)}}();return ce(Ze,{handleBlur:G}),function(){return C("div",{class:j.value},[ye(),C("div",{class:H.value,style:ie.value},[C("div",{class:p.value.controlsContent},[E("default"),ue()]),Z.value,B.value,we.value])])}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var nr={colon:Boolean,data:{type:Object,default:function(){return{}}},disabled:{type:Boolean,default:void 0},errorMessage:{type:Object},formControlledComponents:{type:Array},id:{type:String,default:void 0},labelAlign:{type:String,default:"right",validator:function(e){return e?["left","right","top"].includes(e):!0}},labelWidth:{type:[String,Number],default:"100px"},layout:{type:String,default:"vertical",validator:function(e){return e?["vertical","inline"].includes(e):!0}},preventSubmitDefault:{type:Boolean,default:!0},readonly:{type:Boolean,default:void 0},requiredMark:{type:Boolean,default:void 0},resetType:{type:String,default:"empty",validator:function(e){return e?["empty","initial"].includes(e):!0}},rules:{type:Object},scrollToFirstError:{type:String,validator:function(e){return e?["","smooth","auto"].includes(e):!0}},showErrorMessage:{type:Boolean,default:!0},statusIcon:{type:[Boolean,Function],default:void 0},submitWithWarningMessage:Boolean,onReset:Function,onSubmit:Function,onValidate:Function};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function $e(v,e){var f=Object.keys(v);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(v);e&&(c=c.filter(function(E){return Object.getOwnPropertyDescriptor(v,E).enumerable})),f.push.apply(f,c)}return f}function lr(v){for(var e=1;e<arguments.length;e++){var f=arguments[e]!=null?arguments[e]:{};e%2?$e(Object(f),!0).forEach(function(c){V(v,c,f[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(f)):$e(Object(f)).forEach(function(c){Object.defineProperty(v,c,Object.getOwnPropertyDescriptor(f,c))})}return v}var ur=ke({name:"TForm",props:lr({},nr),setup:function(e,f){var c=f.expose,E=Ae(),p=Ee(e),fe=p.disabled,Y=p.readonly;ce("formDisabled",{disabled:fe}),ce("formReadonly",{readonly:Y});var R=L(null),k=L([]),F=Ee(e),de=F.showErrorMessage,r=F.labelWidth,ae=F.labelAlign,te=F.data,me=F.colon,ne=F.requiredMark,ge=F.rules,x=F.errorMessage,q=F.resetType;ce(Ne,Pe({showErrorMessage:de,labelWidth:r,labelAlign:ae,data:te,colon:me,requiredMark:ne,rules:ge,errorMessage:x,resetType:q,children:k,renderContent:E}));var S=re("form"),pe=Te(),ye=y(function(){return[pe.value.form,V({},"".concat(S.value,"-inline"),e.layout==="inline")]}),le=re("form-item"),ue=function(n){if(_e(n))return"";var u=Object.keys(n),s=Me(u,1),i=s[0];if(e.scrollToFirstError){var w=Be(le.value,i);be(w)}var M=n[i];return Ce(M)?M.filter(function(P){return!P.result})[0].message:""},be=function(n){var u=R.value.getElementsByClassName(n),s=Me(u,1),i=s[0],w=e.scrollToFirstError;w&&i&&i.scrollIntoView({behavior:w})},H=function(n,u){return!u||!Ce(u)?!0:u.indexOf("".concat(n))!==-1},ie=function(n){var u=n.reduce(function(s,i){return Object.assign(s||{},i)},{});return Object.keys(u).forEach(function(s){u[s]===!0&&delete u[s]}),ze(u)?!0:u},I=function(){var g=A(b.mark(function n(u){var s,i,w,M,P,N,W,_,j,Z;return b.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return i=u||{},w=i.fields,M=i.trigger,P=M===void 0?"all":M,N=i.showErrorMessage,W=k.value.filter(function(G){return ee(G.validate)&&H(String(G.name),w)}).map(function(G){return G.validate(P,N)}),B.next=4,Promise.all(W);case 4:return _=B.sent,j=ie(_),Z=ue(j),(s=e.onValidate)===null||s===void 0||s.call(e,{validateResult:j,firstError:Z}),B.abrupt("return",j);case 9:case"end":return B.stop()}},n)}));return function(u){return g.apply(this,arguments)}}(),U=function(){var g=A(b.mark(function n(u){var s,i,w,M,P,N;return b.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return s=u||{},i=s.fields,w=s.trigger,M=w===void 0?"all":w,P=k.value.filter(function(j){return ee(j.validateOnly)&&H(String(j.name),i)}).map(function(j){return j.validateOnly(M)}),_.next=4,Promise.all(P);case 4:return N=_.sent,_.abrupt("return",ie(N));case 6:case"end":return _.stop()}},n)}));return function(u){return g.apply(this,arguments)}}(),$=L(),z=function(n){e.preventSubmitDefault&&n&&(n.preventDefault(),n.stopPropagation()),I($.value).then(function(u){var s;(s=e.onSubmit)===null||s===void 0||s.call(e,{validateResult:u,firstError:ue(u),e:n})}),$.value=void 0},Q=function(){var g=A(b.mark(function n(u){return b.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:$.value=u,Ye(R.value);case 2:case"end":return i.stop()}},n)}));return function(u){return g.apply(this,arguments)}}(),T=L(),he=function(n){var u;e.preventSubmitDefault&&n&&(n.preventDefault(),n.stopPropagation()),k.value.filter(function(s){var i;return ee(s.resetField)&&H(String(s.name),(i=T.value)===null||i===void 0?void 0:i.fields)}).forEach(function(s){var i;return s.resetField((i=T.value)===null||i===void 0?void 0:i.type)}),T.value=void 0,(u=e.onReset)===null||u===void 0||u.call(e,{e:n})},Se=function(n){T.value=n,R.value.reset()},se=function(n){k.value.forEach(function(u){ee(u.resetHandler)&&H(String(u.name),n)&&u.resetHandler()})},K=function(n){var u=Object.keys(n);if(u.length){var s=k.value.filter(function(i){return ee(i.setValidateMessage)&&u.includes("".concat(i.name))}).map(function(i){return i.setValidateMessage(n[i.name])});Promise.all(s)}};return c({validate:I,submit:Q,reset:Se,clearValidate:se,setValidateMessage:K,validateOnly:U}),function(){return C("form",{ref:R,class:ye.value,onSubmit:function(n){return z(n)},onReset:function(n){return he(n)}},[E("default")])}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var mr=Re(ur),gr=Re(tr);export{gr as F,mr as a};
