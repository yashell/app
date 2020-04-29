<template>
    <div class="page">
        <Head msg='我的信息'/>
        <div class="mainDiv">
            <div class="about_head">
                <img src="../assets/images/swiper1.jpg">
                <label>
                    <span class="fontD widthD">姓名：XXX</span>
                    <span class="fontD widthD">姓名：XXX</span>
                    <span class="fontD widthD">姓名：XXX</span>
                </label>
            </div>

            <div class="about_main">
                <div class="list-item">
                    <img class="item-image" src="../assets/images/chart.png">
                    <router-link class="item-text" to="/user/UserInfo">服务平台</router-link>
                    <img class="item-image" src="../assets/images/right.png">
                </div>
                <div class="list-item-line"></div>
                <div class="list-item">
                    <img class="item-image" src="../assets/images/aboutus.png">
                    <router-link class="item-text" to="/user">关于我们</router-link>
                    <img class="item-image" src="../assets/images/right.png">
                </div>
                <div class="list-item-line"></div>
                <div class="list-item">
                    <img class="item-image" src="../assets/images/set.png">
                    <router-link class="item-text" to="/user">系统设置</router-link>
                    <img class="item-image" src="../assets/images/right.png">
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import Head from "@/components/Head.vue";

    export default {
        name: "about",
        data: function () {
            return {};
        },
        components: {
            Head
        },
    };
</script>
<style lang="scss" scoped>
    .x {
    }
</style>
