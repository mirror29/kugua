<template>
  <div>
    <view class="view" :class="toggle?'animation':'animation-back'" >
      <image :src="item.photoUrl" mode=""></image >
      <!-- <image src="/static/images/wx.png"></image> -->
      <text>{{item.text}}</text>
    </view>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        item: '',
        toggle: false,
        url: ''
      }
    },
    methods: {
      async sendRequest() {
        const list = await this.$request.post('/promote/index',{})
        let listArr = list.data.data
        let i = 0;

        setInterval(() => {
          i++
          for (const item of listArr) {
            this.item = listArr[i]
            let photoUrl = listArr[i].photo.replace(" ", "%20");
            this.item.photoUrl = `https://www.kuguayouhui.com${photoUrl}`
            // console.log(this.item.photoUrl)
            this.toggle = true
            setTimeout(() => {
              this.toggle = false
            }, 3400);
          }
        }, 7000);
      }
    },
  }
</script>

<style lang="scss" scoped>
.animation{
  animation:mymove 3.5s ease;
  -webkit-animation:mymove 3.5s ease; /*Safari and Chrome*/
  opacity:.9;
}
@keyframes mymove
{
from {opacity:0;top:480upx;}
to {opacity:.9;top:400upx;}
}

@-webkit-keyframes mymove /*Safari and Chrome*/
{
from {opacity:0;top:480upx;}
to {opacity:.9;top:400upx;}
}
.animation-back{
  opacity:0;
  animation:mymove2 1.5s ease;
  -webkit-animation:mymove2 1.5s ease; /*Safari and Chrome*/
}
@keyframes mymove2
{
from {opacity:.9;top:400upx;}
to {opacity:0;top:480upx;}
}

@-webkit-keyframes mymove2 /*Safari and Chrome*/
{
from {opacity:.9;top:400upx;}
to {opacity:0;top:480upx;}
}
.view{
  position: fixed;
  left: 0;
  border-radius:0 40upx 40upx 0 ;
  width: 600upx;
  background-color: rgb(54, 54, 54);
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 10upx 0;

  image{
    height: 40upx;
    width: 40upx;
    border-radius: 50%;
    margin-left: 10upx;
  }

  text{
    font-size: 20upx;
    color: #fff;
    // transform: scale(0.9);
    margin-left: 10upx;
    width: 600upx;
  }
}
</style>
