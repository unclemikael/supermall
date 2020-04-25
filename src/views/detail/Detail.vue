<template>
  <div id="detail">
    <DetailNavBar class="detail-nav" @titleClick="titleClick" ref="navBar"></DetailNavBar>
    <Scroll class="content"
            ref="scroll"
            :probeType="3"
            @position="contentScroll"
    >
      <DetailSwiper :topImages="topImages" ref="swiper"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="imgeLoaded"></DetailGoodsInfo>

      <DetailParamInfo :paramInfo="paramInfo" ref="params"></DetailParamInfo>
      <DetailCommentInfo :commentInfo="commentInfo" ref="comment"></DetailCommentInfo>
      <GoodsList :goods="recommends" ref="recommend"></GoodsList>
    </Scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList"

import { getDetail, getRecommend, Goods, Shop, GoodsParam } from "network/detail";
import { debounce } from "common/utils";
import { itemListenerMixin } from "common/mixin"

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      debouce: null,
      currentIndex: 0
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    // 请求详情数据
    getDetail(this.iid).then(res => {
      // console.log(res.result);
      // 1.获取数据
      const data = res.result;
      // 2.顶部轮播数据
      this.topImages = data.itemInfo.topImages;

      // 3.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 4.创建店铺信息
      this.shop = new Shop(data.shopInfo);

      // 5.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 6.获取参数的信息
      this.paramInfo = new GoodsParam(data.itemParams)

      // 7.取出评论数据
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }

    })

    // 请求推荐数据
    getRecommend().then(res => {
      // console.log(res);
      this.recommends = res.data.list
    })

    // 给getThemeTopY赋值
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(this.$refs.swiper.$el.offsetTop)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - this.$refs.swiper.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - this.$refs.swiper.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - this.$refs.swiper.$el.offsetTop)

      console.log('ThemeTopY Refresh')
    }, 500)

  },
  mounted() {
    // const refresh = debounce(this.$refs.scroll.refresh, 500);
    // this.itemImgListemer =  () => {
    //   console.log('detail refresh');
    //   refresh();
    // }

    // this.$bus.$on("itemImageLoad", itemImgListemer)
  },
  destroyed() {
    // this.$bus.$off('itemImgLoad', this.itemImgListemer)
  },
  methods: {
    imgeLoaded() {
      // this.$refs.scroll.refresh()
      //scroll高度刷新
      this.refresh()
      //ThemeTopY高度刷新
      this.getThemeTopY()
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
    },
    // 更新currentIndex
    contentScroll(position) {
      // 1.获取y值
      let y = Math.abs(position.y)

      // 2.positionY和主题中进行对比
      let index = this.themeTopYs.length - 1;
      for(let i=0; i < index; i++) {
        if (y < this.themeTopYs[0] || i < index && y < this.themeTopYs[i+1] && y >= this.themeTopYs[i]
         || i == index && y > this.themeTopYs[i]) {

          index = i;
          break;
        }
      }
      // 发生改变时修改currentIndex
      if (index != this.currentIndex) {
        this.currentIndex = index
        this.$refs.navBar.currentIndex = this.currentIndex
      }

    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    Scroll,
    GoodsList
  },
  mixins: [itemListenerMixin]
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: white;
  height: 100vh;
}

.content {
  /* 空格不能少 */
  height: calc(100% - 44px);
  top:44px;
  position: absolute;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: white;
}
</style>
