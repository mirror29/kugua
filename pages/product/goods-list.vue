<template>
  <view class="goods-li">
		<!-- 菜单 -->
		<!-- <view class="top-warp">
			<view class="nav">
				<view :class="{active:tabType==0}" @click="changeTab(0)" class="nav-item">综合</view>
				<view :class="{active:tabType==1}" @click="changeTab(1)" class="nav-item">销量</view>
				<view :class="{active:tabType==2}" @click="changeTab(2)" class="nav-item">价格</view>
				<view :class="{active:tabType==3}" @click="changeTab(3)" class="nav-item">佣金</view>
			</view>
		</view> -->

		<!-- top是指mescroll的padding-top的数值,单位upx. 目的是使下拉布局往下偏移,不然会被悬浮菜单遮住 -->
		<mescroll-uni top="0" @down="downCallback" :up="upOption" @up="upCallback" @emptyclick="emptyClick" @init="mescrollInit" :tipShow = false>
			<!-- 数据列表 -->
			<list :list="list"></list>
		</mescroll-uni>

		<modal ref="modal" :text="clipText"></modal>
	</view>
</template>

<script>
import list from "@/components/goods-list.vue";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
import {
    mapState
} from 'vuex';

export default {
  data() {
    return {
      mescroll: null, //mescroll实例对象
      upOption:{
        page: {
        // 	num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
        	size: 6, // 每页数据的数量
        },
        noMoreSize: 4, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
        empty:{
          tip: '~ 抱歉，这里暂时没有你想要的内容 ~', // 提示
          btnText: '返回首页'
        }
      },
      tabType: 0, // 菜单
      list: [],
      keyword: '',
      tipShow: false
    };
  },
  components: {
    list,
    MescrollUni
	},
	computed: {
			...mapState(['showModal','clipText','hasLogin','userInfo'])
	},
	onShow(){
			this.$common.searchClip();
	},
	updated() {
			if(this.clipText != ''){
					this.showM();
			} else {
					this.$refs.modal.hideModal();
			}
	},
  onLoad (options) {
    // console.log(options)
    this.keyword = unescape(options.key)
  },
  methods: {
		 	showM(){
					if(this.showModal){
							this.$refs.modal.showModal();
					}
			},
    // mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			/*下拉刷新的回调 */
			downCallback(mescroll) {
				// 这里加载你想下拉刷新的数据, 比如刷新轮播数据
				// loadSwiper();
				// 下拉刷新的回调,默认重置上拉加载列表为第一页 (自动执行 mescroll.num=1, 再触发upCallback方法 )
				mescroll.resetUpScroll()
			},
			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			upCallback(mescroll) {
				//联网加载数据
				this.getListDataFromNet((curPageData)=>{
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					mescroll.endSuccess(curPageData.length);
					//设置列表数据
					if(mescroll.num == 1) this.list = []; //如果是第一页需手动制空列表
					this.list= curPageData ; //追加新数据
				}, () => {
					//联网失败的回调,隐藏下拉刷新的状态
					mescroll.endErr();
				})
			},
			//点击空布局按钮的回调
			emptyClick(){
				uni.switchTab({
						url: '/pages/index/index'
				});
			},

			// 切换菜单
			changeTab (type) {
				if (this.tabType !== type) {
					this.tabType = type
					this.pdList = []// 在这里手动置空列表,可显示加载中的请求进度
					this.mescroll.resetUpScroll()// 刷新列表数据
				}
			},

			/*联网加载列表数据
			在您的实际项目中,请参考官方写法: http://www.mescroll.com/uni.html#tagUpCallback
			请忽略getListDataFromNet的逻辑,这里仅仅是在本地模拟分页数据,本地演示用
			实际项目以您服务器接口返回的数据为准,无需本地处理分页.
			* */
			async getListDataFromNet(successCallback,errorCallback) {
        try {
					if(this.hasLogin){
						const list = await this.$request.post("/search/index", {
							data: {
								keywords: this.keyword
							},
							header: {
								token: this.userInfo.token
							}
						});

						let  listArr = []
						for (const key in list.data.data) {
							listArr.push(list.data.data[key])
						}

						successCallback && successCallback(listArr);
					} else {
						const list = await this.$request.post("/search/index", {
							data: {
								keywords: this.keyword
							}
						});
						console.log(this.keyword)
						console.log(list)
						let  listArr = []
						for (const key in list.data.data) {
							listArr.push(list.data.data[key])
						}

						successCallback && successCallback(listArr);
					}
				} catch (error) {
					console.error("error:", error);
				}
		}
  }
}
</script>

<style lang="scss" scoped>
.list-title{
  display: flex;
  justify-content: center;
  background-color: $uni-bg-color;
  margin-bottom: $uni-spacing-row-sm;

  view{
    width: 187upx;
    color: #363636;
    display: block;
    padding: 8upx 0;
    text-align: center;
  }

  .active{
    color: #ee2c23;
  }
}
.top-warp{
		z-index: 9990;
		position: fixed;
		top: --window-top; /* css变量 */
		left: 0;
		width: 100%;
		height: 70upx;
		background-color: white;
	}
	.top-warp .tip{
		font-size: 28upx;
		height: 70upx;
		line-height: 70upx;
		text-align: center;
	}
	.top-warp .nav{
		text-align: center;
		height: 70upx;
    border-bottom: 1upx solid #ddd;

    .nav-item{
      line-height: 70upx;
      height: 70upx;
      text-align: center;
    }
	}
	.top-warp .nav view{
		display: inline-block;
		width: 24%;
		line-height: 60upx;
		font-size: 28upx;
	}
	.top-warp .nav .active{
		color: #ee2c23;
	}
</style>
