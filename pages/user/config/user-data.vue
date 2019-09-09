<template>
		<view class="content">
			<!-- 主体 -->
			<view class="main">
				<view class="main-list oBorder avatar">
          <!-- <image :src="src" class="avatar" @tap="upload"></image> -->
          <image :src="src" class="avatar"></image>
        </view>
				<view class="main-list oBorder">
          昵称：
					<input
						class="main-input"
						type="text"
						v-model="userName"
					/>
				</view>

			<button class="dlbutton buttonBorder" @click="editData()">保存</button>

		</view>
	</view>
</template>

<script>
	import {
			mapState,
			mapMutations
	} from 'vuex';

	export default {
		data() {
			return {
        src: '', //上传图片
				userName: "", //昵称
			}
    },
    computed: {
			...mapState(['userMsg','userInfo'])
    },
    onLoad(option) {
      let { avatar } = option;
      if (avatar) {
        this.src = avatar;
      } else {
        this.src = this.userMsg.avatar
      }
    },
		mounted() {
      this.userName = this.userMsg.nickname;
    },
		methods: {
      upload() {
        uni.chooseImage({
          count: 1, // 默认9
          sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success(res) {
            const src = res.tempFilePaths[0];

            uni.redirectTo({
              url: '../../upload/upload?src=' + src
            });
          }
        });
      },
			async editData() {
				//保存个人资料
        try {
              const res = await this.$request.post('/user/update-nick', {
                  header:{
                    token: this.userInfo.token
                  },
                  data:{
                    nickname: this.userName,
                    // avatar: this.src
                  }
              });
              console.log(this.src,res)

              this.number = res.data.data.subordinate_number
              this.$common.checkStatus(res.data.code)
          } catch (error) {
              console.error('error:', error);
          }
			}
		}
	}
</script>

<style>
	@import url("../css/main.css");
</style>

<style lang="scss" scoped>
  .avatar{
    height: 220upx;
    display: flex;
    justify-content: center;
    align-items: center;

    image{
      height: 160upx;
      width: 160upx;
      border-radius: 50%;
    }
  }

  .main-list{
    margin-top: 20upx;
  }

</style>


