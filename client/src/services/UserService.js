import API from '@/services/API.js'


export default {
    registerUser(params){
        return API().post('user/register',params)
    },
    loginUser(params){
        return API().post('user/login',params)
    },
    getUser(id){
        return API().get(`user/getUser/${id}`)
    }
}