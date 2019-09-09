<template>
    <view class="container">

		<float ref="float"></float>

		<modal ref="modal" :text="clipText"></modal>

		<view class="user-section">
			<image class="bg" src="/static/images/user-bg.jpg"></image>
			<view class="user-info-box">
				<view class="portrait-box" @click="navTo('./config/user-data')">
					<image class="portrait" :src="userMsg.avatar || '/static/images/missing-face.png'"></image>
				</view>
				<view class="info-box">
					<view class="user-name">
						<text class="username">{{userInfo.nickname || '未登录'}}<text v-if="userMsg.agent > 0" class="center">（运营中心）</text></text>
						<view class="level" v-if="userInfo.nickname ">
							<image src="../../static/images/teyue.png"></image>
							<text v-if="userMsg.level === 0">苦瓜会员</text>
							<text v-else-if="userMsg.level === 1">钻石会员</text>
							<text v-else-if="userMsg.level === 2">普通店长</text>
							<text v-else-if="userMsg.level === 3">金牌店长</text>
							<text v-else-if="userMsg.level === 4">特约店长</text>
						</view>
					</view>
					<view v-if="userInfo.mobile" class="invitation">
						<text class="number">邀请码：{{userMsg.invite_code}}</text>
						<text class="copy" @click="copyInv">复制</text>
					</view>
				</view>
			</view>
			<view class="vip-card-box">
				<image class="card-bg" src="/static/images/vip-card-bg.png" mode=""></image>
				<navigator class="b-btn" @click="navTo('./parnter/withdraw')">
					立即提现
				</navigator>
				<view class="tit">
					￥{{amount.amount || '0.00'}}
				</view>
				<text class="e-m">苦瓜优惠券</text>
				<text class="e-b">苦瓜优惠券，不花冤枉钱</text>
			</view>
		</view>

		<view
			class="cover-container"
			:style="[{
				transform: coverTransform,
				transition: coverTransition
			}]"
			@touchstart="coverTouchstart"
			@touchmove="coverTouchmove"
			@touchend="coverTouchend"
		>

			<view class="tj-sction">
				<view class="tj-item">
					<text class="num">￥{{amount.amount_freeze || '0.00'}}</text>
					<text>待处理提现</text>
				</view>
				<view class="tj-item">
					<text class="num">￥{{commission.thisMonth || '0.00'}}</text>
					<text>预估佣金</text>
				</view>
				<!-- <view class="tj-item">
					<text class="num">￥0.00</text>
					<text>上月结算佣金</text>
				</view> -->
			</view>

			<!-- 合伙人管理 -->
			<!-- <view class="partner" v-if="userMsg.level > 1">
				<view class="partner-con" >
					<view class="partner-li" @click="navTo('./parnter/commission')">
						<image src="../../static/images/he1.png"></image>
						<text>佣金明细</text>
					</view>
					<view class="partner-li" @click="navTo('./parnter/finance')">
						<image src="../../static/images/he2.png"></image>
						<text>财务明细</text>
					</view>
					<view class="partner-li" @click="navTo('./parnter/transfer')">
						<image src="../../static/images/he3.png"></image>
						<text>用户转账</text>
					</view>
					<view class="partner-li" @click="navTo('./parnter/activate')">
						<image src="../../static/images/he4.png"></image>
						<text>激活用户</text>
					</view>
				</view>
			</view> -->

			<!-- 订单 -->
			<view class="order-section">
				<view class="order-item" @click="navTo('./my-list')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="icon order-icon1">&#xe666;</text>
					<text>我的订单</text>
				</view>
				<view class="order-item" @click="navTo('./lower-list')"  hover-class="common-hover" :hover-stay-time="50">
					<text class="icon order-icon2">&#xe604;</text>
					<text>下级订单</text>
				</view>
				<view class="order-item" @click="navTo('./earnings')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="icon order-icon3">&#xe62c;</text>
					<text>我的收益</text>
				</view>
				<view class="order-item" @click="navTo('./team')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="icon order-icon4">&#xe603;</text>
					<text>我的团队</text>
				</view>
				<!-- <navigator class="order-item" url="./kg-video" hover-class="none">
					<text class="icon order-icon5">&#xe688;</text>
					<text>苦瓜介绍</text>
				</navigator> -->
				<!-- <navigator class="order-item" url="./service" hover-class="none">
					<text class="icon order-icon6">&#xe64e;</text>
					<text>联系客服</text>
				</navigator> -->
			</view>

			<view class="order-section">
				<navigator url="./kg-video" hover-class="none" class="kg-video">
					<text>一分钟了解苦瓜，从此不花冤枉钱</text>
				</navigator>
			</view>


			<!-- 升级 -->
			<view class="up-level"  @click="navTo('./config/upgrade-equity')">
					<image src="/static/images/uplevel2.png"></image>
			</view>

			<!-- 商学院  -->
			<view class="school">
				<view class="school-tit">
					<text class="title">苦瓜商学院</text>
					<navigator class="look" url="/pages/school/school" hover-class="none">查看全部 <text class="icon">&#xe6d1;</text></navigator>
				</view>
				<view class="school-con">
					<navigator v-for="(item,index) in list" :key="item.id" class="school-li" @click="toSchool(item)">
						<text class="icon" v-if="index === 0">&#xe610;</text>
						<text v-else-if="index === 1" class="icon">&#xe650;</text>
						<text v-else-if="index === 2" class="icon">&#xe6c7;</text>
						<text v-else-if="index === 3" class="icon">&#xe7f1;</text>
						<text>{{item.name}}</text>
					</navigator>
				</view>
			</view>

			<!-- 菜单栏 -->
			<view class="menu">
					<view class="menu-list" @click="goToTaoBao">
							<text class="icon menu-icon1">&#xe659;</text>
							<text class="title">淘宝授权</text>
							<text class="note">领券分享</text>
					</view>
					<view class="menu-list" @click="navTo('./config/user-data')">
							<text class="icon menu-icon2">&#xe608;</text>
							<text class="title">个人资料</text>
							<text class="note">修改昵称、头像</text>
					</view>
					<view class="menu-list" @click="navTo('./config/invite-friends')">
							<text class="icon menu-icon3">&#xe619;</text>
							<text class="title">邀请好友</text>
							<text class="note">建立你的团队</text>
					</view>
					<view class="menu-list" @click="navTo('./config/recommend-code')">
							<text class="icon menu-icon4">&#xe638;</text>
							<text class="title">邀请码</text>
							<text class="note">修改邀请码</text>
					</view>
					<view class="menu-list" @click="navTo('../login/edit-pass')">
							<text class="icon menu-icon5">&#xe64d;</text>
							<text class="title">修改密码</text>
							<text class="note">修改登陆密码</text>
					</view>
					<!-- <view class="menu-list" @click="navTo('./config/collection')">
							<text class="icon menu-icon6">&#xe62f;</text>
							<text class="title">我的收藏</text>
							<text class="note">收藏的宝贝</text>
					</view> -->
					<navigator class="menu-list" url="./service" hover-class="none">
						<text class="icon menu-icon6">&#xe64e;</text>
						<text class="title">联系客服</text>
						<text class="note">联系苦瓜客服</text>
					</navigator>
					<navigator class="menu-list" url="./config/problem" hover-class="none">
							<text class="icon menu-icon7">&#xe60f;</text>
							<text class="title">常见问题</text>
							<text class="note">使用教程</text>
					</navigator>
					<navigator class="menu-list" url="./config/version" hover-class="none">
							<text class="icon menu-icon8">&#xe703;</text>
							<text class="title">当前版本</text>
							<text class="note">版本信息</text>
					</navigator>
					<view class="menu-list" @click="loginOut">
							<text class="icon menu-icon9">&#xe615;</text>
							<text class="title">退出登录</text>
							<text class="note">切换用户</text>
					</view>
			</view>

			<!-- 开店礼包 -->
			<!-- <view class="open-gift">
					<view class="open-tit">苦瓜合伙人开店礼包</view>
					<view class="open-con">
					<view class="open-list" v-for="(item,index) in productList" :key="item.ProductID">
						<image :src="imgUrl + (item.ProductImg).replace('..', '')"></image>
						<view class="open-foot">
							<text class="open-foot-tit">{{item.ProductName}}</text>
							<text class="price"><text class="sym-price">￥</text>{{item.RegisterPrice}}<text class="original-price">￥{{item.MarketPrice}}</text></text>
							<text v-if="item.RegisterPrice === '88.00'" class="open-btn">
								成为钻石会员
							</text>
							<text v-else-if="item.RegisterPrice === '398.00'" class="open-btn">
								成为店长
							</text>
						</view>
					</view>
					</view>
			</view> -->
		</view>

    </view>
