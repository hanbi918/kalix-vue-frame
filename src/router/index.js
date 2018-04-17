import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Login from '@/components/login/login'
import Cache from 'kalix-vue-common/src/common/cache'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {path: '/:app', name: 'header', component: Home},
        {path: '/:app/:fun', name: 'navigater', component: Home}
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (Cache.get('id') === null && to.name !== 'login') {
    next({path: '/login'})
  }
  next()
})

export default router
