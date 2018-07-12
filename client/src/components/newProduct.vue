<template>
  <div class="products ui center aligned header">
    <h1>Add Product</h1>
      <div class="ui form">
        <div class="ui input focus">
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>

        <div class="ui field focus">
          <textarea rows="10" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>

          <select name="type" id="type" placeholder="ITEMTYPE" class="ui  search dropdown" v-model="itemType">
            <option value="1">Food</option>
            <option value="2">Supplies</option>
          </select>
        </div>
        
        <div>
          <button class="app_post_btn" @click="addProduct">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
let ProductService = require('@/services/ProductService')
import eventBus from '@/eventBus/eventBus'

export default {
  name: 'NewProduct',
  data () {
    return {
      title: '',
      description: '',
      itemType:''
    }
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
      }
  }
}
</script>
<style type="text/css">
</style>