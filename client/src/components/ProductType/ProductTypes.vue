<template>
    <div>
        <div class="ui header">Product Types</div>
        <!-- search by name -->
        <div class="inline field searchField">
            <div class="ui icon input">
                <input v-model="filterName" class="prompt" type="text" placeholder="Search by name...">
                <i class="search icon"></i>
            </div>
            <div class="results"></div>
        </div>
        <button class="ui primary button" @click="showAddForm">Toggle Add form</button>
        <div class="ui form" id="showAddForm">
            <h4 class="ui dividing header" style="padding-top:1%">Enter type name</h4>
            <div class="ui field">
                <input type="text" id="typeName" v-model="typeName" >
            </div>
            <button class="ui green button" @click="submitType">Create</button>
        </div>
        
        
        <table class="ui selectable celled table">
            <thead>
                <tr>
                <th>Name</th>
                <th>Added</th>
                <th style="text-align:center;">Remove</th>
                </tr>
            </thead>
            <tbody v-for="typeList in filteredProductsType" :key="typeList._id">
                    <td>{{typeList.name}}</td>
                    <td>{{typeList.dateAdded}}</td>  
                    <td style="text-align:center;">
                        <a href="#" @click="deleteType(typeList._id)"><i class="large minus circle icon red"></i></a>
                    </td>    
            </tbody>
        </table>
        <!-- <a class="ui button black" @click="$router.go(-1)">Back</a> -->
    </div>
</template>


<script>
let ProductTypeService = require('@/services/ProductTypeService')
import eventBus from '@/eventBus/eventBus'
export default {
    data(){
        return {
            typeLists:[],
            typeName:'',
            showForm:false,
            showAddTransition:'fade',
            filterName:''
        }
    },
    mounted(){
        this.getType()
    },
    methods:{
        getType (){
        ProductTypeService.default.fetchTypes().then(
            response => this.typeLists = response.data.types
        )},
        submitType(){
            ProductTypeService.default.addTypes({
                name: this.typeName,
            }).then((response)=>{
                alert(response.data.message)
                this.getType()
                eventBus.$emit('getTypes',true)
            })
            this.typeName = ''
            //this.$router.go()
            //this.showForm = false
        },
        deleteType(id){
            if(confirm('Are you sure you want to delete this type ?')){
                    ProductTypeService.default.deleteType(id).then((response)=>{
                        console.log(response);
                        this.getType()
                        eventBus.$emit('getTypes',true)
                    })
                    
            }
        },
        showAddForm(){
            $('#showAddForm')
                .transition('fade')
            ;
        }
    },
    computed:{
        filteredProductsType() {
            return this.typeLists.filter(type => {
                return type.name.toLowerCase().indexOf(this.filterName.toLowerCase()) > -1
            })
        }
    }
}
</script>

<style scoped>
    .ui.header{
        margin-top:2%;
    }
    table{
        margin-bottom:2% !important;
    }

    #showAddForm{
        display:none;
    }
    .searchField{
        margin-bottom:10px;
    }
</style>
