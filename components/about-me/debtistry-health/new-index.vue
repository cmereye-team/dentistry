<template>
  <div class="section vedio_box md:font-black main-container">
    <div class="flex justify-center texts">
      <h2>牙齒健康</h2>
      <img src="@/asset/image/about-me/serve/Vector.png" alt="">
    </div>
    <div class="vedio_slider" v-if="screenWidth > 768">
      <div v-swiper:mySwiper="swiperOption" v-if="banners.length" class="swiperWrap ">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in banners" :key="index">
            <div style="position: relative;">
              <img :src="item._embedded[Object.keys(item._embedded)[1]][0].source_url">
              <div class="dateinfo">
                <div class="dates">
                  <span class="linesy">{{ item.datas }}</span>
                  <span>{{ item.month }}</span>
                </div>
              </div>
            </div>
            <div class="des" v-html="item.title.rendered"></div>
            <div class="content" v-html="item.content.rendered"></div>
          </div>
        </div>
        <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->

        <div class="swiper-button-prev flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg"
            width="16" height="30" viewBox="0 0 16 30" fill="none">
            <path d="M14 28L2 15.3171L14 2" stroke="#8CD1F8" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg> </div>
        <div class="swiper-button-next flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg"
            width="16" height="30" viewBox="0 0 16 30" fill="none">
            <path d="M2 28L14 15.3171L2 2" stroke="#8CD1F8" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg></div>

      </div>

      <nuxt-link class="link_more" to="/oral-health-information">查看更多</nuxt-link>
    </div>
    <div class="vedio_slider" v-else>
      <div v-swiper:mySwiper="swiperOptions" class="swiperWrap " v-if="banners.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in banners" :key="index">
            <img :src="item._embedded[Object.keys(item._embedded)[1]][0].source_url">
            <div class="dateinfo">
              <div class="dates">
                <span class="linesy">{{ item.datas }}</span>
                <span>{{ item.month }}</span>
              </div>
            </div>
            <div class="des" v-html="item.title.rendered"></div>
            <div class="content" v-html="item.content.rendered"></div>
            <!-- <p class="des">{{ banner.des }}</p>
            <p class="content">{{ banner.content }}</p> -->
          </div>
        </div>
        <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->

        <div class="swiper-button-prev flex items-center justify-center"> <img
            src="@/asset/image/about-me/debtistry-health/L.png" alt=""> </div>
        <div class="swiper-button-next flex items-center justify-center"> <img
            src="@/asset/image/about-me/debtistry-health/R.png" alt=""></div>
      </div>
      <nuxt-link class="link_more" to="/oral-health-information">查看更多</nuxt-link>
    </div>
  </div>
</template>
<script>
import { getList } from '@/api/index.js'

