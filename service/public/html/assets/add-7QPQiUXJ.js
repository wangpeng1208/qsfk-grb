import{d as te,m as ae,e as h,j as M,o as d,c as _,w as o,g as s,t as C,a as l,u as y,b as c,p as b,F as q,q as R,n as w,M as I,D as oe,B as ie}from"./index-CpJFga7x.js";import{l as ne}from"./category-C8UM67HR.js";import{g as ue,d as de,a as re,e as se}from"./good-DRjBmnT5.js";import{u as me}from"./image-Bo8L2iEl.js";import{C as pe,T as ve,a as _e,b as N}from"./constant-4vGkG4Wa.js";import{I as ce}from"./index-DUYa5w0Y.js";import{S as ge,O as fe}from"./index-DePaE_yS.js";import{F as he,a as ye}from"./index-jBP3p80B.js";import{I as Ve}from"./index--0mKpQel.js";import{I as be}from"./index-Dhx8Vlw0.js";import{S as we}from"./index-fiMfjcvP.js";import{C as xe}from"./index-DJSz0Bsf.js";import"./config-DwzKgDR_.js";import"./index-BUM5b839.js";import"./index-aNeCThFX.js";import"./index-9LK7MnuS.js";import"./observe-CfjnoQGd.js";import"./log-ZJhmUOBa.js";import"./close-circle-filled-1kZBSjap.js";import"./useCommonClassName-DGbYtLoH.js";import"./index-BSdzoAtq.js";import"./useDefaultValue-BJZ6w0Fl.js";import"./useVModel-CzdLJ13E.js";import"./dep-86139c71-Dc2HrHYK.js";import"./number--X5gY8kS.js";import"./dep-d524834c-s9Vwwbzr.js";import"./index-AQEtrbEO.js";import"./index-byKPUDsR.js";import"./index-BcRf9bEE.js";import"./dep-96cefb8b-hs2i3_dz.js";import"./useResizeObserver-ONY0TviC.js";import"./chevron-left-BX4tOZyG.js";import"./browse-CF75H87A.js";import"./delete-CwqryDI4.js";import"./dep-1858b432-D8vbiQ_j.js";import"./search-DXIN59Oa.js";import"./index-B4p2E3Fl.js";import"./index-iz6Ah-5R.js";import"./helper-DkMMPY9i.js";import"./index-DLxi--Yj.js";import"./chevron-right-DSRNsGLo.js";import"./slot-DL8tHB3s.js";import"./index-BRANptdv.js";import"./dep-af55fe23-3nGiADk5.js";import"./index-Dk9r_Pa_.js";import"./common-CF_MvV9u.js";import"./useReadonly-Bx8TEnun.js";import"./tree-store-D-cjiqAX.js";import"./dep-eedf0c29-v-LgRmZs.js";import"./dep-6f8c2110-CYZdOZC2.js";import"./dep-40320ba3-B1Ayvxeb.js";import"./useVirtualScrollNew-XoyDLD8W.js";import"./dep-02de0cb4-9NqRuOAE.js";import"./dep-4cc4ef27-DQG4x64P.js";import"./index-BqrdyjaG.js";import"./useLengthLimit-OjWIxDWr.js";import"./index-DY-jK-p6.js";import"./index-DnrQMYJZ.js";import"./index-BRf9TXQS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./browse-BjtgPIm_.js";import"./delete-CjNGK_Sc.js";import"./multiply-W5Ucs8bP.js";import"./image-error-bO6hTTQl.js";import"./add-C3A3nwyy.js";import"./form-model-ChnUeRwN.js";import"./const-BD0RkfTU.js";const ke={class:"basic_title"},Ue={class:"sub_title"},Ce=s("div",{class:"line_title"},null,-1),qe=s("div",{class:"basic_title"},[s("div",null,[s("div",{class:"sub_title"},"优惠活动"),s("div",{class:"line_title"})])],-1),Re=s("div",{class:"basic_title"},[s("div",null,[s("div",{class:"sub_title"},"商品详情"),s("div",{class:"line_title"})])],-1),Ie={name:"GoodsAdd"},Pl=te({...Ie,setup(Ne){const m=ae(),x=h("add"),e=h({cate_id:"",name:"",slider_image:[],price:"",event_give:[],addtion_give:[],cost_price:"",limit_quantity:"",limit_quantity_max:"",inventory_notify:0,card_order:0,selectcard_fee:"",coupon_type:0,take_card_type:0,contact_limit:"mobile",content:"",remark:"",sort:"0",wholesale_discount:0,wholesale_discount_list:[]}),k=h([]),P=async()=>{const{data:i}=await ue();m.currentRoute.value.query.id?k.value=i.filter(t=>t.id!=m.currentRoute.value.query.id):k.value=i,m.currentRoute.value.query.cate_id&&(D(),e.value.cate_id=m.currentRoute.value.query.cate_id)},B=i=>{if(i&&k.value.length<2){I.warning("至少要有两个商品才能开启附加赠送");return}i?e.value.addtion_give.push({good_id:"",bug_num:"",give_num:""}):e.value.addtion_give=[]},W=i=>{e.value.addtion_give.splice(i,1),e.value.addtion_give.length===0&&(e.value.addtion_give=[])},L=i=>{i?e.value.event_give.push({num:"",give_num:""}):e.value.event_give=[]},j=i=>{e.value.event_give.splice(i,1),e.value.event_give.length===0&&(e.value.event_give=[])},z=i=>{i?e.value.wholesale_discount_list.push({num:"",price:""}):e.value.wholesale_discount_list=[]},H=i=>{e.value.wholesale_discount_list.splice(i,1),e.value.wholesale_discount_list.length===0&&(e.value.wholesale_discount=0)},E=h("添加商品"),K=async()=>{if(m.currentRoute.value.query.id)try{const{data:i}=await de({id:m.currentRoute.value.query.id});e.value={...i},e.value.slider_image||(e.value.slider_image=[]),x.value="edit",E.value="编辑商品"}catch(i){console.log(i)}},T=h([]),D=async()=>{const{data:i}=await ne();if(i.list.length===0){const t=oe({header:"提醒",body:"还没有商品分类，请先添加分类！",confirmBtn:"去分类页添加",closeOnOverlayClick:!1,theme:"warning",onConfirm:({e:r})=>{t.hide(),m.push("/admin/goods/category")},onCloseBtnClick:({e:r})=>{t.hide(),m.push("/admin/goods/category")},onCancel:({e:r})=>{t.hide(),m.push("/admin/goods/category")}})}T.value=i.list,i.list.length&&(e.value.cate_id=i.list[0].value)},Y={cate_id:[{required:!0,message:"请选择分类",type:"error"}],name:[{required:!0,message:"请填写商品名",type:"error"}],price:[{required:!0,message:"请填写商品价格",type:"error"}],content:[{required:!0,message:"请填写商品详情",type:"error"}],remark:[{required:!0,message:"请填写商品备注",type:"error"}]},F=h(),U=h(!1),G=async()=>{const i=await F.value.validate();if(typeof i!="object"&&i){U.value=!0;const t=e.value;try{let r;if(x.value==="add"?r=await re(t):r=await se(t),r.code===1)I.success(r.msg);else return I.error(`提交失败：${r.msg}`),!1}catch{return!1}return U.value=!1,!0}else return I.error("请填写完整信息"),!1},S=h(!1),J=async()=>{S.value=!0,await G()&&m.push("/admin/goods/index"),S.value=!1,U.value=!1};D(),K(),P();const Q=i=>{const t=e.value.slider_image.length,r=Math.min(t+i.length,10),p=i.slice(0,r-t);e.value.slider_image=[...e.value.slider_image,...p]};return(i,t)=>{const r=ce,p=ie,$=ge,u=he,A=Ve,v=be,g=we,V=M("wp-check-tag"),X=fe,O=M("wp-editor"),Z=ye,ee=xe;return d(),_(ee,{class:"basic-container",bordered:!1},{default:o(()=>[s("div",ke,[s("div",null,[s("div",Ue,C(E.value),1),Ce]),l(p,{variant:"text",theme:"default",onClick:t[0]||(t[0]=a=>y(m).push("/admin/goods/index"))},{icon:o(()=>[l(r,{name:"rollback"})]),default:o(()=>[c(" 返回 ")]),_:1})]),l(Z,{ref_key:"form",ref:F,class:"base-form",data:e.value,rules:Y,"label-align":"left","label-width":150,"scroll-to-first-error":"smooth","status-icon":"",onSubmit:G},{default:o(()=>[l(u,{label:"商品分类",name:"cate_id"},{default:o(()=>[l($,{modelValue:e.value.cate_id,"onUpdate:modelValue":t[1]||(t[1]=a=>e.value.cate_id=a),placeholder:"请选择商品分类",size:"medium",style:{width:"600px"},options:T.value},null,8,["modelValue","options"])]),_:1}),l(u,{label:"商品名称",name:"name",tips:"填写商品名称，长度需在2-100位之间"},{default:o(()=>[l(A,{modelValue:e.value.name,"onUpdate:modelValue":t[2]||(t[2]=a=>e.value.name=a),maxlength:100,"show-limit-number":"",placeholder:"请填写商品名称",size:"medium",style:{width:"600px"}},null,8,["modelValue"])]),_:1}),l(u,{label:"价格设置",name:"price"},{default:o(()=>[l(g,{style:{"padding-bottom":"20px"}},{default:o(()=>[l(v,{modelValue:e.value.price,"onUpdate:modelValue":t[3]||(t[3]=a=>e.value.price=a),theme:"normal",align:"center",label:"销售价格",suffix:"元",tips:"销售价格，范围在0.1-20000",placeholder:"请填写销售价格",style:{width:"292px"},size:"medium"},null,8,["modelValue"]),l(v,{modelValue:e.value.cost_price,"onUpdate:modelValue":t[4]||(t[4]=a=>e.value.cost_price=a),theme:"normal",align:"center",label:"成本价格",suffix:"元",tips:"成本价，方便统计。不得高于售价",placeholder:"请填写成本价格",style:{width:"292px"},size:"medium"},null,8,["modelValue"])]),_:1})]),_:1}),l(u,{label:"限购设置",name:"event_give"},{default:o(()=>[l(g,null,{default:o(()=>[l(v,{modelValue:e.value.limit_quantity,"onUpdate:modelValue":t[5]||(t[5]=a=>e.value.limit_quantity=a),theme:"normal",align:"center",label:"最少购买",suffix:"件",placeholder:"请填写最少购买数量",style:{width:"292px"},size:"medium"},null,8,["modelValue"]),l(v,{modelValue:e.value.limit_quantity_max,"onUpdate:modelValue":t[6]||(t[6]=a=>e.value.limit_quantity_max=a),theme:"normal",align:"center",label:"最多购买",suffix:"件",placeholder:"请填写最多购买数量",style:{width:"292px"},size:"medium"},null,8,["modelValue"])]),_:1})]),_:1}),l(u,{label:"售卡顺序",name:"card_order"},{default:o(()=>[l(V,{modelValue:e.value.card_order,"onUpdate:modelValue":t[7]||(t[7]=a=>e.value.card_order=a),items:y(pe)},null,8,["modelValue","items"])]),_:1}),l(u,{label:"提卡密码",name:"take_card_type",tips:"开启后，购买页面会提示买家填写取卡密码"},{default:o(()=>[l(V,{modelValue:e.value.take_card_type,"onUpdate:modelValue":t[8]||(t[8]=a=>e.value.take_card_type=a),items:y(ve)},null,8,["modelValue","items"])]),_:1}),l(u,{label:"联系方式",name:"contact_limit",tips:""},{default:o(()=>[l(V,{modelValue:e.value.contact_limit,"onUpdate:modelValue":t[9]||(t[9]=a=>e.value.contact_limit=a),items:y(_e)},null,8,["modelValue","items"])]),_:1}),qe,l(u,{label:"优惠券",name:"coupon_type",tips:"选择开启则表示该商品可以使用优惠券"},{default:o(()=>[l(V,{modelValue:e.value.coupon_type,"onUpdate:modelValue":t[10]||(t[10]=a=>e.value.coupon_type=a),items:y(N)},null,8,["modelValue","items"])]),_:1}),l(u,{label:"活动赠送",name:"event_give"},{default:o(()=>[l(V,{modelValue:e.value.event_give,"onUpdate:modelValue":t[11]||(t[11]=a=>e.value.event_give=a),items:y(N),onActions:L},null,8,["modelValue","items"])]),_:1}),e.value.event_give.length?(d(),_(u,{key:0,label:"",name:"event_give",tips:"【倍数关系】每买a件，送b件。会展示在购买下单页总数上"},{default:o(()=>[l(g,{direction:"vertical"},{default:o(()=>[(d(!0),b(q,null,R(e.value.event_give,(a,f)=>(d(),b("div",{key:f},[l(g,null,{default:o(()=>[l(v,{modelValue:a.num,"onUpdate:modelValue":n=>a.num=n,theme:"normal",align:"center",label:"买满：",suffix:"件",placeholder:"请填写买满数量",style:{width:"292px"}},null,8,["modelValue","onUpdate:modelValue"]),l(v,{modelValue:a.give_num,"onUpdate:modelValue":n=>a.give_num=n,theme:"normal",align:"center",label:"赠送：",suffix:"件",placeholder:"请填写赠送数量",style:{width:"292px"}},null,8,["modelValue","onUpdate:modelValue"]),l(p,{theme:"danger",variant:"outline",onClick:n=>j(f)},{default:o(()=>[c("删除")]),_:2},1032,["onClick"]),e.value.event_give.length?(d(),_(p,{key:0,variant:"outline",theme:"primary",onClick:t[12]||(t[12]=n=>L(1))},{default:o(()=>[c(" 添加 ")]),_:1})):w("",!0)]),_:2},1024)]))),128))]),_:1})]),_:1})):w("",!0),l(u,{label:"附加赠送",name:"addtion_give",tips:""},{default:o(()=>[l(V,{modelValue:e.value.addtion_give,"onUpdate:modelValue":t[13]||(t[13]=a=>e.value.addtion_give=a),items:y(N),onActions:B},null,8,["modelValue","items"])]),_:1}),e.value.addtion_give.length?(d(),_(u,{key:1,label:"",name:"addtion_give",tips:"【附加关系】若编辑（B商品，2,1）意思为买2个当前商品送B商品1个，取货时才会显示出来"},{default:o(()=>[e.value.addtion_give.length?(d(),_(g,{key:0,direction:"vertical"},{default:o(()=>[(d(!0),b(q,null,R(e.value.addtion_give,(a,f)=>(d(),b("div",{key:f},[l(g,null,{default:o(()=>[l($,{modelValue:a.good_id,"onUpdate:modelValue":n=>a.good_id=n,style:{width:"292px"},placeholder:"请选择商品"},{default:o(()=>[(d(!0),b(q,null,R(k.value,(n,le)=>(d(),_(X,{key:le,value:n.id,label:n.name},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"]),l(A,{modelValue:a.bug_num,"onUpdate:modelValue":n=>a.bug_num=n,placeholder:"请填写购买数量",type:"number",theme:"normal","decimal-places":!1,min:1,style:{width:"138px"}},null,8,["modelValue","onUpdate:modelValue"]),l(A,{modelValue:a.give_num,"onUpdate:modelValue":n=>a.give_num=n,placeholder:"请填写赠送数量",type:"number",theme:"normal","decimal-places":!1,min:1,style:{width:"138px"}},null,8,["modelValue","onUpdate:modelValue"]),l(p,{theme:"danger",variant:"outline",onClick:n=>W(f)},{default:o(()=>[c("删除")]),_:2},1032,["onClick"]),e.value.addtion_give.length?(d(),_(p,{key:0,variant:"outline",theme:"primary",onClick:t[14]||(t[14]=n=>B(1))},{default:o(()=>[c(" 添加 ")]),_:1})):w("",!0)]),_:2},1024)]))),128))]),_:1})):w("",!0)]),_:1})):w("",!0),l(u,{label:"批发优惠",name:"wholesale_discount_list",tips:""},{default:o(()=>[l(V,{modelValue:e.value.wholesale_discount_list,"onUpdate:modelValue":t[15]||(t[15]=a=>e.value.wholesale_discount_list=a),items:y(N),onActions:z},null,8,["modelValue","items"])]),_:1}),e.value.wholesale_discount_list.length?(d(),_(u,{key:2,label:"",name:"wholesale_discount_list"},{default:o(()=>[l(g,{direction:"vertical"},{default:o(()=>[(d(!0),b(q,null,R(e.value.wholesale_discount_list,(a,f)=>(d(),b("div",{key:f},[l(g,null,{default:o(()=>[l(v,{modelValue:a.num,"onUpdate:modelValue":n=>a.num=n,theme:"normal",align:"right",label:"数量：",suffix:"件",placeholder:"请填写购买数量",style:{width:"290px"}},null,8,["modelValue","onUpdate:modelValue"]),l(v,{modelValue:a.price,"onUpdate:modelValue":n=>a.price=n,theme:"normal",align:"right",label:"价格：",suffix:"元",placeholder:"请填写价格",style:{width:"290px"}},null,8,["modelValue","onUpdate:modelValue"]),l(p,{theme:"danger",variant:"outline",onClick:n=>H(f)},{default:o(()=>[c("删除")]),_:2},1032,["onClick"]),e.value.wholesale_discount_list.length?(d(),_(p,{key:0,variant:"outline",theme:"primary",onClick:t[16]||(t[16]=n=>z(1))},{default:o(()=>[c(" 添加 ")]),_:1})):w("",!0)]),_:2},1024)]))),128))]),_:1})]),_:1})):w("",!0),Re,l(u,{label:"商品轮播图",name:"slider_image",tips:"建议尺寸：800*800，可拖拽改变图片顺序，默认首张图为主图，最多上传10张"},{default:o(()=>[l(me,{urls:e.value.slider_image,title:"上传商品图",style:{maxWidth:"100px",width:"100px",height:"100px"},maxlength:10,onSetPic:Q,opt:""},null,8,["urls"])]),_:1}),l(u,{label:"商品描述",name:"content",tips:"必填，商品描述会在买家选择商品时展示，建议写上您商品的简介，官网以及常见的问题",style:{width:"760px"}},{default:o(()=>[l(O,{modelValue:e.value.content,"onUpdate:modelValue":t[17]||(t[17]=a=>e.value.content=a),style:{border:"1px solid var(--td-border-level-2-color)",width:"100%"},height:"200px",mode:"simple","user-type":"admin"},null,8,["modelValue"])]),_:1}),l(u,{label:"使用说明",name:"remark",tips:"必填，商品使用说明会在买家购买完成后展示，建议写上您的产品使用说明，售后联系方式等",style:{width:"760px"}},{default:o(()=>[l(O,{modelValue:e.value.remark,"onUpdate:modelValue":t[18]||(t[18]=a=>e.value.remark=a),style:{border:"1px solid var(--td-border-level-2-color)",width:"100%"},height:"200px",mode:"simple","user-type":"admin"},null,8,["modelValue"])]),_:1}),l(u,{label:"商品排序",name:"sort",tips:""},{default:o(()=>[l(v,{modelValue:e.value.sort,"onUpdate:modelValue":t[19]||(t[19]=a=>e.value.sort=a),min:0,theme:"normal",placeholder:"",style:{width:"600px"},size:"medium"},null,8,["modelValue"])]),_:1}),l(u,null,{default:o(()=>[l(p,{theme:"primary",class:"form-submit-confirm",onClick:J,loading:S.value,size:"large"},{default:o(()=>[c(C(x.value==="add"?"添加":"编辑")+"并返回商品列表 ",1)]),_:1},8,["loading"]),l(p,{theme:"default",class:"form-submit-confirm",type:"submit",loading:U.value,variant:"text",size:"small"},{default:o(()=>[c(C(x.value==="add"?"添加":"编辑")+"后继续"+C(x.value==="add"?"添加":"编辑")+"商品 ",1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["data"])]),_:1})}}});export{Pl as default};
