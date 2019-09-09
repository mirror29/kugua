<template>
	<view>
        <!--引用组件-->
        <skeleton v-if="showSkeleton" ref="skeleton" loading="chiaroscuro" selector="skeleton" bgcolor="#FFF"></skeleton>

        <float ref="float"></float>
		<!-- 底部菜单 -->
		<view class="footer" v-show="show">
            <view class="footer-con">
                <view class="icons">
                    <view class="box" @click="toHome">
                        <view class="icon">&#xe639;</view>
                        <view class="text">返回首页</view>
                    </view>
                    <view class="box" @tap="keep">
                        <view class="icon" :class="[isKeep?'shoucangsel':'shoucang']">&#xe605;</view>
                        <view class="text">{{isKeep?'已':''}}收藏</view>
                    </view>
                </view>
                <view class="btn">
                    <view class="joinCart" @tap="shareGoods">分享宝贝</view>
                    <view class="buy" @click="toTaobao" v-if="goodsDetail.couponAmount != '0.00'">领券 ￥{{goodsDetail.couponAmount || ""}}元</view>
                    <view v-else class="buy" @click="toTaobao">立即购买</view>
                </view>
            </view>
		</view>
		<!-- 商品主图轮播 -->
		<view class="swiper-box skeleton-rect">
			<swiper circular="true" autoplay="true" @change="swiperChange">
				<swiper-item v-for="(item,index) in goodsDetail.small_images" :key="index">
					<image :src="item" @tap="toSwiper(item)" lazy-load></image>
				</swiper-item>
			</swiper>
			<view class="indicator">{{currentSwiper+1}} / {{swiperList.length}}</view>
		</view>
		<!-- 标题 价格 -->
		<view class="info-box goods-info">
            <view class="info-top skeleton-rect">
                <image src="../../static/images/detail-bg.png" class="top-bg"></image>
                <view class="top-left">
                    <view class="price">￥<text class="price-num">{{goodsDetail.discountPrice || ""}}</text></view>
                    <view class="top-volume">
                        <text class="top-origin">￥{{goodsDetail.price || ""}}</text>
                        <text class="top-volume-num">{{goodsDetail.volume || ""}} 件已售</text>
                    </view>
                </view>
                <view class="top-right" v-if="goodsDetail.expire_at != 0">
                    <text>距结束仅剩</text>
                    <view id="countDown" v-if="show">
                        <countdown
                            :day= date
                            :hour= hour
                            :minute= minutes
                            :second= seconds
                            ref="countdown">
                        ></countdown>
                    </view>
                </view>
            </view>
			<view class="title">
                <view class="title-text">
                    <image src="../../static/images/tianmao.png" mode="" v-if="goodsDetail.source == 'tm'" lazy-load class="skeleton-radius"></image>
                    <image src="../../static/images/tb.png" mode="" v-else-if="goodsDetail.source == 'tb'" lazy-load class="skeleton-radius"></image>
                    <text class="skeleton-rect">{{goodsDetail.name}}</text>
                </view>
                <view class="box skeleton-radius" @tap="keep">
					<view class="icon" :class="[isKeep?'shoucangsel':'shoucang']">&#xe605;</view>
					<view class="text">{{isKeep?'已':''}}收藏</view>
				</view>
			</view>
            <view class="goods-make">
                <view class="make-item skeleton-radius">
                    <text class="make-le">分享赚</text>
                    <text class="make-ri">{{goodsDetail.share_commission || ""}}元</text>
                </view>
                <view v-if="userMsg.level > 0"></view>
                <view class="make-item skeleton-radius" v-else>
                    <text class="make-le">升级赚</text>
                    <text class="make-ri">{{goodsDetail.upgrade_commission || ""}}元</text>
                </view>
            </view>
		</view>
        <!-- 优惠券 -->
        <view class="coupons" v-show="goodsDetail.couponAmount != '0.00'">
            <image src="../../static/images/quan-bg-2.png"></image>
            <view class="cou-con" @click="toTaobao">
                <view class="cou-left">
                    <text class="cou-peice">￥<text>{{goodsDetail.couponAmount || ""}}</text></text>
                    <view v-if="goodsDetail.expire_at != 0">
                        <text>优惠券有效期至：</text>
                        <text class="cou-time">{{goodsDetail.time}}</text>
                    </view>
                </view>
                <view class="cou-right">领券</view>
            </view>
        </view>
		<!-- 详情 -->
		<view class="description" v-show="show">
			<view class="title"> 商品详情 </view>
			<!-- <view class="content"><rich-text :nodes="descriptionStr"></rich-text></view> -->
            <view v-for="(item,index) in goodsDetail.small_images" :key="index" class="con">
                <image :src="item" lazy-load mode="widthFix"></image>
            </view>
            <view class="safe-foot"></view>
		</view>
	</view>
