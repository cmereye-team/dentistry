import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
if (process.browser) {
    const VueAwesomeSwiper = require("vue-awesome-swiper/dist/ssr");
    Vue.use(VueAwesomeSwiper);
}
