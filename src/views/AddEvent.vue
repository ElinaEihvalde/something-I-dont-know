
<template>
  <v-container class="event-wrapper">
    <v-layout row>
      <v-flex>
        <h2>Create new event</h2>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex>
        <form @submit.prevent="onCreateEvent">
          <v-layout row>
              <v-flex>
              <v-text-field name="event" label="Event name" id="event" v-model="event" clearable></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex >
              <h3>Choose date and time for event</h3>
            </v-flex>
          </v-layout>

            <v-layout row class="picker-grid">
            <div class="datePicker">
              <v-layout justify-space-between wrap>
                <v-flex>
                  <v-date-picker
                    id="color"
                    full-width
                    v-model="date"
                    :events="arrayEvents"
                    first-day-of-week="1"
                    event-color="#fff "
                    color="lightblue lighten-1"
                    dark
                  ></v-date-picker>
                </v-flex>
              </v-layout>
            </div>
            <v-time-picker class="timePicker" v-model="time" format="24hr" full-width landscape></v-time-picker>
          </v-layout>

          <v-layout row>
            <v-flex>
              <v-btn class="primary" :disabled="!formIsValid" type="submit">Create event</v-btn>
              <div class="submitDateTime">{{ submittableDateTime }}</div>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      event: '',
      date: new Date().toISOString().substr(0, 10),
      time: new Date()
    };
  },
  computed: {
    formIsValid() {
      return this.event !== "" && this.date !== "" && this.time !== "";
    },

    submittableDateTime () {
        const date = new Date(this.date)
        if (typeof this.time === 'string') {
          let hours = this.time.match(/^(\d+)/)[1]
          const minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
        } else {
          date.setHours(this.time.getHours())
          date.setMinutes(this.time.getMinutes())
        }
        return date
      }
  },

  methods: {
    onCreateEvent() {
      const eventData = {
        event: this.event,
        date: this.submittableDateTime,
        time: this.submittableDateTime
      };
      this.$store.dispatch("createEvent", eventData);
      this.$router.push("/schedule");
    }
  }
};
</script>

<style  scoped>
.event-wrapper {
  margin-top: 10vh;
}
h3 {
  margin: 2vh 0;
}
/* .layout.row{text-align: center;} */
.picker-grid {
  grid-template-columns: repeat(2, 1fr);
  display: grid;
}
.datePicker {
  grid-column: 1/3;
  grid-row: 1;
}
.timePicker {
  grid-column: 1/3;
  grid-row: 2;
}
.submitDateTime {
  display: none;
}
.v-btn {
  margin: 2em 0;
}

@media (min-width: 1025px) {
  .v-picker__body .theme--dark {
    width: 100% !important;
  }
  .picker-grid {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
  }
  .datePicker {
    grid-column: 1/2;
    grid-row: 1;
  }
  .timePicker {
    grid-column: 2/3;
    grid-row: 1;
  }
  .event-wrapper {
    width: 90vw;
  }
}
</style>