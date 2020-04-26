import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = null
      // 查看商品是否已经存在
      for (let item of context.state.cartList) {
        if (item.iid == payload.iid) {
          oldProduct = item
          break
        }
      }
      // let oldProduct = state.cartList.find(item => item.iid == payload.iid)

      if (oldProduct != null) {
        // 当前的商品数量+1
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前的商品数量+1')
      } else {
        // 添加新商品
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve('添加新商品')
      }
    })

  }
}
