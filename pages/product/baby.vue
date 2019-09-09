<template>
  <view class="goods-li">
    <scroll-view class="top-warp" scroll-x="true">
      <view class="nav">
        <view :class="{active:tabType==''}" @click="changeTab('')" class="nav-item">全部</view>
				<view :class="{active:tabType=='备孕'}" @click="changeTab('备孕')" class="nav-item">备孕</view>
				<view :class="{active:tabType=='0至6个月'}" @click="changeTab('0至6个月')" class="nav-item">0至6个月</view>
        <view :class="{active:tabType=='7至12个月'}" @click="changeTab('7至12个月')" class="nav-item">7至12个月</view>
        <view :class="{active:tabType=='1至3岁'}" @click="changeTab('1至3岁')" class="nav-item">1至3岁</view>
				<view :class="{active:tabType=='4至6岁'}" @click="changeTab('4至6岁')" class="nav-item">4至6岁</view>
        <view :class="{active:tabType=='7至12岁'}" @click="changeTab('7至12岁')" class="nav-item">7至12岁</view>
			</view>
    </scroll-view>

		<!-- top是指mescroll的padding-top的数值,单位upx. 目的是使下拉布局往下偏移,不然会被悬浮菜单遮住 -->
		<mescroll-uni top="85" @down="downCallback" :up="upOption" @up="upCallback" @emptyclick="emptyClick" @init="mescrollInit" :tipShow = false>
			<!-- 数据列表 -->
			<list :list="list"></list>
		</mescroll-uni>
	</view>
</template>

<script>
import List from "@/components/goods-list.vue";
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
          tip: '~ 这里没有发现任何数据哦 ~', // 提示
          btnText: '立即刷新'
        }
      },
      tabType: '', // 菜单
      list: [],
      tipShow: false,
    };
  },
  components: {
    List,
    MescrollUni
  },
  props:{
    i: Number, // 每个tab页的专属下标
    index: { // 当前tab的下标
      type: Number,
      default(){
        return 0
      }
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  watch:{
    // 监听下标的变化
    index(val){
      if (this.i === val && !this.isInit) {
        this.isInit = true; // 标记为true
        this.mescroll.triggerDownScroll();
      }
    }
  },
  mounted() {
    // 第一个tab,自动加载数据
    if(this.i === 0){
      this.isInit = true; // 标记为true
      this.mescroll.triggerDownScroll();
    }
  },
  methods: {
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
				this.getListDataFromNet(mescroll.num, mescroll.size,  this.tabType,(curPageData)=>{
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					mescroll.endSuccess(curPageData.length);
					//设置列表数据
					if(mescroll.num == 1) this.list = []; //如果是第一页需手动制空列表
					this.list=this.list.concat(curPageData); //追加新数据
				}, () => {
					//联网失败的回调,隐藏下拉刷新的状态
					mescroll.endErr();
				})
			},
			//点击空布局按钮的回调
			emptyClick(mescroll){
        mescroll.resetUpScroll();
      },

			// 切换菜单
			changeTab (type) {
				if (this.tabType !== type) {
          this.tabType = type
          console.log(type)
					this.list = []// 在这里手动置空列表,可显示加载中的请求进度
					this.mescroll.resetUpScroll()// 刷新列表数据
				}
			},

			/*联网加载列表数据
			在您的实际项目中,请参考官方写法: http://www.mescroll.com/uni.html#tagUpCallback
			请忽略getListDataFromNet的逻辑,这里仅仅是在本地模拟分页数据,本地演示用
			实际项目以您服务器接口返回的数据为准,无需本地处理分页.
			* */
			async getListDataFromNet(pageNum,pageSize,status,successCallback,errorCallback) {
        try {
          let tag = ''
          if(this.tabType === ''){
            tag = '母婴'
          } else {
            tag = `${this.tabType}`
          }
					const list = await this.$request.post("/product/index", {
              data: {
                  page: pageNum,
                  limit: pageSize,
                  tag: tag
              }
          });
          this.$common.checkStatus(list.data.code)
          let listArr = []
          for (const i in list.data.data) {
            listArr.push(list.data.data[i])
          }
					successCallback && successCallback(listArr);
					console.log(list)
				} catch (error) {
					console.error("error:", error);
				}
		}
  },
  //点击导航栏 buttons 时触发
  onNavigationBarButtonTap(e) {
      const index = e.index;
      if (index === 0) {
          uni.navigateTo({
              url: '../statement'
          });
      }
  }
}
</script>

<style lang="scss" scoped>
.top-warp{
		z-index: 999;
		position: fixed;
		top: --window-top; /* css变量 */
		left: 0;
		width: 100%;
		height: 80upx;
		background-color: white;
	}
	.top-warp .tip{
		font-size: 28upx;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
	}
	.top-warp .nav{
		text-align: center;
		height: 80upx;
    border-bottom: 1upx solid #ddd;

    .nav-item{
      line-height: 80upx;
      height: 80upx;
      text-align: center;
    }
	}
	.top-warp .nav view{
		display: inline-block;
		width: 15%;
		line-height: 60upx;
    font-size: 28upx;
    margin: 0 30upx;
	}
	.top-warp .nav .active{
		color: $kg-text;
    border-bottom: 1px solid $kg-text;
  }
  .title{
    background-color: $kg-text;
    color: $uni-text-color-inverse;
    font-size: 24upx;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
    padding: 30upx 8upx;
    width: 750upx;

    text{
      margin: 0 12upx;
    }
  }
  .team-list{
    display: flex;
    justify-content: space-between;
    background-color: $uni-bg-color;
    margin-top: 2upx;
    padding: $uni-spacing-col-base;
    align-items: center;

    .left{
      display: flex;
      align-items: center;
      image{
        height: 90upx;
        width: 90upx;
        border-radius: 50%;
        margin-right: 10upx;
      }
      .message{
        display: flex;
        flex-direction: column;
        line-height: 1.6;
        color: $uni-text-color-placeholder;
        font-size: 28upx;

        .name{
          width: 200upx;
          font-size: 30upx;
          color: $uni-text-color;
          @include ellipsis;
        }
      }
      .level{
        color: $uni-text-color-inverse;
        font-size: 24upx;
        text-align: center;
        border-radius: 40upx;
        padding: 6upx 14upx;

        .icon{
          font-size: 29upx;
          margin-right: 5upx;
        }
      }
    }
    .right{
      display: flex;
      flex-direction: column;
      line-height: 1.6;
      color: $uni-text-color-placeholder;
      font-size: 28upx;

      .number{
        color: $kg-text;
        font-size: 30upx;
      }
    }
  }
</style>
