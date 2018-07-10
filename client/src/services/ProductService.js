import API from '@/services/API'


export default {
    fetchPosts () {
        return API().get('product')
    },
    addProduct (params) {
        return API().post('products', params)
    }
}