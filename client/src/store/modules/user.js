let UserService = require('@/services/UserService')


const state = {
    newUSer:{},
    errors:[]
}

const mutations = {
    'REGISTER_USER'(state,newUSer) {
        UserService.default.registerUser({
            email:newUser.email,
            username:newUser.username,
            password:newUser.password,
            terms:newUSer.terms
        })
    }
}

 const actions = {
    registerUser({commit},newUser){
        commit('REGISTER_USER',newUser);
    }
 }

 const getters = {
    newUser: state => {
        return state.newUser;
    }
 }

 export default {
     state,
     mutation,
     actions,
     getters
 }

