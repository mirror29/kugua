<template>
	<video :src="src" :controls="false" 
		:enable-progress-gesture="false" @click="clickVideo"
		id="video" ref="video" class="video" :loop="true" :show-center-play-btn="true"></video>
</template>

<script>
	export default{
		props:{
			src:{
				type:String,
				default:''
			},
			play:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{

			}
		},
		methods:{
			clickVideo(){
				this.$emit('click')
			},
			videoPlay(){
				if(this.play){
					this.videoCtx = uni.createVideoContext('video',this);
					this.videoCtx.play();
				}else{
					this.videoCtx = uni.createVideoContext('video',this);
					this.videoCtx.pause();
				}
			}
		},
		watch:{
			play(newVal,oldVal){
				this.videoPlay()
			}
		}
	}
</script>

<style>
	.video{
		width: 100%;
		height: 100%;
	}
</style>
