<template>
  <v-layout>
    <div class="description" v-for="video in videos" :key="video.id">
      <h3 class="headline">{{video.title}}</h3>
      <p class="subheading">{{video.date}}</p>
      <p class="body-1">{{video.description}}</p>
    </div>
  </v-layout>
</template>

<script>
export default {
  props: ['id'],
 computed:{
   videos() {
      return this.$store.getters.loadedVideo (this.id)
    }
 }
}
</script>

<style  scoped>
.description {
  padding-left: 24px;
  margin-top: 2vh;
}
.subheading {
  color: #3f51b5;
}
</style>