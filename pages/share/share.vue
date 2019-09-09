<template>
    <view class="container">
        <!--引用组件-->
        <skeleton v-if="showSkeleton" ref="skeleton" loading="chiaroscuro" selector="skeleton" bgcolor="#FFF"></skeleton>

        <float ref="float"></float>

        <modal ref="modal" :text="clipText"></modal>

        <mescroll-uni @down="downCallback" :up="upOption" @up="upCallback" @emptyclick="emptyClick" @init="mescrollInit" :tipShow = false>
			<!-- 数据列表 -->
            <view class="share">
                <view class="share-li shadow-warp" v-for="(item,index) in list" :key="item.id">
                    <view class="header">
                        <view class="left">
                            <image src="/static/images/logo.png" class="skeleton-radius"></image>
                            <view class="use">
                                <text class="skeleton-rect">苦瓜推荐</text>
                                <text class="time skeleton-rect">{{item.time}}</text>
                            </view>
                        </view>
                        <view class="btn skeleton-radius" @click="share(item)">
                            <text class="icon">&#xe635;</text>
                            <text>分享</text>
                        </view>
                    </view>
                    <view class="text">
                        <view class="title skeleton-rect">
                            <text v-if="item.type === 'text'">{{item.content}}</text>
                            <text v-else v-html="item.content"></text>
                        </view>
                    </view>
                    <view class="img-list">
                        <view class="img skeleton-rect" v-for="(item2,i) in item.imgList" :key="i">
                            <image :src="item2" mode="widthFix" @click="showImg(item)"></image>
                        </view>

                    </view>
                </view>
            </view>
		</mescroll-uni>

    </view>
</template>

<script>
// import skeleton from "../../components/quick-skeleton/quick-skeleton.vue";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
import share from "@/common/share.js";
import {
    mapState
} from 'vuex';

export default {
    data () {
        return{
            mescroll: null, //mescroll实例对象
            upOption:{
                page: {
                // 	num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
                    size: 5, // 每页数据的数量
                },
                noMoreSize: 4, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
                empty:{
                tip: '~ 这里没有发现任何数据哦 ~', // 提示
                btnText: '返回首页'
                }
            },
            tipShow: false,
            showSkeleton: true,  //骨架屏显示隐藏
            isChoose: false,
            list: [
                {
                    content: "放大飒飒的发斯蒂芬2323323",
                    created_at: "0",
                    id: "2",
                    images: "https://img.alicdn.com/i3/2346106587/O1CN01CZhiNC1yWtQi0acMu_!!2346106587.jpg|https://img.alicdn.com/i2/2346106587/O1CN011yWtLTtr45bLUpL_!!2346106587.jpg|https://img.alicdn.com/i2/2346106587/O1CN01PZ6mrG1yWtPx4UsN3_!!2346106587.jpg",
                    imgList:[
                        'https://img.alicdn.com/i3/2346106587/O1CN01CZhiNC1yWtQi0acMu_!!2346106587.jpg',
                        'https://img.alicdn.com/i3/2346106587/O1CN01CZhiNC1yWtQi0acMu_!!2346106587.jpg',
                        'https://img.alicdn.com/i3/2346106587/O1CN01CZhiNC1yWtQi0acMu_!!2346106587.jpg'
                    ],
                    status: "yes",
                    title: "哈哈哈哈333",
                    type: "text",
                    updated_at: "0"
                }
            ]
        }
    },
    components: {
        // skeleton,
        MescrollUni
    },
    onReady () {
        const that = this;
        that.$refs.skeleton.attachedAction();
        that.$refs.skeleton.readyAction();
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
        showM(){
            if(this.showModal){
                this.$refs.modal.showModal();
            }
        },
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
        emptyClick(){
        uni.switchTab({
            url: '/pages/index/index'
        });
        },
        async getListDataFromNet(pageNum,pageSize,successCallback,errorCallback) {
            try {
                const list = await this.$request.post("/share/propagation", {
                    data: {
                        page: pageNum,
                        page_size: pageSize,
                    }
                });

                for (const item of list.data.data) {
                    item.imgList = item.images.split('|')
                    item.time = this.$common.formatTime(item.created_at)
                }
                this.showSkeleton = false;

                successCallback && successCallback(list.data.data);
            } catch (error) {
                console.error("error:", error);
            }
        },
        // 一键分享
        share(item){
            let _this = this;

            item.imgList.map((value,key) => {
                uni.saveImageToPhotosAlbum({
                    filePath: value,
                    success: function () {
                        uni.showToast({
                            title: '图片保存成功',
                            icon: 'none',
                            position: 'bottom'
                        });
                    }
                });
            })

            let shareInfo={
                href: '',
                title: '',
                desc:"",
                imgUrl: item.imgList[0]
            };

            let copy = item.content

            this.shareObj=share(shareInfo,function(index){
                _this.$common.switchShare(index,shareInfo,copy)
            });
            this.$nextTick(()=>{
                this.shareObj.alphaBg.show();
                this.shareObj.shareMenu.show() ;
            })
        },
        showImg(item){
            console.log(item)
            // 预览图片
            uni.previewImage({
                urls: item.imgList
            });
        },
        choose (idx,index) {
            this.list[idx].imgList[index].isChoose = this.list[idx].imgList[index].isChoose?false:true;
        }
    },
}
</script>

<style lang="scss">
.share{
    .share-li{
        padding: $uni-spacing-col-base;
        background-color: $uni-bg-color;
        margin: 14upx;
        border-radius: 10upx;

        .header{
            display: flex;
            justify-content: space-between;
            border-bottom: 4upx solid #efefef;
            padding: 8upx 16upx;
            .left{
                display: flex;
                align-items: center;
                color: $uni-text-color;
                image{
                    height: 60upx;
                    width: 60upx;
                    border-radius: 50%;
                    margin-right: 8upx;
                }
                .use{
                    display: flex;
                    flex-direction: column;
                    line-height: 1.4;

                    .time{
                        color: $uni-text-color-placeholder;
                        font-size: 24upx;
                    }
                }
            }
            .btn{
                color: $uni-text-color;
                border: 2upx solid $uni-text-color;
                border-radius: 40upx;
                height: 50upx;
                line-height: 50upx;
                text-align: center;
                margin-left: 20upx;
                width: 130upx;
                padding-bottom: 2upx;

                .icon{
                    color: $uni-text-color;
                    margin-right: 5upx;
                }
            }
        }

        .text{
            display: flex;
            justify-content: space-between;
            margin: 20upx 10upx;

            .title{
                width: 680upx;
                color: $uni-text-color;
            }

        }
        .img-list{
            display: flex;
            flex-wrap: wrap;
            margin: 10upx;
            .img{
                position: relative;
                margin: 5upx;

                image{
                    width: 215upx;
                }

                .icon{
                    position: absolute;
                    font-size: 50upx;
                    right: 10upx;
                    top: 10upx;
                    opacity: .9;
                }

                .active{
                color: #f01426;
                }

                .noactive{
                    color: $uni-text-color;
                }
            }
        }
    }
}
</style>
