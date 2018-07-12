<template>
    <div class="products">
        <h1>Products</h1>
        <a class="ui primary button" href="#/newProduct">Create new</a>
        <h2>list of all the products</h2>
        <div class="ui divided items">
            <div v-for="product in products" class="item ">
                <div class="image">
                <img src="../img/image.png">
                </div>
                <div class="content">
                <a class="header">{{product.title}}</a>
                <div class="meta">
                    <span class="cinema">Union Square 14</span>
                </div>
                <div class="description">
                    <p>{{product.description}}</p>
                </div>
                <div class="extra">
                    <div class="ui label">IMAX</div>
                    <div class="ui label"><i class="globe icon"></i> Additional Languages</div>
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
            eventBus.$on('getProducts'),(data)=>{
                if(data){
                    this.getProducts()
                }
            }
        },
        mounted(){
            this.getProducts()
        },
        methods:{
            getProducts (){
                ProductService.default.fetchProducts().then(
                    response => this.products = response.data.products
                )
            }
        }
    }
</script>