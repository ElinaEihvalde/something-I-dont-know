<template>
  <div class="horizontal">
    <v-card class="radius" v-for="day in days" :key="day.id">
      <v-container fill-heigh fluid>
        <div class="inline">
          <h6 class="title">{{day.date | today}}</h6>
          <attending></attending>
        </div>
        <div class="body-1">
          <p class="body-2">{{day.date | date }}</p>
          <p class="body-2">{{day.time}}</p>
        </div>
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
    getWeek() {}
  }
};
</script>

<style scoped>
.radius {
  border-radius: 7px;
  min-width: 200px;
   margin: 2vw 4vw 2vw 0;
  background-image: linear-gradient(-135deg, #1a237e, #4657c4);
  color: #fff;
}

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
  padding-top: 0.5em;
  letter-spacing: 1.5em;
}

.inline {
  display: grid !important;
  grid-template-columns: 4fr 1fr;
  margin: unset;
  padding: unset;
  width: 100%;
}
.container {
  padding-top: 1.5em;
}

@media (min-width: 1025px) {
  .horizontal {
    max-width: 100%;
  }
  .radius {
    border-radius: 7px;
    width: 50%;
    margin: 1em 1em 1em 0;
    min-width: unset;
  }

  .headline {
    padding-top: 1em;
    letter-spacing: 1.5em;
  }

  .inline {
    display: grid !important;
    grid-template-columns: 16fr 1fr;
    margin: unset;
    padding: unset;
    width: 100%;
  }
  .radius:nth-of-type(3) {
    display: none;
  }
  .radius:nth-of-type(4) {
    display: none;
  }
  .radius:nth-of-type(5) {
    display: none;
  }
  .radius:nth-of-type(6) {
    display: none;
  }
  .radius:nth-of-type(7) {
    display: none;
  }
  /* .headline {font-size: 1.7em !important;}
.title {font-size: 2em !important;}
.body-2 {font-size: 1.5em !important; }
.body-1 {margin-top: 1em;} */
  /* .body-1 :nth-of-type(2) {margin-left: 1em;} */
}
</style>