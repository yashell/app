import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'



import Study from './views/Study.vue'
import Practice from  './views/Practice.vue'
import Exam from './views/Exam.vue'
import About from './views/About.vue'



Vue.use(Router)

export default new Router({
  // mode: 'has',
  base: process.env.BASE_URL,
  linkActiveClass:'',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/study',
      name: 'study',
      component: Study,
    },
    {
      path: '/practice',
      name: 'practice',
      component: Practice,
    },
    {
      path: '/exam',
      name: 'exam',
      component: Exam
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }

  ]
})
