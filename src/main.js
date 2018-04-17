import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'config/axios'
import VueAxios from 'vue-axios'
import Es6Promise from 'es6-promise'
import KalixVueNavigate from 'kalix-vue-navigate/src/lib/index'
import './element-ui'
import KalixVueCommon from 'kalix-vue-common'

Es6Promise.polyfill()
Vue.config.productionTip = false
Vue.use(KalixVueCommon)
Vue.use(VueAxios, axios)
Vue.use(KalixVueNavigate)
// const router = KalixRouter(Vue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
