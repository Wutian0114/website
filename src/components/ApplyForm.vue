<template>
  <div>
    <Header></Header>
    <div class="main-sec">
      <form>
        <div class="inputItem">
          <label for="nameId">姓名</label>
          <input type="text" id="nameId" name="name">
        </div>
        <div class="inputItem">
          <label for="mobileId">手机</label>
          <input type="text" id="mobileId" name="mobile">
        </div>
        <div class="inputItem">
          <label for="addressId">公司地址</label>
          <input type="text" id="addressId" name="address">
        </div>
      </form>
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
  padding: 100px 0;
  background-color: rgba(0, 0, 0, .7);
}
.main-sec form {
  width: 30%;
  margin: 0 auto;
  padding: 20px 20px 0 20px;
  border: 1px solid #1d253c;
  background-color: #ffffff;
  border-radius: 10px;
}
.main-sec form .inputItem {
  padding-bottom: 30px;
}
.main-sec form .inputItem input {
  float: right;
  width: 50%;
  height: 22px;
}
</style>
