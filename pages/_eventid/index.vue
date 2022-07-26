<template>
  <div>
    <EventsEventDetail v-if="singleEvent" :single-event="singleEvent" />
    <!-- <EventsSingleEvent v-if="singleEvent" :single-event="singleEvent" /> -->
    <div v-else>
      <h1>Etkinliğin ayrıntı bilgileri bulunamadı...</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventDetailPage',
  data () {
    return {
      singleEvent: null
    }
  },
  created () {
    // console.log(this.$route.params.eventid)
    this.getSingleEvent(this.$route.params.eventid)
  },
  methods: {
    getSingleEvent (eventId) {
      this.$API.events.getSingleEvent(eventId).then((response) => {
        window.console.log(response.data)
        this.singleEvent = response.data
      })
    }
  }
}
</script>
