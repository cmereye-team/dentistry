<template>
  <div>
    <div id="child"></div>
    <div class="child">
      <div class="child_img"><img
          :src="pcOrMb == 'pc' ? 'https://static.cmereye.com/imgs/2024/01/4a4b4288adebdec0.png' : 'https://static.cmereye.com/imgs/2024/01/ff1023a5ccd96750.png'"
          alt="儿童专线">
      </div>
      <div class="child_bg">
        <div class="main-container bubble">
          <div v-if="pcOrMb == 'pc'">
            <img src="https://static.cmereye.com/imgs/2023/12/ad71e1d6f86b1529.png" alt="">
          </div>
          <div>
            <div v-if="pcOrMb == 'pc'"><img src="https://static.cmereye.com/imgs/2023/12/d1f99bcd3aff5ebd.png" alt="">
            </div>
            <div><img
                :src="pcOrMb == 'pc' ? 'https://static.cmereye.com/imgs/2024/01/cbd499bac63a0a6a.png' : 'https://static.cmereye.com/imgs/2024/01/d59d521c77a0fe37.png'"
                alt=""></div>
            <div v-if="pcOrMb == 'pc'"><img src="https://static.cmereye.com/imgs/2023/12/3f654ed56a2419ea.png" alt="">
            </div>
          </div>
          <!-- <div class="new_btn">
            <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize" :mb="mb"
              :paddingSizeMb="paddingSizeMb" :newSvg="newSvg" :maxNum="3630" :minNum="2375" :maxNumMb="4320"
              :minNumMb="4000" :isChild="child" />
          </div> -->
        </div>
        <div class="age_gap">
          <div><img
              :src="pcOrMb == 'pc' ? 'https://static.cmereye.com/imgs/2023/12/3f00f54861c5d157.png' : 'https://static.cmereye.com/imgs/2024/01/2efcb7085d6131ba.png'"
              alt=""></div>
          <div class="layout_page">
            <layoutPage :layoutPageScr="layoutPageScr" :isInvisalign="isInvisalign" :layoutPageText="layoutPageText"
              :layoutPage="layoutPage" :maxWidth="maxWidth" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newBtn from '@/components/common/new-btn.vue';
import layoutPage from '@/components/common/new-page-layout.vue';
export default {
  components: {
    newBtn,
    layoutPage
  },
  name: 'child',
  data() {
    return {
      pcOrMb: 'pc',
      layoutPageScr: 'https://static.cmereye.com/imgs/2023/12/f9c1a2d26e440ba5.png',
      layoutPageText: {
        text2: {
          one: '我們有專為正值換牙及發育時期小朋友而設的兒',
          two: '童專線，改善牙齒排列同時亦可擴張牙弓，減少',
          three: '需要剝牙的機會。',
        },
        textPc: {
          one: '矯齒最佳時機為 ',
          two: '7 至 9 歲',
          three: '換牙期，有效處理牙齒排列和咬合問題。'
        },
        textMb1: {
          one: '矯齒最佳時機為 ',
          two: '7 至 9 歲',
          three: '換牙期，有效處理牙齒排列和咬合問題。'
        },
        textPc1: {
          one: '到了',
          two: '10 至 12 歲',
          three: '發育期，可進一步矯正齒',
          four: '列、咬合或顎骨偏差問題。'
        },
        textMb: {
          one: '到了',
          two: '10 至 12 歲',
          three: '發育期，可進一步矯正齒',
          four: '列、咬合或顎骨偏差問題。'
        },
      },
      // 文字内容有span标签 有特殊样式 为true  目前只有 洗牙
      layoutPage: true,
      isInvisalign: true,
      maxWidth: '480px', // 植牙的文本最大宽
      linkHref: 'https://api.whatsapp.com/send?phone=85295128192',
      linkText: '立即預約及諮詢',
      isShowSvg: false,
      mb: '',
      paddingSize: '10px 88px',
      paddingSizeMb: '6px 54px',
      newSvg: 'https://static.cmereye.com/imgs/2023/12/d0209184f5c3c712.png',
      child: 'child',
    };
  },
  methods: {
    // 获取文档宽度
    getDocWidth() {
      this.pcOrMb = window.innerWidth > 767 ? 'pc' : 'mb'
    }
  },
  mounted() {
    this.getDocWidth()
    // 获取屏幕宽度
    this.mb = window.innerWidth < 768 ? 'mb' : 'pc';
  }
}
</script>

