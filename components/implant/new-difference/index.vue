<template>
  <div class="difference main-container">
    <div>
      <div class="mb-relative">
        <img src="https://static.cmereye.com/imgs/2023/12/2ab9e67e5d330aa1.png" alt="">
        <div class="mbShow mb-svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="77" height="43" viewBox="0 0 77 43" fill="none">
            <path
              d="M74.6879 24.3407L34.2355 35.1796L30.7638 42.4492L24.1224 37.8894L8.1733 42.1628C7.19188 42.4258 6.18052 41.842 5.91639 40.8562L0.477825 20.5587C0.213693 19.5729 0.795639 18.5622 1.77908 18.2987L68.2937 0.476593C69.2751 0.213627 70.2864 0.79743 70.5506 1.78321L75.9891 22.0807C76.2527 23.0645 75.6713 24.0772 74.6879 24.3407Z"
              fill="#57B2F3" />
          </svg>
          <div class="mb-text">一圖看清</div>
        </div>
      </div>
      <div class="why_significance">植牙技術大不同</div>
      <div><img src="https://static.cmereye.com/imgs/2023/12/ef653ce36852312e.png" alt=""></div>
    </div>
    <div>
      <div class="table">
        <div class="row row-one">
          <div class="cell"></div>
          <div class="cell">傳統植牙</div>
          <div class="cell header-three">微創植牙</div>
          <div class="cell">All-on-4 全口植牙</div>
        </div>
        <div class="row">
          <div class="cell">原理</div>
          <div class="cell">在牙槽骨中植入植體，<br class="pcShow" />待穩固結合後，<br class="pcShow" />再安裝牙冠</div>
          <div class="cell">將切口最小化，從而把植體植入牙槽骨中</div>
          <div class="cell">利用特殊力學設計，讓力量平均分散支撐整排牙齒，在四顆植體上固定正式牙橋</div>
        </div>
        <div class="row">
          <div class="cell cell-row-one">適用<br class="pcShow" />對象</div>
          <div class="cell">單顆或多顆缺牙</div>
          <div class="cell">單顆或多顆缺牙， 且骨量充足</div>
          <div class="cell">大範圍或全口缺牙</div>
        </div>
        <div class="row row-four">
          <div class="cell">優點</div>
          <div class="cell">
            <ul>
              <li>手術區域易於觀察，確保精準治療</li>
              <li>骨量不足時可同步進行補骨</li>
            </ul>
          </div>
          <div class="cell">
            <ul>
              <li>傷口小、出血少、恢復快</li>
              <li>術程耗時短，入侵性較低</li>
              <li>骨量不足時無法大範圍補骨</li>
            </ul>
          </div>
          <div class="cell">
            <ul>
              <li>一次性手術</li>
              <li>傷口小、出血少</li>
              <li>術後數天內恢復咀嚼功能</li>
              <li>專為大面積缺牙情況而設</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="cell">缺點</div>
          <div class="cell">拔牙後須待數個月傷口癒合期</div>
          <div class="cell"></div>
          <div class="cell">術後需更加注意保養</div>
        </div>
      </div>
      <div class="assess pcShow">
        牙齒狀況因人而異，建議尋求牙科醫生的評估及諮詢，以確定是否適合進行該項療程。
      </div>
    </div>
    <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize" :mb="mb"
      :paddingSizeMb="paddingSizeMb" />
  </div>
</template>

