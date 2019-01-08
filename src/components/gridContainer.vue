<template>
  <div>
    <div class="container" v-for="container in containers" :key="container.id">
      <h5 class="headline">{{container.hed}}</h5>
      <p class="subheading">{{container.sub}}</p>
      <cards v-bind:videoList="videos(container.type)"></cards>
      <a :href="container.link">
        <v-btn flat right small href>see all</v-btn>
      </a>
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
          link: "https://www.youtube.com/watch?v=at6QjSwKOuA&index=6&list=PL55RiY5tL51qxUbODJG9cgrsVd7ZHbPrt"
        },

        {
          id: 2,
          hed: "Get back to training",
          sub: "saved videos",
          type: 'saved',
          link: "#"
        }
      ]
    };
  },

  methods: {
    videos (type) {
      if(type === 'saved') {
        let savedVideos = []
        this.$store.getters.loadedVideos.forEach(video => {
          if(this.$store.getters.user.savedVideos.indexOf(video.id) > -1) {
            savedVideos.push(video)
          }
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
  margin-bottom: 8vh;
}

a {
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
</style>
