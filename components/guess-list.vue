<template>
  <div>
    <view class="guess-like">
        <view class="like-tit">— 猜你喜欢 —</view>
        <view class="like-con">
          <view class="like-li" v-for="(item,index) in list" :key="index" @click="navToDetailPage(item.num_iid)">
            <image :src="item.images" lazy-load></image>
            <view class="like-foot">
                <text class="like-foot-tit">{{item.name}}</text>
                <view class="foot-con">
                    <view class="like-left">
                        <view class="like-le-price">原价￥{{item.price}}</view>
                        <view class="get-quan">
                          <image src="/static/images/icon/quan.png"></image>
                          <text class="like-le-quan">券<text>减{{item.couponAmount}}</text></text>
                        </view>
                    </view>
                    <view class="like-right">
                        <text class="like-ri-price">券后价￥{{item.discountPrice}}</text>
                        <text class="like-sales">销量{{item.volume}}</text>
                    </view>
                </view>
            </view>
          </view>
        </view>
      </view>
  </div>
</template>

<script>
  export default {
    props:{
      list: Array
    },
    methods: {
      //详情页
      navToDetailPage(oid) {
          let id = oid;
          uni.navigateTo({
              url: `/pages/product/detail-tao?num_iid=${id}`
          });
      },
    },
  }
</script>

<style lang="scss" scoped>
/* 猜你喜欢 */
.guess-like {
  .like-tit {
    background-color: $uni-bg-color;
    padding: $uni-spacing-col-base;
    margin-bottom: $uni-spacing-row-sm;
    text-align: center;
    color: #ff6b06;
  }
  .like-con {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 $uni-spacing-col-sm;

    .like-li {
      margin: 8upx 0;
      background-color: $uni-bg-color;
      width: 362upx;
      border-radius: 10upx;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

      image {
        width: 362upx;
        height: 330upx;
      }

      .like-foot {
        padding: $uni-spacing-row-sm;
        line-height: $line-height;

        .like-foot-tit {
          font-size: 26upx;
          color: #363636;
          @include ellipsis-2;
        }

        .foot-con {
          display: flex;
          justify-content: space-between;
          padding-top: 10upx;
          margin-top: 10upx;
          border-top: 1px solid #efefef;

          .like-left {
            width: 260upx;
            line-height: 1.5;
            .like-le-price {
              font-size: 28upx;
            }

            .get-quan{
              position: relative;

              image{
                height: 40upx;
                width: 132upx;
              }

              .like-le-quan {
                position: absolute;
                top: 2upx;
                left: 9upx;
                border-radius: 10upx;
                font-size: 24upx;
                // border: 1upx solid #efefef;
                // background-color: #ff6b06;
                color: $uni-text-color-inverse;
                padding-left: 6upx;

                text {
                  background-color: $uni-bg-color;
                  color: #ff6b06;
                  padding: 1upx 6upx;
                  margin-left: 4upx;
                }
              }
            }
          }

          .like-right {
            display: flex;
            flex-direction: column;
            text-align: right;
            width: 260upx;
            line-height: 1.8;
            font-size: 28upx;

            .like-ri-price {
              font-size: 26upx;
              color: #e62f17;
            }

            .like-sales {
              font-size: 24upx;
              color: $uni-text-color-grey;
            }
          }
        }
      }
    }
  }
}
</style>
