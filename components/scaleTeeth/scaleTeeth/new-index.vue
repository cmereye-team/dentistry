<template>
  <div class="step comContent section">
    <div class="meun main-container pcShow">
      <p><nuxt-link style="color: #000; text-decoration: none;" to="/">首頁</nuxt-link></p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙科服務</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">洗牙</p>
    </div>
    <!-- <div class="main-container">
      <el-slider
        :class="[several == 25 ? 'sliderElement2' : '', several == 50 ? 'sliderElement3' : '', several == 75 ? 'sliderElement4' : '', several == 100 ? 'sliderElement5' : '']"
        @change="handleSliderChange" @input="handleSliderInput" :show-tooltip="false" v-model="value2" :step="25"
        show-stops>
      </el-slider>
    </div> -->
    <div class="tootWash_head">
      <div class="habit main-container">
        <div>
          <div>您有定期洗牙的習慣嗎？</div>
          <!-- <div>
            <div>
              <div>
                <img src="https://static.cmereye.com/imgs/2023/12/6ee295d9a8618fc5.png" alt="洗牙頻次">
              </div>
            </div>
            <div>
              <div>
                <img src="https://static.cmereye.com/imgs/2023/12/d9a7b9cf060fd37c.png" alt="每半年 一次">
              </div>
              <div>
                <span>每半年</span><span>一次</span>
              </div>
            </div>
            <div>
              <div>
                <img src="https://static.cmereye.com/imgs/2023/12/8417940214d1c693.png" alt="半年至一年 一次">
              </div>
              <div><span>半年至一年</span><span>一次</span></div>
            </div>
            <div>
              <div>
                <img src="https://static.cmereye.com/imgs/2023/12/c0ffaf5df39c49e7.png" alt="一年或以上 一次">
              </div>
              <div><span>一年或以上</span><span>一次</span></div>
            </div>
            <div>
              <div>
                <img src="https://static.cmereye.com/imgs/2023/12/d537ba02defb29c5.png" alt="不定期 或甚少">
              </div>
              <div><span>不定期</span><span>或甚少</span></div>
            </div>
          </div> -->
          <el-slider
            :class="[several == 25 ? 'sliderElement2' : '', several == 50 ? 'sliderElement3' : '', several == 75 ? 'sliderElement4' : '', several == 100 ? 'sliderElement5' : '']"
            @change="handleSliderChange" @input="handleSliderInput" :show-tooltip="false" v-model="value2" :step="25"
            show-stops>
          </el-slider>
          <div class="interval-text">
            <div></div>
            <div><span>每半年</span><span>一次</span></div>
            <div><span>半年至一年</span><span>一次</span></div>
            <div><span>一年或以上</span><span>一次</span></div>
            <div><span>不定期</span><span>或甚少</span></div>
          </div>
        </div>
      </div>
      <div class="interval" style="display:none;">
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
      <div class="new_circle main-container">
        <div></div>
        <div class="main-container">
          <div>
            <div>
              <div>提供洗牙和深層洗牙服務，定期洗牙有<br class="mbShow" />效清除牙齒上的<br class="pcShow" />牙菌膜、牙結石和牙<br
                  class="mbShow" />漬，保持口腔衛生，預防牙周疾病<br class="pcShow" />或其<br class="mbShow" />他口腔問題。
              </div>
              <div>牙醫正常建議<span>每半年至一年</span>洗牙<br class="mbShow" />一次。</div>
              <div class="pcShow">若患有牙周病、吸煙、佩戴假牙、或正接受矯齒人士，<br class="pcShow" />則建議<span>每三個月至半年</span>洗牙一次。</div>
              <div class="mbShow mb_style"><span>若患有牙周病、吸煙、佩戴假牙、或正接受</span><br class="mbShow" /><span>矯齒人士，
                  則建議</span><span>每三個月至半年</span><br class="mbShow" />洗牙一次。
              </div>
              <div class="new-btn">
                <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize"
                  :mb="mb" :paddingSizeMb="paddingSizeMb" :maxNum="1810" :minNum="653" :newSvg="newSvg" />
              </div>
            </div>
          </div>
          <div>
            <!-- <video width="380" height="690" src="../../../asset/video/xiya.mp4"></video> -->
            <!-- <iframe src="https://youtube.com/shorts/kfysOuM3slg?si=GqXdtKO74Co63Krj" frameborder="0"></iframe> -->
            <iframe v-if="pcOrMb == 'pc'" width="380" height="690" src="https://www.youtube.com/embed/kfysOuM3slg"
              title="【你的線上牙醫💁🏻‍♂️洗牙篇】" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
            <iframe v-else width="335" height="600" src="https://www.youtube.com/embed/kfysOuM3slg"
              title="【你的線上牙醫💁🏻‍♂️洗牙篇】" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
        </div>
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
  data() {
    return {
      linkHref: 'https://api.whatsapp.com/send?phone=85295128192',
      linkText: '立即預約洗牙',
      isShowSvg: false,
      mb: '',
      paddingSize: '10px 100px',
      paddingSizeMb: '6px 74px',
      newSvg: 'https://static.cmereye.com/imgs/2023/12/ff870ed05ae5440d.png',
      currentIndex: 0,   // 当前点击的tab的索引
      value2: 0,
      several: 0,
      pcOrMb: 'pc',
    }
  },
  computed: {
  },
  mounted() {
    this.getDocWidth()
  },
  methods: {
    getDocWidth() {
      this.pcOrMb = window.innerWidth > 767 ? 'pc' : 'mb'
    },
    handleClick(index) {
      this.currentIndex = index
    },
    handleSliderChange() {
      this.value2 = 0
    },
    handleSliderInput(value) {
      this.several = value
    }
  }
}