<script>
import newBtn from '@/components/common/new-btn.vue';
export default {
  components: {
    newBtn
  },
  name: 'difference',
  data() {
    return {
      linkHref: 'https://api.whatsapp.com/send?phone=85295128192',
      linkText: '立即預約植牙',
      isShowSvg: false,
      mb: '',
      paddingSize: '10px 100px',
      paddingSizeMb: '6px 74px',
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
@font-face {
  font-family: 'Cubic';
  src: url(@/asset/font/Cubic_11_1.100_R.woff);
}

@media screen and (min-width: 768px) {
  .mbShow {
    display: none !important;
  }

  .difference {
    margin: 90px auto 90px;

    &>div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 50px;

      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: url(https://static.cmereye.com/imgs/2023/12/e25aeb8b53b368bf.png);
        width: 134px;
        height: 84px;
        display: inline-block;
        position: absolute;
        top: -44%;
        left: -20%;
      }

      &>div:nth-child(2) {
        margin: 0 20px;
      }
    }
  }

  .why_significance {
    color: #79828D;
    text-align: center;
    font-family: 'Noto Sans CJK TC';
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 2.5px;
    position: relative;
    padding-bottom: 20px;
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

  .assess {
    color: #79828D;
    text-align: center;
    font-family: 'Noto Sans CJK TC';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.8px;
  }

  .table {
    display: table;
    border-collapse: collapse;
    max-width: 70%;
    margin: 45px auto 33px;
  }

  .row {
    display: flex;

    &>div {
      flex: 3;
    }

    &>div:nth-child(1) {
      flex: 1;
    }
  }

  .cell {
    display: table-cell;
    border: 1px solid #57B2F3;
    padding: 30px 50px;
    text-align: center;
  }

  .row {
    &>div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-align: left;
    }

    &>div:nth-child(1) {
      border-left: 0;
      border-bottom: 0;
      border-top: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 15px;
      color: #57B2F3;
      font-family: 'Noto Sans CJK TC';
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.44px;
    }

    &>div:nth-child(2) {
      color: #79828D;
      font-family: 'Noto Sans CJK TC';
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.28px;
    }

    &>div:nth-child(3) {
      color: #79828D;
      font-family: 'Noto Sans CJK TC';
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 1.6px;
    }

    &>div:nth-child(4) {
      color: #000EE8;
      font-family: Cubic;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 23.014px;
      /* 143.836% */
      letter-spacing: 1.28px;
      background: #F0F9FD;
    }
  }

  .row-four {
    ul {
      list-style-type: disc;
    }
  }

  .row-one {
    &>div {
      padding: 30px;
      display: flex;
      justify-content: center;
      background: #57B2F3;
      border-top: none;
      border-right: 2px solid #fff;
      border-left: 2px solid #fff;
      font-style: normal;
      line-height: normal;
    }

    &>div:nth-child(2) {
      color: #FFF;
      font-family: 'Noto Sans CJK TC';
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 1.44px;
    }

    &>div:nth-child(3) {
      color: #FFF;
      font-family: 'Noto Sans CJK TC';
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 1.92px;
      position: relative;
    }

    &>div:nth-child(3)::after {
      content: '';
      background: url(https://static.cmereye.com/imgs/2023/12/e98c7b94ee3eec92.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: inline-block;
      position: absolute;
      top: -45%;
      width: 109px;
      height: 100%;
      right: 5%;
    }

    &>div:nth-child(4) {
      color: #FFF;
      font-family: Cubic;
      font-size: 20px;
      font-weight: 400;
      background: url(https://static.cmereye.com/imgs/2023/12/76d5a3965c305232.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    &>div:nth-child(1) {
      display: flex;
      justify-content: center;
      background: transparent;
    }
  }
}

@media screen and (max-width: 767px) {
  .mb-relative {
    position: relative;
  }

  .mb-svg {
    position: absolute;
    top: -40%;
    left: -20%;

    .mb-text {
      position: absolute;
      top: 30%;
      left: 15%;
      transform: rotate(-15deg);
      text-align: center;
      color: var(--White, #FFF);
      font-family: 'Noto Sans CJK TC';
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.99px;
    }
  }

  .pcShow {
    display: none !important;
  }

  .difference {
    margin: 61px auto;

    &>div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;

      &>div:nth-child(1),
      &>div:nth-child(3) {
        width: 70px;
        position: relative;

        &>img {
          width: 100%;
        }
      }

      &>div:nth-child(1)::before {
        content: '';
        background: url(https://static.cmereye.com/imgs/2023/12/7b9d8b20ed574055.png);
        width: 79px;
        height: 49px;
        display: inline-block;
        position: absolute;
        top: -40%;
        left: -20%;
      }

      &>div:nth-child(2) {
        margin: 0 7.5px;
        font-size: 22px;
        letter-spacing: 1px;
        // padding: 0 5px;
      }
    }

    &>div:nth-child(2) {
      margin-top: 45px;
    }
  }

  .table {
    display: table;
    border-collapse: collapse;
    max-width: 90%;
    margin: 45px auto 33px;
  }

  .row {
    display: flex;

    &>div {
      flex: 3;
    }

    &>div:nth-child(1) {
      flex: 1;
    }
  }

  .cell {
    display: table-cell;
    border-right: 1px solid #57B2F3;
    border-bottom: 1px solid #57B2F3;
    padding: 5px 15px;
    text-align: center;
  }

  .row {
    &>div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-align: left;
    }

    &>div:nth-child(1) {
      border-left: 0;
      border-bottom: 0;
      border-top: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: #57B2F3;
      text-align: center;
      font-family: 'Noto Sans CJK TC';
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      min-width: 52px;
      padding: 0 16px 0 0;
    }

    &>div:nth-child(2) {
      color: #79828D;
      font-family: 'Noto Sans CJK TC';
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: 18px;
      /* 138.462% */
      letter-spacing: 1.04px;
      padding: 5px 11px;
    }

    &>div:nth-child(3) {
      color: #79828D;
      font-family: 'Noto Sans CJK TC';
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px;
      /* 138.462% */
      letter-spacing: 1.04px;
      padding: 5px 11px;
      min-width: 95px;
    }

    &>div:nth-child(4) {
      font-family: Cubic;
      color: #000EE8;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      /* 138.462% */
      letter-spacing: 1.04px;
      background: #F0F9FD;
      padding: 5px 11px;
      min-width: 115px;
    }
  }
  .cell-row-one {
    padding: 0 11px 0 0 !important;
  }
  .row-four {
    &>div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    ul {
      list-style-type: disc;
      padding: 5px 0;
    }

    li::marker {
      font-size: 0;
    }

    li::before {
      content: '•';
    }
  }

  .row-one {
    &>div {
      border-bottom: 1px solid #57B2F3;
      padding: 5px 0;
      display: flex;
      justify-content: center;
      background: #57B2F3;
      border-top: none;
      border-right: 1px solid #fff;
      border-left: 1px solid #fff;
      font-style: normal;
      line-height: normal;
    }
    &>div:nth-child(1) {
      border:none;
    }

    &>div:nth-child(2) {
      color: #FFF;
      font-family: 'Noto Sans CJK TC';
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    &>div:nth-child(3) {
      color: #FFF;
      font-family: 'Noto Sans CJK TC';
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      position: relative;
    }

    &>div:nth-child(3)::after {
      content: '';
      background: url(https://static.cmereye.com/imgs/2023/12/e962cec2babe6ca9.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: inline-block;
      position: absolute;
      top: -75%;
      width: 41px;
      height: 36px;
      right: -10%;
    }

    &>div:nth-child(4) {
      padding: 0;
      color: #FFF;
      font-family: Cubic;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: -0.78px;
      background: url(https://static.cmereye.com/imgs/2023/12/4db3e0577ab88351.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    &>div:nth-child(1) {
      display: flex;
      justify-content: center;
      background: transparent;
    }
  }

  .why_significance {
    color: #79828D;
    text-align: center;
    font-family: 'Noto Sans CJK TC';
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