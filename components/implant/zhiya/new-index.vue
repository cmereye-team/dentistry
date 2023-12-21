<template>
  <div class="step comContent section">
    <div class="comContent meun main-container pcShow">
      <p>
        <nuxt-link style="color: #000; text-decoration: none" to="/">首頁</nuxt-link>
      </p>
      <p style="margin: 0 0.5vw">></p>
      <p>牙科服務</p>
      <p style="margin: 0 0.5vw">></p>
      <p style="color: #57b2f3">植牙</p>
    </div>
    <layoutPage :layoutPageScr="layoutPageScr" :layoutPageText="layoutPageText" :layoutPage="layoutPage"
      :maxWidth="maxWidth" />
    <div class="main-container agomphosis">
      <div class="why_significance isArrowQuestion">缺牙不補會有哪些後遺症？</div>
      <div>
        <img src="https://static.cmereye.com/imgs/2023/12/f686533c6de00f5b.png" alt="">
      </div>
      <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize" :mb="mb"
        :paddingSizeMb="paddingSizeMb" />
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
  data() {
    return {
      linkHref: 'https://api.whatsapp.com/send?phone=85295128192',
      linkText: '立即預約諮詢',
      isShowSvg: false,
      mb:'',
      paddingSize: '10px 100px',
      paddingSizeMb: '6px 74px',
      layoutPageScr: 'https://static.cmereye.com/imgs/2023/12/70eea8dd19da2a0d.png',
      layoutPageText: {
        text1: `植牙屬口腔頜面手術，把鈦金屬植體穩固地植入牙槽骨，作為假牙、牙橋或牙托的支撐，以填補缺牙部分。`,
        text3: '缺牙為常見的口腔問題，往往因蛀牙、牙周病、身體老化、家族遺傳或意外所導致。',
        text4: '除了影響外觀、飲食、發音等方面，後續衍生許多潛在問題。若置之不理，未接受進一步治療，可能會導致腦退化，增加失智風險。',
        // text2:{
        //   one:'牙醫正常建議',
        //   two:'每半年至一年',
        //   three:'洗牙一次。',
        // },
        // textPc: {
        //   one:'若患有牙周病、吸煙、佩戴假牙、或正接受矯齒人士， 則建議',
        //   two:'每三個月至半年',
        //   three:'洗牙一次。'
        // },
        // textMb:{
        //   one:'若患有牙周病、吸煙、佩戴假牙、或正',
        //   two:'接受矯齒人士， 則建議',
        //   three:'每三個月至半年',
        //   four:'洗牙一次。'
        // },
      },
      // 文字内容有span标签 有特殊样式 为true  目前只有 洗牙
      layoutPage: false,
      maxWidth: '430px', // 植牙的文本最大宽
    };
  },
  computed: {},
  mounted() {
    // 获取屏幕宽度
    this.mb = window.innerWidth < 768 ? 'mb' : 'pc';
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
//pc
@media only screen and (min-width: 768px) {
  .mbshow {
    display: none;
  }

  .meun {
    // padding-left: 146px;
    margin-top: 47px;
    display: flex;
    font-size: 16px;
  }

  .agomphosis {
    margin-top: 126px;

    &>div:nth-child(2) {
      margin: 67px auto 84px;
      display: flex;
      justify-content: center;
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
  .pcShow {
    display: none !important;
  }

  .meun {
    padding-left: 6vw;
    display: flex;
  }

  .agomphosis {
    margin-top: 3.75rem;

    &>div:nth-child(2) {
      width: 335px;
      margin: 45px auto 0;

      &>img {
        width: 100%;
      }
    }
  }
  ::v-deep .interval  {
    &>div:nth-child(1) {
      bottom: 305px !important;
    }
    .content {
      &>div:nth-child(1){
        margin-top: 65px !important;
      }
    }
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
}</style>
