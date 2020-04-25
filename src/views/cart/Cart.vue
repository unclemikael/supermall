<template>
  <div id="Cart" class="cart">
    <NavBar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import { mapGetters } from 'vuex'

export default {
  name: "Cart",
  components: {
    NavBar
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
</style>
