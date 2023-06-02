<template>
  <!-- 轮播 -->
  <div id="mebaner" class="carousel slide index_banner main-container"  data-bs-ride="carousel">
    <!-- 轮播图片 -->
    <div class="carousel-inner">
      <div class="carousel-item titleImg active">
        <img data-cfsrc="https://static.cmereye.com/imgs/2023/06/72de234cb6d328ca.jpg " 
        srcset="https://static.cmereye.com/imgs/2023/06/72de234cb6d328ca.jpg 400w, https://static.cmereye.com/imgs/2023/06/72de234cb6d328ca.jpg 640w, https://static.cmereye.com/imgs/2023/06/72de234cb6d328ca.jpg " 
        title="婚展禮遇" 
        alt="婚展禮遇" 
        src="https://static.cmereye.com/imgs/2023/06/72de234cb6d328ca.jpg"/>
          <div class="title">
            <span class="ser-title">婚展禮遇</span>
          </div>
      </div>
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
@media only screen and (max-width: 760px) {
  .titleImg{
    position: relative;
    height: 53vw;
    width: 100vw;
    .title{
      position: absolute;
      z-index:2;
      height: 53vw;
      width: 100vw;
      left:0;
      top:45%;
      font-weight: 600;
      color: #79828D;
      font-size: 24px;
    }
  }
  .d-block {
    display: block !important;
    height: 83vw;
    /* transform: scale(3,3); */
  }

  .carousel-inner {
    margin-top: 1vw;
    text-align: -webkit-center;

    img {
      height: 51vw;
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
  .ispcshow{
    display: none;
  }
 .index_banner {
    position: relative;
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
  // margin-top: 16vw;
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
@media only screen and (min-width: 760px) {
  .ismdshow{
    display: none;
  }
  .ser-title{
    line-height: 44px;
    letter-spacing: 0.1em;
    color: #79828d;
    font-weight: 500;
    color: #79828D;
    font-size: 39px;
  }
  #mebaner{
    position: relative;
    z-index: 0;
    width: calc(100% - 120px);
    max-width: 1800px;
    // max-height: 800px;
    margin-left: auto;
    margin-right: auto;
    // margin-bottom: ;
  }
  .index_banner{
    margin-top: 10px;
  }
  .carousel-item{
    text-align: center;

  }
  .contents{
    
    font-weight: 500;
    color: #79828D;
    font-size: 23px;
  }
  .title{
    position: absolute;
    z-index: 2;
    height: 0;
    top: 45%;
    left: 45%;
   
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
