<template>
  <div>
    <TheNavbar />
    <Nuxt />
    <CommonTheFooter />
  </div>
</template>

<script>
import TheNavbar from '../components/common/TheNavbar.vue'
export default {
    name: "DefaultLayout",
    head() {
        return {
            script: [
                {
                    src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",
                    body: true
                },
                {
                    src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js",
                    body: true
                }
                //       { src: 'js/jquery-3.2.1.min.js', body: true },
                //       { src: 'js/popper.min.js', body: true },
                //       { src: 'js/bootstrap.min.js', body: true },
                //       {
                //         src: 'js/assets/revolution/jquery.themepunch.revolution.min.js',
                //         body: true
                //       },
                //       {
                //         src: 'js/assets/revolution/jquery.themepunch.tools.min.js',
                //         body: true
                //       },
                //       { src: 'js/jquery.magnific-popup.min.js', body: true },
                //       { src: 'js/owl.carousel.min.js', body: true },
                //       { src: 'js/slick.min.js', body: true },
                //       { src: 'js/jquery.meanmenu.min.js', body: true },
                //       { src: 'js/waypoints.min.js', body: true },
                //       { src: 'js/jquery.counterup.min.js', body: true },
                //       { src: 'js/wow.min.js', body: true },
                //       {
                //         src: 'js/assets/revolution/extensions/revolution.extension.actions.min.js',
                //         body: true
                //       },
                //       {
                //         src: 'js/assets/revolution/extensions/revolution.extension.carousel.min.js',
                //         body: true
                //       },
                //       {
                //         src: 'js/assets/revolution/extensions/revolution.extension.kenburn.min.js',
                //         body: true
                //       },
                //       {
                //         src: 'js/assets/revolution/extensions/revolution.extension.layeranimation.min.js',
                //         body: true
                //       },
                //       {
                //         src: 'js/assets/revolution/extensions/revolution.extension.migration.min.js',
                //         body: true
                //       },
                //       {
                //         src: 'js/assets/revolution/extensions/revolution.extension.navigation.min.js',
                //         body: true
                //       },
                //       {
                //         src: 'js/assets/revolution/extensions/revolution.extension.parallax.min.js',
                //         body: true
                //       },
                //       {
                //         src: 'js/assets/revolution/extensions/revolution.extension.slideanims.min.js',
                //         body: true
                //       },
                //       {
                //         src: 'js/assets/revolution/extensions/revolution.extension.video.min.js',
                //         body: true
                //       },
                //       { src: 'js/assets/revolution/revolution.js', body: true },
                //       { src: 'js/custom.js', body: true }
            ]
            //     links: [
            //       { link: '/assets/css/assets/bootstrap.min.css', rel: 'stylesheet' },
            //       { link: '/assets/css/assets/font-awesome.min.css', rel: 'stylesheet' },
            //       { link: '/assets/css/assets/flaticon.css', rel: 'stylesheet' },
            //       { link: '/assets/css/assets/magnific-popup.css', rel: 'stylesheet' },
            //       { link: '/assets/css/assets/owl.carousel.css', rel: 'stylesheet' },
            //       { link: '/assets/css/assets/owl.theme.css', rel: 'stylesheet' },
            //       { link: '/assets/css/assets/animate.css', rel: 'stylesheet' },
            //       { link: '/assets/css/assets/slick.css', rel: 'stylesheet' },
            //       { link: '/assets/css/assets/preloader.css', rel: 'stylesheet' },
            //       { link: '/assets/css/assets/revolution/layers.css', rel: 'stylesheet' },
            //       {
            //         link: '/assets/css/assets/revolution/navigation.css',
            //         rel: 'stylesheet'
            //       },
            //       {
            //         link: '/assets/css/assets/revolution/settings.css',
            //         rel: 'stylesheet'
            //       },
            //       { link: '/assets/css/assets/meanmenu.css', rel: 'stylesheet' },
            //       { link: '/assets/css/style.css', rel: 'stylesheet' },
            //       { link: '/assets/css/responsive.css', rel: 'stylesheet' },
            //       { link: '/assets/css/demo.css', rel: 'stylesheet' }
            //     ]
        };
    },
    components: { TheNavbar }
}
</script>
