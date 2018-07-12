import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import products from '@/components/Products'
import newProduct from '@/components/newProduct.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/newProduct',
      name: 'newProduct',
      component: newProduct
    }
  ]
})
