<template>
  <div class="products ui center aligned header">
      <product-form :submitFunction="newProductFn" 
                    :product="newProduct" 
                    title="New Product"
      ></product-form>
  </div>
</template>

<script>
  import productForm from '@/components/Product/productForm.vue'

  //vuex
  import {mapActions} from 'vuex'

  export default {
    name: 'NewProduct',
    components:{
      productForm
    },
    methods:{
      ...mapActions(['newProductFn'])
    },
    computed:{
      newProduct(){
        return this.$store.getters.newProduct
      }
    }
  }
</script>