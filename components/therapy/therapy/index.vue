<template>
  <di class="step comContent section">
    <div class=" comContent meun">
      <p><nuxt-link style="color: #000; text-decoration: none;" to="/">首頁</nuxt-link></p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙科服務</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">根管治療（杜牙根）</p>
    </div>
    <div class="step">
      <div class="list">
        <ul class="step_list items-center ">
          <div class="yagen">
            <img src="https://static.cmereye.com/static/lkximg/image/therapy/apple.png" alt="">
            <div class="list_con">
              <strong>根管治療（杜牙根）</strong>
              <p >
                根管治療（杜牙根）是治療嚴重蛀牙或牙根受細菌感染的手術，當蛀牙菌的感染深入牙髓，以致牙齒內的神經發炎，便需要以杜牙根手術徹底清除感染的部分。
              </p>
            </div>
            <div class="list_dis">
              <strong style="padding: 0;">根管治療（杜牙根）的原因</strong>
              <ul>
                <li>切除受感染的牙髓神經，解決牙痛問題</li>
                <li>防止牙髓感染蔓延至牙周組織和牙槽骨，導致更嚴重的口腔問題</li>
                <li>患者出現牙痛問題，經醫生評估後，認為牙齒仍有保留價值而確定保留真牙</li>
                <li>牙齒被蛀蝕得太深、撞斷或嚴重磨耗，需徹底清除牙髓內的感染，解決牙髓壞死、化膿等問題</li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
      <div class="video">

        <div class="flex justify-center texts">
          <h2>根管治療（杜牙根）過程</h2>
          <img class="icons" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
          <div class="contents">
            <div class="gcond">
              <div class="gcon">
                <div class="content left">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num1.svg" height="50vw" width="50vw" alt="">
                  <p>為受感染的牙齒照X光，了解根管形狀及長度</p>
                </div>
                <div class="content left">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num2.svg" height="50vw" width="50vw" alt="">
                  <p>局部麻醉，進行牙根消毒</p>
                </div>
                <div class="content left">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/3.svg" height="50vw" width="50vw" alt="">
                  <p>從牙冠進入牙髓腔，把牙髓組織刮除或吸出</p>
                </div>
              </div>
              <div class="gcon">
                <div class="content right">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num4.svg" height="50vw" width="50vw" alt="">
                  <p>以藥水徹底消毒乾淨根管內壁</p>
                </div>
                <div class="content right">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num5.svg" height="50vw" width="50vw" alt="">
                  <p>把牙冠髓腔填封及覆蓋牙洞，以降低蛀牙菌再度入侵的機會</p>
                </div>
                <div class="content right">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/6.svg" height="50vw" width="50vw" alt="">
                  <p>如經治療後的牙齒太脆弱，需為牙齒套上牙套，預防再被咬崩而要拔除</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class="lists">
            <div class="list_disd">
              <strong>療程後注意事項</strong>
              <div class="list_cons">
              <li>注意口腔衛生</li>
              <li>避免吃堅硬食物，失去牙髓的牙齒不能承受過大的咬合力</li>
              <li>牙齒失去牙髓後，有機會漸漸變黑，戴上牙套可保持美觀</li>
              <li>杜牙根手術後，牙齒變得脆弱，需配戴牙套來保護牙齒，避免斷裂</li>
              <li>定期覆診，檢查牙齒是否出現斷裂、二度感染、異常腫痛等問題</li>
              <li>如發現臨時補牙物料脫落，須盡快見牙醫，以免唾液中的細菌滲入牙齒髓腔</li>
              </div>
            </div>
          </div>
    </div>
    </div>
  </di>
</template>
<script>
export default {
  data() {
    return {
      list: [{
        id: 0,
        title: '植牙過程'
      },
      {
        id: 1,
        title: '固定式牙橋過程'
      }
      ],
      currentIndex: 0,   // 当前点击的tab的索引
    }
  },
  computed: {

  },
  methods: {
    handleClick(index) {
      // console.log(index);
      this.currentIndex = index
      console.log('测试===========', this.currentIndex);
    }
  }
}

</script>

<style lang="scss" scoped>
.texts {
  text-align: center;
  margin-top: 2vw;

  h2 {
    font-weight: 500;
    color: #79828D;
    margin-bottom: 0vw;
  }

  image {
    text-align: center;
  }
}

.serve_con {
  color: #79828D;
  margin-top: 2vw;
  // margin-bottom: 2vw;
  font-size: 18px;
}

