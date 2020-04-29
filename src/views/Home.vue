<template>
  <div class="page">
    <Head :msg=apptitle />

    <div class="mainDiv">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div :key="item" class="swiper-slide" v-for="(item) in imgList">
            <img :src="item" class="swiper-slide">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
        <!-- 如果需要滚动条 -->
        <!--<div class="swiper-scrollbar"></div>-->
      </div>

      <div class="container">
        <div class="container_item">
          <span class="fontA">姓名：XXX</span>
        </div>
        <div class="container_item">
          <span class="fontA">部门：XXXXXXXXXXX</span>
        </div>
      </div>

      <div class="container">
        <div class="container_item">
          <span class="fontB">我的学习进度</span>
        </div>
        <div class="container_item">
          <span class="fontC widthA">科目：XXX</span>
          <span class="fontC widthB">学习时长：XXX小时XX分钟</span>
        </div>
        <div class="container_item">
          <span class="fontC widthA">科目：XXX</span>
          <span class="fontC widthB">学习时长：XXX小时XX分钟</span>
        </div>
        <div class="container_item">
          <span class="fontC widthA">科目：XXX</span>
          <span class="fontC widthB">学习时长：XXX小时XX分钟</span>
        </div>
      </div>

        <div class="container">
            <div class="container_item">
                <span class="fontB">我的成绩排名</span>
            </div>
            <div class="container_item">
                <span class="fontC widthA">科目：XXX</span>
                <span class="fontC widthC">总人数：XX</span>
                <span class="fontC widthC">排名：30</span>
            </div>
            <div class="container_item">
                <span class="fontC widthA">科目：XXX</span>
                <span class="fontC widthC">总人数：XX</span>
                <span class="fontC widthC">排名：30</span>
            </div>
            <div class="container_item">
              <span class="fontC widthA">科目：XXX</span>
              <span class="fontC widthC">总人数：XX</span>
              <span class="fontC widthC">排名：30</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import store from '@/store.js';

  import Head from "@/components/Head.vue";



  import Swiper from "swiper"
  import 'swiper/dist/css/swiper.min.css';
  export default {
    store,
    name: "home",
    data: function() {
      return {
        apptitle: store.state.AppName,
        imgList: [require("../assets/images/swiper1.jpg"),require("../assets/images/swiper2.jpg"),require("../assets/images/swiper3.jpg"),require("../assets/images/swiper4.jpg")],
      };
    },
    components: {
      Head
    },
    mounted(){
      new Swiper('.swiper-container', {
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
        autoplay : 3000,
        loop : true,
        speed:2000,
        autoplayDisableOnInteraction: true,  // 用户操作swiper之后，是否禁止autoplay，默认为true
      })
    },
    methods: {
    }
  };
</script>
<style lang="scss" scoped>
  .x {
  }
</style>

