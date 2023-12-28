<template>
  <div class="agomphiasis main-container">
    <div class="style_pc_bg">
      <div>
        <img src="https://static.cmereye.com/imgs/2023/12/692cc8fd9a65388d.png" alt="">
      </div>
      <div>缺牙年輕化！</div>
      <div>
        <div>
          <div>缺牙並非只出現在老年人身上，從統計可見， 現在<span>25到39歲的年輕族群， </span><br class="pcShow" />近半數已有缺牙的困擾。</div>
        </div>
        <div>
          <img src="https://static.cmereye.com/imgs/2023/12/82f54d4e7b6106ed.png" alt="">
        </div>
      </div>
    </div>
    <div class="merit">
      <div class="why_significance">植牙的四大好處</div>
      <div>
        <div>
          <img src="https://static.cmereye.com/imgs/2023/12/3a54f2f872105ab2.png" alt="植牙的四大好處">
        </div>
        <div>
          <div>
            <div>美觀耐用</div>
            <div>仿如真牙，短時間內重現燦爛笑容，植體壽命可長達10至20年</div>
          </div>
          <div>
            <div>無礙飲食</div>
            <div>如常咀嚼，盡情享受美食</div>
          </div>
          <div>
            <div>保護鄰牙</div>
            <div>不怕磨損鄰牙，維持口腔健康</div>
          </div>
          <div>
            <div>維護骨質</div>
            <div>防止牙槽骨萎縮，<br class="mbShow" />維持穩健口腔結構</div>
          </div>
        </div>
      </div>
    </div>
    <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize" :mb="mb"
        :paddingSizeMb="paddingSizeMb" :maxNum="3357" :minNum="2155" />
  </div>
</template>

<script>
import newBtn from '@/components/common/new-btn.vue';
export default {
  components: {
    newBtn
  },
  name: 'agomphiasis',
  data() {
    return {
      linkHref: 'https://api.whatsapp.com/send?phone=85295128192',
      linkText: '立即預約諮詢',
      isShowSvg: false,
      mb:'',
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
@media screen and (min-width: 768px) {
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

  .style_pc_bg {
    background: url('https://static.cmereye.com/imgs/2023/12/583c57d14e64b9e0.png');
    background-repeat: no-repeat;
    width: 100%;
    height: 588px;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &>div:nth-child(1) {
      position: relative;
      top: -3%;
    }

    &>div:nth-child(2) {
      margin-top: 45px;
      color: #79828D;
      text-align: center;
      font-family: Noto Sans;
      font-size: 35px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 3.5px;
    }

    &>:last-child {
      display: flex;
      align-items: center;
      margin-top: 45px;

      &>div {
        flex: 1;
      }

      &>div:nth-child(1) {
        width: 100%;
        margin-right: 73px;

        &>div {
          max-width: 410px;
          color: #79828D;
          font-family: Noto Sans;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 1.8px;

          span {
            color: #57B2F3;
            font-family: Noto Sans;
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 2.5px;
          }
        }
      }

      &>div:nth-child(2) {
        display: flex;
        justify-content: center;
      }
    }
  }

  .merit {
    margin-top: 90px;

    &>div:nth-child(2) {
      display: flex;
      justify-content: center;
      margin-top: 55px;

      &>div {
        flex: 1;
        display: flex;
      }

      &>div:nth-child(1) {
        justify-content: flex-end;
        margin-right: 71px;
      }

      &>div:nth-child(2) {
        flex-direction: column;
        justify-content: space-between;
        width: 100%;

        &>div {
          max-width: 320px;

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
            width: 30px;
            height: 1px;
            background: #299DF0;
            display: inline-block;
            position: absolute;
            bottom: -1px;
          }

          &>div:nth-child(2) {
            padding-top: 12px;
            color: #79828D;
            font-family: Noto Sans;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 1.44px;
          }
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
}

@media screen and(max-width: 767px) {
  .pcShow {
    display: none!important;
  }
  .style_pc_bg {
    background: url('https://static.cmereye.com/imgs/2023/12/1c109050ec0e7db4.png');
    background-repeat: no-repeat;
    width: 100%;
    height: 490px;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &>div:nth-child(1) {
      width: 10px;
      position: relative;
      top: -8px;

      &>img {
        width: 100%;
      }
    }

    &>div:nth-child(2) {
      color: #79828D;
      text-align: center;
      font-family: Noto Sans;
      font-size: 25px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 2.5px;
      padding: 30px 0 35px;
    }

    &>div:nth-child(3) {
      color: #79828D;
      font-family: Noto Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.6px;

      &>div:nth-child(1) {
        padding: 0 38px;

        span {
          color: #57B2F3;
          font-family: Noto Sans;
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 1.8px;
        }
      }

      &>div:nth-child(2) {
        width: 298px;
        margin: 0 auto;
        margin-top: 25px;

        &>img {
          width: 100%;
        }
      }
    }
  }

  .merit {
    margin: 60px auto;

    &>div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 45px;

      &>div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 30px;


        &>div {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 35px;

          &>div:nth-child(1) {
            color: #57B2F3;
            font-family: Noto Sans TC;
            font-size: 25px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            letter-spacing: 2.5px;
            border-bottom: 1px solid #57B2F3;
            padding-bottom: 6px;
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
            border-bottom: 1px solid #FF8585;
          }
        }
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