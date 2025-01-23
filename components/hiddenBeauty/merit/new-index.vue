<template>
  <div class="merit">
    <div class="why_significance">隱形牙箍三大優點</div>
    <div class="main-container merit_content">
      <div v-for="item in meritList" :key="item.id">
        <div>
          <img :src="item.img" :alt="item.title">
        </div>
        <div v-html="item.title"></div>
        <div>{{ item.text }}</div>
      </div>
    </div>
    <!-- <div class="new-btn">
      <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize" :mb="mb"
        :paddingSizeMb="paddingSizeMb" :newSvg="newSvg" :maxNum="5150" :minNum="4060"  :maxNumMb="5725" :minNumMb="5300"  />
    </div> -->
  </div>
</template>

<script>
import newBtn from '@/components/common/new-btn.vue';
export default {
  components: {
    newBtn
  },
  name: 'merit',
  data() {
    return {
      linkHref: 'https://api.whatsapp.com/send?phone=85295128192',
      linkText: '立即預約及諮詢',
      isShowSvg: false,
      mb: '',
      paddingSize: '10px 88px',
      paddingSizeMb: '6px 64px',
      newSvg: 'https://static.cmereye.com/imgs/2023/12/ff870ed05ae5440d.png',
      meritList: [
        {
          id: 1,
          img: 'https://static.cmereye.com/imgs/2024/01/7f68060190d655ce.png',
          title: '無礙日常<br class="mbShow" />活動及學習',
          text: '採用舒適及隱形設計，可避免傳統鋼箍鋼線或骨釘刮傷囗腔，無論演講、運動、吹奏樂器時，都可方便除戴，讓小朋友更專注於多元興趣中'
        },
        {
          id: 2,
          img: 'https://static.cmereye.com/imgs/2024/01/03c713cda627ae74.png',
          title: '方便檢查佩<br class="mbShow" />戴牙箍時間',
          text: '家長可在隱形牙箍加上藍色依從性顯示點，以便隨時檢查小朋友佩戴牙箍時間是否足夠，確保更佳的矯齒效果。'
        },
        {
          id: 3,
          img: 'https://static.cmereye.com/imgs/2024/01/90ce913c5030bcd8.png',
          title: '可處理複雜<br class="mbShow" />和嚴重個案',
          text: '隱形牙箍設有「輔助翼托」，可達到將下顎向前移的作用，有效改善小朋友哨牙等問題。'
        },
      ]
    };
  },
  methods: {},
  mounted(){
    // 获取屏幕宽度
    this.mb = window.innerWidth < 768 ? 'mb' : 'pc';
  },
}
</script>

<style  scoped lang='scss'>
@media screen and (min-width: 768px) {
  ::v-deep .mbShow {
    display: none !important;
  }
  .merit {
    margin: 109px auto;
  }

  .merit_content {
    display: flex;
    justify-content: space-between;
    padding: 0 180px;
    margin-top: 64px;

    &>div:nth-child(2) {
      margin: 0 85px;
    }

    &>div {
      &>div:nth-child(1) {
        display: flex;
        justify-content: center;
      }

      &>div:nth-child(2) {
        margin: 18px auto 4px;
        color: #57B2F3;
        text-align: center;
        font-family: Noto Sans TC;
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        text-wrap: nowrap;
      }

      &>div:nth-child(3) {
        max-width: 304px;
        color: #79828D;
        font-family: Noto Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
      }
    }
  }

  .mbShow {
    display: none;
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
  .merit {
    margin-top: 68px;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #fff;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 3px;
  }

  .merit_content {
    display: flex;
    overflow-x: auto;
    margin-top: 31px;
    padding: 0 10px;

    &>div {
      &>div:nth-child(1) {
        width: 42.1333vw;

        &>img {
          width: 100%;
        }
      }

      &>div:nth-child(2) {
        color: #57B2F3;
        text-align: center;
        font-family: Noto Sans TC;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        margin-top: 8px;
      }

      &>div:nth-child(3) {
        color: #79828D;
        font-family: Noto Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
      }
    }

    &>div:nth-child(2) {
      margin: 0 20px;
    }
  }

  ::v-deep .new-btn {
    .serve_btn {
      margin: 40px auto 60px;
    }
    .img_absolute {
      right: 10% !important;
      top: -136% !important;
      z-index: 20 !important;
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
}</style>