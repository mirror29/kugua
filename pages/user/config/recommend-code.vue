<template>
  <div>
    <view class="content">
      <view class="title">您的邀请码</view>
      <!-- <view class="container">
        <image :src="code.invite_qrcode" @longtap="saveImg"></image>
      </view> -->
      <view class="foot">
        <text class="icon">&#xe625;</text>
        <text class="number">{{userMsg.invite_code}}</text>
        <text class="copy" @click="copy">复制</text>
      </view>
    </view>
    <view class="upload">
      <input class="uni-input" v-model="newCode" placeholder="请输入您的新邀请码" maxlength="10"/>
      <button class="cu-btn bg-blue margin-tb-sm lg" @click="upload">更新邀请码</button>
    </view>
  </div>
</template>

<script>
import {
    mapState,
    mapMutations
} from 'vuex';
  export default {
    data () {
      return {
        code: '',
        newCode: ''
      }
    },
    computed: {
      ...mapState(['userInfo','userMsg'])
    },
    onShow () {
      this.newCode = this.userMsg.invite_code;
    },
    methods: {
      ...mapMutations(['getMsg']),
      saveImg () {
        let _this = this;
        uni.showActionSheet({
            itemList: ['保存图片'],
            success: function (res) {
                console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
                if(res.tapIndex === 0){
                  uni.saveImageToPhotosAlbum({
                     filePath: _this.code.invite_qrcode,
                     success: function () {
                         uni.showToast({
                             title: '已成功保存邀请二维码至您的相册，快去分享吧',
                             icon: 'none'
                         });
                     }
                 });
                }
            },
            fail: function (res) {
                console.log(res.errMsg);
            }
        });
      },
      copy () {
				uni.setClipboardData({
						data: this.userMsg.invite_code,
						success: function () {
							uni.showToast({
								title: '复制邀请码成功，快去分享给好友吧',
								icon: 'none'
							});
								// console.log('复制成功');
						}
				});
      },
      async upload(){
        let reg = /^[A-Za-z0-9]+$/  //只能输入数字和英文
        if (reg.test(this.newCode) === true && this.newCode.length != 0) {
          const res = await this.$request.post('/invite/change', {
            data:{
              code: this.newCode
            },
            header: {
              token: this.userInfo.token
            }
          });
          console.log(res)

          if(res.data.code === 0){
            const usermsg = await this.$request.post('/users',{
                header: {
                  'token': this.userInfo.token
                },
              })

            this.getMsg(usermsg.data.data);  //用户信息存入vuex
            this.$common.returnMsg(res.data.msg, res.data.code);
          } else {
            this.$common.checkStatus(res.data.code);
            this.$common.returnMsg(res.data.msg, res.data.code);
          }

        } else{
          uni.showToast({
              title: '只能输入长度不超过十位的数字/英文',
              icon: 'none'
          });
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
.content{
  background-color: $uni-bg-color;
  width: 660upx;
  border-radius: 10upx;
  margin: 100upx 45upx 60upx 45upx;

  .title{
    height: 100upx;
    line-height: 100upx;
    padding: 20upx 40upx;
    font-size: 34upx;
    font-weight: bold;
  }

  .container{
    display: flex;
    justify-content: center;
    align-items: center;

    image{
      height: 620upx;
      width: 620upx;
    }
  }

  .foot{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 140upx;

    .icon{
      font-size: 80upx;
      margin-right: 4upx;
    }

    .number{
      color: $kg-text;
      font-size: 36upx;
    }

    .copy{
      color: $kg-text;
      border: 1upx solid $kg-text;
      width: 90upx;
      height: 40upx;
      line-height: 40upx;
      text-align: center;
      border-radius: 40upx;
      margin-left: 10upx;
      font-size: 24upx;
    }
  }
}

.upload{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .uni-input{
    background-color: $uni-bg-color;
    width: 660upx;
    padding: 20upx;
    border-radius: 10upx;
    height: 90upx;;
  }
}
</style>
