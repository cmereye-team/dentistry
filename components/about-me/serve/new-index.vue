<template>
  <div class="bg-white pb-0 py-xs-2 main-container serve-top">
    <div class="flex justify-center texts">
      <h2>牙科服務</h2>
      <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="" />
      <p class="serve_con" v-if="isServePage !== true">
        點擊以下圖示，了解更多牙科資訊
      </p>
      <div v-if="isServePage" class="serve_page">中心提供基本牙科、美容牙科及高階牙科服務，從一般口腔檢查、洗牙、補牙，到牙齒美白、<br
          class="pcShow" />全口修復及各種牙科治療，幫助客人回復自信笑容。</div>
    </div>
    <div class="mb-padding">
      <div class="service_box_line service_box1">
        <div>高階牙科服務</div>
        <div>
          <div v-for="(item, index) in adDentistry" :key="index">
            <nuxt-link :to="item.link">
              <div class="service_pic">
                <img :src="item.img" />
              </div>
              <div class="service_txt">
                <p class="fs-sm-16" v-html="item.name" :class="`p_style_${index}`"></p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="service_box_line service_box2">
        <div>基本牙科服務</div>
        <div>
          <div v-for="(item, index) in basicDentistry" :key="index">
            <nuxt-link :to="item.link">
              <div class="service_pic">
                <img :src="item.img" />
              </div>
              <div class="service_txt">
                <p class="fs-sm-16" v-html="item.name"></p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="service_box_line service_box3">
        <div>牙科美容服務</div>
        <div>
          <div v-for="(item, index) in cosmeticDentistry " :key="index">
            <nuxt-link :to="item.link">
              <div class="service_pic">
                <img :src="item.img" />
              </div>
              <div class="service_txt">
                <p class="fs-sm-16" v-html="item.name"></p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- <div class="newBtn">
        <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize" :mb="mb"
        :paddingSizeMb="paddingSizeMb"  :maxNum="2500" :minNum="1410"  :maxNumMb="2600" :minNumMb="1910"  />
      </div> -->
    </div>
  </div>
</template>
<script>
import newBtn from '@/components/common/new-btn.vue';
export default {
  components: {
    newBtn
  },
  props: {
    isServePage: {
      type: Boolean,
    },
  },
  data() {
    return {
      scrollY: 0,
      scrollYNum: 0,
      isHoverAnimate: false,
      adDentistry: [
        {
          link: '/implant',
          name: '微創植牙/種植牙',
          img: 'https://static.cmereye.com/imgs/2023/12/57732f633a997d95.png'
        },
        {
          link: '/rct',
          name: `根管治療 (杜牙根)`,
          img: 'https://static.cmereye.com/imgs/2023/12/298de7f7370976ab.png'
        },
        {
          link: '/periodontal-treatment',
          name: `牙周病治療`,
          img: 'https://static.cmereye.com/imgs/2023/12/bc1c1cdd16eb124a.png'
        },
        {
          link: '/extractions-and-wisdom-teeth-extraction',
          name: `拔牙及剝智慧齒`,
          img: 'https://static.cmereye.com/imgs/2023/12/bf496ebdf0a60544.png'
        },
        {
          link: '/complete-and-partial-denture',
          name: `全口牙托<span class="pcShow">/</span><br class="mbShow" />局部牙托`,
          img: 'https://static.cmereye.com/imgs/2023/12/1ecf290d714a0367.png'
        },
      ],
      basicDentistry: [
        {
          link: '/scaling-and-polishing',
          name: `洗牙`,
          img: 'https://static.cmereye.com/imgs/2023/12/0543183b780abdfe.png'
        },
        {
          link: '/fillings',
          name: `補牙`,
          img: 'https://static.cmereye.com/imgs/2023/12/c4ec73cc3358570e.png'
        },
        {
          link: '/general-oral-examination',
          name: `一般口腔檢查`,
          img: 'https://static.cmereye.com/imgs/2023/12/fe2fc699dee06320.png'
        },
        {
          link: '/children-dentistry',
          name: `兒童牙科`,
          img: 'https://static.cmereye.com/imgs/2023/12/c8e2ae1c0b80dbf8.png'
        }
      ],
      cosmeticDentistry: [
        {
          link: '/veneers',
          name: `全瓷貼片`,
          img: 'https://static.cmereye.com/imgs/2023/12/207351d3afe0d62e.png'
        },
        {
          link: '/orthodontics',
          name: `矯齒`,
          img: 'https://static.cmereye.com/imgs/2023/12/588c65469ac643fc.png'
        },
        {
          link: '/invisalign',
          name: `隱形牙箍`,
          img: 'https://statichk.cmermedical.com/cmermedical/578230be8392aa70.png'
        },
        {
          link: '/teeth-whitening',
          name: `美白牙齒`,
          img: 'https://static.cmereye.com/imgs/2023/12/cdc53cbef72b0392.png'
        },
        {
          link: '/crowns-and-bridges',
          name: `全瓷牙冠<span class="pcShow">/</span><br class="mbShow" />全鋯牙冠`,
          img: 'https://static.cmereye.com/imgs/2023/12/eacf82fc433bf385.png'
        },

      ],
      linkHref: 'https://api.whatsapp.com/send?phone=85295128192',
      linkText: 'WhatsApp 預約',
      isShowSvg: true,
      mb:'',
      paddingSize: '10px 60px',
      paddingSizeMb: '6px 74px',
      newSvg: '',
    }
  },
  mounted() {
    // window.addEventListener('scroll', this.getScrollY);
  },
  methods: {
    // getScrollY() {
    //   this.scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    //   if (this.scrollY < 1800 && this.scrollY > 620) {
    //     this.isHoverAnimate = true;
    //   } else if (this.scrollY < 2480 && this.scrollY > 1290) {
    //     this.isHoverAnimate = true;
    //   } else {
    //     this.isHoverAnimate = false;
    //   }
    // },
  },
}
</script>
<style lang="scss" scoped>
.texts {
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-weight: 500;
    color: #79828d;
    margin-bottom: 0vw;
  }

  image {
    text-align: center;
  }
}

