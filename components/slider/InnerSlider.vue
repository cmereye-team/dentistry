<template>
  <div>
    <div class="inner_slider">
      <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
        <div class="swiper-wrapper">
          <div class="swiper-slide w-full" v-for="(imgItem, index) in SliderImgList" :key="index">
            <div v-if="imgItem.type === 2">
              <a :href="imgItem.link">
                <img class="w-full img_item" :src="imgItem.url" :srcset="imgItem.srcset" /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    SliderImgList: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        centeredSlides: true,
        spaceBetween: 50,
        slidesPerView: "1",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>
<style scoped lang="scss">
@media only screen and (min-width: 768px) {
  .img_item {
    width: 100%;
    height: 281px;
  }

  .swiper-pagination {
    position: absolute;
    width: 100%;
    left: 0;
    transform: translate(15%, 0);
    bottom: -12%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ::v-deep .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #57B2F3;
    margin: 0 5px
  }

  ::v-deep .swiper-pagination-bullet-active {
    width: 15px;
    height: 15px;
  }
}

@media only screen and (max-width: 768px) {
}
</style>
