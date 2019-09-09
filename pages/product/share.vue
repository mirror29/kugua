<template>
  <div class="content">
    <!--引用组件-->
    <skeleton v-if="showSkeleton" ref="skeleton" loading="chiaroscuro" selector="skeleton" bgcolor="#FFF"></skeleton>

    <view class="share">
        <view class="share-tit" >
            <view class="tit-left skeleton-rect">
                <image :src="detail.qr_code_images" lazy-load @click="showImg"></image>
                <text @tap="choose()" :class="[isChoose?'active icon': 'noactive icon']">&#xe6c2;</text>
            </view>
            <view class="tit-right">
                <view v-for="(item,index) in detail.ittle_images" :key="index" class="right-item">
                    <image :src="item.imgUrl" lazy-load class="skeleton-rect" @click="showImg"></image>
                    <text @tap="choose2(index)" :class="[item.isChoose?'active icon': 'noactive icon']">&#xe6c2;</text>
                </view>
            </view>
        </view>
        <view class="name skeleton-rect">{{detail.name}}</view>
        <view class="info skeleton-rect">
          <view>【券后价】 ￥{{detail.discountPrice}}</view>
          <view>【在售价】 ￥{{detail.price}}</view>
          <text>【复制此信息打开手机淘宝即可下单】</text>
          <view>【{{detail.tbk}}】</view>
          <view v-if="detail.summary != ''">【必买理由】 {{detail.summary}}</view>
          <view v-else>【优惠信息】 {{detail.couponInfo}}</view>
        </view>
        <button class="skeleton-radius" @click="share()">分享</button>
    </view>
  </div>
</template>

