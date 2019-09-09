<template>
    <div class="page">
	
    </div>
</template>
<script>
	import chunleiVideo from '../../components/chunlei-video/chunlei-video.vue'
    export default {
		components:{
			chunleiVideo
		},
        data() {
            return {
				sysheight:0,
				videoList:[],
				height:'667px',
				index:0,
				width:'',
                page: 1,
                limit: 5,
                tag: '视频'
			}
        },
		created(){
			//#ifdef APP-PLUS
			plus.screen.lockOrientation("portrait-primary")
			//#endif
			this.sysheight = uni.getSystemInfoSync().windowHeight
			this.height = `${this.sysheight}px`
			let width = uni.getSystemInfoSync().windowWidth
			this.width = `${width}px`
		},
		async mounted() {
			await this.pushVideoList()
			this.videoPlay(this.index)
		},
        methods: {
			changeCurrent(e){
				this.index = e.detail.current;
				for (let item of this.videoList) {
					item.flag = false
				} 
				this.videoList[this.index].flag = !this.videoList[this.index].flag
			},
			pushVideoList(){
				let promise = new Promise((resolve,reject)=>{
					uni.request({
						url: 'https://api.kuguayouhui.com/api/amoy/product/index',
                        data: {
                            tag: this.tag,
                            page: this.page,
                            limit: this.limit
                        },
                        method: 'POST',
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
						success: (res) => {
							let videoGroup = []
                            let data = res.data.data
                            console.log(this.tag)
							for (let key in data) {
                            console.log(data[key])
                                videoGroup.push({
                                    src:data[key].video.videoUrl,
                                    content:data[key].video.subTitle,
                                    flag:false,
                                    check:false
                                })
							}
							this.videoList = [...this.videoList,...videoGroup]
							resolve()
						}
					})
				})
				return promise
			},
			tapLove(){
				this.videoList[this.index].check = !this.videoList[this.index].check
				this.videoList = [...this.videoList]
			},
			tapAvater(){
				uni.showToast({
					icon:'none',
					title:`点击索引为${this.index}的头像`
				})
			},
			tapMsg(){
				uni.showToast({
					icon:'none',
					title:`查看索引为${this.index}的评论`
				})
			},
			tapShare(){
				uni.showToast({
					icon:'none',
					title:`分享索引为${this.index}的视频`
				})
			},
			videoPlay(index){
				let promise = new Promise((resolve,reject)=>{
					resolve()
				})
				promise.then(res=>{
					this.videoList[index].flag = !this.videoList[index].flag
				})
			}
			// clickVideo(){
			// 	this.videoList[this.index].flag = !this.videoList[this.index].flag
			// }
        }
    }
</script>
<style scoped>
	.swiper{

	}
    .video {

    }
	.cover-view-center{
		position: absolute;
		justify-content: center;
		align-items: center;
		opacity: 0.1;
		z-index: 999;
	}
	.cover-view-left{
		position: absolute;
		margin-left: 10upx;
		width: 400upx;
		bottom: 100upx;
		z-index: 9999;
		font-size: 14px;
		color: #FFFFFF;
		//#ifndef APP-PLUS-NVUE
		white-space: pre-wrap;
		text-overflow:ellipsis;
		overflow:hidden;
		//#endif
	}
	.left-text{
		font-size: 14px;
		color: #FFFFFF;
	}
	.avater{
		border-radius: 40upx;
	}

	.cover-view-right{
		position: absolute;
		bottom: 80upx;
		margin-right: 20upx;
		right: 0;
		//#ifndef APP-PLUS-NVUE
		display: flex;
		flex-direction: column;
		//#endif
		z-index: 9999;
	}

	.img{
		height: 80upx;
		width: 80upx;
        margin: 20upx;
	}
	.page{

	}

</style>
