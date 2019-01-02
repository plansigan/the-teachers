import Vuex from 'vuex'
import Vue from 'vue'

//import modules
import product from './modules/product.js'
import productType from './modules/productType.js'
import site from './modules/site.js'
import user from './modules/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product,
    productType,
    site,
    user
  }
})
