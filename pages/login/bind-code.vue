<template>
	<view class="forget">

		<view class="content">
			<!-- 主体 -->
			<view class="main">
				<view class="tips">绑定推荐人邀请码。</view>
				<view class="main-list oBorder">
					<input
						class="main-input"
						type="text"
						v-model="code"
						placeholder="请输入邀请码"
					/>
				</view>
			</view>

			<button class="dlbutton buttonBorder" @tap="bindCode()">确定</button>

		</view>
	</view>
</template>

<script>
  import {
      mapState
  } from 'vuex';
	export default {
		data() {
			return {
				code: "", //邀请码
			}
    },
    computed: {
      ...mapState(['userMsg'])
    },
		methods: {
			async bindCode(){
				const res = await this.$request.post('/auth/new-login', {
					data:{
						'userinfo[openid]': this.userMsg.openid,
						'userinfo[unionid]': this.userMsg.unionid,
            'userinfo[access_token]': this.userMsg.access_token,
            type: 'invite_code',
            invite_code: this.code
					}
        })
        if(res.data.code != 0){
          uni.showToast({
							title: res.data.msg,
							duration: 1500,
							icon: 'none'
          });
          return;
        }
        if(res.data.data.type === 'mobile'){
          uni.navigateTo({
							url: '/pages/login/bind-mobile'
					});
        }
      }
		},
	}
</script>

<style>
	@import url("./css/main.css");
</style>

