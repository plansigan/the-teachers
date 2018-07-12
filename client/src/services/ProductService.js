import API from '@/services/API.js'


export default {
    fetchProducts () {
        return API().get('products')
    },
    addProduct (params) {
        return API().post('products', params)
    }
}