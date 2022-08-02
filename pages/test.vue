<template>
  <div>
    <EventCardVue />
  </div>
</template>

<script>
import EventCardVue from '../components/events/EventCard.vue'

export default {
  name: 'TestVue',
  components: {
    EventCardVue
  },
  layout: 'signpages'
}
</script>

<style lang="scss" scoped></style>
