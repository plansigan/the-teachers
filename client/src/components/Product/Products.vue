<template>
    <div class="products">
        <h1>Products</h1>
        <a class="ui primary button" href="#/newProduct">Create new</a>
        <h2>list of all the products</h2>
        <div class="ui divided items">
            <div v-for="product in products" :key="product.id" class="item ">
                <div class="image">
                <img :src="urlServer+'/uploads/image/'+product.image">
                </div>
                <div class="content">
                <a v-bind:href="'#/viewProduct/'+product._id" class="header" @click="viewProduct(product._id)">{{product.title}}</a>
                <!-- <div class="meta">
                    <span class="cinema">Union Square 14</span>
                </div> -->
                <div class="description">
                    <p>{{product.description}}</p>
                </div>
                <div class="extra">
                    <div class="ui label" v-for="itemType in product.itemType" :key="itemType.id">{{itemType.name}}</div>
                    <!-- <div class="ui label"><i class="globe icon"></i> Additional Languages</div> -->
                </div>
                </div>
            </div>
        </div>
    </div>

    
</template>



<script>
    let ProductService = require('@/services/ProductService')

    import eventBus from '@/eventBus/eventBus'

    export default {
        name:'products',
        data () {
            return {
                products:[]
            }
        },
        created(){
            eventBus.$on('getProducts',(data)=>{
                if(data){
                    this.getProducts()
                }
            })
            this.getProducts()
        },
        mounted(){
            this.getProducts()
        },
        methods:{
            getProducts (){
                ProductService.default.fetchProducts().then(
                    response => this.products = response.data.products
                )
            },
            viewProduct(id){
                ProductService.default.viewProduct(id).then(
                    response => eventBus.$emit('viewProduct',response.data.product)
                )
            }
        }
    }
</script>