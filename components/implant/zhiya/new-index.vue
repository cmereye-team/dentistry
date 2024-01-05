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
      <div class="pcShow">
        <!-- <img src="https://static.cmereye.com/imgs/2023/12/f686533c6de00f5b.png" alt=""> -->
        <div class="border_box">
          <div></div>
          <div></div>
          <div class="border1_round hover_round">口齒不清</div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="border_box1">
          <div class="border2_round hover_round">咀嚼困難</div>
          <div class="border2_round1 hover_round">臉型歪斜</div>
          <div class="border2_round2 hover_round">腦退化</div>
          <div></div>
          <div></div>
        </div>
        <div class="border_box2">
          <div></div>
          <div></div>
          <div></div>
          <div class="border3_round hover_round">牙周疾病</div>
          <div></div>
          <div></div>
          <div class="border3_round1 hover_round">咬合不正</div>
        </div>
      </div>
      <div class="agomphosis_mb mbShow">
        <img src="https://static.cmereye.com/imgs/2024/01/8bdad865bcb81806.png" alt="">
      </div>
      <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize" :mb="mb"
        :paddingSizeMb="paddingSizeMb" :maxNum="1906" :minNum="770" />
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
      mb: '',
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
    // 鼠标移入停止动画 放大1.1倍
  },
};
</script>

