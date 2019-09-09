<template>
	<view>

		<view class="content">
			<!-- 主体 -->
			<view class="main">
				<view class="tips">您可在此转账给其它用户。</view>
				<view class="main-list oBorder">
          <text>收款人账号：</text>
					<input
						class="main-input"
						type="number"
						v-model="phoneData"
						maxlength="11"
						placeholder="请输入收款人手机号"
					/>
				</view>
        <view class="main-list oBorder">
          <text>转账金额：</text>
					<input
						class="main-input"
						type="digit"
						v-model="amountData"
						placeholder="请输入转账金额"
					/>
				</view>
				<view class="main-list oBorder">
          <text>验证码：</text>
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

			<button class="dlbutton buttonBorder" @tap="startTransfer()">确定</button>

		</view>
	</view>
</template>

<script>
	var _this,countDown;

	export default {
		data() {
			return {
				phoneData: "", //电话
				amountData: "", //转账金额
				second: 0, //倒计时
				verCode:"", //验证码
			}
		},
		mounted() {
			_this= this;
			clearInterval(countDown);//先清理一次循环，避免缓存
		},
		methods: {
			getVerCode(){
				//获取验证码
				if (!(/^1[3456789]\d{9}$/.test(this.phoneData))) {
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
			startTransfer() {
				//转账
				if (!(/^1[3456789]\d{9}$/.test(this.phoneData))) {
				     uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '手机号不正确'
				    });
				    return false;
				}
			    if (this.amountData.length === 0) {
			        uni.showToast({
			            icon: 'none',
						      position: 'bottom',
			            title: '请输入转账金额'
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
				console.log("重置密码成功")


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
	@import url("../css/main.css");
</style>

