<template>
  <div class="tpl tpl-main-display">
    <date-time />
    <weather />
  </div>
</template>

<script>
import DateTime from './DateTime'
import Weather from './Weather'

export default {
  name: 'main-display',
  components: {DateTime, Weather},
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
