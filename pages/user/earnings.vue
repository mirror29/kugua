<template>
	<div class="content">
		<view class="title">
			<view class="number">
				<text>账户余额</text>
				<text>￥{{amount.amount || '0.00'}}</text>
			</view>
			<view class="number">
				<text>待处理</text>
				<text>￥{{amount.amount_freeze || '0.00'}}</text>
			</view>
			<navigator class="withdraw" url="./parnter/withdraw">提现</navigator>
		</view>
		<view class="taoke">
			<text class="taoke-tit">淘客佣金</text>
			<view class="taoke-con">
				<view>
					<text>预估收入</text>
					<text class="number">￥{{commission.thisMonth || '0.00'}}</text>
					<text class="commission">本月佣金</text>
				</view>
				<view>
					<text>结算收入</text>
					<text class="number">￥{{commission.lastMonth || '0.00'}}</text>
					<text class="commission">上月佣金</text>
				</view>
			</view>
		</view>

		<!-- 店长奖金 -->
		<!-- <view class="store">
			<view class="store">
				<text class="store-tit">店长奖金</text>
				<view class="store-con">
					<view>
						<text>本月市场销售</text>
						<text class="commission">收入</text>
						<text class="number">￥0.00</text>
					</view>
					<view>
						<text>上月市场销售</text>
						<text class="commission">收入</text>
						<text class="number">￥0.00</text>
					</view>
				</view>
			</view>

			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in navList" :key="index" @tap="tabSelect" :data-id="index">
						{{item}}
					</view>
				</view>
			</scroll-view>
			<view v-for="(item,index) in 10" :key="index" v-if="index==TabCur" class="bg-white padding text-center tab">
				<view class="tab-con" v-if="index === 0">
					<text>付款笔数</text>
					<view class="tab-li">
						<text>预估佣金</text>
						<text class="number">￥0.00</text>
					</view>
					<view class="tab-li">
						<text>推广奖励</text>
						<text class="number">￥0.00</text>
					</view>
				</view>
				<view class="tab-con" v-else-if="index === 1">
					<text>付款笔数</text>
					<view class="tab-li">
						<text>预估佣金</text>
						<text class="number">￥0.00</text>
					</view>
					<view class="tab-li">
						<text>推广奖励</text>
						<text class="number">￥0.0000</text>
					</view>
				</view>
			</view>
		</view> -->

		<!-- 底部 -->
		<view class="foot">
			<navigator class="foot-li" url="./config/commission-details">
				<text>每月佣金记录</text>
				<text class="icon">&#xe6d1;</text>
			</navigator>
			<navigator class="foot-li" url="./config/withdraw-list">
				<text>提现记录</text>
				<text class="icon">&#xe6d1;</text>
			</navigator>
		</view>
	</div>
</template>

<script>
	import {
			mapState,
	} from 'vuex';
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				navList: ['今日','昨日'],
				amount: '',
				commission: ''
			};
		},
		onReady () {
			this.sendRequest();
		},
		computed: {
			...mapState(['userInfo'])
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			async sendRequest(){
				try {
					const amount = await this.$request.post('/balance/index',{
						header:{
							token: this.userInfo.token
						}
					})
					const commission = await this.$request.post('/balance/income-this-month-and-last-month',{
						header:{
							token: this.userInfo.token
						}
					})
					console.log(commission)
					this.amount = amount.data.data;
					this.commission = commission.data.data;

					this.$common.checkStatus(amount.data.code)
				} catch (error) {
					console.error('error:', error);
				}
			},
		},
		//点击导航栏 buttons 时触发
    onNavigationBarButtonTap(e) {
        const index = e.index;
        if (index === 0) {
            uni.navigateTo({
								url: './statement'
						});
        }
    }
	}
</script>

<style lang="scss" scoped>
.content{
	.title{
		background-color: $kg-text;
		color: $uni-text-color-inverse;
		display: flex;
		padding: 30upx;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;

		.number{
			display: flex;
			flex-direction: column;
			line-height: 1.6;
		}

		.withdraw{
			border: 1upx solid #fff;
			border-radius: 40upx;
			width: 140upx;
			height: 60upx;
			line-height: 60upx;
			text-align: center;
		}
	}

	.taoke{
		text-align: center;
		padding-top: $uni-spacing-col-base;
		color: $uni-text-color;
		.taoke-tit{
			font-size: 34upx;
			line-height: 50upx;
			height: 50upx;
			font-weight: 550;
			color: rgb(95, 95, 95);
		}
		.taoke-con{
			display: flex;
			justify-content: space-between;

			view{
				background-color: $uni-bg-color;
				width: 372upx;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-top: $uni-spacing-col-base;
				padding: 10upx 0;
				line-height: 1.6;

				.number{
					font-weight: bold;
				}

				.commission{
					font-size: 30upx;
					color: $uni-text-color-placeholder;
				}
			}
		}
	}

	.store{
		text-align: center;
		padding-top: $uni-spacing-col-base;
		color: $uni-text-color;
		.store-tit{
			font-size: 34upx;
			line-height: 50upx;
			height: 50upx;
			font-weight: 550;
			color: rgb(95, 95, 95);
		}
		.store-con{
			display: flex;
			justify-content: space-between;

			view{
				background-color: $uni-bg-color;
				width: 372upx;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-top: $uni-spacing-col-base;
				padding: 10upx 0;
				line-height: 1.6;

				.number{
					font-weight: bold;
				}
			}
		}

		.nav{
			margin-top: 8upx;
			.cu-item.cur{
				border-bottom: none;
			}
		}

		.tab{
			margin-top: $uni-spacing-col-sm;
			.tab-con{
				display: flex;
				justify-content: space-between;
				align-items: center;

				.tab-li{
					display: flex;
					flex-direction: column;
					line-height: 1.6;

					.number{
						font-weight: bold;
					}
				}
			}
		}
	}

	.foot{
		margin-top: $uni-spacing-col-sm;

		.foot-li{
			background-color: $uni-bg-color;
			color: $uni-text-color;
			display: flex;
			justify-content: space-between;
			padding: 26upx;
			margin: 1upx 0;
			align-items: centerl
		}
	}
}
</style>
