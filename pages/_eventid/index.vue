<template>
  <div>
    <EventsEventDetail v-if="singleEvent" :single-event="singleEvent" />
    <div v-else>
      bla
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
    // console.log(this.$route.params)
    this.getSingleEvent(this.$route.params.eventid)
  },
  methods: {
    getSingleEvent (eventId) {
      this.$API.events.getSingleEvent(eventId).then((response) => {
        // console.log(response.data)
        this.singleEvent = response.data
      })
    }
  }
}
</script>
