<template>
	<view class="mescroll-uni-warp">
		<scroll-view :class="{'mescroll-uni':true, 'mescroll-uni-fixed':fixed}" :style="{'padding-top':padTop,'padding-bottom':padBottom,'top':fixedTop,'bottom':fixedBottom}" :lower-threshold="upOffset" :scroll-top="scrollTop" :scroll-with-animation="scrollAnim" @scroll="scroll" @scrolltolower="scrolltolower" @touchstart="touchstartEvent" @touchmove="touchmoveEvent" @touchend="touchendEvent" @touchcancel="touchendEvent" :scroll-y='scrollAble' :enable-back-to-top="true">
			<!-- 下拉加载区域 -->
			<view v-if="optDown" class="mescroll-downwarp" :class="{'mescroll-downwarp-reset':isDownReset}" :style="{'height': downHight+'px', 'position': 'relative', 'overflow': 'hidden', '-webkit-transition': isDownReset?'height 300ms':''}">
				<view class="downwarp-content">
					<image class="downwarp-slogan" src="/static/images/mescroll-slogan.png" mode="widthFix"/>
					<view v-if="!isDownLoading" class="downwarp-progress" :style="{'transform':'rotate(' + downRotate + 'deg)'}"></view>
					<view v-if="isDownLoading" class="downwarp-loading mescroll-rotate"></view>
					<view class="downwarp-mascot"></view>
				</view>
			</view>

			<!-- 列表内容 -->
			<slot></slot>

			<!-- 空布局 -->
			<view v-if="optEmpty&&isShowEmpty" class="mescroll-empty">
				<image v-if="optEmpty.icon" class="empty-icon" :src="optEmpty.icon" mode="widthFix" />
				<view v-if="optEmpty.tip" class="empty-tip">{{optEmpty.tip}}</view>
				<view v-if="optEmpty.btnText" class="empty-btn" @click="emptyClick">{{optEmpty.btnText}}</view>
			</view>

			<!-- 上拉加载区域 -->
			<view v-if="optUp" class="mescroll-upwarp">
				<!-- 加载中.. -->
				<template v-if="isUpLoading">
					<!-- <view class="upwarp-progress mescroll-rotate"></view> -->
					<w-loading ref="loading" ></w-loading>
					<view class="upwarp-tip">{{optUp.textLoading}}</view>
				</template>
				<!-- 无数据 -->
				<view v-if="!isDownLoading && isUpNoMore" class="upwarp-nodata">{{optUp.textNoMore}}</view>
			</view>
		</scroll-view>

		<!-- 回到顶部按钮 -->
		<image v-if="optToTop" class="mescroll-totop" :class="{'mescroll-fade-in':isShowToTop}" :src="optToTop.src" mode="widthFix" @click="toTopClick" />
	</view>
</template>

