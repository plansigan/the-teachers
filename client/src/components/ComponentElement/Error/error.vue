<template>
    <div class="ui message red" v-if="errors.length > 0">
        <ul class="list" >
        <li v-for="error in errors" :key="error.id">{{error.title}}</li>
        </ul>
    </div>
</template>



<script>
    export default {
        
    }
</script>
