let ProductService = require('@/services/ProductService')

let productFn = {
  checkForm(product){
    if (product.title
      && product.description 
      && product.itemType
      && product.image
      && product.site
          ) {
        return true;
      }
    
      if (!product.title) {
        state.errors.push({
          title:'Name of product required.',
          subject:'name'
        });
      }
      if (!product.description) {
        state.errors.push({
          title:'Description required.',
          subject:'description'
        });
      }
      if (!product.itemType) {
        state.errors.push({
          title:'item type required.',
          subject:'itemType'
        });
      }
      if (!product.image) {
        state.errors.push({
          title:'image required.',
          subject:'image'
        });
      }
      if (!product.price) {
        state.errors.push({
          title:'price required.',
          subject:'price'
        });
      }
      if (!product.site) {
        state.errors.push({
          title:'Website required.',
          subject:'site'
        });
      }
      return false
  }
}

const state = {
  newProduct:[],
  products: [],
  product:[],
  errors:[]
}

const mutations = {
  'NEW_PRODUCT' (state,newProduct) {
    state.errors = []
    if(productFn.checkForm(newProduct)){
      ProductService.default.addProduct({
            title: newProduct.title,
            description: newProduct.description,
            itemType: newProduct.itemType,
            image:{name:newProduct.image.name,uploaded:newProduct.image.uploaded},
            price:newProduct.price,
            site:newProduct.site
        },{Authorization:localStorage.getItem('token')}).then((response)=>{
            alert(response.data.message)
            window.location.href = '/admin/products';
        })
        
    }
  },
  'GET_PRODUCTS' (state) {
    ProductService.default.fetchProducts({Authorization:localStorage.getItem('token')}).then(
      response => state.products = response.data.products
    )
  },
  'VIEW_PRODUCT' (state,id) {
    ProductService.default.viewProduct(id,{Authorization:localStorage.getItem('token')}).then(
        response => state.product = response.data.product
    )
  },
  'UPDATE_PRODUCT'(state,product){
    state.errors = []
    if(productFn.checkForm(product)){
        ProductService.default.updateProduct({
          title: state.product.title,
          description: state.product.description,
          itemType: state.product.itemType,
          image:{name:state.product.image.name,uploaded:state.product.image.uploaded},
          price:state.product.price,
          site:newProduct.site
      },product._id).then(()=>{
          alert('Product saved successfully')
          window.location.href = '/admin/products';
      })
    }
  },
  'DELETE_PRODUCT'(state){
    if(confirm('Are you sure you want to delete this product ?')){
      ProductService.default.deleteProduct(state.product._id,
        {Authorization:localStorage.getItem('token')}
        ).then((res)=>{
          console.log(res)
          window.location.href = '/admin/products';
      });
    }
  }

}

const actions = {
  newProductFn({commit},newProduct){
    commit('NEW_PRODUCT',newProduct)
  },
  getProducts({commit}){
    commit('GET_PRODUCTS');
  },
  viewProduct({commit},id){
    commit('VIEW_PRODUCT',id);
  },
  updateProduct({commit},id,product){
    commit('UPDATE_PRODUCT',id,product);
  },
  deleteProduct({commit},id){
    commit('DELETE_PRODUCT',id)
  }
}

const getters = {
  newProduct: state => {
    return state.newProduct;
  },
  products: state => {
      return state.products;
  },
  product: state =>{
      return state.product;
  },
  errors: state => {
    return state.errors;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
