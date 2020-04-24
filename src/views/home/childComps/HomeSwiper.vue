<template>
  <div>
    <Swiper>
      <SwiperItem v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoaded">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return {
          isLoad: false
        }
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    imageLoaded() {
      if (!this.isLoad) {
         this.$emit('swiperImageLoad')
         this.isLoad = true
      }
    }
  }
};
</script>

<style scoped>
</style>
