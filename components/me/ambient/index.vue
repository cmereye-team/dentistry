<template>
<div class="ambient bg-white py-5 pb-0 py-xs-2">
    <div class="flex justify-center texts">
      <h2>中心環境</h2>
      <img src="@/asset/image/about-me/serve/Vector.png" alt="">
    </div>
  <!-- 轮播 -->
  <div id="demo2" class="carousel slide" data-bs-ride="carousel">
    <!-- 轮播图片 -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/asset/image/me/BigPic.jpg">
      </div>
      <div class="carousel-item">
        <img src="@/asset/image/me/BigPic.jpg">
    </div>
    <div class="carousel-item">
      <img src="@/asset/image/me/BigPic.jpg">
    </div>
    </div>
    <!-- 指示符 -->

    <!-- 左右切换按钮 -->
    <!-- <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button> -->
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#demo2" data-bs-slide-to="0" class="active">
        <div >
          <img height="100px"  width="100px" src="@/asset/image/me/BigPic.jpg" alt="" >
          </div>
      </button>
      <button type="button" data-bs-target="#demo2" data-bs-slide-to="1">
        <div >
        <img height="100px" width="100px" src="@/asset/image/me/BigPic.jpg" alt="">
        </div>
      </button>
      <button type="button" data-bs-target="#demo2" data-bs-slide-to="2">
        <div >
        <img height="100px" width="100px" src="@/asset/image/me/BigPic.jpg" alt="">
        </div>
      </button>
      
    </div>
  </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
       banners: [
        { src: require("@/asset/image/me/BigPic.jpg")},
        { src: require("@/asset/image/me/BigPic.jpg")},
        { src: require("@/asset/image/me/BigPic.jpg")},
        { src: require("@/asset/image/me/BigPic.jpg")}
      ],
    }
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
.texts {
  text-align: center;
  margin-bottom: 2vw;
  h2 {
    font-weight: 300;
    color: #79828D;
    margin-bottom: 1vw;
  }

  image {
    text-align: center;
  }
}
//mb
@media only screen and (max-width: 768px) {
  .ambient{
     background: radial-gradient(99vw 24vw at  bottom ,transparent 50%,#ECF7FC 50%);
  // background: #ECF7FC !important;
     border-radius: 27% 27% 0 0;
    height: 171vw;
    margin-top: 5vw;
  }
.imgbox {
  margin: 0 3vw;
}
::v-deep .carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 0 !important;
  height: 0 !important;
  margin-right: 8px;
  margin-left: 8px;
  text-indent: -88px !important;
  cursor: pointer;
  // background-color: #C2C7CD;
  background-clip: padding-box;
  border: 0;
  margin: 2rem 6rem !important;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: .5;
  // border-radius: 100%;
  margin-right: 3% !important;

  transition: opacity .6s ease;
  button{
    margin: 0 4vw;
  }
}

::v-deep .carousel-indicators {
  position: inherit;
}

::v-deep .carousel-indicators .active {
  opacity: 1 !important;
   background-color: #9BA5B1;
}
::v-deep .navbar-light .navbar-toggler {
    color: rgba(0,0,0,.55);
    border-color: #fff
}
  .carousel-inner img[data-v-703b804a] {
    width: 90%;
    // border-radius: 80px 80px 80px 80px;
  }

  .carousel-inner {
    text-align: -webkit-center;

    img {
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
  .ambient{
     background: radial-gradient(99vw 24vw at  bottom ,transparent 50%,#ECF7FC 50%);
  // background: #ECF7FC !important;
     border-radius: 37% 37% 0 0;
     height: 70vw;
     margin-top: 5vw;
  }
.imgbox {
  margin: 0 3vw;
}
::v-deep .carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 0 !important;
  height: 0 !important;
  margin-right: 8px;
  margin-left: 8px;
  text-indent: 0 !important;
  cursor: pointer;
  // background-color: #C2C7CD;
  background-clip: padding-box;
  border: 0;
  margin: 2rem 6rem !important;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: .5;
  // border-radius: 100%;
  margin-right: 23% !important;

  transition: opacity .6s ease;
  button{
    margin: 0 4vw;
  }
}

::v-deep .carousel-indicators {
  position: inherit;
}

::v-deep .carousel-indicators .active {
  opacity: 1 !important;
   background-color: #9BA5B1;
}
::v-deep .navbar-light .navbar-toggler {
    color: rgba(0,0,0,.55);
    border-color: #fff
}
  .carousel-inner img[data-v-703b804a] {
    width: 90%;
    // border-radius: 80px 80px 80px 80px;
  }

  .carousel-inner {
    text-align: -webkit-center;

    img {
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
// .carousel-indicators [data-bs-target] {
//   box-sizing: content-box;
//   flex: 0 1 auto;
//   width: 12px;
//   height: 12px;
//   padding: 0;
//   margin-right: 8px;
//   margin-left: 8px;
//   text-indent: -999px;
//   cursor: pointer;
//   background-color: #C2C7CD;
//   background-clip: padding-box;
//   border: 0;
//   margin-bottom: 2rem;
//   margin-top: 1rem;
//   border-top: 10px solid transparent;
//   border-bottom: 10px solid transparent;
//   opacity: .5;
//   border-radius: 100%;
//   transition: opacity .6s ease;
// }

// .carousel-indicators {
//   position: inherit;
// }

// .carousel-indicators .active {
//   opacity: 1 !important;
//   background-color: #9BA5B1;
//   width: 14px;
//   height: 14px;
// }
// .navbar-light .navbar-toggler {
//     color: rgba(0,0,0,.55);
//     border-color: #fff
// }
</style>