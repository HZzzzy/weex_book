/* global Vue */
import http from '../src/http'
import 'lodash'
weex.init(Vue)
Vue.prototype.$http = http
// Vue.prototype._ = _
/* weex initialized here, please do not move this line */
const router = require('./router')
const App = require('@/index.vue')
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App))
router.push('/')
