<template>
  <!-- 轮播 -->
  <div id="demo" class="carousel slide main-container" data-bs-ride="carousel">
    <!-- 轮播图片 -->
    <div class="carousel-inner">
      <div class="carousel-item active titleImg">
        <img
          data-cfsrc="https://static.cmereye.com/imgs/2023/09/c4a285c6f0cdf5f9.png"
          srcset="
            https://static.cmereye.com/imgs/2023/09/d6869dca311773bb.png 400w,
            https://static.cmereye.com/imgs/2023/09/d6869dca311773bb.png 640w,
            https://static.cmereye.com/imgs/2023/09/c4a285c6f0cdf5f9.png
          "
          title="牙齒美白"
          alt="牙齒美白"
          src="https://static.cmereye.com/imgs/2023/09/c4a285c6f0cdf5f9.png"
        />
        <!-- <img src="https://static.cmereye.com/static/lkximg/image/banner/beauty.png"> -->
        <!-- shd -->
        <div class="title">牙齒美白</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.carousel-inner {
  border-radius: 20px;
}
::v-deep .carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 12px;
  height: 12px;
  padding: 0;
  margin-right: 8px;
  margin-left: 8px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #c2c7cd;
  background-clip: padding-box;
  border: 0;
  margin-bottom: 2rem;
  margin-top: 1rem;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  border-radius: 100%;
  transition: opacity 0.6s ease;
}

::v-deep .carousel-indicators {
  position: inherit;
}

::v-deep .carousel-indicators .active {
  opacity: 1 !important;
  background-color: #9ba5b1;
  width: 14px;
  height: 14px;
}
::v-deep .navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.55);
  border-color: #fff;
}
//mb
@media only screen and (max-width: 760px) {
  .titleImg {
    position: relative;
    height: 53vw;
    width: 100vw;
    .title {
      position: absolute;
      z-index: 2;
      height: 53vw;
      width: 100vw;
      left: 0;
      top: 45%;
      font-weight: 600;
      color: #79828d;
      font-size: 24px;
    }
  }
  .d-block {
    display: block !important;
    height: 83vw;
    /* transform: scale(3,3); */
  }

  .carousel-inner {
    // margin-top: 16vw;
    text-align: -webkit-center;

    img {
      height: 51vw;
      // height: 100%;
      width: 90%;
      border-radius: 30px 30px 30px 30px;
    }
  }

  .section {
    width: 100%;
    margin: 0;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}

//pc
@media only screen and (min-width: 760px) {
  .titleImg {
    position: relative;
    height: 30vw;
    width: 100vw;
    text-align: center;
    .title {
      position: absolute;
      z-index: 2;
      height: 30vw;
      width: 100vw;
      left: 0;
      top: 45%;
      font-weight: 500;
      color: #79828d;
      font-size: 39px;
    }
  }
  .carousel-inner img[data-v-703b804a] {
    width: 90%;
    // border-radius: 80px 80px 80px 80px;
  }

  .carousel-inner {
    text-align: -webkit-center;

    img {
      width: 100%;
      // border-radius: 80px 80px 80px 80px;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-image: none;
    background-color: rgba(223, 223, 223, 0.5);
    border-radius: 100%;
    width: 2.5vw;
    height: 2.5vw;

    img {
      width: 0.8vw;
    }
  }

  .swiper-button-prev {
    left: 2vw;
  }

  .swiper-button-next {
    right: 2vw;
  }

  .swiperWrap {
    margin-top: 6.3vw;

    .swiper-slide {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
<style lang="scss"></style>
