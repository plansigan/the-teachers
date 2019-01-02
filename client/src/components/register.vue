<template>
    <div class="ui raised very padded text container segment centered">
         <h1>Register Page</h1>
         <div class="ui form">
            <div class="field">
                <label>Email</label>
                <input type="text" name="e-mail" placeholder="Email">
            </div>
            <div class="field">
                <label>username</label>
                <input type="text" name="user-name" placeholder="username">
            </div>
            <div class="field">
                <label>password</label>
                <input type="password" name="password" placeholder="password">
            </div>
            <div class="field">
                <div class="ui checkbox">
                <input type="checkbox" tabindex="0" class="hidden">
                <label v-model="login.terms">I agree to the Terms and Conditions</label>
                </div>
            </div>
            <button class="ui teal button" type="submit">Submit</button>
        </div>
    </div>
</template>


<script>
    export default {}
</script>

<style scoped>
</style>