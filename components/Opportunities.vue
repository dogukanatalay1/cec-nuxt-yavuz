<template>
  <section class="unlimited_possibilities">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
          <div class="sub_title">
            <h2>Kulübümüz size neler kazandırabilir?</h2>
          </div>
          <!-- ends: .section-header -->
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
          <div class="single_item single_item_first">
            <div class="icon_wrapper">
              <font-awesome-icon class="icon" icon="fa-solid fa-people-group" />
            </div>
            <div class="blog_title">
              <h3>
                <a class="item-title" href="#" title="">Sosyal Etkinlikler</a>
              </h3>
              <p class="text">
                Birçok bölümden üye barındıran KTU CEC; sürekli olarak geziler
                ve kahvaltılar gibi çeşitli etkinlikler düzenler ve bir çok yeni
                insan ile keyifli zaman geçirmenizi sağlar.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
          <div class="single_item single_item_center">
            <div class="icon_wrapper">
              <!-- <i class="flaticon-university" /> -->
              <font-awesome-icon class="icon" icon="fa-solid fa-code-branch" />
            </div>
            <div class="blog_title">
              <h3>
                <a class="item-title" href="#" title="">Sektörel Etkinlikler</a>
              </h3>
              <p class="text">
                Codenight ve farklı teknolojilere dair eğitim programları ile
                yoğunlukla ilgilenen KTU CEC, mesleki anlamda iyi bağlantılar
                edinebilmenizi ve yeni bakış açıları kazanabilmenizi sağlar.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
          <div class="single_item single_item_last">
            <div class="icon_wrapper">
              <font-awesome-icon class="icon" icon="fa-solid fa-building-user" />
            </div>
            <div class="blog_title">
              <h3>
                <a class="item-title" href="#" title="">Kulüp Odamız</a>
              </h3>
              <p class="text">
                Kulüp odamızdan programlama kitapları teslim alabilir,
                kütüphaneye nazaran daha rahat bir çalışma ortamı sunan odamızda
                çalışabilir veya orada bulunan diğer insanlar ile farklı
                konularda sohbet edebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Unlimited Possibilities -->
</template>

<script>
export default {
  name: 'OppVue'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';


.unlimited_possibilities {
  padding: 60px !important;
}

.single_item {
  box-shadow: 5px 7px 7px 5px darkgray;
  height: 340px;
  transition: 0.2s;
}

.single_item:hover {
  box-shadow: 5px 10px 12px 5px darkgrey;
  transition: 0.2s;
  transform: scale(1.01);
}

a {
  cursor: default;
}

.text {
  color: black !important;
}

.item-title:hover {
  color: $red  !important;
}

.unlimited_possibilities {
  background-image: url('assets/images/bg2.png');
  -webkit-mask-image: -webkit-gradient(linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 1)));
  background-repeat: no-repeat, repeat;
  background-size: cover;
}

.icon {
  font-size: 47px;
  margin-bottom: -23px;
  transition: ease-in-out 0.4s;

  &:hover {
    transform: scale(1.3);
    color: $red;
    transition: ease-in-out 0.3s;
  }
}
</style>
