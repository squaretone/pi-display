<template>
  <div class="tpl tpl-weather">
    <div v-if="loading" class="loading-wrapper">loading current conditions...</div>
    <div v-if="!loading" class="current-conditions">
      <div>{{temp}}&#8457</div>
      <div>{{humidity}}&#37; humidity</div>
      <div>{{airPressure}} hg</div>
      <div>Wind Direction: {{windDirection}}</div>
      <div>Wind Speed: {{windSpeed}} mph</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'weather',
  data () {
    return {
      loading: false,
      loadInterval: null,
      latestObservation: {}
    }
  },
  computed: {
    ...mapGetters([
      'zipcode'
    ]),
    windDirection () {
      let dir
      if (this.latestObservation && this.latestObservation.windDirection) {
        let windObj = this.latestObservation.windDirection
        let directions = ['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW']
        let dirDeg = windObj.value
        let dirIndex = dirDeg % 16
        dir = directions[dirIndex]
      }
      return dir
    },
    windSpeed () {
      let speed
      if (this.latestObservation && this.latestObservation.windSpeed) {
        speed = Math.round(this.latestObservation.windSpeed.value * 2.2369)
      }

      return speed
    },
    airPressure () {
      let pressureObj = this.latestObservation.barometricPressure
      if (pressureObj) {
        // Convert pascals to mercury inches
        let hg = Math.round(0.0002953 * pressureObj.value)
        return `${hg}`
      }
    },
    humidity () {
      let humidObj = this.latestObservation.relativeHumidity
      if (humidObj) {
        // Convert pascals to mercury inches
        let humidity = Math.round(humidObj.value)
        return `${humidity}`
      }
    },
    temp () {
      let tempObj = this.latestObservation.temperature
      if (tempObj) {
        // fahrenheit to celsius
        let f = Math.round(1.8 * tempObj.value + 32)
        return `${f}`
      }
    }
  },
  methods: {
    ...mapActions([
      'updateConditions'
    ]),
    loadData () {
      if (this.loadInterval) {
        clearTimeout(this.loadInterval)
      }
      this.loadInterval = setTimeout(this.loadData, 900000)
      this.loading = true
      this.updateConditions({
        cb: this.loadDataHandler
      })
    },
    loadDataHandler (err, data) {
      console.log(err, data)
      this.loading = false
      if (!err) {
        this.latestObservation = data
      } else {
        console.error(err)
      }
    }
  },
  mounted () {
    this.loadData()
  }
}
</script>

<style scoped lang="scss">
.tpl-weather {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  font-size: 2rem;

  &> {
    margin-bottom: 0.5rem;
  }
}
</style>
