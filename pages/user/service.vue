<template>
  <div class="content">
    <view class="head">
      <image class="bg" src="/static/images/user-bg.jpg" mode="widthFix"></image>
      <view class="title">
        <image src="/static/images/server.png" mode="widthFix"></image>
        <text>在使用苦瓜app的过程中，您可以添加专属客服，咨询使用问题，苦瓜app专属人工客服将为您服务。</text>
      </view>
    </view>
    <view class="con">
      <view class="list padding bg-cyan shadow-blur">
        <view class="left">
          <text class="icon">&#xe68e;</text>
          <text>{{data.wechat}}</text>
        </view>
        <text @click="copy(data.wechat)" class="right">复制</text>
      </view>
      <view class="list padding bg-orange shadow-blur">
        <view class="left">
          <text class="icon">&#xe616;</text>
          <text>{{data.qq}}</text>
        </view>
        <text @click="copy(data.qq)" class="right">复制</text>
      </view>
      <view class="list padding bg-mauve shadow-blur">
        <view class="left">
          <text class="icon">&#xe637;</text>
          <text>{{data.wangwang}}</text>
        </view>
        <text @click="copy(data.wangwang)" class="right">复制</text>
      </view>
      <view class="list padding bg-grey shadow-blur">
        <view class="left">
          <text class="icon">&#xe611;</text>
          <text>{{data.mobile}}</text>
        </view>
        <text @click="copy(data.mobile)" class="right">复制</text>
      </view>
    </view>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        data: ''
      }
    },
    onReady(){
      this.sendRequest()
    },
    methods: {
      async sendRequest() {
        const res=  await this.$request.post('/setting/customer-service', {});
        this.data = res.data.data;
      },
      copy(data){
        uni.setClipboardData({
            data: data,
            success: function () {
                console.log('success');
            }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.content{
  .head{
    position: relative;
    .bg{
      width: 100%;
      opacity: .95;
    }
    .title{
      position: absolute;
      top: 220upx;
      left: 50upx;
      background-color: $uni-bg-color;
      display: flex;
      border-radius: 40upx;
      box-shadow: 0px 4px 29px 0px rgba(0, 0, 0, 0.1);
      align-items: center;
      padding: 20upx;
      width: 650upx;

      image{
        width: 450upx;
        margin-right: 16upx;
      }
    }
  }
  .con{
    margin: 100upx 50upx;

    .list{
      border-radius: 40upx;
      display: flex;
      justify-content: space-between;
      margin: 25upx 0;

      .icon{
        margin-right: 8upx;
      }

      .right{
        margin-right: 20upx;
      }
    }
  }
}
</style>
