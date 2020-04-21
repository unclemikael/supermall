<template>
  <div>
    <TabBar>
      <TabBarItem path="/home" activeColor="deeppink">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="home" />
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="home" />
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category" activeColor="deeppink">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="category" />
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="category" />
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart" activeColor="deeppink">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="shopcart" />
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="shopcart" />
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="deeppink">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="profile" />
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="profile" />
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBarItem from "components/common/tabbar/TabBarItem";
import TabBar from "components/common/tabbar/TabBar";

export default {
  name: "MainTabBar",
  components: {
    TabBarItem,
    TabBar
  }
};
</script>

<style scoped>
</style>
