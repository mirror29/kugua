<template>
	<view>
		<uni-collapse :accordion="true" @change="change">
			<uni-collapse-item v-for="item in accordion" :key="item.id" :title="item.title" :show-animation="item.animation" :thumb="item.icon" ref="UniCollapseItem" >
          <uni-collapse :accordion="true" @change="change2">
            <uni-collapse-item v-for="(item2,index) in item.child" :key="index" :title="item2.title" :show-animation="item2.animation" class="coll-item">
              <view class="content" v-html="item2.content"></view>
            </uni-collapse-item>
        	</uni-collapse>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'

	export default {
		components: {
			uniCollapse,
			uniCollapseItem,
			uniList,
			uniListItem
		},
		data() {
			return {
        index: 0,
				accordion: [{
						id: 0,
						title: '常见问题',
            animation: true,
            icon: '../../../static/images/icon/pro-1.png',
            child: [
              {
                title: '已确认收货的订单,为什么显示失效了？',
                animation: true,
                content: '这种是维权订单，是确认收货之后去申请售后进行退款了，属失效订单。'
              },{
                title: '有订单笔数却没有佣金显示？',
                animation: true,
                content: '这些订单为失效订单，苦瓜优惠劵APP在统计订单时是包含了失效订单。'
              }
            ]
					},
					{
						id: 1,
						title: '关于佣金',
            animation: true,
            icon: '../../../static/images/icon/pro-2.png',
            child: [
              {
                title: '什么时候可以提现？',
                animation: true,
                content: '每个月25号已结算的佣金收入，可以提现到支付宝账号，最低一元起提现。剩余的角分可累计到下个月。'
              },{
                title: '为什么下单后没有佣金？',
                animation: true,
                content: '1）买家使用了农村淘宝APP，一淘，集分宝 ，返利网 <br />2）买家使用了收藏夹或加入了购物车后，再购买 <br />3）买家手机或被安装了一些流氓软件，劫持了PID<br />4）买家网络所使用的DNS被污染，劫持了PID <br />5）买家所在地区宽带服务运营商劫持了PID <br />6）商家联系买家 拍另外一个没佣金链接 <br />7）买家切换了别的旺旺下单或找别的淘客转化了链接<br />8）淘宝数据同步到苦瓜优惠劵需要15分钟左右，即可查看到订单和佣金<br />9）买家使用了支付宝红包，淘金币等。'
              }
            ]
					},
					{
						id: 2,
						title: '关于优惠',
            animation: true,
            icon: '../../../static/images/icon/pro-3.png',
            child: [
              {
                title: '为什么领券提示优惠券已失效？',
                animation: true,
                content: '原因有二个：1）优惠券已被领完； 2）商家已取消宝贝优惠券。'
              },{
                title: '同一商品优惠券可以领多少次？',
                animation: true,
                content: '这个是商家设置的，有些同一淘宝账号只能领一次，有些可以领多次。'
              }
            ]
          },
          {
						id: 3,
						title: '关于分享',
            animation: true,
            icon: '../../../static/images/icon/pro-4.png',
            child: [
              {
                title: '怎么分享优惠券？',
                animation: true,
                content: '点击产品详情页，点击分享佣金，进入分享页，你可以直接复制淘口令给好友，也可以发送商品二维码海报给好友，只要用户购买您分享的产品，即可获得相应的佣金奖励。'
              }
            ]
					},
					{
						id: 4,
						title: '其它问题',
            animation: true,
            icon: '../../../static/images/icon/pro-5.png',
            child: [
              {
                title: '怎么邀请注册？',
                animation: true,
                content: '点击【我的】页面，进入【分享赚钱】页面，专属二维码海报包含您的邀请码信息，分享好友微信扫一扫，自动绑定关系，好友下载后点击微信登录则无需邀请码即可完成注册，并成为你的粉丝。'
              },{
                title: '为什么提现没有到账？',
                animation: true,
                content: '1）苦瓜优惠劵后台系统设置的支付宝账号跟实名信息不一致；<br />2）当支付宝账号是手机号，并且手机号绑定了多个支付宝，则可能会提现到其它账户上（请输入正确的支付宝账号）。'
              }
            ]
					}
				]
			}
		},
		methods: {
      change(e) {
        // console.log(e[0])
        this.index = e[0]
      },
      change2() {
        let index = this.index;
        let collapseItem = this.$refs.UniCollapseItem[index];
        setTimeout(() => {
          collapseItem._getSize();
        }, 160);
			}
		}
	}
</script>

<style lang="scss">
.coll-item /deep/ .uni-collapse-cell__title-text{
  padding-left: 30upx !important;
  font-size: 28upx;
}
.content{
  padding: 20upx 50upx;
}
</style>
