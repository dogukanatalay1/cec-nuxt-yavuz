<template>
  <section class="about_us">
    <div class="container">
      <nuxt-link class="btn btn-danger" to="/">
        <ion-icon name="caret-back-outline" />
        Geri Dön
      </nuxt-link>
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
            <img src="@/assets/images/cec(1).png" alt="" class="img-fluid">
          </div>
        </div>
      </div>
      <div class="row about_content_wrapper">
        <div class="col-12 col-sm-12 col-md-5 col-lg-5 p-0">
          <div class="about_banner_down">
            <img src="@/assets/images/cec(1).png" alt="" class="img-fluid">
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
}
</style>
