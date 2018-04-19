import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'config/axios'
import VueAxios from 'vue-axios'
import Es6Promise from 'es6-promise'
import KalixVueNavigate from 'kalix-vue-navigate'
import KalixVueCommon from 'kalix-vue-common'
import KalixVueAdmin from 'kalix-vue-admin'
import './element-ui'

Es6Promise.polyfill()
Vue.config.productionTip = false
Vue.use(KalixVueCommon)
Vue.use(VueAxios, axios)
Vue.use(KalixVueNavigate)
Vue.use(KalixVueAdmin)
// const router = KalixRouter(Vue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