export default {
  data() {
    return {
      screenWidth: '',
      banners: [
        // { src: require("@/asset/image/about-me/debtistry-health/Maskgroup01.png"), link: "", des: '漱口水可以取代牙刷及牙線？ ', content: '聽講漱口水可以清除口腔細菌🤔直接用咪可以唔使刷牙同用牙線囉......' },
        // { src: require("@/asset/image/about-me/debtistry-health/Maskgroup.png"), link: "", des: '護齒食物你要知 #堅果  ', content: '食啲碳水化合物量低嘅堅果（例如腰果、花生、胡桃、杏仁）有助減......' },
        // { src: require("@/asset/image/about-me/debtistry-health/Maskgroup02.png"), link: "", des: '牙膏的秘密 ', content: '相信大家都試過刷牙嘅時候唔小心吞咗啲牙膏，擔心過食咗落肚會有咩影響😆......' }
        // { src: require("@/asset/image/about-me/debtistry-health/Maskgroup01.png"), link: "", des: '漱口水可以取代牙刷及牙線？ ', content: '聽講漱口水可以清除口腔細菌🤔直接用咪可以唔使刷牙同用牙線囉......' },
        // { src: require("@/asset/image/about-me/debtistry-health/Maskgroup.png"), link: "", des: '護齒食物你要知 #堅果  ', content: '食啲碳水化合物量低嘅堅果（例如腰果、花生、胡桃、杏仁）有助減......' },
        // { src: require("@/asset/image/about-me/debtistry-health/Maskgroup02.png"), link: "", des: '牙膏的秘密 ', content: '相信大家都試過刷牙嘅時候唔小心吞咗啲牙膏，擔心過食咗落肚會有咩影響😆......' }

      ],
      swiperOptions: {
        loop: true,
        centeredSlides: true,
        spaceBetween: 20,
        slidesPerView: "1.5",
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
        spaceBetween: 22,
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
          console.log('屏幕宽度小于760px')
        } else {
          console.log('屏幕宽度大于760px')
        }
      },
      immediate: true
    },
  },
  created() {
    this.getlistds()
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
  methods: {
    getlistds() {
      getList({ '_embed': true, 'categories': 21 }).then((res => {
        this.banners = res.data
        this.banners.forEach((item, index) => {
          if (item.date.slice(5, 7) === '07') {
            item.month = 'July'
          } else if (item.date.slice(5, 7) === '01') {
            item.month = 'Jan'
          } else if (item.date.slice(5, 7) === '02') {
            item.month = 'Feb'
          } else if (item.date.slice(5, 7) === '03') {
            item.month = 'Mar'
          } else if (item.date.slice(5, 7) === '04') {
            item.month = 'Apr'
          } else if (item.date.slice(5, 7) === '05') {
            item.month = 'May'
          } else if (item.date.slice(5, 7) === '06') {
            item.month = 'June'
          } else if (item.date.slice(5, 7) === '08') {
            item.month = 'August'
          } else if (item.date.slice(5, 7) === '09') {
            item.month = 'Sep'
          } else if (item.date.slice(5, 7) === '10') {
            item.month = 'Oct'
          } else if (item.date.slice(5, 7) === '11') {
            item.month = 'Nov'
          } else if (item.date.slice(5, 7) === '12') {
            item.month = 'Dec'
          }
          item.datas = item.date.slice(8, 10)
        });
        // console.log('this.banners===',JSON.parse(JSON.stringify(this.banners)));
      }))
    }
  }
};
</script>
<style lang="scss" scoped>
.texts {
  text-align: center;

  h2 {
    color: #79828D;
    text-align: center;
    font-family: Noto Sans;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 2.5px;
  }

  image {
    text-align: center;
  }
}

