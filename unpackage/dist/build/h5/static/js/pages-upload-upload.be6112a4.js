(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-upload-upload"],{"3b94":function(t,e,n){"use strict";n.r(e);var o=n("9a64"),i=n("9307");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("df43");var c=n("2877"),r=Object(c["a"])(i["default"],o["a"],o["b"],!1,null,"463d205c",null);e["default"]=r.exports},"7efd":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("aa7b"));function i(t){return t&&t.__esModule?t:{default:t}}var a=uni.getSystemInfoSync(),c=a.windowWidth,r=a.windowHeight-50,u={data:function(){return{cropperOpt:{id:"cropper",width:c,height:r,scale:2.5,zoom:8,cut:{x:(c-295)/2,y:(r-390)/2,width:295,height:295}},weCropper:""}},methods:{back:function(){uni.redirectTo({url:"../user/config/user-data"})},touchStart:function(t){this.weCropper.touchStart(t)},touchMove:function(t){this.weCropper.touchMove(t)},touchEnd:function(t){this.weCropper.touchEnd(t)},convertBase64UrlToBlob:function(t,e){for(var n=atob(t.split(",")[1]),o=[],i=0;i<n.length;i++)o.push(n.charCodeAt(i));return new Blob([new Uint8Array(o)],{type:e},{filename:"1111.jpg"})},blobToDataURL:function(t){var e=new FileReader;e.readAsDataURL(t),e.onload=function(t){var e=t.target.result;console.log(e)}},getCropperImage:function(){this.weCropper.getCropperImage(function(t){t?uni.redirectTo({url:"../user/config/user-data?avatar="+t}):console.log("获取图片失败，请稍后重试")})},uploadTap:function(){var t=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var n=e.tempFilePaths[0];t.weCropper.pushOrign(n)}})}},onLoad:function(t){var e=this.cropperOpt,n=t.src;n&&(Object.assign(e,{src:n}),this.weCropper=new o.default(e).on("ready",function(t){}).on("beforeImageLoad",function(t){uni.showToast({title:"上传中",icon:"loading",duration:3e3})}).on("imageLoad",function(t){uni.hideToast()}))}};e.default=u},9307:function(t,e,n){"use strict";n.r(e);var o=n("7efd"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},"9a64":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"cropper-wrapper"},[n("v-uni-canvas",{staticClass:"cropper",style:{width:t.cropperOpt.width,height:t.cropperOpt.height},attrs:{"disable-scroll":"true","canvas-id":"cropper"},on:{touchstart:function(e){e=t.$handleEvent(e),t.touchStart(e)},touchmove:function(e){e=t.$handleEvent(e),t.touchMove(e)},touchend:function(e){e=t.$handleEvent(e),t.touchEnd(e)}}})],1),n("v-uni-view",{staticClass:"cropper-buttons"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",{staticClass:"upload",on:{click:function(e){e=t.$handleEvent(e),t.uploadTap(e)}}},[t._v("重新选择")]),n("v-uni-view",{staticClass:"getCropperImage",on:{click:function(e){e=t.$handleEvent(e),t.getCropperImage(e)}}},[t._v("确定")])],1),n("v-uni-view",{attrs:{lass:"foot"}})],1)],1)},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},aa7b:function(t,e,n){"use strict";(function(e,n){t.exports=n()})(0,function(){var t=void 0,e=["touchstarted","touchmoved","touchended"];function n(t){return t.charAt(0).toUpperCase()+t.slice(1)}function o(t){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];e.forEach(function(e,n){void 0!==o[n]&&(t[e]=o[n])})}function i(t,e){Object.defineProperties(t,e)}function a(){return t||(t=wx.getSystemInfoSync()),t}"function"===typeof Symbol&&Symbol.iterator;var c=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=function(){function t(t,e){var n=[],o=!0,i=!1,a=void 0;try{for(var c,r=t[Symbol.iterator]();!(o=(c=r.next()).done);o=!0)if(n.push(c.value),e&&n.length===e)break}catch(u){i=!0,a=u}finally{try{!o&&r["return"]&&r["return"]()}finally{if(i)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s={},l={id:{default:"cropper",get:function(){return s.id},set:function(t){s.id=t}},width:{default:750,get:function(){return s.width},set:function(t){s.width=t}},height:{default:750,get:function(){return s.height},set:function(t){s.height=t}},scale:{default:2.5,get:function(){return s.scale},set:function(t){s.scale=t}},zoom:{default:5,get:function(){return s.zoom},set:function(t){s.zoom=t}},src:{default:"cropper",get:function(){return s.src},set:function(t){s.src=t}},cut:{default:{},get:function(){return s.cut},set:function(t){s.cut=t}},onReady:{default:null,get:function(){return s.ready},set:function(t){s.ready=t}},onBeforeImageLoad:{default:null,get:function(){return s.beforeImageLoad},set:function(t){s.beforeImageLoad=t}},onImageLoad:{default:null,get:function(){return s.imageLoad},set:function(t){s.imageLoad=t}},onBeforeDraw:{default:null,get:function(){return s.beforeDraw},set:function(t){s.beforeDraw=t}}};function d(){var t=this,e=a(),n=e.windowWidth;t.attachPage=function(){var e=getCurrentPages(),n=e[e.length-1];n.wecropper=t},t.createCtx=function(){var e=t.id;e&&(t.ctx=wx.createCanvasContext(e))},t.deviceRadio=n/750,t.deviceRadio=t.deviceRadio.toFixed(2)}function f(){var t=this,e=["ready","beforeImageLoad","beforeDraw","imageLoad"];t.on=function(o,i){return e.indexOf(o)>-1&&"function"===typeof i&&("ready"===o?i(t):t["on"+n(o)]=i),t}}function h(){var t=this,e=t.deviceRadio;console.log(JSON.stringify(t));var n=t.width,o=t.height,i=t.cut,a=i.x,c=void 0===a?0:a,r=i.y,u=void 0===r?0:r,s=i.width,l=void 0===s?n:s,d=i.height,f=void 0===d?o:d;t.updateCanvas=function(){return t.croperTarget&&t.ctx.drawImage(t.croperTarget,t.imgLeft,t.imgTop,t.scaleWidth,t.scaleHeight),"function"===typeof t.onBeforeDraw&&t.onBeforeDraw(t.ctx,t),t.setBoundStyle(),t.ctx.draw(),t},t.pushOrign=function(e){return t.src=e,"function"===typeof t.onBeforeImageLoad&&t.onBeforeImageLoad(t.ctx,t),uni.getImageInfo({src:e,success:function(n){var o=n.width/n.height;t.croperTarget=n.path||e,o<l/f?(t.rectX=c,t.baseWidth=l,t.baseHeight=l/o,t.rectY=u-Math.abs((f-t.baseHeight)/2)):(t.rectY=u,t.baseWidth=f*o,t.baseHeight=f,t.rectX=c-Math.abs((l-t.baseWidth)/2)),t.imgLeft=t.rectX,t.imgTop=t.rectY,t.scaleWidth=t.baseWidth,t.scaleHeight=t.baseHeight,t.updateCanvas(),"function"===typeof t.onImageLoad&&t.onImageLoad(t.ctx,t)}}),t.update(),t},t.getCropperImage=function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];var a=t.id,r=toString.call(o[0]);switch(r){case"[object Object]":var s=o[0].quality,d=void 0===s?10:s;console.log("quality--"+d),uni.canvasToTempFilePath({canvasId:a,x:c,y:u,width:l,height:f,destWidth:l*d/(10*e),destHeight:f*d/(10*e),success:function(t){console.log(t),"function"===typeof o[o.length-1]&&o[o.length-1](t.tempFilePath)}});break;case"[object Function]":uni.canvasToTempFilePath({canvasId:a,x:c,y:u,fileType:"jpg",width:l,height:f,destWidth:l,destHeight:f,success:function(t){"function"===typeof o[o.length-1]&&o[o.length-1](t.tempFilePath)}});break}return t}}function p(){var t=this;t.src&&(t.__oneTouchStart=function(e){t.touchX0=e.x,t.touchY0=e.y},t.__oneTouchMove=function(e){var n=void 0,o=void 0;if(t.touchended)return t.updateCanvas();n=e.x-t.touchX0,o=e.y-t.touchY0;var i=t.rectX+n,a=t.rectY+o;t.outsideBound(i,a),t.updateCanvas()},t.__twoTouchStart=function(e,n){var o=void 0,i=void 0,a=void 0;t.touchX1=t.rectX+t.scaleWidth/2,t.touchY1=t.rectY+t.scaleHeight/2,o=n.x-e.x,i=n.y-e.y,a=Math.sqrt(o*o+i*i),t.oldDistance=a},t.__twoTouchMove=function(e,n){var o=void 0,i=void 0,a=void 0,c=t.scale,r=t.zoom;o=n.x-e.x,i=n.y-e.y,a=Math.sqrt(o*o+i*i),t.newScale=t.oldScale+.001*r*(a-t.oldDistance),t.newScale<=1&&(t.newScale=1),t.newScale>=c&&(t.newScale=c),t.scaleWidth=t.newScale*t.baseWidth,t.scaleHeight=t.newScale*t.baseHeight;var u=t.touchX1-t.scaleWidth/2,s=t.touchY1-t.scaleHeight/2;t.outsideBound(u,s),t.updateCanvas()},t.__xtouchEnd=function(){t.oldScale=t.newScale,t.rectX=t.imgLeft,t.rectY=t.imgTop})}var g={touchStart:function(t){var e=this,n=u(t.touches,2),i=n[0],a=n[1];console.log(JSON.stringify(a)),i.x||(i.x=i.clientX,i.y=i.clientY,a&&(a.x=a.clientX,a.y=a.clientY)),o(e,!0,null,null),e.__oneTouchStart(i),t.touches.length>=2&&e.__twoTouchStart(i,a)},touchMove:function(t){var e=this,n=u(t.touches,2),i=n[0],a=n[1];i.x||(i.x=i.clientX,i.y=i.clientY,a&&(a.x=a.clientX,a.y=a.clientY)),o(e,null,!0),1===t.touches.length&&e.__oneTouchMove(i),t.touches.length>=2&&e.__twoTouchMove(i,a)},touchEnd:function(t){var e=this;o(e,!1,!1,!0),e.__xtouchEnd()}};function v(){var t=this,e=(t.deviceRadio,t.width),n=t.height,o=t.cut,i=o.x,a=void 0===i?0:i,c=o.y,r=void 0===c?0:c,u=o.width,s=void 0===u?e:u,l=o.height,d=void 0===l?n:l;t.outsideBound=function(e,n){t.imgLeft=e>=a?a:t.scaleWidth+e-a<=s?a+s-t.scaleWidth:e,t.imgTop=n>=r?r:t.scaleHeight+n-r<=d?r+d-t.scaleHeight:n},t.setBoundStyle=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=o.color,c=void 0===i?"#04b00f":i,u=o.mask,l=void 0===u?"rgba(0, 0, 0, 0.3)":u,f=o.lineWidth,h=void 0===f?1:f;t.ctx.beginPath(),t.ctx.setFillStyle(l),t.ctx.fillRect(0,0,a,n),t.ctx.fillRect(a,0,s,r),t.ctx.fillRect(a,r+d,s,n-r-d),t.ctx.fillRect(a+s,0,e-a-s,n),t.ctx.fill(),t.ctx.beginPath(),t.ctx.setStrokeStyle(c),t.ctx.setLineWidth(h),t.ctx.moveTo(a-h,r+10-h),t.ctx.lineTo(a-h,r-h),t.ctx.lineTo(a+10-h,r-h),t.ctx.stroke(),t.ctx.beginPath(),t.ctx.setStrokeStyle(c),t.ctx.setLineWidth(h),t.ctx.moveTo(a-h,r+d-10+h),t.ctx.lineTo(a-h,r+d+h),t.ctx.lineTo(a+10-h,r+d+h),t.ctx.stroke(),t.ctx.beginPath(),t.ctx.setStrokeStyle(c),t.ctx.setLineWidth(h),t.ctx.moveTo(a+s-10+h,r-h),t.ctx.lineTo(a+s+h,r-h),t.ctx.lineTo(a+s+h,r+10-h),t.ctx.stroke(),t.ctx.beginPath(),t.ctx.setStrokeStyle(c),t.ctx.setLineWidth(h),t.ctx.moveTo(a+s+h,r+d-10+h),t.ctx.lineTo(a+s+h,r+d+h),t.ctx.lineTo(a+s-10+h,r+d+h),t.ctx.stroke()}}var b="1.1.4",x=function(){function t(e){c(this,t);var n=this,o={};return i(n,l),Object.keys(l).forEach(function(t){o[t]=l[t].default}),Object.assign(n,o,e),n.prepare(),n.attachPage(),n.createCtx(),n.observer(),n.cutt(),n.methods(),n.init(),n.update(),n}return r(t,[{key:"init",value:function(){var t=this,e=t.src;return t.version=b,"function"===typeof t.onReady&&t.onReady(t.ctx,t),e&&t.pushOrign(e),o(t,!1,!1,!1),t.oldScale=1,t.newScale=1,t}}]),t}();return Object.assign(x.prototype,g),x.prototype.prepare=d,x.prototype.observer=f,x.prototype.methods=h,x.prototype.cutt=v,x.prototype.update=p,x})},df43:function(t,e,n){"use strict";var o=n("fd1e"),i=n.n(o);i.a},e11d:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 单行省略 */\n/* 多行省略 */\n/* 文字间距 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */.content[data-v-463d205c]{background:#fff}.head-list[data-v-463d205c]{height:43px;width:100%;background:#fff;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-bottom:1px solid #f4f4f4}.head-info[data-v-463d205c]{text-align:center;font-size:18px;color:#000;font-weight:700}.save-box[data-v-463d205c]{position:absolute;right:0;width:50px;height:43px;line-height:43px}.save[data-v-463d205c]{color:#626ffc;font-size:16px;font-weight:400}.icon-back[data-v-463d205c]{margin-top:11px;width:10px;height:18px;color:#000;margin-left:6px}.icon-back-box[data-v-463d205c]{display:block;position:absolute;left:6px;height:43px;width:30px;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.cropper[data-v-463d205c]{position:absolute;top:0;left:0;width:100%;height:100%}.cropper-wrapper[data-v-463d205c]{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;height:%?1336?%;background-color:#555}.cropper-buttons .title[data-v-463d205c]{width:100vw;height:%?115?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:fixed;bottom:0;left:0;line-height:%?115?%;background-color:rgba(0,0,0,.95);color:#04b00f}.cropper-buttons .foot[data-v-463d205c]{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);background-color:rgba(0,0,0,.95)}.cropper-buttons .getCropperImage[data-v-463d205c],.cropper-buttons .upload[data-v-463d205c]{width:50%;text-align:center}',""])},fd1e:function(t,e,n){var o=n("e11d");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("02e9d3aa",o,!0,{sourceMap:!1,shadowMode:!1})}}]);