import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import Fastclick from 'fastclick'

import toast from 'components/common/toast'

Vue.config.productionTip = false

// 事件总线对象
Vue.prototype.$bus = new Vue()

// 安装自定义toast插件Vue.use()
Vue.use(toast)

// 解决移动端300ms延迟
Fastclick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
