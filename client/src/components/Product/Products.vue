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
                 <img :src="urlServer+'/uploads/image/'+product.image.name">
                </div>
                <div class="content">
                    <router-link v-bind:to="'/Admin/viewProduct/'+product._id" class="header" @click.native="viewProduct(product._id)">{{product.title}}</router-link>
                    <div class="description">
                        <p>{{product.description}}</p>
                    </div>
                    <div class="extra">
                        <!-- <a class="ui teal tag label">Website</a> -->
                        <div class="ui red label" v-for="site in product.site" :key="site.id">{{site.name}}</div>
                        <div class="ui black red label" v-for="itemType in product.itemType" :key="itemType.id">{{itemType.name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let ProductService = require('@/services/ProductService')
    import {mapActions} from 'vuex'

    export default {
        name:'products',
        data () {
            return {
                filterName:'',
                searchByType:false
            }
        },
        created(){
            this.$store.dispatch('getProducts')
        },
        methods:{
            ...mapActions(['viewProduct'])
        },
        computed:{
            filteredProducts() {
                return this.products.filter(product => {
                    return product.title.toLowerCase().indexOf(this.filterName.toLowerCase()) > -1
                })
            },
            products(){
                return this.$store.getters.products
            }
        }
        
    }
</script>