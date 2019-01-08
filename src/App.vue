<template>
  <div>
    <v-app style="background-color:#f7f7f7;">
      <sidenav v-if="showHeader"></sidenav>
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

  router = new Router({
  routes: { name: 'Video', path: '/videos/:id', component: VideoSingle }
})


}
</script>

<style>
.hidden {display: none;}
</style>
 