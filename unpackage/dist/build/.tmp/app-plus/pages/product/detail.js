(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/detail"],{"4bdc":function(t,e,n){"use strict";n.r(e);var o=n("f532"),a=n("57d8");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("6193");var s=n("2877"),r=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},"57d8":function(t,e,n){"use strict";n.r(e);var o=n("d89d"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},6193:function(t,e,n){"use strict";var o=n("e4cf"),a=n.n(o);a.a},d89d:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(n("a34a")),i=n("2f62");function s(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,o,a,i,s){try{var r=t[i](s),c=r.value}catch(u){return void n(u)}r.done?e(c):Promise.resolve(c).then(o,a)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(o,a){var i=t.apply(e,n);function s(t){r(i,o,a,s,c,"next",t)}function c(t){r(i,o,a,s,c,"throw",t)}s(void 0)})}}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){l(t,e,n[e])})}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(){return n.e("components/quick-skeleton/quick-skeleton").then(n.bind(null,"b700"))},p=function(){return n.e("components/uni-countdown").then(n.bind(null,"8858"))},h={data:function(){return{show:!1,showSkeleton:!0,timestamp:1e6,date:0,hour:"1",minutes:0,seconds:0,id:"",detail:"",goodsDetail:{collection:0,commission_money:.62,commission_rate:3.5,coupon_end_time:"2019-07-11 10:29:37",coupon_money:3,coupon_price:66,item_url:"https://s.click.taobao.com/6b1dx5w",id:"554978884331",origin_price:69,pgrade_price:1.85,pict_url:"https://img.alicdn.com/bao/uploaded/i3/684552209/O1CN014rK23x1SBlRE95Q68_!!0-item_pic.jpg",ratio_price:1.16,recommend:"",small_images:[],sub_title:"",title:"老北京布鞋男鞋透气男单鞋中老年爸爸鞋厚底防滑软底休闲大码鞋子",type:1,volume:1562},swiperList:[],currentSwiper:0,isKeep:!1,url:""}},components:{skeleton:d,countdown:p},computed:u({},(0,i.mapState)(["hasLogin","userInfo","userMsg"])),onLoad:function(t){this.id=t.id},onReady:function(){var t=this;t.$refs.float.sendRequest()},onShow:function(){var t=this;t.$refs.skeleton.attachedAction(),t.$refs.skeleton.readyAction(),this.sendRequest()},onPageScroll:function(t){},onReachBottom:function(){},mounted:function(){},methods:{sendRequest:function(){var e=c(a.default.mark(function e(){var n,o,i,s,r,c,u,l,d,p,h,f;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,this.hasLogin){e.next=24;break}return e.next=4,this.$request.post("/product/show",{data:{id:this.id}});case 4:n=e.sent,o=n.data.data,console.log(t(o," at pages\\product\\detail.vue:196")),this.$common.checkStatus(n.data.code),this.swiperList=o.small_images,i=this.$common.formatTime(o.expire_at),o.time=i,s=Number(new Date(i)),r=s-Number(new Date),this.date=parseInt(r/1e3/60/60/24%30),this.hour=parseInt(r/1e3/60/60%24),this.minutes=parseInt(r/1e3/60%60),this.seconds=parseInt(r/1e3%60),c=(o.discountPrice-o.couponAmount).toFixed(1),o.afterPrice=c,o.couponAmount=parseInt(o.couponAmount),this.goodsDetail=o,this.callBack(),e.next=45;break;case 24:return e.next=26,this.$request.post("/product/show",{data:{id:this.id},header:{token:this.userInfo.token}});case 26:u=e.sent,l=u.data.data,console.log(t(l," at pages\\product\\detail.vue:223")),this.$common.checkStatus(u.data.code),this.swiperList=l.small_images,d=this.$common.formatTime(l.expire_at),l.time=d,p=Number(new Date(d)),h=p-Number(new Date),this.date=parseInt(h/1e3/60/60/24%30),this.hour=parseInt(h/1e3/60/60%24),this.minutes=parseInt(h/1e3/60%60),this.seconds=parseInt(h/1e3%60),f=(l.discountPrice-l.couponAmount).toFixed(1),l.afterPrice=f,l.couponAmount=parseInt(l.couponAmount),this.url=l.coupon_click_url,this.goodsDetail=l,this.callBack();case 45:e.next=50;break;case 47:e.prev=47,e.t0=e["catch"](0),console.error(t("error:",e.t0," at pages\\product\\detail.vue:243"));case 50:case"end":return e.stop()}},e,this,[[0,47]])}));function n(){return e.apply(this,arguments)}return n}(),callBack:function(){this.showSkeleton=!1,this.show=!0,o.stopPullDownRefresh()},swiperChange:function(t){this.currentSwiper=t.detail.current},toTaobao:function(){var e=c(a.default.mark(function e(){var n,i,s;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=this,this.hasLogin){e.next=5;break}o.showModal({title:"请先登录！",content:"您目前尚未登录",success:function(e){e.confirm?o.navigateTo({url:"/pages/login/login"}):e.cancel&&console.log(t("用户点击取消"," at pages\\product\\detail.vue:268"))}}),e.next=10;break;case 5:return e.next=7,this.$request.post("/authorization/taobao-verify",{header:{token:this.userInfo.token}});case 7:i=e.sent,console.log(t(i," at pages\\product\\detail.vue:279")),0===i.data.code?(s=n.url,plus.runtime.openURL(s.replace("https","taobao").replace("http","taobao"),function(t){o.showModal({content:"未检测到手机淘宝",showCancel:!1,success:function(t){o.showToast({title:"优惠券领取失败",icon:"none"})}})})):n.$common.taoLogin();case 10:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),share:function(){this.shareClass="show"},getDeail:function(){var e=this,n="https://h5api.m.taobao.com/h5/mtop.taobao.detail.getdesc/6.0/?jsv=2.4.0&appKey=12574478&t=1560248888574&sign=2db06c3e2c1ec60d2cb53e4f06e92077&api=mtop.taobao.detail.getdesc&v=6.0&AntiFlool=true&AntiCreep=true&type=jsonp&dataType=jsonp&callback=mtopjsonp1&data=%7b%22id%22%3a%22".concat(this.goodsDetail.id,"%22%2c%22type%22%3a%221%22%7d");o.request({url:n,dataType:"jsonp",method:"POST",jsonpCallback:"mtopjsonp1",header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){console.log(t(JSON.parse(n.data)," at pages\\product\\detail.vue:322")),e.detail=n.data.data.pcDescContent}})},hideShare:function(){var t=this;this.shareClass="hide",setTimeout(function(){t.shareClass="none"},150)},keep:function(){this.isKeep=!this.isKeep},toHome:function(){o.switchTab({url:"/pages/index/index"})},shareGoods:function(){var e=c(a.default.mark(function e(){var n,i;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=this,this.hasLogin){e.next=5;break}o.showModal({title:"请先登录！",content:"您目前尚未登录",success:function(e){e.confirm?o.navigateTo({url:"/pages/login/login"}):e.cancel&&console.log(t("用户点击取消"," at pages\\product\\detail.vue:354"))}}),e.next=10;break;case 5:return e.next=7,this.$request.post("/authorization/taobao-verify",{header:{token:this.userInfo.token}});case 7:i=e.sent,console.log(t(i," at pages\\product\\detail.vue:365")),0===i.data.code?o.navigateTo({url:"./share?type=other&id=".concat(this.id)}):n.$common.taoLogin();case 10:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),toSwiper:function(){o.previewImage({urls:this.swiperList})}}};e.default=h}).call(this,n("0de9")["default"],n("6e42")["default"])},e4cf:function(t,e,n){},f532:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})}},[["2b76","common/runtime","common/vendor"]]]);