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
          <select name="type" id="type" placeholder="Item Type" class="ui  search dropdown" v-model="itemType">
            <option v-for="Type of typeList" v-bind:value="Type.itemType">{{Type.name}}</option>
          </select>
        </div> 
        <div>
          <button class="ui button primary" @click="addProduct">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
let ProductService = require('@/services/ProductService')
let ProductTypeService = require('@/services/ProductTypeService')
import eventBus from '@/eventBus/eventBus'

export default {
  name: 'NewProduct',
  data () {
    return {
      title: '',
      description: '',
      itemType:'',
      typeList:[]
    }
  },
  mounted(){
    this.getType()
  },
  methods: {
      addProduct(){
            ProductService.default.addProduct({
                title: this.title,
                description: this.description,
                itemType: this.itemType
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
  }
}
</script>
<style type="text/css">
</style>