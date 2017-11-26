<template>
    <date-time />
  </div>
</template>

<script>
import DateTime from './DateTime'

export default {
  name: 'main-display',
  components: {DateTime},
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.tpl-display {
  background: rgba(0,0,0, 0.2);
}
</style>
