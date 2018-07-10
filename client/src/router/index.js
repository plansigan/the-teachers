import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import productsSupplies from '@/components/Supplies'
import productsFood from '@/components/Foods'
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
      path: '/productsSupplies',
      name: 'productsSupplies',
      component: productsSupplies
    },
    {
      path: '/productsFood',
      name: 'productsFood',
      component: productsFood
    },
    {
      path: '/product/new',
      name: 'newProduct',
      component: newProduct
    }
  ]
})
