(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/register"],{4728:function(e,t,n){"use strict";n.r(t);var o=n("9283"),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=r.a},6925:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},7906:function(e,t,n){},9283:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i,a=u(n("a34a")),s=n("2f62");function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,o,r,i,a){try{var s=e[i](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(o,r)}function l(e){return function(){var t=this,n=arguments;return new Promise(function(o,r){var i=e.apply(t,n);function a(e){c(i,o,r,a,s,"next",e)}function s(e){c(i,o,r,a,s,"throw",e)}a(void 0)})}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){d(e,t,n[t])})}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g={data:function(){return{phoneData:"",passData:"",showPassword:!1,second:0,verCode:"",showAgree:!0}},mounted:function(){r=this,clearInterval(i)},methods:f({},(0,s.mapMutations)(["getMsg"]),{isShowPass:function(){r.showPassword=!r.showPassword},isShowAgree:function(){r.showAgree=!r.showAgree},getVerCode:function(){return 11!=r.phoneData.length?(e.showToast({icon:"none",position:"bottom",title:"手机号不正确"}),!1):!(r.second>0)&&(r.second=60,i=setInterval(function(){r.second--,0==r.second&&clearInterval(i)},1e3),void console.log(o("获取验证码"," at pages\\login\\register.vue:116")))},wxLog:function(){var t=l(a.default.mark(function t(n){var r,i;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=this,t.next=3,r.$request.post("/auth/new-login",{data:{"userinfo[openid]":n.openid,"userinfo[unionid]":n.unionid,"userinfo[access_token]":n.access_token}});case 3:i=t.sent,console.log(o(i," at pages\\login\\register.vue:127")),"invite_code"===i.data.data.type?(this.getMsg(i.data.data.userinfo),e.navigateTo({url:"/pages/login/bind-code"})):"mobile"===i.data.data.type?(this.getMsg(i.data.data.userinfo),e.navigateTo({url:"/pages/login/bind-mobile"})):e.showToast({title:"该账号已注册",duration:1500,icon:"none"});case 6:case"end":return t.stop()}},t,this)}));function n(e){return t.apply(this,arguments)}return n}(),startReg:function(){if(0==this.showAgree)return e.showToast({icon:"none",position:"bottom",title:"请先同意《苦瓜用户协议》"}),!1;e.login({provider:"weixin",success:function(e){console.log(o(e.authResult," at pages\\login\\register.vue:183")),r.wxLog(e.authResult)}})}}),computed:{getVerCodeSecond:function(){return this.second<=0?"获取验证码":this.second<10?"0"+this.second:this.second}}};t.default=g}).call(this,n("6e42")["default"],n("0de9")["default"])},f328:function(e,t,n){"use strict";n.r(t);var o=n("6925"),r=n("4728");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("f486");var a=n("2877"),s=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports},f486:function(e,t,n){"use strict";var o=n("7906"),r=n.n(o);r.a}},[["6072","common/runtime","common/vendor"]]]);