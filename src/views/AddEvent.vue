
<template>
  <v-container  class="event-wrapper">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4 class="headline">Create new event</h4>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateEvent">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="event" label="Event name" id="event" v-model="event"></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <h4>Choose date and time for event</h4>
            </v-flex>
          </v-layout>

          <v-layout row class="mb-2">
            <v-flex xs12 sm6 offset-sm3>
              <v-date-picker v-model="date"></v-date-picker>
              <p>{{ date }}</p>
            </v-flex>
          </v-layout>
          
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-time-picker v-model="time" format="24hr"></v-time-picker>
              <p>{{ time }}</p>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn class="primary" :disabled="!formIsValid" type="submit">Create event</v-btn>
              {{ submittableDateTime }}
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

.event-wrapper {margin-top: 10vh;}
.centered {text-align: center;}
h3 {margin: 2vh 0;}
</style>