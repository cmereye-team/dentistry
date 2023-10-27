<template>
  <!-- 轮播 -->
  <div
    id="demo"
    class="carousel slide index_banner main-container"
    data-bs-ride="carousel"
    data-touch="true"
  >
    <!-- 轮播图片 -->
    <div class="carousel-inner">
      <!-- <div class="carousel-item active">
        <a href="https://smilepartner.cmermedical.com/">
          <img
            data-cfsrc="https://static.cmereye.com/imgs/2022/12/1ad5167149def6b3.jpg"
            srcset="
              https://static.cmereye.com/imgs/2022/12/4862d5cd0d6f8019.jpg 400w,
              https://static.cmereye.com/imgs/2022/12/4862d5cd0d6f8019.jpg 640w,
              https://static.cmereye.com/imgs/2022/12/1ad5167149def6b3.jpg
            "
            title="提供全方位牙科服務"
            alt="提供全方位牙科服務"
            src="https://static.cmereye.com/imgs/2022/12/1ad5167149def6b3.jpg"
          />
        </a>
      </div> -->
      <div class="carousel-item active">
        <img
          data-cfsrc="https://static.cmereye.com/static/lkximg/image/banner/ban_pixta.jpg"
          srcset="
            https://static.cmereye.com/static/lkximg/image/banner/pixta_phone.jpg 400w,
            https://static.cmereye.com/static/lkximg/image/banner/pixta_phone.jpg 640w,
            https://static.cmereye.com/static/lkximg/image/banner/ban_pixta.jpg
          "
          title="提供全方位牙科服務"
          alt="提供全方位牙科服務"
          src="https://static.cmereye.com/static/lkximg/image/banner/ban_pixta.jpg"
        />
        <div class="title ispcshow">
          <span class="ser-title">提供全方位牙科服務</span><br />
          <span class="contents"
            >整體分析客人口腔， <br />
            建議針對性的治療方案</span
          >
        </div>
        <div class="title ismdshow">提供全方位牙科服務</div>
        <div class="contents ismdshow">
          整體分析客人口腔， <br />
          建議針對性的治療方案
        </div>
      </div>

      <div class="carousel-item">
        <img
          data-cfsrc="https://static.cmereye.com/imgs/2023/10/948bfe304b453c0c.png"
          srcset="
            https://static.cmereye.com/imgs/2023/10/0d8116d9eaa77470.png 400w,
            https://static.cmereye.com/imgs/2023/10/0d8116d9eaa77470.png 640w,
            https://static.cmereye.com/imgs/2023/10/948bfe304b453c0c.png
          "
          title="提供全方位牙科服務"
          alt="提供全方位牙科服務"
          src="https://static.cmereye.com/imgs/2023/10/948bfe304b453c0c.png"
        />
      </div>
      <div class="carousel-item">
        <img
          data-cfsrc="https://static.cmereye.com/static/lkximg/image/banner/banner3.jpg"
          srcset="
            https://static.cmereye.com/static/lkximg/image/banner/mbBanner3.jpg 400w,
            https://static.cmereye.com/static/lkximg/image/banner/mbBanner3.jpg 640w,
            https://static.cmereye.com/static/lkximg/image/banner/banner3.jpg
          "
          title="提供全方位牙科服務"
          alt="提供全方位牙科服務"
          src="https://static.cmereye.com/static/lkximg/image/banner/banner3.jpg"
        />
      </div>
    </div>
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="0"
        class="active"
      ></button>
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="1"
      ></button>
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="2"
      ></button>
      <!-- <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="3"
      ></button> -->
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
.dddddd {
  width: 80%;
  background: #00000080;
  height: 300px;
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
@media only screen and (max-width: 740px) {
  .ispcshow {
    display: none;
  }
  .index_banner {
    position: relative;
  }

  .index_banner::after {
    animation: fade 3s ease-in-out alternate infinite;
    animation-delay: -0.4s;
    position: absolute;
    content: "scroll";
    font-family: "Helvetica";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    letter-spacing: 0.1em;
    color: #000000;
    bottom: 5vw;
    left: 2vw;
    background: #ffffff;
    z-index: 998;
    padding: 2vw;
  }

  .index_banner::before {
    animation: fadeline 3s ease-in-out alternate infinite;
    animation-delay: -0.2s;
    position: absolute;
    content: "";
    bottom: -22vw;
    left: 9vw;
    height: 55vw;
    background-color: #c2c7cd;
    width: 1px;
    z-index: 99;
  }

  .contents {
    position: absolute;
    z-index: 2;
    height: 58vw;
    width: 100%;
    left: -17%;
    top: 17%;
    font-weight: 500;
    color: #79828d;
    font-size: 16px;
    text-align: left;
  }

  .title {
    position: absolute;
    z-index: 2;
    height: 53vw;
    width: 100%;
    left: -10%;
    top: 9%;
    font-weight: 500;
    color: #79828d;
    font-size: 22px;
  }

  .d-block {
    display: block !important;
    height: 83vw;
    /* transform: scale(3,3); */
  }

  .carousel-inner {
    margin-top: 16vw;
    text-align: -webkit-center;

    img {
      height: 100%;
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
@media only screen and (min-width: 740px) {
  .ismdshow {
    display: none;
  }
  .ser-title {
    font-weight: 600;
    font-size: 30px;
    line-height: 44px;
    letter-spacing: 0.1em;
    color: #79828d;
  }
  #demo {
    position: relative;
    z-index: 0;
    width: calc(100% - 120px);
    max-width: 1800px;
    // max-height: 800px;
    margin-left: auto;
    margin-right: auto;
    // margin-bottom: ;
  }
  .index_banner {
    margin-top: 10px;
  }
  .carousel-item {
    text-align: center;
  }
  .contents {
    font-weight: 500;
    color: #79828d;
    font-size: 23px;
  }
  .title {
    position: absolute;
    z-index: 2;
    height: 0;
    top: 24%;
    left: 8%;

    text-align: left;
  }
  // .carousel-inner img[data-v-703b804a] {
  //   width: 90%;
  //   border-radius: 80px 80px 80px 80px;
  // }

  .carousel-inner {
    text-align: -webkit-center;

    img {
      width: 100%;
      border-radius: 15px 15px 15px 15px;
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
<style lang="scss" >
//pc
@media only screen and (min-width: 760px) {
  .main-container {
    max-width: 1440px !important;
    margin: 0 auto;
  }
  .index_banner {
  }
  #demo {
    width: calc(100% - 120px);
    margin-top: 10px !important;
  }
  .titleImg {
    height: auto !important;
    width: inherit !important;
  }
  .titleImg .title {
    width: auto !important;
    left: 43% !important;
    top: 42% !important;
  }
}
</style>
