<template>
    <div class="products">
        <h1>List of all the products</h1>
        <!-- SEARCH SECTION -->
        <div class="ui form">
            <!-- search by name -->
            <div class="inline field">
                <div class="ui icon input">
                    <input v-model="filterName" class="prompt" type="text" placeholder="Search by name...">
                    <i class="search icon"></i>
                </div>
                <div class="results"></div>
            </div>
        </div>
        <div class="ui divided items">
            <div v-for="product in filteredProducts" :key="product.id" class="item ">
                <div class="image">
                <img :src="urlServer+'/uploads/image/'+product.image">
                </div>
                <div class="content">
                <router-link v-bind:to="'/Main/viewProduct/'+product._id" class="header" @click.native="viewProduct(product._id)">{{product.title}}</router-link>
                <!-- <a v-bind:href="'#/viewProduct/'+product._id" class="header" @click="viewProduct(product._id)">{{product.title}}</a> -->
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
                products:[],
                filterName:'',
                searchByType:false
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
            //activate semantic animations
            $('.ui.checkbox')
                .checkbox()
            ;
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
        },
        computed:{
            filteredProducts() {
                return this.products.filter(product => {
                    return product.title.toLowerCase().indexOf(this.filterName.toLowerCase()) > -1
                })
            }
        }
    }
</script>