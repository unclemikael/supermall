import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

// 创建Store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      let oldProduct = null
      // 查看商品是否已经存在
      for (let item of state.cartList){
        if (item.iid == payload.iid) {
          oldProduct = item
        }
      }
      // let oldProduct = state.cartList.find(item => item.iid == payload.iid)

      if (oldProduct != null) {
        oldProduct.count += 1
      } else {
        payload.count = 1
        state.cartList.push(payload)
      }

    }
  }
})

export default store
