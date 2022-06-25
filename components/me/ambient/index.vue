<template>
   <div class="ambient bg-white py-5 pb-0 py-xs-2">
    <div class="flex justify-center texts">
        <h2>中心環境</h2>
        <img src="@/asset/image/about-me/serve/Vector.png" alt=""  >
    </div>
    <div class="vedio_slider">
      <div v-swiper:mySwiper="swiperOption" class="swiperWrap ">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
            <img :src="banner.src">
            <p class="des">{{ banner.des }}</p>
            <p class="content">{{ banner.content }}</p>
          </div>
        </div>
        <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->

        <div class="swiper-button-prev flex items-center justify-center"> <img
            src="@/asset/image/about-me/debtistry-health/L.png" alt=""> </div>
        <div class="swiper-button-next flex items-center justify-center"> <img
            src="@/asset/image/about-me/debtistry-health/R.png" alt=""></div>

      </div>
    </div>
    <div>  
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
       banners: [
        { src: require("@/asset/image/about-me/debtistry-health/Maskgroup.png"), link: "", des: '漱口水可以取代牙刷及牙線？ ', content: '聽講漱口水可以清除口腔細菌🤔直接用咪可以唔使刷牙同用牙線囉......' },
        { src: require("@/asset/image/about-me/debtistry-health/Maskgroup.png"), link: "", des: '漱口水可以取代牙刷及牙線？ ', content: '聽講漱口水可以清除口腔細菌🤔直接用咪可以唔使刷牙同用牙線囉......' },
        { src: require("@/asset/image/about-me/debtistry-health/Maskgroup.png"), link: "", des: '漱口水可以取代牙刷及牙線？ ', content: '聽講漱口水可以清除口腔細菌🤔直接用咪可以唔使刷牙同用牙線囉......' },
        { src: require("@/asset/image/about-me/debtistry-health/Maskgroup.png"), link: "", des: '漱口水可以取代牙刷及牙線？ ', content: '聽講漱口水可以清除口腔細菌🤔直接用咪可以唔使刷牙同用牙線囉......' },
        { src: require("@/asset/image/about-me/debtistry-health/Maskgroup.png"), link: "", des: '漱口水可以取代牙刷及牙線？ ', content: '聽講漱口水可以清除口腔細菌🤔直接用咪可以唔使刷牙同用牙線囉......' },
        { src: require("@/asset/image/about-me/debtistry-health/Maskgroup.png"), link: "", des: '漱口水可以取代牙刷及牙線？ ', content: '聽講漱口水可以清除口腔細菌🤔直接用咪可以唔使刷牙同用牙線囉......' }

      ],
      swiperOption: {
            loop: true,
            centeredSlides: true,
            spaceBetween: 20,
            slidesPerView: "2",
            pagination: {
              el: '.swiper-pagination',
              dynamicBullets: true
            },
            navigation: {
              nextEl: ".swiper-button-next", //下一页dom节点
              prevEl: ".swiper-button-prev", //前一页dom节点
            },
            on: {
              slideChange() {
                console.log('onSlideChangeEnd', this);
              },
              tap() {
                console.log('onTap', this);
              }
            }
          },
    }
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
.texts{
    text-align: center;
    h2{
    font-weight: 300;
    color: #79828D;
    margin-bottom: 1vw;
  }
  image{
    text-align: center;
  }
}
//mb
@media only screen and (max-width: 768px) {
 
}
//pc
@media only screen and (min-width: 768px) {
  .swiper-button-prev[data-v-7464405a] {
    left: 0;
    top: 10vw;
  }

  .swiper-button-next[data-v-7464405a] {
    right: 0;
    top: 10vw;
  }

  .swiper-button-prev img[data-v-7464405a],
  .swiper-button-next img[data-v-7464405a] {
    width: 1.3vw;
  }

  .swiperWrap .swiper-slide img[data-v-7464405a] {
    width: 76%;
    height: 100%;
  }

  .section {
    width: 100%;
    margin-bottom: 0;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-image: none;
    width: 2vw;
    width: 2.5vw;
    height: 2.5vw;

    img {
      width: 0.8vw;
    }
  }

  .swiper-button-prev {
    left: 24vw;
    top: 7vw;
  }

  .swiper-button-next {
    right: 24vw;
    top: 7vw;
  }

  .vedio_slider {
    padding: 3vw 0;

    .link_more {
      border: 2px solid #57B2F3;
      border-radius: 30px 30px 30px 30px;
      transition: all 0.5s;
      color: #57B2F3;
      text-decoration: none;
      font-weight: 600;
      display: block;
      padding: 1vw;
      margin: 0 auto;
      width: 15vw;
      letter-spacing: 0.2vw;
      margin-top: 3vw;
      text-align: center;

      &:hover {
        animation: 3s ease-in 1s 2 reverse both paused slidein;
      }
    }
  }

  .swiperWrap {
    width: 80vw;
    margin: 0vw auto;

    .swiper-slide {
      color: #c4c4c4;
      text-align: center;
      letter-spacing: 0.2vw;

      // font-size: 1.1vw;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        border-radius: 10px;
        margin-bottom: 1vw;
      }

      .des {
        font-size: 24px;
        text-align: left;
        padding-left: 3vw;

      }

      .content {
        font-size: 18px;
        text-align: left;
        padding-left: 3vw;
      }
    }

    .swiper-slide-active {
      color: #57B2F3;
    }
  }

  @keyframes slidein {
    0% {
      // background: linear-gradient(94.37deg, #4570b6 12.08%, #81dbec 92.9%);
    }

    100% {
      background: linear-gradient(94.37deg, #81dbec 12.08%, #4570b6 92.9%);
      color: white;
    }
  }
.ambient{
  background: radial-gradient(99vw 24vw at  bottom ,transparent 50%,#ECF7FC 50%);
  // background: #ECF7FC !important;
  border-radius: 37% 37% 0 0;
}
}
</style>
<style lang="scss" >

</style>