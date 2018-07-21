import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

// product
import products from '@/components/Product/Products'
import newProduct from '@/components/Product/newProduct.vue'
import viewProduct from '@/components/Product/viewProduct.vue'

// product type
import manageProductTypes from '@/components/ProductType/ProductTypes.vue'

//upload (this is usually for debugging the component and not used FOR DISPLAYING)
import imageUpload from '@/components/ComponentElement/Upload/image.vue'

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
    },
    {
      path: '/viewProduct/:id',
      name: 'viewProduct',
      component: viewProduct
    },
    {
      path: '/manageProductTypes',
      name: 'manageProductTypes',
      component: manageProductTypes
    },
    {
      path: '/imageUpload',
      name: 'imageUpload',
      component: imageUpload
    }
  ]
})
