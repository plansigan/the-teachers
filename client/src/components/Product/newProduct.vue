<template>
  <div class="products ui center aligned header">
      <div class="ui form">
        <h2 class="ui dividing header" style="padding-top:1%">Add Product</h2>
        <div class="field">
          <div class="field ui input focus">
            <input type="text" name="title" placeholder="Product" v-model="title">
          </div>
        </div>
        <div class="ui field focus">
          <textarea rows="10" cols="15" placeholder="Description" v-model="description"></textarea>
        </div>
        <div class="field">
          <label>Item Type</label>
          <div class="fields">
            <div class="twelve wide field">
              <select name="type" id="type" placeholder="Item Type" class="ui  search dropdown" v-model="itemType">
                <option v-for="Type in typeList" :key="Type.id" v-bind:value="Type.itemType">{{Type.name}}</option>
              </select>
            </div>
            <div class="four wide field">
              <button class="ui button manage" @click="manageTypes">manage types</button>
            </div>
          </div>
        </div>
        <!-- UPLOAD IMAGE -->
        <image-upload></image-upload>
        <div class="ui hidden divider"></div>
        <div>
          <button class="ui button primary" @click="addProduct">Add</button>
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
</template>

<script>
let ProductService = require('@/services/ProductService')
let ProductTypeService = require('@/services/ProductTypeService')
import manageType from '@/components/productType/productTypes.vue'
import eventBus from '@/eventBus/eventBus'
import imageUpload from "@/components/ComponentElement/Upload/image.vue"

export default {
  name: 'NewProduct',
  data () {
    return {
      title: '',
      description: '',
      itemType:'',
      typeList:[],
      errors:[],
      image:''
    }
  },
  components:{
        'manage-type':manageType,
        'image-upload':imageUpload
  },
  mounted(){
    this.getType()
  },
  created(){
    eventBus.$on('getTypes',(data)=>{
      if(data){
        this.getType()
      }
    })
    eventBus.$on('imageName',(data)=>{
      if(data){
        this.image = data
      }
    })
  },
  methods: {
      addProduct(){
            ProductService.default.addProduct({
                title: this.title,
                description: this.description,
                itemType: this.itemType,
                image:this.image
            })
            //re route to page
            eventBus.$emit('getProducts',true)
            this.$router.push({ name: 'products' })
      },
      getType (){
        ProductTypeService.default.fetchTypes().then(
            response => this.typeList = response.data.types
        )
      },
      manageTypes(){
        $('#manageTypeModal').modal('show')
      },
      checkForm:(e)=>{
        if (this.title && this.description) {
          return true;
        }
        
        this.errors = [];
        
        if (!this.title) {
          this.errors.push('Name of product required.');
        }
        if (!this.description) {
          this.errors.push('Description required.');
        }
        
        e.preventDefault();
      }
  }
}
</script>
<style scoped>
</style>