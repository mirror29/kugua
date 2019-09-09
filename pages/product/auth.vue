<template>
  <div class="content">
    <view>
      <text class="title">请复制下方口令，<text class="span text-red">打开手机淘宝</text>，进行授权认证<text class="text-cyan">（仅需一次即可）</text></text>
      <view class="text-cut padding bg-grey radius tao">{{password}}</view>
      <view class="padding flex flex-direction">
        <button class="cu-btn bg-red margin-tb-sm lg" @click="copy">复制口令</button></view>
    </view>
  </div>
</template>

<script>
  import {
      mapState
  } from 'vuex';
  export default {
    data(){
      return{
        password: ''
     }
    },
    onReady(){
      this.sendRequest();
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      async sendRequest(){
        const res = await this.$request.post('/authorization/tkl', {
            header: {
                token: this.userInfo.token
            }
        });
        console.log(res)
        this.password = res.data.data.password;
        this.$common.checkStatus(res.data.code)
      },
      copy(){
        let _this = this
        console.log(_this.password)
        uni.setClipboardData({
            data: _this.password,
            success: function () {
              uni.showToast({
                  title: '复制成功，请打开手淘进行授权',
                  icon: 'none'
              });
              setTimeout(() => {
                uni.navigateBack({
                    delta: 1
                });
              }, 1500);
            }
        });
      }
    },
  }
</script>

<style lang="scss" scoped>
.content{
  padding: 35upx 25upx;

  .title{
    color: $uni-text-color;

    .span{
      font-size: 36upx;
    }
  }

  .tao{
    margin: 60upx 0 0 0;
    text-align: center;
    font-size: 34upx;
  }

}
</style>
