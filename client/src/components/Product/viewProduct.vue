<template>
    <div>
        <h1>A product</h1>
        <h2>{{product.title}}</h2>
        <a class="ui button black" @click="$router.go(-1)">Back</a>
        <a class="ui red button" @click="deleteProduct(product._id)">Delete</a>
    </div>
</template>

<script>
    let ProductService = require('@/services/ProductService')   
    import eventBus from '@/eventBus/eventBus'
    export default {
        data(){
            return{
                product:[]
            }
        },created(){
            eventBus.$on('viewProduct',(data)=>{
                if(data){
                    this.product = data
                }
            })
        },
        methods:{
            deleteProduct(id){
                if(confirm('Are you sure you want to delete this product ?')){
                    ProductService.default.deleteProduct(id)
                }
            }
        }
    }
</script>
