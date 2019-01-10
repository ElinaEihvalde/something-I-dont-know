<template>
  <v-layout justify-space-between wrap>
    <v-flex >
      <v-date-picker id="color" full-width v-model="date1" :events="arrayEvents"
      first-day-of-week="1"
      event-color="#fff "
       color="lightblue lighten-1"
      dark
      >
      </v-date-picker>
    </v-flex>
  </v-layout>
</template>

<script>
 export default {
    data: () => ({
      arrayEvents: null,
      date1: new Date().toISOString().substr(0, 10),
      date2: new Date().toISOString().substr(0, 10)
    }),

    mounted () {
      this.arrayEvents = [...Array(6)].map(() => {
        const day = Math.floor(Math.random() * 30)
        const d = new Date()
        d.setDate(day)
        return d.toISOString().substr(0, 10)
      })
    },

    methods: {
      functionEvents (date) {
        const [,, day] = date.split('-')
        return parseInt(day, 10) % 3 === 0
      }
    }
  }
</script>


<style>

.v-picker__title, .v-date-picker-header, .v-date-picker-table, .v-date-picker-years li, .v-picker__body {background-color: #1A237E !important;}
.theme--light.v-time-picker-clock {background-color: white !important;}
.v-picker--landscape .v-picker__body {background-color: #1976d2 !important;}
.v-time-picker-clock__item {font-size: 20px;}
@media (min-width: 1025px) {
.v-date-picker-table .v-btn, .v-date-picker-table th, .v-date-picker-header__value strong, .v-picker__title__btn:not(.v-picker__title__btn--active) {font-size: 16px;}
.theme--light.v-time-picker-clock {margin-top: 4.5em;}

  
}
@media (max-width: 500px) {
.v-time-picker-clock__item {font-size: 12px;}
.v-time-picker-clock__inner {
    position: absolute;
    bottom: 15px;
    left: 15px;
    right: 15px;
    top: 15px;
}
}


</style>