<template>
  <div id="app">
    <div class="ui container">
      <router-view /> <!--(:key="$route.fullPath") re-runs mounted functions to views-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

