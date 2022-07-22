<template>
  <section class="events-area">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
          <div class="event_title_wrapper">
            <div class="sub_title">
              <h2>Yaklaşan Etkinlikler</h2>
              <p>
                Lorem ipsum dolor sit amet mollis felis dapibus arcu donec
                viverra. Pede phasellus eget. Etiam maecenas vel vici quis
                dictum rutrum nec nisi et.
              </p>
            </div>
            <!-- ends: .section-header -->
            <div class="envent_all_view">
              <a href="#" title="">Tümünü Gör</a>
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="upcomingEvent in upcomingEvents.slice(0, 1)"
        :key="upcomingEvent.id"
        class="row upcoming-event"
      >
        <div class="col-sm-12 events_full_box">
          <div class="events_single">
            <div class="event_banner">
              <a href="#"><img
                src="@/assets/images/event.jpeg"
                alt=""
                class="img-fluid"
              ></a>
            </div>
            <div class="event_info">
              <h3>
                <a href="#" title="">{{ upcomingEvent.name }}</a>
              </h3>
              <div class="events_time">
                <span class="time"><i class="flaticon-clock-circular-outline" />8.00 Am - 5.00
                  Pm</span>
                <span><i class="fas fa-map-marker-alt" />{{
                  upcomingEvent.location
                }}</span>
              </div>
              <p>
                {{ upcomingEvent.statement }}
              </p>
              <div class="event_dete">
                <span class="date">
                  {{
                    new Date(upcomingEvent.events_date).toLocaleString(
                      'tr-tr',
                      {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      }
                    )
                  }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ./ End Events Area section -->
</template>

<script>
export default {
  name: 'UpComingEvents',
  data () {
    return {
      upcomingEvents: []
    }
  },
  created () {
    this.getUpcomingEvents()
  },
  methods: {
    getUpcomingEvents () {
      this.$API.events.getUpcomingEvents().then((response) => {
        // console.log(response.data)
        this.upcomingEvents = response.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.upcoming-event {
  box-shadow: 4px 3px 6px grey;
  transition: 0.2s;

  &:hover {
    box-shadow: 7px 6px 7px grey;
    transition: 0.2s;
  }
}
.event_dete {
  height: 70px !important;
}
</style>
