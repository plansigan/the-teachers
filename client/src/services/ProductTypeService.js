import API from '@/services/API.js'


export default {
    fetchTypes() {
        return API().get('productTypes')
    },
    addTypes(params) {
        return API().post('productTypes', params)
    },
    deleteType(params){
        return API().delete(`productTypes/delete/${params}`,params)
    }
}