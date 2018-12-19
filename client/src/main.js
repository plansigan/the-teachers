// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import App from './App'
import { routes } from './routes/index.js'
import store from './store/store.js'

// Adding semantic-ui to the system
require('semantic-ui-css/semantic.min.css')
require('semantic-ui-css/semantic.min.js')

// configure router
const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

Vue.prototype.urlServer = 'http://localhost:8081'// dev
// Vue.prototype.urlServer = 'https://the-teacher.herokuapp.com'// prod
