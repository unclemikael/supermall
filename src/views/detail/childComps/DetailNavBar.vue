<template>
  <div>
    <NavBar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div  class="item"
              v-for="(title, index) in titles"
              :key="index"
              :class="{active: index == currentIndex}"
              @click="itemClcik(index)"
        >
          {{title}}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: 'DetailNavBar',
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    itemClcik(index) {
      this.currentIndex = index
    },
    backClick() {
      this.$router.back()
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 13px;
  }

  .item {
    flex: 1;
  }

  .active {
    color: var(--color-tint);
  }

  .back img {
    margin-top: 12px;
  }
</style>
