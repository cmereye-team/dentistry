<template>
  <div class="step">
    <div class="menu main-container">
      <p><nuxt-link style="color: #000;text-decoration: none" to="/">首頁</nuxt-link></p>
      <p style="margin:0 0.5vw">></p>
      <p><nuxt-link to="/service" style="color: #000;text-decoration: none">牙科服務</nuxt-link></p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">瓷貼片</p>
    </div>
    <div class="main-container all-ceramic">
      <div class="all-ceramic-one">
        <div>全瓷貼片</div>
        <div>為常見的美容牙科技術。以度身訂造牙貼片，匠心設計以貼合每個人獨特的牙齒形狀，效仿自然牙齒的質感和色澤，且堅固耐用，媲美牙齒琺瑯質。</div>
      </div>
      <div class="all-ceramic-two">
        <div class="why_significance isArrowQuestion">哪種牙齒狀況下適合做全瓷貼片？</div>
        <div><span>塑造</span><span class="text-color">專屬</span><span>你的微笑曲線</span></div>
        <div>
          <div v-for="(item, index) in allCeramicList" :key="index">
            <div><img :src="item.imgSrc" alt=""></div>
            <div>{{ item.title }}</div>
          </div>
        </div>
        <div>
          <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize" :mb="mb"
            :paddingSizeMb="paddingSizeMb" :newSvg="newSvg" />
        </div>
        <div>
          <img src="https://static.cmereye.com/imgs/2023/12/69ef54f26b6fbfc4.png" alt="">
          <img src="https://static.cmereye.com/imgs/2023/12/106b0ad7f3fd7fa0.png" alt="">
        </div>
      </div>
    </div>
    <div></div>
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
      paddingSizeMb: '6px 74px',
      newSvg: 'https://static.cmereye.com/imgs/2023/12/ff870ed05ae5440d.png',
      allCeramicList: [
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/272f481313597e82.png',
          title: '齒色不均',
        },
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/aebe195ef068929e.png',
          title: '長短不齊',
        },
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/7c51697af35343df.png',
          title: '牙齒染色',
        },
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/925c4ad4d5ae8136.png',
          title: '四環素牙',
        },
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/5ad31eadadd05782.png',
          title: '大小不一',
        },
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/af20852c3ed5c910.png',
          title: '缺角斷裂',
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
@media screen and (min-width: 768px) {
  .mbShow {
    display: none;
  }

  .menu {
    margin-top: 47px;
    display: flex;

    p {
      font-family: Yuanti TC;
      font-size: 13.05px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: 3.263px;

      a {
        border-bottom: 1px solid #000;
        padding-bottom: 1px;
      }
    }
  }

  .all-ceramic-one {
    margin-top: 86px;

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
      max-width: 550px;
      margin: 3px auto 0;
      text-align: center;
    }
  }

  .all-ceramic-two {
    margin-top: 107px;
    position: relative;

    &>div:nth-child(2) {
      margin-top: 36px;
      text-align: center;

      span {
        color: #79828D;
        text-align: center;
        font-family: Noto Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.8px;
      }

      .text-color {
        color: #57B2F3;
        font-family: Noto Sans;
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 2.5px;
      }
    }

    &>div:nth-child(3) {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 40px 80px;
      margin-top: 54px;
      padding: 0 200px;

      &>div {
        display: flex;
        flex-direction: column;
        align-items: center;

        &>div:nth-child(2) {
          margin-top: 16px;
          color: #57B2F3;
          font-family: Noto Sans TC;
          font-size: 25px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%;
        }
      }
    }

    &>div:nth-child(5) {
      position: absolute;
      bottom: -17%;
      right: 17%;

      &>img:nth-child(2) {
        position: absolute;
        right: -40%;
        top: -8%;
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

@media screen and (max-width: 767px) {
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