import{d as X,e as p,m as H,r as J,v as K,j as Q,o as s,c as _,w as l,a as o,b as u,u as T,n as f,p as c,F as w,q as W,t as Y,x as Z,B as ee,M as g}from"./index-Bl4AiOyE.js";import{a as te}from"./card-T5RWivJ7.js";import{s as oe}from"./good-LOwj_t8E.js";import{_ as le}from"./generator.vue_vue_type_script_setup_true_lang-DfeVVD5z.js";import{D as ae}from"./index-LkEl_aIh.js";import{S as re}from"./index-CmSpUa39.js";import{I as se}from"./index-DaVESe2P.js";import{C as ne}from"./index-BU0x4Lxy.js";import{F as ie,a as me}from"./index-DZCrjQ_3.js";import{T as pe}from"./index-Cs4OI0Zk.js";import{L as ue}from"./index-DYrnlY5q.js";import{U as de}from"./index-Dkkg6vhj.js";import{C as _e}from"./index-DgoDdsYb.js";import{_ as ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CLnbRl90.js";import"./useLengthLimit-zZTqNE_r.js";import"./log-ZJhmUOBa.js";import"./useReadonly-DZtTxOfz.js";import"./const-BLdXWxIl.js";import"./useVModel-HmF1Gebj.js";import"./useResizeObserver-BUPtuDKJ.js";import"./dep-d524834c-s9Vwwbzr.js";import"./browse-CCDZKZZU.js";import"./close-circle-filled-xz65pYuL.js";import"./index-CkUJmLKO.js";import"./helper-VFi8r3PY.js";import"./dep-86139c71-_Dj3X0D4.js";import"./dep-40320ba3-B1Ayvxeb.js";import"./dep-af55fe23-C5ZQDf4C.js";import"./dep-96cefb8b-D_Qrr7tD.js";import"./common-CF_MvV9u.js";import"./index-BuecJDAw.js";import"./observe-CfjnoQGd.js";import"./slot-BjrDC6aI.js";import"./index-CCnSBKQl.js";import"./useCommonClassName-B8MbwXBA.js";import"./number-jGqlEXl8.js";import"./index-DZX9MhDf.js";import"./chevron-right-BZPeNPTA.js";import"./index-BXun50hP.js";import"./index-BACtxuGn.js";import"./dep-02de0cb4-B9D_IUaB.js";import"./dep-4cc4ef27-Bxo4BcuK.js";import"./useDefaultValue-DgMKt5hR.js";import"./index-C23pHn_u.js";import"./tree-store-D6Nt-HJf.js";import"./dep-eedf0c29-Hg3zrHFZ.js";import"./dep-6f8c2110-CYZdOZC2.js";import"./form-model-BN3AK5Zp.js";import"./index-CeSPek2M.js";import"./index-DKSVjsu7.js";import"./index-BKyk21AZ.js";import"./index-BjJKviJA.js";import"./chevron-left-BBFgH3SA.js";import"./delete-BdbM_d1G.js";import"./dep-1858b432-B1ibg8Ju.js";const fe={key:0,style:{padding:"0"}},ye={key:0},ve={name:"GoodsCardAdd"},ge=X({...ve,setup(be){const b=p(null),L=()=>{var t;(t=b.value)==null||t.init()},S=[{label:"手动输入",value:1},{label:"txt文件",value:2}],F=[{label:"自动识别",value:"auto"},{label:"卡号+逗号+卡密",value:","},{label:"卡号+“|”+卡密",value:"|"},{label:"卡号+“----”+卡密",value:"----"},{label:"卡号+____”+卡密",value:"_____"},{label:"仅卡密",value:""}],R=[{label:"顺序插入",value:1},{label:"随机插入",value:2}],V=[{label:"关闭",value:0},{label:"开启",value:1}],y=H(),e=J({goods_id:null,order_type:1,import_type:1,split_type:"auto",files:[],is_pre:0,check_card:0,content:""}),{query:k}=y.currentRoute.value;Object.keys(k).forEach(t=>{e[t]!==void 0&&(e[t]=Number(k[t]))});const x=p([]),q=async()=>{try{const{data:t}=await oe();x.value=t}catch(t){console.log(t)}},h=p(null),B={goods_id:[{required:!0,message:"请选择商品",type:"error"}],content:[{required:!0,message:"请输入虚拟卡内容",type:"error"}],split_type:[{required:!1,message:"请选择导入格式",type:"error"}]},m=p("请输入虚拟卡内容"),M=t=>{t===","?m.value=`请输入虚拟卡内容，每行一个
    例如：
    卡号1111,卡密2222
    卡号3333,卡密4444`:t==="|"?m.value=`请输入虚拟卡内容，每行一个
    例如：
    卡号1111|卡密2222
    卡号3333|卡密4444`:t==="----"?m.value=`请输入虚拟卡内容，每行一个
    例如：
    卡号1111----卡密2222
    卡号3333----卡密4444`:t==="_____"?m.value=`请输入虚拟卡内容，每行一个
    例如：
    卡号1111_____卡密2222
    卡号3333_____卡密4444`:t===""&&(m.value=`请输入虚拟卡内容，每行一个
    （卡号卡密是写在一起的形式，或者只有卡密、卡号）
    例如：
    卡号1111卡密2222
    卡号3333卡密4444
    卡密4444
    卡密5555555555`)};K(()=>{q()});const v=p(!1),D=Z(async()=>{const t=await h.value.validate();if(typeof t!="object"&&t){v.value=!0;const a={...e};try{const i=await te(a);i.code===1?(g.success("新增成功"),y.push("/admin/goods/card")):g.error(`新增失败：${i.msg}`)}catch{g.error("新增失败")}v.value=!1}}),C=p(0),I=t=>{console.log("进度：",t),C.value=t};return(t,a)=>{const i=ee,N=ae,$=re,j=se,A=ne,n=ie,d=Q("wp-check-tag"),E=pe,G=ue,P=de,z=me,O=_e;return s(),_(O,{class:"basic-container",bordered:!1},{title:l(()=>[o($,{align:"center"},{separator:l(()=>[o(N,{layout:"vertical"})]),default:l(()=>[u(" 添加库存 "),o(i,{theme:"primary",variant:"text",onClick:L},{default:l(()=>[u(" 卡密生成器 ")]),_:1})]),_:1})]),actions:l(()=>[o(i,{variant:"text",theme:"default",onClick:a[0]||(a[0]=r=>T(y).push("/admin/goods/card"))},{icon:l(()=>[o(j,{name:"rollback"})]),default:l(()=>[u(" 返回列表 ")]),_:1})]),default:l(()=>[o(z,{ref_key:"form",ref:h,class:"base-form",data:e,rules:B,"label-align":"left","label-width":100,onSubmit:T(D)},{default:l(()=>[o(n,{label:"选择商品",name:"goods_id",tips:"点击选择商品栏目后，继续点击选中商品"},{default:l(()=>[o(A,{modelValue:e.goods_id,"onUpdate:modelValue":a[1]||(a[1]=r=>e.goods_id=r),placeholder:"请选择商品",clearable:"",options:x.value,trigger:"hover","show-all-levels":!1,valueMode:"onlyLeaf"},null,8,["modelValue","options"])]),_:1}),o(n,{label:"插入方式",name:"order_type",help:""},{default:l(()=>[o(d,{modelValue:e.order_type,"onUpdate:modelValue":a[2]||(a[2]=r=>e.order_type=r),items:R},null,8,["modelValue"])]),_:1}),o(n,{label:"导入方式",name:"import_type",help:""},{default:l(()=>[o(d,{modelValue:e.import_type,"onUpdate:modelValue":a[3]||(a[3]=r=>e.import_type=r),items:S},null,8,["modelValue"])]),_:1}),o(n,{label:"导入格式",name:"split_type"},{default:l(()=>[o(d,{modelValue:e.split_type,"onUpdate:modelValue":a[4]||(a[4]=r=>e.split_type=r),items:F,onActions:M},null,8,["modelValue"])]),_:1}),e.import_type===1?(s(),_(n,{key:0,label:"虚拟卡内容",name:"content",help:"除了卡号和卡密之间有空格 其他地方不允许有空格 一次最多添加5000张"},{default:l(()=>[o(E,{modelValue:e.content,"onUpdate:modelValue":a[5]||(a[5]=r=>e.content=r),placeholder:m.value,style:{height:"400px"}},null,8,["modelValue","placeholder"])]),_:1})):f("",!0),e.import_type===2?(s(),_(n,{key:1,label:"TXT文件",name:"file",help:"txt文件每行一个，每行除了卡号和卡密之间有空格 其他地方不允许有空格 一次最多添加5000行"},{default:l(()=>[o(P,{modelValue:e.files,"onUpdate:modelValue":a[6]||(a[6]=r=>e.files=r),accept:"text/plain",theme:"custom","auto-upload":!1,"abridge-name":[10,8],draggable:"",onProgress:I},{dragContent:l(r=>[e.files&&e.files.length?(s(),c("ul",fe,[(s(!0),c(w,null,W(e.files,U=>(s(),c("li",{key:U.name,style:{"list-style-type":"none"}},Y(U.name),1))),128))])):(s(),c(w,{key:1},[r&&r.dragActive?(s(),c("p",ye,"释放鼠标")):C.value<1?(s(),_(G,{key:1},{default:l(()=>[u("拖拽文件至此或点击上传文件")]),_:1})):f("",!0)],64)),e.files&&e.files.length?(s(),_(i,{key:2,size:"small",style:{"margin-top":"36px"}},{default:l(()=>[u("更换文件")]),_:1})):f("",!0)]),_:1},8,["modelValue"])]),_:1})):f("",!0),o(n,{label:"卡密前缀",name:"is_pre",help:"开启后，取卡时会自动显示为（卡号：xxx 卡密：xxx）"},{default:l(()=>[o(d,{modelValue:e.is_pre,"onUpdate:modelValue":a[7]||(a[7]=r=>e.is_pre=r),items:V},null,8,["modelValue"])]),_:1}),o(n,{label:"检查重复",name:"check_card",help:""},{default:l(()=>[o(d,{modelValue:e.check_card,"onUpdate:modelValue":a[8]||(a[8]=r=>e.check_card=r),items:V},null,8,["modelValue"])]),_:1}),o(n,null,{default:l(()=>[o(i,{size:"large",theme:"primary",class:"form-submit-confirm",type:"submit",loading:v.value},{default:l(()=>[u(" 提交 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["data","onSubmit"]),o(le,{ref_key:"generatorRef",ref:b},null,512)]),_:1})}}}),xt=ce(ge,[["__scopeId","data-v-6af9da89"]]);export{xt as default};
