<template>
  <div>
    <web-view :webview-styles="webviewStyles" :src="url" @click="callback"></web-view>
  </div>
</template>

<script>
  import {
			mapState
	} from 'vuex';
  export default {
    data() {
        return {
            webviewStyles: {
                progress: {
                    color: 'rgb(26, 245, 197)'
                }
            },
            url: ''
        }
    },
    computed: {
			...mapState(['userInfo'])
    },
    mounted() {
      this.url = `https://oauth.taobao.com/authorize?response_type=code&client_id=25913425&redirect_uri=https://kuguayouhui.com/site/callback-pages?state=${this.userInfo.uid}&view=wap`
      console.log(this.url)
    }
  }
</script>

<style lang="scss" scoped>

</style>
