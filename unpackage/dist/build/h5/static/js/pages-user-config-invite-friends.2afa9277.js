(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-config-invite-friends"],{"115f":function(t,e,i){var n=i("12ab");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("10a21496",n,!0,{sourceMap:!1,shadowMode:!1})},"12ab":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 单行省略 */\n/* 多行省略 */\n/* 文字间距 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */uni-page-body[data-v-4cf6f3b3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container[data-v-4cf6f3b3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.swiper-item[data-v-4cf6f3b3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-left:auto;margin-right:auto;height:%?900?%;width:%?530?%;line-height:%?300?%;text-align:center;-webkit-border-radius:%?6?%;border-radius:%?6?%;margin-bottom:%?50?%}.swiper-item uni-image[data-v-4cf6f3b3]{-webkit-border-radius:%?6?%;border-radius:%?6?%}.swiper-tall[data-v-4cf6f3b3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.swiper-title[data-v-4cf6f3b3]{width:%?750?%;text-align:center;opacity:0;height:%?10?%}.foot[data-v-4cf6f3b3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.foot uni-button[data-v-4cf6f3b3]{color:#fff;background-color:#fc7537;-webkit-border-radius:%?40?%;border-radius:%?40?%;width:%?240?%;height:%?70?%;line-height:%?70?%}',""])},"363c":function(t,e,i){"use strict";i.r(e);var n=i("59ee"),a=i("f055");for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);i("e090");var s=i("2877"),o=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"4cf6f3b3",null);e["default"]=o.exports},"59ee":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"swiper"},[i("v-uni-view",{staticClass:"swiper-title"},[t._v(t._s(t.title))]),i("v-uni-swiper",{staticClass:"swiper-tall",style:{height:t.fullHeight},attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,"previous-margin":t.previousMargin,"next-margin":t.nextMargin,circular:t.circular,current:t.swiperCurrentIndex},on:{change:function(e){e=t.$handleEvent(e),t.change(e)}}},t._l(t.imgs,function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"swiper-container",attrs:{"item-id":n,"data-year":n}},[i("v-uni-view",{staticClass:"swiper-item",style:{background:e?"url("+e+") center no-repeat":"",backgroundSize:"cover"},attrs:{animation:t.animationData[n]}})],1)}),1),i("v-uni-view",{staticClass:"foot"},[i("v-uni-button",{attrs:{size:"mini"},on:{click:function(e){e=t.$handleEvent(e),t.shareImg(e)}}},[t._v("分享")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(e){e=t.$handleEvent(e),t.saveImg(e)}}},[t._v("保存图片")])],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},8570:function(t,e,i){"use strict";function n(t,e){var i=[{icon:"/static/images/wx.png",text:"微信好友"},{icon:"/static/images/pyq.png",text:"朋友圈"},{icon:"/static/images/copy.png",text:"复制"},{icon:"/static/images/more.png",text:"更多"}],n=plus.screen.resolutionWidth,a=25,r=25,s=55,o=55,c=10,l=12,u=Math.floor(n/(s+r)),p=(n-(s+r)*u-r)/(u+1),f=r+p,d=s+f,h=o+c+l+a,g=o+c,x=new plus.nativeObj.View("alphaBg",{top:"0px",left:"0px",height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0.5)"});x.addEventListener("click",function(){x.hide(),m.hide()});var m=new plus.nativeObj.View("shareMenu",{bottom:"0px",left:"0px",height:Math.ceil(i.length/u)*h+a+48+1+"px",width:"100%",backgroundColor:"rgb(255,255,255)"});return m.draw([{tag:"rect",color:"#e7e7e7",position:{top:"0px",height:"1px"}},{tag:"font",id:"sharecancel",text:"取消分享",textStyles:{size:"14px"},position:{bottom:"0px",height:"48px"}},{tag:"rect",color:"#e7e7e7",position:{bottom:"45px",height:"1px"}}]),i.map(function(t,e){var i=(new Date).getTime(),n=Math.floor(e/u),r=e%u,o=[{src:t.icon,id:1e3*Math.random()+i,tag:"img",position:{top:n*h+a,left:r*d+f,width:s,height:s}},{text:t.text,id:1e3*Math.random()+i,tag:"font",textStyles:{size:l},position:{top:n*h+g,left:r*d+f,width:s,height:s}}];m.draw(o)}),m.addEventListener("click",function(t){if(t.screenY>plus.screen.resolutionHeight-48)x.hide(),m.hide();else if(t.clientX<5||t.clientX>n-5||t.clientY<5);else{var i=t.clientX,a=t.clientY,r=Math.floor(i/d),s=Math.floor(a/h),o=r+s*u;e&&e(o)}}),{alphaBg:x,shareMenu:m}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n;e.default=a},"9a45":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("8570"));function a(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{title:"分享测试",screenHeight:0,animationData:{0:{},1:{},2:{}},index:"0",indicatorDots:!1,autoplay:!1,previousMargin:uni.upx2px(82)+"px",nextMargin:uni.upx2px(82)+"px",circular:!0,zoomParam:1.1,swiperCurrentIndex:0,data:[],max:0,imgs:["../../../static/images/1.jpg","../../../static/images/2.jpg","../../../static/images/3.jpg"]}},computed:{fullHeight:function(){var t=uni.getSystemInfoSync();return t.windowHeight-uni.upx2px(60)-(t.statusBarHeight+44)+"px"}},onLoad:function(){this.animation=uni.createAnimation(),this.animation.scale(this.zoomParam).step(),this.animationData[0]=this.animation.export()},onBackPress:function(){if(this.shareObj.shareMenu.isVisible())return this.shareObj.shareMenu.hide(),this.shareObj.alphaBg.hide(),!0},methods:{change:function(t){for(var e in this.swiperCurrentIndex=t.detail.current,this.index=t.detail.currentItemId,this.animationData)t.detail.currentItemId==e?(this.animation.scale(this.zoomParam).step(),this.animationData[e]=this.animation.export()):(this.animation.scale(1).step(),this.animationData[e]=this.animation.export())},shareImg:function(){var t=this,e={href:"https://uniapp.dcloud.io",title:"分享测试",desc:"分享测试",imgUrl:"/static/logo.png"},i=this;this.shareObj=(0,n.default)(e,function(t){i.$common.switchShare(t,e)}),this.$nextTick(function(){t.shareObj.alphaBg.show(),t.shareObj.shareMenu.show()})},saveImg:function(){var t=this.index,e=this.imgs;uni.saveImageToPhotosAlbum({filePath:e[t],success:function(){uni.showToast({title:"已成功保存图片至您的相册，快去分享吧",icon:"none"})}})}}};e.default=r},e090:function(t,e,i){"use strict";var n=i("115f"),a=i.n(n);a.a},f055:function(t,e,i){"use strict";i.r(e);var n=i("9a45"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=a.a}}]);