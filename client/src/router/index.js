import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

//welcome
import Welcome from '@/components/Welcome.vue'
//login
import login from '@/components/Login.vue'

// product
import products from '@/components/Product/Products'
import newProduct from '@/components/Product/newProduct.vue'
import viewProduct from '@/components/Product/viewProduct.vue'

// product type
import manageProductTypes from '@/components/ProductType/ProductTypes.vue'

//orderForm component
import orderForm from '@/components/OrderForm/OrderForm.vue'

//upload (this is usually for debugging the component and not used FOR DISPLAYING)
import imageUpload from '@/components/ComponentElement/Upload/image.vue'

//search component
import search from '@/components/ComponentElement/Search/search.vue'

//sidebar component
import sideBar from '@/components/ComponentElement/sideBar/sideBar.vue'

//frontPage components
import frontMain from '@/components/frontPage/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'welcome',
      component:Welcome
    },
    {
      path:'/login',
      name:'login',
      component: login
    },
    {
      path: '/Main',
      name: 'Main',
      component:Main,
      children:
      [
        {
        path:'products',
        component:products
        },
        {
          path:'newProduct',
          component:newProduct
        },
        {
          path: 'viewProduct/:id',
          component: viewProduct
        }
      ]
    },
    {
      path:'/Home',
      name:'Home',
      component: frontMain
    },
    {
      path:'/orderForm',
      name:'orderForm',
      component: orderForm
    },
    { path: "*", redirect:'/Home' }
    // {
    //   path: '/newProduct',
    //   name: 'newProduct',
    //   components: newProduct,
    //   sideBar
    // },
    // {
    //   path: '/viewProduct/:id',
    //   name: 'viewProduct',
    //   component: viewProduct
    // },
    // {
    //   path: '/manageProductTypes',
    //   name: 'manageProductTypes',
    //   component: manageProductTypes
    // },
    // //Component Element
    // {
    //   path: '/imageUpload',
    //   name: 'imageUpload',
    //   component: imageUpload
    // },
    // {
    //   path: '/search',
    //   name: 'search',
    //   component: search
    // }
  ]
})