<style lang="scss" scoped>
//pc
@media only screen and (min-width: 768px) {
  .mbShow {
    display: none;
  }
  .border_box {
    position: relative;
    margin-left: -5%;
    margin-bottom: -1.5%;

    &>div:nth-child(1) {
      position: absolute;
      width: 11px;
      height: 11px;
      background: #8FCFF2;
      border-radius: 50%;
      left: -50%;
      bottom: 25%;
      animation: identifier 10s linear infinite;
    }

    &>div:nth-child(2) {
      position: absolute;
      width: 39px;
      height: 39px;
      background: #BFE4F8;
      border-radius: 50%;
      left: -35%;
      bottom: 20%;
      animation: amplification 7s linear infinite;
    }

    &>div:nth-child(4) {
      position: absolute;
      width: 45px;
      height: 45px;
      background: #D3ECF8;
      border-radius: 50%;
      right: -40%;
      top: 20%;
      animation: amplification2 9s linear infinite;
    }

    &>div:nth-child(5) {
      position: absolute;
      width: 19px;
      height: 19px;
      background: #BFE4F8;
      border-radius: 50%;
      right: -10%;
      top: 0%;
      animation: identifier 10s linear infinite;
    }

    &>div:nth-child(6) {
      position: absolute;
      width: 11px;
      height: 11px;
      background: #57B2F3;
      border-radius: 50%;
      right: -55%;
      top: 10%;
      animation: identifier 9s linear infinite;
    }
  }

  .border_box1 {
    margin-top: -2%;

    &>div:nth-child(4) {
      position: absolute;
      width: 11px;
      height: 11px;
      background: #BFE4F8;
      border-radius: 50%;
      right: 5%;
      bottom: 0;
      animation: identifier 10s linear infinite;
    }

    &>div:nth-child(5) {
      position: absolute;
      width: 6px;
      height: 6px;
      background: #8FCFF2;
      border-radius: 50%;
      right: 0%;
      bottom: 10%;
      animation: identifier 10s linear infinite;
    }
  }

  .border1_round {
    color: #50565E;
    font-family: Noto Sans;
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: 108%;
    width: 135px;
    height: 134px;
    background: #D3ECF8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0;
    animation: identifier2 7s linear infinite;
  }

  .border2_round {
    width: 158px;
    height: 158px;
    background: #D3ECF8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #50565E;
    font-family: Noto Sans;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 108%;
    letter-spacing: 0;
    margin-top: 3%;
    animation: identifier4 6s linear infinite;
  }

  .border2_round1 {
    margin: 0 10px;
    width: 98px;
    height: 98px;
    background: #D3ECF8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #50565E;
    font-family: Noto Sans;
    font-size: 17.913px;
    font-style: normal;
    font-weight: 700;
    line-height: 108%;
    letter-spacing: 0;
    animation: identifier3 7s linear infinite;
  }

  .border2_round2 {
    width: 211px;
    height: 211px;
    background: #7FC8F0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #50565E;
    font-family: Noto Sans;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    letter-spacing: 0;
    animation: identifier5 10s ease infinite;
  }

  .border_box2 {
    margin-top: -2.5%;
    margin-left: 6%;

    &>div:nth-child(1) {
      position: absolute;
      width: 70px;
      height: 70px;
      background: #D3ECF8;
      border-radius: 50%;
      left: -20%;
      top: 15%;
      animation: amplification3 8s linear infinite;
    }

    &>div:nth-child(2) {
      position: absolute;
      width: 19px;
      height: 19px;
      background: #BFE4F8;
      border-radius: 50%;
      left: -20%;
      top: 55%;
      animation: identifier 10s linear infinite;
    }

    &>div:nth-child(3) {
      position: absolute;
      width: 11px;
      height: 11px;
      background: #57B2F3;
      border-radius: 50%;
      left: -6%;
      top: 52%;
      animation: identifier 10s linear infinite;
    }

    &>div:nth-child(5) {
      position: absolute;
      width: 56px;
      height: 56px;
      background: #8FCFF2;
      border-radius: 50%;
      right: 30%;
      bottom: 0%;
      animation: amplification4 9s linear infinite;
    }

    &>div:nth-child(6) {
      position: absolute;
      width: 11px;
      height: 11px;
      background: #ECF7FC;
      border-radius: 50%;
      right: 50%;
      bottom: 0%;
      animation: identifier 10s linear infinite;
    }
  }

  .border3_round {
    width: 216px;
    height: 216px;
    background: #A4D8F4;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #50565E;
    font-family: Noto Sans;
    font-size: 43px;
    font-style: normal;
    font-weight: 700;
    line-height: 108%;
    letter-spacing: 0;
    margin: 0 10px;
    animation: identifier6 8s ease-in-out infinite;
  }

  .border3_round1 {
    width: 140px;
    height: 140px;
    background: #D3ECF8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #50565E;
    font-family: Noto Sans;
    font-size: 27.327px;
    font-style: normal;
    font-weight: 700;
    line-height: 108%;
    letter-spacing: 0;
    animation: identifier2 5s linear infinite;
  }

  @keyframes amplification {
    0% {
      transform: scale(1) translate(10%, 10%) rotate(0deg);
      opacity: 0.7;
    }

    20% {
      transform: scale(0.9) translate(-10%, 20%) rotate(72deg);
      opacity: 0.8;
    }

    40% {
      transform: scale(1) translate(-20%, -20%) rotate(144deg);
      opacity: 0.9;
    }

    60% {
      transform: scale(0.9) translate(20%, -20%) rotate(216deg);
      opacity: 1;
    }

    80% {
      transform: scale(1.1) translate(20%, 10%) rotate(288deg);
      opacity: 1;
    }

    100% {
      transform: scale(1) translate(10%, 10%) rotate(360deg);
      opacity: 1;
    }
  }

  @keyframes amplification2 {
    0% {
      transform: scale(1.1) translate(20%, 30%);
      opacity: 0.7;
    }

    30% {
      transform: scale(1) translate(20%, 50%);
      opacity: 1;
    }

    70% {
      transform: scale(0.9) translate(30%, 70%);
      opacity: 0.8;
    }

    100% {
      transform: scale(1.1) translate(20%, 30%);
      opacity: 1;
    }
  }

  @keyframes amplification3 {
    0% {
      transform: scale(1) translate(30%, -10%) rotate(0deg);
      opacity: 0.7;
    }

    33% {
      transform: scale(0.9) translate(30%, 20%) rotate(72deg);
      opacity: 0.8;
    }


    66% {
      transform: scale(1.1) translate(30%, -20%) rotate(216deg);
      opacity: 1;
    }

    100% {
      transform: scale(1) translate(30%, -10%) rotate(360deg);
      opacity: 1;
    }
  }

  @keyframes amplification4 {
    0% {
      transform: scale(1) translate(-10%, 0%) rotate(0deg);
      opacity: 1;
    }

    30% {
      transform: scale(0.9) translate(0%, -10%) rotate(120deg);
      opacity: 0.8;
    }

    70% {
      transform: scale(1) translate(-10%, -20%) rotate(240deg);
      opacity: 0.9;
    }

    100% {
      transform: scale(1) translate(-10%, 0%) rotate(360deg);
      opacity: 1;
    }
  }


  @keyframes identifier {
    0% {
      transform: scale(1.2) translate(10%, 10%);
      opacity: .7;
    }

    50% {
      transform: scale(1.6) translate(0%, 0%);
      opacity: 1;
    }

    100% {
      transform: scale(1.2) translate(10%, 10%);
      opacity: .8;
    }
  }

  @keyframes identifier2 {
    0% {
      transform: scale(0.9);
      font-size: 27px;
      opacity: 1;
    }

    25% {
      transform: scale(1.1);
      font-size: 27px;
      opacity: 0.7;
    }

    75% {
      transform: scale(1);
      font-size: 27px;
      opacity: 0.7;
    }

    100% {
      transform: scale(1.1);
      opacity: 1;
      font-size: 27px;
    }
  }

  @keyframes identifier3 {
    0% {
      transform: scale(1.1) translateY(0%);
      font-size: 17px;
      opacity: 1;
    }

    25% {
      transform: scale(1) translateY(10%);
      font-size: 17px;
      opacity: 0.7;
    }

    75% {
      transform: scale(0.9) translateY(20%);
      font-size: 17px;
      opacity: 0.7;
    }

    100% {
      transform: scale(0.8) translateY(10%);
      opacity: 1;
      font-size: 17px;
    }
  }

  @keyframes identifier4 {
    0% {
      transform: scale(0.8);
      font-size: 30px;
      opacity: 1;
    }

    35% {
      transform: scale(0.9);
      font-size: 30px;
      opacity: 0.8;
    }

    65% {
      transform: scale(0.8);
      font-size: 30px;
      opacity: 0.7;
    }

    100% {
      transform: scale(1);
      font-size: 30px;
      opacity: 0.7;
    }
  }

  @keyframes identifier5 {
    0% {
      transform: scale(0.8);
      font-size: 50px;
      opacity: 1;
    }

    35% {
      transform: scale(1);
      font-size: 50px;
      opacity: 0.8;
    }

    65% {
      transform: scale(0.8);
      font-size: 50px;
      opacity: 0.7;
    }

    100% {
      transform: scale(0.9);
      font-size: 50px;
      opacity: 1;
    }
  }

  @keyframes identifier6 {
    0% {
      transform: scale(0.8);
      font-size: 42px;
      opacity: 1;
    }

    35% {
      transform: scale(0.9);
      font-size: 42px;
      opacity: 0.8;
    }

    65% {
      transform: scale(0.8);
      font-size: 42px;
      opacity: 0.7;
    }

    100% {
      transform: scale(1);
      font-size: 42px;
      opacity: 0.7;
    }
  }
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
      // margin: 67px auto 84px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding-top: 50px;

      &>div {
        display: flex;
        align-items: center;
        position: relative;
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
  .pcShow {
    display: none;
  }
  .agomphosis_mb {
    margin: 45px auto 0;
    display: flex;
    justify-content: center;
  }
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

  ::v-deep .interval {
    margin-top: 162px !important;

    &>div:nth-child(1) {
      position: initial !important;
    }

    .content {
      &>div:nth-child(1) {
        margin-top: 25px !important;
      }

      &>div:nth-child(2) {
        position: absolute !important;
        top: -15% !important;
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
}
</style>
