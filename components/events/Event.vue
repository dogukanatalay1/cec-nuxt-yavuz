<template>
  <section id="popular_courses_2" class="popular_courses">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
          <div class="sub_title">
            <h2>Geçmiş Etkinliklerimiz</h2>
            <p>
              Burada kulübümüzün geçmişte yapmış olduğu etkinlikleri
              inceleyebilir, etkinlik formatlarımız hakkında fikir sahibi
              olabilirsiniz.
            </p>
          </div>
          <!-- ends: .section-header -->
        </div>
        <div
          v-for="event in events"
          :key="event.id"
          class="col-12 col-sm-6 col-md-6 col-lg-4"
        >
          <div class="single-courses">
            <div class="courses_banner_wrapper">
              <div class="courses_banner">
                <a href="#"><img
                  src="@/assets/images/event.jpeg"
                  alt=""
                  class="img-fluid"
                ></a>
              </div>
            </div>
            <div class="courses_info_wrapper">
              <div class="courses_title">
                <h3>
                  <a href="#">{{ event.name }}</a>
                </h3>
                <div class="teachers_name">
                  Katılımcı: <a href="#" title="">{{ event.organizer }}</a>
                </div>
              </div>
              <div class="courses_info">
                <ul class="list-unstyled">
                  <li>
                    <ion-icon name="calendar" />
                    {{
                      new Date(event.events_date).toLocaleString('tr-tr', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })
                    }}
                  </li>
                </ul>
                <a href="#" class="cart_btn">Add to Cart</a>
              </div>
            </div>
          </div>
          <!-- Ends: .single courses -->
        </div>
      </div>
    </div>
    <div class="shape_bg">
      <span class="shape_1" />
      <span class="shape_2" />
      <span class="shape_3" />
    </div>
  </section>
  <!-- ./ End Courses Area section -->
  <!-- Ends: . -->
</template>

<script>
export default {
  name: 'EventCardd',
  data () {
    return {
      events: []
    }
  },
  created () {
    this.getEvents()
  },
  methods: {
    getEvents () {
      this.$API.events.getEvents().then((response) => {
        this.events = response.data
      })
    }
    /*
    async getEvents () {
      const data = axios.get('https://ktucectest.herokuapp.com/api/events/')
      const result = await data
      console.log(result)

      this.events = result.data
    }
    */
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.popular_courses {
  height: 1000px;
}
</style>
