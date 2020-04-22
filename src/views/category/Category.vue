<template>
  <div class="wrapper">
    <!-- <h2>分类</h2> -->
    <ul class="content">
      <li>ABC1</li>
      <li>ABC2</li>
      <li>ABC3</li>
      <li>ABC4</li>
      <li>ABC5</li>
      <li>ABC6</li>
      <li>ABC7</li>
      <li>ABC8</li>
      <li>ABC9</li>
      <li>ABC10</li>
      <li>ABC11</li>
      <li>ABC12</li>
      <li>ABC13</li>
      <li>ABC14</li>
      <li>ABC15</li>
      <li>ABC16</li>
      <li>ABC17</li>
      <li>ABC18</li>
      <li>ABC19</li>
      <li>ABC20</li>
      <li>ABC21</li>
      <li>ABC22</li>
      <li>ABC23</li>
      <li>ABC24</li>
      <li>ABC25</li>
      <li>ABC26</li>
      <li>ABC27</li>
      <li>ABC28</li>
      <li>ABC29</li>
      <li>ABC30</li>
      <li>ABC31</li>
      <li>ABC32</li>
      <li>ABC33</li>
      <li>ABC34</li>
      <li>ABC35</li>
      <li>ABC36</li>
      <li>ABC37</li>
      <li>ABC38</li>
      <li>ABC39</li>
      <li>ABC40</li>
      <li>ABC41</li>
      <li>ABC42</li>
      <li>ABC43</li>
      <li>ABC44</li>
      <li>ABC45</li>
      <li>ABC46</li>
      <li>ABC47</li>
      <li>ABC48</li>
      <li>ABC49</li>
      <li>ABC50</li>
      <li>ABC51</li>
      <li>ABC52</li>
      <li>ABC53</li>
      <li>ABC54</li>
      <li>ABC55</li>
      <li>ABC56</li>
      <li>ABC57</li>
      <li>ABC58</li>
      <li>ABC59</li>
      <li>ABC60</li>
      <li>ABC61</li>
      <li>ABC62</li>
      <li>ABC63</li>
      <li>ABC64</li>
      <li>ABC65</li>
      <li>ABC66</li>
      <li>ABC67</li>
      <li>ABC68</li>
      <li>ABC69</li>
      <li>ABC70</li>
      <li>ABC71</li>
      <li>ABC72</li>
      <li>ABC73</li>
      <li>ABC74</li>
      <li>ABC75</li>
      <li>ABC76</li>
      <li>ABC77</li>
      <li>ABC78</li>
      <li>ABC79</li>
      <li>ABC80</li>
      <li>ABC81</li>
      <li>ABC82</li>
      <li>ABC83</li>
      <li>ABC84</li>
      <li>ABC85</li>
      <li>ABC86</li>
      <li>ABC87</li>
      <li>ABC88</li>
      <li>ABC89</li>
      <li>ABC90</li>
      <li>ABC91</li>
      <li>ABC92</li>
      <li>ABC93</li>
      <li>ABC94</li>
      <li>ABC95</li>
      <li>ABC96</li>
      <li>ABC97</li>
      <li>ABC98</li>
      <li>ABC99</li>
      <li>ABC100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Category",
  data() {
    return {};
  },
  mounted() {
    const bscroll = new BScroll(document.querySelector(".wrapper"), {
      scrollY: true,
      probeType: 3,
      pullUpLoad: true
    });

    bscroll.on("scroll", position => {
      console.log(position);
    });

    bscroll.on("pullingUp", () => {
      console.log("上拉加载");
      bscroll.finishPullUp()
    })
  }
};
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: red;

  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>
