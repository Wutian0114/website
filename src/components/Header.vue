<template>
  <div>
    <div :class="isScroll?'nav-header active':'nav-header'">
      <a class="header-logo" href="javascript:;"></a>
      <ul class="header-nav">
        <li><a href="#">首页</a></li>
        <li><a href="#">解决方案</a></li>
        <li><a href="#">关于我们</a></li>
        <li><a href="#">联系方式</a></li>
        <li><a href="#">申请试用</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isScroll: false
    }
  },
  mounted(){
    window.addEventListener('scroll', this.scrollHeader)
  },
  methods: {
    scrollHeader(){
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop > 50){
        this.isScroll = true;
      }else {
        this.isScroll = false;
      }
    }
  }
}
</script>

<style scoped>
.nav-header {
  height: 50px;
  background-color: rgba(0, 0, 0, .3);
  position: fixed;
  width: 100%;
  z-index: 99;
}
.nav-header.active {
  background-color: rgba(0, 0, 0, .7);
}
.nav-header .header-logo {
  float: left;
  width: 50px;
  height: 50px;
  margin-left: 50px;
  background: url(../assets/logo.png) no-repeat;
  background-size: 50px 50px;
}
.nav-header .header-nav {
  float: right;
  list-style: none;
  padding: 0;
  margin: 0 50px 0 0;
}
.nav-header .header-nav li {
  float: left;
}
.nav-header .header-nav li > a {
  display: inline-block;
  line-height: 50px;
  padding: 0 15px;
  text-decoration: none;
  color: #b1b1b1;
}
.nav-header .header-nav li:last-of-type > a {
  background-color: #32d28c;
  color: #fff;
}
.nav-header .header-nav li > a:hover {
  color: #fff;
}
</style>
