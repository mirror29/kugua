<template>
  <div>
    <view v-for="(item,index) in imgList" :key="index" class="invite-img">
      <image :src="item.imgUrl" mode="widthFix"></image>
    </view>
    <view class="radius shadow-warp bg-white margin-top invite-num">
      <view class="list list1">
        <text>已邀请人数</text>
        <text>{{number}}人</text>
      </view>
      <view class="list">
        <text>升级所需邀请</text>
        <text>2人</text>
      </view>
    </view>
    <view class="invite-btn">
      <button class="cu-btn round shadow lg" @click="invite">立即邀请</button>
    </view>
  </div>
</template>

<script>
  import share from "@/common/share.js";
  import {
    mapState
  } from 'vuex';
  export default {
    data() {
      return {
        imgList: [
          {
            imgUrl: '../../../static/images/up-img.png'
          }
        ],
        number: 0
      }
    },
    computed: {
      ...mapState(['userInfo','userMsg'])
    },
    onShow(){
      this.sendRequest();
    },
    methods: {
      async sendRequest(){
          try {
              const res = await this.$request.post('/share/upgrade', {
                  header:{
                    token: this.userInfo.token
                  }
              });
              console.log(res)

              this.number = res.data.data.subordinate_number
              this.$common.checkStatus(res.data.code)
          } catch (error) {
              console.error('error:', error);
          }
      },
      invite(){
        let _this = this;
        console.log(this.userMsg)

        let shareInfo={
            href: `https://www.kuguayouhui.com/site/download?code=${this.userMsg.invite_code}`,
            title: `您的好友${this.userMsg.realname}邀请您使用苦瓜优惠券`,
            desc: "多种大额优惠券等你来领",
            imgUrl: this.userMsg.avatar
        };

        let copy = shareInfo.href

        this.shareObj=share(shareInfo,function(index){
            _this.$common.switchShare2(index,shareInfo,copy)
        });
        this.$nextTick(()=>{
            this.shareObj.alphaBg.show();
            this.shareObj.shareMenu.show() ;
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.invite-img{
  image{
    width: 100%;
  }
}
.invite-num{
  display: flex;
  margin: 12upx 20upx;
  padding: 40upx 10upx;

  .list{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 50%;
    line-height: 60upx;
    font-size: 34upx;
    color: $uni-text-color;
  }

  .list1{
    border-right: 2upx dashed #ccc;
  }
}
.invite-btn{
  text-align: center;

  button{
    background-color: #C79F84;
    color: #fff;
    width: 600upx;
    margin: 40upx 0;
  }
}
</style>
