<template>
	<view>
		<view class="content">
      <image src="../../../static/images/withdraw.png" class="title"></image>
			<!-- 主体 -->
			<view class="main">
				<text class="amount">当前可提现金额：￥{{amount.amount || '0.00'}}</text>
				<view class="main-list oBorder" @click="toPayList">
          <text class="icon text-blue">&#xe636;</text>
					<input
						class="main-input"
						type="number"
						v-model="phoneData"
						maxlength="11"
						placeholder="请先绑定支付宝"
            disabled="true"
					/>
          <text class="icon text-grey">&#xe6d1;</text>
				</view>
        <view class="main-list oBorder">
          <text class="icon text-grey">&#xe600;</text>
					<input
						class="main-input"
						type="digit"
						v-model="amountData"
						placeholder="请输入提现金额"
					/>
				</view>
				<view class="main-list oBorder">
          <text class="icon text-grey">&#xe601;</text>
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

			<button class="dlbutton buttonBorder" @click="startWithdraw">确定</button>

		</view>
	</view>
</template>

<script>
	var _this,countDown;
		import {
				mapState
		} from 'vuex';

	export default {
		data() {
			return {
				phoneData: "", //电话
				amountData: "", //提现金额
				second: 0, //倒计时
				verCode:"", //验证码
				id: '',
				amount: ''
			}
		},
		computed: {
			...mapState(['userInfo']),
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
		onLoad(option){
			if(option.id){
				this.phoneData = option.mobile;
				this.id = option.id;
			}
		},
		onReady(){
			if(this.id === ''){
				this.sendRequest()
			}
		},
		mounted() {
			_this= this;
			clearInterval(countDown);//先清理一次循环，避免缓存

		},
		methods: {
			async sendRequest(){
          try {
							const amount = await this.$request.post('/balance/index',{
								header:{
									token: this.userInfo.token
								}
							})

							this.amount = amount.data.data;

              const res = await this.$request.post('/withdraws/payment-list', {
                  header:{
                    token: this.userInfo.token
                  }
              });

							let data = res.data.data
							for (const item of data) {
								if(item.default ===  'yes'){
									this.phoneData = item.account;
									this.id = item.id
								}
							}

							console.log(res.data)

              this.$common.checkStatus(res.data.code)
          } catch (error) {
              console.error('error:', error);
          }
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
				if (_this.second > 0) {
					return false;
				}
				const res = await this.$request.post("/sms/index", {
					data: {
						mobile: this.phoneData
					},
					header: {
						token: this.userInfo.token
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
			async startWithdraw() {
				//提现
				if (this.phoneData.length === 0) {
				     uni.showToast({
				        icon: 'none',
								position: 'bottom',
				        title: '请先绑定支付宝账号'
				    });
				    return false;
				}
				if (this.amountData <= 0) {
						uni.showToast({
								icon: 'none',
								position: 'bottom',
								title: '请输入正确的提现金额'
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
				try {
					const res = await this.$request.post("/sms/verify", {  //校验验证码
            data: {
              mobile: this.phoneData,
              code: this.verCode
            },
            header: {
              token: this.userInfo.token
            }
          });

          this.$common.checkStatus(res.data.code);

          if (res.data.code === 0) {
            const res2 = await this.$request.post("/withdraws/apply", {
              data: {
									amount: this.amountData,
									Id: this.id
							},
							header: {
									token: _this.userInfo.token
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
				} catch (error) {

				}
			},
			toPayList(){
				uni.redirectTo({
						url: '/pages/alipay/alipay-list'
				});
			}
		}
	}
</script>

<style>
	@import url("../css/main.css");
	.amount{
		margin-top: 30upx;
		color: #808080;
	}
</style>

