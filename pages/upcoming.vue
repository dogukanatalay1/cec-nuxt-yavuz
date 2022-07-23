<template>
  <div>
    <EventsUpcomingEvents :upcomingpage="upcomingPage" />
  </div>
</template>

<script>
export default {
  name: 'UpcomingPage',
  data () {
    return {
      upcomingPage: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
