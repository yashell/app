<template>
    <div class="page">
        <Head msg='我的考试'/>
        <div class="navlist">
            <ul :style="{ width: navList.length*6 +'rem'}">
                <li class="navli" v-for="(item,index) in navList" :key='item.id' :class="{'activeT':nowIndex===index}"
                    @click="tabClick(index)"><i>{{item.title}}</i>
                </li>
            </ul>
        </div>
        <div class="mainDiv">

            <div class="swiper-container swiper_con">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in navList" :key='item.id'>
                        <div class="swiper-main container" v-for="slip in item.child" :key='slip.id' @click="goDetails(slip.title)">
                            <img :src="slip.img"/>
                            <label>
                                <span class="fontB widthE">
                                        {{slip.title}}
                                    </span>
                                <span class="fontG widthE">
                                        {{slip.source}}
                                    </span>
                                <span class="fontH widthE">
                                        {{slip.date}}
                                    </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Swiper from "swiper"
    import 'swiper/dist/css/swiper.min.css';
    import Head from "@/components/Head.vue";

    export default {
        name: "swiper",
        data() {
            return {
                navList: [
                    {
                        title: '科目1', child: [
                            {
                                title: '人民领袖的边疆情怀-习近平总',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                            {
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                            {
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },{
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                            {
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },{
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },{
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },{
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },{
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },{
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            }
                        ]
                    },
                    {title: '科目2', child: [
                            {
                                title: '人民领袖的边疆情怀-习近平总',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                            {
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                        ]},
                    {title: '科目3', child: [
                            {
                                title: '人民领袖的边疆情怀-习近平总',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                            {
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                            {
                                title: '人民领袖的边疆情怀-习近平总',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                            {
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                        ]},
                    {title: '科目4', child: [
                            {
                                title: '人民领袖的边疆情怀-习近平总',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                            {
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                        ]},
                    {title: '科目5', child: [
                            {
                                title: '人民领袖的边疆情怀-习近平总',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            }
                        ]},
                    {title: '科目6', child: [
                            {
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                        ]},
                    {title: '科目7', child: [
                            {
                                title: '人民领袖的边疆情怀-习近平总',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                            {
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },{
                                title: '人民领袖的边疆情怀-习近平总',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                            {
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                        ]},
                    {title: '科目8', child: [
                            {
                                title: '人民领袖的边疆情怀-习近平总',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                            {
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },{
                                title: '人民领袖的边疆情怀-习近平总',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                            {
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },{
                                title: '人民领袖的边疆情怀-习近平总',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                            {
                                title: '人民领袖的边疆情怀-习近平总书记对云南人民的深情厚爱',
                                source: '云南省公安厅政治部',
                                date: '2019-02-12',
                                img: require('../assets/images/swiper1.jpg')
                            },
                        ]},
                ],
                nowIndex: 0,

            }
        },
        components: {
            Head
        },
        mounted() {
            const that = this;
            this.mySwiper = new Swiper('.swiper-container', {
                initialSlide: 0,
                autoplay: false,
                keyboardControl: true,
                autoHeight: true,
                observer: true,
                observeParents: true,
                onSlideChangeEnd:function(swiper){
                    that.nowIndex = swiper.activeIndex
                },
                onTouchEnd: function(swiper,event){
                },
                onSlideChangeStart:function(){
                }
            })
        },
        methods: {
            tabClick(index) {
                this.nowIndex = index
                this.mySwiper.slideTo(index, 1000, false)
            },
            goDetails(id){
                console.log('id', id)
            }
        },
    }
</script>
<style lang="scss" scoped>
    .x {
    }
</style>