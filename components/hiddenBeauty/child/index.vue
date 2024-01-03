<template>
  <div class="child">
    <div class="child_bg">
      <div class="main-container bubble">
        <div v-if="pcOrMb == 'pc'">
          <img src="https://static.cmereye.com/imgs/2023/12/ad71e1d6f86b1529.png" alt="">
        </div>
        <div>
          <div v-if="pcOrMb == 'pc'"><img src="https://static.cmereye.com/imgs/2023/12/d1f99bcd3aff5ebd.png" alt=""></div>
          <div><img
              :src="pcOrMb == 'pc' ? 'https://static.cmereye.com/imgs/2023/12/63668eed6619c30f.png' : 'https://static.cmereye.com/imgs/2024/01/d02a371c94deb7b9.png'"
              alt=""></div>
          <div v-if="pcOrMb == 'pc'"><img src="https://static.cmereye.com/imgs/2023/12/3f654ed56a2419ea.png" alt=""></div>
        </div>
        <div v-if="pcOrMb == 'pc'" class="new_btn">
          <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize" :mb="mb"
            :paddingSizeMb="paddingSizeMb" :newSvg="newSvg" :maxNum="1745" :minNum="580" />
        </div>
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
      paddingSizeMb: '6px 64px',
      newSvg: 'https://static.cmereye.com/imgs/2023/12/d0209184f5c3c712.png',
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
  }
}
</script>

<style  scoped lang='scss'>
@media screen and (min-width: 768px) {
  .mbShow {
    display: none;
  }

  .child_bg {
    background: url('https://static.cmereye.com/imgs/2023/12/e4a5e880add655b2.png');
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
    padding: 220px 0;
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

    .btn1,
    .btn2 {
      background: #57B2F3 !important;
    }
  }

  .bubble {
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
  }
}

@media screen and (max-width: 767px) {
  .pcShow {
    display: none;
  }

  .child_bg {
    background: url('https://static.cmereye.com/imgs/2024/01/502f8ee9f0a0fdc5.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 1281px;
    position: relative;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 136px 0;
  }

  .age_gap {
    margin-top: 165px;

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
}
</style>