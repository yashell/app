<template>
  <div id="app" class="allpage">
    <div class="main">
      <router-view/>
    </div>

    <div class="nav">
      <router-link class="navItem" to="/" ><img src="./assets/images/nav1.png">首页</router-link>
      <router-link class="navItem" to="/study" ><img src="./assets/images/nav2.png">我的学习</router-link>
      <router-link class="navItem" to="/practice" ><img src="./assets/images/nav3.png">我的练习</router-link>
      <router-link class="navItem" to="/exam" ><img src="./assets/images/nav4.png">我的考试</router-link>
      <router-link class="navItem" to="/about" ><img src="./assets/images/nav5.png">我的信息</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .x {
  }
</style>
