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
              <!-- <i class="flaticon-student" /> -->
              <ion-icon class="icon" name="accessibility" />
            </div>
            <div class="blog_title">
              <h3>
                <a class="item-title" href="#" title="">Sosyal Etkinlikler</a>
              </h3>
              <p>
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
              <ion-icon class="icon" name="git-branch" />
            </div>
            <div class="blog_title">
              <h3>
                <a class="item-title" href="#" title="">Sektörel Etkinlikler</a>
              </h3>
              <p>
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
              <!-- <i class="flaticon-diploma" /> -->
              <ion-icon class="icon" name="business" />
            </div>
            <div class="blog_title">
              <h3>
                <a class="item-title" href="#" title="">Kulüp Odamız</a>
              </h3>
              <p>
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
.single_item {
  box-shadow: 5px 7px 7px 5px darkgray;
  height: 320px;
  transition: 0.2s;
}
.single_item:hover {
  box-shadow: 5px 10px 12px 5px darkgrey;
  transition: 0.2s;
  transform: scale(1.01);
}

.item-title:hover {
  color: $red !important;
}

.unlimited_possibilities {
  background-image: url('assets/images/bg2.png');

  background-repeat: no-repeat, repeat;
  background-size: cover;
}

.icon {
  font-size: 36px;

  :hover {
    transform: scale(1.1);
    color: $red;
  }
}
</style>
