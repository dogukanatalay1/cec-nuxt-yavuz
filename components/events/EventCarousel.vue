<template>
  <div class="d-flex">
    <!-- <EventsEventCard v-for="event in events" :key="event" :event="event" /> -->
    <EventsEventCard
      v-for="event in events.slice(0, 1)"
      :key="event.id"
      :event="event"
    />
  </div>
</template>

<script>
// import axios from "axios"

export default {
  name: 'EventCaruosel',
  data () {
    return {
      events: []
    }
  },
  created () {
    this.getEvents()
  },
  methods: {
    getEvents () {
      this.$API.events.getEvents().then((response) => {
        this.events = response.data
      })
    }
    /*
    async getEvents () {
      const data = axios.get('https://ktucectest.herokuapp.com/api/events/')
      const result = await data
      console.log(result)

      this.events = result.data
    }
    */
  }
}
</script>
