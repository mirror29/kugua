(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search"],{"1bf4":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("a34a")),a=o(i("a487"));function o(t){return t&&t.__esModule?t:{default:t}}function l(t){return c(t)||r(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}function u(t,e,i,n,a,o,l){try{var s=t[o](l),r=s.value}catch(c){return void i(c)}s.done?e(r):Promise.resolve(r).then(n,a)}function d(t){return function(){var e=this,i=arguments;return new Promise(function(n,a){var o=t.apply(e,i);function l(t){u(o,n,a,l,s,"next",t)}function s(t){u(o,n,a,l,s,"throw",t)}l(void 0)})}}var f={data:function(){return{keyword:"",hotList:[{name:"排汗睡衣"},{name:"衬衫"},{name:"连衣裙"},{name:"乐高积木"}],iconList:[{img:"../../static/images/fl/skirt_icon.png",name:"女装"},{img:"../../static/images/fl/man_icon.png",name:"男装"},{img:"../../static/images/fl/underwear_icon.png",name:"内衣"},{img:"../../static/images/fl/makeup_icon.png",name:"美妆"},{img:"../../static/images/fl/hat_icon.png",name:"配饰"},{img:"../../static/images/fl/shoes_icon.png",name:"鞋品"},{img:"../../static/images/fl/package_icon.png",name:"箱包"},{img:"../../static/images/fl/child1_icon.png",name:"母婴"},{img:"../../static/images/fl/home_icon.png",name:"居家"},{img:"../../static/images/fl/food_icon.png",name:"美食"}],mescroll:null,upOption:{page:{size:6},noMoreSize:4,empty:{tip:"~ 这里没有发现任何数据哦 ~",btnText:"返回首页"}},list:[],tipShow:!1}},components:{MescrollUni:a.default},methods:{mescrollInit:function(t){this.mescroll=t},downCallback:function(t){t.resetUpScroll()},upCallback:function(t){var e=this;this.getListDataFromNet(t.num,t.size,function(i){t.endSuccess(i.length),1==t.num&&(e.list=[]),e.list=e.list.concat(i)},function(){t.endErr()})},emptyClick:function(){uni.switchTab({url:"/pages/index/index"})},getListDataFromNet:function(){var t=d(n.default.mark(function t(e,i,a,o){var l,s,r,c,u,d,f,p,k;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$request.post("/taobao-buy/guess-like",{data:{page:e,page_size:i}});case 3:for(l=t.sent,s=!0,r=!1,c=void 0,t.prev=7,u=l.data.data[Symbol.iterator]();!(s=(d=u.next()).done);s=!0)f=d.value,p=parseInt(f.coupon_amount),k=(f.zk_final_price-f.coupon_amount).toFixed(1),f.reduce=p,f.afterPrice=k;t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](7),r=!0,c=t.t0;case 15:t.prev=15,t.prev=16,s||null==u.return||u.return();case 18:if(t.prev=18,!r){t.next=21;break}throw c;case 21:return t.finish(18);case 22:return t.finish(15);case 23:a&&a(l.data.data),t.next=29;break;case 26:t.prev=26,t.t1=t["catch"](0),console.error("error:",t.t1);case 29:case"end":return t.stop()}},t,this,[[0,26],[7,11,15,23],[16,,18,22]])}));function e(e,i,n,a){return t.apply(this,arguments)}return e}(),navToDetailPage:function(t){var e=t;uni.navigateTo({url:"/pages/product/detail?num_iid=".concat(e)})},toGoodsList:function(t){var e=t;uni.navigateTo({url:"/pages/product/goods-list?key=".concat(e)})}},onReachBottom:function(){var t=this,e=t.page++;t.$refs.loading.open();var i=this.$request.post("/taobao-buy/guess-like",{data:{page:e,page_size:6}});i.then(function(e){if(e.data.data){var i,n=!0,a=!1,o=void 0;try{for(var s,r=e.data.data[Symbol.iterator]();!(n=(s=r.next()).done);n=!0){var c=s.value,u=parseInt(c.coupon_amount),d=(c.zk_final_price-c.coupon_amount).toFixed(1);c.reduce=u,c.afterPrice=d}}catch(f){a=!0,o=f}finally{try{n||null==r.return||r.return()}finally{if(a)throw o}}(i=t.guessList).push.apply(i,l(e.data.data))}else e.data.data===[]&&(t.$refs.loading.close(),t.$refs.loading.over("没有更多了"))}).catch(function(t){})},onPullDownRefresh:function(){console.log("refresh"),this.sendRequest()}};e.default=f},"5edf":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 单行省略 */\n/* 多行省略 */\n/* 文字间距 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */.search-tit[data-v-4d464b99]{position:relative}.search-tit .tit-bg[data-v-4d464b99]{width:100%;height:%?320?%;z-index:0}.search-tit .tit-con[data-v-4d464b99]{position:absolute;z-index:10;width:90%;bottom:%?30?%;left:%?32?%}.search-tit .tit-con uni-label[data-v-4d464b99]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.search-tit .tit-con uni-label uni-input[data-v-4d464b99]{background-color:#fff;width:%?490?%;padding:0 %?20?%;height:%?90?%;line-height:%?90?%;font-size:%?26?%}.search-tit .tit-con uni-label uni-text[data-v-4d464b99]{width:%?200?%;margin:0;height:%?95?%;line-height:%?90?%;color:#fff;background-color:#ff7400;-webkit-border-top-left-radius:none;border-top-left-radius:none;-webkit-border-bottom-left-radius:none;border-bottom-left-radius:none;text-align:center;font-size:%?36?%;letter-spacing:1.5px}.search-hot[data-v-4d464b99]{background-color:#fff;padding:%?10?% %?20?%;margin-bottom:%?10?%}.search-hot .hot-con[data-v-4d464b99]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:%?20?%}.search-hot .hot-con .hot-list[data-v-4d464b99]{background-color:#f5f5f5;margin:%?8?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;padding:%?10?% %?30?%;font-size:%?22?%}\n/* 图标分类 */.icon-cate[data-v-4d464b99]{background-color:#fff;padding:%?16?%;margin-bottom:%?10?%}.icon-cate .icon-con[data-v-4d464b99]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.icon-cate .icon-con .icon-list[data-v-4d464b99]{width:%?100?%;text-align:center;margin:%?12?%;font-size:%?24?%}.icon-cate .icon-con .icon-list uni-image[data-v-4d464b99]{width:%?80?%;height:%?80?%}\n/* 猜你喜欢 */.guess-like .like-tit[data-v-4d464b99]{background-color:#fff;padding:%?16?%;margin-bottom:%?10?%;text-align:center;color:#ff6b06}.guess-like .like-con[data-v-4d464b99]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?8?%}.guess-like .like-con .like-li[data-v-4d464b99]{margin:%?8?% 0;background-color:#fff;width:%?362?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;-webkit-box-shadow:0 0 10px 0 rgba(0,0,0,.1);box-shadow:0 0 10px 0 rgba(0,0,0,.1)}.guess-like .like-con .like-li uni-image[data-v-4d464b99]{width:%?362?%;height:%?330?%}.guess-like .like-con .like-li .like-foot[data-v-4d464b99]{padding:%?10?%;line-height:1.1}.guess-like .like-con .like-li .like-foot .like-foot-tit[data-v-4d464b99]{font-size:%?26?%;color:#363636;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.guess-like .like-con .like-li .like-foot .foot-con[data-v-4d464b99]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-top:%?10?%;margin-top:%?10?%;border-top:1px solid #efefef}.guess-like .like-con .like-li .like-foot .foot-con .like-left[data-v-4d464b99]{width:%?260?%;line-height:1.5}.guess-like .like-con .like-li .like-foot .foot-con .like-left .like-le-price[data-v-4d464b99]{font-size:%?28?%}.guess-like .like-con .like-li .like-foot .foot-con .like-left .get-quan[data-v-4d464b99]{position:relative}.guess-like .like-con .like-li .like-foot .foot-con .like-left .get-quan uni-image[data-v-4d464b99]{height:%?40?%;width:%?132?%}.guess-like .like-con .like-li .like-foot .foot-con .like-left .get-quan .like-le-quan[data-v-4d464b99]{position:absolute;top:%?2?%;left:%?9?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;font-size:%?24?%;color:#fff;padding-left:%?6?%}.guess-like .like-con .like-li .like-foot .foot-con .like-left .get-quan .like-le-quan uni-text[data-v-4d464b99]{background-color:#fff;color:#ff6b06;padding:%?1?% %?6?%;margin-left:%?4?%}.guess-like .like-con .like-li .like-foot .foot-con .like-right[data-v-4d464b99]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:right;width:%?260?%;line-height:1.8;font-size:%?28?%}.guess-like .like-con .like-li .like-foot .foot-con .like-right .like-ri-price[data-v-4d464b99]{font-size:%?26?%;color:#e62f17}.guess-like .like-con .like-li .like-foot .foot-con .like-right .like-sales[data-v-4d464b99]{font-size:%?24?%;color:#999}',""])},"688e":function(t,e,i){"use strict";i.r(e);var n=i("1bf4"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},7587:function(t,e,i){"use strict";i.r(e);var n=i("7e46"),a=i("688e");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("bc3f");var l=i("2877"),s=Object(l["a"])(a["default"],n["a"],n["b"],!1,null,"4d464b99",null);e["default"]=s.exports},"7e46":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("mescroll-uni",{attrs:{up:t.upOption,tipShow:!1},on:{down:function(e){e=t.$handleEvent(e),t.downCallback(e)},up:function(e){e=t.$handleEvent(e),t.upCallback(e)},emptyclick:function(e){e=t.$handleEvent(e),t.emptyClick(e)},init:function(e){e=t.$handleEvent(e),t.mescrollInit(e)}}},[i("v-uni-view",{staticClass:"search-tit"},[i("v-uni-image",{staticClass:"tit-bg",attrs:{src:"../../static/images/t25.png"}}),i("v-uni-view",{staticClass:"tit-con"},[i("v-uni-label",{attrs:{for:""}},[i("v-uni-input",{attrs:{type:"text",placeholder:"宝贝标题/关键词 （如：女装/男装）"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),i("v-uni-text",{on:{click:function(e){e=t.$handleEvent(e),t.toGoodsList(t.keyword)}}},[t._v("搜索")])],1)],1)],1),i("v-uni-view",{staticClass:"search-hot"},[i("v-uni-text",{staticClass:"hot-tit"},[t._v("热门搜索")]),i("v-uni-view",{staticClass:"hot-con"},t._l(t.hotList,function(e,n){return i("v-uni-view",{key:n,staticClass:"hot-list",on:{click:function(i){i=t.$handleEvent(i),t.toGoodsList(e.name)}}},[t._v(t._s(e.name))])}),1)],1),i("v-uni-view",{staticClass:"guess-like"},[i("v-uni-view",{staticClass:"like-tit"},[t._v("— 猜你喜欢 —")]),i("v-uni-view",{staticClass:"like-con"},t._l(t.list,function(e,n){return i("v-uni-view",{key:n,staticClass:"like-li",on:{click:function(i){i=t.$handleEvent(i),t.navToDetailPage(e.origin_id)}}},[i("v-uni-image",{attrs:{src:e.pict_url,"lazy-load":""}}),i("v-uni-view",{staticClass:"like-foot"},[i("v-uni-text",{staticClass:"like-foot-tit"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"foot-con"},[i("v-uni-view",{staticClass:"like-left"},[i("v-uni-view",{staticClass:"like-le-price"},[t._v("原价￥"+t._s(e.zk_final_price))]),i("v-uni-view",{staticClass:"get-quan"},[i("v-uni-image",{attrs:{src:"/static/images/icon/quan.png"}}),i("v-uni-text",{staticClass:"like-le-quan"},[t._v("券"),i("v-uni-text",[t._v("减"+t._s(e.reduce))])],1)],1)],1),i("v-uni-view",{staticClass:"like-right"},[i("v-uni-text",{staticClass:"like-ri-price"},[t._v("券后价￥"+t._s(e.afterPrice))]),i("v-uni-text",{staticClass:"like-sales"},[t._v("销量"+t._s(e.volume))])],1)],1)],1)],1)}),1)],1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},bc3f:function(t,e,i){"use strict";var n=i("ee1b"),a=i.n(n);a.a},ee1b:function(t,e,i){var n=i("5edf");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2196deb0",n,!0,{sourceMap:!1,shadowMode:!1})}}]);