</template>

<script>
import skeleton from "../../components/quick-skeleton/quick-skeleton.vue";
import countdown from "@/components/uni-countdown.vue"
import {
    mapState
} from 'vuex';

export default {
	data() {
		return {
            show: false,
            showSkeleton: true,  //骨架屏显示隐藏
            timestamp: 1000000,
            date: 0,
            hour: '1',
            minutes: 0,
            seconds: 0,
            id: '',
            detail: '',
            goodsDetail: {
                collection: 0,
                commission_money: 0.62,
                commission_rate: 3.5,
                coupon_end_time: "2019-07-11 10:29:37",
                coupon_money: 3,
                coupon_price: 66,
                item_url: "https://s.click.taobao.com/6b1dx5w",
                id: "554978884331",
                origin_price: 69,
                pgrade_price: 1.85,
                pict_url: "https://img.alicdn.com/bao/uploaded/i3/684552209/O1CN014rK23x1SBlRE95Q68_!!0-item_pic.jpg",
                ratio_price: 1.16,
                recommend: "",
                small_images: [],
                sub_title: "",
                title: "老北京布鞋男鞋透气男单鞋中老年爸爸鞋厚底防滑软底休闲大码鞋子",
                type: 1,
                volume: 1562
            },
            swiperList: [],
			//轮播图下标
			currentSwiper: 0,
            isKeep:false,//收藏
            url: ''
		};
    },
    components: {
        skeleton,
        countdown
    },
    computed: {
        ...mapState(['hasLogin','userInfo','userMsg'])
    },
	onLoad(option) {
        // console.log(option)
        this.id = option.id;
	},
	onReady(){
        const that = this;
        that.$refs.float.sendRequest()
    },
    onShow(){
        const that = this;
        that.$refs.skeleton.attachedAction();
        that.$refs.skeleton.readyAction();
        this.sendRequest()
    },
	onPageScroll(e) {

	},
	//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
	onReachBottom() {
		// uni.showToast({ title: '触发上拉加载' });
	},
	mounted () {

	},
	methods: {
        async sendRequest(){
            try {
                if(!this.hasLogin){
                    const detail = await this.$request.post('/product/show', {
                        data: {
                            id: this.id
                        }
                    });
                    let data =  detail.data.data;
                    console.log(data)
                    this.$common.checkStatus(detail.data.code)
                    this.swiperList = data.small_images;
                    let time = this.$common.formatTime(data.expire_at)
                    data.time = time;
                    let timestamp =  Number(new Date(time)) ;  //倒计时
                    let timestamp2 = timestamp - Number(new Date())
                    this.date = parseInt(timestamp2/1000/60/60/24%30)
                    this.hour = parseInt(timestamp2/1000/60/60%24)
                    this.minutes = parseInt(timestamp2/1000/60%60)
                    this.seconds = parseInt(timestamp2/1000%60)

                    let afterPrice = (data.discountPrice - data.couponAmount).toFixed(1);
                    data.afterPrice = afterPrice;
                    data.couponAmount = parseInt(data.couponAmount)
                    this.goodsDetail = data;
                    this.callBack()
                } else {
                    const detail = await this.$request.post('/product/show', {
                        data: {
                            id: this.id
                        },
                        header: {
                            token: this.userInfo.token
                        }
                    });
                    let data =  detail.data.data;
                    console.log(data)
                    this.$common.checkStatus(detail.data.code)
                    this.swiperList = data.small_images;
                    let time = this.$common.formatTime(data.expire_at)
                    data.time = time;
                    let timestamp =  Number(new Date(time)) ;  //倒计时
                    let timestamp2 = timestamp - Number(new Date())
                    this.date = parseInt(timestamp2/1000/60/60/24%30)
                    this.hour = parseInt(timestamp2/1000/60/60%24)
                    this.minutes = parseInt(timestamp2/1000/60%60)
                    this.seconds = parseInt(timestamp2/1000%60)

                    let afterPrice = (data.discountPrice - data.couponAmount).toFixed(1);
                    data.afterPrice = afterPrice;
                    data.couponAmount = parseInt(data.couponAmount)
                    this.url = data.coupon_click_url;
                    this.goodsDetail = data;
                    this.callBack()
                }
            } catch (error) {
                console.error('error:', error);
            }
        },
        callBack(){
            this.showSkeleton = false;
            this.show = true;
            uni.stopPullDownRefresh();
            // this.getDeail();
        },
		//轮播图指示器
		swiperChange(event) {
			this.currentSwiper = event.detail.current;
        },
        async toTaobao () {
            let _this = this;
            if(!this.hasLogin){
                uni.showModal({
                    title: '请先登录！',
                    content: '您目前尚未登录',
                    success: function (res) {
                        if (res.confirm) {
                            uni.navigateTo({
                                url: '/pages/login/login'
                                })
                            } else if (res.cancel) {
                                console.log('用户点击取消');
                            }
                    }
                });
            } else {
                // 验证淘宝授权
                const taoVerify = await this.$request.post('/authorization/taobao-verify',{
                    header: {
                        'token': this.userInfo.token
                    },
                })
                console.log(taoVerify)
                if(taoVerify.data.code === 0){
                    let url = _this.url;
                    plus.runtime.openURL(url.replace('https', 'taobao').replace('http', 'taobao'), function(res) {
                        uni.showModal({
                            content:"未检测到手机淘宝",
                            showCancel: false,
                            success:function(res){
                                uni.showToast ({
                                    title:"优惠券领取失败",
                                    icon: 'none'
                                })
                            }
                        })
                    });
                } else {
                    _this.$common.taoLogin();
                }
            }
        },
		// 分享
		share(){
			this.shareClass = 'show';
        },
        // 获取详情图片
        getDeail(){
            let url = `https://h5api.m.taobao.com/h5/mtop.taobao.detail.getdesc/6.0/?jsv=2.4.0&appKey=12574478&t=1560248888574&sign=2db06c3e2c1ec60d2cb53e4f06e92077&api=mtop.taobao.detail.getdesc&v=6.0&AntiFlool=true&AntiCreep=true&type=jsonp&dataType=jsonp&callback=mtopjsonp1&data=%7b%22id%22%3a%22${this.goodsDetail.id}%22%2c%22type%22%3a%221%22%7d`

            // let xhr=new plus.net.XMLHttpRequest()
            // xhr.onreadystatechange = function () {
            //     console.log(JSON.parse(xhr))
            // }
            // xhr.open( "GET", url );
            // xhr.send();
            uni.request({
                url: url, //仅为示例，并非真实接口地址。
                dataType: 'jsonp',
                method: 'POST',
                jsonpCallback: 'mtopjsonp1',
                header: {
                    'content-type': 'application/x-www-form-urlencoded',
                },
                success: (res) => {
                    console.log(JSON.parse(res.data));
                    this.detail = res.data.data.pcDescContent
                }
            });
        },
		hideShare(){
			this.shareClass = 'hide';
			setTimeout(() => {
				this.shareClass = 'none';
			}, 150);
		},
		//收藏
		keep(){
			this.isKeep = this.isKeep?false:true;
        },
        toHome () {
            uni.switchTab({
                url: '/pages/index/index'
            });
        },
		async shareGoods(){
            let _this = this;
             if(!this.hasLogin){
                uni.showModal({
                    title: '请先登录！',
                    content: '您目前尚未登录',
                    success: function (res) {
                        if (res.confirm) {
                            uni.navigateTo({
                                url: '/pages/login/login'
                                })
                            } else if (res.cancel) {
                                console.log('用户点击取消');
                            }
                    }
                });
            } else {
                // 验证淘宝授权
                const taoVerify = await this.$request.post('/authorization/taobao-verify',{
                    header: {
                        'token': this.userInfo.token
                    },
                })
                console.log(taoVerify)
                if(taoVerify.data.code === 0){
                    uni.navigateTo({
                        url: `./share?type=other&id=${this.id}`
                    })
                } else {
                    _this.$common.taoLogin();
                }
            }
        },
        toSwiper(){
            uni.previewImage({
                urls: this.swiperList
            });
        }
	}
};
</script>

