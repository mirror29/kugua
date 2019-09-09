<template>
  <view class="container">
    <float ref="float"></float>
    <modal ref="modal" :text="clipText"></modal>
    <view class="search-tit">
      <image class="tit-bg" src='../../static/images/search-bg.png'></image>
      <view class="tit-con">
          <label for="">
              <input type="text" v-model="keyword" :placeholder="placeholder">
              <text  @click="toGoodsList()">搜索</text>
          </label>
      </view>
    </view>

    <view class="search-hot" v-if="oldKeywordList.length>0">
      <text class="hot-tit">历史记录</text>
      <view class="hot-con">
        <view
          class="hot-list"
          v-for="(item,index) in oldKeywordList"
          :key="index"
          @click="toGoodsList2(item)"
        >{{item}}</view>
      </view>
    </view>

    <view class="search-hot">
      <text class="hot-tit">热门搜索</text>
      <view class="hot-con">
        <view
          class="hot-list"
          v-for="(item,index) in hotList"
          :key="index"
          @click="toGoodsList2(item.keyword)"
        >{{item.keyword}}</view>
      </view>
    </view>

    <!-- 图标分类 -->
    <!-- <view class="icon-cate">
      <view class="icon-con">
        <view class="icon-list" v-for="(item,index) in iconList" :key="index" @click="toGoodsList(item.name)">
              <image :src="item.img"></image>
              <text>{{item.name}}</text>
        </view>
      </view>
    </view> -->

    <!-- 猜你喜欢 -->
    <list :list=list class="list"></list>
  </view>
</template>

