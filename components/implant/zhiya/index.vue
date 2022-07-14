<template>
  <di class="step section">
    <div class="meun">
      <p style="color:#79828D">首頁</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙科服務</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">植牙</p>
    </div>
    <div class="step">
      
      <div class="list">
        <ul class="step_list items-center ">
          <li class="bac-box">
            <img src="@/asset/image/implant/Group1.png" alt="">
            <div class="list_con">
              <strong>植牙</strong>
              <p>植牙，俗稱為「種牙」，是處理缺牙的一種治療方法。牙醫會把植體植入病人的牙槽骨內，待骨整合後用以支撐上面的牙套。</p>
            </div>
            <div class="list_dis">
              <strong>常見植牙的原因</strong>
              <ul>
                <li>傳統治療方法（牙套、牙橋及假牙托等）無法修復缺牙的情況</li>
                <li>缺牙影響儀容，嚴重甚至會令面部變形</li>
                <li>缺牙容易令牙齒移位，影響咬合、發音</li>
                <li>改善咀嚼問題，回復正常飲食</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div v-if='currentIndex == 0 ? true : false'>
        <div class="Advantage">
          <img src="@/asset/image/implant/AdvantageBG.png" alt="">
          <div class="Advanbutton" style="box-sizing: content-box;">
            <ul>
              <li @click='handleClick(index)' class="guoc" :class='currentIndex == index ? "active" : ""' :key='item.id'
                v-for='(item, index) in list' style="box-sizing: content-box;">
                <p>{{ item.title }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="contents">
          <div class="gcond">
            <div class="gcon">
              <div class="content left">
                <img src="@/asset/image/implant/num1.svg" height="50vw" width="50vw" alt="">
                <p>進行全面口腔檢查、X光或3D電腦掃描，確定植體的安裝位置，同時需確認患者的身體狀況及病歷</p>
              </div>
              <div class="content left">
                <img src="@/asset/image/implant/num2.svg" height="50vw" width="50vw" alt="">
                <p>注射麻醉藥</p>
              </div>
              <div class="content left">
                <img src="@/asset/image/implant/3.svg" height="50vw" width="50vw" alt="">
                <p>翻開牙齦在適合安裝的位置鑽孔，植入植體，作為假牙的牙根，有需要時可以利用手術導航系統輔助植入理想位置，再縫合傷口</p>
              </div>
            </div>
            <div class="gcon">
              <div class="content ">
                <img src="@/asset/image/implant/num4.svg" height="50vw" width="50vw" alt="">
                <p>2至3個月後，當牙骨與植體癒合，牙醫會安放癒合帽</p>
              </div>
              <div class="content">
                <img src="@/asset/image/implant/num5.svg" height="50vw" width="50vw" alt="">
                <p>牙齦癒合後，再進行下一階段的療程進行掃描式印模，再由牙科技師製作義齒</p>
              </div>
              <div class="content">
                <img src="@/asset/image/implant/6.svg" height="50vw" width="50vw" alt="">
                <p>將義齒固定在植體上，補上缺去的牙齒</p>
              </div>
            </div>
          </div>
        </div>
        <div class="video">

          <div class="video_con">
            
            <!-- <video width="100%" height="100%"  controls="controls" preload="none"  poster="@/asset/image/implant/vedio.png">
              <source src="@/asset/websitevideo/zhiya.mp4" type="video/mp4">
              你的浏览器不支持HTML5视频。
            </video> -->

            <video controls="controls" >
              <source src="@/asset/websitevideo/zhiya.mp4"  type="video/mp4">
              您的浏览器不支持 video 标签。
          </video>
          </div>
          <div class="flex justify-center texts">
            <h2>植牙、假牙點揀好？</h2>
            <img src="@/asset/image/about-me/serve/Vector.png" alt="">
            <p class="serve_con">想解決缺牙問題，但又唔太了解，唔知揀邊種好？解決缺牙嘅方法可以分為「植牙」及「假牙」兩大類。想知自己適合邊種方法？記住要諮詢牙科醫生嘅專業意見。</p>
          </div>

          <div class="box">
            <div class="card">
              <div class="table-box">
            <table class="tables">
              <tr>
                <td>植牙</td>
              </tr>
              <tr style=" background: #ECF7FC">
                <td>固定假牙</td>
              </tr>
              <tr>
                <td>活動假牙</td>
              </tr>
            </table>
            <table class="tablesd">
              <tr style="height: 3vw;">
                <th>優點</th>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>效果堅固持久</li>
                    <li>無需要磨細附近牙齒</li>
                  </ul>
                </td>
              </tr>
              <tr style=" background: #ECF7FC">
                <td>
                  <ul>
                    <li>承托力較高，良好咀嚼力</li>
                    <li>無須手術，簡便安全</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>容易配戴，方便清潔</li>
                    <li>代替缺牙，有助咀嚼功能</li>
                  </ul>
                </td>

              </tr>
            </table>
            <table class="tablesd">
              <tr style="height: 3vw;">
                <th class="thd">缺點</th>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li style="padding: 0.6vw;">療程較長</li>
                  </ul>
                </td>
              </tr>
              <tr style=" background: #ECF7FC">
                <td>
                  <ul>
                    <li style="padding: 0.6vw;">需磨小牙齒及附近健康牙齒</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>容易引致牙肉萎縮，<br>一段時間後需更換新牙托</li>
                  </ul>
                </td>

              </tr>
            </table>
          </div>
            </div>
          </div>
          <div class="lists">
            <div class="list_disd">
              <strong>療程後注意事項</strong>
              <div class="list_cons">
                <li>避免進食太硬的食物</li>
                <li>需定期覆診，檢查植牙的狀況</li>
                <li>需要徹底清潔牙齒，避免植體發炎，導致植體鬆動</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="Advantage">
          <img src="@/asset/image/implant/AdvantageBG.png" alt="">
          <div class="Advanbutton" style="box-sizing: content-box;">
            <ul>
              <li @click='handleClick(index)' class="guoc" :class='currentIndex == index ? "active" : ""' :key='item.id'
                v-for='(item, index) in list' style="box-sizing: content-box;">
                <p>{{ item.title }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="contents">
          <div class="gcond">
            <div class="gcon">
              <div class="content">
                <img src="@/asset/image/implant/num1.svg" height="50vw" width="50vw" alt="">
                <p>清理牙齒外觀，於相鄰牙齒上打磨出可以讓牙橋放置的空間</p>
              </div>
              <div class="content">
                <img src="@/asset/image/implant/num2.svg" height="50vw" width="50vw" alt="">
                <p>清理牙齒外觀，於相鄰牙齒上打磨出可以讓牙橋放置的空間</p>
              </div>
              <div class="content ">
                <img src="@/asset/image/implant/3.svg" height="50vw" width="50vw" alt="">
                <p>牙醫建議牙橋的材質，理想顏色、形狀和色澤</p>
              </div>
            </div>
            <div class="gcon">
              <div class="content right">
                <img src="@/asset/image/implant/num4.svg" height="50vw" width="50vw" alt="">
                <p>取得病人共識後，牙醫會把牙齒印模及其他資料交給牙科技師訂製假牙</p>
              </div>
              <div class="content right">
                <img src="@/asset/image/implant/num5.svg" height="50vw" width="50vw" alt="">
                <p>牙橋訂製一般需要多個工作天，期間病人只能使用臨時牙橋。臨時牙橋只為保護牙齒，並不能照常進食</p>
              </div>
              <div class="content right">
                <img src="@/asset/image/implant/6.svg" height="50vw" width="50vw" alt="">
                <p>成品製作完成後，牙醫會作最後微調，令牙橋與病人口腔有完全的密合度</p>
              </div>
            </div>
          </div>
        </div>
        <div class="videos">
          <div class="video_con">
            <div class="cosn" ></div>
            <!-- <img src="@/asset/image/implant/vedio.png" alt=""> -->
          </div>
          <div class="flex justify-center texts" style="padding-top: 1vw;">
            <h2>植牙、假牙點揀好？</h2>
            <img src="@/asset/image/about-me/serve/Vector.png" alt="">
            <p class="serve_con">想解決缺牙問題，但又唔太了解，唔知揀邊種好？解決缺牙嘅方法可以分為「植牙」及「假牙」兩大類。<br>想知自己適合邊種方法？記住要諮詢牙科醫生嘅專業意見。</p>
          </div>
            <div class="box">
            <div class="card">
              <div class="table-box">
            <table class="tables">
              <tr>
                <td>植牙</td>
              </tr>
              <tr style=" background: #ECF7FC">
                <td>固定假牙</td>
              </tr>
              <tr>
                <td>活動假牙</td>
              </tr>
            </table>
            <table class="tablesd">
              <tr style="height: 3vw;">
                <th>優點</th>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>效果堅固持久</li>
                    <li>無需要磨細附近牙齒</li>
                  </ul>
                </td>
              </tr>
              <tr style=" background: #ECF7FC">
                <td>
                  <ul>
                    <li>承托力較高，良好咀嚼力</li>
                    <li>無須手術，簡便安全</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>容易配戴，方便清潔</li>
                    <li>代替缺牙，有助咀嚼功能</li>
                  </ul>
                </td>

              </tr>
            </table>
            <table class="tablesd">
              <tr style="height: 3vw;">
                <th class="thd">缺點</th>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li style="padding: 0.6vw;">療程較長</li>
                  </ul>
                </td>
              </tr>
              <tr style=" background: #ECF7FC">
                <td>
                  <ul>
                    <li style="padding: 0.6vw;">需磨小牙齒及附近健康牙齒</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>容易引致牙肉萎縮，<br>一段時間後需更換新牙托</li>
                  </ul>
                </td>

              </tr>
            </table>
          </div>
            </div>
          </div>
          <div class="lists">
            <div class="list_disd">
              <strong>療程後注意事項</strong>
              <div class="list_cons">
                <li>避免進食太硬的食物</li>
                <li>需定期覆診，檢查植牙的狀況</li>
                <li>需要徹底清潔牙齒，避免植體發炎，導致植體鬆動</li>
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
  .cosn{
    background-color: #fff;
    width:80%;
    height: 6vw;
  }
  .serve_con {
    color: #79828D;
    margin-top: 2vw;
    // margin-bottom: 2vw;
    font-size: 18px;
    padding: 0 16vw;
  }

  .video_con {
    video {
      width: 100%;
    }
  }

  .table-box {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin: 2vw 0;
  }

  .lists {
    display: flex;
    margin: 0 18vw;
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
    width: 20%;
    height: 25vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;

    ul {
      list-style-type: disc;
      margin: 0;
      font-weight: 500;
      font-size: 17px;
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
    height: 22vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;

    tr {
      text-align: center;
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
    margin: 0 8vw;
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
    padding: 5vw 13vw 5vw 2vw !important;

  }

  .right {
    padding-left: 14vw !important;
  }

  .contents {
    background-color: #fff;

    .gcond {
      display: flex;
      margin: 0 auto;
      width: 68%;
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
    margin-top: 7vw;
    width: 41vw;
  }

  .list_dis {
    margin-top: 7vw;
    // width: 41vw;
    padding-left: 5vw;

    ul {
      padding-top: 1vw;
      list-style-type: disc;

      li {
        color: #9BA5B1;

      }
    }
  }
.card {
    background-color: #fff0;
    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 0.25rem;
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
          border-left: 0.3vw solid #9BD0F5;
          height: 1vw;
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
       height: 414px;
    // background: #eee;
    // padding: 10px 0;
    white-space: nowrap;
    /* 禁止超出自动换行 */
    overflow-y: auto;
    /* 横向滑动 */
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

  .serve_con {
    padding: 0 5vw;
    text-align: left;
  }

  .texts {
    margin-top: 13vw;
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
        height: 70px;
        /* line-height: 94px; */
        align-self: center;
        width: 70px;
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

  .table-box {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin: 2vw 4vw;
  }

  .lists {
    display: flex;
    margin: 0 1vw;
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
    width: 20%;
    height: 89vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;

    ul {
      list-style-type: disc;
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      margin: 1vw 7vw;
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
   height: 89vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;

    tr {
      text-align: center;
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

  .video {
    background-image: linear-gradient(to bottom, #fff 0%, #ECF7FC 0);
    // margin: 0 8vw;
  }

  .videos {
    background-image: linear-gradient(to bottom, #fff 0%, #ECF7FC 0);
    // background-color: #ECF7FC;
    // margin: 0 8vw;

  }

  .video_con {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    // background-image: linear-gradient(to bottom, #fff 65%, #ECF7FC 0);
  }

  // .right{
  //   padding-left: 14vw !important;
  // }
  .contents {
    background-color: #fff;

    .gcond {
      // display: flex;
      // margin: 0 auto;
      padding: 0 6vw;

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
    overflow: hidden;
    display: flex;
    justify-content: center;
    position: relative;
    background-image: linear-gradient(to top, #fff 37%, #ECF7FC 0);
    margin-top: 15vw;

    img {
      width: 126%;
    }

  }

  .list_con {
    p {
      padding: 3vw 7vw;
    }
  }

  .list_dis {
    li {
      color: #9BA5B1;
    }

    ul {
      padding: 3vw 7vw;
    }
  }

  .meun {
    padding-left: 6vw;
    display: flex;
  }

  ul {
    padding: 0;

    img {
      padding-left: 9vw;
      padding-bottom: 6vw;
    }
  }

  .bac-box {
    background-image: linear-gradient(to bottom, #fff 30%, #ECF7FC 0);
  }

  // li {
  //   background-image: linear-gradient(to bottom, #fff 30%, #ECF7FC 0);
  // }

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
