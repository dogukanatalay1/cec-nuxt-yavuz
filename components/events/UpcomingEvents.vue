<template>
  <div />
  <!-- <section class="events-area d-flex justify-content-center align-items-center">
    <div class="events-area-container">
      <div class="header">
        <h2 class="events-area-container-header text-center mb-4">
          Yaklaşan Etkinlikler
        </h2>

        <p class="events-area-container-text text-center mb-5">
          Websitemizde yaklaşan etlinlikleri inceleyebilir ve dilerseniz
          katılmak için başvurabilirsiniz.
        </p>

        <div v-if="!upcomingpage" class="envent_all_view">
          <nuxt-link
            to="/upcoming"
            class="see-all-btn btn btn-danger"
            href="#"
            title=""
          >
            Tümünü Gör
          </nuxt-link>
        </div>

        <div v-else class="envent_all_view">
          <nuxt-link
            to="/"
            class="see-all-btn btn btn-danger"
            href="#"
            title=""
          >
            Geri Dön
          </nuxt-link>
        </div>
      </div>

      <div class="deneme" />

      <div v-if="!upcomingpage">
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
                <img :src="upcomingEvent.album[0].images[0].image" alt="">
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
                  Statement gelecek ipsum dolor sit amet consectetur adipisicing
                  elit. Vero velit explicabo numquam? Molestiae, autem!
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
                <img :src="upcomingEvent.album[0].images[0].image" alt="">
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
                  Buraya statement gelecek, ipsum dolor sit amet consectetur
                  adipisicing elit. Vero velit explicabo numquam? Molestiae,
                  autem!
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
  </section> -->
</template>

<script>
// import moment from 'moment'

// export default {
//   name: 'UpComingEvents',
//   props: {
//     upcomingpage: {
//       type: Boolean
//     }
//   },
//   data () {
//     return {
//       upcomingEvents: []
//     }
//   },
//   created () {
//     this.getUpcomingEvents()
//   },
//   methods: {
//     getUpcomingEvents () {
//       this.$API.events.getUpcomingEvents().then((response) => {
//         console.log(response.data)
//         this.upcomingEvents = response.data
//       })
//     },
//     format_date (value) {
//       if (value) {
//         return moment(value).format('DD.MM.YYYY')
//       }
//     }
//   }
// }
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
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 1))
  );

  &-container {
    width: 90%;

    &-header {
      font-size: 50px;
    }

    &-text {
      font-size: 20px;
    }
  }
}

.upcoming-event {
  margin-top: 30px;
  background-color: #fff;
  transition: 0.2s;
  box-shadow: 6px 7px 6px grey;
  width: 100%;
  border-radius: 20px;
  margin-bottom: 70px;

  &:hover {
    box-shadow: 8px 10px 8px grey;
    transition: 0.2s;
  }

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
          width: 100%;
          height: 100%;
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
          font-family: 'Poppins', sans-serif;
          font-weight: bold;
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
  font-size: 20px;
  background-color: $about-black !important;

  &:hover {
    background-color: $red !important;
  }
}
</style>