.service_box .service_item .service_hover {
  width: 100%;
  height: auto;
  padding-bottom: 1rem;
  z-index: 999;
  background: #ecf7fc;
  padding: 0;
}

a {
  text-decoration: none;
}

.box {
  display: table;
  margin: 50px auto;
}

.service_box {
  display: flex;
  justify-content: left;
}

@media only screen and (max-width: 760px) {
  .pcShow {
    display: none;
  }

  .service_box {
    padding-top: 3rem;
  }
}

.service_box .service_item {
  text-align: center;
  justify-content: center;
  flex-flow: column;
  margin: 1vw;
}

@media only screen and (min-width: 100px) and (max-width: 991px) {
  .imgya {
    margin-left: 7vw !important;
  }

  .yas {
    width: 16vw !important;
  }

  .box {
    margin: 0;
  }

  .service_txt {
    color: #505050;
    font-weight: 600;
  }

  .service_box {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    padding-top: 0 !important;
  }

  ::v-deep .service_box .service_item {
    flex: 1 0 36.333333% !important;
    margin-bottom: 1.428rem !important;
    padding-right: 0 !important;
  }

  ::v-deep .service_box .service_item .service_pic {
    width: 55% !important;
    text-align: center !important;
    margin: auto !important;
    height: 19vw !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    margin-top: 6vw !important;
  }

  ::v-deep .service_box .service_item .service_txt {
    width: 100% !important;
    padding-left: 5px !important;
    padding-right: 5px !important;
    height: 8vw !important;
    display: flex !important;
    align-items: center !important;
    flex-flow: column !important;
    justify-content: center !important;
    margin-top: 4vw !important;
  }

  ::v-deep .service_box .row {
    padding-right: 15px;
    justify-content: center;
  }

  .service_box .row {
    padding-right: 15px;
  }

  .serve_con {
    text-align: left;
    padding: 5vw;
    color: #79828d;
  }

  .service_box .service_item {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    margin-bottom: 1.428rem;
    padding-right: 0;
  }

  .service_box .service_item img {
    max-width: 100%;
  }
}

@media only screen and (min-width: 760px) and (max-width: 7680px) {
  .service_pic img {
    // max-width: 200px;
    max-width: clamp(30px, 15vw, 60px);
    // width: 6vw;
  }

  .service_txt {
    color: #505050;
    font-weight: 600;
  }

  .imgya {
    margin-left: 35px !important;
  }

  .serve_con {
    display: flex;
    justify-content: center;
    padding-top: 17.72px;
    margin: 0 200px;

    color: #79828D;
    text-align: center;
    font-family: Noto Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 2px;
  }

  .service_box .service_item {
    // margin-bottom: 3.571rem;
  }
}

