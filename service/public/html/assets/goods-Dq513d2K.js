import{i as te,d as Le,c8 as Se,e as l,s as qe,l as T,r as j,v as Ve,U as W,o as i,p as c,g as e,F as k,q as C,b as g,t as r,a as f,w as X,n as u,c as Me,cb as Ie,c9 as Te,M as h,cc as je,a2 as He,ap as De,ca as Pe,m as Ue,ae as ee,u as Be,cd as Ne}from"./index-CpJFga7x.js";import{g as Ae}from"./order-DJfPbIWf.js";/* empty css                  */import{D as Oe}from"./index-DLxi--Yj.js";import{I as ze}from"./index--0mKpQel.js";import{I as Qe}from"./index-Dhx8Vlw0.js";import{S as $e}from"./index-Cg1ZmWJU.js";import{D as Fe}from"./index-AQEtrbEO.js";import"./useLengthLimit-OjWIxDWr.js";import"./log-ZJhmUOBa.js";import"./useReadonly-Bx8TEnun.js";import"./const-BD0RkfTU.js";import"./useVModel-CzdLJ13E.js";import"./useResizeObserver-ONY0TviC.js";import"./dep-d524834c-s9Vwwbzr.js";import"./browse-CF75H87A.js";import"./close-circle-filled-1kZBSjap.js";import"./useCommonClassName-DGbYtLoH.js";import"./number--X5gY8kS.js";function Re(){return te.post({url:"/home/pay/payChannel"})}function Ee(L){return te.post({url:"/home/pay/payOrder",params:L})}function Ze(L){const d=window.location.origin,S=new URL("/home/pay/pay",d);return S.search=new URLSearchParams({trade_no:L.trade_no}).toString(),S.toString()}const Ge={class:"home",style:{"background-image":"linear-gradient(90deg, #f5f5fa, #f5f5fa 50%, #fff 0)"}},Ye={class:"flex flex-col min-h-screen text-base font-sans"},Je={class:"header fixed top-0 lg:z-40 z-20 bg-white w-full font-sans-alt"},Ke={class:"flex max-w-1440 mx-auto"},We={class:"header-logo flex-shrink-0 w-376 lg:block hidden"},Xe={class:"block h-54 max-w-200 -mt-8",href:"/"},et=["src"],tt=De('<span class="flex items-center h-24 w-24 mr-8 p-2 flex-grow-0 flex-shrink-0"><svg class="h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14"><path d="M19,8H1A1,1,0,0,1,1,6H19a1,1,0,0,1,0,2Z"></path><path d="M19,2H1A1,1,0,0,1,1,0H19a1,1,0,0,1,0,2Z"></path><path d="M19,14H1a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z"></path></svg></span>',1),st=[tt],ot=e("span",{class:"header-item hover:text-xenon-600 border-b-2 flex items-center h-full cursor-pointer transition-fast-out"}," 首页 ",-1),nt=[ot],at=e("span",{class:"header-item hover:text-xenon-600 border-b-2 flex items-center h-full cursor-pointer transition-fast-out"}," 查询订单 ",-1),lt=[at],it=e("span",{class:"header-item hover:text-xenon-600 border-b-2 flex items-center h-full cursor-pointer transition-fast-out"}," 联系我们 ",-1),ct=[it],rt={class:"flex-1 mx-auto w-full max-w-1440 bg-white pt-72"},dt={class:"flex h-full",style:{height:"100%",position:"relative"}},ut={class:"fixed top-0 flex-shrink-0 bg-x-gradient-grey-200-grey-400-80 leading-tight lg:w-376 lg:flex lg:flex-col z-30 h-screen w-full hidden","data-target":"app.sidebar"},_t=e("div",{class:"lg:block h-72 flex-grow-0 flex-shrink-0 hidden"},null,-1),mt={class:"flex-grow w-inherit overflow-y-auto h-full"},ht={class:"h-full"},ft={class:"px-40 pt-48 pb-24"},pt=e("button",{class:"block mb-32 text-xs font-semibold leading-none uppercase tracking-wide text-grey-700-opacity-60 focus:outline-none"},[e("span",null," 商品栏目 ")],-1),vt=["onClick"],gt={class:"flex items-center"},xt={class:"px-40"},yt={class:"items-center -mx-16 py-16 border-grey-400-opacity-60 border-solid border-t"},bt={class:"block mx-16 py-8 text-sm text-grey-700 hover:text-grey-800 transition-fast-out"},wt=["innerHTML"],kt=e("span",{class:"flex items-center h-16 w-16 mr-16 flex-grow-0 flex-shrink-0"},[e("svg",{class:"block h-full",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14"},[e("path",{d:"M8.41,7l5.3-5.29A1,1,0,1,0,12.29.29L7,5.59,1.71.29A1,1,0,0,0,.29,1.71L5.59,7,.29,12.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L7,8.41l5.29,5.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"})])],-1),Ct=e("span",{class:"block flex-grow-0 flex-shrink-0 mt-2 font-sans-alt text-base leading-none"}," 关闭 ",-1),Lt=[kt,Ct],St={class:"w-full lg:ml-376 overflow-x-hidden goods-con"},qt={class:"p-24 md:px-56 md:pt-48 md:pb-24"},Vt={class:"mb-4 flex justify-between items-start"},Mt={class:"text-xs leading-tight"},It={class:"font-sans-alt font-semibold tracking-wide"},Tt={class:"grid grid-rows gap-4 sm:grid-cols-2"},jt={class:"bg-white p-4"},Ht=["src"],Dt={class:"bg-white p-4"},Pt=e("div",{class:"flex items-center justify-between"},null,-1),Ut={class:"flex items-center p-4"},Bt=e("label",{for:"contact",class:"mr-5"},"商品价格",-1),Nt={class:"text-xl font-bold text-red-400"},At={class:"flex items-center justify-between center p-4"},Ot={class:"flex items-center justify-between"},zt=e("label",{for:"contact",class:"mr-5"},"剩余库存",-1),Qt={class:"flex items-center justify-between"},$t=e("label",{for:"contact",class:"mr-5"},"已售",-1),Ft={class:"flex items-center p-4 gap-1"},Rt=e("label",{for:"contact",class:"w-64"},"联系方式",-1),Et={class:"flex-1"},Zt={class:"flex items-center p-4 gap-1"},Gt=e("label",{for:"num",class:"w-64"},"购买数量",-1),Yt={class:"flex-1"},Jt={key:0,class:"flex items-center p-4 gap-1"},Kt=e("label",{for:"num",class:"w-64"},"用优惠券",-1),Wt={class:"flex-1"},Xt={key:1,class:"flex items-center p-4 gap-1"},es=e("label",{for:"num",class:"w-64"},"优惠券号",-1),ts={class:"flex-1"},ss={key:2,class:"flex items-center p-4 gap-1"},os=e("div",{class:"w-64"},"取卡密码",-1),ns={class:"flex-1"},as=e("div",{class:"flex items-center p-4"},[e("label",{for:"num",class:"mr-5 w-100"},"选择支付方式")],-1),ls={class:"flex items-center p-4"},is={class:"variations__list",id:"pay-type"},cs=["onClick"],rs={style:{float:"left"}},ds=["src"],us={class:"flex items-center p-4"},_s={key:0,class:"s"},ms={class:"flex items-center p-4"},hs={key:0},fs={class:"bg-white"},ps={class:"p-4"},vs=e("h2",{class:"text-xl font-bold text-gray-800"},"商品详情",-1),gs={class:"text-gray-700 mt-4"},xs=["innerHTML"],ys={key:0,class:"p-4"},bs=e("h2",{class:"text-l font-bold text-gray-800"},"满减优惠",-1),ws={class:"flex items-center justify-between"},ks={for:"contact",class:"mr-2"},Cs={class:"text-sm font-bold text-red-400"},Ls={key:1,class:"p-4"},Ss=e("h2",{class:"text-sl font-bold text-gray-800"},"活动赠送",-1),qs={class:"flex items-center justify-between"},Vs={for:"contact",class:"mr-2"},Ms={class:"text-sm font-bold text-red-400"},Is={key:2,class:"p-4"},Ts=e("h2",{class:"text-l font-bold text-gray-800"},"附加赠送",-1),js={class:"flex items-center justify-between"},Hs={for:"contact",class:"mr-2"},Ds={class:"text-sm font-bold text-red-400"},Ps=["innerHTML"],oo=Le({__name:"goods",setup(L){const d=Se(),S=Pe(),q=Ue(),z=l();qe(()=>{z.value=S.params.id});const H=l(d.getCurrentCate),se=T(()=>d.config.site_logo),oe=T(()=>d.config.site_info_copyright),o=j({}),D=j({}),Q=l(d.config.goods_default_img);(async()=>{const t=await Ie({id:z.value});if(t.code===1){for(const s in t.data)o[s]=t.data[s],n.goods_id=t.data.id;t.data.slider_image!=null&&t.data.slider_image.length>0&&(Q.value=t.data.slider_image[0]);for(const s in t.data.cate)D[s]=t.data.cate[s],H.value=D.id;_e(),N()}})();const P=l([]),$=l([]),ne=async()=>{const t=await Te();t.code===1&&($.value=t.data.list,P.value=t.data.list,P.value.unshift({id:0,name:"全部"}))},ae=t=>{d.setCurrentCate(t),q.push({name:"index",params:{id:t}})},le=()=>{q.push({name:"index"})},ie=()=>{q.push({name:"order"})},ce=()=>{q.push({name:"about"})};Ve(()=>{ne()});const F=l(!1),re=()=>{F.value=!0;const t=document.querySelector('[data-target="app.sidebar"]');t.classList.toggle("flex"),t.classList.toggle("flex-col"),t.classList.remove("hidden")},de=()=>{F.value=!1;const t=document.querySelector('[data-target="app.sidebar"]');t.classList.toggle("hidden"),t.classList.remove("flex"),t.classList.remove("flex-col")},ue=t=>{const s=$.value.find(v=>v.id===t);return s?s.name:""},V=l([]),x=j({channel_id:0});(async()=>{const t=await Re();t.code?(V.value=t.data,x.channel_id=V.value.length?V.value[0].channel_id:0,n.pid=x.channel_id):console.error("支付方式加载失败")})();const y=l("无限制"),M=l("填写QQ号或手机号!"),_e=()=>{o.contact_limit==="any"?y.value="任意字符串":o.contact_limit==="mobile"?(y.value="只能输入手机号",M.value="请填写您的手机号!"):o.contact_limit==="email"?(y.value="只能输入邮箱",M.value="请填写您的邮箱!"):o.contact_limit==="qq"?(y.value="只能输入QQ号",M.value="请填写您的QQ号!"):y.value="请输入联系方式"},b=l(!1);W(()=>b.value,t=>{if(t){n.is_coupon=1;return}n.is_coupon=0});const me=t=>{x.channel_id=t,n.pid=t},he=t=>{t&&(N(),t>o.cards_stock_count&&h.error("库存不足"))},n=j({goods_id:0,contact:"",coupon_code:"",pwdforsearch:"",isemail:0,email:"",pid:x.channel_id,is_coupon:0,quantity:o.limit_quantity?o.limit_quantity:1,agreement:!1});W(()=>n.coupon_code,t=>{t&&N()});const fe=t=>t.toFixed(2),pe=(t,s,v)=>(s.sort((m,O)=>m.num-O.num).forEach(m=>{v>=m.num&&(t=m.price)}),t),U=l(0),_=l(0),w=l(0),R=l(0),p=l(0),B=l(""),N=async()=>{if(R.value=o.price,w.value=o.price,o.wholesale_discount_list!=null&&(w.value=pe(o.price,o.wholesale_discount_list,n.quantity)),U.value=R.value*n.quantity,w.value>0?_.value=w.value*n.quantity:_.value=U.value,b.value===!0&&n.coupon_code!==""){const t={coupon_code:n.coupon_code,goods_id:o.id,cate_id:D.id,quantity:n.quantity,total_price:w.value*n.quantity},s=await je(t);s.code===1?(s.data.type===1?p.value=s.data.amount:s.data.type===2&&(p.value=_.value*s.data.amount/100),B.value=`优惠券可用,优惠${s.data.amount}${s.data.type===1?"元":"%"}`,p.value>_.value&&(p.value=_.value,B.value=`优惠券可用,优惠${s.data.amount}${s.data.type===1?"元":"%"}，但大于订单金额，本单享受全额优惠【0元购买】`)):(B.value=s.msg,p.value=0)}_.value=parseFloat(fe(Number(_.value)-Number(p.value)))},ve=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),E=l(null),A=l(!1),Z=l(!1),G=l(""),ge=T(()=>d.config.show_purchase_agreement),I=l(!1),xe=()=>{n.agreement=!0,I.value=!1,Y()},ye=T(()=>d.config.shop_buy_protocol),Y=async()=>{if(n.contact===""){h.error("请填写联系方式");return}if(n.quantity===0){h.error("购买数量不能为0");return}if(n.pid===0){h.error("请选择支付方式");return}if(n.is_coupon===1&&n.coupon_code===""){h.error("请填写优惠券");return}if(ge&&!n.agreement){I.value=!0;return}const t=await Ee(n);if(t.code===1){h.success(t.msg);const s=await Ze({trade_no:t.data.trade_no});E.value=setInterval(async()=>{(await J(t.data.trade_no)).code===1&&(h.success("支付成功! "),Z.value=!0,G.value=t.data.trade_no,A.value=!1,clearInterval(E.value),be.value=!0)},3e3),await J(t.data.trade_no),setTimeout(()=>{A.value=!0,ve()?location.href=s:window.open(s)},1e3)}else h.error(t.msg)},be=l(!1),J=async t=>await Ae({trade_no:t});return(t,s)=>{const v=He,K=Oe,m=ze,O=Qe,we=$e,ke=Fe;return i(),c("div",Ge,[e("div",Ye,[e("header",Je,[e("div",Ke,[e("div",We,[e("a",Xe,[e("img",{src:se.value,class:"h-full w-full fill-current"},null,8,et)])]),e("nav",{class:"header-nav z-30 flex flex-grow items-center bg-white px-16 whitespace-no-wrap lg:h-auto h-72 min-w-0"},[e("div",{class:"flex lg:hidden"},[e("div",{class:"h-24 w-24 mr-24 ml-8 md:ml-40"},[e("button",{class:"flex items-center mr-32 text-grey-1000 hover:text-grey-1000 fill-current focus:outline-none focus:shadow-outline",onClick:re},st)])]),e("ul",{class:"h-full mx-24 uppercase leading-tight text-sm font-semibold tracking-wide flex"},[e("li",{class:"flex items-center h-full mx-16",onClick:le},nt),e("li",{class:"flex items-center h-full mx-16",onClick:ie},lt),e("li",{class:"flex items-center h-full mx-16",onClick:ce},ct)])])])]),e("div",rt,[e("div",dt,[e("aside",ut,[_t,e("div",mt,[e("div",ht,[e("div",ft,[pt,e("ul",null,[(i(!0),c(k,null,C(P.value,a=>(i(),c("li",{class:"mt-24 cursor-pointer",onClick:Ce=>ae(a.id)},[e("a",{class:ee(["flex items-center hover:text-xenon-600 transition-fast-out",{"text-xenon-600":H.value===a.id}])},[e("span",gt,r(a.name),1)],2)],8,vt))),256))])])])]),e("div",xt,[e("div",yt,[e("div",bt,[e("p",{innerHTML:oe.value},null,8,wt),g(" 骑士发卡（个人版）qqss.net ")])])]),e("button",{class:"flex lg:hidden absolute items-center top-0 right-0 mt-48 mr-40 text-grey-700-opacity-90 hover:text-grey-700 fill-current transition-fast-out focus:outline-none focus:shadow-outline",onClick:de},Lt)]),e("div",St,[e("div",qt,[e("div",Vt,[e("div",Mt,[e("div",It," 首页 / "+r(ue(H.value))+" / "+r(o.name),1)])]),f(v,{text:"支付中...",loading:A.value,size:"small",fullscreen:""},null,8,["loading"]),e("div",Tt,[e("div",jt,[e("img",{src:Q.value,alt:"商品图片",class:"w-fullobject-cover object-center"},null,8,Ht)]),e("div",Dt,[Pt,e("div",Ut,[Bt,e("div",null,[e("span",Nt,"￥"+r(o.price),1)])]),e("div",At,[e("div",Ot,[zt,e("div",null,r(o.cards_stock_count),1)]),e("div",Qt,[$t,e("div",null,r(o.cards_sold_count),1)])]),f(K,null,{default:X(()=>[g(" 开始下单 ")]),_:1}),e("div",Ft,[Rt,e("div",Et,[f(m,{modelValue:n.contact,"onUpdate:modelValue":s[0]||(s[0]=a=>n.contact=a),name:"contact",placeholder:M.value,clearable:""},null,8,["modelValue","placeholder"])])]),e("div",Zt,[Gt,e("div",Yt,[f(O,{modelValue:n.quantity,"onUpdate:modelValue":s[1]||(s[1]=a=>n.quantity=a),step:1,max:o.cards_stock_count,min:o.limit_quantity,"auto-width":"",clearable:"",onChange:he},null,8,["modelValue","max","min"])])]),o.coupon_type?(i(),c("div",Jt,[Kt,e("div",Wt,[f(we,{modelValue:b.value,"onUpdate:modelValue":s[2]||(s[2]=a=>b.value=a)},null,8,["modelValue"])])])):u("",!0),b.value&&o.coupon_type?(i(),c("div",Xt,[es,e("div",ts,[f(m,{modelValue:n.coupon_code,"onUpdate:modelValue":s[3]||(s[3]=a=>n.coupon_code=a),name:"coupon_code",placeholder:"请填写你的优惠券"},null,8,["modelValue"])])])):u("",!0),!o.buy_need_login&&o.take_card_type!=0?(i(),c("div",ss,[os,e("div",ns,[o.take_card_type!=0?(i(),Me(m,{key:0,modelValue:n.pwdforsearch,"onUpdate:modelValue":s[4]||(s[4]=a=>n.pwdforsearch=a),placeholder:"请输入取卡密码（6-20位）"},null,8,["modelValue"])):u("",!0)])])):u("",!0),as,e("div",ls,[e("div",is,[(i(!0),c(k,null,C(V.value,a=>(i(),c("span",{class:ee(["pay-type btn",x.channel_id==a.channel_id?"active":""]),onClick:Ce=>me(a.channel_id)},[e("span",rs,[e("img",{style:{width:"21px"},src:Be(Ne)(a.ico)},null,8,ds)]),e("span",null,r(a.show_name),1)],10,cs))),256))])]),e("div",us,[e("button",{class:"bg-blue-500 text-white px-40 py-2 ml-2",onClick:Y},[g(" (￥"+r(_.value)+" ",1),o.coupon_type&&n.coupon_code?(i(),c("span",_s,"原价："+r(U.value),1)):u("",!0),g(") 立即下单 ")])]),e("div",ms,[Z.value?(i(),c("div",hs,"支付成功！！ 订单号为："+r(G.value),1)):u("",!0)])])]),e("div",fs,[e("div",ps,[vs,e("div",gs,[e("p",{innerHTML:o.content},null,8,xs)])]),o.wholesale_discount_list!=null&&o.wholesale_discount_list.length>0?(i(),c("div",ys,[bs,(i(!0),c(k,null,C(o.wholesale_discount_list,a=>(i(),c("div",ws,[e("label",ks,"买满"+r(a.num)+"件",1),e("span",Cs,"单价"+r(a.price)+"元",1)]))),256))])):u("",!0),o.event_give!=null&&o.event_give.length>0?(i(),c("div",Ls,[Ss,(i(!0),c(k,null,C(o.event_give,a=>(i(),c("div",qs,[e("label",Vs,"每买"+r(a.num)+"件",1),e("span",Ms,"赠送"+r(a.give_num)+"件",1)]))),256))])):u("",!0),o.addtion_give!=null&&o.addtion_give.length>0?(i(),c("div",Is,[Ts,(i(!0),c(k,null,C(o.addtion_give,a=>(i(),c("div",js,[e("label",Hs,"买满"+r(a.bug_num)+"件",1),e("span",Ds,[g("赠送`"),e("b",null,r(a.goods_name),1),g("`商品"+r(a.give_num)+"件",1)])]))),256))])):u("",!0)])])])])])]),f(ke,{visible:I.value,"onUpdate:visible":s[5]||(s[5]=a=>I.value=a),"close-on-overlay-click":!1,header:"购卡协议",mode:"modal",draggable:"","confirm-btn":"同意协议，并继续下单","on-confirm":xe},{body:X(()=>[e("div",{innerHTML:ye.value},null,8,Ps)]),_:1},8,["visible"])])}}});export{oo as default};
