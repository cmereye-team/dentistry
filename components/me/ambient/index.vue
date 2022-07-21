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
          <div class="main">
            <div class="border_corner border_corner_left_top"></div>
            <div class="border_corner border_corner_right_top"></div>
            <div class="border_corner border_corner_left_bottom"></div>
            <div class="border_corner border_corner_right_bottom"></div>
            <img class="show" src="@/asset/image/me/BigPic.jpg">
          </div>  
      </div>
      <div class="carousel-item">
        <div class="main">
            <div class="border_corner border_corner_left_top"></div>
            <div class="border_corner border_corner_right_top"></div>
            <div class="border_corner border_corner_left_bottom"></div>
            <div class="border_corner border_corner_right_bottom"></div>
            <img class="show" src="@/asset/image/me/BigPic.jpg">
          </div>
    </div>
    <div class="carousel-item">
      <div class="main">
            <div class="border_corner border_corner_left_top"></div>
            <div class="border_corner border_corner_right_top"></div>
            <div class="border_corner border_corner_left_bottom"></div>
            <div class="border_corner border_corner_right_bottom"></div>
            <img class="show" src="@/asset/image/me/BigPic.jpg">
          </div>
    </div>
    <div class="carousel-item">
        <div class="main">
            <div class="border_corner border_corner_left_top"></div>
            <div class="border_corner border_corner_right_top"></div>
            <div class="border_corner border_corner_left_bottom"></div>
            <div class="border_corner border_corner_right_bottom"></div>
            <img class="show" src="@/asset/image/me/BigPic.jpg">
          </div>
    </div>
    <div class="carousel-item">
        <div class="main">
            <div class="border_corner border_corner_left_top"></div>
            <div class="border_corner border_corner_right_top"></div>
            <div class="border_corner border_corner_left_bottom"></div>
            <div class="border_corner border_corner_right_bottom"></div>
            <img class="show" src="@/asset/image/me/BigPic.jpg">
          </div>
    </div>
    <div class="carousel-item">
        <div class="main">
            <div class="border_corner border_corner_left_top"></div>
            <div class="border_corner border_corner_right_top"></div>
            <div class="border_corner border_corner_left_bottom"></div>
            <div class="border_corner border_corner_right_bottom"></div>
            <img class="show" src="@/asset/image/me/BigPic.jpg">
          </div>
    </div>
    <div class="carousel-item">
        <div class="main">
            <div class="border_corner border_corner_left_top"></div>
            <div class="border_corner border_corner_right_top"></div>
            <div class="border_corner border_corner_left_bottom"></div>
            <div class="border_corner border_corner_right_bottom"></div>
            <img class="show" src="@/asset/image/me/BigPic.jpg">
          </div>
    </div>
   
    </div>
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#demo2" data-bs-slide-to="0" class="active">
        <div >
          <img  src="@/asset/image/me/BigPic.jpg" alt="" >
          </div>
      </button>
      <button type="button" data-bs-target="#demo2" data-bs-slide-to="1">
        <div >
          <img  src="@/asset/image/me/BigPic.jpg" alt="" >
          </div>
      </button>
      <button type="button" data-bs-target="#demo2" data-bs-slide-to="2">
        <div >
          <img  src="@/asset/image/me/BigPic.jpg" alt="" >
          </div>
      </button>
       <button type="button" data-bs-target="#demo2" data-bs-slide-to="3">
        <div >
          <img h src="@/asset/image/me/BigPic.jpg" alt="" >
          </div>
      </button> <button type="button" data-bs-target="#demo2" data-bs-slide-to="4">
       <div >
          <img  src="@/asset/image/me/BigPic.jpg" alt="" >
          </div>
      </button> <button type="button" data-bs-target="#demo2" data-bs-slide-to="5">
        <div >
          <img  src="@/asset/image/me/BigPic.jpg" alt="" >
          </div>
      </button> 
      <button type="button" data-bs-target="#demo2" data-bs-slide-to="6">
        <div >
          <img  src="@/asset/image/me/BigPic.jpg" alt="" >
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
  margin-top: 2vw;
  h2 {
    font-weight: 300;
    color: #79828D;
    margin-bottom: 0vw;
  }

  image {
    text-align: center;
  }
}
//mb
@media only screen and (max-width: 768px) {
  .carousel-inner img{
    height: 92%;
    width: 76% !important;
    border-radius: 30px 30px 30px 30px;
  }
  .border_corner{
    z-index: 2500;
    position: absolute;
    width: 20px;
    height: 23px;
    padding: 1vw;
    background: rgba(0, 0, 0, 0);
    border: 4px solid #FFB7B7;
}
.border_corner_left_top{
    top: 0;
    left: 4vw;
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 14px;
}
.border_corner_right_top{
    top: 0;
    right: 4vw;
    border-left: none;
    border-bottom: none;
    border-top-right-radius: 14px;
}
.border_corner_left_bottom{
    bottom: 0;
    left: 4vw;
    border-right: none;
    border-top: none;
    border-bottom-left-radius: 14px;
}
.border_corner_right_bottom{
    bottom: 0;
    right:  4vw;
    border-left: none;
    border-top: none;
    border-bottom-right-radius: 14px;
}
  v::deep .carousel-indicators {
    display: block !important;
    margin: 0 10vw;
  }
  .ambient{
    //  background: radial-gradient(99vw 24vw at  bottom ,transparent 50%,#ECF7FC 50%);
  // background: #ECF7FC !important;
    //  border-radius: 27% 27% 0 0;
    height: 241vw;
    margin-top: 5vw;
    clip-path: ellipse(100% 54% at 51% 54%);
    background: radial-gradient(108vw 68vw at  bottom ,transparent 50%,#ECF7FC 50%) !important;

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
  img{
    height: 92px;
    width: 102px;
  }
  button{
    margin: 0 4vw;
  }
}

::v-deep .carousel-indicators {
  position: inherit;
  display: block !important;
  margin-right: 8% !important;
    margin-left: 8% !important;
}

::v-deep .carousel-indicators .active {
  opacity: 1 !important;
   background-color: #9BA5B1;
}
::v-deep .navbar-light .navbar-toggler {
    color: rgba(0,0,0,.55);
    border-color: #fff
}
  .carousel-inner img {
    width: 90%;
    // border-radius: 80px 80px 80px 80px;
  }

  .carousel-inner {
    text-align: -webkit-center;
    img {
      //  border: 1px solid #79828D;
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
  .show{
    padding: 2vw;
    width: 100%;
  }
.main{
  position: relative;
  width: 50%;
}
.border_corner{
    z-index: 2500;
    position: absolute;
    width: 20px;
    height: 23px;
    padding: 1vw;
    background: rgba(0, 0, 0, 0);
    border: 4px solid #FFB7B7;
}
.border_corner_left_top{
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 14px;
}
.border_corner_right_top{
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
    border-top-right-radius: 14px;
}
.border_corner_left_bottom{
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
    border-bottom-left-radius: 14px;
}
.border_corner_right_bottom{
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
    border-bottom-right-radius: 14px;
}
  .ambient{
    position: relative;
    background: #ECF7FC;
    background: radial-gradient(129vw 28vw at bottom, transparent 50%, #ECF7FC 50%);
    -webkit-clip-path: ellipse(100% 67% at 50% 70%);
    clip-path: ellipse(100% 67% at 50% 70%);
    height: 80vw;
    margin-top: 5vw;
  }
.imgbox {
  margin: 0 3vw;
}
::v-deep .carousel-indicators {
    /* position: absolute; */
    /* right: 0; */
    /* bottom: 0; */
    /* left: 0; */
    /* z-index: 2; */
    /* justify-content: center; */
    padding: 0;
    margin-right: 15%;
    /* margin-bottom: 1rem; */
    /* margin-left: 15%; */
    list-style: none;
    word-wrap: break-word;
    width: 55%;
    justify-content: center;
    // margin-left: 21vw;
    display: block !important;
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
  margin: 3rem 10rem !important;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: .5;
  // border-radius: 100%;
  margin-right: 4% !important;
  img{
    height:105px;
    width:142px;
  }
  transition: opacity .6s ease;
  button{
    margin: 0 4vw;
  }
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