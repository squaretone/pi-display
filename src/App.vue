<template>
  <div class="tpl tpl-app">
    <main-display />
  </div>
</template>

<script>
import vueify from 'vueify'
import MainDisplay from './components/MainDisplay'

export default {
  name: 'app',
  components: {MainDisplay},
  data () {
    return {
       greeting: ''
    }
  }
}
</script>

<style lang="scss">
/* Coolors Exported Palette - coolors.co/fcfcfc-75f4f4-7ebdc2-fffae3-5d576b */

/* RGB */
$color1: rgba(252, 252, 252, 1);
$color2: rgba(117, 244, 244, 1);
$color3: rgba(126, 189, 194, 1);
$color4: rgba(255, 250, 227, 1);
$color5: rgba(93, 87, 107, 1);

html, body {
  color: $color1;
  text-shadow: -1px -1px $color5;
  background-color: $color3;
  font-family: sans-serif;
}

body {
 
}
</style>
