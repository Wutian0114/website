<template>
  <div class="">
    <Header></Header>
    <div class="main-content">
      <div id="home-sec"></div>
      <div id="aboutUs-sec" class="clearfix">
        <p class="sec-title">关于我们</p>
        <div class="address-map">地图位置</div>
        <div class="company-info">
          <p>这里是公司的相关信息。这里是公司的相关信息。这里是公司的相关信息。这里是公司的相关信息。这里是公司的相关信息。这里是公司的相关信息。这里是公司的相关信息。这里是公司的相关信息。</p>
          <p>详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息</p>
        </div>
      </div>
      <div id="partner-sec" class="clearfix">
        <p class="sec-title">合作伙伴</p>
        <ul>
          <li><a href="https://anymod.com/" target="_blank"><img src="../assets/img/anymod.png"></a></li>
          <li><a href="https://chaitin.cn/en/" target="_blank"><img src="../assets/img/chaitin.png"></a></li>
          <li><a href="https://laravel.com/" target="_blank"><img src="../assets/img/laravel.png"></a></li>
          <li><a href="https://vueschool.io/" target="_blank"><img src="../assets/img/vueschool.png"></a></li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  data(){
    return {

    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
#home-sec {
  height: 530px;
  background-color: gray;
}
#aboutUs-sec,
#partner-sec {
  padding: 0 50px;
}
#aboutUs-sec .address-map,
#aboutUs-sec .company-info {
  float: left;
  width: 50%;
}
.sec-title {
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  border-bottom: 3px solid #32d28c;
  line-height: 50px;
  text-align: center;
}
#partner-sec ul > li {
  float: left;
  width: 25%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
#partner-sec ul > li a {
  vertical-align: middle;
  display: block;
  height: 50px;
}
#partner-sec ul > li img {
  width: 160px;
}

</style>
