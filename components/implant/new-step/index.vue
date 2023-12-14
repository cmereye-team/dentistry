<template>
  <div class="new-step">
    <div class="why_significance">植牙五步曲</div>
    <div class="new-step-content">
      <div class="main-container step_five">
        <div>
          <div>
            <div> <img src="https://static.cmereye.com/imgs/2023/12/779289004a2dc385.png" alt=""> </div>
            <div>訂立客製化方案</div>
            <div></div>
          </div>
          <div>
            <div> <img src="https://static.cmereye.com/imgs/2023/12/cc37d29b318c00b6.png" alt=""> </div>
            <div>植入植體</div>
            <div></div>
          </div>
          <div>
            <div> <img src="https://static.cmereye.com/imgs/2023/12/7fcf92c3e62095c0.png" alt=""> </div>
            <div>等待癒合</div>
            <div></div>
          </div>
          <div>
            <div> <img src="https://static.cmereye.com/imgs/2023/12/83564b132e80b07f.png" alt=""> </div>
            <div>完成植牙</div>
            <div></div>
          </div>
          <div>
            <div> <img src="https://static.cmereye.com/imgs/2023/12/8356d77dc6c08847.png" alt=""> </div>
            <div>定期覆診</div>
            <div></div>
          </div>
        </div>
        <div>牙齒狀況因人而異，建議尋求<br class="mbShow" />牙科醫生的評估及諮詢，<br class="mbShow" />以確定是否適合進行該項療程。</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'new-step',
  data() {
    return {

    };
  },
  methods: {}
}
</script>

<style  scoped lang='scss'>
@media screen and (min-width: 768px) {
  .new-step {
    margin-top: 90px;
  }

  .new-step-content {
    background: #ecf7fc;
    // background: rgba(236, 247, 252, 0.80);
  }

  .step_five {
    margin-top: 50px;

    &>div:nth-child(1) {
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      min-height: 200px;
      padding: 80px 0 50px;

      &>div {
        position: relative;

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
          width: 22px;
          height: 19px;
          display: inline-block;
          bottom: 5px;
          right: 0;
          position: absolute;
          transform: rotate(180deg) translateX(20%);
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
      }

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
      padding: 105px 0 55px;
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
  .new-step-content {
    background: #ecf7fc;
  }

  .step_five {
    margin-top: 45px;
    padding: 0 20px;

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
        right: 20%;
        top: 10%;
      }

      &>div:nth-child(odd):before {
        content: '';
        background: url(https://static.cmereye.com/imgs/2023/12/c17f345e54c1db56.png);
        width: 88px;
        height: 88px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: absolute;
        transform: rotate(350deg);
        right: 40%;
        top: 10%;
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