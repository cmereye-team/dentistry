<template>
  <div class="step-condition-attention">
    <div class="step main-container">
      <div class="why_significance isArrowQuestion">杜牙根是如何進行的？</div>
      <div>
        <div v-for="item in stepList" :key="item.id">
          <div class="pcShow">{{ item.id }}</div>
          <div class="mbShow mbLink"><img :src="item.mbLink" alt=""></div>
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
      <div>
        治療步驟會根據每位客人的具體情況作<br class="mbShow /">適當調整，療程時間也會有所不同。<br />進行杜牙根前，<br class="mbShow /">建議尋求牙醫進行詳細的諮詢，<br
          class="mbShow /">並度身訂造最合適的治療方案。
      </div>
    </div>
    <div class="condition">
      <div class="main-container condition-box">
        <div class="why_significance isArrowQuestion">什麼情況下需要杜牙根？</div>
        <div class="pcShow">
          <div>
            <div><img src="https://static.cmereye.com/imgs/2023/12/60d8d8e72c0d21b0.png" alt=""></div>
            <div>可逆性牙髓炎</div>
            <div>琺瑯質及象牙質外部受損</div>
          </div>
          <div>
            <div><img src="https://static.cmereye.com/imgs/2023/12/446a4e63e3168151.png" alt=""></div>
            <div>不可逆性的牙髓炎</div>
            <div>象牙質內部及神經線受損</div>
          </div>
          <div>
            <div><img src="https://static.cmereye.com/imgs/2023/12/4506dfcca51edac6.png" alt=""></div>
            <div>根尖牙周炎</div>
            <div>細菌侵蝕至牙髓，引起內部組織發炎、感染，導致細胞壞死或化膿等問題。</div>
          </div>
        </div>
        <div class="mbShow mb-condition">
          <div>
            <div><img src="https://static.cmereye.com/imgs/2023/12/418a41271387b968.png" alt=""></div>
            <div>可逆性牙髓炎</div>
            <div>琺瑯質及象牙質外部受損</div>
          </div>
          <div>
            <div><img src="https://static.cmereye.com/imgs/2023/12/ce66874132e92d35.png" alt=""></div>
            <div>不可逆性的牙髓炎</div>
            <div>象牙質內部及神經線受損</div>
          </div>
          <div>
            <div><img src="https://static.cmereye.com/imgs/2023/12/20c8fcf9d2e92eb3.png" alt=""></div>
            <div>根尖牙周炎</div>
            <div>細菌侵蝕至牙髓，引起內部組織發炎、<br />感染，導致細胞壞死或化膿等問題。</div>
          </div>
        </div>
        <div class="condition-text">
          若牙髓持續遭受感染，未加以治療，<br class="mbShow" />根管鈣化會逐漸惡化，使受感染或壞死<br class="mbShow" />的牙髓組織難<br
            class="pcShow" />以徹底清除，導致細菌<br class="mbShow" />繼續繁殖，造成感染擴散至形成牙瘡。
        </div>
        <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize" :mb="mb"
          :paddingSizeMb="paddingSizeMb" />
      </div>
    </div>
    <div class="attention main-container">
      <div class="why_significance isArrowQuestion">杜牙根後要注意什麼？</div>
      <div>
        <div v-for="(item, index) in attentionList" :key="index">
          <div><img :src="item.imgSrc" alt=""></div>
          <div>{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newBtn from '@/components/common/new-btn.vue';
export default {
  name: 'step-condition-attention',
  components: {
    newBtn
  },
  data() {
    return {
      linkHref: 'https://api.whatsapp.com/send?phone=85295128192',
      linkText: '立即預約及諮詢',
      isShowSvg: false,
      mb: '',
      paddingSize: '10px 100px',
      paddingSizeMb: '6px 74px',
      newSvg: 'https://static.cmereye.com/imgs/2023/12/ff870ed05ae5440d.png',
      stepList: [
        {
          id: 1,
          title: '精確診斷',
          mbLink: 'https://static.cmereye.com/imgs/2023/12/779289004a2dc385.png'
        },
        {
          id: 2,
          title: '局部麻醉',
          mbLink: 'https://static.cmereye.com/imgs/2023/12/cc37d29b318c00b6.png'
        },
        {
          id: 3,
          title: '打開牙髓腔',
          mbLink: 'https://static.cmereye.com/imgs/2023/12/7fcf92c3e62095c0.png'
        },
        {
          id: 4,
          title: '清潔牙髓和根管',
          mbLink: 'https://static.cmereye.com/imgs/2023/12/83564b132e80b07f.png'
        },
        {
          id: 5,
          title: '填充根管',
          mbLink: 'https://static.cmereye.com/imgs/2023/12/8356d77dc6c08847.png'
        },
        {
          id: 6,
          title: '裝上人工牙套',
          mbLink: 'https://static.cmereye.com/imgs/2023/12/7f8953d27947244e.png'
        },
        {
          id: 7,
          title: '定期覆診',
          mbLink: 'https://static.cmereye.com/imgs/2023/12/a9d55e4656007257.png'
        },
      ],
      attentionList: [
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/d7eccec962e22b96.png',
          text: '注意口腔清潔'
        },
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/3f5becf27a40c2b8.png',
          text: '按時服用藥物'
        },
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/d27481b6ddba0ab1.png',
          text: '避免劇烈運動'
        },
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/2d5283c8b60c8ea7.png',
          text: '定期覆診檢查'
        },
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/281de148c2badc67.png',
          text: '忌吃堅硬食物'
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

  .step {
    margin: 90px auto 82px;
    display: flex;
    flex-direction: column;
    align-items: center;


    &>div:nth-child(2) {
      margin: 80px auto 50px;
      display: flex;
      justify-content: center;

      &>div {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin: 0 29px;

        &>div:nth-child(1) {
          width: 31.021px;
          height: 31.021px;
          border-radius: 50%;
          background: #57B2F3;
          display: flex;
          justify-content: center;
          align-items: center;
          letter-spacing: 0;
          color: #FFF;
          font-family: Yuanti TC;
          font-size: 19.709px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%;
          /* 31.534px */
          // letter-spacing: 4.927px;
        }

        &>div:nth-child(2) {
          margin-top: 5px;
          color: #57B2F3;
          font-family: Noto Sans;
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%;
        }

        &>div:nth-child(3) {
          margin-top: 15px;
          color: #57B2F3;
          text-align: center;
          font-family: Noto Sans;
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%;
        }
      }

      &>div::after {
        content: '';
        background: url(https://static.cmereye.com/imgs/2023/12/bda1191d9b154ba8.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 11px;
        height: 18px;
        display: inline-block;
        position: absolute;
        right: -25%;
        top: 50%;
        transform: translateY(-50%);
      }

      &>div:last-child::after {
        content: none;
      }
    }

    &>div:nth-child(3) {
      color: #79828D;
      text-align: center;
      font-family: Noto Sans;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.8px;
    }
  }

  .condition {
    background: #ECF7FC;
    padding: 90px 0;

    .condition-box {
      &>div:nth-child(2) {
        display: flex;
        justify-content: center;
        margin: 60px auto 34px;
        position: relative;

        &>div {
          position: relative;

          &>div:nth-child(1) {
            z-index: 5;
            position: relative;
          }

          &>div:nth-child(2) {
            margin: 12px auto 16px;
            color: #FFD333;
            text-align: center;
            font-family: Noto Sans;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 160%;
          }

          &>div:nth-child(3) {
            max-width: 170px;
            color: #79828D;
            font-family: Noto Sans;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
            margin: 0 auto;
          }
        }

        &>div::before {
          content: '';
          background-size: 100% 100%;
          display: inline-block;
          width: 109px;
          height: 59px;

          position: relative;
          left: 50%;
          transform: translateX(-50%);
          bottom: -10px;

          color: #FFF;
          text-align: center;
          font-family: Noto Sans;
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: 180%;
        }

        &>div:nth-child(1)::before {
          content: '輕度蛀牙';
          background: url('https://static.cmereye.com/imgs/2023/12/2a7910aaa6eb10b2.png');
          background-repeat: no-repeat;
        }

        &>div:nth-child(2)::before {
          content: '中度蛀牙';
          background: url('https://static.cmereye.com/imgs/2023/12/b247d013fe8de231.png');
          background-repeat: no-repeat;
        }

        &>div:nth-child(2) {
          margin: 0 41px;

          &>div:nth-child(2) {
            color: #FFA133;
          }
        }

        &>div:nth-child(3)::before {
          content: '嚴重蛀牙';
          background: url('https://static.cmereye.com/imgs/2023/12/622bf8f40a43e656.png');
          background-repeat: no-repeat;
        }

        &>div:nth-child(3) {
          &>div:nth-child(2) {
            color: #DB3C3C;
          }
        }
      }

      &>div:nth-child(2)::before {
        content: '';
        background: url(https://static.cmereye.com/imgs/2023/12/9048ddefccd8cfb0.png);
        background-repeat: no-repeat;
        width: 229px;
        height: 240px;
        position: absolute;
        bottom: 20%;
        right: 9%;
      }

      &>div:nth-child(2)::after {
        content: '';
        background: url('https://static.cmereye.com/imgs/2023/12/5fa5a88b7d743416.png');
        background-repeat: no-repeat;
        width: 229px;
        height: 240px;
        position: absolute;
        bottom: -8%;
        right: 9%;
      }

      &>div:nth-child(3) {
        margin: 0 auto;
        color: #79828D;
        font-family: Noto Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        text-align: center;
      }
    }
  }

  .condition-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #79828D;
    text-align: center;
    font-family: Noto Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.8px;
  }

  .attention {
    margin: 90px auto;

    &>div:nth-child(2) {
      margin-top: 60px;
      display: flex;
      flex-wrap: wrap;
      padding: 0 210px;

      &>div {
        width: calc(100% / 3);
        display: flex;
        flex-direction: column;
        align-items: center;

        &>div:nth-child(2) {
          margin: 7px;
          color: #79828D;
          text-align: center;
          font-family: Noto Sans TC;
          font-size: 25px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%;
        }
      }

      &>div:nth-child(4) {
        margin-left: 16%;
      }

      &>div:nth-child(4),
      &>div:nth-child(5) {
        margin-top: 42px;
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

  .step {
    margin: 61px 0;
    padding: 0 20px;

    &>div:nth-child(2) {
      &>div {
        margin: 53px auto 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 40px;
        background: #ECF7FC;
        width: 224px;
        height: 52px;
        position: relative;

        .mbLink {
          position: relative;
          bottom: 10px;
        }

        .title {
          color: #57B2F3;
          font-family: Noto Sans TC;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 1.6px;
        }
      }

      &>div::after {
        content: '';
        width: 88px;
        height: 88px;
        background: url(https://static.cmereye.com/imgs/2023/12/10f554174ebdca38.png);
        position: absolute;
        right: -45%;
        bottom: -90%;
      }

      &>div:last-child::after {
        content: none;
      }

      &>div:nth-child(even) {
        margin: 53px 0 0 auto;
      }

      &>div:nth-child(even)::after {
        content: none;
      }

      &>div:nth-child(even)::before {
        content: '';
        width: 88px;
        height: 88px;
        background: url(https://static.cmereye.com/imgs/2023/12/6806d56499252a0b.png);
        position: absolute;
        left: -45%;
        bottom: -90%;
      }
    }

    &>div:nth-child(3) {
      color: #79828D;
      text-align: center;
      font-family: Noto Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.6px;
      margin: 46px 0 0 0;
    }
  }

  .condition {
    background: #ECF7FC;

    .condition-box {
      padding: 61px 20px 20px;
    }

    .mb-condition {
      &>div {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 45px;

        &>div:nth-child(2) {
          margin: 20px;
          color: #FFD333;
          text-align: center;
          font-family: Noto Sans;
          font-size: 25px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%;
        }

        &>div:nth-child(3) {
          color: #79828D;
          text-align: center;
          font-family: Noto Sans;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%;
        }
      }

      &>div::before {
        background: url(https://static.cmereye.com/imgs/2023/12/cc30f521d467937c.png);
        content: '輕度蛀牙';
        width: 160px;
        height: 88px;
        background-size: 100% 100%;
        color: #FFF;
        text-align: center;
        font-family: Noto Sans;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
        padding-top: 6px;
      }

      &>div:nth-child(2)::before {
        content: '中度蛀牙';
        background: url(https://static.cmereye.com/imgs/2023/12/95ba6accec1a551e.png);
      }

      &>div:nth-child(3)::before {
        content: '嚴重蛀牙';
        background: url(https://static.cmereye.com/imgs/2023/12/ed6ee133f20555e6.png);
      }

      &>div:nth-child(2) {
        &>div:nth-child(2) {
          color: #FFA133;
        }
      }

      &>div:nth-child(3) {
        &>div:nth-child(2) {
          color: #DB3C3C;
        }
      }
    }
  }

  .attention {
    margin: 61px 0;
    padding: 0 20px;

    &>div:nth-child(2) {
      margin-top: 42px;
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.25rem;
      gap: 1.25rem;
      justify-items: center;

      &>div {
        display: flex;
        flex-direction: column;
        align-items: center;

        &>div:nth-child(1) {
          width: 42.1333vw;

          &>img {
            width: 100%;
          }
        }

        &>div:nth-child(2) {
          margin-top: 8px;
          color: #79828D;
          text-align: center;
          font-family: Noto Sans TC;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%;
        }
      }
    }
  }

  .condition-text {
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