<script>
	// 引入mescroll-uni.js,处理核心逻辑
	import MeScroll from './mescroll-uni.js';
	// 引入全局配置
	import GlobalOption from './mescroll-uni-option.js';

	export default {
		data() {
			return {
				mescroll: null,
				downHight: 0, //下拉刷新: 容器高度
				downRotate: 0, //下拉刷新: 圆形进度条旋转的角度
				isDownReset: false, //下拉刷新: 是否显示重置的过渡动画
				isDownLoading: false, //下拉刷新: 是否显示加载中
				isUpLoading: false, // 上拉加载: 是否显示 "加载中..."
				isUpNoMore: false, // 上拉加载: 是否显示 "-- END --"
				isShowEmpty: false, // 是否显示空布局
				isShowToTop: false, // 是否显示回到顶部按钮
				scrollAble: true, // 是否禁止下滑 (下拉时禁止,避免抖动)
				scrollTop: 0, // 滚动条的位置
				scrollAnim: false, // 是否开启滚动动画
				windowTop: 0, // 可使用窗口的顶部位置
				windowBottom: 0 // 可使用窗口的底部位置
			}
		},
		props: {
			down: Object,
			up: Object,
			top: [String,Number],  // padding-top的数值,单位upx. 目的是使下拉布局往下偏移
			bottom: [String,Number],  // padding-bottom的数值,单位upx. 目的是使上拉布局往上偏移
			fixed: { // 是否通过fixed固定mescroll的高度, 默认true
				type: Boolean,
				default(){
					return false
				}
			}
		},
		computed: {
			// 下拉刷新的配置
			optDown() {
				return this.mescroll ? this.mescroll.optDown : null;
			},
			// 上拉加载的配置
			optUp() {
				return this.mescroll ? this.mescroll.optUp : null;
			},
			// 空布局的配置
			optEmpty() {
				return this.mescroll ? this.mescroll.optUp.empty : null;
			},
			// 回到顶部的配置
			optToTop() {
				return this.mescroll ? this.mescroll.optUp.toTop : null;
			},
			// top数值,单位upx,需转成px. 目的是使下拉布局往下偏移
			numTop(){
				return uni.upx2px(Number(this.top||0))
			},
			fixedTop(){
				return this.fixed ? (this.numTop + this.windowTop) + 'px' : 0
			},
			padTop(){
				return !this.fixed ? this.numTop + 'px' : 0
			},
			// bottom数值,单位upx,需转成px 目的是使上拉布局往上偏移
			numBottom(){
				return uni.upx2px(Number(this.bottom||0))
			},
			fixedBottom(){
				return this.fixed ? (this.numBottom + this.windowBottom) + 'px' : 0
			},
			padBottom(){
				return !this.fixed ? this.numBottom + 'px' : 0
			},
			// 距底部多远时（单位px），触发 scrolltolower 事件
			upOffset(){
				return this.mescroll ? this.mescroll.optUp.offset : 50;
			}
		},
		methods: {
			//注册滚动到底部的事件,用于上拉加载
			scrolltolower() {
				this.mescroll && this.mescroll.scrolltolower();
			},
			//注册列表滚动事件,用于下拉刷新
			scroll(e) {
				this.mescroll && this.mescroll.scroll(e.detail, ()=>{
					this.$emit('scroll', this.mescroll) // 此时可直接通过 this.mescroll.scrollTop获取滚动条位置; this.mescroll.isScrollUp获取是否向上滑动
				})
			},
			//注册列表touchstart事件,用于下拉刷新
			touchstartEvent(e) {
				this.mescroll && this.mescroll.touchstartEvent(e);
			},
			//注册列表touchmove事件,用于下拉刷新
			touchmoveEvent(e) {
				this.mescroll && this.mescroll.touchmoveEvent(e);
			},
			//注册列表touchend事件,用于下拉刷新
			touchendEvent(e) {
				this.mescroll && this.mescroll.touchendEvent(e);
			},
			// 点击空布局的按钮回调
			emptyClick(){
				this.$emit('emptyclick',this.mescroll)
			},
			// 点击回到顶部的按钮回调
			toTopClick(){
				this.isShowToTop = false; // 回到顶部按钮需要先隐藏,再执行回到顶部,避免闪动
				this.mescroll.scrollTo(0, this.mescroll.optUp.toTop.duration); // 执行回到顶部
				this.$emit('topclick', this.mescroll); // 派发点击回到顶部按钮的回调
			}
		},
		// 编译到H5,不会执行onReady,只执行mounted
		mounted() {
			let vm = this;

			let diyOption = {
				// 下拉刷新的配置
				down: {
					offset: uni.upx2px(130), //触发刷新的距离,单位为px
					inOffset(mescroll) {
						// 下拉的距离进入offset范围内那一刻的回调
						vm.scrollAble = false; // 禁止下拉,避免抖动 (自定义mescroll组件时,此行不可删)
						vm.isDownReset = false; // 不重置高度 (自定义mescroll组件时,此行不可删)
						vm.isDownLoading = false; // 不显示加载中
						vm.downRotate = 0; // 旋转到0
					},
					outOffset(mescroll) {
						// 下拉的距离大于offset那一刻的回调
						vm.scrollAble = false; // 禁止下拉,避免抖动 (自定义mescroll组件时,此行不可删)
						vm.isDownReset = false; // 不重置高度 (自定义mescroll组件时,此行不可删)
						vm.isDownLoading = false; // 不显示加载中
						vm.downRotate = 180; // 旋转到180
					},
					onMoving(mescroll, rate, downHight) {
						// 下拉过程中的回调,滑动过程一直在执行; rate下拉区域当前高度与指定距离的比值(inOffset: rate<1; outOffset: rate>=1); downHight当前下拉区域的高度
						vm.downHight = downHight; // 设置下拉区域的高度 (自定义mescroll组件时,此行不可删)
					},
					showLoading(mescroll, downHight) {
						// 显示下拉刷新进度的回调
						vm.scrollAble = true; // 开启下拉 (自定义mescroll组件时,此行不可删)
						vm.isDownReset = true; // 重置高度 (自定义mescroll组件时,此行不可删)
						vm.isDownLoading = true;// 显示加载中
						vm.downHight = downHight; // 设置下拉区域的高度 (自定义mescroll组件时,此行不可删)
					},
					endDownScroll(mescroll) {
						vm.scrollAble = true; // 开启下拉 (自定义mescroll组件时,此行不可删)
						vm.isDownReset = true;// 重置高度 (自定义mescroll组件时,此行不可删)
						vm.isDownLoading = false; // 不显示加载中
						vm.downHight = 0; // 设置下拉区域的高度 (自定义mescroll组件时,此行不可删)
					},
					// 派发下拉刷新的回调
					callback: function(mescroll){
						vm.$emit('down', mescroll)
					}
				},
				// 上拉加载的配置
				up: {
					// 显示加载中的回调
					showLoading() {
						vm.isUpLoading = true;
						vm.isUpNoMore = false;
					},
					// 显示无更多数据的回调
					showNoMore() {
						vm.isUpLoading = false;
						vm.isUpNoMore = true;
					},
					// 隐藏上拉加载的回调
					hideUpScroll() {
						vm.isUpLoading = false;
						vm.isUpNoMore = false;
					},
					// 空布局
					empty: {
						onShow(isShow) { // 显示隐藏的回调
							if(vm.isShowEmpty != isShow) vm.isShowEmpty = isShow;
						}
					},
					// 回到顶部
					toTop: {
						onShow(isShow) { // 显示隐藏的回调
							if (vm.isShowToTop != isShow) vm.isShowToTop = isShow;
						}
					},
					// 派发上拉加载的回调
					callback: function(mescroll){
						vm.$emit('up', mescroll)
					}
				}
			}

			MeScroll.extend(diyOption, GlobalOption); // 混入全局的配置
			let myOption = MeScroll.extend({
				'down': vm.down ? JSON.parse(JSON.stringify(vm.down)) : vm.down, // 深拷贝,避免对props的影响
				'up': vm.up ? JSON.parse(JSON.stringify(vm.up)) : vm.up // 深拷贝,避免对props的影响
			}, diyOption); // 混入具体界面的配置

			// 初始化MeScroll对象
			vm.mescroll = new MeScroll(myOption);
			// init回调mescroll对象
			vm.$emit('init', vm.mescroll);

			// 设置高度
			uni.getSystemInfo({
				success(res) {
					if(res.windowTop) vm.windowTop = res.windowTop; // 修正app和H5的top值
					if(res.windowBottom) vm.windowBottom = res.windowBottom; // 修正app和H5的bottom值
					vm.mescroll.setBodyHeight(res.windowHeight); // 使down的bottomOffset生效
				}
			});

			// 因为使用的是scrollview,这里需自定义scrollTo
			vm.mescroll.resetScrollTo((y, t)=>{
				let curY = vm.mescroll.getScrollTop()
				if (t === 0) {
					vm.scrollAnim = false;
					vm.scrollTop = curY;
					vm.$nextTick(function(){
						vm.scrollTop = y
					})
				} else{
					vm.scrollAnim = true;
					vm.mescroll.getStep(curY, y, step=>{
						vm.scrollTop = step
					}, t)
				}
			})
		}
	}
