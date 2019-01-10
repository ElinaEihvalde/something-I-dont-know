<template>
  <div>
    <div class="banner-wrap">
      <img class="home-banner" src="../assets/banner.jpg" width="100%">
    </div>

    <v-content>
      <div class="wrapper">
        <h4 class="welcome" >Welcome {{getUserName}}!</h4>
         
        <div class="video-grid">
          <gridContainer class="gridContainer"></gridContainer>
        </div>
        <div class="schedule-grid">
           <schedule-cont-home></schedule-cont-home>
          <events class="events"></events>
        </div>
      </div>
    </v-content> </div>

</template>

<script>
import gridContainer from '../components/gridContainer.vue'
import scheduleContHome from '../components/scheduleContHome.vue'
import events from '../components/events.vue'

export default {
  name: "App",
  components: {
    gridContainer,
     scheduleContHome,
    events
  },

  computed: 
  {
    getUserName() {
            return this.$store.getters.user.displayName
          }
  }
}
</script>



<style scoped>
.home-banner {
  width: 100%;
  z-index: 0;
  margin: auto;
}
.banner-wrap {
  height: 65vw;
  margin: auto;
}
.wrapper {
  background-color: #f7f7f7;
  border-radius: 7px;
  padding: 2em 0;
}
.events {display: none;}


.welcome {
    grid-column: 1 / 10;
    grid-row: 1;
    margin: 0.5em 0 1em 24px;
     font-size: 9vw;
  
      font-weight: 500;
  }

@media (min-width: 1025px) {
  .home-banner {
  position: relative;
  width: 90vw;
  height: auto;
}
.banner-wrap {
  text-align: center;
  width: 100%;
  margin: auto;
  height: 15vw;
}

.welcome {
  font-size: 3vw;
}
  .container {
    margin: 0;
  }
  .wrapper {
    margin: auto;
    max-width: 90vw;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
   grid-gap: 4em;
  }

  .video-grid {
    grid-column: 1 / 6;
    grid-row: 2;
    border-radius: 7px;
  }

  .schedule-grid {
    grid-column: 6 / 10;
    grid-row: 2;
  }

  .horizontal {
    overflow-x:auto;
  }
  .events {margin-top: 4em; display: block;}

.grid-container {width: 100%;}
.welcome {
    grid-column: 1 / 10;
    grid-row: 1;
    border-radius: 7px;
    margin: 1em 0 0 24px;
  }
}
</style>