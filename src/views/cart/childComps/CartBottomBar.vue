<template>
  <div id="CartBottomBar" class="bottom-bar">
    <div class="check-content">
      <CheckButton class="check-buttom"></CheckButton>
      <span>全选</span>
    </div>

    <div class="price">合计： {{totalPrice}}</div>

    <div class="calculate">去计算：({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return item.price * item.count + preValue;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList.filter(item => {
        return item.checked;
      }).length;
    }
  },
  components: {
    CheckButton
  }
};
</script>

<style scoped>
.bottom-bar {
  position: relative;
  display: flex;

  height: 40px;
  line-height: 40px;

  background-color: #eee;

  font-size: 14px;
}

.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}

.check-buttom {
  height: 20px;
  width: 20px;
  line-height: 20px;
  margin-right: 5px;
}

.price {
  margin-left: 20px;
  flex: 1;
}

.calculate {
  width: 90px;
  background-color: red;
  color:#fff;
  text-align: center;
}
</style>
