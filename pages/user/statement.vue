<template>
  <div class="content">
    <view>
      <view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-red"></text>
					<text class="text-xl text-bold">收益说明</text>
				</view>
			</view>
       <view class="description">
        <text>好友通过您的邀请码注册成为苦瓜优惠劵会员后，Ta即永久成为您的苦瓜优惠劵会员，未来Ta升级市场运营或领券下单时产生的消费佣金均计入您的账户中。</text>
       </view>
    </view>

    <view>
      <view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-blue"></text>
					<text class="text-xl text-bold">关于消费佣金</text>
				</view>
			</view>
      <view class="description">
        <text>(1)&nbsp;每月25日将结算上一个自然月确认收货的订单，未确认收货的订单将在下月25日结算，结算后的消费佣金将自动计入您的余额中，您可以通过绑定支付宝，微信随时申请提现，申请后收益将在48小时内到账；\n
              (2)&nbsp;当出现取消订单、退货退款、或者因订单异常等情况时，消费佣金将相应扣除，实际根据系统结算为准。</text>
      </view>
    </view>

    <view>
      <view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-pink"></text>
					<text class="text-xl text-bold">名词解析</text>
				</view>
			</view>
      <view class="description">
        <text>1. &nbsp;累计收益：累计结算的消费佣金；\n
              2. &nbsp;结算收入（上月佣金）：上个月内确认收货的订单收益，每月25日结算后，将累计到余额中；\n
              3. &nbsp;预估收入（本月佣金）：本月内创建的所有订单预估收益；\n
              4. &nbsp;预估收入（上月佣金）：上月内创建的所有订单预估收益；\n
              5. &nbsp;今日预估收入：今日所有订单预估收益；\n
              6. &nbsp;昨日预估收入：昨日所有订单预估收益；\n
              7. &nbsp;付款笔数：今天内所有付款的订单数量，包含有效订单和失效订单；\n
              8. &nbsp;失效订单：取消付款、退货退款、申请维权或因订单异常，均为失效订单；\n
              9. &nbsp;自然月：自然月是指每个月的1号到该月的最后一天。\n
        </text>
      </view>
    </view>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.content{
  background-color: $uni-bg-color;
  color: $uni-text-color;
  padding-bottom: 60upx;

  .description{
    font-size: 26upx;
    margin: 0 36upx;
    // width: 670upx;
  }
}
</style>
