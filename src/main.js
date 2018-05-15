import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'config/axios'
import VueAxios from 'vue-axios'
import Es6Promise from 'es6-promise'
import KalixVueNavigate from 'kalix-vue-navigate'
import KalixVueCommon from 'kalix-vue-common'
import KalixVueBiz from 'kalix-vue-biz'
// import KalixVueOA from 'kalix-vue-oa'
import KalixVueAdmin from 'kalix-vue-admin'
import './element-ui'
import Tinymce from './components/Tinymce'
import Squire from './components/squire/Squire'
// Vue.use(ElementUI)

Es6Promise.polyfill()
Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(KalixVueCommon)
Vue.use(KalixVueBiz)
Vue.use(KalixVueNavigate)

// const router = KalixRouter(Vue)

Vue.component(Squire.name, Squire)
Vue.component(Tinymce.name, Tinymce)
// 全局加载方式
Vue.use(KalixVueAdmin)
// Vue.use(KalixVueOA)
// 异步加载方式
// let moduleArr = []
// Vue.use(KalixVueAdmin)
// moduleArr.push(Vue.prototype.$module)
// Vue.use(KalixVueOA)
// moduleArr.push(Vue.prototype.$module)
// Vue.prototype.$modulePlugins = moduleArr

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