<style  scoped lang='scss'>
@media screen and (min-width: 768px) {
  .mbShow {
    display: none;
  }

  #child {
    height: 110px;
  }

  .child {
    position: relative;

    .child_img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99;
      top: 10px;
    }
  }

  .child_bg {
    background: url('https://static.cmereye.com/imgs/2024/01/1af0df82decb0541.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 1670px;
    position: relative;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 0 220px;
  }

  .child_bg::after {
    position: absolute;
    content: '';
    top: 0;
    background: url('https://static.cmereye.com/imgs/2024/01/89a795a521f13758.png');
    width: 338px;
    height: 228px;
    top: 30px;
    right: 0;
  }

  .child_bg::before {
    content: '';
    position: absolute;
    background: url(https://static.cmereye.com/imgs/2024/01/b3c79ef725ccb740.png);
    width: 338px;
    height: 228px;
    top: 30px;
    left: 0;
  }

  ::v-deep .interval {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        justify-content: space-between;
        padding-bottom: 20px;

        .pc_span_style {
          color: #57B2F3;
          font-family: Noto Sans;
          font-size: 25px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 2.5px;
        }
      }
    }
  }

  ::v-deep .new_btn {
    .img_absolute {
      right: -12% !important;
      top: -160% !important;
    }

    // .btn1,
    // .btn2 {
    //   background: #57B2F3 !important;
    // }
  }

  .bubble {
    margin-top: 150px;

    &>div {
      display: flex;
      justify-content: center;
    }

    &>div:nth-child(2) {
      position: relative;
      margin: 64px auto 0;

      &>div:nth-child(1) {
        position: absolute;
        left: -40%;
        top: -10%;
      }

      &>div:nth-child(3) {
        position: absolute;
        right: -30%;
        bottom: 0%;
      }
    }
  }

  .age_gap {
    margin-top: 110px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &>div:nth-child(2) {
      width: 100%;
    }

    ::v-deep .interval {
      &>div:nth-child(1) {
        background: url(https://static.cmereye.com/imgs/2023/12/a9d81b8aed62fa26.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 50%;
        height: 305px;
      }
    }

    ::v-deep .layout_page {
      .interval {
        .content {
          &>div:nth-child(1) {
            position: relative;
            left: 140px;

            &>div {
              max-width: 425px !important;
            }
          }

          &>div:nth-child(1)::before {
            content: '';
            background: url('https://static.cmereye.com/imgs/2024/01/f1de70154e17f880.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            width: 106px;
            height: 147px;
            position: absolute;
            left: 85px;
            top: -82px;
          }

          &>div:nth-child(1)::after {
            content: '';
            background: url('https://static.cmereye.com/imgs/2024/01/deb32f30dc2ea844.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            width: 87px;
            height: 121px;
            position: absolute;
            right: 240px;
            bottom: -90px;
          }
        }

        &>div:nth-child(2) {
          &>div:nth-child(2) {
            position: relative;
          }

          &>div:nth-child(2)::after {
            content: '';
            background: url('https://static.cmereye.com/imgs/2024/01/7b74d41f469aef95.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            width: 97px;
            height: 171px;
            position: absolute;
            right: 5px;
            top: -150px;
            z-index: -9;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  #child {
    height: 70px;
  }

  .pcShow {
    display: none;
  }

  .child {
    position: relative;
  }

  .child_img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
    top: -25px;
  }

  .child_bg {
    // margin-top: 75px;
    background: url('https://static.cmereye.com/imgs/2024/01/a609a4425386a049.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 1280px;
    position: relative;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 136px 0;
  }

  .age_gap {
    &>div:nth-child(1) {
      display: flex;
      justify-content: center;
      position: relative;
    }

    &>div:nth-child(1)::after {
      content: '';
      background: url(https://static.cmereye.com/imgs/2024/01/458dacc9ce3b73c5.png);
      background-size: 100% 100%;
      display: inline-block;
      position: absolute;
      width: 59px;
      height: 100%;
      right: 5%;
      bottom: 30%;
    }
  }

  ::v-deep .layout_page {
    .interval {
      margin: 0 !important;

      &>div:nth-child(2) {
        flex-direction: column;

        &>div:nth-child(1) {
          margin: 0 0 45px 0 !important;

          &>div:nth-child(2) {
            padding: 0;
            padding-top: 35px;
          }
        }

        &>div:nth-child(2) {
          position: relative;

          &>img {
            width: 70.667vw;
            margin: 0 auto;
          }
        }

        &>div:nth-child(2)::after {
          content: '';
          background: url(https://static.cmereye.com/imgs/2024/01/106881343efd8e48.png);
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 50px;
          height: 93px;
          position: absolute;
          display: inline-block;
          right: 2%;
          bottom: 80%;
        }

        &>div:nth-child(2)::before {
          content: '';
          background: url(https://static.cmereye.com/imgs/2024/01/92add62c38add338.png);
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 63px;
          height: 88px;
          position: absolute;
          display: inline-block;
          left: 2%;
          bottom: 80%;
        }
      }
    }

    .this-background {
      bottom: -10% !important;
      background: url(https://static.cmereye.com/imgs/2024/01/2ba686d56b5304a8.png) !important;
      background-repeat: no-repeat !important;
      background-size: 100% 100% !important;
    }
  }

  ::v-deep .new_btn {
    margin-top: 60px;

    .img_absolute {
      width: 96px !important;
      top: -210% !important;
      right: -8% !important;

      img {
        width: 100%;
      }
    }

    .btn_pc_style {
      background: #57B2F3 !important;
      border-radius: 24px !important;
    }
  }

  ::v-deep .mb_style {
    margin-top: 25px;

    &>span {
      color: #79828D !important;
      text-align: center;
      font-family: Noto Sans;
      font-size: 16px !important;
      font-style: normal;
      font-weight: 400 !important;
      line-height: normal;
      letter-spacing: 1.6px !important;
    }

    &>span:nth-child(2) {
      color: #57B2F3 !important;
      font-family: Noto Sans;
      font-size: 25px !important;
      font-style: normal;
      font-weight: 800 !important;
      line-height: normal;
      letter-spacing: 1.6px !important;
    }
  }
}</style>