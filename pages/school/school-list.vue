<template>
  <view>
    <mescroll-uni @down="downCallback" :up="upOption" @up="upCallback" @emptyclick="emptyClick" @init="mescrollInit" :tipShow = false>
			<!-- 数据列表 -->
			<list :list="list"></list>
		</mescroll-uni>
  </view>
</template>

<script>
import list from "@/components/article-list.vue";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";

export default {
  data() {
    return {
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
      tipShow: false,
      id: ''
    };
  },
  components: {
    list,
    MescrollUni
  },
  onLoad(option){
    this.id = option.id
    uni.setNavigationBarTitle({
        title: option.name
    });
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
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
