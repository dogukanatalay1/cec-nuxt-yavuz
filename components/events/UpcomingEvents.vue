<template>
  <section class="events-area">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
          <div class="event_title_wrapper">
            <div class="sub_title">
              <h2>Yaklaşan Etkinlikler</h2>
              <p>
                Websitemizde yaklaşan etlinlikleri inceleyebilir ve dilerseniz
                katılmak için başvurabilirsiniz.
              </p>
              <div v-if="!upcomingpage" class="envent_all_view">
                <nuxt-link to="/upcoming" class="see-all-btn" href="#" title="">
                  Tümünü Gör
                </nuxt-link>
              </div>
              <div v-else class="envent_all_view">
                <nuxt-link to="/" class="see-all-btn" href="#" title="">
                  Geri Dön
                </nuxt-link>
              </div>
            </div>
            <!-- ends: .section-header -->
          </div>
        </div>
      </div>
      <div v-if="!upcomingpage">
        <div
          v-for="upcomingEvent in upcomingEvents.slice(0, 1)"
          :key="upcomingEvent.id"
          class="row upcoming-event"
        >
          <div class="col-sm-12 events_full_box">
            <div class="events_single">
              <div class="event_banner">
                <img
                  src="@/assets/images/event.jpeg"
                  alt=""
                  class="img-fluid"
                >
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
                <nuxt-link class="btn btn-danger" :to="`${upcomingEvent.id}`">
                  Aytıntıları Gör
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div
          v-for="upcomingEvent in upcomingEvents"
          :key="upcomingEvent.id"
          class="row upcoming-event"
        >
          <div class="col-sm-12 events_full_box">
            <div class="events_single">
              <div class="event_banner">
                <img
                  src="@/assets/images/event.jpeg"
                  alt=""
                  class="img-fluid"
                >
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
    </div>
  </section>
</template>

<script>
export default {
  name: 'UpComingEvents',
  props: {
    upcomingpage: {
      type: Boolean
    }
  },
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
        console.log(response.data)
        this.upcomingEvents = response.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';

.events-area {
  margin-top: -100px;
  background-image: url('assets/images/footerbg.png');
  background-color: lightgray;
  padding: 30px !important;
}
.upcoming-event {
  box-shadow: 6px 7px 6px grey;
  transition: 0.2s;
  background-color: #fff;
  margin-top: 30px;

  &:hover {
    box-shadow: 8px 10px 8px grey;
    transition: 0.2s;
  }
}
.event_dete {
  height: 70px !important;
  background-color: $red !important;
  width: 80px !important;
}

.see-all-btn {
  background-color: $about-black !important;
  &:hover {
    background-color: $red !important;
  }
}

.upcoming-event {
  margin-top: -30px;
  width: 90%;
  border-radius: 0px 13px 0px 13px;
  margin-bottom: 70px;
}
</style>
