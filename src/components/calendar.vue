<template>
  <v-layout justify-space-between wrap>
    <v-flex>
      <v-date-picker
        id="color"
        full-width
        v-model="date"
        :events="getEvents"
        first-day-of-week="1"
        event-color="#fff "
        color="lightblue lighten-1"
        dark
      ></v-date-picker>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10)
  }),
  computed: {
    getEvents() {
      let eventsArray = [];
      this.events().forEach(event => {
        eventsArray.push(event.date.substr(0, 10));
      });
      return eventsArray;
    }
  },
  methods: {
    functionEvents(date) {
      const [, , day] = date.split("-");
      return parseInt(day, 10) % 3 === 0;
    },
    events() {
      return this.$store.getters.createdEvents;
    }
  }
};
</script>


<style>
.v-picker__title,
.v-date-picker-header,
.v-date-picker-table,
.v-date-picker-years li,
.v-picker__body {
  background-color: #1a237e !important;
}
.theme--light.v-time-picker-clock {
  background-color: white !important;
}
.v-picker--landscape .v-picker__body {
  background-color: #1976d2 !important;
}
.v-time-picker-clock__item {
  font-size: 20px;
}
@media (min-width: 1025px) {
  .v-date-picker-table .v-btn,
  .v-date-picker-table th,
  .v-date-picker-header__value strong,
  .v-picker__title__btn:not(.v-picker__title__btn--active) {
    font-size: 16px;
  }
  .theme--light.v-time-picker-clock {
    margin-top: 4.5em;
  }
}
@media (max-width: 500px) {
  .v-time-picker-clock__item {
    font-size: 12px;
  }
  .v-time-picker-clock__inner {
    position: absolute;
    bottom: 15px;
    left: 15px;
    right: 15px;
    top: 15px;
  }
}
</style>