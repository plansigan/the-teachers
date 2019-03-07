import API from '@/services/API.js'


export default {
    fetchProducts (auth) {
        return API().get('products',{headers:auth})
    },
    addProduct (params,auth){
        return API().post('products',params,{headers:auth})
    },
    viewProduct(params,auth){
        return API().get(`products/${params}`,{headers:auth})
    },
    deleteProduct(params,auth){
        return API().delete(`products/delete/${params}`,{headers:auth})
    },
    updateProduct(params,id) {
        return API().put(`products/update/${id}`, params)
    }
}