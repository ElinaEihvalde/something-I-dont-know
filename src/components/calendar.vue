<template>
  <v-layout justify-space-between wrap>
    <v-flex >
      <v-date-picker id="color" full-width v-model="date1" :events="arrayEvents"
      first-day-of-week="1"
      header-color="#1A237E" 
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

<style scoped lang="scss" >


#color {  border-radius: 0 0 7px 7px;}
/* #color :nth-child(1){ background-color:#1A237E !important;  linear-gradient(-45deg, #1A237E , #3949AB) ; }*/

.v-date-picker-table,
.v-date-picker-header {
  background-image: linear-gradient(45deg, #1a237e, #3949ab);
}
</style>