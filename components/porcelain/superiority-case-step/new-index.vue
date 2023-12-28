<template>
  <div class="superiority-case-step">
    <div class="superiority main-container">
      <div class="why_significance">全瓷貼片五大優勢</div>
      <div>
        <div>
          <img src="https://static.cmereye.com/imgs/2023/12/b6273252e09a8aeb.png" alt="">
        </div>
        <div>
          <div v-for="(item, index) in superiorityList" :key="index">
            <div>{{ item.title }}</div>
            <div v-html="item.content"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="case">
      <div class="main-container">
        <div class="why_significance">成功案例</div>
        <div>
          <div><img src="https://static.cmereye.com/imgs/2023/12/ea682545477e1c94.png" alt=""></div>
          <div><img src="https://static.cmereye.com/imgs/2023/12/8833b2b27a0b090c.png" alt=""></div>
        </div>
      </div>
    </div>
    <div class="main-container step">
      <div class="why_significance">全瓷貼片五步曲</div>
      <div>
        <div v-for="item in stepList" :key="item.id">
          <div class="pcShow">{{ item.id }}</div>
          <div>
            <img :src="item.mb == true ? item.imgSrcMb : item.imgSrc" alt="">
          </div>
          <div>{{ item.title }}</div>
          <div>{{ item.content }}</div>
        </div>
      </div>
      <div>
        療程時間和程序因個人牙齒狀況而異，<br class="mbShow" />建議於療程前先諮詢<br class="pcShow" />牙醫的意見，<br class="mbShow" />以了解個人需求。
      </div>
      <div>
        <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize" :mb="mb"
          :paddingSizeMb="paddingSizeMb" :newSvg="newSvg"  :maxNum="4400" :minNum="3210" />
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
  name: 'superiority-case-step',
  data() {
    return {
      linkHref: 'https://api.whatsapp.com/send?phone=85295128192',
      linkText: '立即預約及諮詢',
      isShowSvg: false,
      mb: '',
      paddingSize: '10px 88px',
      paddingSizeMb: '6px 74px',
      newSvg: 'https://static.cmereye.com/imgs/2023/12/ff870ed05ae5440d.png',
      superiorityList: [
        {
          title: '即日定制',
          content: `利用電腦斷層掃描技術，全方位瞭解<br class=mbShow />牙齒狀況，讓瓷貼片更符合其需求，<br class=mbShow />當日可完成磨牙和裝貼步驟`
        },
        {
          title: '知名物料',
          content: `採用德國進口CEREC Tessera™<br class=mbShow />物料，獲ISO優質認證`
        },
        {
          title: '自然仿真',
          content: `有多色選擇，光澤通透，近似<br class=mbShow />真牙，以配合美齒期望`
        },
        {
          title: '堅固耐用',
          content: `瓷貼片堅硬度及耐用度，如保養<br class=mbShow />得宜，壽命可長達10年或以上`
        },
        {
          title: '專屬微笑線設計',
          content: `引用先進技術，創造獨一無二的<br class=mbShow />微笑曲線，符合黃金比例美學，<br class=mbShow />無阻展現自信笑容`
        }
      ],
      stepList: [
        {
          id: 1,
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/142749bf037eee93.png',
          imgSrcMb: 'https://static.cmereye.com/imgs/2023/12/f94f08ae0f2b5642.png',
          mb: true,
          title: '術前諮詢',
          content: '檢查客人的口腔健康狀況，確保牙齒和牙周健康，塑造符合客人期望的牙齒形狀及顏色。'
        },
        {
          id: 2,
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/ff783fb4971ca5bc.png',
          imgSrcMb: 'https://static.cmereye.com/imgs/2023/12/d061903ef5c3cb27.png',
          mb: true,
          title: '打磨牙面',
          content: '輕輕磨去牙齒表面的琺瑯質。'
        },
        {
          id: 3,
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/f2eced45c3943a76.png',
          imgSrcMb: 'https://static.cmereye.com/imgs/2023/12/a536a3c4581c1012.png',
          mb: true,
          title: '印製牙模及拍攝X-Ray',
          content: '印製牙模，以度身設計及訂製專屬瓷牙貼片。'
        },
        {
          id: 4,
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/323c625a547644dc.png',
          imgSrcMb: 'https://static.cmereye.com/imgs/2023/12/3688adf22cca6024.png',
          mb: true,
          title: '裝配貼片',
          content: '把牙貼片黏附在牙齒外側面，檢查黏合程度和顏色。'
        },
        {
          id: 5,
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/32e6ecc0d9c4355b.png',
          imgSrcMb: 'https://static.cmereye.com/imgs/2023/12/4df5d4f93e52388d.png',
          mb: true,
          title: '定期追蹤',
          content: '裝上貼片後，需如真牙般對待。為確保其最佳狀態，建議按照牙醫的指示，定期覆診檢查及保養，以延長貼片壽命。'
        },
      ]
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
  .mbShow {
    display: none;
  }

  ::v-deep .mbShow {
    display: none;
  }

  .superiority-case-step {
    margin-top: 109px;
  }

  .superiority {
    &>div:nth-child(2) {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      margin-bottom: 102px;

      &>div:nth-child(1) {
        display: flex;
        justify-content: flex-end;
        align-items: center;

      }

      &>div:nth-child(2) {
        padding-left: 70px;

        &>div {
          max-width: 310px;
          margin-top: 40px;

          &>div:nth-child(1) {
            color: #57B2F3;
            font-family: Noto Sans;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 1.44px;
            padding-bottom: 5px;
            border-bottom: 1px solid #EBEBEB;
            position: relative;
          }

          &>div:nth-child(1)::before {
            content: '';
            display: inline-block;
            width: 30px;
            height: 1px;
            position: absolute;
            bottom: -1px;
            background: #299DF0;
          }

          &>div:nth-child(2) {
            margin-top: 12px;
            color: #79828D;
            font-family: Noto Sans;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 1.44px;
          }
        }

        &>div:first-child {
          margin-top: 0;
        }

        &>div:nth-child(even) {
          &>div:nth-child(1) {
            color: #FFB7B7;
          }

          &>div:nth-child(1)::before {
            background: #FF8585;
          }
        }
      }
    }
  }

  .case {
    background: #ECF7FC;
    padding: 109px 0;

    &>div {
      &>div:nth-child(2) {
        margin-top: 67px;
        display: flex;
        justify-content: center;

        &>div {
          margin: 0 28px;
        }
      }
    }
  }

  .step {
    margin-top: 158px;

    &>div:nth-child(2) {
      display: flex;
      justify-content: center;
      margin-top: 55px;

      &>div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 24px;

        &>div:nth-child(1) {
          border-radius: 50%;
          background: #57B2F3;
          width: 31px;
          height: 31px;
          color: #FFF;
          font-family: Yuanti TC;
          font-size: 19.709px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%;
          letter-spacing: 0;
          text-align: center;
        }

        &>div:nth-child(2) {
          margin-top: 41px;
          margin-bottom: 19px;
        }

        &>div:nth-child(3) {
          color: #57B2F3;
          text-align: center;
          font-family: Noto Sans;
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%;
          letter-spacing: 0;
        }

        &>div:nth-child(4) {
          margin-top: 11px;
          max-width: 141px;
          color: #79828D;
          font-family: Noto Sans;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%;
        }
      }
    }

    &>div:nth-child(3) {
      margin-top: 20px;
      color: #79828D;
      text-align: center;
      font-family: Noto Sans;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.8px;
    }
  }

  ::v-deep .serve_btn {
    margin-top: 82px;
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

  ::v-deep .img_absolute {
    right: 18% !important;
  }

  .superiority {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        width: 298px;
        margin: 45px auto 0;

        &>img {
          width: 100%;
        }
      }

      &>div:nth-child(2) {
        &>div {
          margin-top: 35px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 26px;

          &>div:nth-child(1) {
            color: #57B2F3;
            font-family: Noto Sans TC;
            font-size: 25px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            letter-spacing: 2.5px;
            padding-bottom: 6px;
            position: relative;
          }

          &>div:nth-child(1)::after {
            content: '';
            position: absolute;
            bottom: 0;
            display: inline-block;
            width: 100%;
            height: 2px;
            background: #57B2F3;
            max-width: 108px;
            left: 50%;
            transform: translateX(-50%);
          }

          &>div:nth-child(2) {
            margin-top: 24px;
            color: #79828D;
            text-align: center;
            font-family: Noto Sans TC;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 3.36px;
          }
        }

        &>div:nth-child(even) {
          &>div:nth-child(1) {
            color: #FFB7B7;
          }

          &>div:nth-child(1)::after {
            background: #FF8585;
          }
        }
      }
    }
  }

  .case {
    margin-top: 61px;
    padding: 61px 20px 61px 20px;
    background: #ECF7FC;

    &>div {
      &>div:nth-child(2) {
        margin-top: 67px;

        &>div {
          width: 328px;
          margin: 0 auto;

          &>img {
            width: 100%;
          }
        }

        &>div:nth-child(1) {
          margin-bottom: 107px;
        }
      }
    }
  }

  .step {
    margin-top: 61px;

    &>div:nth-child(2) {
      margin-top: 42px;
      padding: 0 20px;

      &>div {
        max-width: 224px;
        border-radius: 40px;
        background: #ECF7FC;
        position: relative;
        padding: 12px 11px 20px 11px;
        margin-top: 25px;

        &>div:nth-child(1) {
          position: absolute;
        }


        &>div:nth-child(3) {
          margin-top: 10px;
          width: fit-content;
          color: #57B2F3;
          font-family: Noto Sans TC;
          font-size: 22px;
          font-style: normal;
          font-weight: 800;
          line-height: normal;
          letter-spacing: 2.2px;
          padding-left: 58px;
        }

        &>div:nth-child(4) {
          margin-top: 10px;
          padding-left: 58px;
          max-width: 190px;
          color: #79828D;
          font-family: Noto Sans TC;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 1.6px;
        }
      }

      &>div::before {
        content: '';
        background: url(https://static.cmereye.com/imgs/2023/12/e74918e36d4f141e.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 64px;
        height: 105px;
        display: inline-block;
        position: absolute;
        top: 110px;
      }

      &>div:nth-child(2):before {
        background: url(https://static.cmereye.com/imgs/2023/12/a13126283f834d42.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }

      &>div:nth-child(3):before {
        background: url(https://static.cmereye.com/imgs/2023/12/d0e5bd5766ea5979.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }

      &>div:nth-child(4):before {
        background: url(https://static.cmereye.com/imgs/2023/12/fb09b008582ddc42.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }

      &>div:nth-child(5):before {
        background: url(https://static.cmereye.com/imgs/2023/12/bac25c739a750e57.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }

      &>div::after {
        content: '';
        background: url(https://static.cmereye.com/imgs/2023/12/10f554174ebdca38.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: inline-block;
        position: absolute;
        right: 0;
        width: 88px;
        height: 88px;
        z-index: 10;
        right: -75px;
        bottom: -35px;
      }

      &>div:nth-child(5):after {
        content: none;
      }

      &>div:nth-child(even) {
        margin: 0 0 0 auto;
        margin-top: 25px;
      }

      &>div:nth-child(even)::after {
        content: '';
        background: url(https://static.cmereye.com/imgs/2023/12/10f554174ebdca38.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: inline-block;
        position: absolute;
        left: -75px;
        width: 88px;
        height: 88px;
        bottom: -35px;
        transform: rotate(-90deg);
      }

      &>div:nth-child(1) {
        margin-top: 0;
      }
    }

    &>div:nth-child(3) {
      text-align: center;
      margin-top: 45px;
      color: #79828D;
      text-align: center;
      font-family: Noto Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.6px;
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