//pc
@media only screen and (min-width: 760px) {
  ::v-deep .dateinfo {
    display: flex !important;
    justify-content: center !important;
    position: absolute !important;
    left: 42% !important;
    bottom: -13px;
  }

  .dates {
    width: 50px;
    height: 50px;
    background-color: #9BD0F5;
    border-radius: 50%;
    display: flex;
    text-align: center;
    color: #FFF;
    font-weight: 600;
    justify-content: center;
    flex-direction: column;

    .linesy {
      font-family: 'Noto Sans CJK TC';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      /* identical to box height */

      text-align: center;
      letter-spacing: 0.1em;
      border-bottom: 2px solid #FFF;
      margin: 0 5px;
    }

    span {
      font-family: 'Noto Sans CJK TC';
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 15px;
      /* identical to box height */

      text-align: center;
      letter-spacing: 0.1em;
    }
  }

  .date {
    height: 5vw;
    width: 5vw;
    background: url(~@/asset/image/about-me/debtistry-health/Group56.svg) no-repeat;
    background-size: 100%, 100%;
  }


  .swiperWrap .swiper-slide-active {
    .des {
      color: #57B2F3;
    }

    .content {
      color: #9BD0F5;
    }

    .date {
      height: 5vw;
      width: 5vw;
      background: url(~@/asset/image/about-me/debtistry-health/date.svg) no-repeat;
      background-size: 100%, 100%;
    }
  }


  ::v-deep .swiper-button-prev {
    left: 0 !important;
    top: 141px !important;
  }

  ::v-deep .swiper-button-next {
    right: 0 !important;
    top: 141px !important;
  }

  ::v-deep .swiper-button-prev img,
  ::v-deep .swiper-button-next img {
    width: 1.3vw !important;
  }

  //  ::v-deep .swiperWrap .swiper-slide img {
  //   width: 76% !important;
  //   height: 100% !important;
  // }

  .section {
    width: 100%;
    margin-bottom: 0;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: auto;
    background-image: none;
    // width: 2vw;
    // width: 2.5vw;
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
    padding: 60px 0;

    .link_more {
      font-family: 'Noto Sans CJK TC';
      transition: all 0.5s;
      text-decoration: none;
      display: block;
      padding: 15px;
      margin: 0 auto;
      margin-top: 3vw;
      text-align: center;

      color: #57B2F3;
      font-family: Noto Sans;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 2.4px;
      border-radius: 100px;
      border: 1px solid #57B2F3;
      width: fit-content;
      padding: 10px 65px;

      &:hover {
        animation: 3s ease-in 1s 2 reverse both paused slidein;
      }
    }
  }

  .swiperWrap {
    // width: 70vw;
    margin: 0vw 200px;

    .swiper-slide {
      color: #57B2F3;
      text-align: center;
      letter-spacing: 0.2vw;

      // font-size: 1.1vw;
      img {
        width: 78%;
        height: 100%;
        border-radius: 10px;
        border-radius: 10px;
        // margin-bottom: 3vw;
      }

      .des {
        font-size: 15px !important;
        text-align: left;
        padding-top: 32px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 32px 10px 0;
      }

      .content {
        color: #9BD0F5;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        word-break: break-all;
        -webkit-box-orient: vertical;
        color: #9BD0F5;
        text-align: justify;
        font-family: Noto Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.6px;
        padding: 0 55px;

        p {
          margin-bottom: 0rem !important;
        }
      }
    }


    .swiper-slide-active {
      color: #57B2F3;

      .des {
        font-size: 24px;
        text-align: left;
        // padding-left: 3vw;

        // &:after {
        //   content: "";
        //   border-bottom: 0.2vw solid #9BD0F5;
        //   // margin-right: 1vw;
        //   width: 2vw;
        //   display: block;
        //   // vertical-align: middle;
        // }
      }
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
@media only screen and (max-width: 760px) {
  .dates {
    width: 15vw;
    height: 15vw;
    background-color: #9BD0F5;
    border-radius: 50%;
    margin: 1vw;
    display: flex;
    text-align: center;
    color: #FFF;
    font-weight: 600;
    justify-content: center;
    flex-direction: column;

    .linesy {
      font-size: 20px;
      border-bottom: 3px solid #FFF;
      margin: 0 1vw;
    }
  }

  .dateinfo {
    display: flex;
    justify-content: center;
    position: absolute;
    left: -3vw;
    top: -5vw;
  }

  .swiperWrap .swiper-slide-active[data-v-7464405a] {
    .des {
      color: #57B2F3;
    }

    .content {
      color: #9BD0F5;
    }

    .date {
      height: 10vw;
      width: 10vw;
      background: url(~@/asset/image/about-me/debtistry-health/date.svg) no-repeat;
      background-size: 100%, 100%;
    }
  }

  .dates {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 28vw;
    top: 61vw !important;
    z-index: 1;
  }

  .date {
    height: 10vw;
    width: 10vw;
    background: url(~@/asset/image/about-me/debtistry-health/Group56.svg) no-repeat;
    background-size: 100%, 100%;
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
    height: 2.5vw;


  }

  .swiper-button-prev {
    left:11vw;
    top: 33vw;
  }

  .swiper-button-next {
    right: 11vw;
    top: 33vw;
  }

  .vedio_slider {
    padding: 3vw 0;

    .link_more {
      border: 2px solid #57B2F3;
      border-radius: 16px 16px 16px 16px;
      transition: all 0.5s;
      color: #57B2F3;
      text-decoration: none;
      display: block;
      padding: 1vw;
      // margin: 0 auto;
      // width: 24vw;
      width: fit-content;
      padding: 0.5625rem 2.75rem;

      color: #57B2F3;
      font-family: Noto Sans;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.6px;


      margin-top: 3vw;
      text-align: center;
      margin-left: 38vw;

      &:hover {
        animation: 3s ease-in 1s 2 reverse both paused slidein;
      }
    }
  }

  .swiperWrap {
    width: 100vw;
    margin: 0vw auto;

    .swiper-slide {
      color: #57B2F3;
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
        color: #57B2F3;
        font-family: Noto Sans;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.0938rem;
      }
      .des::before {
        content: none;
      }

      .content {
        color: #9BD0F5;
        text-align: justify;
        font-family: Noto Sans;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.3px;
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
</style>