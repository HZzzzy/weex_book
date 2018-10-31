<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="value-text">基础输入框</text>
      <wxc-searchbar ref="wxc-searchbar" @wxcSearchbarInputOnInput="test"></wxc-searchbar>
      <text class="value-text">{{value}}</text>
    <router-view/>
  </div>
</template>

<script>
import { WxcSearchbar } from 'weex-ui'
export default {
  name: 'App',
  data () {
    return {
      logo: 'src/static/images/logo.png',
      value: '',
      dataList: []
    }
  },
  methods: {
    test () {
      this.$http.get('apply/list').then(resp => {
        console.log('resp', resp.data)
        if (_.isEmpty(resp.data)) {
          console.log('yyyy')
        }
      }).catch(() => {
        console.log('error')
      })
      // var stream = weex.requireModule('stream')
      // stream.fetch({
      //   method: 'GET',
      //   url: 'http://localhost:8080/apply/list',
      //   type: 'json'
      // }, function (ret) {
      //   console.log('ret', ret)
      // }, function (response) {
      //   console.log(response)
      // })
      // this.$.http.get('/apply/list').then(res => {
      //   debugger
      //   this.dataList = res.data
      // })
    }
  },
  components: { WxcSearchbar }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 400px;
    height: 400px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
