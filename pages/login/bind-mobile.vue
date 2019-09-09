<template>
	<view class="forget">

		<view class="content">
			<!-- 主体 -->
			<view class="main">
				<view class="tips">在此绑定手机号用于账号登录。</view>
				<view class="main-list oBorder">
					<input
						class="main-input"
						type="text"
						v-model="phoneData"
						maxlength="11"
						placeholder="请输入手机号"
					/>
				</view>
				<!-- <view class="main-list oBorder">
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
				</view> -->
			</view>

			<button class="dlbutton buttonBorder" @tap="bindMobile()">确定</button>

		</view>
	</view>
</template>

<script>
  var _this,countDown;
  import {
      mapState,
      mapMutations
  } from 'vuex';

	export default {
		data() {
			return {
				phoneData: "", //电话
				passData: "", //密码
				showPassword:false, //密码是否显示
				second: 0, //倒计时
				verCode:"", //验证码
			}
		},
		mounted() {
			_this= this;
			clearInterval(countDown);//先清理一次循环，避免缓存
		},
    computed: {
      ...mapState(['userMsg']),
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
		methods: {
      ...mapMutations(['login','getMsg']),
			isShowPass() {
				//是否显示密码
			    _this.showPassword = !_this.showPassword
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
				const res = await this.$request.post("sms/index", {
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
			async bindMobile() {
				//绑定手机号
				if (this.phoneData.length != 11) {
				     uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '手机号不正确'
				    });
				    return false;
				}
				// if (this.verCode.length != 4) {
				//     uni.showToast({
				//         icon: 'none',
				// 		position: 'bottom',
				//         title: '验证码不正确'
				//     });
				//     return false;
        // }

        try {
          // const res = await this.$request.post("/sms/verify", {  //校验验证码
          //   data: {
          //     mobile: this.phoneData,
          //     code: this.verCode
          //   },
          //   header: {
          //     token: this.userInfo.token
          //   }
          // });
          	const res = await this.$request.post('/auth/new-login', {
              data:{
                'userinfo[openid]': this.userMsg.openid,
                'userinfo[unionid]': this.userMsg.unionid,
                'userinfo[access_token]': this.userMsg.access_token,
                type: 'mobile',
                mobile: this.phoneData,
                smsCode: 1234
              }
            })
            console.log(res)
            if(res.data.code != 0){
              uni.showToast({
                  title: res.data.msg,
                  duration: 1500,
                  icon: 'none'
              });
            } else {
              uni.showToast({
                  title: '绑定手机号成功',
                  duration: 1500,
                  icon: 'none'
              });
              const usermsg = await this.$request.post('/users',{
                header: {
                  'token': res.data.data.token
                },
              })

              this.login(res.data.data);  //用户信息存入vuex
              this.getMsg(usermsg.data.data);  //用户信息存入vuex
              setTimeout(() => {
                uni.switchTab({
                    url: '/pages/user/user'
                });
              }, 1500);
            }

        } catch (error) {

        }

			}
		}
	}
</script>

<style>
	@import url("./css/main.css");
</style>

