<template>
  <div class="main-page">
    <!--
    <CommonAbout />
     <EventsEventCarousel />
    -->
    <CommonHero class="hero" />
    <Opportunities class="opportunities" />
    <EventsUpcomingEvents />
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
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
  margin-top: 110vh;
}
</style>
