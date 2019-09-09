<template>
	<view class="login">
		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<image src="../../static/images/kugua.png"></image>
			</view>
			<!-- 主体表单 -->
			<view class="main">
				<view class="main-list oBorder">
					<input
						class="main-input"
						v-model="phoneData"
						type="text"
						maxlength="11"
						placeholder="用户名/手机号"
					/>
				</view>
				<view class="main-list oBorder">
					<input
						class="main-input"
						v-model="passData"
						type="text"
						maxlength="32"
						placeholder="密码"
						password="true"
					/>
				</view>
			</view>
			<button
			  :disabled="logining"
				class="dlbutton buttonBorder"
				@tap="startLogin()"
			>登 陆</button>
			<!-- 底部信息 -->
			<view class="footer">
				<navigator url="forget" open-type="navigate">忘记密码</navigator>
				<text>|</text>
				<navigator url="register" open-type="navigate">注册账号</navigator>
			</view>

			<!-- 第三方登录 -->
			<view class="other-login">
				<view class="other-li" @tap="wxLogin">
					<image src="/static/images/wx.png"></image>
					<text>微信登录</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import {
			mapMutations
	} from 'vuex';
	var _this;

	export default {
		data() {
			return {
				phoneData:'', //用户/电话
				passData:'', //密码
				logining: false,
			};
		},
		mounted() {
			_this= this;
			this.isLogin();
		},
		methods: {
			...mapMutations(['login','getMsg']),
			isLogin(){
				//判断缓存中是否登陆过，直接登陆
				try {
					const value = uni.getStorageSync('setUserData');
					if (value) {
						//有登陆信息
						console.log("已登录用户：",value);
						_this.$store.dispatch("setUserData",value); //存入状态
						uni.reLaunch({
							url: '../index/index',
						});
					}
				} catch (e) {
					// error
				}
			},
		  async startLogin(){
				//登陆
				if (this.phoneData.length == "") {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '用户名不能为空'
					});
					return;
				}
				if (this.passData.length < 5) {
					uni.showToast({
							icon: 'none',
							position: 'bottom',
							title: '密码需大于5位数'
					});
					return;
				}
				this.logining = true;

				const login =  await this.$request.post('/auth/login', {
					data: {
						mobile:this.phoneData,
						password: this.passData
					}
				});

				const usermsg = await this.$request.post('/users',{
					header: {
						'token': login.data.data.token
					},
				})

				if (login.data.code === 0) {
					uni.showToast({
							icon: 'none',
							position: 'bottom',
							title: '登录成功'
					});
					this.login(login.data.data);  //用户信息存入vuex
					this.getMsg(usermsg.data.data);  //用户信息存入vuex
					uni.navigateBack();
				} else{
					uni.showToast({
							icon: 'none',
							position: 'bottom',
							title: login.data.msg
					});
					this.logining = false;
				}
			},
			async wxLog(info){
				let _this = this;
				const res = await _this.$request.post('/auth/new-login', {
					data:{
						'userinfo[openid]': info.openid,
						'userinfo[unionid]': info.unionid,
						'userinfo[access_token]': info.access_token
					}
				})
				console.log(res)
				if(res.data.data.type === 'invite_code'){
					this.getMsg(res.data.data.userinfo);  //用户信息存入vuex
					uni.navigateTo({
							url: '/pages/login/bind-code'
					});
				} else if(res.data.data.type === 'mobile'){
					this.getMsg(res.data.data.userinfo);  //用户信息存入vuex
					uni.navigateTo({
							url: '/pages/login/bind-mobile'
					});
				} else {
					const usermsg = await this.$request.post('/users',{
						header: {
							'token': res.data.data.token
						},
					})

					if (res.data.code === 0) {
						uni.showToast({
								icon: 'none',
								position: 'bottom',
								title: '登录成功'
						});
						this.login(res.data.data);  //用户信息存入vuex
						this.getMsg(usermsg.data.data);  //用户信息存入vuex
						uni.navigateBack();
					} else{
						uni.showToast({
								icon: 'none',
								position: 'bottom',
								title: login.data.msg
						});
						this.logining = false;
					}
				}
			},
			// 微信登录
			wxLogin(){
				let _this = this
				uni.login({
					provider: 'weixin',
					success: function (loginRes) {
						console.log(loginRes.authResult);
						_this.wxLog(loginRes.authResult)
					}
				});
			},
		}
	}
</script>

<style>
	@import url("./css/main.css");
</style>
