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
          date: new Date()
         
        },
        {
          id: 3,
          day: "Wednesdsy"
        },
        {
          id: 4,
          day: "Thursday"
        },
        {
          id: 5,
          day: "Friday"
        },
        {
          id: 6,
          day: "Saturday"
        },
        {
          id: 7,
          day: "Sunday"
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
  margin: 2vw 3vw 2vw 0;
  background-image: linear-gradient(-135deg, #1a237e, #4657c4);
  color: #fff;
}

.container {padding-top: 4vw;}

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

@media (min-width: 1281px) {
.horizontal {overflow-x: visible;}
.radius {
  border-radius: 7px;
  min-width: 7vw;
  max-width: 7vw;
  margin: 2vw 0.5vw 2vw 0;
}

.radius:nth-of-type(6){display: none;}
.radius:nth-of-type(7){display: none;}
.headline {font-size: 1.5em !important;}
.title {font-size: 1.3em !important;}

}

</style>