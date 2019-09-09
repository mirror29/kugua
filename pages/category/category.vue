<template>
	<view class="content">
		<!--引用组件-->
        <skeleton v-if="showSkeleton" ref="skeleton" loading="chiaroscuro" selector="skeleton" bgcolor="#FFF"></skeleton>
 
		<scroll-view scroll-y class="left-aside">
			<view v-for="item in flist" :key="item.id" class="f-item b-b skeleton-rect" :class="{active: item.id === currentId}" @click="tabtap(item)">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view scroll-with-animation scroll-y class="right-aside" @scroll="asideScroll" :scroll-top="tabScrollTop">
			<view v-for="item in slist" :key="item.id" class="s-list" :id="'main-'+item.id">
				<text class="s-item skeleton-rect">{{item.title}}</text>
				<view class="t-list">
					<view @click="navToList(titem.title)" v-if="titem.pid === item.id" class="t-item" v-for="titem in tlist" :key="titem.id">
						<image :src="titem.img" class="skeleton-radius" lazy-load></image>
						<text class="skeleton-rect">{{titem.title}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import skeleton from "../../components/quick-skeleton/quick-skeleton.vue";
import {
		mapState,
		mapMutations
} from 'vuex';

	export default {
		data() {
			return {
				showSkeleton: true,  //骨架屏显示隐藏
				sizeCalcState: false,
				tabScrollTop: 0,
				currentId: '1',
				flist: [
					{
						title: "女装",
						id: '1'
					},
					{
						title: "女装",
						id: '2'
					},
					{
						title: "女装",
						id: '3'
					},
					{
						title: "女装",
						id: '4'
					},
					{
						title: "女装",
						id: '5'
					},
				],
				slist: [
					{
						title: "女装",
						id: '6'
					}
				],
				tlist: [
					{
						img: "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01Kf85St2JJhutCPY0J-2053469401.png",
						title: "外套",
						id: '7',
						pid: '6'
					},
					{
						img: "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01Kf85St2JJhutCPY0J-2053469401.png",
						title: "外套",
						id: '8',
						pid: '6'
					},
					{
						img: "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01Kf85St2JJhutCPY0J-2053469401.png",
						title: "外套",
						id: '9',
						pid: '6'
					},
					{
						img: "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01Kf85St2JJhutCPY0J-2053469401.png",
						title: "外套",
						id: '10',
						pid: '6'
					},
					{
						img: "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01Kf85St2JJhutCPY0J-2053469401.png",
						title: "外套",
						id: '11',
						pid: '6'
					},
					{
						img: "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01Kf85St2JJhutCPY0J-2053469401.png",
						title: "外套",
						id: '12',
						pid: '6'
					}
				],
			}
		},
		components: {
			skeleton
		},
		computed: {
			...mapState(['cateId','hasCateId'])
		},
		onReady(){
			const that = this;
			that.$refs.skeleton.attachedAction();
			that.$refs.skeleton.readyAction();
			that.sendRequest();
		},
		onShow () {
			const that = this;
			if (that.showSkeleton === false) {
				if(this.hasCateId){
					setTimeout(() => {
						this.tabtap(this.cateId)
						this.clearCate();
					}, 100);
				}
			}
		},
		methods: {
			...mapMutations(['clearCate']),
			async sendRequest(){
				this.flist = [];
				this.slist = [];
				this.tlist = [];
				let list = await this.$request.post('/taobao-buy/menu');
				list.data.data.forEach(item => {
					if(item.pid == '0'){
						this.flist.push(item);  // 一级分类
						this.slist.push(item)
					}
				})
				for (const item of this.flist) {
					this.tlist.push(...item.son); // 二级分类
				}

				this.callBack();
			},
			callBack(){
				this.showSkeleton = false;
				if(this.hasCateId){
					setTimeout(() => {
						this.tabtap(this.cateId)
					}, 1000);
				}
			},
			//一级分类点击
			tabtap(item){
				if(!this.sizeCalcState){
					this.calcSize();
				}

				this.currentId = item.id;
				console.log(this.slist.findIndex)
				let index = this.slist.findIndex(sitem=>sitem.id === item.id);
				this.tabScrollTop = this.slist[index].top;
			},
			//右侧栏滚动
			asideScroll(e){
				if(!this.sizeCalcState){
					this.calcSize();
				}
				let scrollTop = e.detail.scrollTop + 200;
				let tabs = this.slist.filter(item=>item.top <= scrollTop).reverse();
				if(tabs.length > 0){
					this.currentId = tabs[0].id;
				}
			},
			//计算右侧栏每个tab的高度等信息
			calcSize(){
				let h = 0;
				this.slist.forEach(item=>{
					let view = uni.createSelectorQuery().select("#main-" + item.id);
					view.fields({
						size: true
					}, data => {
						item.top = h;
						h += data.height;
						item.bottom = h;
					}).exec();
				})
				this.sizeCalcState = true;
			},
			navToList(key){
				uni.navigateTo({
					url: `/pages/product/goods-list?key=${key}`
				})
			},
			navToCate () {

			}
		}
	}
</script>

<style lang='scss'>
	page,
	.content {
		height: 100%;
		background-color: #f8f8f8;
	}

	.content {
		display: flex;
	}
	.left-aside {
		flex-shrink: 0;
		width: 200upx;
		height: 100%;
		background-color: #fff;
	}
	.f-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100upx;
		font-size: 28upx;
		color: $font-color-base;
		position: relative;
		&.active{
			color: $base-color;
			background: #f8f8f8;
			&:before{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				height: 36upx;
				width: 8upx;
				background-color: $base-color;
				border-radius: 0 4px 4px 0;
				opacity: .8;
			}
		}
	}

	.right-aside{
		flex: 1;
		overflow: hidden;
		padding-left: 20upx;
	}
	.s-item{
		display: flex;
		align-items: center;
		height: 70upx;
		padding-top: 8upx;
		font-size: 28upx;
		color: $font-color-dark;
	}
	.t-list{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		background: #fff;
		padding-top: 12upx;
		&:after{
			content: '';
			flex: 99;
			height: 0;
		}
	}
	.t-item{
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 176upx;
		font-size: 26upx;
		color: #666;
		padding-bottom: 20upx;

		image{
			width: 140upx;
			height: 140upx;
		}

		text{
			margin-top: 8upx;
		}
	}
</style>
