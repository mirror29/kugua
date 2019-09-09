<template>
    <div>
        <!-- 商品列表组件 -->
        <view class="coupons-con">
            <view class="coupons-list" v-for="value in list" :key="value.num_iid" >
                <image src="/static/images/cou-bg.png" mode="" class="cou-bg" lazy-load></image>
                <navigator class="cou-list-con" @click="navToDetailPage(value.num_iid)">
                    <view class="coupons-left">
                        <view class="cou-le skeleton-rect">
                            <image :src="value.images" mode="" lazy-load></image>
                        </view>
                        <view class="cou-ri">
                            <view class="cou-ri-tit">
                                <image src="../../static/images/tianmao.png" mode="" v-if="value.source == 'tm'" lazy-load></image>
                                <image src="../../static/images/tb.png" mode="" v-else-if="value.source == 'tb'" lazy-load></image>
                                <text class="skeleton-rect">{{value.name}}</text>
                            </view>
                            <text class="share skeleton-rect">分享赚 ￥{{value.share_commission}}</text>
                            <text v-if="userMsg.level > 0" class="upgra"></text>
                            <text class="upgrade skeleton-rect" v-else>升级赚 ￥{{value.upgrade_commission}}</text>
                            <text class="money skeleton-rect" v-if="value.couponAmount != '0.00' || value.couponAmount != '0'">券后 <text class="money-price">{{value.discountPrice }}元</text></text>
                            <text class="money skeleton-rect" v-else>价格<text class="money-price">{{value.discountPrice }}元</text></text>
                        </view>
                    </view>

                    <view class="coupons-right">
                        <text class="cou-ri-tit skeleton-rect" v-if="value.couponAmount != '0.00' || value.couponAmount != '0'">优惠券</text>
                        <text class="cou-ri-tit skeleton-rect" v-else>暂无该券</text>
                        <text class="cou-ri-num" v-show="value.couponAmount != '0.00' || value.couponAmount != '0'">{{value.couponAmount}}元</text>
                        <text class="cou-ri-btn" v-if="value.couponAmount != '0.00' || value.couponAmount != '0'">领券购买</text>
                        <text class="cou-ri-btn skeleton-rect" v-else>立即购买</text>
                        <text class="volume">销量:{{value.volume}}</text>
                    </view>
                </navigator>
            </view>
        </view>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex';
    export default {
        data () {
            return {
            }
        },
        props: {
            list: Array
        },
        computed: {
        ...mapState(['userMsg'])
        },
        methods: {
            //详情页
            navToDetailPage(oid) {
                console.log(oid)
                let id = oid;
                uni.navigateTo({
                    url: `/pages/product/detail-tao?num_iid=${id}`
                });
            },
        },
    }
</script>

<style lang="scss" scoped>
.coupons-con{
    // padding: 0 0 20upx 0;
    background-color: $uni-bg-color;
    .loading-text{
        text-align: center;
        margin: 8upx 0;
    }
    .coupons-list{
        position: relative;
        height: 240upx;
        padding-left: 6upx;

        .cou-bg{
            position: absolute;
            width: 742upx;
            height: 240upx;
        }

        .cou-list-con{
            display: flex;
            align-items: center;

            .coupons-left{
                display: flex;
                z-index: 10;

                .cou-le{
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    margin: 25upx 10upx 16upx 16upx;

                    image{
                        height:180upx;
                        width:180upx;
                    }

                    text{
                        color: $uni-text-color-inverse;
                        background: linear-gradient(-90deg,rgba(254,0,176,1),rgba(200,0,252,1));
                        font-size: 20upx;
                        padding: 4upx 0;
                        width: 180upx;
                    }
                }

                .cou-ri{
                    margin-top: 16upx;
                    display: flex;
                    flex-direction: column;
                    .cou-ri-tit{
                        display: flex;
                        width: 352upx;
                        line-height: $line-height;

                        image{
                            height: 32upx;
                            width: 32upx;
                            margin-right: 8upx;
                        }

                        text{
                            display: inline-block;
                            font-size: 28upx;
                            width: 300upx;
                            @include ellipsis-2;
                        }
                    }

                    .share{
                        font-size: 22upx;
                        color: $uni-text-color-inverse;
                        background: linear-gradient(-90deg,rgba(254,0,176,1),rgba(200,0,252,1));
                        border-radius: 8upx;
                        text-align: center;
                        width: 180upx;
                        margin: 4upx;
                        padding: 4upx 0;
                    }

                    .upgra{
                        height: 40upx;
                        background: transparent;
                        width: 180upx;
                    }

                    .upgrade{
                        font-size: 22upx;
                        color: $uni-text-color-inverse;
                        background: #bb0007;
                        border-radius: 8upx;
                        text-align: center;
                        width: 180upx;
                        margin: 4upx;
                        padding: 4upx 0;
                    }

                    .money{
                        color: $uni-text-color-grey;
                        font-size: 26upx;
                        .money-price{
                            color: #ee2c23;
                            font-size: 38upx;
                            margin-left: 8upx;
                            font-weight: bold;
                        }
                    }
                }
            }

            .coupons-right{
                z-index: 20;
                text-align: center;
                display: flex;
                flex-direction: column;
                margin-left: 24upx;

                .cou-ri-tit{
                    color: $uni-text-color-grey;
                }
                .cou-ri-num{
                    margin-top: 10uupx;
                    font-size: 36upx;
                    color: #ef2d24;
                    font-weight: 700;
                }
                .cou-ri-btn{
                        width: 140upx;
                        height: 50upx;
                        background: linear-gradient(-90deg,rgba(198,0,255,1),rgba(255,0,174,1));
                        line-height: 50upx;
                        text-align: center;
                        margin: 10upx auto 0;
                        border-radius: 60upx;
                        color: #fff;
                        font-size: 26upx;
                }
                .volume{
                    font-size: 24upx;
                    color: $uni-text-color-placeholder;
                    margin-top: 8upx;
                }
            }

        }
    }
}

</style>
