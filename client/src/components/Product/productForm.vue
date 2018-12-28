<template>
    <div class="ui form">
        <h2 class="ui dividing header" style="padding-top:1%">{{title}}</h2>
        <div class="field">
          <div :class="errorFilter('name')" class="field ui input focus">
            <input type="text" name="title" placeholder="Product" v-model="product.title">
          </div>
        </div>
        <div :class="errorFilter('description')" class="ui field focus">
          <textarea rows="10" cols="15" placeholder="Description" v-model="product.description"></textarea>
        </div>
        <div class="field" >
          <label>Item Type</label>
          <!-- itemType -->
          <div class="fields">
            <div class="twelve wide field" :class="errorFilter('itemType')">
              <select name="type" id="type" placeholder="Item Type" class="ui  search dropdown" v-model="product.itemType">
                <option v-for="Type in productTypes" :key="Type.id" v-bind:value="Type.itemType">{{Type.name}}</option>
              </select>
            </div>
            <div class="four wide field">
              <button class="ui button manage" @click="manageType">manage types</button>
            </div>
          </div>
          <!-- website -->
          <div class="fields">
            <div class="twelve wide field" :class="errorFilter('site')">
              <br>
              <select name="site" id="site" placeholder="Website" class="ui search dropdown" v-model="product.site">
                <option v-for="site in sites" :key="site.id" v-bind:value="site.siteNumber">{{site.name}}</option>
              </select>
            </div>
          </div>
          <!-- Price -->
          <div class="fields">
            <div class="twelve wide field" :class="errorFilter('price')">
              <div class="ui labeled input">
                <label for="amount" class="ui label">₱</label>
                <input type="number" placeholder="Amount" id="amount" v-model="product.price">
                <!-- <div class="ui basic label"></div> -->
              </div>
            </div>
          </div>
        </div>
        <!-- UPLOAD IMAGE -->
        <image-upload></image-upload>
        <!-- <image-upload :selectedImageParent="wow"></image-upload> -->
        <div class="ui hidden divider"></div>
        <button class="ui button primary" @click="submitFunction(product)">Submit</button>
        <!-- ERROR ELEMENTS  -->
        <div class="ui message red" v-if="errors.length > 0">
            <ul class="list" >
                <li v-for="error in errors" :key="error.id">{{error.title}}</li>
            </ul>
        </div>
        <!-- manage Type -->
        <div class="ui modal" id="manageTypeModal" ref="manageTypeModal">
          <i class="close icon"></i>
          <div class="ui text container">
            <manage-type></manage-type>
          </div>
        </div>
      </div>
</template>

<script>
    // components
    import imageUpload from "@/components/ComponentElement/Upload/image.vue"
    import manageType from "@/components/productType/productTypes.vue"

    //vuex
    import {mapActions} from 'vuex'

    export default {
        props:['title','submitFunction','deleteFunction','product'],
        name: 'productForm',
        components:{
            manageType,
            imageUpload
        },    
        created(){
            this.$store.dispatch('getType')
            this.$store.dispatch('getSite')
        },
        methods: {
            errorFilter(subject){
                if(this.$store.getters.errors.filter(err => err.subject == subject)[0]){
                    return {error:true}
                }
            },
            ...mapActions(['getType','manageType','getSite'])
        },
        computed:{
            errors(){
                return this.$store.getters.errors
            },
            productTypes(){
                return this.$store.getters.productTypes;
            },
            sites(){
              return this.$store.getters.sites;
            }
        }
    }
</script>

