import API from '@/services/API.js'

export default {
    uploadImage(image) {
        return API().post('upload/image', image, {
            onUploadProgress:upLoadEvent =>{
                console.log('Upload Progress : ' + Math.round(upLoadEvent.loaded/upLoadEvent.total * 100) + '%')
            }
        })
    }
}