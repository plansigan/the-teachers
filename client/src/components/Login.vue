<template>
    <div class="ui raised very padded text container segment centered">
         <h1>Login Page</h1>
         <div class="ui form">
            <div class="field">
                <label>username</label>
                <input type="text" name="user-name" placeholder="username" v-model="User.username">
            </div>
            <div class="field">
                <label>password</label>
                <input type="text" name="password" placeholder="password" v-model="User.password">
            </div>
            <button class="ui teal button" type="submit" @click="loginUser(User)">Submit</button>
        </div>
    </div>
</template>


<script>
    import {mapActions} from 'vuex'
    export default {
        data(){
            return {
                User:{}
            }
        },
        methods:{
             ...mapActions(['loginUser'])
        }
    }
</script>

<style scoped>
</style>