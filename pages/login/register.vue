<template>
	<view class="register">

		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<image src="../../static/images/kugua.png"></image>
			</view>
			<!-- 主体 -->
			<!-- <view class="main">
				<view class="main-list oBorder">
					<input
						class="main-input"
						v-model="phoneData"
						type="text"
						maxlength="11"
						placeholder="手机号"
					/>
				</view>
				<view class="main-list oBorder">
					<input
						class="main-input"
						v-model="passData"
						type="text"
						maxlength="32"
						placeholder="登录密码"
						:password="!showPassword"
					/>
					<image
						:class="['img',showPassword?'cuIcon-attention':'cuIcon-attentionforbid']"
						@tap="isShowPass"
					></image>
				</view>
				<view class="main-list oBorder">
					<input
						class="main-input"
						v-model="verCode"
						type="number"
						maxlength="4"
						placeholder="验证码"
					/>
					<view
						:class="['vercode',{'vercode-run': second>0}]"
						@tap="getVerCode()"
					>{{ getVerCodeSecond }}</view>
				</view>

			</view> -->
			<button class="buttonBorder bg-green" @tap="startReg()">
				<text class="icon">&#xe68e;</text>一键微信注册</button>
			<!-- 底部信息 -->
			<view class="footer">
				<text
					@tap="isShowAgree"
					:class="showAgree?'cuIcon-radiobox':'cuIcon-round'"
				>
				<text class="agree">同意</text></text>
				<!-- 协议地址 -->
				<navigator url="./protocol" open-type="navigate">《苦瓜用户协议》</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	var _this,countDown;
	import {
			mapMutations
	} from 'vuex';

	export default {
		data() {
			return {
				phoneData:'', // 用户/电话
				passData:'', //密码
				showPassword:false, //密码是否显示
				second: 0, //倒计时
				verCode:"", //验证码
				showAgree:true, //协议是否选择
			}
		},
		mounted() {
			_this= this;
			clearInterval(countDown);//先清理一次循环，避免缓存
		},
		methods: {
			...mapMutations(['getMsg']),
			isShowPass() {
				//是否显示密码
			    _this.showPassword = !_this.showPassword
			},
			isShowAgree(){
				//是否选择协议
				_this.showAgree = !_this.showAgree;
			},
			getVerCode(){
				//获取验证码
				if (_this.phoneData.length != 11) {
				     uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '手机号不正确'
				    });
				    return false;
				}
				if(_this.second>0){
					return false;
				}
				_this.second = 60;
				countDown = setInterval(function(){
					_this.second--;
					if(_this.second==0){
						clearInterval(countDown)
					}
				},1000)
				console.log("获取验证码")
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
					uni.showToast({
							title: '该账号已注册',
							duration: 1500,
							icon: 'none'
					});
				}
			},
			startReg() {
				//注册
				if (this.showAgree == false) {
						uni.showToast({
								icon: 'none',
						position: 'bottom',
								title: '请先同意《苦瓜用户协议》'
						});
						return false;
				}
				// if (this.phoneData.length !=11) {
				// 		uni.showToast({
				// 				icon: 'none',
				// 		position: 'bottom',
				// 				title: '手机号不正确'
				// 		});
				// 		return false;
				// }
				// if (this.passData.length < 6) {
				// 		uni.showToast({
				// 				icon: 'none',
				// position: 'bottom',
				// 				title: '密码不正确'
				// 		});
				// 		return false;
				// }
				// if (this.verCode.length != 4) {
				// 		uni.showToast({
				// 				icon: 'none',
				// 		position: 'bottom',
				// 				title: '验证码不正确'
				// 		});
				// 		return false;
				// }
				uni.login({
					provider: 'weixin',
					success: function (loginRes) {
						console.log(loginRes.authResult);
						_this.wxLog(loginRes.authResult)
					}
				});
			}
		},
		computed:{
			getVerCodeSecond(){
				//验证码倒计时计算
				if(this.second<=0){
					return '获取验证码';
				}else{
					if(this.second<10){
						return '0'+this.second;
					}else{
						return this.second;
					}
				}

			}
		},
	}
</script>

<style>
	@import url("./css/main.css");
	.bg-green{
		width: 600upx;
	}
	.icon{
		margin-right: 20upx;
		font-size: 40upx;
	}
</style>
