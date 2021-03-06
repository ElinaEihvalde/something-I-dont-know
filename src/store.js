import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({

  
  state: {
    //--------------------VIDEO------------------------------
    loadedVideos: [],

    //--------------------EVENT------------------------------
    createdEvents: [],


    //--------------------USER------------------------------

    user: null
  },


  mutations: {

    userSavedVideos(state, payload) {
      const id = payload.id
      if (state.user.savedVideos.findIndex(video => video.id === id) >= 0) {
        return
      }
      state.user.savedVideos.push({id: id, notes: ['']})
      state.user.fbKeys[id] = payload.fbKeys
      state.user.dataPairs[payload.fbKeys] = {id: payload.id, notes: ['']}
    },
    userRemovedVideos (state, payload) {
      const savedVideos = state.user.savedVideos
      savedVideos.splice(savedVideos.indexOf(payload), 1)
      Reflect.deleteProperty(state.user.savedVideos, payload)
    },

    //--------------------USER------------------------------
    setUser(state, payload) {
      state.user = payload
    },

    //--------------------VIDEO------------------------------
    setLoadedVideos(state, payload) {
      state.loadedVideos = payload
    },

    uploadVideo(state, payload) {
      state.loadedVideos.push(payload)
    },

    //--------------------EVENTS------------------------------
    setLoadedEvents(state, payload) {
      state.createdEvents = payload
    },
    createEvent(state, payload) {
      state.createdEvents.push(payload)
    }

  },




  actions: {

    //-----------ADDING NOTES---------

    addNote({commit, getters}, payload) {
      const user =  getters.user
      const fbKey = Object.keys(getters.user.dataPairs).find(key => getters.user.dataPairs[key].id === payload.videoId);
      const videoIndex = user.savedVideos.findIndex((video => video.id === payload.videoId));
      user.savedVideos[videoIndex].notes.push(payload.note)
      firebase.database().ref('/users/' + user.id).child('/savedVideos/' + fbKey).update({notes: user.savedVideos[videoIndex].notes})
      .then (() =>{
        commit('userSavedVideos',user)
      })
      .catch((error) => {
        console.log(error)
      })
    },


    //------------SAVING/UNSAVING VIDEOS---------------

    userSavedVideos({commit, getters}, payload) {
      const user =  getters.user
      firebase.database().ref('/users/' + user.id).child('/savedVideos/')
      .push({id: payload, notes: ['']})
      .then ((data) =>{
        commit('userSavedVideos',{ id:payload, fbKeys: data.key})
      })
      .catch((error) => {
        console.log(error)
      })
    },

    userRemovedVideos({commit, getters}, payload) {
      const user =  getters.user
      if (!user.fbKeys){
        return
      }
      const fbKeys = user.fbKeys[payload]
      firebase.database().ref('/users/' + user.id + '/savedVideos/').child(fbKeys)
      .remove()
      .then (() =>{
        commit('userRemovedVideos', payload)
      })
      .catch((error) => {
        console.log(error)
      })
    },




    //--------------------VIDEO------------------------------

    // fetching videos back 
    loadVideos({
      commit
    }) {
      firebase.database().ref('videos').once('value')
        .then((data) => {
          const videos = []
          const obj = data.val()
          for (let key in obj) {
            videos.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              thumbnail: obj[key].thumbnail,
              videoUrl: obj[key].videoUrl,
              date: obj[key].date


            })
          }
          commit('setLoadedVideos', videos)
        })
        .catch((error) => {
          console.log(error)
        })

    },

    // uploading videos 
    uploadVideo({
      commit
    }, payload) {
      const video = {
        title: payload.title,
        description: payload.description,
        date: payload.date.toISOString(),

      }

      let videoUrl
      let thumbnail = payload.thumbnail
      let key

      //reach out to firebase and store it
      firebase.database().ref('videos').push(video)
        .then((data) => {
          key = data.key
          return key
        })
        .then(key => {
          const filename = payload.video.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('videos/' + key + '.' + ext).put(payload.video)
        })
        .then(videoData => {
          firebase.storage().ref(videoData.metadata.fullPath).getDownloadURL()
            .then((videoUrl) => {
              return firebase.database().ref('videos').child(key).update({
                videoUrl: videoUrl,
                thumbnail: thumbnail
              })
            })
            .catch((error) => {
              console.error(error)
            })

        })
        .then(() => {
          commit('uploadVideo', {
            ...video,
            videoUrl: videoUrl,
            thumbnail: thumbnail,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })


    },
    //--------------------EVENTS------------------------------
    loadEvents({
      commit
    }) {
      firebase.database().ref('events').once('value')
        .then((data) => {
          const events = []
          const obj = data.val()
          for (let key in obj) {
            events.push({
              id: key,
              time: obj[key].time,
              event: obj[key].event,
              date: obj[key].date

            })
          }
          commit('setLoadedEvents', events)
        })
        .catch((error) => {
          console.log(error)
        })

    },


    createEvent({
      commit
    }, payload) {
      const event = {
        event: payload.event,
        date: payload.date.toISOString(),
        time: payload.time.toISOString()

      }
      //reach out to firebase and store it
      firebase.database().ref('events').push(event)
        .then((data) => {
          const key = data.key
          commit('createEvent', {
            ...event,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })

    },


    //--------------------USER------------------------------

    signUp({
      commit
    }, payload) {
      let newUser = 
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            newUser = {
              id: user.user.uid,
              displayName: payload.displayName,
              savedVideos: [],
              fbKeys:{}

            }
            commit('setUser', newUser)
            firebase.database().ref('/users/' + newUser.id + '/userName/').push(newUser.displayName)
          }
          
        )
        .catch(
          error => {
            console.log(error)
          }
        )
       
    },


    //sign in ----------

    signUserIn({
      commit, dispatch
    }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.user.uid,
              displayName: payload.displayName,
              savedVideos: [],
              fbKeys:{}

            }
            commit('setUser', newUser)
            dispatch('getUserName')
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    autoSignIn({commit, dispatch}, payload) {
      commit('setUser', {
        id: payload.uid,
        displayName: payload.displayName,
              savedVideos: [],
              fbKeys:{}
      })
       dispatch('getUserName')
    },

    fetchUserData({commit, getters}){
      firebase.database().ref('/users/' + getters.user.id + '/savedVideos/').once('value')
      .then(data => {
        const dataPairs = data.val()
        let savedVideos = []
        let swappedPairs = {}
        for (let key in dataPairs) {
          savedVideos.push({id: dataPairs[key].id, notes: dataPairs[key].notes})
          swappedPairs[dataPairs[key].id] = key
        }
        const updateUser = getters.user
          updateUser.savedVideos = savedVideos
          updateUser.fbKeys = swappedPairs
          updateUser.dataPairs = dataPairs ? dataPairs : {}
        commit('setUser', updateUser)
      })
      
      .catch(
        error => {
          console.log(error)
        }
      )
    },

    getUserName({commit, getters}){
      firebase.database().ref('/users/' + getters.user.id + '/userName/').once('value')
      .then(data => {
        const dataPairs = data.val()
        let displayName = dataPairs[Object.keys(dataPairs)[0]];
        const updateUser = getters.user
        updateUser.displayName = displayName
        commit('setUser', updateUser)
      })
    },


    //log out--------------
    logout({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },



  getters: {

    //--------------------USER------------------------------
    user(state) {
      return state.user
    },

    //--------------------EVENTS------------------------------

    createdEvents(state) {
      return state.createdEvents.sort((eventA, eventB) => {
        return new Date(eventA.date) - new Date(eventB.date)
      })
    },

    //--------------------VIDEO------------------------------

    // All videos by date
    loadedVideos(state) {
      return state.loadedVideos.sort((videoA, videoB) => {
        return new Date(videoB.date) - new Date(videoA.date)
      })
    },

    // part of all videos for dashboard
    dashboardVideos(state, getters) {
      return getters.loadedVideos.slice(0, 5)
    },

    // single vidoe
    loadedVideo(state) {
      return (videoId) => {
        return state.loadedVideos.find((video) => {
          return video.id === videoId
        })
      }
    }
  }


})