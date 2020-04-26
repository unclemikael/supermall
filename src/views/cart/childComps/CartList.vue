<template>
  <div class="cart-list">
    <scroll class="content" ref="srcoll">
      <CartListItem
        v-for="(item, index) in cartList"
        :key="index"
        :product="item"
      >
      </CartListItem>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";

import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  //监听属性 类似于data概念
  computed: {
    ...mapGetters(["cartList"])
  },

  activated() {
    this.$refs.srcoll.refresh();
  }
};
</script>
<style scoped>
.cart-list {
                    /* 顶部   底部   结算条 */
  height: calc(100vh - 44px - 48px - 40px);
}
.content {
  height: calc(100%);
  overflow: hidden;
}
</style>
