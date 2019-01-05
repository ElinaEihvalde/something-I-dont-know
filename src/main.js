import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import store from './store'
import sidenav from './components/sidenav.vue'
import saveVideoModal from './components/saveVideoModal.vue'
import datefilter from './datefilter'
import dayfilter from './dayfilter'
import fulldate from './fulldate'
import timefilter from './timefilter'

Vue.filter('date',datefilter)
Vue.filter('today',dayfilter)
Vue.filter('event',fulldate)
Vue.filter('time',timefilter)

Vue.config.productionTip = false

Vue.component('sidenav', sidenav)
Vue.component('saveVideoModal', saveVideoModal)



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAbegjMoUz4oG0C1PQlRfBzoHfANb3drsg',
      authDomain: 'houseofdance-70837.firebaseapp.com',
      databaseURL: 'https://houseofdance-70837.firebaseio.com',
      projectId: 'houseofdance-70837',
      storageBucket: 'gs://houseofdance-70837.appspot.com/'
    })
    
    this.$store.dispatch('loadVideos')
    this.$store.dispatch('loadEvents')

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
       
      }
    })

  }
}).$mount('#app')
