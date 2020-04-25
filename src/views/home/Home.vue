<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <TabControl
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl2"
      v-show="isTabFixed"
    >
    </TabControl>

    <Scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @position="contenetScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad"></HomeSwiper>
      <RecommendView :recommends="recommends"></RecommendView>
      <FeatureView></FeatureView>
      <TabControl
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl1"
      >
      </TabControl>

      <GoodsList :goods="showDiffGoods"></GoodsList>
    </Scroll>

    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import Backtop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";
import { itemListenerMixin, backTopMixin } from "common/mixin"

export default {
  name: "Home",
  mixins: [itemListenerMixin, backTopMixin],
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  computed: {
    showDiffGoods() {
      return this.goods[this.currentType].list;
    }
  },
  activated() {
    //time 调成0 会有奇怪的情况
    this.$refs.scroll.scrollTo(0, this.saveY, 1)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    // 1.保存Y值
    this.saveY = this.$refs.scroll.getScrollY()
    // 2.取消全局事件监听
    // this.$bus.$off('itemImgListener', this.itemImgListener)
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();

    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //监听item中图片加载完成
    // 并刷新BSScroll
    // const refresh = debounce(this.$refs.scroll.refresh, 500);
    // this.itemImgListener = () => {
    //   refresh();
    // }
    // //             $emit事件                执行方法
    // this.$bus.$on("itemImageLoad", this.itemImgListener);
  },
  methods: {
    /*
     *事件监听相关
     */
    tabClick(index) {
      const goodType = ["pop", "new", "sell"];
      this.currentType = goodType[index];
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // backClick() {
    //   this.$refs.scroll.scrollTo();
    // },
    contenetScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;

      // 2.决定tabControl是否吸顶(position:fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      // 2.获取tabControl的offsetTop
      this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop
      // console.log(this.$refs.tabControl.$el.offsetTop);
    },
    /*
     * 网络请求相关
     */
    // 1.请求多个数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res.data.banner.list.length);
        // console.log(res.data.recommend.list.length);

        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 2.请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          return res;
        })
        .then(res => {
          this.$refs.scroll.finishPullUp();
        });
    }
  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: white;

/* 使用原生滚动时 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

.tab-control {
  position: relative;
  z-index: 9;
}

.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */

</style>
