import{d as Y,l as j,C as pe,_ as G,a as i,Q as he,P as Oe,L as Ee,a5 as Be,ad as De,i as X,e as s,a9 as Me,o as n,c as B,w as g,b as J,M as x,B as ye,v as Fe,p as m,g as r,ae as ne,t as ge,n as P,u as K,F as ie,q as ue,af as H,h as Te,ag as Re,ah as _e,z as Je,A as Qe,U as He,ai as Xe}from"./index-Bbii3Das.js";import{b as Ze,a as je}from"./config-Cv3T-q4V.js";import{U as Ge}from"./index-CJyYWuBS.js";import Ke from"./search-14eQaQIM.js";import{I as Ye}from"./index-LB7-EXu2.js";import{D as qe}from"./index-BRgKdtyr.js";import{L as We}from"./index-DccyryB8.js";import{T as et}from"./index-OA6mVsn4.js";import{S as be}from"./index-DyMK9WKq.js";import{I as tt}from"./index-CGpzlmyY.js";import{I as ke}from"./index-SrsdP8h4.js";import{P as at}from"./index-BL0Sakdl.js";import{T as lt}from"./index-D2-a2ZeP.js";import{F as st,a as ot}from"./index-DXOBqNco.js";import{D as Se}from"./index-xCgMvBgb.js";import{_ as Ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import nt from"./browse-WZ845bVH.js";import it from"./delete-BjSeOAbg.js";import ut from"./multiply-s0AQPpVk.js";import rt from"./image-error-Ci8U6bwz.js";import dt from"./add-CfTQQWjf.js";import{I as ct}from"./index-COraBd8H.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var mt={color:{type:String,default:""},content:{type:[String,Function]},count:{type:[String,Number,Function],default:0},default:{type:[String,Function]},dot:Boolean,maxCount:{type:Number,default:99},offset:{type:Array},shape:{type:String,default:"circle",validator:function(d){return["circle","round"].includes(d)}},showZero:Boolean,size:{type:String,default:"medium",validator:function(d){return["small","medium"].includes(d)}}};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var vt=Y({name:"TBadge",inheritAttrs:!1,props:mt,setup:function(d,k){var U=k.attrs,N=Oe(),S=Ee(),p=j(function(){var c=S("count");return Number.isNaN(Number(c))?c:(c=Number(d.count),c>d.maxCount?"".concat(d.maxCount,"+"):c)}),V=function(){if(!d.offset)return{};var v=Be(d.offset,2),b=v[0],I=v[1];return b=Number.isNaN(Number(b))?b:"".concat(b,"px"),I=Number.isNaN(Number(I))?I:"".concat(I,"px"),{xOffset:b,yOffset:I}},C=pe(),y=pe("badge"),D=j(function(){return!d.showZero&&(p.value===0||p.value==="0")}),w=j(function(){return[G(G(G(G({},"".concat(y.value,"--dot"),!!d.dot),"".concat(y.value,"--circle"),!d.dot&&d.shape==="circle"),"".concat(y.value,"--round"),!d.dot&&d.shape==="round"),"".concat(C.value,"-size-s"),d.size==="small")]}),L=j(function(){var c=V(),v=c.xOffset,b=c.yOffset;return{background:d.color,right:v,top:b}});return function(){return i("div",he({class:y.value},U),[N("default","content"),D.value?null:i("sup",{class:w.value,style:L.value},[d.dot?null:p.value])])}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var ft=De(vt);function pt(t){return X.post({url:"/adminapi/upload/getCategoryList",params:t})}function gt(t){return X.post({url:"/adminapi/upload/createCategory",data:t})}function _t(t){return X.post({url:"/adminapi/upload/editCategory",data:t})}function ht(t){return X.post({url:"/adminapi/upload/fileList",params:t})}function yt(t){return X.post({url:"/adminapi/upload/fileUpdateApi",data:t})}const bt=Y({__name:"upload",props:{app:String,zft:String,data:{type:Object,default:()=>({})}},emits:["update"],setup(t,{emit:d}){const k=s([]),U=({file:v})=>{x.error(`文件 ${v.name} 上传失败`)},N=t,{app:S,zft:p}=Me(N),V=d,C=v=>v.code===0?(x.error(v.msg),null):(V("update"),v.data),y=s();(()=>{switch(S.value){case"admin":y.value=`${Ze}${je}`;break}})();const w=localStorage.getItem(S.value),{accessToken:L}=JSON.parse(w),c=s({});return S.value!==void 0&&(c.value={Authorization:`Bearer ${L}`}),(v,b)=>{const I=ye,M=Ge;return n(),B(M,he(v.$attrs,{modelValue:k.value,"onUpdate:modelValue":b[0]||(b[0]=F=>k.value=F),action:y.value,theme:"custom",onFail:U,headers:c.value,data:t.data,"format-response":C}),{default:g(()=>[i(I,{theme:"primary"},{default:g(()=>[J("上传图片")]),_:1})]),_:1},16,["modelValue","action","headers","data"])}}}),q=t=>(Je("data-v-b3a5227d"),t=t(),Qe(),t),kt={class:"Modal"},St={class:"colLeft"},Ct={class:"Nav"},wt={class:"trees-coadd"},xt={class:"scollhide"},At=["onClick"],Nt={class:"file-name"},It=q(()=>r("img",{src:"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB1SURBVCiR7dI9DQJBEAbQt3sG+FkEIQUHWEABOQdYoLj+JCABAZCsg6EnHOSWhIop58vLN8XwxaQ4OWL/tL8I27RTP+GYyK4YJ7IqnFMMJWzKrHPB7V6z1XI+hLJeZF3XhpGb5R//FEfNwoF4+8Ovberbi/EAxP8Z/kc4LR4AAAAASUVORK5CYII=",class:"icon"},null,-1)),Pt={class:"name line1"},Ut={class:"conter"},Vt={class:"bnt acea-row row-middle df-jcsb",style:{display:"flex"}},Lt={class:"",style:{flex:"1"}},$t={key:0,style:{display:"flex"}},zt={style:{width:"100%"}},Ot={key:0,class:"imagesNo"},Et=q(()=>r("i",{class:"t-icon-picture",style:{color:"#dbdbdb","font-size":"60px"}},null,-1)),Bt=q(()=>r("span",{class:"imagesNo_sp"},"图片库为空",-1)),Dt=[Et,Bt],Mt={key:1,class:"acea-row mb10"},Ft=["onMouseenter","onMouseleave"],Tt={key:0,class:"number"},Rt=q(()=>r("a",{href:"#",class:"demo-badge"},null,-1)),Jt=["src","onClick"],Qt={class:"operate-item"},Ht={key:0,style:{"max-width":"100px"}},Xt={class:"operate-height"},Zt=["onClick"],jt=["onClick"],Gt=["onClick","images","index"],Kt={class:"footer acea-row row-right"},Yt={class:"images"},qt=["src"],Wt=Y({__name:"index",props:{isChoice:{type:String,default:""},isPage:{type:Boolean,default:!1},isShow:{type:Number,default:1},pageLimit:{type:Number,default:0},maxlength:{type:Number,default:1}},emits:["changeCancel","getPic","getPicD","dialogStatus"],setup(t,{emit:d}){const k=t,U=s([]),N=s([]),S=s([]),p=s([]),V=s({name:"",all:1});s(null);const C=s(0),y=s({pid:0,name:"",page:1,limit:k.pageLimit||18});s(0),s([]);const D=s(!1);s({});const w=s([]);s("list");const L=s([]),c=s("5px");Fe(()=>{v()});const v=async(e="")=>{let a={name:"全部图片",id:0,pid:0};const o=await pt(V.value);e!=="search"&&(N.value=JSON.parse(JSON.stringify([...o.data.list]))),o.data.list.unshift(a),U.value=o.data.list},b=[{content:"新增分类",value:1},{content:"编辑分类",value:2},{content:"删除",value:3}],I=(e,a)=>{e.value==1?_(a,"add"):e.value==2?_(a,"edit"):e.value==3&&u(a)},M=s(!1),F=s(""),_=(e,a)=>{M.value=!0,a==="edit"?(f.value.id=e.id,f.value.pid=e.pid,f.value.name=e.name,F.value="编辑分类"):(f.value.pid=e.id,f.value.name="",F.value="新建分类")},u=e=>{let a={title:"删除分类",url:"/adminapi/upload/deleteCategory",ids:{ids:e.id}};_e(a).then(o=>{x.success(o.msg),v()}).catch(o=>{x.error(o.msg)})},f=s({id:0,pid:0,name:""}),Q={name:[{required:!0,message:"请输入分类名称",trigger:"blur"}]},W=async()=>{const e=C.value?await _t(f.value):await gt(f.value);e.code?(x.success(e.msg),M.value=!1,v()):x.error(e.msg)},ee=()=>{A.value.defaultCurrent=1,re(),T()},z=e=>{e.isShowEdit=!e.isShowEdit,e.realName=!e.realName},O=e=>{e.isShowEdit=!e.isShowEdit},E=(e="")=>{let a={title:"删除选中图片",url:"/adminapi/upload/delete",ids:{ids:e||w.value.toString()}};_e(a).then(o=>{x.success(o.msg),T(),re()}).catch(o=>{x.error(o.msg)})},re=()=>{p.value=[],w.value=[],L.value=[]},we=e=>{C.value=e,A.value.defaultCurrent=1,T()},te=s([]),A=s({defaultPageSize:k.pageLimit||12,total:0,defaultCurrent:1}),T=async()=>{const e={limit:A.value.defaultPageSize,page:A.value.defaultCurrent},a={...y.value,...e,cate_id:C.value},o=await ht(a);o.data.total?(D.value=!1,o.data.list.forEach(h=>{h.isSelect=!1,h.isEdit=!1,h.isShowEdit=!1,h.realName=!1,h.num=0,ce(h)}),S.value=o.data.list,A.value.total=o.data.total,te.value=o.data.list.map(h=>h.url)):D.value=!0};T();const ae=s(!1),de=s(0),xe=e=>{ae.value=!0,de.value=S.value.findIndex(a=>a.id===e.id)},Z=d,Ae=e=>{let a=0;e.isSelect?(e.isSelect=!1,p.value.map((o,h)=>{o.id==e.id&&(a=h)}),p.value.splice(a,1)):(e.isSelect=!0,p.value.push(e)),w.value=[],p.value.map((o,h)=>{w.value.push(o.id)}),S.value.map((o,h)=>{o.isSelect?p.value.filter((le,se)=>{o.id==le.id&&(o.num=se+1)}):o.num=0})},Ne=()=>{if(k.isChoice==="单选"){if(p.value.length>1)return x.warning("最多只能选一张图片");Z("getPic",p.value[0]),Z("dialogStatus",!1)}else{if(k.maxlength!=null&&p.value.length>Number(k.maxlength))return x.warning("最多只能选"+k.maxlength+"张图片");Z("getPic",p.value),Z("dialogStatus",!1)}},ce=e=>{let a=e.name.split("."),o=a[1]==null?[]:a[1],h=a[0].length+o.length;e.editName=h<10?e.name:e.name.substr(0,4)+"..."+e.name.substr(-5,5)},Ie=async e=>{e.name==""&&x.error("请填写内容");const a=await yt({id:e.id,name:e.name});a.code?(ce(e),e.isEdit=!1,x.success(a.msg)):x.error(a.msg)};return(e,a)=>{const o=Ye,h=qe,le=We,se=et,me=ye,ve=be,oe=tt,Pe=ft,Ue=ke,Ve=at,Le=lt,fe=st,$e=ot,ze=Se;return n(),m("div",kt,[r("div",St,[r("div",Ct,[r("div",wt,[r("div",xt,[r("div",{class:ne(t.isPage?"tree":"isTree")},[i(se,{ref:"tree",data:U.value,"value-mode":"all",keys:{label:"name",value:"id",children:"children"},activable:"",transition:""},{label:g(({node:l})=>[r("div",{class:"nodes",onClick:R=>we(l.data.id)},[r("span",Nt,[It,r("span",Pt,ge(l.label),1)]),l.data.id?(n(),B(h,{key:0,options:b,onClick:R=>I(R,l.data)},{default:g(()=>[i(o,{name:"ellipsis",size:"16"})]),_:2},1032,["onClick"])):(n(),B(le,{key:1,theme:"default",size:"small",onClick:R=>_(l.data,"add"),variant:"text",class:"add"},{default:g(()=>[J("添加")]),_:2},1032,["onClick"]))],8,At)]),_:1},8,["data"])],2)])])]),r("div",Ut,[r("div",Vt,[r("div",Lt,[i(ve,null,{default:g(()=>[t.isShow!==0?(n(),B(me,{key:0,theme:"primary",disabled:p.value.length===0,onClick:Ne},{default:g(()=>[J("使用选中图片")]),_:1},8,["disabled"])):P("",!0),i(bt,{app:"admin",data:{type:"image",cate_id:C.value},onUpdate:ee},null,8,["data"]),i(me,{theme:"default",class:"mr10",disabled:!p.value.length&&!w.value.length,onClick:a[0]||(a[0]=l=>E())},{default:g(()=>[J("删除图片")]),_:1},8,["disabled"])]),_:1})]),t.isPage?(n(),m("div",$t,[i(oe,{class:"mr10",modelValue:y.value.name,"onUpdate:modelValue":a[1]||(a[1]=l=>y.value.name=l),placeholder:"请输入图片名",size:"small",style:{width:"150px"}},{suffixIcon:g(()=>[i(K(Ke),{style:{cursor:"pointer"},onClick:T})]),_:1},8,["modelValue"])])):P("",!0)]),r("div",{class:ne(["pictrueList acea-row",{"is-modal":!t.isPage}])},[r("div",zt,[D.value?(n(),m("div",Ot,Dt)):(n(),m("div",Mt,[(n(!0),m(ie,null,ue(S.value,(l,R)=>(n(),m("div",{class:"pictrueList_pic mb10 mt10",key:R,style:H({margin:c.value}),onMouseenter:$=>z(l),onMouseleave:$=>O(l)},[l.num>0?(n(),m("p",Tt,[i(Pe,{count:l.num,offset:[10,20],color:"#0052D9"},{default:g(()=>[Rt]),_:2},1032,["count"])])):P("",!0),r("div",{class:ne(["img",l.isSelect?"on":""])},[r("img",{src:l.url,onClick:$=>Ae(l),style:{}},null,8,Jt)],2),r("div",Qt,[l.isEdit?(n(),B(oe,{key:1,size:"small",type:"text",modelValue:l.name,"onUpdate:modelValue":$=>l.name=$,onBlur:$=>Ie(l)},null,8,["modelValue","onUpdate:modelValue","onBlur"])):(n(),m("p",Ht,ge(l.name),1)),r("div",Xt,[i(ve,null,{default:g(()=>[l.isShowEdit?(n(),m("span",{key:0,class:"operate mr10",onClick:$=>E(l.id)},"删除",8,Zt)):P("",!0),l.isShowEdit?(n(),m("span",{key:1,class:"operate mr10",onClick:$=>l.isEdit=!l.isEdit},"改名",8,jt)):P("",!0),i(Ue,{visible:ae.value,"onUpdate:visible":a[2]||(a[2]=$=>ae.value=$),images:te.value,"default-index":de.value},{trigger:g(()=>[l.isShowEdit?(n(),m("span",{key:0,class:"operate",onClick:$=>xe(l),images:te.value,index:R},"查看",8,Gt)):P("",!0)]),_:2},1032,["visible","images","default-index"])]),_:2},1024)])])],44,Ft))),128))]))])],2),r("div",Kt,[A.value.total>A.value.defaultPageSize?(n(),B(Ve,{key:0,modelValue:A.value.defaultCurrent,"onUpdate:modelValue":a[3]||(a[3]=l=>A.value.defaultCurrent=l),pageSize:A.value.defaultPageSize,"onUpdate:pageSize":a[4]||(a[4]=l=>A.value.defaultPageSize=l),total:A.value.total,"show-page-size":!1,"total-content":!1,style:{"margin-top":"10px"},onCurrentChange:T},null,8,["modelValue","pageSize","total"])):P("",!0)])])]),Te(r("div",Yt,[(n(!0),m(ie,null,ue(S.value,l=>(n(),m("img",{src:l.att_dir,key:l.id},null,8,qt))),128))],512),[[Re,!1]]),i(ze,{visible:M.value,"onUpdate:visible":a[7]||(a[7]=l=>M.value=l),"close-on-overlay-click":!1,"destroy-on-close":!0,header:F.value,"on-confirm":W},{default:g(()=>[i($e,{ref:"formRef","label-align":"left",data:f.value,rules:Q,"label-width":80},{default:g(()=>[i(fe,{label:"上级分类",name:"pid"},{default:g(()=>[i(Le,{modelValue:f.value.pid,"onUpdate:modelValue":a[5]||(a[5]=l=>f.value.pid=l),placeholder:"请选择上级分类",data:U.value,clearable:"",filterable:"","check-strictly":"","min-collapsed-num":2,keys:{label:"name",value:"id",children:"children"}},null,8,["modelValue","data"])]),_:1}),i(fe,{label:"分类名称",name:"name"},{default:g(()=>[i(oe,{modelValue:f.value.name,"onUpdate:modelValue":a[6]||(a[6]=l=>f.value.name=l),clearable:"",placeholder:"请输入角色名"},null,8,["modelValue"])]),_:1})]),_:1},8,["data"])]),_:1},8,["visible","header"])])}}}),ea=Ce(Wt,[["__scopeId","data-v-b3a5227d"]]),ta={key:0},aa={key:0,class:"icon-container"},la=["onClick"],sa={key:1,style:{display:"flex",gap:"15px"}},oa=Y({__name:"image",props:{url:{type:[String,File],default:null},urls:{type:Array,default:()=>[]},title:String,opt:{type:Boolean,default:!1},maxlength:{type:Number,default:1},style:{type:[String,Object],default:null},isPage:{type:Boolean,default:!1},isIframe:{type:Boolean,default:!1},isShow:{type:Number,default:1},pageLimit:{type:Number,default:0}},emits:["setPic","setPics"],setup(t,{emit:d}){const k=()=>i(rt,{size:"24"},null),U=()=>i(dt,{size:"24"},null),N=s(!1),S=()=>{V.opt&&(N.value=!0)},p=()=>{L.value=null,v("setPic",L.value)},V=t,C=s(!1),y=s(""),D=s(""),w=(_,u)=>{C.value=!0,y.value=_>1?"多选":"单选",D.value=u},L=s(V.url),c=s(V.urls);He(()=>V.urls,(_,u)=>{c.value=_});const v=d,b=_=>{y.value==="单选"?(L.value=_.url,v("setPic",L.value)):(c.value=_.map(u=>u.url),v("setPic",c.value))},I=_=>{C.value=_},M=(_,u)=>{_.dataTransfer.setData("index",u.toString())},F=(_,u)=>{const f=Number(_.dataTransfer.getData("index")),Q=c.value[f];c.value.splice(f,1),c.value.splice(u,0,Q)};return(_,u)=>{const f=ct,Q=be,W=ke,ee=Se;return n(),m("div",null,[t.maxlength==1?(n(),m("div",ta,[t.url?(n(),B(W,{key:0,images:[t.url]},{trigger:g(({open:z})=>[t.url?(n(),m("div",{key:0,class:"image-container",onMouseenter:S,onMouseleave:u[1]||(u[1]=O=>N.value=!1)},[i(f,{alt:"test",src:t.url,style:H(t.style),onClick:u[0]||(u[0]=O=>w(t.maxlength,t.title))},null,8,["src","style"]),N.value&&t.opt?(n(),m("div",aa,[i(Q,null,{default:g(()=>[r("span",{class:"icon-preview",onClick:z},[i(K(nt)),J("查看 ")],8,la),r("span",{class:"icon-delete",onClick:p},[i(K(it)),J("删除 ")])]),_:2},1024)])):P("",!0)],32)):P("",!0)]),_:1},8,["images"])):(n(),B(f,{key:1,src:t.url,onClick:u[2]||(u[2]=z=>w(t.maxlength,t.title)),style:H(t.style),error:U},null,8,["src","style"]))])):(n(),m("div",sa,[(n(!0),m(ie,null,ue(c.value,(z,O)=>(n(),m("div",{key:O,class:"srcs_image"},[i(f,{src:z,style:H(t.style),error:k,"data-index":O,onDragstart:E=>M(E,O),onDragover:u[3]||(u[3]=Xe(()=>{},["prevent"])),onDrop:E=>F(E,O)},null,8,["src","style","data-index","onDragstart","onDrop"]),t.opt?(n(),m("div",{key:0,class:"srcs_image_close",onMouseenter:u[4]||(u[4]=E=>N.value=!0),onMouseleave:u[5]||(u[5]=E=>N.value=!1)},[i(K(ut),{class:"rcs_image_close_icon",onClick:E=>c.value.splice(O,1)},null,8,["onClick"])],32)):P("",!0)]))),128)),c.value.length<t.maxlength?(n(),B(f,{key:0,onClick:u[6]||(u[6]=z=>w(t.maxlength,t.title)),style:H(t.style),error:U},null,8,["style"])):P("",!0)])),i(ee,{visible:C.value,"onUpdate:visible":u[7]||(u[7]=z=>C.value=z),width:"950px",header:t.title,closeOnOverlayClick:!1,footer:!1},{default:g(()=>[i(ea,{isChoice:y.value,onGetPic:b,onDialogStatus:I,maxlength:t.maxlength},null,8,["isChoice","maxlength"])]),_:1},8,["visible","header"])])}}}),Ia=Ce(oa,[["__scopeId","data-v-da3fe94b"]]);export{Ia as u};
