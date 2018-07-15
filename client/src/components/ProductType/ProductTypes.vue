<template>
    <div>
        <h2>Product Types</h2>
        <a class="ui button black" @click="$router.go(-1)">Back</a>
    </div>
</template>


<script>
export default {
    data(){
        return {
            types:[]
        }
    }
}
</script>