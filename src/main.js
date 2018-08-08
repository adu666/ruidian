/* eslint-disable no-new */
// main.js

// 导入Vue，这个是必需的，在使用Vue之前，必须先导入
import Vue from 'vue'
// 导入 vue-router，并使用
import VueRouter from 'vue-router'
import Homeworklist from './pages/Homeworklist'
import Correct from './pages/Correct'
import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(VueRouter)
// 定义路由配置
const routes = [

  {
    path: '/',
    component: Homeworklist
  },
  {
    path: '/Correct',
    component: Correct

  }
]

// 创建路由实例
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 创建 Vue 实例
new Vue({
  el: '#app',
  data () {
    return {
      transitionName: 'slide'
    }
  },
  router,
  watch: {
    // 监视路由，参数为要目标路由和当前页面的路由
    '$route' (to, from) {
      const toDepth = to.path.substring(0, to.path.length - 2).split('/').length
      const fromDepth = from.path.substring(0, from.path.length - 2).split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
      // 根据路由深度，来判断是该从右侧进入还是该从左侧进入
    }
  }
})