.service_box .service_item .service_hover {
  width: 173px;
  height: 173px;
  overflow: hidden;
  position: relative;
  // transition: all .3s ease-in-out;
  // box-shadow: 0 0 15px lightgray;
  border-radius: 1.071rem;
  cursor: pointer;
}

@media only screen and (min-width: 100px) and (max-width: 991px) {
  .service_box .service_item .service_hover {
    width: 100%;
    height: auto;
    padding-bottom: 1rem;
  }

  .service_box .service_item {
    position: relative;
  }

  .service_box .service_item:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto auto;
    border-radius: 20px;
    width: 97%;
    height: 108%;
    margin-left: 9.5px;
    z-index: 0 !important;
    background: linear-gradient(120deg,
        rgba(0, 123, 255, 0) 20%,
        rgba(0, 123, 255, 0.25),
        rgba(255, 255, 255, 0),
        #b3d7ff,
        rgba(255, 255, 255, 0),
        #4777d8,
        rgba(0, 123, 255, 0.25),
        rgba(0, 123, 255, 0.5),
        rgba(0, 123, 255, 0.25),
        rgba(255, 255, 255, 0));
    background-size: 482%;
    filter: blur(0px);
    transition: 1s;
    animation: animate 8s linear alternate
      /*,opacity 3s linear   alternate*/
    ;
  }

  @keyframes animate {
    0% {
      background-position: 0%;
    }

    50% {
      background-position: 100%;
    }

    75% {
      background-position: 75%;
    }

    100% {
      background-position: 0%;
    }
  }

  @keyframes opacity {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.5;
    }

    75% {
      opacity: 0.3;
    }

    100% {
      opacity: 0;
    }
  }
}

