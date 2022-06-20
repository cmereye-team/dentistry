<template>
  <!-- 轮播 -->
<div id="demo" class="carousel slide" data-bs-ride="carousel">
   <!-- 指示符 -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  <!-- 轮播图片 -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/asset/image/banner/ban_pixta.jpg" class="d-block" style="width:90%" >
    </div>
    <div class="carousel-item">
      <img src="@/asset/image/banner/ban_pixta.jpg" class="d-block" style="width:90%">
    </div>
    <div class="carousel-item">
      <img src="@/asset/image/banner/ban_pixta.jpg"  class="d-block" style="width:90%">
    </div>
  </div>
  
  <!-- 左右切换按钮 -->
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
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
.carousel-inner{
  text-align: -webkit-center;
  img{
     border-radius: 80px 80px 80px 80px;
  }
}
// mb
@media (max-width: 768px) {
  .section {
    width: 100%;
    margin: 0;
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
// pc
@media (min-width: 768px) {
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