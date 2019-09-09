<template>
  <div class="content">
    <view class="title">
      <text class="text">{{detail.title}}</text>
      <text class="time">{{detail.time}}</text>
    </view>
    <rich-text :nodes="detail.content" class="con"></rich-text>
    <!-- <view v-html="detail.content" class="con"></view> -->
  </div>
</template>

<script>
import share from "@/common/share.js";
  export default {
    data() {
      return{
        id: '',
        detail: {},
        url: ''
      }
    },
    onLoad(option){
      this.id = option.id
    },
    onReady(){
      this.sendRequest()
      let pages = getCurrentPages();
      let page = pages[pages.length - 1];
      let currentWebview = page.route;
      let url = this.$request.config.baseUrl;

      let pageUrl = `${this.$request.config.baseUrl}/${currentWebview }`
      console.log(pageUrl)
    },
    onBackPress() {
			//监听back键，关闭弹出菜单
			if (this.shareObj.shareMenu.isVisible()) {
				this.shareObj.shareMenu.hide();
				this.shareObj.alphaBg.hide();
				return true
			}
    },
    onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				let shareInfo={
					href: this.url,
					title: this.detail.title,
					desc:"分享测试",
					imgUrl:"/static/logo.png"
				};
				let _this = this;
				this.shareObj=share(shareInfo,function(index){
					_this.$common.switchShare(index,shareInfo)
				});
				this.$nextTick(()=>{
					this.shareObj.alphaBg.show();
          this.shareObj.shareMenu.show() ;
				})
			}
		},
    methods: {
      async sendRequest(){
				try {
					const detail = await this.$request.post('/business/show', {
            data: {
                Id: this.id
            }
          });

          let time = this.$common.formatTime(detail.data.data.created_at)
          detail.data.data.time = time;
          detail.data.data.content = detail.data.data.content.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ')
					// console.log(detail)
					this.detail = detail.data.data;
				} catch (error) {
					console.error('error:', error);
				}
      }
    }
  }
</script>

<style lang="scss" scoped>
.content{
  background-color: $uni-bg-color;
  padding: 20upx 25upx;
  -webkit-user-select: text;

  .title{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 14upx;
    border-bottom: 2upx dashed rgb(113, 204, 240);

    .text{
      font-size: 40upx;
      font-weight: bold;
      color: $uni-text-color;
    }

    .time{
      margin-top: 14upx;
      font-size: 26upx;
      color: $uni-text-color-placeholder;
    }
  }

  .con{
    padding: 25upx 15upx;
  }
  .con /deep/ img { max-width: 100%; }
}
</style>