//pc
@media only screen and (min-width: 768px) {
  .icons{
    margin-bottom: 3.5vw;
    margin-top: 0.5vw;
  }
  .newsty {
    background: #ECF7FC;
    border-radius: 0 0 17px 17px !important;

  }

  .nofi {
    margin: 5vw 0vw !important;
  }

  .table-box {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: 10vw;
  }

  .lists {
    display: flex;
    margin: 0 8vw;
    margin-top: 3vw;
  }

  .tablesd {
    margin-left: 4vw;
    color: #57B2F3;
    background-color: #fff;
    border: 3px solid #9BD0F5;
    border-radius: 20px;
    border-collapse: separate;
    border-spacing: 0;
    box-shadow: 13px 15px 0 #a2d4f7;
    border-spacing: 0;
    width: 28%;
    height: 25vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;

    ul {
      list-style-type: none;
      text-align: center;
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      padding: 0 4.5vw;
    }

    th {
      text-align: center;
      color: #fff;
      background-color: #57B2F3;
      border-radius: 17px 17px 0 0;
    }

    .thd {
      color: #57B2F3;
      background-color: #ECF7FC;
      border-radius: 20px 20px 0 0;
    }
  }

  .tablesed {
    margin-left: 4vw;
    color: #57B2F3;
    background-color: #fff;
    border: 3px solid #9BD0F5;
    border-radius: 20px;
    border-collapse: separate;
    border-spacing: 0;
    box-shadow: 13px 15px 0 #a2d4f7;
    border-spacing: 0;
    width: 28%;
    height: 25vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;

    ul {
      list-style-type: none;
      text-align: center;
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      padding: 0 4.5vw;
    }

    th {
      text-align: center;
      color: #fff;
      background-color: #57B2F3;
      border-radius: 17px 17px 0 0;
    }

    .thd {
      color: #57B2F3;
      background-color: #ECF7FC;
      border-radius: 20px 20px 0 0;
    }
  }

  .list_disd {
    li {
      font-size: 16px;
      color: #79828D;
      margin-left: 1vw;
    }

    strong {
      color: #79828D;
      font-size: 24px;
      font-weight: 500;

      &:before {
        content: "";
        margin-left: 15px;
        padding-left: 15px;
        border-left: 0.8vw solid #9BD0F5;
        height: 3vw;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  .list_cons {
    margin: 2vw 0;
  }

  .video {
    background-image: linear-gradient(to bottom, #fff 27%, #ECF7FC 0);
    margin: 132px 8vw;
  }

  .videos {
    background-image: linear-gradient(to bottom, #fff 0%, #ECF7FC 0);
    // background-color: #ECF7FC;
    margin: 0 8vw;

  }

  .video_con {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    // background-image: linear-gradient(to bottom, #fff 65%, #ECF7FC 0);
  }

  .left {
    padding: 2vw 6vw 2vw 2vw !important;

  }

  .right {
    // padding-left: 8vw !important;
    padding: 2vw 0 2vw 0vw !important;
  }

  .contents {
    background-color: #fff;
    width: 80%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    box-shadow: 13px 15px 0 #A2D4F7;
    border-radius: 10px;

    .gcond {
      display: flex;
      margin: 0 auto;
      width: 100%;
    }

    .content {
      padding: 1vw 1vw;
      display: flex;
      align-items: center;

    }

    p {
      color: #79828D;
      font-size: 18px;
      padding-left: 1vw;
      margin-bottom: 0rem;
      text-align: left;
    }
  }

  ul {
    margin-bottom: -4rem;
  }

  .active {
    float: inherit;
    border: 10px solid hsla(204, 68%, 65%, 0.3) !important;
    // background-clip:content-box;
    background-clip: padding-box;
  }

  .Advantage {
    display: flex;
    justify-content: center;
    position: relative;
    background-image: linear-gradient(to top, #fff 37%, #ECF7FC 0);

    img {
      width: 66%;
    }

  }

  ::v-deep .Advanbutton {
    display: flex;
    position: absolute;
    bottom: 5rem;

    ul {
      display: flex;

      li {
        padding: 2vw;
      }

      .guoc {
        border: 10px solid rgba(255, 41, 41, 0);
        background-color: rgba(255, 255, 255, 0.8);
        height: 100px;
        /* line-height: 94px; */
        align-self: center;
        width: 100px;
        display: flex;
        border-radius: 100%;
        margin: 1px 4vw;
        text-align: center;
        flex-wrap: wrap;
        align-content: space-around;
        justify-content: center;

        p {
          display: block;
          color: #57B2F3;
          font-weight: bold;
          margin-bottom: 0rem;
          // font-size: 1.2rem;
        }
      }
    }
  }

  .list_con {
    margin-top: 9vw;
    width: 41vw;
  }

  .list_dis {
    margin-top: 9vw;
    // width: 41vw;
    padding-left: 5vw;

    ul {
      padding-top: 1vw;
      list-style-type: none;

      li {
        color: #9BA5B1;

      }
    }
  }

  .meun {
    padding-left: 6vw;
    // margin-top: 1vw;
    display: flex;
  }

  .step_list {
    // margin: 0 20vw;

    img {
      width: 22vw;
      height: 14vw;
      margin-bottom: 12vw;
      padding: 0 2vw;
    }

    .yagen {
      text-align: left;
      color: #fff;
      // padding-left: 2vw;
      margin: 0 3vw;
      display: flex;

      p {
        padding-left: 4.5vw;
        padding-top: 1vw;
        color: #9BA5B1;
        display: flex;
      }
      ul{
        list-style-type: disc;
      }
      strong {
        padding-left: 4vw;
        color: #9BA5B1;

        &:before {
          content: "";
          margin-left: 15px;
          padding-left: 15px;
          border-left: 0.6vw solid #9BD0F5;
          height: 1.6vw;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }

  .list {
    margin-top: 5vw;
    background-image: linear-gradient(to bottom, #fff 22%, #ECF7FC 0);
  }
}

//md
@media only screen and (max-width: 768px) {
  .video {
    background-image: linear-gradient(to bottom, #fff 27%, #ECF7FC 0);
    margin-top: 132px;
  }
  .list {
    text-align: center;
    margin-top: 5vw;
    background-image: linear-gradient(to bottom, #fff 22%, #ECF7FC 0);
  }
  .contents {
    background-color: #fff;
    width: 80%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    box-shadow: 13px 15px 0 #A2D4F7;
    border-radius: 10px;

    .gcond {
      // display: flex;
      margin: 0 auto;
      width: 100%;
    }

    .content {
      padding: 5vw 1vw;
      display: flex;
      align-items: center;

    }

    p {
      color: #79828D;
      font-size: 18px;
      padding-left: 1vw;
      margin-bottom: 0rem;
      text-align: left;
    }
  }

  ul {
    margin-bottom: -4rem;
  }

  .active {
    float: inherit;
    border: 10px solid hsla(204, 68%, 65%, 0.3) !important;
    // background-clip:content-box;
    background-clip: padding-box;
  }

  .Advantage {
    display: flex;
    justify-content: center;
    position: relative;
    background-image: linear-gradient(to top, #fff 37%, #ECF7FC 0);

    img {
      width: 66%;
    }

  }

  ::v-deep .Advanbutton {
    display: flex;
    position: absolute;
    bottom: 5rem;

    ul {
      display: flex;

      li {
        padding: 2vw;
      }

      .guoc {
        border: 10px solid rgba(255, 41, 41, 0);
        background-color: rgba(255, 255, 255, 0.8);
        height: 100px;
        /* line-height: 94px; */
        align-self: center;
        width: 100px;
        display: flex;
        border-radius: 100%;
        margin: 1px 4vw;
        text-align: center;
        flex-wrap: wrap;
        align-content: space-around;
        justify-content: center;

        p {
          display: block;
          color: #57B2F3;
          font-weight: bold;
          margin-bottom: 0rem;
          // font-size: 1.2rem;
        }
      }
    }
  }

  .list_con {
    margin-top: 9vw;
    padding-left: 5vw;
    text-align: left;
    p{
      padding: 4vw;
    }
  }

  .list_dis {
    margin-top: 9vw;
    // width: 41vw;
    padding-left: 5vw;
    text-align: left;
    padding-bottom: 24vw;
    padding-right: 2vw;
    ul {
          list-style-type: disc;
    padding: 3vw 8vw;

      li {
        color: #9BA5B1;

      }
    }
  }
  .list_disd {
    li {
      font-size: 16px;
      color: #79828D;
      margin-left: 2vw;
    }

    strong {
      color: #79828D;
      font-size: 24px;
      font-weight: 500;

      &:before {
        content: "";
        margin-left: 15px;
        padding-left: 15px;
        border-left: 1.8vw solid #9BD0F5;
        height: 7vw;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  .list_cons {
    margin: 5vw 2vw;
  }

  .icons{
    margin-bottom: 3.5vw;
    margin-top: 0.5vw;
  }
  .newsty {
    background: #ECF7FC;
    border-radius: 0 0 17px 17px !important;

  }

  .nofi {
    margin: 5vw 0vw !important;
  }

  .table-box {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: 10vw;
  }

  .lists {
    display: flex;
    margin: 0 6vw;
    margin-top: 10vw;
  }
  .meun {
    padding-left: 6vw;
    display: flex;
  }

  ul {
    padding: 0;

    img {
      width: 90%;

    }
  }

  li {
    // background-image: linear-gradient(to bottom, #fff 30%, #ECF7FC 0);
  }

  p {
   padding: 1vw 1vw;
    color: #9BA5B1;
  }

  strong {
    padding-top: 2vw;
    // padding-left: 4vw;
    color: #9BA5B1;
  }

  strong:before {
    content: "";
    margin-left: 15px;
    padding-left: 15px;
    border-left: 1.8vw solid #9BD0F5;
    height: 7vw;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
