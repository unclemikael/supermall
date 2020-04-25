import { debounce } from "./utils"

export const itemListenerMixin = {
  data() {
    return {
      itemImgListemer: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.itemImgListemer = () => {
      refresh();

      console.log(this.$el.id, 'scrollRefresh');
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
