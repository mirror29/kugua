<template>
    <view>
        <!-- 回到顶部组件 -->
        <view @click="backTop" class="top" v-show="topShow">
            <text class="icon">&#xe607;</text>
        </view>
    </view>
</template>

<script>
    export default {
        name: "top",
        props: {
            topShow: Boolean
        },
        methods: {
            backTop () {
                this.topShow = false;
                uni.pageScrollTo({
                    scrollTop: 0,
                    duration: 300
                });
            }
        },
    }
</script>

<style lang="scss" scoped>
.top{
    position: fixed;
    bottom: 140upx;
    right: 30upx;
    background-color: #000;
    opacity: .7;
    z-index: 900;
    text-align: center;
    width: 70upx;
    height: 70upx;
    border-radius: 50%;
    line-height: 70upx;
    text{
        color: #fff;
        font-size: 48upx;
    }
}

</style>
