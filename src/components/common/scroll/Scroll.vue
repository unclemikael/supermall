<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {};
  },
  mounted() {
    const bscroll = new BScroll(this.$refs.wrapper, {
      scrollY: true,
      probeType: 3,
      pullUpLoad: true
    });

    bscroll.on("scroll", position => {
      console.log(position);
    });

    bscroll.on("pullingUp", () => {
      console.log("上拉加载");
      bscroll.finishPullUp();
    });
  }
};
</script>

<style scoped>
</style>
