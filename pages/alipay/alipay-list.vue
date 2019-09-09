<template>
  <div class="content">
    <view class="con">
      <view class="list" v-for="(item,index) in list" :key="item.id">
        <text class="icon default" v-if="item.default === 'yes'">&#xe61a;</text>
        <view class="center" @click="chageMobile(item.mobile,item.id,item.status)">
          <text class="name">
            <text>{{item.name}}</text>
            <text class="status" v-if="item.status === 'yes'">已启用</text>
            <text class="status stop" v-else>已停用</text>
          </text>
          <text class="mobile">{{item.account}}</text>
        </view>
        <text class="icon edit" @click="toEdit(item.id)">&#xe663;</text>
        <text class="icon del" @click="toDel(item.id,index)">&#xe6d2;</text>
      </view>
    </view>

    <navigator class="bottom" url="./alipay-add">新增支付宝账号</navigator>
  </div>
</template>

<script>
  import {
			mapState,
	} from 'vuex';
  export default {
    data(){
      return{
        list: []
      }
    },
    onShow(){
      this.sendRequest()
    },
    computed: {
			...mapState(['userInfo'])
		},
    methods: {
       async sendRequest(){
            try {
                const list = await this.$request.post('/payment/index', {
                    header:{
                      token: this.userInfo.token
                    }
                });

                this.list = list.data.data
                this.$common.checkStatus(list.data.code)
            } catch (error) {
                console.error('error:', error);
            }
        },
        toEdit(id){
          uni.navigateTo({
              url: `./alipay-edit?id=${id}`
          });
        },
        toDel(id,index){
          let _this = this
          uni.showModal({
              title: '提示',
              content: '是否要删除当前账号?',
              success: function (res) {
                  if (res.confirm) {
                    _this.delRequest(id,index)
                  } else if (res.cancel) {
                      console.log('用户点击取消');
                  }
              }
          });
        },
        async delRequest(id,index){
          let  _this = this
          try {
              const res = await _this.$request.post('/payment/remove-payment', {
                  data:{
                    Id: id
                  },
                  header:{
                    token: _this.userInfo.token
                  }
              });

              if(res.data.code === 0){
                _this.list.splice(index, 1);
              }

              _this.$common.checkStatus(res.data.code)
              _this.$common.returnMsg(res2.data.msg);
          } catch (error) {
              console.error('error:', error);
          }
        },
        chageMobile(mobile,id,status){
          if(status === 'no'){
            uni.showToast({
                title: '该账号已停用！',
                icon: 'none',
            });
          } else {
            uni.redirectTo({
                url: `../user/parnter/withdraw?mobile=${mobile}&id=${id}`
            });
          }
        }
    }
  }
</script>

<style lang="scss" scoped>
.con{
  margin-bottom: 140upx;
}
.list{
  background-color: $uni-bg-color;
  margin-top: 2upx;
  display: flex;
  position: relative;
  align-items: center;

  .default{
    color: $kg-text;
    font-size: 70upx;
    position: absolute;
    top: 0;
  }

  .center{
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    width: 520upx;
    margin: 12upx 0 12upx 100upx;

    .name{
      font-size: 40upx;
      letter-spacing: 8upx;
      font-weight: bold;
      color: $uni-text-color;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;


      .status{
        position: absolute;
        right: 50upx;
        top: 2upx;
        letter-spacing: 2upx;
        font-size: 24upx;
        border: 1upx solid #1cbbb4;
        border-radius: 10upx;
        margin-left: 20upx;
        color: #1cbbb4;
        padding: 5upx 8upx;
        font-weight: normal;

      }
      .stop{
        color: #8799a3;
        border-color: #8799a3;
      }
    }

    .mobile{
      color: $uni-text-color-placeholder;
    }
  }

  .edit{
    color: $uni-text-color-placeholder;
  }

  .del{
    color: $uni-text-color-placeholder;
    margin-left: 40upx;
  }
}

.bottom{
  position: fixed;
  background-color: $kg-text;
  color: $uni-text-color-inverse;
  border-radius: 20upx;
  line-height: 2.4;
  width: 580upx;
  height: 2.4;
  text-align: center;
  bottom: 26upx;
  left: 95upx;
  font-size: 36upx;
}
</style>
