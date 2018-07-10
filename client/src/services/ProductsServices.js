import API from '@/services/API'


export default {
    fetchPosts () {
        return API().get('posts')
    }
}