import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import axios from 'config/axios'
import VueAxios from 'vue-axios'
import router from './router'
import Es6Promise from 'es6-promise'
import KalixVueNavigate from 'kalix-vue-navigate'
import './element-ui'

// Vue.use(ElementUI)

Es6Promise.polyfill()
Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(KalixVueNavigate)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
