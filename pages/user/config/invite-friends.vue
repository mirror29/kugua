<template>
	<view class="swiper">
		<view class="swiper-title">{{title}}</view>
		<swiper :style="{height:fullHeight}" class="swiper-tall" :indicator-dots="indicatorDots" :autoplay="autoplay" :previous-margin="previousMargin"
		 :next-margin="nextMargin" :circular="circular" @change="change" :current="swiperCurrentIndex">
			<swiper-item class="swiper-container" v-for="(img,index) in imgs" :key="index"
			 :item-id="index" :data-year="index">

			<view class="swiper-item"
			  :style="{background:img?('url('+ img +') center no-repeat'):'',backgroundSize:'cover'}"
			   :animation="animationData[index]">
			</view>
			</swiper-item>
		</swiper>

    <view class="foot">
      <button size="mini" @click="shareImg">分享</button>
      <button size="mini" @click="saveImg">保存图片</button>
    </view>

	</view>
</template>

<script>
	import share from "@/common/share.js";
	import {
    mapState
	} from 'vuex';
	export default {
		data() {
			return {
        title: '分享测试',
				screenHeight: 0,
				animationData: {
					0:{},
					1:{},
					2:{}
				},
				index: '0',
				indicatorDots: false,
				autoplay: false,
				previousMargin: uni.upx2px(82)+'px',
				nextMargin: uni.upx2px(82)+'px',
				circular: true,
				zoomParam: 1.10,
				swiperCurrentIndex: 0,
				data: [],
				max: 0,
				imgs:[]
			}
		},
		computed:{
			fullHeight() {
				const res = uni.getSystemInfoSync();
				return res.windowHeight - uni.upx2px(60) - (res.statusBarHeight+44)+'px';
			},
			...mapState(['userInfo'])
		},
		onLoad() {
			this.animation = uni.createAnimation();
			this.animation.scale(this.zoomParam).step();
			this.animationData[0] = this.animation.export();
    },
    onBackPress() {
			//监听back键，关闭弹出菜单
			if (this.shareObj.shareMenu.isVisible()) {
				this.shareObj.shareMenu.hide();
				this.shareObj.alphaBg.hide();
				return true
			}
		},
		onReady(){
			this.sendRequest();
		},
		methods: {
			async sendRequest() {
        const res=  await this.$request.post('/user/invite', {
					header: {
						token: this.userInfo.token
					}
				});
				this.imgs = res.data.data;
				console.log(res)
      },
			change(e) {
				this.swiperCurrentIndex = e.detail.current;
				this.index = e.detail.currentItemId;
				for (let key in this.animationData) {
					if (e.detail.currentItemId == key) {
						this.animation.scale(this.zoomParam).step();
						this.animationData[key] = this.animation.export();
					} else {
						this.animation.scale(1.0).step();
						this.animationData[key] = this.animation.export();
					}
				}
      },
      shareImg() {
				let index = this.index;
        let list = this.imgs;
        let shareInfo={
					href:"",
					title:"",
					desc:"",
					imgUrl: list[index]
				};
				let _this = this;
				let copy = '苦瓜优惠券'
				this.shareObj=share(shareInfo,function(index){
					_this.$common.switchShare(index,shareInfo,copy)
				});
				this.$nextTick(()=>{
					this.shareObj.alphaBg.show();
					this.shareObj.shareMenu.show();
				})
      },
      saveImg() {
        let index = this.index;
        let list = this.imgs;
        uni.saveImageToPhotosAlbum({
            filePath: list[index],
            success: function () {
                uni.showToast({
                    title: '已成功保存图片至您的相册，快去分享吧',
                    icon: 'none'
                });
            }
        });
      },
		}
	}
</script>

<style lang="scss">
	page{
		display: flex;
		flex-wrap: wrap;
	}
	.swiper-container {
		display: flex;
		align-items: center;
	}

	.swiper-item {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-left: auto;
		margin-right: auto;
		height: 900upx;
		width: 530upx;
		line-height: 300upx;
    text-align: center;
    border-radius: 6upx;
    margin-bottom: 50upx;

    image{
      border-radius: 6upx;
    }
	}

	.swiper-tall {
		display: flex;
		align-items: center;
	}

	.swiper-title {
		width: 750upx;
    text-align: center;
    opacity: 0;
    height: 10upx;
	}

  .foot{
    display: flex;
    justify-content: center;

    button{
      color: $uni-text-color-inverse;
      background-color: $kg-text;
      border-radius: 40upx;
      width: 240upx;
      height: 70upx;
      line-height: 70upx;
    }
  }

</style>
