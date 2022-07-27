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
              <div class="event_date">
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
                  }}
                </span>
              </div>

              <div class="event_banner">
                <img
                  src="@/assets/images/event.jpeg"
                  alt=""
                  class="img-fluid"
                >
              </div>

              <div class="event_info d-flex flex-column align-items-start">
                <h3 class="mb-2">
                  {{ upcomingEvent.name }}
                </h3>

                <div class="events_time d-flex flex-row align-items-center">
                  <div class="events_time_content">
                    <ion-icon name="time-outline" />
                    <span class="ml-1">8.00Am-5.00</span>
                  </div>

                  <div class="events_time_content">
                    <ion-icon name="location-outline" />
                    <span class="ml-1">
                      {{ upcomingEvent.location }}
                    </span>
                  </div>
                </div>

                <p class="event_info_text">
                  <!-- {{ upcomingEvent.statement }} -->
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                  velit explicabo numquam? Molestiae, autem!
                </p>

                <nuxt-link
                  class="see-all-btn btn btn-danger"
                  :to="`${upcomingEvent.id}`"
                >
                  Ayrıntıları Gör
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-else>
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
      </div> -->
      <div v-if="upcomingpage">
        <div
          v-for="upcomingEvent in upcomingEvents"
          :key="upcomingEvent.id"
          class="row upcoming-event"
        >
          <div class="col-sm-12 events_full_box">
            <div class="events_single">
              <div class="event_date">
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
                  }}
                </span>
              </div>
              <div class="event_banner">
                <img
                  src="@/assets/images/event.jpeg"
                  alt=""
                  class="img-fluid"
                >
              </div>

              <div class="event_info d-flex flex-column align-items-start">
                <h3 class="mb-2">
                  {{ upcomingEvent.name }}
                </h3>

                <div class="events_time d-flex flex-row align-items-center">
                  <div class="events_time_content">
                    <ion-icon name="time-outline" />
                    <span class="ml-1">
                      {{ format_date(upcomingEvent.events_date) }}
                    </span>
                  </div>

                  <div class="events_time_content">
                    <ion-icon name="location-outline" />
                    <span class="ml-1">
                      {{ upcomingEvent.location }}
                    </span>
                  </div>
                </div>

                <p class="event_info_text">
                  <!-- {{ upcomingEvent.statement }} -->
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                  velit explicabo numquam? Molestiae, autem!
                </p>

                <nuxt-link
                  class="see-all-btn btn btn-danger"
                  :to="`${upcomingEvent.id}`"
                >
                  Ayrıntıları Gör
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment'

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
        // console.log(response.data)
        this.upcomingEvents = response.data
      })
    },
    format_date (value) {
      if (value) {
        return moment(value).format('DD.MM.YYYY')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';

* {
  transition: 0.4s ease-in-out all;
}

// deneme amaçlı koydum
ion-icon {
  color: $red;
}

.events-area {
  margin-top: -100px;
  background-image: url('assets/images/footerbg.png');
  background-color: lightgray;
  padding: 120px !important;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 1))
  );
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

.upcoming-event {
  margin-top: -30px;
  width: 90%;
  border-radius: 20px;
  margin-bottom: 70px;

  &:hover h3 {
    color: $red;
  }

  .events_full_box {
    padding: 0 !important;

    .events_single {
      position: relative;

      .event_date {
        position: absolute;
        top: 0;
        right: 0;
        background-color: $red;
        width: 75px;
        height: 75px;
        text-align: center;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        & span {
          color: $white;
        }
      }

      //event img
      .event_banner {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        & img {
          flex-shrink: 0;
          min-width: 100%;
          min-height: 100%;
          border-top-left-radius: 20px !important;
          border-bottom-left-radius: 20px !important;

          @media screen and (max-width: 770px) {
            border-bottom-left-radius: 0 !important;
            border-top-right-radius: 20px !important;
          }
        }
      }

      .event_info {
        position: relative;

        & h3 {
          font-size: 48px !important;
        }

        .events_time {
          padding: 30px 0 !important;

          &_content {
            font-size: 18px !important;
            & span {
              font-size: 18px !important;
            }
          }
        }

        .event_info_text {
          padding-bottom: 30px;
          font-size: 22px;
        }
      }
    }
  }
}

.event_info {
  height: 100% !important;
  width: 100%;

  h3 {
    font-size: 38px !important;
  }
}

.see-all-btn {
  background-color: $about-black !important;

  &:hover {
    background-color: $red !important;
  }
}
</style>
