<template>
    <div>
            <input 
            type="file" 
            @change="onImageSelected" 
            name="image" 
            id="" 
            accept="image/*"
            ref="imageInput"
            >
            <button :class="{'green': selectedImage,'red':!selectedImage}" class="ui button redBtn" @click="$refs.imageInput.click()">Pick an Image</button>
            <button :class="{'green': productImage !== '','red':!imageUploaded}" @click="onUpload" class="ui button greenBtn">Upload Image</button>
            <i class="check icon green" v-if="imageUploaded"></i>
    </div>
</template>

<script>
    let UploadService = require('@/services/UploadService')
    import eventBus from '@/eventBus/eventBus'

    import {mapActions} from 'vuex'
    export default {
        data:()=>{
            return {
                selectedImage:false,
                imageUploaded:false
            }
        },
        methods:{
            onImageSelected(event){ 
                 if(event.target.files[0]){
                     this.selectedImage = event.target.files[0]
                 } else {
                     this.imageUploaded = false
                     this.selectedImage = null
                 }
            },
            onUpload(){
                if(this.selectedImage){
                    const fd = new FormData();
                    fd.append('image',this.selectedImage,this.selectedImage.name)
                    UploadService.default.uploadImage(fd).then(uploadProgress => {
                        this.$store.getters.newProduct.image = this.selectedImage.name
                        this.imageUploaded = true
                        alert('Image has been uploaded to server')
                    })
                } else {
                    alert('no image has been selected')
                }
            }
        },
        computed:{
            productImage(){
                return this.$store.getters.newProduct.image
            }
        }
    }
</script>

<style scoped>
    input{
        display:none
    }
    .button{
        border-radius:0 !important;
        margin:0;
    }
    .redBtn{
        position: relative;
        left:1.5px
    }
    .greenBtn{
        position: relative;
        left:-1.5px
    }
</style>
