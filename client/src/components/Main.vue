<template>
  <div>
    <div class="ui inverted segment">
        <i @click="toggleMenu" class="big content icon"></i>
        <!-- <div class="ui right aligned">
            <h3>Visit Site <i class="globe icon"></i>   </h3>
        </div> -->
        <div class="ui right aligned">
            <h3>Log out <i class="power off icon"></i></h3>
        </div>
    </div>
    <side-bar></side-bar>
    <div class="pusher">
      <div class="ui container">
        <div class="ui basic segment">
          <router-view/>
        </div>
      </div>
    </div>
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
  },
  methods:{
    toggleMenu() {
                $('.ui.sidebar')
                .sidebar('toggle')
            },  
            toggleModalMessage(){
                $('.mini.modal')
                    .modal('show')
                ;
            }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
