<template>
  <div class="new-step">
    <div class="why_significance">植牙五步曲</div>
    <div class="new-step-content">
      <div class="main-container step_five">
        <div>
          <div @click="boxShow(1)" :class="[showOne ? 'hoverThreeBox' : '']">
            <div> <img src="https://static.cmereye.com/imgs/2023/12/779289004a2dc385.png" alt=""> </div>
            <div>訂立客製化方案</div>
            <!-- 点击方案 @click="boxShow(1)" -->
            <div v-if="showOne">
              進行全面口腔檢查、X光或電腦斷層掃描，牙醫會為客人進行詳細的術前評估，透過了解其病歷及口腔健康狀況，選擇最合適的植體，並確定最佳的植入位置與角度。
            </div>
          </div>
          <div @click="boxShow(2)" :class="[showTwo ? 'hoverThreeBox' : '']">
            <div> <img src="https://static.cmereye.com/imgs/2023/12/cc37d29b318c00b6.png" alt=""> </div>
            <div>植入植體</div>
            <div v-if="showTwo">牙醫會先為客人進行麻醉，翻開牙齦，並在齒槽骨的準確位置及角度進行鑽孔，並將植體植入。</div>
          </div>
          <div @click="boxShow(3)" :class="[showThree ? 'hoverThreeBox' : '']">
            <div> <img src="https://static.cmereye.com/imgs/2023/12/7fcf92c3e62095c0.png" alt=""> </div>
            <div>等待癒合</div>
            <div v-if="showThree">
              植體大約需3至6個月時間與牙槽骨緊密結合。確保癒合狀況良好後，牙醫會根據客人的實際情況，裝上臨時牙冠、牙橋或假牙。視乎情況，最快可即日裝上。</div>
          </div>
          <div @click="boxShow(4)" :class="[showFour ? 'hoverThreeBox' : '']">
            <div> <img src="https://static.cmereye.com/imgs/2023/12/83564b132e80b07f.png" alt=""> </div>
            <div>完成植牙</div>
            <div v-if="showFour">確認植體穩定固定在顎骨後，牙醫會裝上客人已選好的牙冠、牙橋或假牙，並同時對牙齒進行細微調整。
            </div>
          </div>
          <div @click="boxShow(5)" :class="[showFive ? 'hoverThreeBox' : '']">
            <div> <img src="https://static.cmereye.com/imgs/2023/12/8356d77dc6c08847.png" alt=""> </div>
            <div>定期覆診</div>
            <div v-if="showFive">接受植牙手術後，需定期與牙科醫生跟進狀況，以確保植牙得到適當的保養。</div>
          </div>
        </div>
        <div>牙齒狀況因人而異，建議尋求<br class="mbShow" />牙科醫生的評估及諮詢，<br class="mbShow" />以確定是否適合進行該項療程。</div>
        <div v-if="showBoxBg" class="showBoxBg" @click="handShowBoxBg"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'new-step',
  data() {
    return {
      showBoxBg: false,
      // 点击方案 showOne -> showFive
      showOne: false,
      showTwo: false,
      showThree: false,
      showFour: false,
      showFive: false,
    };
  },
  methods: {
    // 点击方案
    boxShow(index) {
      switch (index) {
        case 1:
          this.showOne = this.showOne === true ? false : true;
          this.showBoxBg = this.showOne === true ? true : false;
          break;
        case 2:
          this.showTwo = this.showTwo === true ? false : true;
          this.showBoxBg = this.showTwo === true ? true : false;
          break;
        case 3:
          this.showThree = this.showThree === true ? false : true;
          this.showBoxBg = this.showThree === true ? true : false;
          break;
        case 4:
          this.showFour = this.showFour === true ? false : true;
          this.showBoxBg = this.showFour === true ? true : false;
          break;
        case 5:
          this.showFive = this.showFive === true ? false : true;
          this.showBoxBg = this.showFive === true ? true : false;
          break;
        default:
      }
    },
    handShowBoxBg() {
      this.showBoxBg = false;
      this.showOne = false;
      this.showTwo = false;
      this.showThree = false;
      this.showFour = false;
      this.showFive = false;
    }
  }
}
</script>

