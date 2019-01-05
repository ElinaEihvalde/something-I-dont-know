<template>
  <div class="form__field">
  <div class="inline">
      <h6 class="subheading form__label"> label:</h6>
   
    <div class="form__input">
      <swatches
        v-model="color"
        :colors="colors"
        shapes="circles"
        inline= true
        popover-to="left"
        swatch-size = 36
        :swatch-style="style"
        
       
      ></swatches>
    </div>
  </div>
  </div>
</template>

<script>
import Swatches from "vue-swatches"
 import "vue-swatches/dist/vue-swatches.min.css"

export default {
  components: {
    Swatches
  },
  data() {
    return {
      color: '#00BCD4',
     colors: ['#00BCD4', '#CDDC39', '#E91E63', '#9C27B0'],
     style: { margin: '0 16px 4vh 0', }
    };
  }
};
</script>

<style scoped>
h6{ padding: 3vh 4vw 0;}

.inline { display: grid; grid-template-columns: 1fr 5fr;}
</style>
