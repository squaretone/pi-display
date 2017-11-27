<template>
  <div class="tpl tpl-date-time">
    <div class="time">
      {{displayTime}}
      <small class="ampm">{{amOrPm}}</small>
      <small>{{timezone}}</small>
    </div>
    <div class="date"
      ><span>{{displayDate}}</span>
    </div>
  </div>
</template>

<script>
import dateFormat from 'dateformat'

export default {
  name: 'date-time',
  data () {
    return {
      time: null,
      timer: null
    }
  },
  computed: {
    amOrPm () {
      return dateFormat(this.time, 'TT')
    },
    timezone () {
      return dateFormat(this.time, 'Z')
    },
    displayTime () {
      return dateFormat(this.time, 'h:MM')
    },
    displayDate () {
      return dateFormat(this.time, 'dddd, mmmm dS, yyyy')
    }
  },
  methods: {
    autoUpdateTime () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timer = setInterval(this.autoUpdateTime, 1000)
      this.updateTime()
    },
    updateTime () {
      this.time = new Date()
    },

  },
  mounted () {
    this.autoUpdateTime()
  }
}
</script>

<style scoped lang="scss">
.tpl-date-time {

  display: flex;
  // align-content: stretch;
  flex-flow: row wrap;
}

.time, .date {
  flex: 2;
}
.time {
  white-space: nowrap;
  font-size: 6rem;
  flex: 1;
  padding-right: 1rem;
  small {
    font-size: 2rem;
  }
  .ampm {
    position: relative;
    left: -1rem;
  }
}

.date {
  display: flex;
  span {
    align-self: flex-end;
    padding-bottom: 1.125rem;
  }
}
</style>
