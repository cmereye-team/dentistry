<template>
  <div class="section vedio_box md:font-black">
    <div class="flex justify-center texts">
      <h2>牙齒健康</h2>
      <img src="@/asset/image/about-me/serve/Vector.png" alt="">
    </div>
    <div class="vedio_slider" v-if="screenWidth > 768">
      <div v-swiper:mySwiper="swiperOption" class="swiperWrap ">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
            <img :src="banner.src">
            <div class="dates">
              <div class="date"></div>
            </div>
            <!-- <img class="date" src="" alt=""> -->
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

      <nuxt-link class="link_more" to="">查看更多</nuxt-link>
    </div>
    <div class="vedio_slider" v-else>
      <div v-swiper:mySwiper="swiperOptions" class="swiperWrap ">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
            <img :src="banner.src">
            <p class="des">{{ banner.des }}</p>
            <div class="dates">
              <div class="date"></div>
            </div>
            <p class="content">{{ banner.content }}</p>
          </div>
        </div>
        <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->

        <div class="swiper-button-prev flex items-center justify-center"> <img
            src="@/asset/image/about-me/debtistry-health/L.png" alt=""> </div>
        <div class="swiper-button-next flex items-center justify-center"> <img
            src="@/asset/image/about-me/debtistry-health/R.png" alt=""></div>

      </div>

      <nuxt-link class="link_more" to="">查看更多</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      screenWidth: '',
      banners: [
        { src: require("@/asset/image/about-me/debtistry-health/Maskgroup01.png"), link: "", des: '漱口水可以取代牙刷及牙線？ ', content: '聽講漱口水可以清除口腔細菌🤔直接用咪可以唔使刷牙同用牙線囉......' },
        { src: require("@/asset/image/about-me/debtistry-health/Maskgroup.png"), link: "", des: '護齒食物你要知 #堅果  ', content: '食啲碳水化合物量低嘅堅果（例如腰果、花生、胡桃、杏仁）有助減......' },
        { src: require("@/asset/image/about-me/debtistry-health/Maskgroup02.png"), link: "", des: '牙膏的秘密 ', content: '相信大家都試過刷牙嘅時候唔小心吞咗啲牙膏，擔心過食咗落肚會有咩影響😆......' },
        { src: require("@/asset/image/about-me/debtistry-health/Maskgroup01.png"), link: "", des: '漱口水可以取代牙刷及牙線？ ', content: '聽講漱口水可以清除口腔細菌🤔直接用咪可以唔使刷牙同用牙線囉......' },
        { src: require("@/asset/image/about-me/debtistry-health/Maskgroup.png"), link: "", des: '護齒食物你要知 #堅果  ', content: '食啲碳水化合物量低嘅堅果（例如腰果、花生、胡桃、杏仁）有助減......' },
        { src: require("@/asset/image/about-me/debtistry-health/Maskgroup02.png"), link: "", des: '牙膏的秘密 ', content: '相信大家都試過刷牙嘅時候唔小心吞咗啲牙膏，擔心過食咗落肚會有咩影響😆......' }

      ],
      swiperOptions: {
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
          swiperOption: {
            loop: true,
            centeredSlides: true,
            spaceBetween: 20,
            slidesPerView: "3",
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
          }
        }
      },
      watch: {
        screenWidth: {
          handler: function (val, oldVal) {
            if (val < 768) {
              console.log('屏幕宽度小于768px')
            } else {
              console.log('屏幕宽度大于768px')
            }
          },
          immediate: true
        },
      },
      created() {
        if (process.client) {
          this.screenWidth = document.body.clientWidth
          window.onresize = () => {
            return (() => {
              this.screenWidth = document.body.clientWidth
            })
          }
        }

      },
      mounted() {
        console.log(this.screenWidth);
       },
      methods: {}
    };
</script>
<style lang="scss" scoped>
.texts {
  text-align: center;

  h2 {
    font-weight: 300;
    color: #79828D;
    margin-bottom: 0vw;
  }

  image {
    text-align: center;
  }
}

//pc
@media only screen and (min-width: 768px) {
  .dates{
    display: flex;
    justify-content: center;
    position: absolute;
    left: 11vw;
    top: 17vw;
    z-index: 1;
  }
  .date{
    height: 5vw ;
    width: 5vw ;
    background: url(~@/asset/image/about-me/debtistry-health/Group56.svg) no-repeat;
    background-size:100%,100%;
    }


.swiperWrap .swiper-slide-active[data-v-7464405a]{
  .des{
    color: #57B2F3;
  }
  .content{
    color: #9BD0F5;
  }
   .date{
    height: 5vw ;
    width: 5vw ;
    background: url(~@/asset/image/about-me/debtistry-health/date.svg) no-repeat;
    background-size:100%,100%;
    }
}


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
      border-radius: 40px 40px 40px 40px;
      transition: all 0.5s;
      color: #57B2F3;
      text-decoration: none;
      // font-weight: 600;
      display: block;
      padding: 1vw;
      margin: 0 auto;
      width: 15vw;
      letter-spacing: 0.2vw;
      margin-top: 3vw;
      text-align: center;
      font-size: 26px;
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
        margin-bottom: 3vw;
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
      // background: linear-gradient(94.37deg, #81dbec 12.08%, #4570b6 92.9%);
      background: #57B2F3;
      color: white;
    }
  }
}

//mb
@media only screen and (max-width: 768px) {
  .swiperWrap .swiper-slide-active[data-v-7464405a]{
  .des{
    color: #57B2F3;
  }
  .content{
    color: #9BD0F5;
  }
   .date{
    height: 10vw ;
    width: 10vw ;
    background: url(~@/asset/image/about-me/debtistry-health/date.svg) no-repeat;
    background-size:100%,100%;
    }
}
  .dates{
    display: flex;
    justify-content: center;
    position: absolute;
    left: 20vw;
    top: 42vw;
    z-index: 1;
  }
  .date{
    height: 10vw;
    width: 10vw;
    background: url(~@/asset/image/about-me/debtistry-health/Group56.svg) no-repeat;
    background-size:100%,100%;
    }
  .texts {
    margin-left: 10vw;
  text-align: center;
  }
  body .section {
    width: 90vw;
    margin: 0 !important;
}
.swiperWrap[data-v-7464405a] {
    margin: 0 !important;

}
  .swiper-button-prev,
  .swiper-button-next {
    background-image: none;
    width: 2vw;
    width: 2.5vw;
    height: 2.5vw;

  }

  .swiper-button-prev {
    left: 12vw;
    top: 20vw;
  }

  .swiper-button-next {
    right: 16vw;
    top: 20vw;
}

  .vedio_slider {
    padding: 3vw 0;

    .link_more {
      border: 2px solid #57B2F3;
      border-radius: 16px 16px 16px 16px;
      transition: all 0.5s;
      color: #57B2F3;
      text-decoration: none;
      font-weight: 600;
      display: block;
      padding: 1vw;
      margin: 0 auto;
      width: 24vw;
      letter-spacing: 0.2vw;
      margin-top: 3vw;
      text-align: center;
       margin-left:38vw;
      &:hover {
        animation: 3s ease-in 1s 2 reverse both paused slidein;
      }
    }
  }

  .swiperWrap {
    width: 100vw;
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
        margin-bottom: 6vw;
      }

      .des {
        font-size: 15px;
        text-align: left;
        padding-left: 3vw;

      }

      .content {
        font-size: 10px;
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

}
</style>