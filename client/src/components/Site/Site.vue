<template>
    <div>
        <div class="ui header">Manage Sites</div>
        <!-- search by name -->
        <div class="inline field searchField">
            <div class="ui icon input">
                <input v-model="filterSite" class="prompt" type="text" placeholder="Search by Site...">
                <i class="search icon"></i>
            </div>
            <div class="results"></div>
        </div>
        <button class="ui primary button" @click="showAddForm">Add Site</button>
        <div class="ui form" id="showAddForm">
            <h4 class="ui dividing header" style="padding-top:1%">Enter Site name</h4>
            <div class="ui field">
                <input type="text" id="siteName" v-model="newSite.name" >
            </div>
            <div class="ui field">
                <div class="ui toggle checkbox">
                    <input type="checkbox" name="public" v-model="newSite.live">
                    <label>Live</label>
                </div>
            </div>

            <!-- ERROR MESSAGE -->
            <div class="ui message red" v-if="siteError.length > 0">
                <ul class="list" >
                    <li>{{siteError}}</li>
                </ul>
            </div>

            <!-- SUBMIT -->
            <button class="ui green button" @click="addSite(newSite)">Create</button>
        </div>
        
        <table class="ui selectable celled table">
            <thead>
                <tr>
                <th>Site</th>
                <th>Added</th>
                <th style="text-align:center;">Live</th>
                <th style="text-align:center;">Remove</th>
                </tr>
            </thead>
            <tbody v-for="siteList in filteredSites" :key="siteList._id">
                    <td>{{siteList.name}}</td>
                    <td>{{siteList.dateAdded}}</td>  
                    <td style="text-align:center;">
                        <div class="ui toggle checkbox">
                            <input type="checkbox" name="public" v-model="siteList.live" @change="updateLive(siteList)">
                            <label></label>
                        </div>
                    </td>
                    <td style="text-align:center;">
                        <a href="#" @click="deleteSite(siteList._id)"><i class="large minus circle icon red"></i></a>
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
                filterSite:'',
                showForm:false,
                showAddTransition:'fade'
            }
        },
        created(){
            this.$store.dispatch('getSite')
        },
        methods:{
            showAddForm(){
                $('#showAddForm').transition('fade');
            },
            ...mapActions(['getSite','addSite','deleteSite','updateLive'])
        },
        watch:{
            filterSite:function(name){
                this.$store.dispatch('filterSite',name)
            }
        },
        computed:{
            newSite(){
                return this.$store.getters.newSite
            },
            Sites(){
                return this.$store.getters.Sites
            },
            filteredSites(){
                return this.$store.getters.filteredSites
            },
            siteError(){
                return this.$store.getters.siteError
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
