<template>
  <!-- 轮播 -->
  <div id="demo" class="carousel slide  main-container" data-bs-ride="carousel">
    <!-- 轮播图片 -->
    <div class="carousel-inner">
      <div class="carousel-item active titleImg">
        <!-- <img src="https://static.cmereye.com/static/lkximg/image/banner/DentalCare.png"> -->
        <img data-cfsrc="https://static.cmereye.com/static/lkximg/image/banner/DentalCare.png" 
        srcset="https://static.cmereye.com/static/lkximg/image/banner/DentalCareMb.png 400w, https://static.cmereye.com/static/lkximg/image/banner/DentalCareMb.png 640w, https://static.cmereye.com/static/lkximg/image/banner/DentalCare.png" 
        title="牙齒健康" 
        alt="牙齒健康" 
        src="https://static.cmereye.com/static/lkximg/image/banner/DentalCare.png"/>


        <!-- <img src=" https://static.cmereye.com/static/lkximg/image/banner/DentalCare.jpg "
            srcset="
            https://static.cmereye.com/static/lkximg/image/banner/DentalCareMb.png 400w,
            https://static.cmereye.com/static/lkximg/image/banner/DentalCareMb.png 750w,
            https://static.cmereye.com/static/lkximg/image/banner/DentalCareMb.png 768w,
            https://static.cmereye.com/static/lkximg/image/banner/DentalCareMb.png 1024w,
            https://static.cmereye.com/static/lkximg/image/banner/DentalCareMb.png 1125w,
            https://static.cmereye.com/static/lkximg/image/banner/DentalCare.png 1650w,
            "> -->
      <div class="title">
        牙齒健康
      </div>
      </div>
      <!-- <div class="carousel-item">
        <img src="https://static.cmereye.com/static/lkximg/image/banner/equgroup.jpg">
    </div>
    <div class="carousel-item">
      <img src="https://static.cmereye.com/static/lkximg/image/banner/equgroup.jpg">
    </div> -->
    </div>
    <!-- 指示符 -->

    <!-- 左右切换按钮 -->
    <!-- <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button> -->
    <!-- <div class="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    </div> -->
  </div>

</template>

<script>
import { getList } from '@/api/index.js'
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.bannerWebImg()
    this.bannerMbImg()
  },
  methods: {
     bannerWebImg(){
        getList({ '_embed': true, 'categories': 24 }).then((res => {       
        // console.log(res);
      }))
    },
    bannerMbImg(){
      getList({ '_embed': true, 'categories': 23 }).then((res => {       
        console.log(res);
      }))
    },
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
      top:38%;
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
}

//pc
@media only screen and (min-width: 760px) {
  
  .titleImg{
    position: relative;
    height: 30vw;
    // width: 100vw;
    text-align: center;
     .title{
      position: absolute;
      z-index:2;
      height: 30vw;
      width: 100vw;
      left:0;
      top:45%;
      font-weight: 500;
      color: #79828D;
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
      width: 90%;
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