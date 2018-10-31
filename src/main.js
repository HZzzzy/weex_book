// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import http from './http'
import Vue from 'vue'

import { WxcSearchbar } from 'weex-ui'
require('smoothscroll-polyfill').polyfill()

// import 'es6-promise/auto'

function polyfill () {
  var local

  if (typeof global !== 'undefined') {
    local = global
  } else if (typeof self !== 'undefined') {
    local = self
  }
  local.Promise.prototype['finally'] = function (callback) {
    let P = this.constructor
    return this.then(
      value => P.resolve(callback()).then(() => value),
      reason => P.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
}
polyfill()

// 安装全局 weex-ui 组件
Vue.use(WxcSearchbar)

Vue.prototype.$http = http

Vue.config.productionTip = false

// progressBar
// const options = {
//   color: 'rgb(143, 255, 199)',
//   failedColor: 'red',
//   thickness: '3px'
// }

// router.beforeEach((to, from, next) => {
//   router.app.$Progress.start()
//   const shouldPrune = from.meta.isSubpage && ((from.meta.parentTitle || from.meta.title) === (to.meta.parentTitle || to.meta.title))

//   if (to.path !== '/') {
//     store.dispatch('addTab', {
//       tab: {
//         path: to.path,
//         name: to.name,
//         title: to.meta.parentTitle || to.meta.title
//       },
//       shouldPrune,
//       fromTabPath: from.path
//     }).then(() => next())
//   } else {
//     next()
//   }
// })

// router.afterEach(route => {
//   window.scrollTo(0, 0)
//   router.app.$Progress.finish()
//   document.title = route.meta.title ? `${route.meta.title} - 广而易平台管理系统` : '广而易平台管理系统'
// })

/* eslint-disable no-new */
// window.vm = new Vue({
//   el: '#app',
//   router,
//   store,
//   template: '<App/>',
//   components: { App }
// })
