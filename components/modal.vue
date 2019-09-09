<template>
  <div>
    <!-- 粘贴板弹出框 -->
		<view class="cu-modal" :class="modalShow === true?'show':''">
			<view class="cu-dialog" @tap="navToList">
				<view class="cu-bar bg-white justify-end">
					<view class="content">您是不是要搜索</view>
				</view>
				<view class="padding-xl">
					{{text}}
				</view>
				<view class="search-btn">立即搜索</view>
			</view>
			<view class="action" @tap="hideModal">
				<image src="/static/images/del.png"></image>
			</view>
		</view>
  </div>
</template>

<script>
	import {
			mapMutations
	} from 'vuex';
  export default {
    data(){
      return{
        modalShow: false
      }
		},
		props:{
			text: String
		},
    methods: {
			...mapMutations(['clearClip']),
      showModal(e) {
				this.modalShow = true
			},
			hideModal(e) {
				this.modalShow = false
				this.clearClip();
			},
			navToList() {
				let newkey = escape(this.text)
				uni.navigateTo({
						url: `/pages/product/goods-list?key=${newkey}`
				});
				this.hideModal()
			}
    },
  }
</script>

<style lang="scss" scoped>
.content{
	font-size: 34upx;
	font-weight: bold;
	background-color: $kg-text;
	color: #fff;
	text-align: left;
	z-index: 9999;

}
.search-btn{
	border-radius: 40upx;
	height: 70upx;
	line-height: 70upx;
	width: 300upx;
	text-align: center;
	color: #fff;
	background-color: $kg-text;
	margin: 10upx 0 20upx 160upx;
}
.cu-modal{
	z-index: 9999;
}
.bg-white{
	background-color: $kg-text;
}
.cu-dialog{
	width: 600upx;
	position: relative;
	max-height: 900upx;
}
.padding-xl{
	padding: 30upx;
}
.action{
	position: absolute;
	bottom: 100upx;
	left: 336upx;
	image{
		height: 90upx;
		width: 90upx;
	}
}
</style>