@media only screen and (min-width: 100px) and (max-width: 991px) {
  .service_box .service_item .service_hover {
    width: 100%;
    height: auto;
    padding-bottom: 1rem;
    z-index: 1 !important;
    background: #ecf7fc;
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1920px) {
  .service_box .service_item .service_hover {
    max-width: 100%;
  }
}

@media only screen and (min-width: 1000px) and (max-width: 1250px) {
  .service_box .service_item .service_hover {
    width: 17vw;
  }
}

.service_box .service_item:hover .service_hover {
  background: #9bd0f5;

  border-radius: 1.071rem;
  // box-shadow: 0 5px 15px lightgray;
  // transform: translate(2px, -2px);
}

.service_box .service_item .service_pic .service_txt {
  background-color: #b3d7ff;
}

.service_box .service_item:hover .service_hover p {
  color: #ffffff;
}

@media only screen and (min-width: 760px) and (max-width: 4096px) {
  .service_txt {
    .setWith {
      max-width: 106px;
    }
  }

  .service_box .service_item .service_pic {
    height: 7rem;
    line-height: 8rem;
  }
}

@media only screen and (min-width: 100px) and (max-width: 991px) {
  .service_box .service_item .service_pic {
    width: 55%;
    text-align: center;
    margin: auto;
    height: 19vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1920px) {
  .service_box .service_item .service_pic img {
    max-width: 120px;
  }
}

@media only screen and (min-width: 760px) and (max-width: 4096px) {
  .service_box .service_item .service_txt {
    // padding: 0 3rem 2rem;
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: center;
  }
}

@media only screen and (min-width: 100px) and (max-width: 760px) {
  .service_box .service_item .service_txt {
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
    height: 10vw;
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: center;
  }
}

.service_box p {
  color: #505050;
  font-size: 1.2rem;
  font-weight: 540;
  letter-spacing: 1px;
}

@media only screen and (min-width: 100px) and (max-width: 760px) {
  .service_box p {
    font-size: 1rem;
    padding-top: 0.2rem;
    font-weight: 540;
  }
}

@media only screen and (min-width: 1000px) and (max-width: 1440px) {
  ::v-deep .service_box .service_item .service_hover {
    width: 158px;
    height: 158px;
    overflow: hidden;
    position: relative;
    border-radius: 1.071rem;
    cursor: pointer;
  }

  .service_box .service_item .service_pic {
    line-height: 7rem;
    height: auto;
  }

  .service_box p {
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    /* or 133% */
    text-align: center;
    letter-spacing: 0.1em;
    color: #505050;
  }

  .serve_con {
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 0 27vw;
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #79828d;
    padding: 0;
    width: auto;
    margin-top: 2vw;
  }
}

@media screen and (max-width: 768px) {
  ::v-deep .newBtn {
    .serve_btn {
      &>div:nth-child(1) {
        top: -110% !important;
      }
    }
    .btn_pc_style {
      &>div{
        align-items: center;
        &>div:nth-child(1) {
          margin-right: 5px;
        }
      }
    }
  }
  .mb-padding {
    padding: 0 1.25rem;
  }

  .serve-top {
    margin-top: 2.5rem;
  }

  .texts {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;

    h2 {
      margin-bottom: 0.5625rem;
      color: #79828D;
      text-align: center;
      font-family: Noto Sans;
      font-size: 25px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 2.5px;
    }

    p {
      color: #79828D;
      padding: 0;
      text-align: justify;
      font-family: Noto Sans;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.5px;
      margin: 27px auto 29px;
    }
  }

  .service_box_line {
    display: flex;
    flex-direction: column;

    &>div:nth-child(1) {
      padding-top: 20px;
      border-top: 1px solid #EBEBEB;
      color: #57B2F3;
      font-family: Noto Sans TC;
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 2.1px;
      position: relative;
    }

    &>div:nth-child(1)::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 1px;
      background: #299DF0;
      top: -1px;
      left: 0;
    }

    &>div:nth-child(2) {
      padding: 1.375rem 0;
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;
      justify-items: center;

      &>div {
        border-radius: 1.25rem;
        background: #ECF7FC;
        width: 42.1333vw;
        height: 42.1333vw;


        &>a {
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: flex-end;
          width: 100%;
          height: 100%;
          align-items: center;
          border-radius: 1.25rem;

          &>div:nth-child(1) {
            width: 6.875rem;
            height: 6.875rem;
            border-radius: 1.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
              max-width: max(50px, min(25px, 60px));
              max-height: max(50px, min(25px, 60px));
            }
          }

          &>div:nth-child(2) {
            color: #505050;

            text-align: center;
            font-family: Noto Sans;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
            /* 133.333% */
            letter-spacing: 1.5px;
          }

        }

        &>a:hover {
          border-radius: 1.25rem;
          background: #9BD0F5;
        }
      }
    }
  }

  .service_box3 {
    &>div:nth-child(1) {
      color: #FFB7B7;
    }

    &>div:nth-child(1)::before {
      background: #FF8585;
    }

    &>div:nth-child(2) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 1.25rem;

      &>div {
        background: #FFEBEB;

        &>a:hover {
          border-radius: 1.25rem;
          background: #FFB7B7;
        }
      }
    }
  }

  .mb-padding {
    &>a {
      display: flex;
      position: relative;
      width: fit-content;
      margin: 60px auto;

      &>div:nth-child(1) {
        position: absolute;
        width: 3.4375rem;
        right: -12%;
        top: -100%;
        z-index: 1;

        &>svg {
          width: 100%;
        }
      }

      &>div:nth-child(2) {
        &>div:nth-child(1) {
          margin-right: 0.3125rem;
        }

        display: flex;
        align-items: center;
        padding: .375rem 2.5rem .5rem 2.8125rem;
        background: #FFD333;
        border-radius: 4.625rem;
        color: #FFF;
        font-family: Noto Sans;
        font-size: 4.8vw;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: .3856vw;
        position: relative;
        z-index: 10;
      }
    }
  }

  .box {
    .service_item {
      position: relative;
    }

    .service_item::before {
      content: "";
      background: url(https://static.cmereye.com/imgs/2023/09/5e0622e07d917d49.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      content: "";
      height: 27px;
      position: absolute;
      right: 6%;
      top: 50%;
      transform: translateY(-50%);
      width: 13px;
    }
  }

  .btn2 {
    display: none;
  }

  .btn1 {
    display: flex;
    align-items: center;

    &>div:nth-child(1) {
      margin-right: .375rem;
    }
  }
}

