(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-video"],{"078f":function(t,o,i){"use strict";var e=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("v-uni-view",[i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"page-section swiper"},[i("v-uni-view",{staticClass:"page-section-spacing"},[i("v-uni-swiper",{staticClass:"swiper",style:{height:t.swiperHeight},attrs:{vertical:t.vertical,"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration,current:t.current},on:{animationfinish:function(o){o=t.$handleEvent(o),t.onSwipScroll(o)}}},t._l(t.videoList,function(o,e){return i("v-uni-swiper-item",{key:e,attrs:{id:"videoitem_"+e}},[i("v-uni-video",{staticClass:"video",attrs:{id:"video_"+e,loop:"",direction:t.direction,src:o.url,autoplay:t.autoplays,controls:""},on:{error:function(o){o=t.$handleEvent(o),t.videoErrorCallback(o)}}}),i("v-uni-view",{staticClass:"tools_right"},[i("v-uni-view",{staticClass:"tools_r_li",on:{click:function(i){i=t.$handleEvent(i),t.changeFollow(o,e)}}},[i("v-uni-view",{staticClass:"iconfont icon-shoucang icon_right",class:o.follow?"follow_active":""}),i("v-uni-view",{staticClass:"tools_r_num"},[t._v("28.1w")])],1)],1),i("v-uni-view",{staticClass:"production_box"},[i("v-uni-view",{staticClass:"production_name"},[t._v("@"+t._s(o.username))]),i("v-uni-view",{staticClass:"production_des"},[t._v(t._s(o.content)+" 年轻的时候要注意‘养生’，少玩手机多睡觉！少玩手机多睡觉！少玩手机多睡觉！切记少玩手机多睡觉！少玩手机多睡觉！少玩手机多睡觉！@\n\t\t\t\t\t\t\t\t抖音小助手")])],1)],1)}),1)],1)],1)],1)],1)},n=[];i.d(o,"a",function(){return e}),i.d(o,"b",function(){return n})},"18ee":function(t,o,i){"use strict";i.r(o);var e=i("229e"),n=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(o,t,function(){return e[t]})}(a);o["default"]=n.a},"229e":function(t,o,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=uni.getSystemInfoSync(),n=(e.windowHeight,e.windowHeight,{data:function(){return{current:0,swiperHeight:"667px",background:["color1","color2","color3"],indicatorDots:!1,autoplay:!1,interval:2e3,duration:500,vertical:!0,showShareBox:!1,autoplays:!1,direction:90,videoList:[{vid:1,username:"Fires",content:"年轻的时候要注意‘养生’，少玩手机多睡觉！少玩手机多睡觉！少玩手机多睡觉！切记少玩手机多睡觉！少玩手机多睡觉！少玩手机多睡觉！@ 抖音小助手",url:"https://video.pearvideo.com/mp4/adshort/20190528/cont-1559562-13954647_adpkg-ad_hd.mp4",follow:!1},{vid:2,username:"Fires",content:"年轻的时候要注意‘养生’，少玩手机多睡觉！少玩手机多睡觉！少玩手机多睡觉！切记少玩手机多睡觉！少玩手机多睡觉！少玩手机多睡觉！@ 抖音小助手",url:"http://movie.rain68.com/videos/1.mp4",follow:!1},{vid:3,username:"Firxes",content:"a年轻的时候要注意‘养生’，少玩手机多睡觉！少玩手机多睡觉！少玩手机多睡觉！切记少玩手机多睡觉！少玩手机多睡觉！少玩手机多睡觉！@ 抖音小助手",url:"http://movie.rain68.com/videos/2.mp4",follow:!1},{vid:4,username:"Firesb",content:"b年轻的时候要注意‘养生’，少玩手机多睡觉！少玩手机多睡觉！少玩手机多睡觉！切记少玩手机多睡觉！少玩手机多睡觉！少玩手机多睡觉！@ 抖音小助手",url:"http://movie.rain68.com/videos/3.mp4",follow:!1}],playIngIndex:0,videoContext:null,timer:null}},methods:{changeIndicatorDots:function(t){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(t){this.autoplay=!this.autoplay},intervalChange:function(t){this.interval=t.target.value},durationChange:function(t){this.duration=t.target.value},onSwipScroll:function(t){this.playIngIndex=t.detail.current,this.timer=setTimeout(function(){this.playVideo()}.bind(this),200)},playVideo:function(){if(console.log(this.playIngIndex),0!=this.playIngIndex){var t=this.playIngIndex-1,o=this.playIngIndex+1;this.videoContext=uni.createVideoContext("video_"+t),this.videoContext.pause(),this.videoContext=uni.createVideoContext("video_"+o),this.videoContext.pause(),this.videoContext=uni.createVideoContext("video_"+this.playIngIndex),this.videoContext.play()}else this.videoContext=uni.createVideoContext("video_1"),this.videoContext.pause(),this.videoContext=uni.createVideoContext("video_"+this.playIngIndex),this.videoContext.play()},changeFollow:function(t,o){this.videoList[o].follow=!this.videoList[o].follow},changeShare:function(){this.showShareBox=!0},cancelShare:function(){this.showShareBox=!1},videoErrorCallback:function(t){uni.showModal({content:t.target.errMsg,showCancel:!1})}},onPullDownRefresh:function(){console.log("renew")},onLoad:function(t){this.current=t.vid,this.playIngIndex=t.vid},mounted:function(){var t=this;uni.getSystemInfo({success:function(o){t.swiperHeight=o.windowHeight+"px"}}),this.playVideo()}});o.default=n},"2d99":function(t,o,i){"use strict";var e=i("8241"),n=i.n(e);n.a},8241:function(t,o,i){var e=i("f357");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("9a3ff660",e,!0,{sourceMap:!1,shadowMode:!1})},f357:function(t,o,i){o=t.exports=i("2350")(!1),o.push([t.i,'.video[data-v-3f71da4e]{-o-object-fit:fill!important;object-fit:fill!important;z-index:999;width:100%;height:100%;position:absolute;left:0;top:0;overflow:hidden}\r\n\r\n/* 点赞，转发 */@font-face{font-family:iconfont;src:url("data:application/x-font-woff2;charset=utf-8;base64,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") format("woff2")}.iconfont[data-v-3f71da4e]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-iconfontforward[data-v-3f71da4e]:before{content:"\\E606"}.icon-lianjie[data-v-3f71da4e]:before{content:"\\E67A"}.icon-gouwuche[data-v-3f71da4e]:before{content:"\\E600"}.icon-pengyouquan[data-v-3f71da4e]:before{content:"\\E601"}.icon-shoucang[data-v-3f71da4e]:before{content:"\\E603"}.icon-weixin[data-v-3f71da4e]:before{content:"\\E7B0"}.icon-gouwuche1[data-v-3f71da4e]:before{content:"\\E63E"}.tools_right[data-v-3f71da4e]{z-index:1001;position:absolute;right:%?12?%;bottom:120px}.tools_r_li[data-v-3f71da4e]{margin-bottom:20px;color:#fff;font-size:14px}.tools_r_li[data-v-3f71da4e]:last-child{margin-bottom:0}.icon_right[data-v-3f71da4e]{margin-bottom:5px;font-size:38px;display:block;color:#f4f5f6;text-shadow:0 0 10px #9d9d9d\r\n\t/*transition: .5s;*/}.tools_r_num[data-v-3f71da4e]{color:#f4f5f6}.follow_active[data-v-3f71da4e]{color:#f44;-webkit-animation:showHeart .5s ease-in-out 0s;animation:showHeart .5s ease-in-out 0s}.production_box[data-v-3f71da4e]{z-index:1001;position:absolute;\r\n\t/* right: 16px; */bottom:46px;text-align:left;padding:0 15px 15px 15px;color:#fff;width:100%;left:0;-webkit-box-sizing:border-box;box-sizing:border-box;background:-webkit-linear-gradient(top,rgba(0,0,0,.2),rgba(0,0,0,0));\r\n\t/* Safari 5.1 - 6.0 */background:-o-linear-gradient(top,rgba(0,0,0,.2),rgba(0,0,0,0));\r\n\t/* Opera 11.1 - 12.0 */background:-moz-linear-gradient(top,rgba(0,0,0,.2),rgba(0,0,0,0));\r\n\t/* Firefox 3.6 - 15 */background:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.2)),to(rgba(0,0,0,0)));background:-webkit-linear-gradient(bottom,rgba(0,0,0,.2),rgba(0,0,0,0));background:-o-linear-gradient(bottom,rgba(0,0,0,.2),rgba(0,0,0,0));background:linear-gradient(0deg,rgba(0,0,0,.2),rgba(0,0,0,0))\r\n\t/* 标准的语法 */}.production_name[data-v-3f71da4e]{color:#fff;font-weight:400;font-size:16px;margin-bottom:10px}.production_des[data-v-3f71da4e]{color:#fff;overflow:hidden;font-size:12px;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;white-space:nowrap;min-height:28px}',""])},fa31:function(t,o,i){"use strict";i.r(o);var e=i("078f"),n=i("18ee");for(var a in n)"default"!==a&&function(t){i.d(o,t,function(){return n[t]})}(a);i("2d99");var r=i("2877"),s=Object(r["a"])(n["default"],e["a"],e["b"],!1,null,"3f71da4e",null);o["default"]=s.exports}}]);