<style  scoped lang='scss'>
@media screen and (min-width: 768px) {
  .mbShow {
    display: none;
  }

  .new-step {
    margin: 90px auto 120px;
    position: relative;
  }

  .showBoxBg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 628px;
    background: rgba(236, 247, 252, 0.80);
    z-index: 50;
  }

  .new-step-content {
    background: rgba(236, 247, 252, 0.80);
    // background: rgba(236, 247, 252, 0.80);
  }

  .step_five {
    margin-top: 50px;

    &>div:nth-child(1) {
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      min-height: 200px;
      padding: 65px 0 50px;

      &>div {
        position: relative;
        cursor: pointer;

        &>div:nth-child(1) {
          position: relative;
          right: -35%;
        }

        &>div:nth-child(2) {
          color: #79828D;
          font-family: Noto Sans;
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 1.8px;
          padding-bottom: 2px;
          border-bottom: 1px solid #EBEBEB;
          min-width: 170px;
          position: relative;
        }

        &>div:nth-child(2)::before {
          content: '';
          background: url(https://static.cmereye.com/imgs/2023/12/fcb2453a34f6841a.png);
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 22px;
          height: 19px;
          display: inline-block;
          bottom: 5px;
          right: 0;
          position: absolute;
          transform: rotate(180deg) translateX(20%);
          animation: jump 1s ease infinite;
        }

        &>div:nth-child(2)::after {
          content: '';
          background: #299DF0;
          width: 30px;
          height: 1px;
          display: inline-block;
          bottom: -1px;
          right: 0;
          position: absolute;
        }

        &>div:nth-child(3) {
          display: none;
          background: #F2F2F2;
          padding: 30px 22px;
          max-width: 180px;
          position: absolute;
          color: #79828D;
          font-family: Noto Sans;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 1.8px;
          top: 100%;
          cursor: pointer;
          z-index: 99;
        }
      }

      &>div:nth-child(2) {
        &>div:nth-child(2)::before {
          animation: jump 1.1s ease infinite;
        }
      }

      &>div:nth-child(3) {
        &>div:nth-child(2)::before {
          animation: jump 1.2s ease infinite;
        }
      }

      &>div:nth-child(4) {
        &>div:nth-child(2)::before {
          animation: jump 1.3s ease infinite;
        }
      }

      &>div:nth-child(5) {
        &>div:nth-child(2)::before {
          animation: jump 1.4s ease infinite;
        }
      }

      .hoverThreeBox {
        &>div:nth-child(3) {
          display: block;
          transition: all 1s ease-in-out;
        }

        &>div:nth-child(2)::before {
          content: '';
          animation: triangle1 .3s;
        }

        &>div:nth-child(3)::before {
          background: url(https://static.cmereye.com/imgs/2023/12/fcb2453a34f6841a.png);
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 22px;
          height: 19px;
          content: '';
          top: 5px;
          z-index: 99;
          right: 5px;
          display: inline-block;
          position: absolute;
          animation: triangle .5s;
        }
      }

      // &>div:hover {
      //   &>div:nth-child(3) {
      //     display: block;
      //     transition: all 1s ease-in-out;
      //   }
      //   &>div:nth-child(2)::before {
      //     content: '';
      //     animation: triangle1 .3s;
      //   }
      //   &>div:nth-child(3)::before {
      //     background: url(https://static.cmereye.com/imgs/2023/12/fcb2453a34f6841a.png);
      //     background-size: 100% 100%;
      //     background-repeat: no-repeat;
      //     width: 22px;
      //     height: 19px;
      //     content: '';
      //     top: 5px;
      //     z-index: 99;
      //     right: 5px;
      //     display: inline-block;
      //     position: absolute;
      //     animation: triangle .5s;
      //   }
      // }

      &>div:nth-child(odd)::after {
        position: absolute;
        content: '';
        background: url(https://static.cmereye.com/imgs/2023/12/c17f345e54c1db56.png);
        display: inline-block;
        width: 109px;
        height: 109px;
        top: -80%;
        left: 90%;
      }

      &>div:nth-child(even) {
        margin-bottom: 180px;
      }

      &>div:nth-child(even)::after {
        position: absolute;
        content: '';
        background: url(https://static.cmereye.com/imgs/2023/12/c17f345e54c1db56.png);
        display: inline-block;
        width: 109px;
        height: 109px;
        bottom: -100%;
        right: -50%;
        transform: rotate(-120deg);
      }

      &>div:last-child::after {
        content: none;
      }
    }

    &>div:nth-child(2) {
      padding: 105px 0 80px;
      display: flex;
      justify-content: center;
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

  @keyframes triangle {
    0% {
      height: 0;
    }

    100% {
      height: 22px;
    }
  }

  @keyframes triangle1 {
    0% {
      height: 22px;
    }

    75% {
      height: 0;
    }

    100% {
      height: 0;
      content: none;
    }
  }

  @keyframes jump {
    0% {
      height: 0;
      bottom: 0px;
    }

    30% {
      height: 19px;
      bottom: 10px;
    }

    70% {
      height: 19px;
      bottom: 15px;
    }

    70% {
      height: 19px;
      bottom: 5px;
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

  .new-step-content {
    background: rgba(236, 247, 252, 0.80);
  }

  .step_five {
    margin-top: 45px;
    padding: 0 20px;
    position: relative;

    &>div:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 105px;

      &>div {
        max-width: 224px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        &>div:nth-child(1) {
          margin-top: 60px;
          width: 53px;

          &>img {
            width: 100%;
          }
        }

        &>div:nth-child(2) {
          color: #79828D;
          font-family: Noto Sans;
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 1.8px;
          width: 190px;
          border-bottom: 1px solid #299DF0;
          position: relative;
          text-align: center;
        }

        &>div:nth-child(2)::before {
          content: '';
          background: url(https://static.cmereye.com/imgs/2023/12/fcb2453a34f6841a.png);
          width: 22px;
          height: 19px;
          display: inline-block;
          bottom: 5px;
          right: 0;
          position: absolute;
          transform: rotate(180deg) translateX(20%);
          animation: jump 1s ease-in-out infinite;
        }

        &>div:nth-child(3) {
          border-radius: 0px 0px 6px 6px;
          background: #F2F2F2;
          max-width: 180px;
          padding: 26px 25px 20px;
          color: #79828D;
          font-family: Noto Sans TC;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 1.6px;
          display: none;
        }
      }

      &>div:nth-child(2) {
        &>div:nth-child(2)::before {
          animation: jump 1.1s ease infinite;
        }
      }

      &>div:nth-child(3) {
        &>div:nth-child(2)::before {
          animation: jump 1.2s ease infinite;
        }
      }

      &>div:nth-child(4) {
        &>div:nth-child(2)::before {
          animation: jump 1.3s ease infinite;
        }
      }

      &>div:nth-child(5) {
        &>div:nth-child(2)::before {
          animation: jump 1.4s ease infinite;
        }
      }

      &>div::before {
        content: '';
        background: url(https://static.cmereye.com/imgs/2023/12/c17f345e54c1db56.png);
        width: 88px;
        height: 88px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: absolute;
        transform: rotate(80deg);
        right: 17%;
        top: 7%;
      }

      .hoverThreeBox {
        &>div:nth-child(3) {
          display: block;
          transition: all 1s ease-in-out;
          position: relative;
          z-index: 55;
        }

        &>div:nth-child(2)::before {
          bottom: -25px;
          z-index: 60;
          right: 9px;
          transition: all .3s ease-in-out;
          transform: rotate(0) translateX(20%);
          animation: none !important;
        }
      }

      // &>div:hover {
      //   &>div:nth-child(3) {
      //     display: block;
      //     transition: all 1s ease-in-out;
      //   }

      //   &>div:nth-child(2)::before {
      //     bottom: -25px;
      //     z-index: 15;
      //     right: 9px;
      //     transition: all .3s ease-in-out;
      //     transform: rotate(0) translateX(20%);
      //     animation: identifier2 1s ease-in-out infinite;
      //   }
      // }

      &>div:nth-child(odd):before {
        content: '';
        background: url(https://static.cmereye.com/imgs/2023/12/c17f345e54c1db56.png);
        width: 88px;
        height: 88px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: absolute;
        transform: rotate(350deg);
        right: 43%;
        top: 7%;
      }

      &>div:first-child::before {
        content: none;
      }


      &>div:nth-child(even) {
        margin: 0 0 0 auto;
      }
    }

    &>div:nth-child(2) {
      padding-bottom: 45px;
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

  @keyframes jump {
    0% {
      height: 0;
      bottom: 0px;
    }

    30% {
      height: 19px;
      bottom: 10px;
    }

    70% {
      height: 19px;
      bottom: 15px;
    }

    70% {
      height: 19px;
      bottom: 5px;
    }
  }

  .showBoxBg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(236, 247, 252, 0.80);
    z-index: 50;
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

  @keyframes identifier {
    0% {
      transform: rotate(195deg);
    }

    25% {
      transform: rotate(180deg);
    }

    50% {
      transform: rotate(165deg);
    }

    75% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(195deg);
    }
  }

  @keyframes identifier2 {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(0);
    }
  }
}
</style>