@media screen and (min-width: 768px) {
  .serve_page {
    color: #79828D;
    text-align: center;
    font-family: Noto Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 2px;
    margin-top: 45px;
  }

  .texts {
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
  }

  .p_style_1 {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
  }

  .mbShow {
    display: none;
  }

  .serve-top {
    margin-top: 3rem;
    margin-bottom: 60px;
  }

  @keyframes btnAnim {
    0% {
      clip-path: polygon(-10% 0, 0 0, -10% 100%, -20% 100%);
    }

    50% {
      clip-path: polygon(50% 0, 60% 0, 50% 100%, 40% 100%);
    }

    100% {
      clip-path: polygon(110% 0, 120% 0, 110% 100%, 100% 100%);
    }
  }

  .service_box_line {
    display: flex;
    border-top: 1px solid #EBEBEB;
    position: relative;

    &>div:nth-child(1) {
      flex: 1;
      font-family: Noto Sans TC;
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 2.1px;
      color: #57B2F3;
      padding-top: 19px;
    }

    &>div:nth-child(2) {
      flex: 4;
      display: grid;
      grid-template-rows: auto auto;
      /* 两行，自适应内容高度 */
      grid-template-columns: repeat(4, 1fr);
      /* 四列，每列平均分配剩余空间 */
      justify-items: center;
      max-width: 1220px;
      margin-bottom: 30px;

      &>div {
        flex: 1;
        width: 250px;
        height: 250px;
        margin: 0 15px;
        border-radius: 20px;
        background: #ECF7FC;
        margin-top: 30px;

        a {
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: flex-end;
          width: 100%;
          height: 100%;
          align-items: center;

          &>div:nth-child(1) {
            width: 150px;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          &>div:nth-child(2) {
            color: #505050;
            text-align: center;
            font-family: Noto Sans TC;
            font-size: 21px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 2.1px;
            margin-bottom: 29.4px;
          }
        }
      }

      &>div:hover {
        background: #9BD0F5;
      }
    }
  }

  .service_box1::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 1px;
    top: -1px;
    left: 0;
    background: #299DF0;
  }

  .service_box2::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 1px;
    top: -1px;
    left: 0;
    background: #299DF0;
  }

  .service_box3::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 1px;
    top: -1px;
    left: 0;
    background: #FF8585;
  }

  .service_box3 {
    &>div:nth-child(1) {
      color: #FFB7B7;
    }

    &>div:nth-child(2) {
      &>div {
        background: #FFEBEB;
      }

      &>div:hover {
        background: #FFB7B7;
      }
    }
  }

  .serve_btn {
    width: fit-content;
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    margin: 90px auto 0;
    position: relative;
    text-decoration: none;

    &>div:nth-child(1) {
      position: absolute;
      top: -80%;
      right: -12%;
    }
  }

  .serve_btn .btn_pc_style {
    position: relative;
    display: flex;
    justify-content: center;
    max-width: 100%;
    width: fit-content;
    margin: 0 auto;
  }

  .btn_pc_style {
    &>div {
      display: flex;
    }
  }

  .serve_btn .btn_pc_style .btn1,
  .btn2 {
    box-shadow: 0px 1.74695px 3.4939px 0px rgba(157, 157, 157, 0.66);
    border-radius: 40px;
    padding: 10px 60px;
    background: #FFD333;
    cursor: pointer;
    top: 0;
    color: #FFF;
    font-family: 'Noto Sans CJK TC';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.92px;

    &>div:nth-child(1) {
      margin-right: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .serve_btn .btn_pc_style .btn2 {
    color: #79828D;
    background: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    // animation: btnAnim .9s linear;
    // animation-fill-mode: forwards;
    width: max-content;
    display: none;
  }

  // .serve_btn .btn_pc_style:hover {
  //   .btn1 {
  //     color: #79828D;

  //     path {
  //       fill: #79828D;
  //     }
  //   }

  //   .btn2 {
  //     display: flex;
  //     animation: btnAnim .9s linear;
  //     animation-fill-mode: forwards;
  //   }
  // }

  .serve_btn .showPcHover {
    .btn2 {
      display: flex;
      animation: btnAnim .9s linear;
      animation-fill-mode: forwards;
    }
  }

  @keyframes btnAnim {
    0% {
      clip-path: polygon(-10% 0, 0 0, -10% 100%, -20% 100%);
    }

    50% {
      clip-path: polygon(50% 0, 60% 0, 50% 100%, 40% 100%);
    }

    100% {
      clip-path: polygon(110% 0, 120% 0, 110% 100%, 100% 100%);
    }
  }

}
</style>