<script>
  import {
			mapState,
  } from 'vuex';
  import share from "@/common/share.js";
  export default {
    data(){
      return{
        detail: {
            "name": "九阳电压力锅智能电高压锅饭煲家用官方1双胆2旗舰店3-4正品5-6人",
            "num_iid": "550898870326",
            "summary": "铜釜双胆 智能预约 防烫排气 拉丝机身",
            "images": "http://img.alicdn.com/bao/uploaded/i2/2411055336/O1CN01VRQxsp1pHvxRm3XiP_!!0-item_pic.jpg",
            "qr_code_images": "http://apiqr.vephp.com/public/uploads/modules/tmp/tklpic/BRRSQVMrAThRGgdeCTIBTwYuAAwAOldy.jpg",
            "small_images": ["https://img.alicdn.com/i1/2411055336/TB2ljK9uKGSBuNjSspbXXciipXa_!!2411055336-0-item_pic.jpg",
                "https://img.alicdn.com/i2/2411055336/O1CN01h7Ghkf1pHvsxEhxTt_!!2411055336.jpg",
                "https://img.alicdn.com/i2/2411055336/TB2zMhkv4dkpuFjy0FbXXaNnpXa_!!2411055336.jpg",
                "https://img.alicdn.com/i2/2411055336/TB2TMcgkx1YBuNjy1zcXXbNcXXa_!!2411055336.jpg"
            ],
            "price": "0.00",
            "discountPrice": "269.00",
            "couponInfo": "",
            "ittle_images": [{
                "imgUrl": "https://img.alicdn.com/i1/2411055336/TB2ljK9uKGSBuNjSspbXXciipXa_!!2411055336-0-item_pic.jpg",
                "isChoose": false
            }, {
                "imgUrl": "https://img.alicdn.com/i2/2411055336/O1CN01h7Ghkf1pHvsxEhxTt_!!2411055336.jpg",
                "isChoose": false
            }, {
                "imgUrl": "https://img.alicdn.com/i2/2411055336/TB2zMhkv4dkpuFjy0FbXXaNnpXa_!!2411055336.jpg",
                "isChoose": false
            }, {
                "imgUrl": "https://img.alicdn.com/i2/2411055336/TB2TMcgkx1YBuNjy1zcXXbNcXXa_!!2411055336.jpg",
                "isChoose": false
            }],
            "isChoose": false
        },
        type: '',
        id: '',
        isChoose: true,
        showSkeleton: true,  //骨架屏显示隐藏
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    onLoad(option){
      this.type = option.type
      this.id = option.id
      console.log(option)
    },
    onShow(){
      const that = this;
      that.$refs.skeleton.attachedAction();
      that.$refs.skeleton.readyAction();
      this.sendRequest();
    },
    methods: {
      async sendRequest(){
        const res = await this.$request.post('/share/index', {
            data: {
                type: this.type,
                value: this.id
            },
            header: {
                token: this.userInfo.token
            }
        });
        console.log(res)
        this.$common.checkStatus(res.data.code)
        let data = res.data.data
        data.ittle_images = []
        data.imgList = []
        data.imgList.push(data.qr_code_images)
        // if(this.type === 'search') {
        //   data.small_images = data.small_images.split("|")
        // }
        for (const item of data.small_images) {
            const json = {
                imgUrl: item,
                isChoose: false
            }
            data.ittle_images.push(json)
            data.imgList.push(item)
        }
        this.detail = data;
        console.log(data)
        this.showSkeleton = false;
      },
      choose () {
          this.isChoose = this.isChoose?false:true;
      },
      choose2 (index) {
          this.detail.ittle_images[index].isChoose = this.detail.ittle_images[index].isChoose?false:true;
      },
      share(){
        let _this = this;
        let shareInfo={
          href: '',
					title: '',
					desc:"",
					imgUrl: _this.detail.qr_code_images
        };
        let copy = ''
        if(_this.detail.summary != '') {
          copy = `${_this.detail.name}
---------------------
【券后价】 ￥${_this.detail.discountPrice}
【在售价】 ￥${_this.detail.price}
【复制此信息打开手机绹寶即可下单】
【${_this.detail.tbk}】
【必买理由】 ${_this.detail.summary}
---------------------`
        }else{
          copy = `${_this.detail.name}
---------------------
【券后价】 ￥${_this.detail.discountPrice}
【在售价】 ￥${_this.detail.price}
【复制此信息打开手机绹寶即可下单】
【${_this.detail.tbk}】
【优惠信息】 ${_this.detail.couponInfo}
---------------------`
        }
        if(_this.isChoose){
            uni.saveImageToPhotosAlbum({
                filePath: _this.detail.qr_code_images,
                success: function () {

                }
            });
        }
        _this.detail.ittle_images.map((value,key) => {
            if(value.isChoose) {
                uni.saveImageToPhotosAlbum({
                    filePath: value.imgUrl,
                    success: function () {

                    }
                });
            }
        })
				this.shareObj=share(shareInfo,function(index){
					_this.$common.switchShare(index,shareInfo,copy)
				});
				this.$nextTick(()=>{
					this.shareObj.alphaBg.show();
          this.shareObj.shareMenu.show() ;
				})
      },
      showImg(){
          uni.previewImage({
              urls: this.detail.imgList
          });
      }
    },
  }
</script>

<style lang="scss" scoped>
.share{
  padding: 20upx 6upx 20upx 12upx;
  background-color: $uni-bg-color;
  margin: 20upx 0;
  .share-tit{
      display: flex;
      width: 100%;

      .tit-left{
          height: 428upx;
          width: 300upx;
          overflow: hidden;
          position: relative;
          margin-right: 7upx;
          // margin: 10upx;

          image{
              height: 446upx;
              width: 300upx;
          }

          text{
              position: absolute;
              font-size: 60upx;
              right: 10upx;
              top: 10upx;
              opacity: .9;
          }
          .active{
              color: #f01426;
          }

          .noactive{
              color: $uni-text-color;
          }
    }

    .tit-right{
        display: flex;
        flex-wrap: wrap;
        width: 460upx;

        .right-item{
            position: relative;

            image{
                width: 210upx;
                height: 210upx;
                margin: 0 4upx;
            }

            text{
                position: absolute;
                font-size: 50upx;
                right: 10upx;
                top: 10upx;
                opacity: .9;
            }

            .active{
                color: #f01426;
            }

            .noactive{
                color: $uni-text-color;
            }
        }
    }
  }

  .name{
    font-size: 32upx;
    font-weight: bold;
    // letter-spacing: 2upx;
    color: $uni-text-color;
    padding: 10upx;
    border-bottom: 2upx dashed $kg-text;
    margin: 14upx 14upx 0 14upx;
  }

  .info{
    display: flex;
    flex-direction: column;
    margin: 0 14upx 14upx 14upx;
    padding: 16upx;
    border-bottom: 2upx dashed $kg-text;
    line-height: 2.2;
    color: $uni-text-color;
  }

  button{
      height: 80upx;
      line-height: 80upx;
      width: 500upx;
      border: none;
      background-color: rgb(247, 95, 7);
      color: $uni-text-color-inverse;
      border-radius: 40upx;
      font-size: 36upx;
      margin-top: 40upx;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10upx;
  }

}
</style>
