<template>
  <div id="Cart" class="cart">
    <NavBar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>

    <!-- 商品列表 -->
    <CartList></CartList>
    <!-- 底部汇总 -->
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import CartList from "./childComps/CartList"
import CartBottomBar from "./childComps/CartBottomBar"

import { mapGetters } from 'vuex'

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters({
      cartLength: 'cartLength',
      cartList: 'cartList'
    })
  }
};
</script>

<style scoped>
.nav-bar {
  background: var(--color-tint);
  color: white;
  font-weight: 700;
}

/* .cart {
  height: 100vh;
} */
</style>
