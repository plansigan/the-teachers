import API from '@/services/API.js'


export default {
    registerUser(params){
        return API().post('user/register',params)
    }
}