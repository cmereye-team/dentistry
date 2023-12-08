<template>
  <div class="step comContent section">
    <div class="meun main-container pcShow">
      <p><nuxt-link style="color: #000; text-decoration: none;" to="/">首頁</nuxt-link></p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙科服務</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">洗牙</p>
    </div>
    <div class="tootWash_head">
      <div class="habit main-container">
        <div>
          <span>?</span>
        </div>
        <div>
          <div>您有定期洗牙的習慣嗎？</div>
          <div>
            <div>
              <div>
                <img
                  src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/just-that-one--02-1.7a9xdgdl9lc0.png"
                  alt="洗牙頻次">
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/20231205_洗牙page-websigte-elements-1.78wp0s35fvc0.png"
                  alt="每半年 一次">
              </div>
              <div>
                <span>每半年</span><span>一次</span>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/20231205_洗牙page-websigte-elements-2.8gnx1mmudh0.png"
                  alt="半年至一年 一次">
              </div>
              <div><span>半年至一年</span><span>一次</span></div>
            </div>
            <div>
              <div>
                <img
                  src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/20231205_洗牙psage-websigte-elements-03-1.mgi633wlfhs.png"
                  alt="一年或以上 一次">
              </div>
              <div><span>一年或以上</span><span>一次</span></div>
            </div>
            <div>
              <div>
                <img
                  src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/20231205_洗牙page-websigte-elements-4.5jfwvvbq3dk0.png"
                  alt="不定期 或甚少">
              </div>
              <div><span>不定期</span><span>或甚少</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="interval">
        <div class="this-background"></div>
        <div class="content main-container">
          <div>
            <div>提供洗牙和深層洗牙服務，定期洗牙有效清除牙齒上的牙菌膜、牙結石和牙漬，保持口腔衛生，預防牙周疾病或其他口腔問題。 </div>
            <div>牙醫正常建議<span>每半年至一年</span>洗牙一次。 </div>
            <div class="pcShow">若患有牙周病、吸煙、佩戴假牙、或正接受矯齒人士， 則建議<span>每三個月至半年</span>洗牙一次。</div>
            <div class="mbShow mb_style"><span>若患有牙周病、吸煙、佩戴假牙、或正</span><span>接受矯齒人士， 則建議</span><span>每三個月至半年</span>洗牙一次。
            </div>
          </div>
          <div>
            <img
              src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Rectangle-442.2iftsgt3xf00.png"
              alt="">
          </div>
        </div>
      </div>
      <a href="https://api.whatsapp.com/send?phone=85295128192" target="_blank" class="toothWash">
        <div>
          立即預約洗牙
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,   // 当前点击的tab的索引
    }
  },
  computed: {
  },
  methods: {
    handleClick(index) {
      this.currentIndex = index
    }
  }
}

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Edu+TAS+Beginner:wght@500&family=Fredoka:wght@700&display=swap');
//pc
@media only screen and (min-width: 768px) {
  .mbShow {
    display: none;
  }

  .meun {
    display: flex;
    font-size: 16px;
    margin-top: 47px;
  }

  .tootWash_head {
    margin-top: 130px;
  }

  .habit {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1440px;
    width: 945px;
    margin: auto;

    &>div:nth-child(1) {
      width: 150px;
      height: 75px;
      border-radius: 75px 75px 0 0;
      background: #ECF7FC;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      &>span {
        color: #57B2F3;
        text-align: center;
        font-family: Fredoka;
        font-size: 128.164px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 12.816px;
        position: relative;
        top: -15px;
      }

      &>span::before {
        content: '';
        width: 30px;
        height: 30px;
        display: inline-block;
        position: absolute;
        bottom: 16%;
        left: -87%;
        border-radius: 0 0 30px 0;
        background: #fff;
      }

      &>span::after {
        content: '';
        width: 30px;
        height: 30px;
        display: inline-block;
        position: absolute;
        bottom: 16%;
        right: -87%;
        border-radius: 0 0 0 30px;
        background: #fff;
        z-index: 5;
      }
    }

    &>div:nth-child(1)::before {
      content: '';
      width: 30px;
      height: 30px;
      border-radius: 0 0 0 0;
      position: absolute;
      background: #ECF7FC;
      bottom: -10%;
      left: -10%;
    }

    &>div:nth-child(1)::after {
      content: '';
      width: 30px;
      height: 30px;
      border-radius: 0 0 0 0;
      position: absolute;
      background: #ECF7FC;
      bottom: -10%;
      right: -10%;
    }

    &>div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 22px 60px;
      border-radius: 25px;
      background: #ECF7FC;
      position: relative;

      &>div:nth-child(1) {
        color: #79828D;
        text-align: center;
        font-family: Noto Sans;
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 2.5px;
        margin-bottom: 13px;
      }

      &>div:nth-child(2) {
        display: flex;
        align-items: flex-start;
        width: 100%;

        &>div {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;

          &>div:nth-child(1) {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          &>div:nth-child(2) {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      }

      &>div:nth-child(even) {
        margin: 0 40px;
      }
    }

    &>div:nth-child(2)::before {
      content: '1';
      color: #57B2F3;
      text-align: center;
      font-family: Fredoka;
      font-size: 75px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 7.5px;
      position: absolute;
      right: 18%;
      top: -5%;
    }
  }

  .interval {
    width: 100%;
    position: relative;
    margin-top: 90px;

    &>div:nth-child(1) {
      background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Rectangle-311.15kdh026peow.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: 50%;
      height: 305px;
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 1;
      bottom: -72px;
    }

    .content {
      display: flex;
      position: relative;
      z-index: 10;

      &>div {
        flex: 1;
      }

      &>div:nth-child(1) {
        color: #79828D;
        font-family: Noto Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.8px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-left: 120px;

        &>div {
          max-width: 476px;
        }

        &>div:nth-child(2) {
          margin: 32px 0 28px;
        }

        span {
          color: #57B2F3;
          font-size: 25px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }
      }

      &>div:nth-child(2) {
        display: flex;
        justify-content: center;
      }
    }
  }

  .toothWash {
    max-width: 1440px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 140px auto 90px;
    width: fit-content;
    text-decoration: none;

    &>div {
      width: fit-content;
      background: #FFD333;
      color: #FFF;
      font-family: Noto Sans;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.92px;
      padding: 10px 101px;
      border-radius: 100px;
      position: relative;
    }
  }

  .toothWash {
    &>div::before {
      content: '';
      background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Layer_11.67atc8403ts0.png');
      background-repeat: no-repeat;
      width: 80px;
      height: 70px;
      display: inline-block;
      position: absolute;
      top: -100%;
      right: 13%;
    }
  }
}

// mb
@media only screen and (max-width: 767px) {
  .pcShow {
    display: none;
  }

  .step {
    margin-top: 100px;
  }

  .habit {
    background: url(https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/2Vector.2xk1dcahcmm0.png);
    background-repeat: no-repeat;
    max-width: 100%;
    height: 12.875rem;
    background-size: 100% 100%;
    margin: 0 1.25rem 3.75rem;

    &>div:nth-child(1) {
      color: #57B2F3;
      text-align: center;
      font-family: Fredoka;
      font-size: 4.423rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: .4423rem;

      &>span {
        position: relative;
        top: -1.875rem;
      }
    }

    &>div:nth-child(2) {
      &>div:nth-child(1) {
        color: #79828D;
        text-align: center;
        font-family: Noto Sans;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: .1rem;
        margin-top: -1.25rem;
      }

      &>div:nth-child(2) {
        display: flex;
        justify-content: space-evenly;
        margin-top: 1rem;

        &>div {
          &>div:nth-child(1) {
            width: 3.4375rem;

            img {
              width: 100%;
            }
          }

          &>div:nth-child(2) {
            color: #79828D;
            text-align: center;
            font-family: Noto Sans TC;
            font-size: .6647rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: .06643rem;

            &>span {
              display: flex;
              flex-direction: column;
            }
          }
        }
      }
    }
  }

  .interval {
    width: 100%;
    position: relative;
    margin-top: 90px;

    &>div:nth-child(1) {
      background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Rectangle-312.3q02akq228o0.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: 100%;
      height: 195px;
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 1;
      bottom: 52%;
    }

    .content {
      display: flex;
      flex-direction: column-reverse;

      &>div:nth-child(1) {
        margin-top: 55px;
        color: #79828D;
        font-family: Noto Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.6px;

        &>div:nth-child(1) {
          padding: 0 60px;
        }

        &>div:nth-child(2) {
          padding: 30px 60px;

          &>span {
            color: #57B2F3;
            font-size: 22px;
            font-weight: 700;
            letter-spacing: 3.3px;
          }
        }

        .mb_style {
          padding: 0 60px;

          &>span {
            color: #79828D;
            font-family: Noto Sans;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: -0.32px;
          }

          &>span:nth-child(3) {
            color: #57B2F3;
            font-family: Noto Sans;
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 2.2px;
          }
        }
      }

      &>div:nth-child(2) {
        display: flex;
        justify-content: flex-end;
        position: relative;
        z-index: 10;

        &>img {
          width: 80%;
        }
      }
    }
  }
  .toothWash {
    max-width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 60px auto;
    width: fit-content;
    text-decoration: none;
    position: relative;

    &>div{
      color: #FFF;
      font-family: Noto Sans;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.44px;
      background:#FFD333;
      padding: 8px 76px;
      width: fit-content;
      border-radius: 100px;
      margin: auto;
    }
  }
  .toothWash {
    &>div::before {
      content: '';
      background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Layer_11.67atc8403ts0.png');
      background-repeat: no-repeat;
      width: 70px;
      height: 60px;
      display: inline-block;
      position: absolute;
      top: -120%;
      right: 12%;
    }
  }
}
</style>
