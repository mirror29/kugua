<template>
  <div class="version">
    <view class="version-con">
      <image src="../../../static/images/logo.png"></image>
      <text class="version-name">苦瓜优惠券</text>
      <text class="version-num">Version {{version}}</text>
    </view>
    <view class="version-foot">
      <text>深圳市趣搜网络科技有限公司</text>
      <text class="version-has">版权所有</text>
    </view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        version: ''
      }
    },
    onReady () {
      this.getVersion();
    },
    methods: {
      getVersion () {
        let _this = this
        plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
          _this.version = widgetInfo.version;
          console.log(_this.version)
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.version{
  background-color: $uni-bg-color;
  .version-con{
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70upx 0;

    image{
      height: 160upx;
      width: 160upx;
    }

    .version-name{
      font-size: 40upx;
      font-weight: bold;
      margin-top: 16upx;
    }

    .version-num{
      margin-top: 8upx;
    }
  }

  .version-foot{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $uni-text-color-grey;
    height: 15vh;
  }
}
</style>
