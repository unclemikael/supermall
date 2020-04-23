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
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    // 创建
    this.scroll = new BScroll(this.$refs.wrapper, {
      scrollY: true,
      click: true,
      probeType: this.probeType,
    });
    // 监听滚动位置
    this.scroll.on("scroll", position => {
      this.$emit('position', position)
    });
    // 监听上拉加载


    this.scroll.scrollTo(0,0)
  },
  methods: {
    scrollTo(x=0, y=0, time=1000) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll.refresh()
    }
  }
};
</script>

<style scoped>
</style>
