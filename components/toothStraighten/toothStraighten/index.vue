<template>
  <di class="step section">
    <div class="meun">
      <p style="color:#79828D">首頁</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙科服務</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">矯齒</p>
    </div>
    <div class="step">
      <div class="list">
        <ul class="step_list items-center ">
          <li>
            <img src="@/asset/image/toothStraighten/apple.png" alt="">
            <div class="list_con">
              <strong>矯齒（箍牙）</strong>
              <p>
                矯齒（箍牙）治療除了能矯正不整齊排列的牙齒，改善外觀外，更能有助減低患上各種牙齒問題的風險。
              </p>
            </div>
            <div class="list_dis">
              <strong>矯齒（箍牙）目的</strong>
              <ul>
                <li>因先天或其他因素引致上顎或下顎較為突出，影響臉型，透過矯齒可改善臉部與牙齒的平衡</li>
                <li>當出現上下顎咬合不正的情況，容易導致蛀牙、影響進食及口腔健康，矯齒能有效改善情況</li>
                <li>牙齒排列不整，例如前後重疊、高低不等，影響進食、發音、清潔等，更容易引致牙周病等情況，矯齒能將位置對齊，減少對口腔健康的影響</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="video">

        <div class="flex justify-center texts">
          <h2>矯齒（箍牙）過程</h2>
          <img class="icons" src="@/asset/image/about-me/serve/Vector.png" alt="">
          <div class="contents">
            <div class="gcond">
              <div class="gcon">
                <div class="content ">
                  <img src="@/asset/image/implant/num1.svg" height="50vw" width="50vw" alt="">
                  <p>醫生會先進行檢查及評估，確認矯齒的需要</p>
                </div>
                <div class="content ">
                  <img src="@/asset/image/implant/num2.svg" height="50vw" width="50vw" alt="">
                  <p>拍攝牙齒外觀照片，包括全口腔及側面X光照片，以印製牙模</p>
                </div>
                <div class="content ">
                  <img src="@/asset/image/implant/3.svg" height="50vw" width="50vw" alt="">
                  <p>醫生講解情況及治療方案</p>
                </div>
                 <div class="content ">
                  <img src="@/asset/image/implant/num4.svg" height="50vw" width="50vw" alt="">
                  <p>配戴牙箍及定期覆診</p>
                </div>
                <div class="content ">
                  <img src="@/asset/image/implant/num5.svg" height="50vw" width="50vw" alt="">
                  <p>矯齒完成後，需定期覆診，晚上佩戴固定器，防止牙齒移位</p>
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
    margin: 0 18vw;
    margin-top: 5vw;
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
      .gcon{
        margin: 0 auto;
      }
    }

    .content {
      padding: 1.5vw 1vw;
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
    margin-top: 1vw;
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

    li {
      text-align: left;
      color: #fff;
      // padding-left: 2vw;
      margin: 0 3vw;
      display: flex;

      p {
        padding-left: 4vw;
        padding-top: 1vw;
        color: #9BA5B1;
        display: flex;
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
  .meun {
    padding-left: 6vw;
    display: flex;
  }

  ul {
    padding: 0;

    img {
      width: 24vw;
      padding-left: 9vw;
      padding-bottom: 6vw;
    }
  }

  li {
    background-image: linear-gradient(to bottom, #fff 30%, #ECF7FC 0);
  }

  p {
    padding: 2vw 4vw 9vw 4vw;
    color: #9BA5B1;
  }

  strong {
    padding-top: 2vw;
    padding-left: 4vw;
    color: #9BA5B1;
  }

  strong:before {
    content: "";
    margin-left: 15px;
    padding-left: 15px;
    border-left: 2vw solid #9BD0F5;
    height: 6vw;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
