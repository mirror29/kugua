<template>
    <view class="content">
        <!--引用组件-->
        <skeleton v-if="showSkeleton" ref="skeleton" loading="chiaroscuro" selector="skeleton" bgcolor="#FFF"></skeleton>

        <float ref="float"></float>

        <view class="cu-modal" :class="modalName=='Image'?'show':''">
			<view class="cu-dialog modal">
				<view class="bg-img" style="background-image: url('/static/images/up-level.png');" @click="toLevel">
				</view>
                <view class="action text-white" @tap="hideModal">
                    <text class="cuIcon-close "></text>
                </view>
			</view>
		</view>

        <!-- 导航栏背景 -->
        <!-- #ifdef APP-PLUS -->
        <view class="status_bar" :style="{ backgroundColor: titleNViewBackground }">
            <view class="top_view"></view>
        </view>
        <!-- #endif -->

        <!-- 小程序头部兼容 -->
        <!-- #ifdef MP -->
        <view class="mp-search-box"><input class="ser-input" type="text" value="输入关键字搜索" disabled /></view>
        <!-- #endif -->

        <!-- 头部轮播 -->
        <view class="carousel-section">
            <!-- 标题栏和状态栏占位符 -->
            <view class="titleNview-placing"></view>
            <!-- 背景色区域 -->
            <view class="titleNview-background" :style="{ backgroundColor: titleNViewBackground }"></view>
            <!-- 顶部选项卡 -->
            <!-- <scroll-view class="floor-list" scroll-x>
                <view class="scoll-wrapper">
                    <view v-for="(item, index) in cateList" :key="item.id" class="floor-item">
                        <text class="cate-name" @click="toCate(item)">{{ item.title }}</text>
                    </view>
                </view>
            </scroll-view> -->
        </view>

        <mescroll-uni :fixed="false" :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" @emptyclick="emptyClick" @init="mescrollInit" bottom="50">
        <view class="carousel-section">
            <!-- 背景色区域 -->
            <view class="titleNview-background2" :style="{ backgroundColor: titleNViewBackground }"></view>

            <swiper class="carousel skeleton-rect" circular @change="swiperChange" :autoplay="autoplay" :interval="interval">
                <swiper-item v-for="(item, index) in carouselList" :key="item.id" class="carousel-item">
                    <image :src="item.img"/>
                </swiper-item>
            </swiper>
            <!-- 自定义swiper指示器 -->
            <view class="swiper-dots">
                <text class="num">{{ swiperCurrent + 1 }}</text>
                <text class="sign">/</text>
                <text class="num">{{ swiperLength }}</text>
            </view>
        </view>

        <!-- 图标列 -->
        <view class="icon-line">
            <navigator class="icon-li" v-for="(item, index) in iconList" :key="index" :url="item.url" hover-class="none">
                <image :src="item.icon" class="skeleton-radius" ></image>
                <text class="skeleton-rect">{{ item.text }}</text>
            </navigator>
        </view>

        <!-- 公告 -->
        <view class="notice">
            <image src="../../static/images/lb.png" mode="" class="notice-icon skeleton-radius"></image>
            <text class="divide">|</text>
            <view class="scroll-warp">
                <swiper class="swiper" :indicator-dots="indicatorDots"  :interval="interval" :duration="duration" vertical="true" :circular="true" :autoplay="true">
                    <swiper-item>
                        <view class="txt skeleton-rect">苦瓜合伙人招募中，升级合伙人、每月多赚2000元</view>
                    </swiper-item>
                    <swiper-item>
                        <view class="txt">苦瓜合伙人招募中，升级合伙人、每月多赚2000元</view>
                    </swiper-item>
                </swiper>
            </view>
        </view>

        <!-- 专题分区 -->
        <view class="project">
            <navigator class="project-list" v-for="(item,index) in projectList" :key="index" :url="item.url" hover-class="none">
                <view class="pro-title">
                    <text class="pro-tit-h skeleton-rect">{{item.title}}</text>
                    <text class="pro-tit-p skeleton-rect">{{item.subtitle}}</text>
                </view>
                <image :src="item.img" class="skeleton-rect"></image>
            </navigator>
        </view>

         <!-- 四个分类 -->
        <view class="four-cate" v-if="show">
            <navigator class="four-cate-list" url="../product/99?tag=高佣专区">
                <view class="four-cate-left">
                    <text class="four-title ">高佣专区</text>
                    <!-- <text class="four-subtitle ">高佣专区</text> -->
                    <image src="../../static/images/hf1.jpg" mode="" class=""></image>
                </view>
                <image src="../../static/images/hf2.jpg" mode="" class="four-right "></image>
            </navigator>
            <navigator class="four-cate-list" url="../product/99?tag=限时抢购">
                <view class="four-cate-left">
                    <text class="four-title title2 ">限时抢购</text>
                    <!-- <text class="four-subtitle ">限时限量</text> -->
                    <image src="../../static/images/hf3.jpg" mode="" class=""></image>
                </view>
                <image src="../../static/images/hf4.jpg" mode="" class="four-right "></image>
            </navigator>
            <navigator class="four-cate-list" url="../product/99?tag=漏洞单">
                <view class="four-cate-left">
                    <text class="four-title title3 ">漏洞单</text>
                    <!-- <text class="four-subtitle ">漏洞单</text> -->
                    <image src="../../static/images/hf5.jpg" mode="" class=""></image>
                </view>
                <image src="../../static/images/hf6.jpg" mode="" class="four-right "></image>
            </navigator>
            <navigator class="four-cate-list" url="../product/99?tag=生活专区">
                <view class="four-cate-left">
                    <text class="four-title title4 ">生活专区</text>
                    <!-- <text class="four-subtitle ">生活专区</text> -->
                    <image src="../../static/images/hf7.jpg" mode=""></image>
                </view>
                <image src="../../static/images/hf8.jpg" mode="" class="four-right "></image>
            </navigator>
        </view>

        <!-- 限时抢购 -->
        <!-- <view class="flash" v-if="show">
            <image src="../../static/images/bg.png" mode="" class="flash-bg "></image>
            <view class="flash-tit">
                <text class="tit-left">今日值得买，</text>
                <view class="tit-icon">
                    <text>限时抢购中</text>
                    <view class="icon tit-icon-i">
                        &#xe624;
                    </view>
                </view>
            </view>

            <swiper class="card-swiper flash-swiper" :circular="true"
             interval="2000" duration="500" @change="cardSwiper" autoplay>
            	<swiper-item v-for="(item,index) in flashList.goods" :key="item.origin_id" :class="cardCur==index?'cur':''">
            		<view class="swiper-item" @click="navToDetailPage(item.origin_id)">
            			<image :src="item.thumb" mode="aspectFill"></image>
                        <view class="flash-foot">
                            <text class="flash-name">{{item.title}}</text>
                            <text class="coupons">券后 ￥{{item.afterPrice}}</text>
                            <text class="sold">已售 {{item.sales_num}}</text>
                        </view>
            		</view>
            	</swiper-item>
            </swiper>

        </view> -->

        <!-- 边买边看 -->
        <!-- <view class="buy-look" v-if="show">
            <view class="look-tit">
                <view class="look-left">
                    <image src='../../static/images/bg3.png'></image>
                    <text>边买边看</text>
                </view>
                <navigator class="look-right" url="../product/buy-look" hover-class="none">
                    <text>查看全部</text>
                    <text class="icon">&#xe6d1;</text>
                </navigator>
            </view>
            <scroll-view class="scroll-view_H" scroll-x="true">
                <view class="scroll-view-item_H" v-for="(item,index) in buyList.goods" :key="item.origin_id" @click="navToDetailPage(item.origin_id)">
                    <image :src="item.thumb"></image>
                    <text>券￥{{item.coupon_money}}</text>
                </view>
            </scroll-view>
        </view> -->

        <!-- 精选好券 -->
        <view class="coupons" v-if="show">
            <view class="coupons-tit">
                <text class="tit-text">今日精选好券</text>
                <text class="tit-text2">EXPLOSION UPDATE TODAY</text>
            </view>
            <!-- <view class="coupons-cate">
                <view class="cou-ca-li cou-active">综合</view>
                <view class="cou-ca-li">销量</view>
                <view class="cou-ca-li">价格</view>
                <view class="cou-ca-li">佣金</view>
            </view> -->
            <list :list="couponsList"></list>
        </view>
        <!-- <w-loading text="加载中" ref="loading" v-if="show"></w-loading> -->
        </mescroll-uni>

        <modal ref="modal" :text="clipText"></modal>
    </view>
