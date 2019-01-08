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
        const day = Math.flkor(Math.random() * 30)
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

<style lang="scss" >

.v-picker__title, .v-date-picker-header, .v-date-picker-table, .v-date-picker-years li {background-color: #1A237E !important;}

@media (min-width: 1281px) {
.v-date-picker-table .v-btn, .v-date-picker-table th, .v-date-picker-header__value strong, .v-picker__title__btn:not(.v-picker__title__btn--active) {font-size: 18px;}
.theme--dark.v-card {border-radius: 7px;}
}
</style>