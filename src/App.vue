<template>
  <div>
    <v-app style="background-color:#f7f7f7;">
      <sidenav :class="{ 'hidden': $route.path==='/videos/:id' }"></sidenav>
      <div id="background">
        <router-view style="background-color:#f7f7f7;"></router-view>
      </div>
    </v-app>
  </div>
</template>


<script>


export default {
  name: "App",
  components: {
  },
  data() {
    
   
  }/* ,

methods: {
  hide () {
    if ($router.path === '/videos/:id') {
     document.getElementsByTagName('sidenav').addClass('hidden')
    }
    else {
      return
    }
  }
} 
   */


}
</script>

<style>
.hidden {display: none;}
</style>
 