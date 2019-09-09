<!-- 商品列表组件 <pd-list :list="xx"></pd-list> -->
<template>
	<view class="pd-list">
		<view class="pd-li" v-for="item in list" :key="item.id">
			<image class="pd-img" :src="item.item_img || '/static/images/noImg.png'" mode="widthFix" lazy-load/>
			<view class="pd-name">
				<image src="../../static/images/tianmao.png" mode="" v-if="item.order_type == 1" lazy-load></image>
				<image src="../../static/images/tb.png" mode="" v-else lazy-load></image>
				{{item.item_title}}</view>
			<view class="order-num">
				<text>订单号：{{item.trade_parent_id}}</text>
				<text class="copy" @click="copy(item.trade_parent_id)">复制</text>
			</view>
			<view class="order-time" v-if="item.settlement_commission === '0.00'">创建日期:{{item.tk_create_time}}</view>
			<view class="order-time" v-else>结算日期:{{item.tk_earning_time}}</view>
			<view class="order-price" v-if="item.tk_status != '13'">
				<text class="payment">实付：<text>{{item.payment_price}}</text></text>
				<text class="estimate" v-if="item.settlement_commission === '0.00'">预估佣金：{{item.estimate_commission}}</text>
				<text class="estimate" v-else>结算佣金：{{item.settlement_commission}}</text>
			</view>
			<view class="order-user">
				<text class="order-level">{{item.order_level}}<text>级订单</text></text>
				<text class="order-use">所属用户：<text>{{item.from_mobile}}</text></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list: { // 数据列表
				type: Array,
				default(){
					return []
				}
			}
		},
		methods: {
			copy(e){
				uni.setClipboardData({
					data: e,
					success: function () {
						uni.showToast({
							title: '复制成功',
							icon: 'none'
						});
							// console.log('复制成功');
					}
				});
			}
		},
	}
</script>

<style lang='scss'>
	/*数据列表*/
	.pd-li{
		position: relative;
		height: 230upx;
		padding: 8upx 16upx 20upx 220upx;
		border-bottom: 1upx solid #eee;
		background-color: $uni-bg-color;
		margin: $uni-spacing-row-sm 0;
		.pd-img{
			position: absolute !important; /*编译到H5,在list-mescroll-more的案例中需加上!important,解决tab切换过快定位失效的问题*/
			left: 14upx;
			top: 20upx;
			width: 190upx;
			height: 190upx;
		}
		.pd-name{
			font-size: 26upx;
			line-height: 40upx;
			width: 520upx;
			height: 80upx;
			overflow: hidden;
			display: flex;
			// align-items: center;
			@include ellipsis-2;

			image{
				height: 32upx;
				width: 32upx;
				border-radius: 6upx;
				margin-right: 8upx;
			}
		}
		.order-num{
			display: flex;
			justify-content: space-between;
			color: $uni-text-color-grey;
			font-size: 26upx;
			line-height: $line-height;
			align-items: center;

			.copy{
				border-radius: 40upx;
				border: 1upx solid #d4d4d4;
				width: 90upx;
				text-align: center;
				padding: 4upx 0
			}
		}

		.order-time{
			color: $uni-text-color-grey;
			font-size: 26upx;
			line-height: $line-height;
		}

		.order-price{
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 28upx;

			.payment{
				color: $uni-text-color-grey;

				text{
					color: $kg-text;
				}
			}

			.estimate{
				color: $kg-text;
				font-weight: bold;
			}
		}

		.order-user{
			display: flex;
			justify-content: space-between;
			font-size: 26upx;

			.order-level{
				color: $kg-text;
				font-weight: bold;

				text{
					color: $uni-text-color-grey;
					font-weight: normal;
				}
			}

			.order-use{
				color: $uni-text-color-grey;
			}
		}
	}
</style>
