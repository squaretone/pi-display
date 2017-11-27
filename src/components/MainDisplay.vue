<template>
  <div class="tpl tpl-main-display">
    <date-time />
    <weather />
    <div class="settings-wrapper">
      <a @click.prevent="showSettings = !showSettings" href="#" class="toggle">settings</a>
      <settings v-if="showSettings" />
    </div>
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
      showSettings: true
    }
  }
}
</script>

<style lang="scss">
.tpl-main-display {
  padding: 4rem;
}
.tpl-weather {
  position: relative;
  left: 1rem;
}
.settings-wrapper {
  position: absolute;
  top: 0;
  right: 0;

  .toggle {
    position: absolute;
    top: 5px;
    right: 5px;
  }
  .tpl-settings {
    background: rgba(0,0,0, 0.1);
  }
}
</style>
