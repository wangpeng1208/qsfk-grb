import{i as o}from"./index-DyfhlEKp.js";import{f as l}from"./date-DPLtFlJd.js";function n(e){return o.post({url:"/adminapi/goods/coupon/index",params:e})}function c(e){return o.post({url:"/adminapi/goods/coupon/add",data:e})}function s(e){return o.post({url:"/adminapi/goods/coupon/batchDel",params:e})}const u=[{label:"通用券",value:1},{label:"品类券",value:2},{label:"商品券",value:3}],p=[{label:"元",value:1},{label:"%",value:100}],r=[{colKey:"id",type:"multiple"},{colKey:"code",title:"优惠券"},{colKey:"coupon_type",title:"类型"},{colKey:"coupon_name",title:"关联内容",width:"300px"},{colKey:"amount",title:"面额"},{colKey:"create_at",title:"生成时间",cell(e,t){return e("span",l(t.row.create_at))}},{colKey:"status",title:"有效期"},{colKey:"min_banlance",title:"使用条件"},{colKey:"use_times",title:"剩余次数"},{colKey:"remark",title:"备注"}];export{c as a,s as b,u as c,n as g,p as i,r as l};
