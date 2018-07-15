<template>
    <div>
        <h2>Product Types</h2>
        <table class="ui selectable celled table">
            <thead>
                <tr>
                <th>Name</th>
                <th>Added</th>
                </tr>
            </thead>
            <tbody v-for="typeList in typeLists" :key="typeList._id">
                <tr>
                <td>{{typeList.name}}</td>
                <td>{{Date(typeList.dateAdded)}}</td>
                </tr>
            </tbody>
        </table>
        <a class="ui button black" @click="$router.go(-1)">Back</a>
    </div>
</template>


<script>
let ProductTypeService = require('@/services/ProductTypeService')
import eventBus from '@/eventBus/eventBus'
export default {
    data(){
        return {
            typeLists:[]
        }
    },
    mounted(){
        this.getType()
    }
    ,
    methods:{
        getType (){
        ProductTypeService.default.fetchTypes().then(
            response => this.typeLists = response.data.types
        )
      }
    }
}
</script>