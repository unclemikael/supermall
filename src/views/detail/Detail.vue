<template>
  <div id="detail">
    <DetailNavBar></DetailNavBar>
    <DetailSwiper :topImages="topImages"></DetailSwiper>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import { getDetail } from 'network/detail'
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: []
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      // 1.顶部轮播数据
      this.topImages = res.result.itemInfo.topImages

    })
  },
  components: {
    DetailNavBar,
    DetailSwiper
  }
};
</script>

<style scoped>
</style>
