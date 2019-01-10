<template>
<div >
 
<div class="container" v-for="container in containers" :key="container.id">
<h3 class="headline">{{container.hed}}</h3>
<p class="subheading" >{{container.sub}}</p>
 <weekCardHome></weekCardHome>
<v-btn class= "right" flat right small :to="container.link">see all</v-btn>
  </div>
</div>
</template>

<script>
import weekCardHome from "./weekCardHome.vue";


  export default {

 name: 'gridContainer',
  components: {
    weekCardHome
   

  },
  

    data() {
      return {
        containers: [
          

           {
            id:1,
            hed:'Your weekly schedule', 
            sub: new Date().getFullYear() ,
            link: '/schedule'
          }
          
        ],
  
        
      }
    }
   
  }
</script>

<style scoped>

.container { height: auto; margin-bottom: 2em; padding: 0 0 0 24px;}


a {float: right; text-decoration: none;}
.v-btn--right {right: unset; color: #FF6D00;}
.subheading { color:#4657c4; margin: unset;}

</style>


