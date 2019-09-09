<template>
  <view class="goods-li">
    <scroll-view class="title" scroll-x="true">
      <text>会员：{{total.total}}位</text>
      <text>钻石：{{total.total_diamond}}位</text>
      <text>店长：{{total.total_manager}}位</text>
      <text>金牌：{{total.total_gold_manager}}位</text>
      <text>特约：{{total.total_special_manager}}位</text>
    </scroll-view>
		<!-- 菜单 -->
		<view class="top-warp">
			<view class="nav">
				<view :class="{active:tabType==1}" @click="changeTab(1)" class="nav-item">全部粉丝</view>
				<view :class="{active:tabType==2}" @click="changeTab(2)" class="nav-item">直属粉丝</view>
        <view :class="{active:tabType==3}" @click="changeTab(3)" class="nav-item">间接粉丝</view>
			</view>
		</view>

		<!-- top是指mescroll的padding-top的数值,单位upx. 目的是使下拉布局往下偏移,不然会被悬浮菜单遮住 -->
		<mescroll-uni top="170" @down="downCallback" :up="upOption" @up="upCallback" @emptyclick="emptyClick" @init="mescrollInit" :tipShow = false>
			<!-- 数据列表 -->
			<view v-for="(item,index) in list" :key="index" class="team-list">
        <view class="left">
          <image :src="item.avatar"></image>
          <view class="message">
            <text class="name">{{item.nickname}}</text>
            <text>{{item.mobile}}</text>
          </view>
          <view class="level bg-brown" v-if="item.level === '0'">
            <text class="icon">&#xe606;</text>
            <text>苦瓜会员</text>
          </view>
          <view class="level bg-orange" v-if="item.level === '1'">
            <text class="icon">&#xe60c;</text>
            <text>钻石会员</text>
          </view>
          <view class="level bg-cyan" v-if="item.level === '2'">
            <text class="icon">&#xe60c;</text>
            <text>普通店长</text>
          </view>
          <view class="level bg-yellow" v-if="item.level === '3'">
            <text class="icon">&#xe60c;</text>
            <text>金牌店长</text>
          </view>
          <view class="level bg-red" v-if="item.level === '4'">
            <text class="icon">&#xe60c;</text>
            <text>特约店长</text>
          </view>
        </view>
        <view class="right">
          <text class="number">推荐{{item.recommend_total}}人</text>
          <text>{{item.created_at}}</text>
        </view>
      </view>
		</mescroll-uni>
	</view>
</template>

<script>
import MyList from "@/components/other/my-list.vue"
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
        	size: 10, // 每页数据的数量
        },
        noMoreSize: 4, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
        empty:{
          tip: '~ 这里没有发现任何数据哦 ~', // 提示
          btnText: '立即刷新'
        }
      },
      tabType: 1, // 菜单
      list: [],
      tipShow: false,
      total: ''
    };
  },
  components: {
    MyList,
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
  onShow(){
    this.sendRequest()
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
      async sendRequest() {
        try {
          const res = await this.$request.post("/team/index", {
						header: {
							token: this.userInfo.token
						}
          });
          console.log(res)
          this.total = res.data.data
        } catch (error) {

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
				this.getListDataFromNet(mescroll.num, mescroll.size, (curPageData)=>{
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					mescroll.endSuccess(curPageData.length);
					//设置列表数据
					if(mescroll.num == 1) this.list = []; //如果是第一页需手动制空列表
					this.list=curPageData; //追加新数据
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
					this.list = []// 在这里手动置空列表,可显示加载中的请求进度
					this.mescroll.resetUpScroll()// 刷新列表数据
				}
			},

			/*联网加载列表数据
			在您的实际项目中,请参考官方写法: http://www.mescroll.com/uni.html#tagUpCallback
			请忽略getListDataFromNet的逻辑,这里仅仅是在本地模拟分页数据,本地演示用
			实际项目以您服务器接口返回的数据为准,无需本地处理分页.
			* */
			async getListDataFromNet(pageNum,pageSize,successCallback,errorCallback) {
        try {
					const list = await this.$request.post("/team/list", {
						header: {
							token: this.userInfo.token
						}
          });
          this.$common.checkStatus(list.data.code)
          let list2 = []
          let team = []
          let team_indirect = []
          for (const key in list.data.data) {
            list2.push(list.data.data[key])
            if(list.data.data[key].referrer === this.userInfo.mobile){
              team.push(list.data.data[key])
            } else {
              team_indirect.push(list.data.data[key])
            }
          }

          if(this.tabType === 1){
            for (const item of list2) {
              item.created_at = this.$common.formatTime(item.created_at)
            }
            successCallback && successCallback(list2);
          } else if(this.tabType === 2){
            for (const item of team) {
              item.created_at = this.$common.formatTime(item.created_at)
            }
            successCallback && successCallback(team);
          } else if(this.tabType === 3){
            for (const item of team_indirect) {
              item.created_at = this.$common.formatTime(item.created_at)
            }
            successCallback && successCallback(team_indirect);
          }
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
		width: 26%;
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
      font-size: 24upx;

      .number{
        color: $kg-text;
        font-size: 30upx;
      }
    }
  }
</style>
