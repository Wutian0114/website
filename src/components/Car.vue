<template>
  <div>
    <Header></Header>
    <div class="main-sec">
      <h3>汽车页面大致与签证相同，在这里不再描述。</h3>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.main-sec {
  padding-top: 50px;
  background-color: rgba(0, 0, 0, .7);
}
.main-sec h3 {
  margin: 0;
  padding: 50px 0;
  text-align: center;
  color: #ffffff;
}
</style>
