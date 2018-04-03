<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 全局css样式 */
#app {
  font-family: "Microsoft YaHei";
  font-size: 16px;
}
.clearfix::after {
  content: '';
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.sec-title {
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  border-bottom: 3px solid #32d28c;
  line-height: 50px;
  text-align: center;
}
</style>
