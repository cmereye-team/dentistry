<template>
  <div class="new-therapy">
    <div class="crumbs main-container pcShow">
      <nuxt-link to="/">主頁</nuxt-link><nuxt-link to="/service">牙科服務</nuxt-link><a>根管治療(杜牙根)</a>
    </div>
    <div class="radices_dentis main-container">
      <div>杜牙根</div>
      <div>又稱根管治療，為治療嚴重蛀牙或牙根受細菌感染的手術<br class="pcShow" />方案。當蛀牙菌深入牙髓，引發感染並導致神經發炎，便需<br
          class="pcShow" />進行杜牙根徹底清除牙髓腔內的細菌與受感染的組織，<br class="pcShow" />以防止感染擴散。</div>
    </div>
    <div class="stop_radices">
      <div class="why_significance isArrowQuestion">為何要杜牙根？</div>
      <layoutPage :layoutPageScr="layoutPageScr" :layoutPageText="layoutPageText" :layoutPage="layoutPage"
        :maxWidth="maxWidth" />
      <div class="newBtn">
        <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize" :mb="mb"
        :paddingSizeMb="paddingSizeMb" />
      </div>
    </div>
  </div>
</template>

<script>
import layoutPage from '@/components/common/new-page-layout.vue';
import newBtn from '@/components/common/new-btn.vue';
export default {
  components: {
    layoutPage,
    newBtn
  },
  name: 'new-therapy',
  data() {
    return {
      linkHref: 'https://api.whatsapp.com/send?phone=85295128192',
      linkText: '立即預約及諮詢',
      isShowSvg: false,
      mb:'',
      paddingSize: '10px 100px',
      paddingSizeMb: '6px 74px',
      newSvg: 'https://static.cmereye.com/imgs/2023/12/ff870ed05ae5440d.png',
      layoutPageScr: 'https://static.cmereye.com/imgs/2023/12/a22d6db256547454.png',
      layoutPageText: {
        text1: `牙髓藏於堅硬的琺瑯質和象牙質之中，內有豐富的血管和神經。`,
        text3: '當外部受損，如嚴重或二次蛀牙、牙齒因受創而產生 裂痕或斷裂，外界的刺激或溫度變化等等，都會對牙髓造成影響，甚至引發敏感和疼痛。',
        text4: '',
      },
      // 文字内容有span标签 有特殊样式 为true  目前只有 洗牙
      layoutPage: false,
      maxWidth: '480px', // 植牙的文本最大宽
    };
  },
  methods: {},
  mounted() {
    // 获取屏幕宽度
    this.mb = window.innerWidth < 768 ? 'mb' : 'pc';
  },
}
</script>

<style  scoped lang='scss'>
@media screen and (min-width: 768px) {
  .crumbs {
    margin-top: 47px;

    a {
      text-decoration: none;
      color: #6B6B6B;
      font-family: Yuanti TC;
      font-size: 13.05px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      /* 20.88px */
      letter-spacing: 3.263px;
    }

    a:nth-child(2)::after {
      content: '>';
      color: #57B2F3;
      margin: 0 5px;
    }

    a:nth-child(2)::before {
      content: '>';
      color: #57B2F3;
      margin: 0 5px;
    }

    a:last-child {
      color: #57B2F3;
    }
  }

  .radices_dentis {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 554px;
    margin: 100px auto 80px;

    &>div:nth-child(1) {
      color: #57B2F3;
      text-align: center;
      font-family: Noto Sans;
      font-size: 25px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 2.5px;
    }

    &>div:nth-child(2) {
      color: #79828D;
      font-family: Noto Sans;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.8px;
      text-align: center;
      margin-top: 5px;
    }
  }

  .stop_radices {
    &>div:nth-child(2) {
      ::v-deep &>div:nth-child(2) {
        &>div:nth-child(1) {
          font-weight: 400;
        }
      }
    }
  }

  .newBtn {
    margin-top: 140px;
  }

  .why_significance {
    color: #79828D;
    text-align: center;
    font-family: Noto Sans;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 2.5px;
    position: relative;
    padding-bottom: 20px;
  }

  .isArrowQuestion {
    padding-left: 20px;

  }

  .why_significance::after {
    content: '';
    background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Vector.5u4eydocd6c0.png');
    display: inline-block;
    width: 52px;
    height: 10px;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
  }
}

@media screen and (max-width: 767px) {
  .newBtn {
    margin-top: -60px;
  }
  .radices_dentis {
    margin: 90px auto 60px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &>div:nth-child(1) {
      color: #57B2F3;
      text-align: center;
      font-family: Noto Sans;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 2.2px;
    }

    &>div:nth-child(2) {
      margin-top: 5px;
      color: #79828D;
      font-family: Noto Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.6px;
      padding: 0 25px;
      text-align: center;
    }
  }

  ::v-deep .interval {
    margin-top: 50px !important;
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
        top: -30px;
      }

      &>div:nth-child(2) {
        width: 310px;
        margin: 0 0 0 auto;
        padding-bottom: 30px;

        &>img {
          width: 100%;
        }
      }
    }
  }

  .pcShow {
    display: none !important;
  }

  .why_significance {
    color: #79828D;
    text-align: center;
    font-family: Noto Sans;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: .1563rem;
    padding-bottom: .9375rem;
    position: relative;
  }

  .why_significance::after {
    content: '';
    background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Vector.5u4eydocd6c0.png');
    display: inline-block;
    width: 3.25rem;
    height: 0.625rem;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
  }
}
</style>