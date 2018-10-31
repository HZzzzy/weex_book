import axios from 'axios'

let _ = require('lodash')
var modal = weex.requireModule('modal')
var instance = axios.create({
  baseURL: 'http://127.0.0.1:8080/',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    'If-Modified-Since': 'Thu, 01 Jun 1970 00:00:00 GMT' // 避免 IE10 返回 304
  },
  timeout: 1000 * 20
})

instance.interceptors.request.use(function (config) {
  config.url = encodeURI(config.url)
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

instance.interceptors.response.use((resp) => {
  if (_.isString(resp.data)) {
    return Promise.reject(new Error('解析异常'))
  } else {
    return Promise.resolve(resp)
  }
}, (error) => {
  if (error.response && error.response.data) {
    if (error.response.data.code === 0) {
      modal.alert({
        message: 'error.response.data.content',
        duration: 0.3
      })
    } else {
      modal.alert({
        message: '服务器忙，请稍候再试...',
        duration: 0.3
      })
    }
  }
  return Promise.reject(error)
})

export default instance
