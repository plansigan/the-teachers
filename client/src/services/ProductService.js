import API from '@/services/API.js'


export default {
    fetchProducts () {
        return API().get('productstype')
    },
    addProduct (params) {
        return API().post('productstype', params)
    }
}