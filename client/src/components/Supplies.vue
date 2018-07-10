<template>
    <div class="supplies">
        <h1>Supplies</h1>

        <div v-for="supply in supplies">
            <p>
                <span><b>{{supply.title}}</b></span>
                <span>{{supply.description}}</span>
            </p>
        </div>
    </div>
</template>



<script>

import SuppliesService from '@/services/ProductService'

    export default {
        name:'productsSupplies',
        data () {
            return {
                supplies:[{title:'Pencil',description:'an awkward pencil'}]
            }
        },
        mounted(){
            this.getSupplies();
        },
        methods:{
            async getProducts(){
                const response = await SuppliesService.fetchSupplies()
                this.Supplies = response.data
            }
        }
    }
</script>