(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/config/upgrade-equity"],{"44f0":function(e,t,n){},"5b30":function(e,t,n){"use strict";n.r(t);var r=n("7013"),u=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t["default"]=u.a},7013:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("a34a")),u=o(n("8570")),a=n("2f62");function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,u,a,o){try{var i=e[a](o),s=i.value}catch(c){return void n(c)}i.done?t(s):Promise.resolve(s).then(r,u)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,u){var a=e.apply(t,n);function o(e){i(a,r,u,o,s,"next",e)}function s(e){i(a,r,u,o,s,"throw",e)}o(void 0)})}}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={data:function(){return{imgList:[{imgUrl:"../../../static/images/up-img.png"}],number:0}},computed:c({},(0,a.mapState)(["userInfo","userMsg"])),onShow:function(){this.sendRequest()},methods:{sendRequest:function(){var t=s(r.default.mark(function t(){var n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$request.post("/share/upgrade",{header:{token:this.userInfo.token}});case 3:n=t.sent,console.log(e(n," at pages\\user\\config\\upgrade-equity.vue:52")),this.number=n.data.data.subordinate_number,this.$common.checkStatus(n.data.code),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error(e("error:",t.t0," at pages\\user\\config\\upgrade-equity.vue:57"));case 12:case"end":return t.stop()}},t,this,[[0,9]])}));function n(){return t.apply(this,arguments)}return n}(),invite:function(){var t=this,n=this;console.log(e(this.userMsg," at pages\\user\\config\\upgrade-equity.vue:62"));var r={href:"https://www.kuguayouhui.com/site/download?code=".concat(this.userMsg.invite_code),title:"您的好友".concat(this.userMsg.realname,"邀请您使用苦瓜优惠券"),desc:"多种大额优惠券等你来领",imgUrl:this.userMsg.avatar},a=r.href;this.shareObj=(0,u.default)(r,function(e){n.$common.switchShare2(e,r,a)}),this.$nextTick(function(){t.shareObj.alphaBg.show(),t.shareObj.shareMenu.show()})}}};t.default=l}).call(this,n("0de9")["default"])},"78b3":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return u})},aa99:function(e,t,n){"use strict";var r=n("44f0"),u=n.n(r);u.a},fa6f:function(e,t,n){"use strict";n.r(t);var r=n("78b3"),u=n("5b30");for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);n("aa99");var o=n("2877"),i=Object(o["a"])(u["default"],r["a"],r["b"],!1,null,"428d0b6d",null);t["default"]=i.exports}},[["1cf2","common/runtime","common/vendor"]]]);