
let errorFn = {
    errorFilter(subject){
        if(state.errors.filter(err => err.subject == subject)[0]){
            return {error:true}
        } 
    }
}

const state = {
    errors:''
}

const mutations = {
    'ERROR_FILTER'(subject){
        
    }
}

const actions = {
    errorFilter({commit},subject){
        commit('ERROR_FILTER',subject)
    }
}
const getters = {
    errors: state => {
        return state.error
    }
}


export default {
    state,
    mutations,
    actions,
    getters
};