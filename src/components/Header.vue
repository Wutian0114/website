<template>
  <div>
    <div :class="isScroll?'nav-header active':'nav-header'">
      <a class="header-logo" href="javascript:;"></a>
      <ul class="header-nav">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li @mouseenter="showSolutionMore" @mouseleave="hideSolutionMore">
          <a href="javascript:;">解决方案</a>
          <ul :class="['solution-more',{active:isShowMore}]">
            <li>
              <router-link to="car">汽车销售系统</router-link>
            </li>
            <li>
              <router-link to="visa">签证云</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/">关于我们</router-link>
        </li>
        <li>
          <a href="#contactUs-sec">联系方式</a>
        </li>
        <li>
          <router-link to="apply">申请试用</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isScroll: false,
      isShowMore: false
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
    },
    showSolutionMore(){
      this.isShowMore = true;
    },
    hideSolutionMore(){
      this.isShowMore = false;
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
.nav-header .header-nav > li > a {
  display: inline-block;
  line-height: 50px;
  padding: 0 33px;
  text-decoration: none;
  color: #b1b1b1;
}
.nav-header .header-nav > li:last-of-type > a {
  background-color: #32d28c;
  color: #fff;
}
.nav-header .header-nav > li:nth-of-type(2) {
  position: relative;
}
.nav-header .header-nav > li > a:hover {
  color: #fff;
}
.nav-header .header-nav .solution-more {
  list-style: none;
  padding: 0;
  position: absolute;
  top: 49px;
  right: 0;
  width: 130px;
  height: 0;
  overflow: hidden;
  background-color: #ffffff;
  transition: height .5s;
}
.nav-header .header-nav .solution-more.active {
  height: 100px;
  border: 1px solid rgba(0, 0, 0, .7);
}
.nav-header .header-nav .solution-more > li > a {
  display: inline-block;
  line-height: 50px;
  text-decoration: none;
  color: #1d253c;
  width: 130px;
  text-align: center;
}
.nav-header .header-nav .solution-more > li > a:hover {
  background-color: #32d28c;
  color: #ffffff;
}
</style>