</template>

<script>
	import listCell from '@/components/mix-list-cell';
	import {
			mapState,
			mapMutations
	} from 'vuex';
	let startY = 0, moveY = 0, pageAtTop = true;
    export default {
		components: {
			listCell
		},
		data(){
			return {
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
				list: [],
				amount: '',
				imgUrl: 'http://47.112.113.139',
				commission: ''
			}
		},
		onLoad(){
			},
		onReady () {
			this.sendRequest();
			this.$refs.float.sendRequest()
		},
		onShow(){
			this.sendRequest2();
			this.$common.searchClip();
		},
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 1) {
				this.navTo('/pages/notice/notice');
			}
			if(index === 0){
				uni.navigateTo({
						url: './service'
				});
			}
		},
		// #endif
    computed: {
			...mapState(['hasLogin','userInfo','userMsg','showModal','clipText'])
		},
    updated() {
        if(this.clipText != ''){
            this.showM();
        } else {
            this.$refs.modal.hideModal();
        }
    },
    methods: {
			...mapMutations(['logout']),
			showM(){
					if(this.showModal){
							this.$refs.modal.showModal();
					}
			},
			async sendRequest(){
				try {

					const list = await this.$request.post('/business/category', {});
					this.list = list.data.data;
				} catch (error) {
					console.error('error:', error);
				}
			},
			async sendRequest2(){
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

					this.amount = amount.data.data;
					this.commission = commission.data.data;
					this.$common.checkStatus2(amount.data.code)
				} catch (error) {
					console.error('error:', error);
				}
			},

			loginOut() {	//登出
				let _this = this;
				if(!this.hasLogin){
					uni.showModal({
						title: '请先登录！',
						content: '您目前尚未登录',
						success: function (res) {
								if (res.confirm) {
									uni.navigateTo({
										url: '/pages/login/login'
									})
								} else if (res.cancel) {
										console.log('用户点击取消');
								}
						}
				  });
				} else {
					uni.showActionSheet({
						itemList: ['退出当前账号'],
						success: function (res) {
								if(res.tapIndex === 0) {
									uni.showToast({
										title: '账号已退出',
											icon: 'none'
									});
									_this.logout();  //退出登录
									_this.amount = '';
								}
						},
						fail: function (res) {
								console.log(res.errMsg);
						}
				  });
				}
			},
			// 淘宝登录授权
			async goToTaoBao() {
				if(!this.hasLogin){
					uni.navigateTo({
						url: '/pages/login/login'
					})
				} else {
					const taoVerify = await this.$request.post('/authorization/taobao-verify',{
						header: {
							'token': this.userInfo.token
						},
					})
					if(taoVerify.data.code === 0){
						uni.showToast({
								title: taoVerify.data.msg,
								icon: 'none',
								position: 'bottom'
						});
						return false;
					}
					this.$common.taoLogin();
				}
			},

			copyInv() {	//复制邀请码，不兼容h5
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

			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url){
				if(!this.hasLogin){
					url = '/pages/login/login';
				}
				uni.navigateTo({
					url
				})
			},

			toSchool(item){
				uni.navigateTo({
					url: `/pages/school/school-list?id=${item.id}&name=${item.name}`
				})
			},


		  /* 会员卡下拉和回弹
		  1.关闭bounce避免ios端下拉冲突
		  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
		    transition设置0.1秒延迟，让css来过渡这段空窗期
		  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/ */

			coverTouchstart(e){
				if(pageAtTop === false){
					return;
				}
				this.coverTransition = 'transform .1s linear';
				startY = e.touches[0].clientY;
			},
			coverTouchmove(e){
				moveY = e.touches[0].clientY;
				let moveDistance = moveY - startY;
				if(moveDistance < 0){
					this.moving = false;
					return;
				}
				this.moving = true;
				if(moveDistance >= 80 && moveDistance < 100){
					moveDistance = 80;
				}

				if(moveDistance > 0 && moveDistance <= 80){
					this.coverTransform = `translateY(${moveDistance}px)`;
				}
			},
			coverTouchend(){
				if(this.moving === false){
					return;
				}
				this.moving = false;
				this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
				this.coverTransform = 'translateY(0px)';
			}
		}
}
</script>

<style lang='scss'>
	@import './user.scss'

</style>
