<template>
  <!-- 轮播 -->
  <div id="demo" class="main-container carousel slide" data-bs-ride="carousel">
    <!-- 轮播图片 -->
    <div class="carousel-inner">
      <div class="carousel-item active titleImg" id="titleImg">
        <!-- <img src="https://static.cmereye.com/static/lkximg/image/banner/hiddenBeauty.png"> -->
        <img data-cfsrc="https://static.cmereye.com/static/lkximg/image/banner/hiddenBeauty.png" 
        srcset="https://static.cmereye.com/static/lkximg/image/banner/hiddenBeautyMb.png 400w, https://static.cmereye.com/static/lkximg/image/banner/hiddenBeautyMb.png 640w, https://static.cmereye.com/static/lkximg/image/banner/hiddenBeauty.png "
        src="https://static.cmereye.com/static/lkximg/image/banner/hiddenBeauty.png"
        class="bannImg"/>
          <div class="title" id="title_img">
        <img class="iconImg" src=" https://static.cmereye.com/static/lkximg/image/banner/hiddenBeauty1.png "
            srcset="
            https://static.cmereye.com/static/lkximg/image/banner/hiddenBeauty2.png 400w,
            https://static.cmereye.com/static/lkximg/image/banner/hiddenBeauty2.png 750w,
            https://static.cmereye.com/static/lkximg/image/banner/hiddenBeauty2.png 768w,
            https://static.cmereye.com/static/lkximg/image/banner/hiddenBeauty2.png 1024w,
            https://static.cmereye.com/static/lkximg/image/banner/hiddenBeauty2.png 1125w,
            https://static.cmereye.com/static/lkximg/image/banner/hiddenBeauty1.png 1650w,
            ">
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
@media only screen and (max-width: 768px) {
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
      top:34%;
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
    // margin-top: 16vw;
    text-align: -webkit-center;

    .bannImg {
      height: 51vw;
      // height: 100%;
      width: 90%;
      border-radius: 30px 30px 30px 30px;
    }
    .iconImg{
      width: 50%;
      
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
  #demo{
    position: relative;
    z-index: 0;
    width: calc(100% - 120px);
    max-width: 1800px;
    // max-height: 800px;
    margin-left: auto;
    margin-right: auto;
    // margin-bottom: ;
  }
  #titleImg{
    position: relative;
    text-align: center;
    #title_img{
      position: absolute;
      z-index:2;
      width: 85% !important;
      left: 9% !important;
      top: 188px !important;
      font-weight: 500;
      color: #79828D;
      font-size: 39px;
      img{
        width: 30%;
      }
    }
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
<style lang="scss" >

</style>