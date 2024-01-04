<template>
  <div class="main-container process">
    <div class="why_significance">隱形矯正過程</div>
    <div class="step_container">
      <div v-for="item in stepList" :key="item.id">
        <div><span v-if="pcOrMb == 'pc'">{{ item.id }}</span><img v-else :src="item.numberImg" alt="numberImg"></div>
        <div><img :src="pcOrMb == 'pc' ? item.img : item.imgMb" alt=""></div>
        <div>{{ item.title }}</div>
        <div>{{ item.text }}</div>
      </div>
    </div>
    <div class="explain">
      療程時間和程序因個人牙齒狀況而異，<br class="mbShow" />建議於療程前先諮詢<br class="pcShow" />牙醫的意見，<br class="mbShow" />以了解個人需求。
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
      paddingSize: '2.6667vw 23.4667vw',
      paddingSizeMb: '6px 64px',
      newSvg: 'https://static.cmereye.com/imgs/2023/12/ff870ed05ae5440d.png',
      pcOrMb: 'pc',
      stepList: [
        {
          id: 1,
          numberImg: 'https://static.cmereye.com/imgs/2024/01/779289004a2dc385.png',
          img: 'https://static.cmereye.com/imgs/2023/12/e3b9fc6572dd0838.png',
          imgMb: 'https://static.cmereye.com/imgs/2024/01/d03f10ffeaa52e89.png',
          title: '初步評估',
          text: '與牙醫溝通後，會先為客人進行全面口腔檢查及拍攝X-Ray，以蒐集數位資料，評估牙齒狀況和咬合問題。'
        },
        {
          id: 2,
          numberImg: 'https://static.cmereye.com/imgs/2024/01/cc37d29b318c00b6.png',
          img: 'https://static.cmereye.com/imgs/2023/12/d010ce4fdd286563.png',
          imgMb: 'https://static.cmereye.com/imgs/2024/01/b3389e43f30c4dd1.png',
          title: '定制方案',
          text: '根據客人的口腔檢查結果及矯正需求，度身訂造個人化治療方案。'
        },
        {
          id: 3,
          numberImg: 'https://static.cmereye.com/imgs/2024/01/7fcf92c3e62095c0.png',
          img: 'https://static.cmereye.com/imgs/2023/12/744ce5da24cd1d40.png',
          imgMb: 'https://static.cmereye.com/imgs/2024/01/70039243489f813e.png',
          title: '牙箍製作',
          text: '廠商利用3D電腦雷射列印技術製成一系列隱形牙箍，並寄送至牙科診所。'
        },
        {
          id: 4,
          numberImg: 'https://static.cmereye.com/imgs/2024/01/83564b132e80b07f.png',
          img: 'https://static.cmereye.com/imgs/2023/12/4a5579003d8b2543.png',
          imgMb: 'https://static.cmereye.com/imgs/2024/01/2a5d5f60ab7a51ad.png',
          title: '配戴指導',
          text: '會聯絡並安排客人到診進行試戴並評估效果。'
        },
        {
          id: 5,
          numberImg: 'https://static.cmereye.com/imgs/2024/01/bac25c739a750e57.png',
          img: 'https://static.cmereye.com/imgs/2023/12/32e6ecc0d9c4355b.png',
          imgMb: 'https://static.cmereye.com/imgs/2024/01/ba9e3c1105de4b36.png',
          title: '定期追蹤',
          text: '客人需定期覆診，與牙醫跟進療程進度及領取新牙箍。'
        },
      ]
    }
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
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .process {
    margin: 109px auto 102px;
  }

  .step_container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 64px;

    &>div {
      position: relative;

      &>div:nth-child(1) {
        width: 31px;
        height: 31px;
        border-radius: 50%;
        background: #57B2F3;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        color: #FFF;
        font-family: Yuanti TC;
        font-size: 19.709px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        text-align: center;
      }

      &>div:nth-child(2) {
        margin-top: 41px;
        margin-bottom: 20px;
      }

      &>div:nth-child(3) {
        color: #57B2F3;
        text-align: center;
        font-family: Noto Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
      }

      &>div:nth-child(4) {
        width: 185px;
        padding-left: 15px;
        color: #79828D;
        font-family: Noto Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
      }
    }

    &>div::after {
      position: absolute;
      content: '';
      background: url('https://static.cmereye.com/imgs/2023/12/53d15266339f38c5.png');
      display: inline-block;
      width: 11px;
      height: 18px;
      right: -25%;
      top: 0;
    }

    &>div:last-child:after {
      content: none;
    }
  }

  .explain {
    margin-top: 20px;
    color: #79828D;
    text-align: center;
    font-family: Noto Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.8px;
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
  .process {
    padding: 0 20px;
  }

  .step_container {
    margin-top: 45px;

    &>div {
      max-width: 224px;
      border-radius: 40px;
      background: #ECF7FC;
      padding: 11px 12px 20px;
      position: relative;

      &>div:nth-child(1) {
        position: absolute;
        top: 28%;
      }

      &>div:nth-child(3) {
        color: #57B2F3;
        font-family: Noto Sans TC;
        font-size: 22px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        letter-spacing: 2.2px;
        padding-left: 70px;
        margin: 10px 0;
      }

      &>div:nth-child(4) {
        padding-left: 70px;
        color: #79828D;
        font-family: Noto Sans TC;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.6px;
      }
    }

    &>div::after {
      content: '';
      background: url(https://static.cmereye.com/imgs/2024/01/10f554174ebdca38.png);
      background-size: 100% 100%;
      display: inline-block;
      width: 88px;
      height: 88px;
      position: absolute;
      right: -35%;
      top: 85%;
      z-index: 9;
    }

    &>div:nth-child(even) {
      margin: 1.5625rem 0 1.5625rem auto;
    }

    &>div:nth-child(even)::after {
      content: '';
      background: url(https://static.cmereye.com/imgs/2024/01/6806d56499252a0b.png);
      background-size: 100% 100%;
      display: inline-block;
      width: 88px;
      height: 88px;
      position: absolute;
      left: -35%;
      top: 85%;
      z-index: 9;
    }

    &>div:last-child:after {
      content: none;
    }
  }

  .explain {
    margin-top: 45px;
    color: #79828D;
    text-align: center;
    font-family: Noto Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.6px;
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