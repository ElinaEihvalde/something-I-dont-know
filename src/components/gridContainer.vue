<template>
  <div class="inline">
    <div class="container" v-for="container in containers" :key="container.id">
      <h5 class="headline">{{container.hed}}</h5>
      <p class="subheading">{{container.sub}}</p>
      <cards v-bind:videoList="videos(container.type)"></cards>

        <v-btn class= "right" flat right small :to="container.link">see all</v-btn>
    </div>
  </div>
</template>

<script>
import cards from "./cards.vue";

export default {
  name: "gridContainer",
  components: {
    cards
  },

    data() {
    return {
      containers: [
        {
          id: 1,
          hed: "Learn the latest moves",
          sub: "latest videos",
          type: 'all',
         link:  '/videos'
        },

        {
          id: 2,
          hed: "Get back to training",
          sub: "saved videos",
          type: 'saved',
          link: '/saved-videos'
        }
      ]
    };
  },

  methods: {
    videos (type) {
      if(type === 'saved') {
        let savedVideos = []
        this.$store.getters.loadedVideos.forEach(video => {
         this.$store.getters.user.savedVideos.forEach((item) => {
            if(item.id === video.id){
              savedVideos.push(video)
            }
          })
        })
        return savedVideos
      }
      if(type === 'all') {
        return this.$store.getters.dashboardVideos
      }
    }
  }

};
</script>

<style scoped>
.container {
  height: auto;
  padding: 0 0 0 24px;
 margin-bottom: 4em;
}

.right {
  float: right;
  text-decoration: none;
}
.v-btn--right {
  right: unset;
  color: #ff6d00;
}
.subheading {
  color: #4657c4;
  margin: unset;
}
@media (min-width: 1025px) {
.inline {display: inline;}
}
</style>
