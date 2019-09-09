import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    hasLogin: false,
    userInfo: {},
    userMsg: {},
    searchHistory: [],
    hasCateId: false,
    cateId: {},  //首页顶部跳至分类页传值
    clipText: '', //粘贴板内容
    showModal: false //显示弹出框
  },
  mutations: {
    login(state, provider) {
      state.hasLogin = true;
      state.userInfo = provider;
      uni.setStorage({
        //缓存用户登陆状态
        key: "userInfo",
        data: provider
      });
      console.log(state.userInfo);
    },
    logout(state) {
      state.hasLogin = false;
      state.userInfo = {};
      state.userMsg = {};
      state.searchHistory = [];
      uni.removeStorage({
        key: "userInfo"
      });
      uni.removeStorage({
        key: "userMsg"
      });
      uni.removeStorage({
        key: "searchHistory"
      });
    },
    getMsg (state, provider) {
      state.userMsg = provider;
      uni.setStorage({
        //缓存用户信息
        key: "userMsg",
        data: provider
      });
      console.log(state.userMsg);
    },
    setHistory(state, provider) {
      state.searchHistory = provider;
      uni.setStorage({
        //历史记录
        key: "searchHistory",
        data: provider
      });
    },
    clearHistory (state) {
      state.searchHistory = [];
      uni.removeStorage({
        key: "searchHistory"
      });
    },
    setId (state, provider) {
      state.cateId = provider;
      state.hasCateId = true;
      //分类id
      uni.setStorage({
        key: "cateId",
        data: provider
      });
    },
    clearCate(state){
      state.cateId = {};
      state.hasCateId = false;
      uni.removeStorage({
        key: "cateId"
      });
    },
    setClip(state,provider){ //缓存粘贴板内容，显示弹出框
      state.showModal = true;
      state.clipText = provider;
      uni.setStorage({
        key: "clipText",
        data: provider
      });
      console.log(state.clipText)
    },
    clearClip(state){ //清空粘贴板内容，关闭弹出框
      state.showModal = false;
      state.clipText = ''

      //#ifdef APP-PLUS
      if(plus.os.name === "Android"){
        let Context = plus.android.importClass("android.content.Context");
        let main = plus.android.runtimeMainActivity();
        let clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
        plus.android.invoke(clip,"setText","");
      }
      if(plus.os.name === "iOS"){
        let UIPasteboard  = plus.ios.importClass("UIPasteboard");
        let generalPasteboard = UIPasteboard.generalPasteboard();  //清空ios粘贴板
        generalPasteboard.setValueforPasteboardType("", "public.utf8-plain-text");
      }
      //#endif

      uni.removeStorage({
        key: "clipText"
      });
    }
  },
  actions: {}
});

export default store;
