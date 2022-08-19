<template>
  <!-- 轮播 -->
  <div id="demo" class="carousel slide index_banner" data-bs-ride="carousel">
    <!-- 轮播图片 -->
    <div class="carousel-inner">
      <div class="carousel-item active">
   <img data-cfsrc="https://static.cmereye.com/static/lkximg/image/banner/ban_pixta.jpg"
          srcset="https://static.cmereye.com/static/lkximg/image/banner/pixta_phone.jpg 400w, https://static.cmereye.com/static/lkximg/image/banner/pixta_phone.jpg 640w, https://static.cmereye.com/static/lkximg/image/banner/ban_pixta.jpg"
          title="提供全方位牙科服務" alt="提供全方位牙科服務" src="https://static.cmereye.com/static/lkximg/image/banner/ban_pixta.jpg" />
            <div class="title">提供全方位牙科服務</div>
            <div class="contents">整體分析客人口腔， <br> 建議針對性的治療方案</div>
      </div>
      <div class="carousel-item">
        <img data-cfsrc="https://static.cmereye.com/static/lkximg/image/banner/banner2.jpg"
          srcset="https://static.cmereye.com/static/lkximg/image/banner/mbBanner2.jpg 400w, https://static.cmereye.com/static/lkximg/image/banner/mbBanner2.jpg 640w, https://static.cmereye.com/static/lkximg/image/banner/banner2.jpg"
          title="提供全方位牙科服務" alt="提供全方位牙科服務" src="https://static.cmereye.com/static/lkximg/image/banner/banner2.jpg" />
    </div>
    <div class="carousel-item">
      <img data-cfsrc="https://static.cmereye.com/static/lkximg/image/banner/banner3.jpg"
          srcset="https://static.cmereye.com/static/lkximg/image/banner/mbBanner3.jpg 400w, https://static.cmereye.com/static/lkximg/image/banner/mbBanner3.jpg 640w, https://static.cmereye.com/static/lkximg/image/banner/banner3.jpg"
          title="提供全方位牙科服務" alt="提供全方位牙科服務" src="https://static.cmereye.com/static/lkximg/image/banner/banner3.jpg" />
    </div>
    </div>
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
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
  background-color: #C2C7CD;
  background-clip: padding-box;
  border: 0;
  margin-bottom: 2rem;
  margin-top: 1rem;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: .5;
  border-radius: 100%;
  transition: opacity .6s ease;
}

::v-deep .carousel-indicators {
  position: inherit;
}

::v-deep .carousel-indicators .active {
  opacity: 1 !important;
  background-color: #9BA5B1;
  width: 14px;
  height: 14px;
}
::v-deep .navbar-light .navbar-toggler {
    color: rgba(0,0,0,.55);
    border-color: #fff
}
//mb
@media only screen and (max-width: 768px) {
 .index_banner {
    position: relative;
  }

 .index_banner::after {
    animation: fade 3s ease-in-out alternate infinite;
    animation-delay: -0.4s;
    position: absolute;
    content: 'scroll';
    font-family: 'Helvetica';
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
    content: '';
    bottom: -22vw;
    left: 9vw;
    height: 55vw;
    background-color: #C2C7CD;
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
  color: #79828D;
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
  color: #79828D;
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
@media only screen and (min-width: 768px) {
  .index_banner{
    margin-top: 10px;
  }
  .carousel-item{
    text-align: center;

  }
  .contents{
    position: absolute;
    z-index: 2;
    height: 53vw;
    width: 39vw;
    left: 0;
    top: 37%;
    font-weight: 500;
    color: #79828D;
    font-size: 23px;
  }
  .title{
    position: absolute;
    z-index: 2;
    height: 0;
    top: 21%;
    left: 13%;
    font-weight: 600;
    font-size: 30px;
    line-height: 44px;
    letter-spacing: 0.1em;
    color: #79828d;
    text-align: left;
    }
  // .carousel-inner img[data-v-703b804a] {
  //   width: 90%;
  //   border-radius: 80px 80px 80px 80px;
  // }

  .carousel-inner {
    text-align: -webkit-center;

    img {
      width: 95%;
      border-radius: 80px 80px 80px 80px;
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

</style>