</script>

<style lang="scss" scoped>
//pc
@media only screen and (min-width: 768px) {
  .new_circle {
    margin-top: 154px;
    position: relative;

    &>div:nth-child(1) {
      background: #ECF7FC;
      // clip-path: ellipse(105% 55% at -50% 50%);
      width: 678px;
      height: 678px;
      border-radius: 50%;
      position: absolute;
      right: 40px;
      bottom: 0;
      z-index: 1;
      // transform: rotate(-180deg);
    }

    &>div:nth-child(2) {
      position: relative;
      z-index: 10;
      display: flex;
      align-items: center;


      &>div:nth-child(1) {
        flex: 6;
        display: flex;
        justify-content: flex-end;


        &>div {
          margin-right: 82px;
          color: #79828D;
          font-family: Noto Sans;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 1.8px;

          &>div {
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

          &>div:nth-child(2) {
            margin: 20px 0;
          }
        }
      }

      &>div:nth-child(2) {
        flex: 4;
      }
    }
  }

  .new-btn {
    margin-top: 150px;
  }

  ::v-deep .el-slider__button {
    background: url(https://static.cmereye.com/imgs/2023/12/6ee295d9a8618fc5.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 88px;
    height: 92px;
    position: relative;
    top: -100%;
    left: -50%;
    border: none;
  }

  ::v-deep .el-slider__button::before {
    content: '';
    background: url(https://static.cmereye.com/imgs/2023/12/9056fc7cae15b59c.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100px;
    height: 51px;
    display: inline-block;
    position: absolute;
    top: -40%;
    left: -20%;
  }

  .sliderElement2 {
    ::v-deep .el-slider__button {
      background: url(https://static.cmereye.com/imgs/2023/12/d9a7b9cf060fd37c.png);
    }

    ::v-deep .el-slider__button::before {
      content: none;
    }
  }

  .sliderElement3 {
    ::v-deep .el-slider__button {
      background: url(https://static.cmereye.com/imgs/2023/12/8417940214d1c693.png);
    }

    ::v-deep .el-slider__button::before {
      content: none;
    }
  }

  .sliderElement4 {
    ::v-deep .el-slider__button {
      background: url(https://static.cmereye.com/imgs/2023/12/c0ffaf5df39c49e7.png);
    }

    ::v-deep .el-slider__button::before {
      content: none;
    }
  }

  .sliderElement5 {
    ::v-deep .el-slider__button {
      background: url(https://static.cmereye.com/imgs/2023/12/d537ba02defb29c5.png);
    }

    ::v-deep .el-slider__button::before {
      content: none;
    }
  }

  .interval-text {
    &>div:nth-child(2) {
      position: relative;
      right: 4%;
    }

    &>div:nth-child(4) {
      position: relative;
      right: -3%;
    }

    &>div:nth-child(5) {
      position: relative;
      right: -5%;
    }
  }

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
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 22px 60px;
      border-radius: 25px;
      position: relative;
      background: url(https://static.cmereye.com/imgs/2023/12/4f250806067a7930.png);
      background-repeat: no-repeat;
      height: 313px;
      width: 100%;
      background-size: 100% 100%;
      justify-content: flex-end;
      z-index: 99;

      &>div:nth-child(1) {
        color: #79828D;
        text-align: center;
        font-family: Noto Sans;
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 2.5px;
        margin-bottom: 40px;
      }

      &>div:nth-child(2) {
        display: flex;
        align-items: flex-start;
        width: 100%;
        margin: 0 40px;
        padding: 0 30px;
      }

      &>div:nth-child(3) {
        display: flex;
        align-items: flex-start;
        width: 100%;
        margin-top: 20px;

        &>div {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #79828D;
          text-align: center;
          font-family: Noto Sans TC;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 1.8px;

          &>span {
            text-align: center;
          }
        }
      }

    }

    &>div:nth-child(1)::after {
      content: '';
      background: url(https://static.cmereye.com/imgs/2023/12/96ad361562700793.png);
      position: absolute;
      top: -10%;
      width: 61px;
      height: 98px;
      background-repeat: no-repeat;
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

// @media screen and (min-width: 1925px) and (max-width: 4096px) {
//   .new_circle {
//     &>div:nth-child(1) {
//       background: #ECF7FC;
//       width: 1800px;
//       height: 1800px;
//       border-radius: 50%;
//       position: absolute;
//       right: -35%;
//       bottom: -600px;
//       z-index: 1;
//     }
//   }
// }

// mb
@media only screen and (max-width: 767px) {
  .new_circle {
    padding: 0 20px;

    &>div:nth-child(2) {
      display: flex;
      flex-direction: column-reverse;

      &>div:nth-child(2) {
        display: flex;
        justify-content: center;

      }

      &>div:nth-child(1) {
        margin-top: 18px;
        display: flex;
        justify-content: center;

        &>div {
          &>div:nth-child(1) {
            color: #79828D;
            font-family: Noto Sans;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 1.6px;
          }

          &>div:nth-child(2) {
            margin: 20px 0;
            color: #818A94;
            font-family: Noto Sans;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 2.4px;

            &>span {
              color: #57B2F3;
              font-family: Noto Sans;
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              letter-spacing: 3.3px;
            }
          }

          &>div:nth-child(4) {
            color: #79828D;
            font-family: Noto Sans;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 1.6px;

            &>span:nth-child(1),
            &>span:nth-child(3) {
              color: #79828D;
              font-family: Noto Sans;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 0px;
              letter-spacing: -0.32px;
            }

            &>span:nth-child(4) {
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
      }
    }
  }

  .new-btn {
    margin-top: 65px;
  }

  ::v-deep .new-btn {
    .img_absolute {
      right: 23% !important;
      top: -110% !important;
      z-index: 11 !important;
    }
  }

  ::v-deep .el-slider__button {
    background: url(https://static.cmereye.com/imgs/2023/12/6ee295d9a8618fc5.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 55px;
    height: 55px;
    position: relative;
    top: -45%;
    left: -4%;
    border: none;
  }

  ::v-deep .el-slider__button::before {
    content: none;
  }

  .sliderElement2 {
    ::v-deep .el-slider__button {
      background: url(https://static.cmereye.com/imgs/2023/12/d9a7b9cf060fd37c.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      width: 55px;
      height: 55px;
    }
  }

  .sliderElement3 {
    ::v-deep .el-slider__button {
      background: url(https://static.cmereye.com/imgs/2023/12/8417940214d1c693.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      width: 55px;
      height: 55px;
    }
  }

  .sliderElement4 {
    ::v-deep .el-slider__button {
      background: url(https://static.cmereye.com/imgs/2023/12/c0ffaf5df39c49e7.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      width: 55px;
      height: 55px;
    }
  }

  .sliderElement5 {
    ::v-deep .el-slider__button {
      background: url(https://static.cmereye.com/imgs/2023/12/d537ba02defb29c5.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      width: 55px;
      height: 55px;
    }
  }

  .interval-text {
    display: flex;
    justify-content: flex-end;

    &>div:nth-child(2) {
      position: relative;
      right: 5px;
    }

    &>div:nth-child(3) {
      position: relative;
      right: -10px;
    }
  }

  .pcShow {
    display: none;
  }

  .step {
    margin-top: 100px;
  }

  .habit {
    background: url(https://static.cmereye.com/imgs/2023/12/ff85dee858394c15.png);
    background-repeat: no-repeat;
    max-width: 100%;
    height: 12.875rem;
    background-size: 100% 100%;
    margin: 0 1.25rem 3.75rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 0 0 10px 0;
    position: relative;

    &>div:nth-child(1) {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-bottom: 15px;

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
        padding: 0 1.875rem;
      }

      .interval-text {
        display: flex;

        &>div {
          display: flex;
          flex-direction: column;
          margin-right: 20px;
          color: #79828D;
          text-align: center;
          font-family: Noto Sans TC;
          font-size: 10.635px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 1.063px;
        }
      }
    }

    &>div:nth-child(1)::after {
      content: '';
      background: url('https://static.cmereye.com/imgs/2023/12/ac8ad218b507e3ae.png');
      background-repeat: no-repeat;
      width: 35px;
      height: 55px;
      position: absolute;
      top: -10%;
      left: 50%;
      transform: translateX(-50%);
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
      bottom: 300px;
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

    &>div {
      color: #FFF;
      font-family: Noto Sans;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.44px;
      background: #FFD333;
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
