<template>
  <div class="d-flex flex-column container single-event">
    <div class="btn-container">
      <nuxt-link to="/events" class="btn btn-danger">
        <ion-icon name="chevron-back-outline" />
        Geri Dön
      </nuxt-link>
    </div>

    <div class="single-event-info">
      <div class="single-event-info-img">
        <!-- <img src="@/assets/images/bg.jpg" alt=""> -->
        <img :src="singleEvent.album[0].images[0].image">
      </div>

      <div class="single-event-info-content">
        <h1 class="single-event-info-content-header">
          {{ singleEvent.name }}
        </h1>

        <span class="single-event-info-content-organizer">
          <b>
            <ion-icon name="person-outline" />
            Organizatör - Misafir :
          </b>
          {{ singleEvent.organizer }}
        </span>

        <p class="single-event-info-content-statement">
          {{ singleEvent.statement }}
        </p>

        <div class="single-event-info-content-date">
          <span><b>
            <ion-icon name="location-outline" />{{ singleEvent.location }}
          </b></span>

          <span><b>
            <ion-icon name="calendar-outline" />
            {{
              new Date(singleEvent.events_date).toLocaleString('tr-tr', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })
            }}
          </b></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    singleEvent: {
      type: Object,
      required: true
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.single-event-info-content-statement {
  padding: 30px;
  text-align: center;
}

b {
  color: $red;
}

.single-event {
  padding: 20px;
  margin-bottom: 200px;
  margin-top: 50px;

  &-info {
    margin-top: 50px;
    border-radius: 20px;
    border: 0.4px solid #ddd;
    height: 84vh;
    box-shadow: 5px 5px 30px 20px #ddd;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and(max-width:750px) {
      flex-direction: column;
      min-height: 90vh;
      height: auto;
    }

    &-img {
      width: 50%;
      height: 100%;

      @media screen and (max-width: 750px) {
        width: 100%;
      }

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;

        @media screen and (max-width: 750px) {
          border-top-right-radius: 20px;
          border-bottom-left-radius: 0;
        }
      }
    }

    &-content {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      font-size: 20px;
      text-align: center;
      padding: 22px;

      @media screen and (max-width: 750px) {
        width: 100%;
      }

      & h1 {
        font-size: 52px;
        color: $about-black;
        font-weight: 600;
        margin-bottom: 14px;
      }

      & p {
        font-size: 22px;
      }

      &-date {
        & span:first-child {
          margin-right: 20px;
        }
      }
    }
  }
}

.container {
  width: 90%;
}
</style>
