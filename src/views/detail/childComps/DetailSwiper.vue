<template>
  <Swiper class="detail-swiper">
    <SwiperItem v-for="(topImage, index) in topImages" :key="index">
      <img :src="topImage" alt />
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
