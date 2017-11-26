<template>
  <div class="tpl tpl-weather">
    <div>{{temp}}&#8457</div>
    <div>{{humidity}}&#37; humidity</div>
    <div>{{airPressure}} Hg</div>
  </div>
</template>

<script>

export default {
  name: 'weather',
  data () {
    return {
      temp: '10',
      humidity: '15',
      airPressure: '20.99'
    }
  },
  computed: {},
  mounted () {
    
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
