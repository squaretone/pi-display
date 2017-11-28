import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
// https://api.weather.gov/stations/KMLE/observations?limit=3
const getWeather = (stationID, cb) => {
  let observationPath = `https://api.weather.gov/stations/${stationID}/observations`
  let params = {
    limit: 7
  }
  axios.get(observationPath, {params: params})
    .then((response) => {
      let result = response.data
      let features = result.features

      if (!features || features.length < 1) {
        return cb(`No observations returned for station ${stationID}`)
      } else {
        let firstObservation = features[0].properties
        cb(null, firstObservation)
      }
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
    stationID: 'KMLE'
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
    updateConditions ({state}, options) {
      getWeather(state.stationID, (err, result) => {
        if (options && options.cb) {
          options.cb(err, result)
        }
      })
    }
  }
})

export default store