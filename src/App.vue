<template>
  <div>
    <v-app style="background-color:#f7f7f7;">
      <sidenav v-show="videoIsShown()"></sidenav>
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
    
   
  },

methods: {
  videoIsShown () {
    return this.$route.name  !== 'Video'
  }
} 
}
</script>

<style>
.hidden {display: none;}
</style>
 