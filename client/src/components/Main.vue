<template>
  <div>
    <div class="ui top inverted attached demo menu push">
        <a class="item" @click="toggleMenu" >
          <i class="large content icon"></i>
        </a>
        <!-- <div class="ui right aligned">
            <h3>Visit Site <i class="globe icon"></i>   </h3>
        </div> -->
        <a class="ui right aligned item">
            <h3>Log out <i class="power off icon"></i></h3>
        </a>
    </div>
    <div class="otherstuffs">
        <side-bar></side-bar>
        <div class="pusher">
            <div class="ui container">
              <div class="ui basic segment">
                <router-view/>
              </div>
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
      // $('.ui.sidebar').sidebar({
      //   context: $('.otherstuffs')
      // })
      // .sidebar('attach events', '.menu .item');
      $('.ui.sidebar')
        .sidebar('toggle')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    cursor:pointer;
  }
</style>
