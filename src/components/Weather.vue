<template>
  <div class="tpl tpl-weather">
    <div v-if="loading" class="loading-wrapper">loading current conditions...</div>
    <div v-if="!loading" class="current-conditions">
      <div>{{temp}}&#8457</div>
      <div>{{humidity}}&#37; humidity</div>
      <div>{{airPressure}} Hg</div>
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
      latestObservation: {}
    }
  },
  computed: {
    ...mapGetters([
      'zipcode'
    ]),
    airPressure () {
      let pressureObj = this.latestObservation.barometricPressure
      if (pressureObj) {
        return pressureObj.value
      }
    },
    humidity () {
      let humidObj = this.latestObservation.relativeHumidity
      if (humidObj) {
        return humidObj.value
      }
    },
    temp () {
      let tempObj = this.latestObservation.temperature
      if (tempObj) {
        return tempObj.value
      }
    }
  },
  methods: {
    ...mapActions([
      'updateConditions'
    ]),
    loadData () {
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
