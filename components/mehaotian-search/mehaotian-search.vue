<template>
  <view class="search" :style="{ backgroundColor: backgroundColor }">
    <view class="content" :style="{ 'border-radius': radius + 'px', border: border }">
      <view class="content-box" :class="{ center: mode === 2 }">
        <text class="icon icon-search">&#xe783;</text>
        <input
          confirm-type="search" @confirm="search()"
          class="input"
          :class="{ center: !active && mode === 2 }"
          :focus="isFocus"
          :placeholder="placeholder"
          v-model="inputVal"
          @focus="focus"
          @blur="blur"
        />
        <!-- <view v-if="!active && mode === 2" class="input sub" @click="getFocus">请输入搜索内容</view> -->
        <text v-if="isDelShow" class="icon icon-del" @click="clear">&#xe769;</text>
      </view>
      <view
        v-show="(active && show && button === 'inside') || (isDelShow && button === 'inside')"
        class="searchBtn"
        @click="search"
      >搜索</view>
    </view>
    <view
      v-if="button === 'outside'"
      class="button"
      :class="{ active: show || active }"
      @click="search"
    >
      <view class="button-item">{{ !show ? searchName : '搜索' }}</view>
    </view>
  </view>
</template>

<script>
import {
    mapState,
    mapMutations
} from 'vuex';
export default {
  props: {
    mode: {
      type: Number,
      default: 1
    },
    button: {
      type: String,
      default: "outside"
    },
    show: {
      type: Boolean,
      default: true
    },
    radius: {
      type: String,
      default: "60"
    },
    placeholder: {
      type: String,
    },
    backgroundColor: {
      type: String,
      default: "#fff"
    },
    border: { type: String, default: "1px #f5f5f5 solid" }
  },
  data() {
    return {
      active: false,
      inputVal: "",
      searchName: "取消",
      isDelShow: false,
      isFocus: true
    };
  },
  computed: {
    ...mapState(['searchHistory'])
  },
  methods: {
    ...mapMutations(['setHistory']),
    focus() {
      this.active = true;
    },
    blur() {
      this.isFocus = false;
      if (!this.inputVal) {
        this.active = false;
      }
    },
    clear() {
      this.inputVal = "";
      this.active = false;
      this.$emit("search", "");
    },
    getFocus() {
      this.isFocus = true;
    },
    search() {
      if (!this.inputVal || !this.placeholder){
        uni.navigateBack({
            delta: 1
        });
        return;
      }
      // console.log(this.inputVal);
      this.$emit("search", this.inputVal);
			let searchHistory = this.searchHistory;
			//只存储10个历史
			if (searchHistory.length >= 10) {
				searchHistory.pop ();
				searchHistory.unshift(this.inputVal);
			} else {
				searchHistory.unshift(this.inputVal);
			}
      this.setHistory(searchHistory)

      if(this.placeholder != ''){
        uni.navigateTo({
          url: `/pages/product/goods-list?key=${this.placeholder}`
        });
      } else {
        uni.navigateTo({
          url: `/pages/product/goods-list?key=${this.inputVal}`
        });
      }
    }
  },
  watch: {
    inputVal(newVal) {
      if (newVal) {
        this.searchName = "搜索";
        this.isDelShow = true;
      } else {
        this.searchName = "取消";
        this.isDelShow = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  width: 100%;
  border-bottom: 1px #f5f5f5 solid;
  box-sizing: border-box;
  padding: 15upx 25upx;
  font-size: $uni-font-size-base;
  background: #fff;
  .content {
    display: flex;
    align-items: center;
    width: 100%;
    // height: 75upx;
    border: 1px #ccc solid;
    background: #fff;
    overflow: hidden;
    transition: all 0.2s linear;
    border-radius: 30px;

    .content-box {
      width: 100%;
      display: flex;
      align-items: center;
      &.center {
        justify-content: center;
      }
      .icon {
        padding: 0 15upx;
        font-size: 38upx;
        color: $uni-color-subtitle;
        &.icon-del {
          font-size: 38upx;
          margin-right: 10upx;
        }
      }
      .input {
        width: 100%;
        max-width: 100%;
        height: 70upx;
        padding: 8upx;
        transition: all 0.2s linear;
        font-size: 30upx;
        color: $uni-text-color;
        &.center {
          width: 200upx;
        }
        &.sub {
          // position: absolute;
          width: auto;
          color: grey;
        }
      }
    }
    .searchBtn {
      height: 100%;
      flex-shrink: 0;
      padding: 0 30upx;
      background: #f5f5f5;
      line-height: 72upx;
      color: #fff;
      border-left: 1px #ccc solid;
      transition: all 0.3s;
    }
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-shrink: 0;
    width: 0;
    transition: all 0.2s linear;
    white-space: nowrap;
    overflow: hidden;
    color: $uni-text-color;
    &.active {
      padding-left: 15upx;
      width: 100upx;
    }
  }
}
</style>
