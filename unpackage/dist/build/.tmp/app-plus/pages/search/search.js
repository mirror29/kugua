(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{5154:function(e,t,n){"use strict";var a=n("ab09"),o=n.n(a);o.a},"688e":function(e,t,n){"use strict";n.r(t);var a=n("c1e6"),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=o.a},7587:function(e,t,n){"use strict";n.r(t);var a=n("a4a2"),o=n("688e");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("5154");var s=n("2877"),i=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=i.exports},a4a2:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},ab09:function(e,t,n){},c1e6:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n("a34a")),r=n("2f62");function s(e){return e&&e.__esModule?e:{default:e}}function i(e){return l(e)||u(e)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function l(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function d(e,t,n,a,o,r,s){try{var i=e[r](s),c=i.value}catch(u){return void n(u)}i.done?t(c):Promise.resolve(c).then(a,o)}function f(e){return function(){var t=this,n=arguments;return new Promise(function(a,o){var r=e.apply(t,n);function s(e){d(r,a,o,s,i,"next",e)}function i(e){d(r,a,o,s,i,"throw",e)}s(void 0)})}}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){h(e,t,n[t])})}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"a487"))},m=function(){return n.e("components/guess-list").then(n.bind(null,"d3ce"))},v={data:function(){return{keyword:"",hotList:[],iconList:[{img:"../../static/images/fl/skirt_icon.png",name:"女装"},{img:"../../static/images/fl/man_icon.png",name:"男装"},{img:"../../static/images/fl/underwear_icon.png",name:"内衣"},{img:"../../static/images/fl/makeup_icon.png",name:"美妆"},{img:"../../static/images/fl/hat_icon.png",name:"配饰"},{img:"../../static/images/fl/shoes_icon.png",name:"鞋品"},{img:"../../static/images/fl/package_icon.png",name:"箱包"},{img:"../../static/images/fl/child1_icon.png",name:"母婴"},{img:"../../static/images/fl/home_icon.png",name:"居家"},{img:"../../static/images/fl/food_icon.png",name:"美食"}],mescroll:null,upOption:{page:{size:6},noMoreSize:4,empty:{tip:"~ 这里没有发现任何数据哦 ~",btnText:"返回首页"}},list:[],tipShow:!1,placeholder:"",oldKeywordList:[]}},components:{MescrollUni:g,List:m},onReady:function(){this.sendRequest(),this.loadOldKeyword(),this.$refs.float.sendRequest()},computed:p({},(0,r.mapState)(["showModal","clipText"])),onShow:function(){this.$common.searchClip()},updated:function(){""!=this.clipText?this.showM():this.$refs.modal.hideModal()},methods:{sendRequest:function(){var e=f(o.default.mark(function e(){var t,n;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$request.post("/search/default-keywords",{});case 2:return t=e.sent,this.placeholder=t.data.data.keyword,e.next=6,this.$request.post("/search/keywords",{});case 6:n=e.sent,this.hotList=n.data.data,this.getListDataFromNet();case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getListDataFromNet:function(){var t=f(o.default.mark(function t(n,r,s,i){var c,u,l,d,f,p,h,g,m,v;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,c="",e.getNetworkType({success:function(e){console.log(a(e.networkType," at pages\\search\\search.vue:161")),c="wifi"===e.networkType?"wifi":"cell"}}),u="",e.getSystemInfo({success:function(e){u=e.platform}}),t.next=7,this.$request.post("/product/guess-like",{data:{os:u,net:c}});case 7:for(l=t.sent,d=[],f=!0,p=!1,h=void 0,t.prev=12,g=l.data.data[Symbol.iterator]();!(f=(m=g.next()).done);f=!0)v=m.value,v.couponAmount=parseInt(v.couponAmount),d.push(v);t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](12),p=!0,h=t.t0;case 20:t.prev=20,t.prev=21,f||null==g.return||g.return();case 23:if(t.prev=23,!p){t.next=26;break}throw h;case 26:return t.finish(23);case 27:return t.finish(20);case 28:this.list=d,t.next=34;break;case 31:t.prev=31,t.t1=t["catch"](0),console.error(a("error:",t.t1," at pages\\search\\search.vue:192"));case 34:case"end":return t.stop()}},t,this,[[0,31],[12,16,20,28],[21,,23,27]])}));function n(e,n,a,o){return t.apply(this,arguments)}return n}(),navToDetailPage:function(t){var n=t;e.navigateTo({url:"/pages/product/detail-tao?num_iid=".concat(n)})},showM:function(){this.showModal&&this.$refs.modal.showModal()},toGoodsList:function(){var t="";t=""!=this.keyword?this.keyword:this.placeholder,this.saveKeyword(t),e.navigateTo({url:"/pages/product/goods-list?key=".concat(t)})},toGoodsList2:function(t){var n=t;this.saveKeyword(n);var a=escape(n);e.navigateTo({url:"/pages/product/goods-list?key=".concat(a)})},loadOldKeyword:function(){var t=this;e.getStorage({key:"OldKeys",success:function(e){var n=JSON.parse(e.data);t.oldKeywordList=n}})},saveKeyword:function(t){var n=this;e.getStorage({key:"OldKeys",success:function(o){console.log(a(o.data," at pages\\search\\search.vue:242"));var r=JSON.parse(o.data),s=r.indexOf(t);-1==s?r.unshift(t):(r.splice(s,1),r.unshift(t)),r.length>10&&r.pop(),e.setStorage({key:"OldKeys",data:JSON.stringify(r)}),n.oldKeywordList=r},fail:function(a){var o=[t];e.setStorage({key:"OldKeys",data:JSON.stringify(o)}),n.oldKeywordList=o}})},oldDelete:function(){var t=this;e.showModal({content:"确定清除历史搜索记录？",success:function(n){n.confirm?(console.log(a("用户点击确定"," at pages\\search\\search.vue:275")),t.oldKeywordList=[],e.removeStorage({key:"OldKeys"})):n.cancel&&console.log(a("用户点击取消"," at pages\\search\\search.vue:281"))}})}},onReachBottom:function(){var e=this,t=e.page++;e.$refs.loading.open();var n=this.$request.post("/taobao-buy/guess-like",{data:{page:t,page_size:6}});n.then(function(t){if(t.data.data){var n,a=!0,o=!1,r=void 0;try{for(var s,c=t.data.data[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var u=s.value,l=parseInt(u.coupon_amount),d=(u.zk_final_price-u.coupon_amount).toFixed(1);u.reduce=l,u.afterPrice=d}}catch(f){o=!0,r=f}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}(n=e.guessList).push.apply(n,i(t.data.data))}else t.data.data===[]&&(e.$refs.loading.close(),e.$refs.loading.over("没有更多了"))}).catch(function(e){})},onPullDownRefresh:function(){console.log(a("refresh"," at pages\\search\\search.vue:324")),this.sendRequest()}};t.default=v}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["98df","common/runtime","common/vendor"]]]);