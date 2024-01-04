<template>
  <div>
    <div class="main-container menu pcShow">
      <nuxt-link to="/">主頁</nuxt-link>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
          <path d="M1 1L5.17073 5.39024L1 10" stroke="#57B2F3" stroke-width="1.09756" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </span>
      <nuxt-link to="/service">牙科服務</nuxt-link>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
          <path d="M1 1L5.17073 5.39024L1 10" stroke="#57B2F3" stroke-width="1.09756" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </span>
      <a>隱形牙箍</a>
    </div>
    <div class="main-container">
      <div class="title">
        <div>隱形牙箍</div>
        <div>
          隱形牙箍是一種活動式透明牙箍，可自<br class="mbShow" />行除戴。透過先進數位<br class="pcShow" />科技，以電腦模<br
            class="mbShow" />擬牙齒移動過程，並利用牙箍的機械性<br class="mbShow" />力量，<br class="pcShow" />令牙齒周圍組織產生移動，將牙<br
            class="mbShow" />齒逐步推向理想位置。</div>
        <a>
          <img class="pcShow" src="https://static.cmereye.com/imgs/2023/12/996d7bbac360f590.png" alt="page-down">
          <img class="mbShow" src="https://static.cmereye.com/imgs/2024/01/6a8b5c22a80bc484.png" alt="page-down">
        </a>
      </div>
      <div class="correction_box">
        <div class="why_significance isArrowQuestion">哪種牙齒狀況下<br class="mbShow" />會考慮隱形矯正？</div>
        <div class="correction">
          <div v-for="item in correctionList" :key="item.id" class="significance_item">
            <div class="significance_item_img">
              <img :src="item.img" alt="">
            </div>
            <div class="significance_item_text">
              <div class="significance_item_text_title">{{ item.title }}</div>
            </div>
          </div>
        </div>
        <div class="newBtn">
          <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize" :mb="mb"
            :paddingSizeMb="paddingSizeMb" :newSvg="newSvg" :maxNum="1745" :minNum="580" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import newBtn from '@/components/common/new-btn.vue';
export default {
  components: {
    newBtn
  },
  data() {
    return {
      linkHref: 'https://api.whatsapp.com/send?phone=85295128192',
      linkText: '立即預約及諮詢',
      isShowSvg: false,
      mb: '',
      paddingSize: '10px 88px',
      paddingSizeMb: '6px 64px',
      newSvg: 'https://static.cmereye.com/imgs/2023/12/ff870ed05ae5440d.png',
      correctionList: [
        {
          img: 'https://static.cmereye.com/imgs/2023/12/eb96793dc4e0121a.png',
          title: '開咬',
          id: '1'
        },
        {
          img: 'https://static.cmereye.com/imgs/2023/12/7a1626401058192d.png',
          title: '咬合過深',
          id: '2'
        },
        {
          img: 'https://static.cmereye.com/imgs/2023/12/b3b7e510a4d3c0ae.png',
          title: '反咬合',
          id: '3'
        },
        {
          img: 'https://static.cmereye.com/imgs/2023/12/a3d29f1007e59fc9.png',
          title: '牙縫疏大',
          id: '4'
        },
        {
          img: 'https://static.cmereye.com/imgs/2023/12/040103ea9d9c95ce.png',
          title: '牙齒倒及',
          id: '5'
        },
        {
          img: 'https://static.cmereye.com/imgs/2023/12/ba6b7d2cf3c259f9.png',
          title: '牙齒擠擁',
          id: '6'
        },
      ]
    }
  },
  computed: {
  },
  methods: {
  }
}

</script>

<style lang="scss" scoped>
//pc
@media only screen and (min-width: 768px) {
  .mbShow {
    display: none;
  }

  .menu {
    margin-top: 47px;

    &>span {
      color: #57B2F3;
      padding-bottom: 2px;
      margin: 0 5px;
    }

    &>a {
      color: #6B6B6B;
      font-family: Yuanti TC;
      font-size: 13.05px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      /* 20.88px */
      letter-spacing: 3.263px;
      text-decoration: none;
      padding-bottom: 1px;
      position: relative;
    }

    &>a::after {
      content: '';
      position: absolute;
      display: inline-block;
      width: 100%;
      height: 1px;
      background: #6B6B6B;
      left: 0;
      bottom: 0;
    }

    &>a:last-child {
      color: #57B2F3;
      font-family: Yuanti TC;
      font-size: 13.05px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: 3.263px;
    }

    &>a:last-child::after {
      content: none;
    }
  }

  .title {
    margin: 109px auto;
    position: relative;

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
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.8px;
      text-align: center;
      margin-top: 1px;
    }

    &>a:nth-child(3) {
      position: absolute;
      top: -38px;
      left: 20%;
    }
  }

  .correction {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 40px 80px;
    padding: 0 200px;
    margin-top: 64px;

    &>div {
      &>div:nth-child(2) {
        color: #57B2F3;
        font-family: Noto Sans TC;
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        text-align: center;
        margin-top: 8px;
      }
    }
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

//md
@media only screen and (max-width: 767px) {
  .title {
    margin-top: 100px;
    padding: 0 20px;
    position: relative;

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
      color: #79828D;
      font-family: Noto Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.6px;
      text-align: center;
    }

    &>a {
      position: absolute;
      top: -115%;
      right: 12%;
    }
  }

  .correction_box {
    margin-top: 61px;
    padding: 0 20px;
  }

  .correction {
    margin-top: 45px;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.8125rem 1.25rem;
    justify-items: center;

    &>div {
      &>div:nth-child(1) {
        max-width: 42.133vw;

        &>img {
          width: 100%;
        }
      }

      &>div:nth-child(2) {
        margin-top: 10px;
        color: #57B2F3;
        font-family: Noto Sans TC;
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        text-align: center;
      }
    }
  }

  ::v-deep .newBtn {
    &>div {
      .img_absolute {
        top: -13.3333vw !important;
        right: 18.6667vw !important;
        z-index: 99 !important;
      }
    }
  }

  .pcShow {
    display: none;
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
