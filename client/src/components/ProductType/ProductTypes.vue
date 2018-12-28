<template>
    <div>
        <div class="ui header">Manage Product Types</div>
        <!-- search by name -->
        <div class="inline field searchField">
            <div class="ui icon input">
                <input v-model="filterType" class="prompt" type="text" placeholder="Search by name...">
                <i class="search icon"></i>
            </div>
            <div class="results"></div>
        </div>
        <button class="ui primary button" @click="showAddForm">Add New Type</button>
        <div class="ui form" id="showAddForm">
            <h4 class="ui dividing header" style="padding-top:1%">Enter type name</h4>
            <div class="ui field">
                <input type="text" id="typeName" v-model="newType.name" >
            </div>

            <!-- ERROR MESSAGE -->
            <div class="ui message red" v-if="error.length > 0">
                <ul class="list" >
                    <li>{{error}}</li>
                </ul>
            </div>

            <!-- SUBMIT -->
            <button class="ui green button" @click="addType(newType)">Create</button>
        </div>
        
        <table class="ui selectable celled table">
            <thead>
                <tr>
                <th>Name</th>
                <th>Added</th>
                <th style="text-align:center;">Remove</th>
                </tr>
            </thead>
            <tbody v-for="typeList in filteredProducts" :key="typeList._id">
                    <td>{{typeList.name}}</td>
                    <td>{{typeList.dateAdded}}</td>  
                    <td style="text-align:center;">
                        <a href="#" @click="deleteType(typeList._id)"><i class="large minus circle icon red"></i></a>
                    </td>    
            </tbody>
        </table>
    </div>
</template>


<script>
    import {mapActions} from 'vuex'

    export default {
        data(){
            return {
                filterType:'',
                showForm:false,
                showAddTransition:'fade'
            }
        },
        created(){
            this.$store.dispatch('getType')
        },
        methods:{
            showAddForm(){
                $('#showAddForm').transition('fade');
            },
            ...mapActions(['getType','addType','deleteType'])
        },
        watch:{
            filterType:function(name){
                this.$store.dispatch('filterType',name)
            }
        },
        computed:{
            newType(){
                return this.$store.getters.newType
            },
            productTypes(){
                return this.$store.getters.productTypes
            },
            filteredProducts(){
                return this.$store.getters.filteredProducts
            },
            error(){
                return this.$store.getters.error
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
