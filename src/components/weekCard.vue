<template>
  <div class="horizontal">
    <v-card class="radius" v-for="day in days" :key="day.id">
      <v-container fill-heigh fluid>
        <div class="inline">
          <h6 class="title">{{day.date | today}}</h6>
          <attending></attending>
        </div>

        <p class="body-2">{{day.date | date }}</p>
        <p class="body-2">{{day.time}}</p>

        <h5 class="headline font-weight-bold">{{day.event}}</h5>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import attending from "./attending.vue";

export default {
  components: {
    attending
  },
  data() {
    return {
      days: [
        {
          id: 1,
          date: new Date(),
          time: "16:55 - 17:45",
          event: "Hip-Hop"
        },
        {
          id: 2,
          date: new Date().setDate(new Date().getDate() + 1)
        },
        {
          id: 3,
          date: new Date().setDate(new Date().getDate() + 2)
        },
        {
          id: 4,
          date: new Date().setDate(new Date().getDate() + 3)
        },
        {
          id: 5,
          date: new Date().setDate(new Date().getDate() + 4)
        },
        {
          id: 6,
          date: new Date().setDate(new Date().getDate() + 5)
        },
        {
          id: 7,
          date: new Date().setDate(new Date().getDate() + 6)
        }
      ]
    };
  },

  methods: {
    getWeek() {
      
    }
  }
}
</script>

<style scoped>
.radius {
  border-radius: 7px;
  min-width: 200px;
   margin: 2vw 4vw 2vw 0;
  background-image: linear-gradient(-135deg, #1a237e, #4657c4);
  color: #fff;
}

.container {padding-top: 1.5em;}

.horizontal {
  min-width: 100%;
  display: flex;
  overflow-x: auto;
}

.horizontal::-webkit-scrollbar {
  display: none;
}

.body-2 {
  margin-bottom: unset;
}
.headline {
  padding-top: 4vw;
  letter-spacing: 1.5em;
}

.inline {
  display: grid !important;
  grid-template-columns: 4fr 1fr;
  margin: unset;
  padding: unset;
  width: 100%;
}

@media (min-width: 1025px) {
.horizontal {overflow-x: hidden;}
.radius {
    border-radius: 7px;
    min-width: 10%;
    margin: 1em 1% 1em 0;
}
.headline {font-size: 1.5em !important;}
.title {font-size: 1.3em !important;}

}

</style>