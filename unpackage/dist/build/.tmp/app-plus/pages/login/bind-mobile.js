(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/bind-mobile"],{"390d":function(e,t,n){"use strict";n.r(t);var o=n("ff24"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},5130:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},"8ae1":function(e,t,n){"use strict";n.r(t);var o=n("5130"),r=n("390d");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("b73e");var s=n("2877"),i=Object(s["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=i.exports},b73e:function(e,t,n){"use strict";var o=n("f6e2"),r=n.n(o);r.a},f6e2:function(e,t,n){},ff24:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a,s=u(n("a34a")),i=n("2f62");function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,o,r,a,s){try{var i=e[a](s),u=i.value}catch(c){return void n(c)}i.done?t(u):Promise.resolve(u).then(o,r)}function d(e){return function(){var t=this,n=arguments;return new Promise(function(o,r){var a=e.apply(t,n);function s(e){c(a,o,r,s,i,"next",e)}function i(e){c(a,o,r,s,i,"throw",e)}s(void 0)})}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h={data:function(){return{phoneData:"",passData:"",showPassword:!1,second:0,verCode:""}},mounted:function(){r=this,clearInterval(a)},computed:f({},(0,i.mapState)(["userMsg"]),{getVerCodeSecond:function(){return this.second<=0?"获取验证码":this.second<10?"0"+this.second:this.second}}),methods:f({},(0,i.mapMutations)(["login","getMsg"]),{isShowPass:function(){r.showPassword=!r.showPassword},getVerCode:function(){var t=d(s.default.mark(function t(){var n;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(/^1[3456789]\d{9}$/.test(this.phoneData)){t.next=3;break}return e.showToast({icon:"none",position:"bottom",title:"手机号不正确"}),t.abrupt("return",!1);case 3:if(!(r.second>0)){t.next=5;break}return t.abrupt("return",!1);case 5:return t.next=7,this.$request.post("sms/index",{data:{mobile:this.phoneData},header:{token:this.userInfo.token}});case 7:n=t.sent,this.$common.checkStatus(n.data.code),this.$common.returnMsg(n.data.msg),0===n.data.code&&(r.second=60,a=setInterval(function(){r.second--,0==r.second&&clearInterval(a)},1e3));case 11:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),bindMobile:function(){var t=d(s.default.mark(function t(){var n,r;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(11==this.phoneData.length){t.next=3;break}return e.showToast({icon:"none",position:"bottom",title:"手机号不正确"}),t.abrupt("return",!1);case 3:return t.prev=3,t.next=6,this.$request.post("/auth/new-login",{data:{"userinfo[openid]":this.userMsg.openid,"userinfo[unionid]":this.userMsg.unionid,"userinfo[access_token]":this.userMsg.access_token,type:"mobile",mobile:this.phoneData,smsCode:1234}});case 6:if(n=t.sent,console.log(o(n," at pages\\login\\bind-mobile.vue:155")),0==n.data.code){t.next=12;break}e.showToast({title:n.data.msg,duration:1500,icon:"none"}),t.next=19;break;case 12:return e.showToast({title:"绑定手机号成功",duration:1500,icon:"none"}),t.next=15,this.$request.post("/users",{header:{token:n.data.data.token}});case 15:r=t.sent,this.login(n.data.data),this.getMsg(r.data.data),setTimeout(function(){e.switchTab({url:"/pages/user/user"})},1500);case 19:t.next=23;break;case 21:t.prev=21,t.t0=t["catch"](3);case 23:case"end":return t.stop()}},t,this,[[3,21]])}));function n(){return t.apply(this,arguments)}return n}()})};t.default=h}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["b0cc","common/runtime","common/vendor"]]]);