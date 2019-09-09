<template>
  <view>
    <view class="content">
      <!-- 主体 -->
      <view class="main">
        <view class="tips">请绑定您的支付宝账号。</view>
        <view class="main-list oBorder">
          <text>真实姓名：</text>
          <input class="main-input" type="text" v-model="nameData" placeholder="请输入您的真实姓名" />
        </view>
        <!-- <view class="main-list oBorder">
          <text>身份证号：</text>
					<input
						class="main-input"
						type="number"
						v-model="identityData"
						placeholder="请输入您的身份证号"
					/>
        </view>-->
        <view class="main-list oBorder">
          <text>支付宝账号：</text>
          <input
            class="main-input"
            v-model="phoneData"
            placeholder="请输入支付宝账号"
          />
        </view>
        <view class="main-list oBorder">
          <text>验证码：</text>
          <input class="main-input" type="number" v-model="verCode" maxlength="4" placeholder="验证码" />
          <view
            :class="['vercode',{'vercode-run': second>0}]"
            @tap="getVerCode()"
          >{{ getVerCodeSecond }}</view>
        </view>
        <view class="cu-form-group main-list oBorder">
          <view class="title">是否启用该账号</view>
          <switch
            class="orange radius"
            @change="SwitchD"
            :class="switchD?'checked':''"
            :checked="switchD?true:false"
          ></switch>
        </view>
        <checkbox-group class="block" @change="CheckboxChange">
          <view class="default">
            <checkbox
              class="red radio"
              :class="checkbox?'checked':''"
              :checked="checkbox?true:false"
              value="A"
            ></checkbox>
            <view class="title">设为默认</view>
          </view>
        </checkbox-group>
      </view>

      <button class="dlbutton buttonBorder" @tap="startBind()">确定</button>
    </view>
  </view>
</template>

<script>
var _this, countDown;
import { mapState } from "vuex";

export default {
  data() {
    return {
      phoneData: "", //支付宝账号
      nameData: "", //姓名
      identityData: "", //身份证号
      second: 0, //倒计时
      verCode: "", //验证码
      switchD: true,
      checkbox: true,
    };
  },
  mounted() {
    _this = this;
    clearInterval(countDown); //先清理一次循环，避免缓存
  },
  computed: {
    ...mapState(["userInfo"]),
    getVerCodeSecond() {
      //验证码倒计时计算
      if (this.second <= 0) {
        return "获取验证码";
      } else {
        if (this.second < 10) {
          return "0" + this.second;
        } else {
          return this.second;
        }
      }
    }
  },
  methods: {
    async getVerCode() {
      //获取验证码
      if (_this.second > 0) {
        return false;
      }
      const res = await this.$request.post("sms/index", {
        data: {
          mobile: this.userInfo.mobile
        },
        header: {
          token: this.userInfo.token
        }
      });

      this.$common.checkStatus(res.data.code);
      this.$common.returnMsg(res.data.msg);

      if (res.data.code === 0) {
        _this.second = 60;
        countDown = setInterval(function() {
          _this.second--;
          if (_this.second == 0) {
            clearInterval(countDown);
          }
        }, 1000);
      }
    },
    async startBind() {
      //绑定支付宝
      if (!(/^1[3456789]\d{9}$/.test(this.phoneData) || /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(this.phoneData))) {
        uni.showToast({
          icon: "none",
          position: "bottom",
          title: "支付宝账号为手机号/邮箱号"
        });
        return false;
      }
      if (this.phoneData.length === 0) {
          uni.showToast({
            icon: 'none',
            position: 'bottom',
            title: '请输入支付宝账号'
          });
          return false;
      }
      if (this.nameData.length === 0) {
        uni.showToast({
          icon: "none",
          position: "bottom",
          title: "请输入您的真实姓名"
        });
        return false;
      }
      // if (!this.identityData || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(this.identityData)) {
      //   uni.showToast({
      //       icon: 'none',
      //       position: 'bottom',
      //       title: '身份证号格式错误'
      //   });
      //   return false;
      // }
      if (this.verCode.length != 4) {
          uni.showToast({
              icon: 'none',
              position: 'bottom',
              title: '验证码不正确'
          });
          return false;
      }
        let status = this.switchD ? "yes" : "no";
        let defaul = this.checkbox ? "yes" : "no";
        try {
          const res = await this.$request.post("/sms/verify", {  //校验验证码
            data: {
              mobile: this.userInfo.mobile,
              code: this.verCode
            },
            header: {
              token: this.userInfo.token
            }
          });

          this.$common.checkStatus(res.data.code);

          if (res.data.code === 0) {
            const res2 = await this.$request.post("/payment/create-payment", {
              data: {
                account: this.phoneData,
                name: this.nameData,
                status: status,
                default: defaul
              },
              header: {
                token: this.userInfo.token
              }
            });

            this.$common.checkStatus(res2.data.code);
            this.$common.returnMsg(res2.data.msg, res2.data.code);
          } else {
            uni.showToast({
                title: res.data.msg,
                icon: 'none',
            });
          }
        } catch (error) {
          console.error("error:", error);
        }
      },
      SwitchD(e) {
        this.switchD = e.detail.value;
      },
      CheckboxChange(e) {
        this.checkbox = !this.checkbox;
      }
    }
};
</script>

<style lang="scss">
@import url("../login/css/main.css");
.main-list {
  background-color: #fff;
}
.default {
  display: flex;
  margin: 50upx 0 0 20upx;
  align-items: center;

  .title {
    font-size: 28upx;
    margin-left: 10upx;
  }
}
</style>

