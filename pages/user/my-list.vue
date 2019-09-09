<template>
	<view class="page-warp">
		<view class="top-warp">
			<view v-for="(tab, i) in tabs" :key="tab.status" :class="{'active':curIndex === i}" @click="changeTab(tab.status,i)">{{tab.title}}</view>
		</view>

		<swiper class="swiper" :current="curIndex" @change="swiperChange">
			<!--全部 -->
			<swiper-item>
				<mescroll-item :i="0" :index="curIndex" :status="status"></mescroll-item>
			</swiper-item>

			<!-- 已付款 -->
			<swiper-item>
				<mescroll-item :i="1" :index="curIndex" :status="status"></mescroll-item>
			</swiper-item>

			<!-- 已结算 -->
			<swiper-item>
				<mescroll-item :i="2" :index="curIndex" :status="status"></mescroll-item>
			</swiper-item>

			<!-- 已失效 -->
			<swiper-item>
				<mescroll-item :i="3" :index="curIndex" :status="status"></mescroll-item>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import MescrollItem from "./my-swiper-item.vue";

	export default {
		components: {
			MescrollItem
		},
		data() {
			return {
				tabs: [
					{
						title: '全部',
						status: 0
					},
					{
						title: '已付款',
						status: 12
					},
					{
						title: '已结算',
						status: 3
					},
					{
						title: '已关闭',
						status: 13
					}
				],
				curIndex: 0, // 当前tab的下标
				status: 0
			}
		},
		methods: {
			// 轮播菜单
			swiperChange(e){
				let status = this.tabs[e.detail.current].status
				this.changeTab(status,e.detail.current)
			},
			// 切换菜单
			changeTab(sta,i){
				this.curIndex = i;
				this.status = sta
			}
		}
	}
</script>

<style>
	/* 需固定高度 */
	page,
	.page-warp,
	.swiper{
		height: 100%;
	}

	.top-warp{
		z-index: 999;
		position: fixed;
		top: --window-top; /* css变量 */
		left: 0;
		width: 100%;
		height: 80upx;
		background-color: white;
		text-align: center;
		border-bottom: 1upx solid #ddd;
	}
	.top-warp view{
		display: inline-block;
		width: 22%;
		line-height: 80upx;
		font-size: 28upx;
		margin: 0 10upx;
	}
	.top-warp .active{
		border-bottom: 2upx solid rgb(252, 117, 55);
		padding: 0 10upx;
		color: rgb(252, 117, 55);
		height: 80upx;
	}
</style>
