<template>
    <h2>Product Types</h2>
</template>


<script>
    let ProductTypeService = require('@/services/ProductService')

    export default {
        data(){
            return {
                typeList:[]
            }
        },
        created(){
            eventBus.$on('getTypes'),(data)=>{
                if(data){
                    this.getProducts()
                }
            }
        },
        mounted(){
            this.getType()
        },
        methods:{
            getType (){
                ProductService.default.fetchProducts().then(
                    response => this.products = response.data.products
                )
            },
            addType(){
                ProductTypeService.default.addProductType({
                    name: this.name,
                    itemType: this.itemType
                })
                this.getType()
                //re route to page
                //eventBus.$emit('getType',true)
                //this.$router.push({ name: 'products' })
            }
        }
    }
</script>