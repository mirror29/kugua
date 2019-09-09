<template>
  <div>
    <list :list=list></list>
  </div>
</template>

<script>
  import List from "@/components/guess-list.vue"
  export default {
    data(){
      return{
        list: ''
      }
    },
    components: {
      List
    },
    onReady(){
      this.sendRequest();
    },
    methods: {
      async sendRequest() {
        let net = ''
        uni.getNetworkType({  //检测网络
            success: function (res) {
                console.log(res.networkType);
                if(res.networkType === 'wifi'){
                  net = 'wifi'
                } else {
                  net = 'cell'
                }
            }
        });
        let os = ''
        uni.getSystemInfo({
            success: function (res) {
                os = res.platform
            }
        });
        const list = await this.$request.post("/product/guess-like", {
            data: {
                os: os,
                // ua: '',
                net: net,
                // ip: ''
            }
        });
        let listArr = []
        for (const item of list.data.data) {
            item.couponAmount = parseInt(item.couponAmount)
            listArr.push(item)
        }
        this.list = listArr
      },
    },
  }
</script>

<style lang="scss" scoped>
/deep/ .like-tit{
  display: none;
}
</style>
