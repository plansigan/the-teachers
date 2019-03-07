let UserService = require('@/services/UserService')
let router = require('@/routes/index.js')



const state = {
    idToken: null,
    userId: null,
    user: null,
    errors:[]
}

const mutations = {
    authUser (state, userData) {
        state.idToken = userData.token
        state.userId = userData.userId
    },
    'STORE_USER' (state, user) {
        state.user = user
    },
    clearAuthData(state){
        state.idToken = null
        state.userId = null
    }
}

 const actions = {
    setLogOutTimer({commit},expirationTime){
        setTimeout(()=>{
            commit('clearAuthData')
        },expirationTime)
    },
    registerUser({commit,dispatch},newUser){
        UserService.default.registerUser({
            email:newUser.email,
            username:newUser.username,
            password:newUser.password,
            terms:newUser.terms
        }).then(response => {
            if(response.data.success){
                commit('authUser',{
                    token:response.data.token,
                    userId:response.data.user.id
                })
                const now = new Date()
                const expirationDate = new Date(now.getTime() + response.data.user.expiresIn * 1000)
                localStorage.setItem('token',response.data.token)
                localStorage.setItem('userId',response.data.user.id)
                localStorage.setItem('expirationDate',expirationDate)
                commit('STORE_USER', response.data.user)
                dispatch('setLogOutTimer',response.data.user.expiresIn)
                router.default.push('/admin/products')
            }

            if(typeof(response.data.message) != 'undefined'){
                if(response.data.message.code == 11000){
                    alert('User already registered. please login')
                    router.default.push('/login')
                }
            }
            
        }).catch(err=>{
            console.log(err)
        })
    },
    loginUser({commit,dispatch},loginUser){
        UserService.default.loginUser({
            username:loginUser.username,
            password:loginUser.password,
        }).then(response => {
            if(response.data.success){
                commit('authUser',{
                    token:response.data.token,
                    userId:response.data.user.id
                })
                const now = new Date()
                const expirationDate = new Date(now.getTime() + response.data.user.expiresIn * 1000)
                localStorage.setItem('token',response.data.token)
                localStorage.setItem('userId',response.data.user.id)
                localStorage.setItem('expirationDate',expirationDate)
                commit('STORE_USER', response.data.user)
                dispatch('setLogOutTimer',response.data.user.expiresIn)
                router.default.push('/admin/products')
            } else {
                alert('Username or Password is incorrect');
            }if(response.data.success){
                state.loggedInUser = response.data
                router.default.push('/admin/products')
            }
        }).catch(err=>{
            console.log(err)
        })
    },
    tryAutoLogin({commit}){
        const token = localStorage.getItem('token')
        if(!token){
            return
        }
        const expirationDate = localStorage.getItem('expirationDate')
        const now = new Date()
        if(now <= expirationDate) {
            return
        }

        const userId = localStorage.getItem('userId')
        commit('authUser',{
            token:token,
            userId:userId
        })

        UserService.default.getUser(userId)
            .then(res=>{
                commit('STORE_USER',res.data)
            })
            .catch(err=>{console.log(err)})
        router.default.push('/admin/products')
    },
    logout({commit}){
        commit('clearAuthData')
        router.default.push('/login')
        localStorage.clear()
    },
 }

 const getters = {
    user (state) {
        return state.user
    },
    isAuthenticated(state){
        return state.idToken !== null
    }
 }

 export default {
     state,
     mutations,
     actions,
     getters
 }

