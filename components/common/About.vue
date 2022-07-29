<template>
  <section class="about_us">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-7 col-lg-7">
          <div class="about_title">
            <span>KTU CEC Hakkında</span>
            <h2>
              Karadeniz Teknik Üniversitesi Bilgisayar Mühendisliği Kulübü
            </h2>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-5 col-lg-5 p-0">
          <div class="banner_about">
            <img
              src="@/assets/images/aboutimg1.jpg"
              alt=""
              class="img-fluid about-img-1"
            >
          </div>
        </div>
      </div>
      <div class="row about_content_wrapper">
        <div class="col-12 col-sm-12 col-md-5 col-lg-5 p-0">
          <div class="about_banner_down">
            <img
              src="@/assets/images/aboutimg2.jpg"
              alt=""
              class="img-fluid about-img-2"
            >
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-7 col-lg-7">
          <div class="about_content">
            <p>
              Lorem ipsum dolor sit amet mollis felis dapibus arcu donec
              viverra. Pede phasellus eget. Etiam maecenas vel vici quis dictum
              rutrum nec nisi et.Lorem ipsum dolor sit amet mollis felis dapibus
              arcu donec viverra. Pede phasellus eget. Etiam maecenas vel vici
              quis dictum rutrum nec nisi et.Lorem ipsum dolor sit amet mollis
              felis dapibus arcu donec viverra. Pede phasellus eget. Etiam
              maecenas vel vici quis dictum rutrum nec nisi et.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterComponentt'
}
</script>

<style lang="scss" scoped>
.about_us {
  background-image: url('assets/images/map.png');
  margin-bottom: 100px;
}

.img-fluid {
  border-radius: 20px;
}

.about_content {
  p {
    font-size: 22px;
  }
}

.about-img-1 {
}

.about-img-2 {
  margin-top: 100px;
}

.btn {
  margin-top: -100px;
}

.row {
  margin-top: -50px;
}
</style>
