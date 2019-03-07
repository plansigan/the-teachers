<template>
    <div class="ui raised very padded text container segment centered">
         <h1>Register</h1>
         <div class="ui form">
            <div class="field">
                <label>Email</label>
                <input type="text" name="e-mail" placeholder="Email" v-model="newUser.email">
            </div>
            <div class="field">
                <label>username</label>
                <input type="text" name="user-name" placeholder="username" v-model="newUser.username">
            </div>
            <div class="field">
                <label>password</label>
                <input type="password" name="password" placeholder="password" v-model="newUser.password">
            </div>
            <div class="field">
                <div class="ui checked checkbox">
                    <input type="checkbox" checked="" v-model="newUser.terms">
                    <label>I agree to the terms and conditions</label>
                </div>
            </div>
            <button class="ui black button" type="submit" @click="registerUser(newUser)">Submit</button>
        </div>
    </div>
</template>


<script>
  //vuex
  import {mapActions} from 'vuex'
    export default {
        data(){
            return{
                newUser:{}
            }
        },
        methods:{
             ...mapActions(['registerUser','loginUser'])
        }
    }
</script>

<style scoped>
</style>