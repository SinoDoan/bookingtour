import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import AppLayout from './layout/index.vue'
import router from './router'
import store from './store'
import setGlobalHelpers from './global.helpers'
 
import './mixins'
import './plugins'
import './assets/css/app.scss'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import 'bootstrap/dist/css/bootstrap.css'
import vuetify from './plugins/vuetify'
import 'bootstrap-vue/dist/bootstrap-vue.css'

setGlobalHelpers()
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  name: 'Root',
  router,
  store,

  mounted () {
    store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth)
    window.addEventListener('resize', () => store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth))
  },

  beforeDestroy () {
    window.removeEventListener('resize', () => store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth))
  },

  vuetify,
  render: h => h(AppLayout)
}).$mount('#app')
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

 