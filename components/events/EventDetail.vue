<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center m-auto"
  >
    <div class="btn-container">
      <nuxt-link to="/" class="btn btn-danger back-btn">
        Geri Dön
      </nuxt-link>
    </div>

    <div class="container">
      <div class="cover" />
      <div class="content">
        <div class="title-container">
          <span class="title"><b>{{ singleEvent.name }}</b></span>
        </div>
        <div class="content-body d-flex flex-column justify-content-between">
          <div class="organizer-container mt-2 mb-5">
            <span class="organizer">
              Organizatör - Misafir : {{ singleEvent.organizer }}
            </span>
          </div>
          <div class="statement-container">
            <p class="statement">
              {{ singleEvent.statement }}
            </p>
          </div>

          <div class="footer d-flex flex-row justify-content-between">
            <div class="location-container">
              <span>{{ singleEvent.location }}</span>
            </div>
            <div class="date-container">
              <span>
                {{
                  new Date(singleEvent.events_date).toLocaleString('tr-tr', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })
                }}
              </span>
            </div>
          </div>
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
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/main.scss';

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.btn-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: 1vh;
}
.back-btn {
  width: 100px;
  height: 30px;
  font-size: 18px;
  margin-top: 40px;
  margin-left: 40px;
  text-align: center;
}

.title-container {
  border: 1px solid black;
}
.container {
  width: 90%;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-areas: 'cover content';
  box-shadow: -2px 0px 33px 0px rgba(0, 0, 0, 0.75);
  margin-top: 5%;
}

.cover {
  grid-area: cover;
  height: 80vh;

  //background-image: url('@/assets/images/kahvalti.jpeg');
  background-size: cover;
  background-position: center center;
}

.footer {
  border: 1px solid black;
  position: relative;
}
.content {
  grid-area: content;
  background: #efefef;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
}
.nav {
  margin: 10px 20px;
  height: 40px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  color: gray;
}
.content-body {
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  height: 80%;

  .organizer-container {
    border: 1px solid black;
    height: 50px;
    width: 100%;
    display: block;
  }

  .statement-container {
    border: 1px solid black;
    display: block;
    width: 80%;
    padding: 10px;
  }
}

.title {
  font-size: 64px;
  position: relative;
  margin-left: 20%;
  margin-bottom: 100px;
}
.prix {
  margin: 50px 0px;
  width: 45%;
  display: flex;
  justify-content: space-between;
  border-left: 4px solid rgb(255, 177, 33);
}
.prix span {
  padding-left: 10px;
}
</style>
