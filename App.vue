  <script>
/**
 * vuex管理登陆状态，具体可以参考官方登陆模板示例
 */
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["login","getMsg","setHistory","setId","setClip"]),
  },
  onLaunch: function() {
    let userInfo = uni.getStorageSync("userInfo") || "";
    let userMsg = uni.getStorageSync("userMsg" || "");
    let searchHistory = uni.getStorageSync("searchHistory" || "");
    let clipText = uni.getStorageSync("clipText" || "")
    if (userInfo.uid) {
      //更新登陆状态
      uni.getStorage({
        key: "userInfo",
        success: res => {
          this.login(res.data);
        }
      });
      //持久化用户信息
      uni.getStorage({
        key: "userMsg",
        success: res => {
          this.getMsg(res.data);
        }
      });
    }
    // 保存历史搜索
    uni.getStorage({
      key: "searchHistory",
      success: res => {
        this.setHistory(res.data);
      }
    });

    uni.getStorage({
      key: "cateId",
      success: res => {
        this.setId(res.data);
      }
    });

    uni.getStorage({
      key: "clipText",
      success: res => {
        this.setClip(res.data);
      }
    });

    // #ifdef APP-PLUS
    plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
      uni.getSystemInfo({
          success: function (res) {
              // console.log(res.platform);
              uni.request({
                  url: 'https://api.kuguayouhui.com/api/amoy/setting/ios-upgrade',
                  data: {
                      version: widgetInfo.version,
                      name: widgetInfo.name
                  },
                  success: (result) => {
                      var data = result.data.data;
                      let dataVersion = parseInt(data.version.replace(/\./g,''))  //服务器版本
                      let version = parseInt(widgetInfo.version.replace(/\./g,''))  //本地版本
                      console.log(version,dataVersion)
                      if (version < dataVersion){
                          if (res.platform === 'ios' && data.pkgUrl && data.update) {
                            plus.runtime.openURL('https://itunes.apple.com/app/id1193859409');
                          } else if (res.platform === 'android' && data.pkgUrl && data.update) {
                            plus.runtime.openURL('https://sj.qq.com/myapp/detail.htm?apkName=com.app.kugua');
                          }else if (data.update && data.wgtUrl) {
                            uni.downloadFile({
                              url: data.wgtUrl,
                              success: (downloadResult) => {
                                console.log(downloadResult);
                                if (downloadResult.statusCode === 200) {
                                  plus.runtime.install(downloadResult.tempFilePath, {
                                    force: false
                                  }, function() {
                                    console.log('更新成功')
                                    plus.runtime.restart();
                                  }, (e) => {
                                    console.log('更新失败')
                                    // uni.showToast({
                                    //   title: '安装升级包失败',
                                    //   icon: 'none'
                                    // })
                                  });
                                }
                              }
                            });
                          }
                      }
                    }
              });
          }
      });
    });
    // #endif
  },

  onShow: function() {
    // console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
</script>

<style>
@import "colorui/main.css";
@import "colorui/icon.css";

/* 每个页面公共css */
@font-face {
  font-family: BMXY;
  src: url("https://www.kuguayouhui.com/fonts/BMXY.ttf");
}

@font-face {
  font-family: "iconfont"; /* project id 1250144 */
  src: url("https://at.alicdn.com/t/font_1250144_xq75i9p8psi.ttf")
    format("truetype");
}

.icon {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

page {
  background: $uni-bg-color-grey;
}
</style>
