<template>
  <div>
    <div class="banner-wrap">
      <img class="home-banner" src="https://i.imgur.com/g1TfEfW.jpg">
    </div>

    <v-content>
      <div class="wrapper">
        <h4 class="display-1">Welcome {{displayName}}!</h4>
        <div class="video-grid">
          <gridContainer></gridContainer>
        </div>
        <div class="schedule-grid">
          <schedule-cont></schedule-cont>
        </div>
      </div>
    </v-content> </div>

</template>

<script>
import gridContainer from '../components/gridContainer.vue'
import scheduleCont from '../components/scheduleCont.vue'

export default {
  name: "App",
  components: {
    gridContainer,
    scheduleCont
  },

  computed: 
  {
    displayName() {
      return this.$store.getters.name
    }
  }
}
</script>



<style scoped>
.home-banner {
  width: 100%;
  z-index: 0;
  height: 45vh;
  margin: auto;
}
.banner-wrap {
  height: 44vh;
  margin: auto;
}
.wrapper {
  background-color: #f7f7f7;
  border-radius: 7px;
  padding: 2em 0;
}

@media (min-width: 1281px) {
  .home-banner {
  position: relative;
  width: 90vw;
  height: auto;
}
.banner-wrap {
  text-align: center;
  width: 90vw;
  margin: auto;
  height: 10vw;
}
  .container {
    margin: 0;
  }
  .wrapper {
    margin: auto;
    max-width: 90vw;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-gap: 50px;
  }

  .video-grid {
    grid-column: 1 / 6;
    grid-row: 1;
    border-radius: 7px;
  }

  .schedule-grid {
    grid-column: 6 / 10;
    grid-row: 1;
  }

  .horizontal {
    overflow-x: hidden;
  }
  
}
</style>