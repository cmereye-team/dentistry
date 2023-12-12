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
      <el-carousel-item v-for="item in SliderImgList" :key="item.link">
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
  ::v-deep .el-carousel__container {
    width: 503px;
    height: 281px;
  }
}

@media only screen and (max-width: 768px) {
  .img_item {
    width: 318px;
    height: 178px;
  }
  ::v-deep .el-carousel__button {
    height: 12px;
    width: 12px;
    border-radius: 100%;
    background: #57B2F3;
  }
  ::v-deep .el-carousel__container {
    width: 318px;
    height: 178px;
  }
}
</style>
