<template>
  <div class="">
    <Header></Header>
    <div class="main-content">
      <div id="home-sec"></div>
      <div id="solution-sec">
        <p>解决方案</p>
        <ul class="solution-items clearfix">
          <li v-for="item in solutions" :key="item.id">
            <h4 v-text="item.title"></h4>
            <p v-text="item.content"></p>
          </li>
        </ul>
      </div>
      <div id="aboutUs-sec"></div>
      <div id="contactUs-sec"></div>
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
      solutions: [
        {id:1, title: "方案一",content: "采用更先进的签证云处理技术，帮助机构更智能地填表，一次输入从此告别繁琐的复制粘贴操作，办签更高效，材料更规范。"},
        {id:2, title: "方案二",content: "采用更先进的签证云处理技术，帮助机构更智能地填表，一次输入从此告别繁琐的复制粘贴操作，办签更高效，材料更规范。"},
        {id:3, title: "方案三",content: "采用更先进的签证云处理技术，帮助机构更智能地填表，一次输入从此告别繁琐的复制粘贴操作，办签更高效，材料更规范。"},
        {id:4, title: "方案四",content: "采用更先进的签证云处理技术，帮助机构更智能地填表，一次输入从此告别繁琐的复制粘贴操作，办签更高效，材料更规范。"},
        {id:5, title: "方案五",content: "采用更先进的签证云处理技术，帮助机构更智能地填表，一次输入从此告别繁琐的复制粘贴操作，办签更高效，材料更规范。"}
      ]
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
#home-sec {
  height: 530px;
  background-color: gray;
}
#solution-sec > p {
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
}
#solution-sec .solution-items {
  list-style: none;
}
#solution-sec .solution-items li {
  float: left;
  width: 150px;
  height: 300px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #f2f3f5;
  margin-right: 10px;
}
#solution-sec .solution-items li h4{
  text-align: center;
}
#solution-sec .solution-items li p{
  font-size: 14px;
}
</style>
