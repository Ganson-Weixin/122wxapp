(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zujinxinxi/add-or-update"],{2074:function(n,i,e){"use strict";var t,a=function(){var n=this,i=n.$createElement;n._self._c},u=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return u})),e.d(i,"a",(function(){return t}))},"66a6":function(n,i,e){},a8ee:function(n,i,e){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function u(n,i,e,t,a,u,r){try{var o=n[u](r),g=o.value}catch(s){return void e(s)}o.done?i(g):Promise.resolve(g).then(t,a)}function r(n){return function(){var i=this,e=arguments;return new Promise((function(t,a){var r=n.apply(i,e);function o(n){u(r,t,a,o,g,"next",n)}function g(n){u(r,t,a,o,g,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("9b8b"))}.bind(null,e)).catch(e.oe)},g={data:function(){return{ruleForm:{fangwumingcheng:"",fangwuleixing:"",suozaiquyu:"",xiangxidizhi:"",zujin:"",yonghuming:"",zukexingming:"",fangdongzhanghao:"",fangdongxingming:"",zhifupingzheng:"",sfsh:"",shhf:"",ispay:"",userid:""},fangwumingchengOptions:[],fangwumingchengIndex:0,fangdongzhanghaoOptions:[],fangdongzhanghaoIndex:0,user:{},ro:{fangwumingcheng:!1,fangwuleixing:!1,suozaiquyu:!1,xiangxidizhi:!1,zujin:!1,yonghuming:!1,zukexingming:!1,fangdongzhanghao:!1,fangdongxingming:!1,zhifupingzheng:!1,sfsh:!1,shhf:!1,ispay:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var i=r(t.default.mark((function i(e){var a,u,r,o;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=n.getStorageSync("nowTable"),i.next=3,this.$api.session(a);case 3:return u=i.sent,this.user=u.data,this.ruleForm.yonghuming=this.user.yonghuming,this.ruleForm.zukexingming=this.user.zukexingming,i.next=9,this.$api.option("fangwuxinxi","fangwumingcheng",{});case 9:return u=i.sent,this.fangwumingchengOptions=u.data,i.next=13,this.$api.option("fangdong","fangdongzhanghao",{});case 13:if(u=i.sent,this.fangdongzhanghaoOptions=u.data,this.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){i.next=23;break}return this.ruleForm.id=e.id,i.next=21,this.$api.info("zujinxinxi",this.ruleForm.id);case 21:u=i.sent,this.ruleForm=u.data;case 23:if(!e.cross){i.next=74;break}r=n.getStorageSync("crossObj"),i.t0=t.default.keys(r);case 26:if((i.t1=i.t0()).done){i.next=74;break}if(o=i.t1.value,"fangwumingcheng"!=o){i.next=32;break}return this.ruleForm.fangwumingcheng=r[o],this.ro.fangwumingcheng=!0,i.abrupt("continue",26);case 32:if("fangwuleixing"!=o){i.next=36;break}return this.ruleForm.fangwuleixing=r[o],this.ro.fangwuleixing=!0,i.abrupt("continue",26);case 36:if("suozaiquyu"!=o){i.next=40;break}return this.ruleForm.suozaiquyu=r[o],this.ro.suozaiquyu=!0,i.abrupt("continue",26);case 40:if("xiangxidizhi"!=o){i.next=44;break}return this.ruleForm.xiangxidizhi=r[o],this.ro.xiangxidizhi=!0,i.abrupt("continue",26);case 44:if("zujin"!=o){i.next=48;break}return this.ruleForm.zujin=r[o],this.ro.zujin=!0,i.abrupt("continue",26);case 48:if("yonghuming"!=o){i.next=52;break}return this.ruleForm.yonghuming=r[o],this.ro.yonghuming=!0,i.abrupt("continue",26);case 52:if("zukexingming"!=o){i.next=56;break}return this.ruleForm.zukexingming=r[o],this.ro.zukexingming=!0,i.abrupt("continue",26);case 56:if("fangdongzhanghao"!=o){i.next=60;break}return this.ruleForm.fangdongzhanghao=r[o],this.ro.fangdongzhanghao=!0,i.abrupt("continue",26);case 60:if("fangdongxingming"!=o){i.next=64;break}return this.ruleForm.fangdongxingming=r[o],this.ro.fangdongxingming=!0,i.abrupt("continue",26);case 64:if("zhifupingzheng"!=o){i.next=68;break}return this.ruleForm.zhifupingzheng=r[o],this.ro.zhifupingzheng=!0,i.abrupt("continue",26);case 68:if("userid"!=o){i.next=72;break}return this.ruleForm.userid=r[o],this.ro.userid=!0,i.abrupt("continue",26);case 72:i.next=26;break;case 74:this.styleChange();case 75:case"end":return i.stop()}}),i,this)})));function e(n){return i.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fangwumingchengChange:function(){var n=r(t.default.mark((function n(i){var e;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.fangwumingchengIndex=i.target.value,this.ruleForm.fangwumingcheng=this.fangwumingchengOptions[this.fangwumingchengIndex],n.next=4,this.$api.follow("fangwuxinxi","fangwumingcheng",{columnValue:this.ruleForm.fangwumingcheng});case 4:e=n.sent,e.data.fangwuleixing&&(this.ruleForm.fangwuleixing=e.data.fangwuleixing),e.data.suozaiquyu&&(this.ruleForm.suozaiquyu=e.data.suozaiquyu),e.data.xiangxidizhi&&(this.ruleForm.xiangxidizhi=e.data.xiangxidizhi),e.data.zujin&&(this.ruleForm.zujin=e.data.zujin),e.data.fangdongxingming&&(this.ruleForm.fangdongxingming=e.data.fangdongxingming);case 10:case"end":return n.stop()}}),n,this)})));function i(i){return n.apply(this,arguments)}return i}(),fangdongzhanghaoChange:function(){var n=r(t.default.mark((function n(i){var e;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.fangdongzhanghaoIndex=i.target.value,this.ruleForm.fangdongzhanghao=this.fangdongzhanghaoOptions[this.fangdongzhanghaoIndex],n.next=4,this.$api.follow("fangdong","fangdongzhanghao",{columnValue:this.ruleForm.fangdongzhanghao});case 4:e=n.sent,e.data.fangwuleixing&&(this.ruleForm.fangwuleixing=e.data.fangwuleixing),e.data.suozaiquyu&&(this.ruleForm.suozaiquyu=e.data.suozaiquyu),e.data.xiangxidizhi&&(this.ruleForm.xiangxidizhi=e.data.xiangxidizhi),e.data.zujin&&(this.ruleForm.zujin=e.data.zujin),e.data.fangdongxingming&&(this.ruleForm.fangdongxingming=e.data.fangdongxingming);case 10:case"end":return n.stop()}}),n,this)})));function i(i){return n.apply(this,arguments)}return i}(),zhifupingzhengTap:function(){var n=this;this.$api.upload((function(i){n.ruleForm.zhifupingzheng=n.$base.url+"upload/"+i.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=r(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.ruleForm.id){n.next=5;break}return n.next=3,this.$api.update("zujinxinxi",this.ruleForm);case 3:n.next=7;break;case 5:return n.next=7,this.$api.add("zujinxinxi",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return n.stop()}}),n,this)})));function i(){return n.apply(this,arguments)}return i}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var i=new Date,e=i.getFullYear(),t=i.getMonth()+1,a=i.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(e,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};i.default=g}).call(this,e("543d")["default"])},ada1:function(n,i,e){"use strict";e.r(i);var t=e("2074"),a=e("dccc");for(var u in a)"default"!==u&&function(n){e.d(i,n,(function(){return a[n]}))}(u);e("cf76");var r,o=e("f0c5"),g=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"95f489ea",null,!1,t["a"],r);i["default"]=g.exports},cf76:function(n,i,e){"use strict";var t=e("66a6"),a=e.n(t);a.a},dccc:function(n,i,e){"use strict";e.r(i);var t=e("a8ee"),a=e.n(t);for(var u in t)"default"!==u&&function(n){e.d(i,n,(function(){return t[n]}))}(u);i["default"]=a.a},e3cf:function(n,i,e){"use strict";(function(n){e("ab4c"),e("921b");t(e("66fd"));var i=t(e("ada1"));function t(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,e("543d")["createPage"])}},[["e3cf","common/runtime","common/vendor"]]]);