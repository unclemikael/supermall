import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  addCart(context, payload) {
    let oldProduct = null
    // 查看商品是否已经存在
    for (let item of context.state.cartList) {
      if (item.iid == payload.iid) {
        oldProduct = item
      }
    }
    // let oldProduct = state.cartList.find(item => item.iid == payload.iid)

    if (oldProduct != null) {
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      payload.count = 1
      context.commit(ADD_TO_CART, payload)
    }

  }
}
