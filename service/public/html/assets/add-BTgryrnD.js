import{d as D,m as L,e as u,U as k,v as j,j as O,o as c,p as P,a as o,w as r,u as s,b as y,c as V,n as b,g as $,x as E,B as G,M as h,V as z}from"./index-Bbii3Das.js";import{d as A}from"./date-CLNFQDy_.js";import{l as H}from"./category-BxaE_eVk.js";import{s as J}from"./good-DjB5F8nK.js";import{c as K,i as Q,a as W}from"./constant-CX6nb1Oy.js";import{I as X}from"./index-LB7-EXu2.js";import{F as Y,a as Z}from"./index-DXOBqNco.js";import{S as ee}from"./index-DBJlBd1d.js";import{C as te}from"./index-DKd2XSVr.js";import{I as oe}from"./index-CknG8Rj8.js";import{R as ae}from"./index-BdGTSLMf.js";import{S as le}from"./index-DyMK9WKq.js";import{a as re}from"./index-DKw_WWXq.js";import{D as me}from"./index-B9NUVFix.js";import{T as ie}from"./index-DFKfGQQV.js";import{C as ne}from"./index-tMpZz9fP.js";import{_ as ue}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./dep-86139c71-Cql-Ebvf.js";import"./form-model-9h0QNqcJ.js";import"./dep-4cc4ef27-CCky-4wQ.js";import"./dep-40320ba3-B1Ayvxeb.js";import"./const-DCUPODAK.js";import"./close-circle-filled-DvQn5h9G.js";import"./useLengthLimit-Drp21OsL.js";import"./log-ZJhmUOBa.js";import"./dep-02de0cb4-DlXaPlFV.js";import"./dep-96cefb8b-EGQiC2Rs.js";import"./index-m1SedByb.js";import"./useVModel-mAS2bV03.js";import"./observe-CfjnoQGd.js";import"./common-CF_MvV9u.js";import"./useReadonly-P1VyeMVt.js";import"./dep-d524834c-s9Vwwbzr.js";import"./slot-Wx8ivmZH.js";import"./index-D7A4xZ_W.js";import"./index-CpVXpLih.js";import"./useResizeObserver-C76GXHCj.js";import"./index-CGpzlmyY.js";import"./browse-Cwmf87g2.js";import"./useDefaultValue-BDK8TpyG.js";import"./index-CpsbnJvy.js";import"./chevron-right-7vJVdvaT.js";import"./tree-store-BiQ5vlTd.js";import"./dep-eedf0c29-xQnwgY39.js";import"./dep-6f8c2110-CYZdOZC2.js";import"./useCommonClassName-L0zFrjWC.js";import"./number-D-1MGlkC.js";import"./helper-DuXnSC7u.js";import"./dep-af55fe23-U_tvYUrP.js";import"./index-BL0Sakdl.js";import"./chevron-left-C_o2bTlZ.js";const se={class:"anim-wrapper"},pe={class:"form-submit-confirm anim-wrapper"},de={name:"GoodsCouponAdd"},ce=D({...de,setup(_e){const _=L(),e=u({cate_id:0,goods_id:null,type:1,amount:"",quantity:"",min_banlance:"",expire_at:"",remark:"",import_coupon:0,use_times:1,receive:0}),f=u("满减优惠券，设置多少元则抵扣总价的多少元"),v={amount:[{required:!0,message:"请填写折扣面额",type:"error"}],quantity:[{required:!0,message:"请填写数量",type:"error"}],expire_at:[{required:!0,message:"请选择到期时间",type:"error"}]},m=u(1);k(()=>m.value,l=>{l!=1&&(e.value.cate_id=0),l===1&&(e.value.cate_id=0,e.value.goods_id=null),l===2&&(g(l),e.value.cate_id="",e.value.goods_id=null,v.cate_id=[{required:!0,message:"请选择商品分类",type:"error"}]),l===3&&(g(l),e.value.cate_id=0,v.goods_id=[{required:!0,message:"请选择商品",type:"error"}])}),k(()=>e.value.type,l=>{l===1?f.value=`
      满减优惠券，设置多少元则抵扣总价的多少元
      `:f.value=`
      折扣卡券，设置比例10%则是9折20%为8折，以此类推
      `});const p=u([]),g=async l=>{if(l===2){const{data:t}=await H();p.value=t.list}if(l===3){const{data:t}=await J();p.value=t}},x=u(null);j(()=>{const{query:l}=_.currentRoute.value;l.cate_id&&(e.value.cate_id=l.cate_id)});const U=E(async()=>{const l=await x.value.validate();if(typeof l!="object"&&l){const t={...e.value,coupon_type:m.value},n=await W(t);n.code===1?(h.success(n.msg),e.value.import_coupon&&z(n.data.url),setTimeout(()=>{_.push("/admin/goods/coupon")},500)):h.error(`新增失败：${n.msg}`)}});return(l,t)=>{const n=X,w=G,q=O("wp-check-tag"),i=Y,C=ee,S=te,d=oe,T=ae,B=le,I=re,R=me,F=ie,M=Z,N=ne;return c(),P("div",se,[o(N,{title:"添加优惠券",class:"basic-container"},{actions:r(()=>[o(w,{variant:"text",theme:"default",onClick:t[0]||(t[0]=a=>s(_).push("/admin/goods/coupon"))},{icon:r(()=>[o(n,{name:"rollback"})]),default:r(()=>[y(" 返回 ")]),_:1})]),default:r(()=>[o(M,{ref_key:"form",ref:x,class:"base-form",data:e.value,rules:v,"label-align":"left","label-width":120,onSubmit:s(U)},{default:r(()=>[o(i,{label:"优惠券类型",name:"couponTypeValue"},{default:r(()=>[o(q,{modelValue:m.value,"onUpdate:modelValue":t[1]||(t[1]=a=>m.value=a),items:s(K)},null,8,["modelValue","items"])]),_:1}),m.value!=1?(c(),V(i,{key:0,label:m.value===2?"选择分类":"选择商品",name:m.value===2?"cate_id":"goods_id",tips:m.value===2?"【必选】请选择商品分类":"【必选】请选择商品"},{default:r(()=>[m.value===2?(c(),V(C,{key:0,modelValue:e.value.cate_id,"onUpdate:modelValue":t[2]||(t[2]=a=>e.value.cate_id=a),placeholder:"请选择商品分类",type:"search",clearable:"",options:p.value,style:{width:"415px"}},null,8,["modelValue","options"])):b("",!0),m.value===3?(c(),V(S,{key:1,modelValue:e.value.goods_id,"onUpdate:modelValue":t[3]||(t[3]=a=>e.value.goods_id=a),placeholder:"请选择商品",type:"search",clearable:"",options:p.value,style:{width:"415px"},trigger:"hover",valueMode:"onlyLeaf"},null,8,["modelValue","options"])):b("",!0)]),_:1},8,["label","name","tips"])):b("",!0),o(i,{label:"折扣面额",name:"amount",tips:f.value},{default:r(()=>[o(B,null,{default:r(()=>[o(d,{modelValue:e.value.amount,"onUpdate:modelValue":t[4]||(t[4]=a=>e.value.amount=a),theme:"normal",placeholder:"请填写数字",style:{width:"415px"}},null,8,["modelValue"]),o(T,{modelValue:e.value.type,"onUpdate:modelValue":t[5]||(t[5]=a=>e.value.type=a),options:s(Q)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["tips"]),o(i,{label:"生成数量",name:"quantity",tips:"最多一次生成200张"},{default:r(()=>[o(d,{modelValue:e.value.quantity,"onUpdate:modelValue":t[6]||(t[6]=a=>e.value.quantity=a),placeholder:"填写优惠券生成数量",max:200,min:1,theme:"normal"},null,8,["modelValue"])]),_:1}),o(i,{label:"到期时间",name:"expire_at",tips:"过期优惠券系统将自动清理"},{default:r(()=>[o(I,{modelValue:e.value.expire_at,"onUpdate:modelValue":t[7]||(t[7]=a=>e.value.expire_at=a),"allow-input":"",clearable:"",placeholder:"请选择到期时间","disable-date":{before:s(A)().add(0,"day").endOf("day").format()},presetsPlacement:"right"},null,8,["modelValue","disable-date"])]),_:1}),o(R,{dashed:"",style:{width:"575px"}},{default:r(()=>[y("高级设置")]),_:1}),o(i,{label:"使用门槛",name:"min_banlance",tips:"此功能为满减优惠卷，超过此金额的订单才可使用的优惠券。不填则无限制"},{default:r(()=>[o(d,{modelValue:e.value.min_banlance,"onUpdate:modelValue":t[8]||(t[8]=a=>e.value.min_banlance=a),placeholder:"请填写数字",theme:"normal"},null,8,["modelValue"])]),_:1}),o(i,{label:"可使用次数",name:"use_times",tips:"优惠券可被使用次数"},{default:r(()=>[o(d,{modelValue:e.value.use_times,"onUpdate:modelValue":t[9]||(t[9]=a=>e.value.use_times=a),placeholder:"请填写使用次数",theme:"normal",suffix:"次"},null,8,["modelValue"])]),_:1}),o(i,{label:"备注信息",name:"remark"},{default:r(()=>[o(F,{modelValue:e.value.remark,"onUpdate:modelValue":t[10]||(t[10]=a=>e.value.remark=a),placeholder:"可填写优惠券备注信息",style:{width:"415"}},null,8,["modelValue"])]),_:1}),o(i,null,{default:r(()=>[$("div",pe,[o(w,{theme:"primary",block:"",size:"large",type:"submit",style:{margin:"2px"}},{default:r(()=>[y(" 提交 ")]),_:1})])]),_:1})]),_:1},8,["data","onSubmit"])]),_:1})])}}}),dt=ue(ce,[["__scopeId","data-v-70de5377"]]);export{dt as default};
