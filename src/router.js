import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Home.vue'
import Schedule from './views/Schedule.vue'
import Videos from './views/Videos.vue'
import SavedVideos from './views/SavedVideos.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import UploadVideo from './views/UploadVideo.vue'
import AddEvent from './views/AddEvent.vue'
import VideoSingle from './views/VideoSingle.vue'
import authGuard from './authGuard'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: authGuard
        // ...
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule,
      
        // ...
    },
    {
      path: '/UploadVideo',
      name: 'UploadVideo',
      component: UploadVideo
      
        // ...
    },
    {
      path: '/AddEvent',
      name: 'AddEvent',
      component: AddEvent
      
        // ...
    },

    {
      path: '/videos',
      name: 'Videos',
      component: Videos,
      beforeEnter: authGuard
    },
    {
      path: '/videos/:id',
      name: 'Video',
      props: true,
      component: VideoSingle
     
    },
    {
      path: '/saved-videos',
      name: 'SavedVideos',
      component: SavedVideos,
      beforeEnter: authGuard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})