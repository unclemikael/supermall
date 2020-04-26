<template>
    <div id="CheckButton">
      <div class="icon-selector" :class="{'check': checked}">
        <img src="~/assets/img/cart/tick.svg" alt="">
      </div>
    </div>
</template>

<script>
	export default {
		name: "CheckButton",
    props: {
		  value: {
		    type: Boolean,
        default: false
      }
    },
    data: function () {
		  return {
		    checked: this.value
      }
    },
    watch: {
		  value: function (newValue) {
        this.checked = newValue;
      }
    }
	}
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
    display: flex;
  }
  .check {
    background-color: #ff8198;
    border-color: #ff8198;

  }
</style>