</script>

<style>
	@import "./mescroll-uni.css";

	/*下拉刷新--标语*/
	.mescroll-downwarp .downwarp-slogan{
		display: block;
		width: 380upx;
		height: 168upx;
		margin: auto;
	}
	/*下拉刷新--向下进度动画*/
	.mescroll-downwarp .downwarp-progress{
		display: inline-block;
		width: 40upx;
		height: 40upx;
		border: none;
		margin: 15upx auto 0 auto;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		background-image: url(data:image/png;base64,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);
		-webkit-transition: all 300ms;
		transition: all 300ms;
	}
	/*下拉刷新--进度条*/
	.mescroll-downwarp .downwarp-loading{
		display: inline-block;
		width: 32upx;
		height: 32upx;
		border-radius: 50%;
		border: 2upx solid rgb(255, 255, 255);
		border-bottom-color: transparent;
		margin: 15upx auto 0 auto;
	}
	/*下拉刷新--吉祥物*/
	.mescroll-downwarp .downwarp-mascot{
		position: absolute;
		right: 16upx;
		bottom: 0;
		width: 100upx;
		height: 100upx;
		background-size: contain;
		background-repeat: no-repeat;
		-webkit-animation: animMascot .6s steps(1,end) infinite;
		animation: animMascot .6s steps(1,end) infinite;
	}
	@-webkit-keyframes animMascot {
		0% {background-image: url(http://www.mescroll.com/img/beibei/mescroll-bb1.png)}
		25% {background-image: url(http://www.mescroll.com/img/beibei/mescroll-bb2.png)}
		50% {background-image: url(http://www.mescroll.com/img/beibei/mescroll-bb3.png)}
		75% {background-image: url(http://www.mescroll.com/img/beibei/mescroll-bb4.png)}
		100% {background-image: url(http://www.mescroll.com/img/beibei/mescroll-bb1.png)}
	}
	@keyframes animMascot {
		0% {background-image: url(http://www.mescroll.com/img/beibei/mescroll-bb1.png)}
		25% {background-image: url(http://www.mescroll.com/img/beibei/mescroll-bb2.png)}
		50% {background-image: url(http://www.mescroll.com/img/beibei/mescroll-bb3.png)}
		75% {background-image: url(http://www.mescroll.com/img/beibei/mescroll-bb4.png)}
		100% {background-image: url(http://www.mescroll.com/img/beibei/mescroll-bb1.png)}
	}
</style>
