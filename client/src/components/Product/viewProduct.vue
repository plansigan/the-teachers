<template>
    <div>
        <!-- VIEW FORM -->
        <div v-if="editThis==false">
            <h1>{{product.title}}</h1>
            <p>{{product.description}}</p>
            <a class="ui button Yellow" @click="editThis = true">Edit</a>
            <a class="ui red button" @click="deleteProduct(product._id)">Delete</a>
            <a class="ui black button" @click="$router.go(-1)">Back</a>
        </div>
        <!-- EDIT FORM -->
        <div v-if="editThis==true"> 
          <div class="editForm ui center aligned header"> 
            <product-form :title="title" :submitFunction="updateProduct" :product="product"></product-form>
          </div>
        </div>
    </div>
</template>

<script>
  import productForm from '@/components/Product/productForm.vue'

  //vuex
  import {mapActions} from 'vuex'

  export default {
    name: 'NewProduct',
    data(){return{editThis:false}},
    components:{
      productForm
    },
    methods:{
      ...mapActions(['updateProduct','deleteProduct'])
    },
    computed:{
      product(){
        return this.$store.getters.product
      },
      title(){
          return `Edit ${this.$store.getters.product.title}`
      }
    }
  }
</script>
