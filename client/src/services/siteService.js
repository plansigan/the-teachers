import API from '@/services/API.js'


export default {
    fetchSites() {
        return API().get('sites')
    },
    addSite(params) {
        return API().post('sites', params)
    },
    updateSite(params,id){
        return API().put(`sites/update/${id}`,params)
    },
    deleteSite(params){
        return API().delete(`sites/delete/${params}`,params)
    }
}