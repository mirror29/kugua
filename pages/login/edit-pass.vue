<template>
	<view class="forget">

		<view class="content">
			<!-- 主体 -->
			<view class="main">
				<view class="tips">您可在此修改密码。</view>
				<view class="main-list oBorder">
					<input
						class="main-input"
						type="text"
						v-model="phoneData"
						maxlength="11"
						placeholder="请输入手机号"
					/>
				</view>
				<view class="main-list oBorder">
					<input
						class="main-input"
						type="text"
						v-model="passData"
						maxlength="32"
						placeholder="请输入新密码"
						:password="!showPassword"
					/>
					<image class="img"
						:class="showPassword?'cuIcon-attention':'cuIcon-attentionforbid'"
						@tap="isShowPass"
					></image>
				</view>
				<view class="main-list oBorder">
					<input
						class="main-input"
						type="text"
						v-model="repassData"
						maxlength="32"
						placeholder="请再次输入密码"
						:password="!showPassword2"
					/>
					<image class="img"
						:class="showPassword2?'cuIcon-attention':'cuIcon-attentionforbid'"
						@tap="isShowPass2"
					></image>
				</view>
				<view class="main-list oBorder">
					<input
						class="main-input"
						type="number"
						v-model="verCode"
						maxlength="4"
						placeholder="验证码"
					/>
					<view
						:class="['vercode',{'vercode-run': second>0}]"
						@tap="getVerCode()"
					>{{ getVerCodeSecond }}</view>
				</view>
			</view>

			<button class="dlbutton buttonBorder" @tap="startRePass()">重置密码</button>

		</view>
	</view>
</template>

<script>
	var _this,countDown;

	export default {
		data() {
			return {
				phoneData: "", //电话
				passData: "", //密码
				repassData: "", //密码
				showPassword:false, //密码是否显示
				showPassword2:false, //密码是否显示
				second: 0, //倒计时
				verCode:"", //验证码

			}
		},
		mounted() {
			_this= this;
			clearInterval(countDown);//先清理一次循环，避免缓存
		},
		methods: {
			isShowPass() {
				//是否显示密码
					_this.showPassword = !_this.showPassword
			},
			isShowPass2() {
				//是否显示密码
					_this.showPassword2 = !_this.showPassword2
			},
			async getVerCode() {
				//获取验证码
				if (!/^1[3456789]\d{9}$/.test(this.phoneData)) {
					uni.showToast({
						icon: "none",
						position: "bottom",
						title: "手机号不正确"
					});
					return false;
				}
				if (this.second > 0) {
					return false;
				}
				const res = await this.$request.post("/sms/index", {
					data: {
						mobile: this.phoneData
					}
				});

				this.$common.checkStatus(res.data.code);
				this.$common.returnMsg(res.data.msg);

				if (res.data.code === 0) {
					_this.second = 60;
					countDown = setInterval(function() {
						_this.second--;
						if (_this.second == 0) {
							clearInterval(countDown);
						}
					}, 1000);
				}
      },
			async startRePass() {
				//重置密码
				if (this.phoneData.length != 11) {
				     uni.showToast({
				        icon: 'none',
								position: 'bottom',
				        title: '手机号不正确'
				    });
				    return false;
				}
				if (this.verCode.length != 4) {
				    uni.showToast({
				        icon: 'none',
								position: 'bottom',
				        title: '验证码不正确'
				    });
				    return false;
				}

				const res = await this.$request.post("/sms/verify", {  //校验验证码
					data: {
						mobile: this.phoneData,
						code: this.verCode
					}
				});

				this.$common.checkStatus(res.data.code);

				if (res.data.code === 0) {
					const res2 = await this.$request.post("/auth/reset", {
						data: {
								mobile: this.phoneData,
								smsCode: 1234,
								password: this.passData,
								rePassword: this.repassData
						}
					});

					this.$common.checkStatus(res2.data.code);
					this.$common.returnMsg(res2.data.msg, res2.data.code);
				} else {
					uni.showToast({
							title: res.data.msg,
							icon: 'none',
					});
				}
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
</style>

