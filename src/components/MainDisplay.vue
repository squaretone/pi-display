<template>
  <div class="tpl tpl-main-display">
    <date-time />
    <weather />
    <settings />
  </div>
</template>

<script>
import DateTime from './DateTime'
import Weather from './Weather'
import Settings from './Settings'

export default {
  name: 'main-display',
  components: {DateTime, Settings, Weather},
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.tpl-main-display {
  padding: 4rem;
}
</style>
