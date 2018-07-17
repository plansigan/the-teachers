<template>
    <div>
        <!-- VIEW FORM -->
        <div v-if="editThis==false">
            <h1>{{product.title}}</h1>
            <p>{{product.description}}</p>
            <a class="ui button black" @click="$router.go(-1)">Back</a>
            <a class="ui button Yellow" @click="editThis = true">Edit</a>
            <a class="ui red button" @click="deleteProduct(product._id)">Delete</a>
        </div>

        <!-- EDIT FORM -->
        <div v-if="editThis==true"> 
          <div class="editForm ui center aligned header"> 
            <div class="ui form">
                <h2 class="ui dividing header" style="padding-top:1%">Edit {{product.title}}</h2>
                <div class="field">
                <div class="field ui input focus">
                    <input type="text" name="title" placeholder="Product" v-model="product.title">
                </div>
                </div>
                <div class="ui field focus">
                <textarea rows="10" cols="15" placeholder="Description" v-model="product.description"></textarea>
                </div>
                <div class="field">
                <label>Item Type</label>
                <select name="type" id="type" placeholder="Item Type" class="ui  search dropdown" v-model="product.itemType">
                    <option v-for="Type in typeList" :key="Type.id" v-bind:value="Type.itemType">{{Type.name}}</option>
                </select>
                <a href="#" @click="manageTypes">manage types</a>
                </div> 
                <button class="ui button primary" @click="updateProduct(product._id)">Save</button>
                <a class="ui button black" @click="$router.go(-1)">Back</a>
                </div>
            </div>
            <div class="ui modal" id="manageTypeModal" ref="manageTypeModal">
                <i class="close icon"></i>
                <div class="ui text container">
                <manage-type></manage-type>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let ProductService = require('@/services/ProductService')
    let ProductTypeService = require('@/services/ProductTypeService')
    import manageType from '@/components/productType/productTypes.vue'
    import eventBus from '@/eventBus/eventBus'
    export default {
        data(){
            return{
                product:[],
                typeList:[],
                editThis:false
            }
        },
        components:{
            'manage-type':manageType
        },
        created(){
            eventBus.$on('viewProduct',(data)=>{
                if(data){
                    this.product = data
                }
            }),
            eventBus.$on('getTypes',(data)=>{
                if(data){
            this.getType()
      }
    })
        },
        mounted(){
            this.getType()
        },
        methods:{
            getType (){
                ProductTypeService.default.fetchTypes().then(
                    response => this.typeList = response.data.types
                )
            },
            manageTypes(){
                $('#manageTypeModal').modal('show')
            },
            deleteProduct(id){
                if(confirm('Are you sure you want to delete this product ?')){
                    ProductService.default.deleteProduct(id).then((res)=>{
                        console.log(res)
                        this.$router.go(-1)
                    })
                }
            },
            updateProduct(id){
                ProductService.default.updateProduct({
                    title: this.product.title,
                    description: this.product.description,
                    itemType: this.product.itemType
                },id).then((res)=>{
                    alert('Product saved successfully')
                    this.$router.go(-1);
                })
            }
        }
    }
</script>
