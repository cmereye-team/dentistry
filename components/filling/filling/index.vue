<template>
  <di class="step section">
    <div class="meun">
      <p style="color:#79828D">首頁</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙科服務</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">補牙</p>
    </div>
    <div class="step">
      <div class="list">
        <ul class="step_list items-center ">
          <li>
            <img src="https://static.cmereye.com/static/lkximg/image/filling/apple.png" alt="">
            <div class="list_dis">
              <strong>補牙</strong>
              <ul>
                <li>當牙齒的硬組織（琺瑯質、象牙質）受到破壞後，容易造成小孔，形成蛀牙。為了修復破損的組織及防止蛀牙情況加劇，會以填充物填補牙齒，使牙齒能恢復原來形狀和功能。</li>

              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="video">
        <div class="flex justify-center texts">
          <h2>補牙過程</h2>
          <img class="icons" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
          <div class="contents">
            <div class="gcond">
              <div class="gcon">
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num1.svg" height="50vw" width="50vw" alt="">
                  <p>清除牙齒蛀壞及脆弱的部分 </p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num2.svg" height="50vw" width="50vw" alt="">
                  <p>用專用的清潔消毒劑清潔牙齒表面，吹乾後，塗上黏固劑</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/3.svg" height="50vw" width="50vw" alt="">
                  <p>填補牙洞及修補缺損部分</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num4.svg" height="50vw" width="50vw" alt="">
                  <p>穩固填充物</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num5.svg" height="50vw" width="50vw" alt="">
                  <p>牙齒修形及拋光（如蛀牙的程度深，或需要使用麻醉劑）</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lists">
          <div class="list_disd">
            <strong>補牙後建議</strong>
            <div class="list_cons">
              <li>避免咬合過硬的食物</li>
              <li>避免進食過冷或過熱的食物</li>
            </div>
          </div>
        </div>
        <div class="flex justify-center texts" style="padding-top: 1vw;">
          <h2>補牙材料</h2>
          <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
          <p class="serve_con">補牙材料主要分為複合樹脂（俗稱瓷粉）及銀汞合金（俗稱銀粉）兩種。<br>複合樹脂是現時最常用的材料。由於銀汞合金氧化後會變成銀黑色，因此較少被選用。</p>
        </div>
        <div class="boxs">
          <div class="box">
            <div class="card">
              <div class="table-box">
                <table class="tables">
                  <tr>
                    <td>特性</td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>優點</td>
                  </tr>
                  <tr>
                    <td>缺點</td>
                  </tr>
                </table>
                <table class="tablesd">
                  <tr style="height: 3vw;">
                    <th>複合樹脂</th>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li style="padding:0.4vw">多用於修復牙齒的形狀</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>
                      <ul>
                        <li>美觀，接近牙齒天然的顏色與牙釉質有較強的粘合力</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li style="padding:0.4vw">強度比銀汞合金稍弱</li>
                      </ul>
                    </td>

                  </tr>
                </table>
                <table class="tablesd">
                  <tr style="height: 3vw;">
                    <th class="thd">銀汞合金</th>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li style="padding:0.4vw">多用於修補小臼齒或大臼齒的蛀牙</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>
                      <ul>
                        <li>堅固，可承受較強的咬合力耐用，不易磨損</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li style="padding:0.4vw">氧化後會變銀黑色，欠美觀</li>
                      </ul>
                    </td>

                  </tr>
                </table>
              </div>
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
  .card{
    border: 0px solid rgba(0,0,0,.125);
    background-color: rgba(255, 255, 255, 0);
  }
  .tables {
    color: #57B2F3;
    background-color: #fff;
    border: 2px solid #9BD0F5;
    border-radius: 30px;
    border-collapse: separate;
    border-spacing: 0;
    border-spacing: 1;
    box-shadow: 13px 15px 0 #a2d4f7;
    border-spacing: 0;
    width: 7%;
    height: 22vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;

    tr {
      text-align: center;
    }
  }

  .icons {
    margin-bottom: 3.5vw;
    margin-top: 0.5vw;
  }

  .newsty {
    background: #ECF7FC;
    border-radius: 0 0 30px 30px !important;

  }

  .nofi {
    margin: 5vw 0vw !important;
  }

  .table-box {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-top: 5vw;
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
    border-radius: 32px;
    border-collapse: separate;
    border-spacing: 0;
    box-shadow: 13px 15px 0 #a2d4f7;
    border-spacing: 0;
    width: 21%;
    height: 25vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;

    ul {
      list-style-type: none;
      // text-align: center;
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      padding: 0 0.5vw;
    }

    th {
      text-align: center;
      color: #fff;
      background-color: #57B2F3;
      border-radius: 30px 30px 0 0;
    }

    .thd {
      color: #57B2F3;
      background-color: #ECF7FC;
      border-radius: 30px 30px 0 0;
    }
  }

  .tablesed {
    margin-left: 4vw;
    color: #57B2F3;
    background-color: #fff;
    border: 3px solid #9BD0F5;
    border-radius: 30px;
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
      // text-align: center;
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      padding: 0 0.5vw;
    }

    th {
      text-align: center;
      color: #fff;
      background-color: #57B2F3;
      border-radius: 30px 30px 0 0;
    }

    .thd {
      color: #57B2F3;
      background-color: #ECF7FC;
      border-radius: 30px 30px 0 0;
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

      .gcon {
        margin: 0 auto;

      }
    }

    // .tips{
    //           padding: 2vw;
    //         }
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
    // padding-left: 5vw;
    width: 35%;

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
      margin: 1vw 3vw;
      display: flex;
      justify-content: center;

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
  .box {
    height: 498px;
    // background: #eee;
    // padding: 10px 0;
    white-space: pre-line;
    /* 禁止超出自动换行 */
    overflow-y: auto;
    /* 横向滑动 */
    margin: 0 0 0 8vw;
  }

  /*隐藏下面的滚动条*/
  .box::-webkit-scrollbar {
    display: none;
  }

  .card {
    display: inline-block;
    /*行内块元素*/
    // line-height: 300px;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff0;
    background-clip: border-box;
    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 0.25rem;
  }

  .porcelain—con {
    // display: flex;
    text-align: center;

    p {
      padding: 1vw 0;
      color: #57B2F3;
      font-weight: 500;
      font-size: 22px;
    }
  }

  .porcelain—cons {
    padding: 0 12vw;

    p {
      color: #9BA5B1;

    }
  }

  .quote {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
  }

  .boxs {
    display: block;
    text-align: center;
    margin: 8vw 0;
  }

  .icons {
    margin-bottom: 3.5vw;
    margin-top: 0.5vw;
  }

  .coin_box {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .coin {
    padding: 1vw 2vw;
    display: block;
    text-align: center;

    p {
      color: #79828D;
      font-size: 16px;
      padding: 1vw 0;
    }
  }

  .py-5 {
    margin-top: 8rem !important;
  }

  .list_d {
    padding: 3vw;
    text-align: left;

    img {
      padding: 1vw 2vw !important;
    }

    strong {
      color: #9BA5B1;
      font-size: 24px;
      font-weight: 500;
      padding: 2vw 0 !important;

      &:before {
        content: "";
        margin-left: 15px;
        padding-left: 15px;
        border-left: 0.8vw solid #9BD0F5;
        height: 6vw;
        display: inline-block;
        vertical-align: middle;
      }
    }

    span {
      display: block;
      padding-left: 2vw;
      padding-top: 1vw;
      color: #9BA5B1;
    }
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
    width: 16%;
    height: 25vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;

    ul {
      list-style-type: none;
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      margin: 2vw 1vw;
      width: 56vw;
      text-align: left;
    }

    td {
      height: 30vw !important;
    }

    .teshu {
      margin: 1vw 0;
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

    td:nth-child(3) {
      border-radius: 0 0 20px 20px;
    }
  }

  .tables {
    color: #57B2F3;
    background-color: #fff;
    border: 2px solid #9BD0F5;
    border-radius: 10px;
    border-collapse: separate;
    border-spacing: 0;
    border-spacing: 1;
    box-shadow: 13px 15px 0 #a2d4f7;
    border-spacing: 0;
    width: 7%;
    height: 91vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;
    word-wrap: break-word;
    word-break: break-all;
    width: 25vw;

    // td:last-of-type(0){
    //   background-color: #79828D;
    //     border-radius:  0 0 10px 10px ;
    //   }
    tr {
      text-align: center;


    }
  }
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
  }

  .list_dis {
    margin-top: 9vw;
    // width: 41vw;
    padding-left: 5vw;
    text-align: left;
    padding-bottom: 24vw;
    padding-right: 2vw;

    ul {
      padding-top: 1vw;
      list-style-type: none;

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
    margin: 2vw 0;
  }

  .icons {
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
    align-items: flex-end;
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