<script>
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
import List from "@/components/guess-list.vue"
import {
    mapState
} from 'vuex';
export default {
    data () {
        return {
            keyword: '',
            hotList: [
            ],
            iconList: [
                {
                    img: '../../static/images/fl/skirt_icon.png',
                    name: '女装'
                },
                {
                    img: '../../static/images/fl/man_icon.png',
                    name: '男装'
                },
                {
                    img: '../../static/images/fl/underwear_icon.png',
                    name: '内衣'
                },
                {
                    img: '../../static/images/fl/makeup_icon.png',
                    name: '美妆'
                },
                {
                    img: '../../static/images/fl/hat_icon.png',
                    name: '配饰'
                },
                {
                    img: '../../static/images/fl/shoes_icon.png',
                    name: '鞋品'
                },
                {
                    img: '../../static/images/fl/package_icon.png',
                    name: '箱包'
                },
                {
                    img: '../../static/images/fl/child1_icon.png',
                    name: '母婴'
                },
                {
                    img: '../../static/images/fl/home_icon.png',
                    name: '居家'
                },
                {
                    img: '../../static/images/fl/food_icon.png',
                    name: '美食'
                },
            ],
            mescroll: null, //mescroll实例对象
            upOption:{
                page: {
                // 	num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
                    size: 6, // 每页数据的数量
                },
                noMoreSize: 4, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
                empty:{
                tip: '~ 这里没有发现任何数据哦 ~', // 提示
                btnText: '返回首页'
                }
            },
            list: [],
            tipShow: false,
            placeholder: '',
            oldKeywordList: []
        }
    },
    components: {
        MescrollUni,
        List
    },
    onReady(){
      this.sendRequest();
      this.loadOldKeyword()
      this.$refs.float.sendRequest()
    },
    computed: {
        ...mapState(['showModal','clipText'])
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
    methods: {
        async sendRequest() {
          const searchText =  await this.$request.post('/search/default-keywords', {});
          this.placeholder = searchText.data.data.keyword;
          const hot =  await this.$request.post('/search/keywords', {});
          this.hotList = hot.data.data;
          this.getListDataFromNet()
        },
        async getListDataFromNet(pageNum,pageSize,successCallback,errorCallback) {
        try {
            let net = ''
            uni.getNetworkType({  //检测网络
                success: function (res) {
                    console.log(res.networkType);
                    if(res.networkType === 'wifi'){
                      net = 'wifi'
                    } else {
                      net = 'cell'
                    }
                }
            });
            let os = ''
            uni.getSystemInfo({
                success: function (res) {
                    os = res.platform
                }
            });
            const list = await this.$request.post("/product/guess-like", {
                data: {
                    os: os,
                    // ua: '',
                    net: net,
                    // ip: ''
                }
            });
            let listArr = []
            for (const item of list.data.data) {
                item.couponAmount = parseInt(item.couponAmount)
                listArr.push(item)
            }

            this.list = listArr

            } catch (error) {
                console.error("error:", error);
            }
        },
        //详情页
        navToDetailPage(oid) {
            let id = oid;
            uni.navigateTo({
                url: `/pages/product/detail-tao?num_iid=${id}`
            });
        },
        showM(){
            if(this.showModal){
                this.$refs.modal.showModal();
            }
        },
        toGoodsList () {
            let name = ''
            if(this.keyword != ''){
              name = this.keyword
            } else {
              name = this.placeholder
            }
            this.saveKeyword(name)
            uni.navigateTo({
                url: `/pages/product/goods-list?key=${name}`
            });
        },
        toGoodsList2 (key) {
            let name = key
            this.saveKeyword(name)
            let newkey = escape(name)
            uni.navigateTo({
                url: `/pages/product/goods-list?key=${newkey}`
            });
        },
        //加载历史搜索,自动读取本地Storage
        loadOldKeyword() {
          uni.getStorage({
            key: 'OldKeys',
            success: (res) => {
              var OldKeys = JSON.parse(res.data);
              this.oldKeywordList = OldKeys;
            }
          });
        },
        //保存关键字到历史记录
        saveKeyword(keyword) {
          uni.getStorage({
            key: 'OldKeys',
            success: (res) => {
              console.log(res.data);
              var OldKeys = JSON.parse(res.data);
              var findIndex = OldKeys.indexOf(keyword);
              if (findIndex == -1) {
                OldKeys.unshift(keyword);
              } else {
                OldKeys.splice(findIndex, 1);
                OldKeys.unshift(keyword);
              }
              //最多10个纪录
              OldKeys.length > 10 && OldKeys.pop();
              uni.setStorage({
                key: 'OldKeys',
                data: JSON.stringify(OldKeys)
              });
              this.oldKeywordList = OldKeys; //更新历史搜索
            },
            fail: (e) => {
              var OldKeys = [keyword];
              uni.setStorage({
                key: 'OldKeys',
                data: JSON.stringify(OldKeys)
              });
              this.oldKeywordList = OldKeys; //更新历史搜索
            }
          });
        },
        //清除历史搜索
        oldDelete() {
          uni.showModal({
            content: '确定清除历史搜索记录？',
            success: (res) => {
              if (res.confirm) {
                console.log('用户点击确定');
                this.oldKeywordList = [];
                uni.removeStorage({
                  key: 'OldKeys'
                });
              } else if (res.cancel) {
                console.log('用户点击取消');
              }
            }
          });
        },
    },
    // 上拉加载
    onReachBottom(){
        let _this = this;
        let page = _this.page ++;
        // console.log(page)
        // uni.showToast({title: '触发上拉加载'});
        //打开加载动画
        _this.$refs.loading.open()
        const list = this.$request.post('/taobao-buy/guess-like', {
            data: {
                page: page,
                page_size: 6
            }
        })
        list.then((result) => {
            // console.log(result)

            if (result.data.data) {
                for (const item of result.data.data) {
                    let reduce = parseInt(item.coupon_amount)
                    let afterPrice = (item.zk_final_price - item.coupon_amount).toFixed(1)
                    item.reduce = reduce;
                    item.afterPrice = afterPrice;
                }
                _this.guessList.push(...result.data.data)
            } else if (result.data.data === []) {
                //关闭加载动画
                _this.$refs.loading.close()
                _this.$refs.loading.over('没有更多了')
            }

        }).catch((err) => {

        });
    },
    // 下拉刷新
    onPullDownRefresh() {
        console.log('refresh');
        this.sendRequest()
    }
}
</script>

<style lang="scss">
.container{
  margin-bottom: 110upx;
}
.search-tit {
  position: relative;
  .tit-bg {
    width: 100%;
    height: 350upx;
    z-index: 0;
  }
  .tit-con {
    position: absolute;
    z-index: 10;
    width: 90%;
    bottom: 20upx;
    left: 32upx;

    label {
      display: flex;

      input {
        border-radius: 40upx 0 0 40upx;
        background-color: $uni-bg-color;
        width: 510upx;
        padding: 20upx;
        height: 90upx;
        // line-height: 90upx;
        font-size: 26upx;
      }

      text {
        border-radius: 0 40upx 40upx 0;
        width: 180upx;
        margin: 0;
        height: 90upx;
        line-height: 90upx;
        color: #fff;
        background: linear-gradient(to right, #ff9801, #ff570a);
        border-top-left-radius: none;
        border-bottom-left-radius: none;
        text-align: center;
        font-size: 36upx;
        letter-spacing: 1.5px;
      }
    }
  }
}

.search-hot {
  background-color: $uni-bg-color;
  padding: $uni-spacing-row-sm $uni-spacing-row-base;
  margin-bottom: 2upx;

  .hot-con {
    display: flex;
    margin-top: 20upx;
    flex-wrap: wrap;

    .hot-list {
      background-color: #f5f5f5;
      margin: 8upx;
      border-radius: 10upx;
      padding: 10upx 30upx;
      font-size: 22upx;
    }
  }
}

/* 图标分类 */
.icon-cate {
  background-color: $uni-bg-color;
  padding: $uni-spacing-col-base;
  margin-bottom: $uni-spacing-row-sm;

  .icon-con {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .icon-list {
      width: 100upx;
      text-align: center;
      margin: 12upx;
      font-size: 24upx;

      image {
        width: 80upx;
        height: 80upx;
      }
    }
  }
}

.list{
  margin-top: 10upx;
}
</style>

