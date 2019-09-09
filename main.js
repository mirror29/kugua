import Vue from "vue";
import App from "./App";
import store from "./store";
import request from "@/common/request/request.js";
import common from "@/common/util.js";
//全局注入w-loading组件，骨架屏等
import wLoading from "@/components/w-loading.vue";
import skeleton from "@/components/quick-skeleton/quick-skeleton.vue";
import modal from "@/components/modal.vue";
import float from "@/components/float.vue";
Vue.component("w-loading", wLoading);
Vue.component("skeleton", skeleton);
Vue.component("modal", modal);
Vue.component("float", float);

Vue.config.productionTip = false;

App.mpType = "app";

// 全局配置
request.setConfig({
  baseUrl: "https://api.kuguayouhui.com:443/api/amoy", // 正式
  // baseUrl: 'http://www.kuguayouhui.my/api/amoy',  // 测试
  dataType: "json", // 可删除，默认为json
  responseType: "text", // 可删除，默认为text
  // 设置请求头，支持所有请求头设置，也可不设置，去掉header就行
  header: {
    // 'token': 'token from global',
    "content-type": "application/x-www-form-urlencoded"
  }
});

function bodyScroll(event){
  event.preventDefault();
}

Vue.prototype.$request = request;
Vue.prototype.$store = store;
Vue.prototype.$common = common;

const app = new Vue({
  ...App
});
app.$mount();
