<template>
  <div>
    <!-- <div class="inner_slider">
      <div v-swiper:mySwiper="swiperOption">
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
    </div> -->
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in SliderImgList" :key="item">
        <div v-if="item.type === 2">
          <a :href="item.link">
            <img class="w-full img_item" :src="item.url" :srcset="item.srcset" /></a>
        </div>
      </el-carousel-item>
    </el-carousel>
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
      // swiperOption: {
      //   loop: true,
      //   autoplay: {
      //     delay: 2500,
      //     disableOnInteraction: false,
      //   },
      //   centeredSlides: true,
      //   spaceBetween: 50,
      //   slidesPerView: "1",
      //   pagination: {
      //     el: ".swiper-pagination",
      //     clickable: true,
      //   },
      // },
    };
  },
};
</script>
<style scoped lang="scss">
@media only screen and (min-width: 768px) {
  .img_item {
    width: 503px;
    height: 281px;
    border-radius: 25px;
  }
  ::v-deep .el-carousel__button {
    height: 12px;
    width: 12px;
    border-radius: 100%;
    background: #57B2F3;
  }

//   .swiper-pagination {
//     position: absolute;
//     width: 100% !important;
//     left: 0;
//     transform: translate(15%, 0);
//     bottom: -12%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   ::v-deep .swiper-pagination-bullet {
//     width: 12px !important;
//     height: 12px !important;
//     background-color: #57B2F3 !important;
//     margin: 0 5px !important;
//     transform: scale(1) !important;
//   }

//   ::v-deep .swiper-pagination-bullet-active {
//     width: 15px !important;
//     height: 15px !important;
//   }

//   ::v-deep .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
//     transform: scale(1) !important;
//     position: unset !important;
//     left: auto;
//   }
}

@media only screen and (max-width: 768px) {}
</style>
