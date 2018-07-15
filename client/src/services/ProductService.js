import API from '@/services/API.js'


export default {
    fetchProducts () {
        return API().get('products')
    },
    addProduct (params) {
        return API().post('products', params)
    },
    viewProduct(params){
        return API().get(`products/${params}`,params)
    },
    deleteProduct(params){
        return API().delete(`products/delete/${params}`)
    }
}