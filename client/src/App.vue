<template>
  <div id="app">
      <router-view :key="$route.fullPath" /> <!--(:key="$route.fullPath") re-runs mounted functions to views-->
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
      this.$store.dispatch('tryAutoLogin')
    }
}
</script>


<style>
::-webkit-scrollbar { 
    display: none; 
}
</style>


