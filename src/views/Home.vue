<template>
    <v-content>
      <div class="wrapper">
        <div class="video-grid">
          <gridContainer></gridContainer>
        </div>
        <div class="schedule-grid">
          <schedule-cont></schedule-cont>
        </div>
      </div>
    </v-content>
</template>

<script>
import gridContainer from '../components/gridContainer.vue'
import scheduleCont from '../components/scheduleCont.vue'

export default {
  name: "App",
  components: {
    gridContainer,
    scheduleCont
  }
};
</script>



<style scoped>
@media (min-width: 1281px) {
  .container {margin: 0;}
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
  }

  .schedule-grid {
    grid-column: 6 / 10;
    grid-row: 1;
  }
  
  .horizontal {overflow-x: hidden;}

  
}
</style>