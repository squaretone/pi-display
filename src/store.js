import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const getWeather = (zipcode, cb) => {
  axios.get('https:')
    .then((response) => {
      cb(null, response)
    })
    .catch((err) => {
      cb(err)
    })
}

const store = new Vuex.Store({
  state: {
    count: 0,
    zipcode: '68949',
    location: null,
    geolocation: null,
    stationID: null
  },
  mutations: {
    increment (state) { 
      state.count++
    },
    setZip (state, newZip) {
      state.zipcode = newZip
    }
  },
  getters: {
    zipcode (state) {
      return state.zipcode
    },
    geolocation(state) {
      return state.geolocation
    },
    stationID(state) {
      return state.stationID
    }
  },
  actions: {
    demo ({commit, state}, options) {
      console.log('DEMO: ', options)
      getWeather(state.zipcode, (err, data) => {
        if (options && options.cb) options.cb(err, data)
      })
    },
    updateConditions (store, options) {
      console.log('updating conditions...')
      if (options && options.cb) {
        options.cb(null, {})
      }
    }
  }
})

export default store