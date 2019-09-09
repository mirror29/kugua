<template>
  <view class="warp">
    <view class="box">
      <t-table>
        <t-tr>
          <t-th>日期</t-th>
          <t-th>手机号</t-th>
          <t-th>金额</t-th>
          <t-th>操作</t-th>
        </t-tr>

        <!-- top是指mescroll的padding-top的数值,单位upx. 目的是使下拉布局往下偏移,不然会被悬浮菜单遮住 -->
        <mescroll-uni top="70" @down="downCallback" :up="upOption" @up="upCallback" @emptyclick="emptyClick" @init="mescrollInit" :tipShow = false>
            <t-tr v-for="item in list" :key="item.id" class="table-b">
              <t-td>{{item.AddTime}}</t-td>
              <t-td>{{item.BonusTalent}}</t-td>
              <t-td>{{item.BonusRecommend}}</t-td>
              <t-td>{{item.BonusReseller}}</t-td>
            </t-tr>
        </mescroll-uni>
      </t-table>
    </view>
  </view>
</template>

<script>
import tTable from "@/components/t-table/t-table.vue";
import tTh from "@/components/t-table/t-th.vue";
import tTr from "@/components/t-table/t-tr.vue";
import tTd from "@/components/t-table/t-td.vue";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
import {
    mapState
} from 'vuex';

export default {
  components: {
    tTable,
    tTh,
    tTr,
    tTd,
    MescrollUni
  },
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
          btnText: '返回首页'
        }
      },
      list: [],
      keyword: '',
      tipShow: false
    };
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    change(e) {
      console.log(e.detail);
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
    async getListDataFromNet(pageNum,pageSize,successCallback,errorCallback) {
        try {
					const list = await this.$request.post("user/bonus-list", {
						data: {
              page: pageNum,
              page_size: pageSize
            },
            header: {
							token: this.userInfo.token
						}
          });
          list.data.data.map((item,i) => {
            let date = item.AddTime.split(' ')[0]
            item.AddTime = `${date.split('/')[1]}.${date.split('/')[2]}`
            item.BonusTalent = parseFloat(item.BonusTalent).toFixed(1)
            item.BonusRecommend = parseFloat(item.BonusRecommend).toFixed(1)
            item.BonusReseller = parseFloat(item.BonusReseller).toFixed(1)
            item.Tax = parseFloat(item.Tax).toFixed(1)
            item.BonusAll = parseFloat(item.BonusAll).toFixed(1)
          })

          this.$common.checkStatus(list.data.code)

					successCallback && successCallback(list.data.data);
				} catch (error) {
					console.error("error:", error);
				}
		}
  }
};
</script>

<style lang="scss" scoped>
.warp{
  background-color: $uni-bg-color;
}
.table-b{
  background-color: $uni-bg-color;
  font-size: 24upx;
  width: 99.75vw;
}
.warp /deep/ .uni-scroll-view{
  width: 99.75vw;
}
</style>
