<template>
  <div>
    <side-bar></side-bar>
    <router-view/>
  </div>
</template>

<script>
import sideBar from '@/components/ComponentElement/sideBar/sidebar.vue'
export default {
  name: 'WelcomePage',
  data () {
    return {
      msg: 'Welcome to the Main page'
    }
  },
  components:{
    'side-bar':sideBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