</template>

<script>
import list from "@/components/goods-list2.vue";
import MescrollUni from "@/components/mescroll-uni/mescroll-beibei.vue";
import {
    mapState,
    mapMutations
} from 'vuex';

export default {
    data() {
        return {
            mescroll: null, //mescroll实例对象
            downOption:{
                auto:false, // 不自动加载
            },
            upOption:{
                auto: true, // 自动加载
                noMoreSize: 4, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
            },
            topShow: false,
            show: false,
            showSkeleton: true,  //骨架屏显示隐藏
            indicatorDots: false,
            autoplay: true,
            interval: 2500,
            duration: 1000,
            titleNViewBackground: '',
            swiperCurrent: 0,
            swiperLength: 0,
            cardCur: 0,
            dotStyle: false,
            direction: '',
            carouselList: [],
            goodsList: [],
            cateList: [],
            couponsList: [],
            noticeList: [],
            page: 2,
            iconList: [
                {
                    icon: '../../static/images/index-tao.png',
                    text: '淘好货',
                    url: '../product/99?tag=淘好货'
                },
                // {
                //     icon: '../../static/images/index-pin.gif',
                //     text: '淘拼团',
                //     url: '../product/99?tag=淘拼团'
                // },
                {
                    icon: '../../static/images/index-mu.png',
                    text: '母婴专区',
                    url: '../product/baby'
                },
                {
                    icon: '../../static/images/index-pinpai.png',
                    text: '品牌专区',
                    url: '../product/99?tag=品牌专区'
                },
                {
                    icon: '../../static/images/index-bao.png',
                    text: '9.9包邮',
                    url: '../product/99?tag=9块9包邮'
                }
            ],
            projectList: [
                {
                    img: '../../static/images/fuli-1.png',
                    title: '猜你喜欢',
                    subtitle: '你喜欢的，都在这里',
                    url: '../product/guess-like'
                },
                {
                    img: '../../static/images/video.png',
                    title: '抖券',
                    subtitle: '宝贝视频专区',
                    url: '../product/video'
                },
                {
                    img: '../../static/images/fuli-2.png',
                    title: '今日疯抢',
                    subtitle: '高佣好物',
                    url: '../product/99?tag=今日疯抢'
                }
            ],
            flashList: [],
            buyList: [],
            modalName: ''
        };
    },
    components: {
        list,
        MescrollUni
    },
    computed: {
        ...mapState(['showModal','clipText','userMsg','hasLogin','userInfo'])
    },
    onLoad() {},
    onReady() {
        const that = this;
        that.$refs.skeleton.attachedAction();
        that.$refs.skeleton.readyAction();
        that.sendRequest()
        that.$refs.float.sendRequest()
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
    onPageScroll(e){
        //兼容iOS端下拉时顶部漂移
        if(e.scrollTop>=0){
            this.headerPosition = "fixed";
        }else{
            this.headerPosition = "absolute";
        }
    },
    methods: {
        ...mapMutations(['setId']),
        async sendRequest() {
            let _this = this;
            try {
                const banner =  await this.$request.post('/taobao-buy/nav-index', {});
                _this.carouselList = banner.data.data;
                _this.titleNViewBackground = banner.data.data[0].color;
                // _this.titleNViewBackground = '#000000';
                _this.swiperLength = banner.data.data.length;

                const cateList =  await this.$request.post('/taobao-buy/menu', {});
                _this.cateList = cateList.data.data;

                const noticeList =  await this.$request.post('/taobao-buy/announcement', {});
                _this.noticeList  = noticeList.data.data;

                const flashList =  await this.$request.post('taobao-buy/get-custom-nav', {});
                for (const item of flashList.data.data) {
                    if(item.position === '2'){
                        for (const item2 of item.goods) {
                            let afterPrice = (item2.coupon_price - item2.coupon_money).toFixed(1);
                            item2.afterPrice = afterPrice;
                        }
                        _this.flashList = item;
                    }
                    if(item.position === '3'){
                        _this.buyList = item
                    }
                }
                _this.callBack()

            } catch (error) {
                console.error('error:', error);
            }
        },
        callBack(){
            this.showSkeleton = false;
            this.show = true;
            if(this.userMsg.level > 0){
            } else {
                this.modalName = 'Image'
            }
        },
        //轮播图切换修改背景色
        swiperChange(e) {
            const index = e.detail.current;
            this.swiperCurrent = index;
            this.titleNViewBackground = this.carouselList[index].color;
        },
        // cardSwiper
        cardSwiper(e) {
        	this.cardCur = e.detail.current
        },
        // 分类页
        toCate(item){
            let _this = this;
            _this.setId(item)
            uni.switchTab({  //此方法不允许传参
                url: `/pages/category/category`
            });
        },
        showM(){
            if(this.showModal){
                this.$refs.modal.showModal();
            }
        },
        hideModal(e) {
            this.modalName = ''
        },
        toLevel(){
            uni.navigateTo({
                url: `/pages/user/config/upgrade-equity`
            });
        },
        //详情页
        navToDetailPage(oid) {
            let id = oid;
            uni.navigateTo({
                url: `/pages/product/detail?num_iid=${id}`
            });
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
                if(mescroll.num == 1) this.couponsList = []; //如果是第一页需手动制空列表
                this.couponsList=this.couponsList.concat(curPageData); //追加新数据
            }, () => {
                //联网失败的回调,隐藏下拉刷新的状态
                mescroll.endErr();
            })
        },
        /*联网加载列表数据
        在您的实际项目中,请参考官方写法: http://www.mescroll.com/uni.html#tagUpCallback
        请忽略getListDataFromNet的逻辑,这里仅仅是在本地模拟分页数据,本地演示用
        实际项目以您服务器接口返回的数据为准,无需本地处理分页.
        * */
        async getListDataFromNet(pageNum,pageSize,successCallback,errorCallback) {
            try{
                if(this.hasLogin){
                    const list = await this.$request.post("/product/index", {
                        data: {
                            page: pageNum,
                            limit: pageSize,
                            tag: '首页,热销'
                        },
                        header:{
                            token: this.userInfo.token
                        }
                    });
                    let listArr = []

                    for (const i in list.data.data) {
                        let afterPrice = (list.data.data[i].discountPrice - list.data.data[i].commissionAmount).toFixed(1);
                        list.data.data[i].afterPrice = afterPrice;
                        listArr.push(list.data.data[i])
                    }

                    successCallback && successCallback(listArr);
                } else {
                    const list = await this.$request.post("/product/index", {
                        data: {
                            page: pageNum,
                            limit: pageSize,
                            tag: '首页,热销'
                        }
                    });
                    let listArr = []

                    for (const i in list.data.data) {
                        let afterPrice = (list.data.data[i].discountPrice - list.data.data[i].commissionAmount).toFixed(1);
                        list.data.data[i].afterPrice = afterPrice;
                        listArr.push(list.data.data[i])
                    }

                    successCallback && successCallback(listArr);
                }

            } catch (e) {
                //联网失败的回调
                errorCallback && errorCallback();
            }
        }
    },
    onReachBottom(){
        this.mescroll.triggerUpScroll();
    },
    // #ifndef MP
    // 标题栏input搜索框点击
    onNavigationBarSearchInputClicked: async function(e) {
        uni.navigateTo({
            url: 'search'
        });
    },
    //点击导航栏 buttons 时触发
    onNavigationBarButtonTap(e) {
        const index = e.index;
        if (index === 0) {
            this.$api.msg('点击了扫描');
        } else if (index === 1) {
            // #ifdef APP-PLUS
            const pages = getCurrentPages();
            const page = pages[pages.length - 1];
            const currentWebview = page.$getAppWebview();
            currentWebview.hideTitleNViewButtonRedDot({
                index
            });
            // #endif
            uni.navigateTo({
                url: '/pages/notice/notice'
            })
        }
    }
    // #endif
};
</script>

<style lang="scss">
    @import './index.scss'
</style>
