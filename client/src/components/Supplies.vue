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

import SuppliesService from '@/services/SuppliesService'

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
            async getPosts(){
                const response = await SuppliesService.fetchSupplies()
                this.Supplies = response.data
            }
        }
    }
</script>