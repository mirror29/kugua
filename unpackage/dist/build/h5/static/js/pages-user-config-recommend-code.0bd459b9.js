(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-config-recommend-code"],{"0d45":function(t,e,n){var i=n("26cb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("24a4d405",i,!0,{sourceMap:!1,shadowMode:!1})},"26cb":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 单行省略 */\n/* 多行省略 */\n/* 文字间距 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */.content[data-v-495e7076]{background-color:#fff;width:%?660?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin:%?120?% %?45?%}.content .title[data-v-495e7076]{height:%?100?%;line-height:%?100?%;padding:%?20?% %?40?%;font-size:%?34?%;font-weight:700}.content .container[data-v-495e7076]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.content .container uni-image[data-v-495e7076]{height:%?620?%;width:%?620?%}.content .foot[data-v-495e7076]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?140?%}.content .foot .icon[data-v-495e7076]{font-size:%?80?%;margin-right:%?4?%}.content .foot .number[data-v-495e7076]{color:#fc7537}.content .foot .copy[data-v-495e7076]{color:#fc7537;border:%?1?% solid #fc7537;width:%?90?%;height:%?40?%;line-height:%?40?%;text-align:center;-webkit-border-radius:%?40?%;border-radius:%?40?%;margin-left:%?10?%;font-size:%?24?%}',""])},"445c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a")),o=n("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,i,o,r,c){try{var a=t[r](c),s=a.value}catch(u){return void n(u)}a.done?e(s):Promise.resolve(s).then(i,o)}function a(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var r=t.apply(e,n);function a(t){c(r,i,o,a,s,"next",t)}function s(t){c(r,i,o,a,s,"throw",t)}a(void 0)})}}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={data:function(){return{code:""}},onReady:function(){this.sendRequest()},computed:s({},(0,o.mapState)(["userInfo"])),methods:{sendRequest:function(){var t=a(i.default.mark(function t(){var e;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$request.post("user/invite-code",{header:{token:this.userInfo.token}});case 3:e=t.sent,this.$common.checkStatus(e.data.code),this.code=e.data.data,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error("error:",t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));function e(){return t.apply(this,arguments)}return e}(),saveImg:function(){var t=this;uni.showActionSheet({itemList:["保存图片"],success:function(e){console.log("选中了第"+(e.tapIndex+1)+"个按钮"),0===e.tapIndex&&uni.saveImageToPhotosAlbum({filePath:t.code.invite_qrcode,success:function(){uni.showToast({title:"已成功保存邀请二维码至您的相册，快去分享吧",icon:"none"})}})},fail:function(t){console.log(t.errMsg)}})},copy:function(){uni.setClipboardData({data:this.code.invite_code,success:function(){uni.showToast({title:"复制邀请码成功，快去分享给好友吧",icon:"none"})}})}}};e.default=d},5442:function(t,e,n){"use strict";n.r(e);var i=n("445c"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=o.a},"5c60":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"title"},[t._v("您的邀请码")]),n("v-uni-view",{staticClass:"container"},[n("v-uni-image",{attrs:{src:t.code.invite_qrcode},on:{longpress:function(e){e=t.$handleEvent(e),t.saveImg(e)}}})],1),n("v-uni-view",{staticClass:"foot"},[n("v-uni-text",{staticClass:"icon"},[t._v("")]),n("v-uni-text",{staticClass:"number"},[t._v(t._s(t.code.invite_code))]),n("v-uni-text",{staticClass:"copy",on:{click:function(e){e=t.$handleEvent(e),t.copy(e)}}},[t._v("复制")])],1)],1)],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},7263:function(t,e,n){"use strict";n.r(e);var i=n("5c60"),o=n("5442");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("78dc");var c=n("2877"),a=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,"495e7076",null);e["default"]=a.exports},"78dc":function(t,e,n){"use strict";var i=n("0d45"),o=n.n(i);o.a}}]);