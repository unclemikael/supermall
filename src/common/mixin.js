import { debounce } from "./utils"

export const itemListenerMixin = {
  data() {
    return {
      itemImgListemer: null,
      refresh: null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 500);

    this.itemImgListemer = () => {
      this.refresh();

      console.log('#' + this.$el.id, 'Scroll Refresh Request');
    }

    this.$bus.$on("itemImageLoad", this.itemImgListemer)
  },
  destroyed() {
    // 取消全局事件监听
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  deactivated() {
    // 取消全局事件监听
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
}

import BackTop from "components/content/backTop/BackTop";
export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    // 返回（0, 0）
    backClick() {
      this.$refs.scroll.scrollTo();
    },
  },
  components: {
    BackTop
  }
}
