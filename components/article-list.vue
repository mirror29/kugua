<template>
  <div class="content">
    <navigator v-for="item in list" :key="item.id" class="list" @click="navToDetailPage(item.id)">
      <image :src="item.thumbnail || '/static/images/kugua.png'"></image>
      <view class="right">
        <text class="title">{{item.title}}</text>
        <text class="summary">{{item.summary}}</text>
        <text class="time">{{item.created_at}}</text>
      </view>
    </navigator>
  </div>
</template>

<script>
  export default {
      props: {
          list: Array
      },
      methods: {
          // 详情页
          navToDetailPage(oid) {
              let id = oid;
              uni.navigateTo({
                  url: `/pages/school/article?id=${id}`
              });
          },
      },
  }
</script>

<style lang="scss" scoped>
.content{
  .list{
    background-color: $uni-bg-color;
    margin: 2upx 0;
    display: flex;
    padding: 20upx;

    image{
      height: 140upx;
      width: 240upx;
    }

    .right{
      width: 480upx;
      display: flex;
      flex-direction: column;
      line-height: 1.5;
      margin-left: 8upx;

      .title{
        color: $uni-text-color;
        font-size: 34upx;
        @include ellipsis;
      }

      .summary{
        color: $uni-text-color-placeholder;
        font-size: 26upx;
        @include ellipsis;
      }

      .time{
        margin-top: 8upx;
        font-size: 28upx;
        color: $uni-text-color;
      }
    }
  }
}
</style>
