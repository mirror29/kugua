<template>
  <view class="content">
    <mescroll-uni @down="downCallback" :up="upOption" @up="upCallback" @emptyclick="emptyClick" @init="mescrollInit" :tipShow = false>
			<!-- 数据列表 -->
      <!-- <swiper class="screen-swiper round-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="2000" duration="500">
        <swiper-item v-for="(item,index) in swiperList" :key="index">
          <image :src="item.url" mode="aspectFill" ></image>
        </swiper-item>
      </swiper> -->

      <view class="school-con">
        <navigator v-for="(item,index) in cateList" :key="item.id" class="school-li" @click="toSchool(item)">
          <text class="icon" v-if="index === 0">&#xe610;</text>
          <text v-else-if="index === 1" class="icon">&#xe650;</text>
          <text v-else-if="index === 2" class="icon">&#xe6c7;</text>
          <text v-else-if="index === 3" class="icon">&#xe7f1;</text>
          <text>{{item.name}}</text>
        </navigator>
      </view>
      <view class="art-con">
        <text class="artcle">全部文章</text>
        <list :list="list"></list>
      </view>
		</mescroll-uni>
	</view>
</template>

<script>
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
import list from "@/components/article-list.vue";

export default {
  data() {
    return {
      swiperList: [
        {
          id: 0,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"
        },
        {
          id: 1,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"
        },
        {
          id: 2,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"
        },
        {
          id: 3,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
        },
        {
          id: 4,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"
        },
        {
          id: 5,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"
        },
        {
          id: 6,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"
        }
      ],
      mescroll: null, //mescroll实例对象
      upOption:{
        page: {
        // 	num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
        	size: 8, // 每页数据的数量
        },
        noMoreSize: 4, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
        empty:{
          tip: '~ 这里没有发现任何数据哦 ~', // 提示
          btnText: '返回首页'
        }
      },
      list: [],
      cateList: [],
      tipShow: false,
      id: ''
    };
  },
  components: {
    list,
    MescrollUni
  },
  onReady() {
    this.sendRequest();
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
      this.getListDataFromNet(mescroll.num, mescroll.size, this.id, (curPageData)=>{
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
    emptyClick(){
      uni.switchTab({
          url: '/pages/index/index'
      });
    },
    async getListDataFromNet(pageNum,pageSize,id,successCallback,errorCallback) {
        try {
					const list = await this.$request.post("/business/index", {
						data: {
              page: pageNum,
              limit: pageSize,
              categoryId: id
						}
          });

          for (const item of list.data.data) {
            let created_at = this.$common.formatTime(item.created_at)
            item.created_at = created_at.split(" ")[0];
          }

					successCallback && successCallback(list.data.data);
				} catch (error) {
					console.error("error:", error);
        }
    },
    async sendRequest() {
      try {
        const list = await this.$request.post("/business/category", {});
        // console.log(list)
        this.cateList = list.data.data;
      } catch (error) {
        console.error("error:", error);
      }
    },
    toSchool(item){
      uni.navigateTo({
        url: `/pages/school/school-list?id=${item.id}&name=${item.name}`
      })
    },
  }
};
</script>

<style lang="scss" scope>
.school-con{
  display: flex;
  flex-wrap: wrap;
  padding: 25upx 20upx;
  background-color: $uni-bg-color;
  justify-content: space-between;

  .school-li{
    width: 330upx;
    color: $uni-text-color;
    background-color: #f7f6fc;
    border-radius: 10upx;
    height: 90upx;
    line-height: 90upx;
    margin: 8upx;
    font-size: 32upx;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon{
      font-size: 48upx;
      margin-right: 6upx;
      font-weight: normal;
    }
  }
}

.art-con{
  width: 100%;
  background-color: $uni-bg-color;
  padding-top: 40upx;
}
.artcle{
  // font-weight: bold;
  font-size: 34upx;
  line-height: 80upx;
  height: 80upx;
  margin: 0 30upx;
}

</style>
