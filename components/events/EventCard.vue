<template>
  <div class="card">
    <section class="top" />
    <div class="event-info">
      <p v-show="event.is_expired" class="price">
        <ion-icon name="timer-outline" />
      </p>
      <span class="title">
        {{ event.name }}
      </span>
      <div class="additional-info">
        <p>
          <span class="location">
            <ion-icon name="location-outline" /> {{ event.location }}</span>
        </p>
        <p class="date">
          <ion-icon name="calendar-outline" />
          {{
            new Date(event.events_date).toLocaleString('tr-tr', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })
          }}
        </p>
      </div>
      <nuxt-link :to="`${event.id}`" class="button">
        Ayrıntılar
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      imgUrl: null
    }
  },
  created () {
    // console.log(this.event.album[0].images[0].image)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/EventCard.scss';
</style>
