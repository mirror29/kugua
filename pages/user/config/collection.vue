<template>
  <view>
    <mescroll-uni @down="downCallback" :up="upOption" @up="upCallback" @emptyclick="emptyClick" @init="mescrollInit" :tipShow = false>
			<!-- 数据列表 -->
      <view class="content">
        <navigator v-for="item in list" :key="item.id" @click="toDetail(item.goods.origin_id)" class="list">
          <image :src="item.goods.thumb"></image>
          <text class="name">{{item.goods.title}}</text>
          <view class="foot">
            <text class="left">券后：<text>￥{{item.goods.afterPrice}}</text></text>
            <view class="get-quan">
              <image src="/static/images/icon/quan.png"></image>
              <view class="right">券
                <text>{{item.goods.coupon_money}}元</text>
              </view>
            </view>
          </view>
        </navigator>
      </view>
		</mescroll-uni>
  </view>
</template>

<script>
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
      list: [],
      tipShow: false
    };
  },
  components: {
    MescrollUni
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    //  mescroll组件初始化的回调,可获取到mescroll对象
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
    async getListDataFromNet(pageNum,pageSize,successCallback,errorCallback) {
      try {
        const list = await this.$request.post("/user/collection-list", {
          data: {
            page: pageNum,
            page_size: pageSize
          },
          header: {
            token: this.userInfo.token
          }
        });
        for (const item of list.data.data) {
          let afterPrice = (item.goods.origin_price - item.goods.coupon_money).toFixed(1);
          item.goods.afterPrice = afterPrice;
        }

        this.$common.checkStatus(list.data.code)
        successCallback && successCallback(list.data.data);
      } catch (error) {
        console.error("error:", error);
      }
    },
    toDetail(oid) {
      let id = oid;
      uni.navigateTo({
          url: `/pages/product/detail?num_iid=${id}`
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10upx;

  .list{
    background-color: $uni-bg-color;
    width: 358upx;
    border-radius: 10upx;
    margin: 6upx 0;

    image{
      height: 340upx;
      border-top-left-radius: 10upx;
      border-top-right-radius: 10upx;
    }

    .name{
      font-size: 26upx;
      color: #363636;
      margin: 8upx;
      @include ellipsis-2;
    }

    .foot{
      display: flex;
      justify-content: space-between;
      font-size: 26upx;
      padding: 8upx;
      align-items: center;

      .left{
        color: $uni-text-color-placeholder;
        text{
          color: $kg-text;
          font-weight: bold;
          font-size: 32upx;
        }
      }

      .get-quan{
        position: relative;

        image{
          height: 40upx;
          width: 132upx;
          border-radius: 0;
        }

        .right{
          position: absolute;
          top: 2upx;
          left: 9upx;
          border-radius: 10upx;
          font-size: 24upx;
          // background-color: #ff6b06;
          color: $uni-text-color-inverse;
          padding-left: 6upx;

          text{
            color: $kg-text;
            background-color: $uni-bg-color;
            padding: 1upx 6upx;
            margin-left: 4upx;
          }
        }
      }

    }
  }
}
</style>