<style lang="scss">
page {
	background-color: #f8f8f8;
}
@keyframes showPopup {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes hidePopup {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	@keyframes showLayer {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-100%);
		}
	}
	@keyframes hideLayer {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(0);
		}
	}
.swiper-box {
	position: relative;
	width: 100%;
	height: 100vw;
	swiper {
		width: 100%;
		height: 100vw;
		swiper-item {
			image {
				width: 100%;
				height: 100vw;
			}
		}
	}
	.indicator{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 25upx;
		height: 40upx;
		border-radius: 40upx;
		font-size: 22upx;
		position: absolute;
		bottom: 20upx;
		right: 20upx;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.2);
	}
}

.goods-info {
    margin-bottom: $uni-spacing-row-sm;
    .info-top{
        position: relative;
        display: flex;
        .top-bg{
            width: 100%;
            height: 96upx;
            z-index: 0;
        }
        .top-left{
            position: absolute;
            z-index: 10;
            top: 4upx;
            left: 25upx;
            display: flex;
            align-items: center;
            .price {
                font-size: 40upx;
                color: $uni-text-color-inverse;
                margin-right: 18upx;
                .price-num{
                    font-size: 68upx;
                    font-weight: 600;
                }
            }
            .top-volume{
                display: flex;
                flex-direction: column;

                .top-origin{
                    color: #dfdfdf;
                    text-decoration:line-through;
                    opacity: .8;
                }

                .top-volume-num{
                    color: $uni-text-color-inverse;
                    background-color: #646464;
                    border-radius: 5upx;
                    padding: 2upx 6upx;
                    font-size: 24upx;
                    opacity: .7;
                }
            }
        }
        .top-right{
            position: absolute;
            z-index: 10;
            top: 4upx;
            right: 14upx;
            text-align: center;
           text{
                color: #d43934;
           }
        }
    }
    .title {
        font-size: 30upx;
        margin-top: $uni-spacing-row-sm;
        padding: 0 $uni-spacing-row-sm $uni-spacing-row-sm $uni-spacing-row-sm;
        display: flex;
        justify-content: space-between;
        .title-text{
            display: flex;

            image{
                height: 36upx;
                width: 35upx;
                margin-top: 2upx;
                margin-right: 6upx;
            }

            text{
                width: 580upx;
            }
        }
        .box{
            text-align: center;
            width: 100upx;
            .icon{
                font-size: 40upx;
            }
            .shoucang{
                color: #828282;
            }
            .shoucangsel {
                color: #EB402D;
            }
        }
    }
    .goods-make{
        padding: 0 $uni-spacing-row-sm $uni-spacing-row-sm $uni-spacing-row-sm;
        display: flex;

        .make-item{
            margin: 0 30upx;

            .make-le{
                color: #ffd0ff;
                background: -webkit-linear-gradient(right,#d60939,#fe02be);
                background: -o-linear-gradient(right,#d60939,#fe02be);
                background: -moz-linear-gradient(right,#d60939,#fe02be);
                background: linear-gradient(to right,#d60939,#fe02be);
                border-radius: 8upx;
                padding: 4upx 14upx;
                font-size: 26upx;
            }

            .make-ri{
                background: -webkit-gradient(linear,left top,left bottom,from(#d7095f),to(#ff00bf));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-left: 6upx;
                font-weight: 700;
                font-size: 28upx;
            }
        }
    }
}
.description {
    padding-bottom: 96upx;
	.title {
		width: 100%;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 26upx;
        color: uni-text-color;
    }

    .con{
        image{
            width: 100%;
        }
    }

    .safe-foot{
        padding-bottom: constant(safe-area-inset-bottom);
        padding-bottom: env(safe-area-inset-bottom);
    }
}
.footer {
	position: fixed;
	bottom: 0upx;
	width: 100%;
	border-top: solid 1upx #eee;
	background-color: #fff;
	z-index: 2;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    .footer-con{
        padding: 0 4%;
        height: 94upx;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icons {
            display: flex;
            height: 80upx;
            margin-left: -4%;
            .box {
                width: 100upx;
                height: 80upx;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                .icon {
                    font-size: 48upx;
                    color: #828282;
                }
                .shoucangsel {
                    color: #EB402D;
                }
                .text {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    font-size: 22upx;
                    color: #666;
                }
            }
        }
        .btn {
            height: 70upx;
            border-radius: 40upx;
            overflow: hidden;
            display: flex;
            margin-right: -2%;
            .joinCart,
            .buy {
                height: 70upx;
                width: 255upx;
                color: #fff;
                display: flex;
                align-items: center;
                font-size: 28upx;
                justify-content: center;
            }
            .joinCart {
                background-color: #ff9b20;
            }
            .buy {
                background-color: #f06c7a;
            }
        }
    }
}

// 优惠券
.coupons{
    background-color: #efefef;
    padding: $uni-spacing-col-base;
    position: relative;

    image{
        width: 100%;
        height: 150upx;
    }

    .cou-con{
        position: absolute;
        top: 40upx;
        left: 60upx;
        display: flex;
        align-items: center;

        .cou-left{
            display: flex;
            align-items: center;
            width: 480upx;

            .cou-peice{
                background: -webkit-gradient(linear,left top,left bottom,from(#d7095f),to(#ff00bf));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-right: 10upx;
                font-size: 40upx;
                text{
                    font-size: 90upx;
                }
            }

            view{
                display: flex;
                flex-direction: column;

                .cou-time{
                    color: $uni-text-color-grey;
                    font-size: 28upx;
                }
            }
        }

        .cou-right{
            color: $uni-text-color-inverse;
            font-size: 45upx;
            margin-left: 40upx;
            margin-top: -10upx;
        }
    }
}
</style>
