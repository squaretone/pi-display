<template>
  <div class="tpl tpl-main-display">
    <date-time />
    <weather />
    <div class="settings-wrapper">
      <settings v-if="showSettings" />
      <a @click.prevent="showSettings = !showSettings" href="#" class="toggle">settings</a>
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
      showSettings: false
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
    color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.2);
    padding: 2px 0.5rem 4px 0.5rem;
    border-radius: 2rem;
    font-size: 0.8rem;
    text-decoration: none;
  }
  .tpl-settings {
    background: rgba(0,0,0, 0.1);
  }
}
</style>
