<template>
  <div class="main-page">
    <CommonHero class="hero" />
    <Opportunities class="opportunities" />
    <EventsUpcomingEvents />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  created () {
    if (this.$auth.loggedIn) {
      console.log('loggedin')
      // this.$auth.fetchUser()
    }
  }
}
</script>

<style lang="scss" scoped>
.main-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hero {
  position: absolute;
  top: 0;
}

.opportunities {
  position: relative;
  margin-top: 100vh;
}
</style>
