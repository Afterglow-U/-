import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login',
  }, {
    path: '/login',
    component: () => import( /* webpackChunkName: "about" */ 'components/Login.vue'),
    meta: {
      title: '欢迎登录'
    }
  },
  {
    path: '/home',
    component: () => import( /* webpackChunkName: "about" */ 'views/home/Home.vue'),
    meta: {
      title: '首页'
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导航守卫，beforeEach钩子函数改变路由的标题
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

export default router
