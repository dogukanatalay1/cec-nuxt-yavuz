<template>
  <div>
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
            <nuxt-link :to="`${event.id}`" href="#" class="cart_btn">
              Ayrıntıları Gör
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCard'
}
</script>

<style lang="scss" scoped>
$color_1: #ea1538;
$color_2: #ffffff;
$color_3: #323232;
$color_4: #092ace;
$color_5: #6a7a83;
$font-family_1: 'Poppins', sans-serif;
$font-family_2: 'Rubik', sans-serif;

.single-courses {
  box-shadow: 0px 0px 81px 0px rgba(47, 47, 47, 0.1);
  transition: all 0.3s ease-in-out;
  margin-bottom: 50px;
  &:hover {
    box-shadow: 0px 0px 81px 0px rgba(47, 47, 47, 0.15);
    transition: all 0.3s ease-in-out;
    .courses_banner_wrapper {
      .courses_banner {
        img {
          transform: scale(1.1) rotate(4deg);
        }
      }
    }
    .courses-content {
      h3 {
        a {
          color: $color_1;
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
  .courses_banner_wrapper {
    position: relative;
    .courses_banner {
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        transform: scale(1.06) rotate(0deg);
        transition: all 0.3s ease-in-out;
      }
    }
    .purchase_price {
      position: absolute;
      text-align: right;
      bottom: 0;
      right: 0;
      width: 100%;
      z-index: 100;
      a {
        background: #092ace;
        font-weight: 600;
        border-radius: 0;
        color: $color_2;
        font-family: $font-family_1;
        display: inline-block;
        font-size: 18px;
        padding: 5px 25px;
        text-decoration: none;
      }
    }
  }
  .courses_info_wrapper {
    padding: 30px;
    .courses_title {
      h3 {
        margin: 0;
        line-height: 26px;
        a {
          color: $color_3;
          margin: 0px;
          font-weight: 700;
          font-size: 20px;
          transition: all 0.3s ease-in-out;
          font-family: $font-family_1;
          &:hover {
            color: $color_1;
          }
        }
      }
      .teachers_name {
        padding: 15px 0 10px;
        font-family: $font-family_2;
        font-size: 15px;
        font-weight: 400;
        a {
          color: $color_4;
          font-weight: 700;
          transition: all 0.3s ease-in-out;
          &:hover {
            color: $color_1;
          }
        }
      }
    }
    .courses_info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0;
      ul {
        margin-bottom: 0;
        li {
          color: $color_5;
          font-size: 14px;
          margin-bottom: 6px;
          font-family: $font-family_2;
          i {
            padding-right: 10px;
          }
        }
      }
      .cart_btn {
        background: #ea1538;
        font-weight: 500;
        border-radius: 0;
        color: $color_2;
        font-family: $font-family_2;
        display: inline-block;
        font-size: 12px;
        text-transform: uppercase;
        text-decoration: none;
        height: 36px;
        line-height: 36px;
        padding: 0 20px;
        transition: all 0.3s ease-in-out;
        &:hover {
          background: #092ace;
        }
      }
    }
  }
}
</style>
