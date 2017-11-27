<template>
  <div class="tpl tpl-settings">
    <button @click.prevent="loadData">
      <span v-if="!loading">load</span>
      <span v-if="loading">loading...</span>
    </button>
    <div>stationID: {{stationID}}</div>
    <div>zipcode: {{zipcode}}</div>
    <div>geolocation: {{geolocation}}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'settings',
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters([
      'zipcode',
      'stationID',
      'geolocation'
    ])
  },
  methods: {
    ...mapActions([
      'demo', 'updateConditions'
    ]),
    loadData () {
      this.loading = true
      this.updateConditions({
        cb: this.loadDataHandler
      })
    },
    loadDataHandler (err, data) {
      this.loading = false
      console.log(err, data)
    }
  },
  mounted () {
    
  }
}
</script>

<style scoped lang="scss">
.tpl-settings {
  padding: 1rem;
}
</style>
