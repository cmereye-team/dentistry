<template>
  <di class="step comContent section">
    <div class="comContent meun main-container">
      <p>
        <nuxt-link style="color: #000; text-decoration: none;" to="/">首頁</nuxt-link>
      </p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙科服務</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">矯齒</p>
    </div>
    <div class="step">
      <div class="list">
        <ul class="step_list items-center main-container">
          <div class="jiaochi">
            <img src="https://static.cmereye.com/static/lkximg/image/toothStraighten/apple.png" alt="">
            <div class="list_con">
              <strong>矯齒（箍牙）</strong>
              <p>
                矯齒（箍牙）治療除了能矯正不整齊排列的牙齒，改善外觀外，更能有助減低患上各種牙齒問題的風險。
              </p>
            </div>
            <div class="list_dis">
              <strong style="padding:0px;">矯齒（箍牙）目的</strong>
              <ul>
                <li>因先天或其他因素引致上顎或下顎較為突出，影響臉型，透過矯齒可改善臉部與牙齒的平衡</li>
                <li>當出現上下顎咬合不正的情況，容易導致蛀牙、影響進食及口腔健康，矯齒能有效改善情況</li>
                <li>牙齒排列不整，例如前後重疊、高低不等，影響進食、發音、清潔等，更容易引致牙周病等情況，矯齒能將位置對齊，減少對口腔健康的影響</li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
      <div class="video main-container">

        <div class="flex justify-center texts">
          <h2>矯齒（箍牙）過程</h2>
          <img class="icons" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
          <div class="contents">
            <div class="gcond">
              <div class="gcon">
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num1.svg" height="50vw" width="50vw"
                    alt="">
                  <p>醫生會先進行檢查及評估，確認矯齒的需要</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num2.svg" height="50vw" width="50vw"
                    alt="">
                  <p>拍攝牙齒外觀照片，包括全口腔及側面X光照片，以印製牙模</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/3.svg" height="50vw" width="50vw"
                    alt="">
                  <p>醫生講解情況及治療方案</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num4.svg" height="50vw" width="50vw"
                    alt="">
                  <p>配戴牙箍及定期覆診</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num5.svg" height="50vw" width="50vw"
                    alt="">
                  <p>矯齒完成後，需定期覆診，晚上佩戴固定器，防止牙齒移位</p>
                </div>
                <div class="content ">
                  <p>*不建議牙齒還沒完成發育、智慧齒還沒長出的人士接受牙齒矯正治療</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="lists mbshow-list">
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
        </div> -->
        <div class="bg-white py-5 pb-0 py-xs-2  bacsty">
          <div class="flex justify-center texts">
            <h2>想箍牙要點揀？</h2>
            <img class="icons" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
            <p>箍牙主要可分為三類，固定式外箍、內箍及透明配戴式牙箍。矯正時間因人而異，一般為一年至一年半左右，複雜個案需要兩年或以上。心思思想箍牙，但你又知唔知道各種牙箍的分別？</p>
          </div>
          <div v-swiper:mySwiper="swiperOptions" class="swiperWrap mbshow">
            <div class="swiper-wrapper ">
              <div class="swiper-slide box">
                <div class="table-box " id="move_div">
                  <table class="tables">
                    <tr>
                      <td>原理</td>
                    </tr>
                    <tr style=" background: #ECF7FC">
                      <td>物料</td>
                    </tr>
                    <tr>
                      <td>拆卸</td>
                    </tr>
                    <tr style=" background: #ECF7FC; ">
                      <td>美觀</td>
                    </tr>
                    <tr>
                      <td>清潔</td>
                    </tr>
                    <tr style=" background: #ECF7FC; ">
                      <td>成效</td>
                    </tr>
                    <tr>
                      <td>其他</td>
                    </tr>
                  </table>
                  <table class="tablesd">
                    <tr style="height: 2vw;">
                      <th>固定式外箍/內箍</th>
                    </tr>
                    <tr>
                      <td>
                        <ul class="teshu">
                          <li>將矯正器黏貼在牙齒表面，以鋼絲連上牙釘，施加外力移動牙齒</li>
                        </ul>
                      </td>
                    </tr>
                    <tr style=" background: #ECF7FC;">
                      <td>
                        <ul>
                          <li>金屬/ 搪瓷/ 樹脂</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li>不能自行拆卸</li>
                        </ul>
                      </td>
                    </tr>
                    <tr style=" background: #ECF7FC ">
                      <td>
                        <ul>
                          <li>•牙箍固定於牙齒外側會外露（固定式外箍）</li>
                          <li>•牙箍固定於牙齒內側，較難察覺（固定式內箍）</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li>需以工具輔助清潔矯正器與鋼絲死角</li>
                        </ul>
                      </td>
                    </tr>
                    <tr style=" background: #ECF7FC ">
                      <td>
                        <ul>
                          <li>比較適合齒列嚴重不正的人士</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li>牙箍可能會引起不適</li>
                        </ul>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="swiper-slide box swiper-slideB">
                <table class="tablesd">
                  <tr style="height: 2vw;">
                    <th>透明配戴式牙箍</th>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>運用電腦模擬牙齒移動位置，按牙齒移動速度，定期更換度身訂造牙箍，慢慢移動牙齒</li>

                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>
                      <ul>
                        <li>醫學塑膠</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>能隨時戴上及脫下</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>
                      <ul style="margin: 0.6vw 0;">
                        <li>透明牙箍，近乎隱形，極難察覺</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul style="margin: 0.6vw 0;">
                        <li>拆卸後獨立清洗</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>
                      <ul style="margin: 0.6vw 0;">
                        <li>適合輕度或中度齒列不正的人士</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul style="margin: 0.6vw 0;">
                        <li>隱形牙套表面平滑</li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>

        </div>
        <div class="boxs pcshow">
          <div class="box">
            <div class="card" @click="drawBegin(judgeActive)">
              <div class="table-box">
                <table class="tables">
                  <tr>
                    <td>原理</td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>物料</td>
                  </tr>
                  <tr>
                    <td>拆卸</td>
                  </tr>
                  <tr style=" background: #ECF7FC; ">
                    <td>美觀</td>
                  </tr>
                  <tr>
                    <td>清潔</td>
                  </tr>
                  <tr style=" background: #ECF7FC; ">
                    <td>成效</td>
                  </tr>
                  <tr>
                    <td>其他</td>
                  </tr>
                </table>
                <table class="tablesd">
                  <tr style="height: 2vw;">
                    <th>固定式外箍/內箍</th>
                  </tr>
                  <tr>
                    <td>
                      <ul class="teshu">
                        <li>將矯正器黏貼在牙齒表面，以鋼絲連上牙釘，施加外力移動牙齒</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC;">
                    <td>
                      <ul>
                        <li>金屬/ 搪瓷/ 樹脂</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>不能自行拆卸</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC ">
                    <td>
                      <ul>
                        <li>•牙箍固定於牙齒外側會外露（固定式外箍）</li>
                        <li>•牙箍固定於牙齒內側，較難察覺（固定式內箍）</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>需以工具輔助清潔矯正器與鋼絲死角</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC ">
                    <td>
                      <ul>
                        <li>比較適合齒列嚴重不正的人士</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>牙箍可能會引起不適</li>
                      </ul>
                    </td>
                  </tr>
                </table>
                <table class="tablesd">
                  <tr style="height: 2vw;">
                    <th>透明配戴式牙箍</th>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>運用電腦模擬牙齒移動位置，按牙齒移動速度，定期更換度身訂造牙箍，慢慢移動牙齒</li>

                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>
                      <ul>
                        <li>醫學塑膠</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>能隨時戴上及脫下</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>
                      <ul style="margin: 0.6vw 0;">
                        <li>透明牙箍，近乎隱形，極難察覺</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul style="margin: 0.6vw 0;">
                        <li>拆卸後獨立清洗</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>
                      <ul style="margin: 0.6vw 0;">
                        <li>適合輕度或中度齒列不正的人士</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul style="margin: 0.6vw 0;">
                        <li>隱形牙套表面平滑</li>
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
    </div>
  </di>
</template>
<script>
export default {
  data() {
    return {
      swiperOptions: {
        // centeredSlides: true,
        // spaceBetween: 36,
        slidesPerView: "1.1",
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next", //下一页dom节点
          prevEl: ".swiper-button-prev", //前一页dom节点
        },
        on: {
          slideChange() {
            console.log('onSlideChangeEnd', this);
          },
          tap() {
            console.log('onTap', this);
          }
        }
      },
      judgeActive: 1,
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
    drawBegin(e) {
      if (e === 1) {
        this.judgeActive = 2
      } else {
        this.judgeActive = 1
      }
    },
    handleClick(index) {
      // console.log(index);
      this.currentIndex = index
      console.log('测试===========', this.currentIndex);
    }
  }
}

</script>

<style lang="scss" scoped>
::v-deep .carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  border: 0 !important;
  flex: 0 1 auto;
  width: 12px;
  height: 12px;
  padding: 0;
  margin-right: 8px;
  margin-left: 8px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #9BD0F5;
  background-clip: padding-box;
  border: 0;
  margin-top: 1rem;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: .5;
  border-radius: 100%;
  transition: opacity .6s ease;
}

::v-deep .carousel-indicators {
  position: inherit;
}

::v-deep .carousel-indicators .active {
  opacity: 1 !important;
  background-color: #57B2F3;
  width: 14px;
  height: 14px;
}

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

.bacsty {
  background-color: #ECF7FC !important;
}

//pc
@media only screen and (min-width: 760px) {
  .mbshow {
    display: none;
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
    // width: 7%;
    height: 25vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;
    word-wrap: break-word;
    word-break: break-all;
    width: 6vw;

    // td:last-of-type(0){
    //   background-color: #79828D;
    //     border-radius:  0 0 10px 10px ;
    //   }
    tr {
      height: 6vw;
      text-align: center;
    }
  }

  .pcnnot {
    display: none !important;
  }

  .icons {
    margin-bottom: 40px;
    margin-top: 10px;
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
   
    padding-bottom: 5vw;
  }

  .lists {
    display: flex;
    margin: 0 8vw;
    margin-top: 3vw;
  }

  .card {
    border: 0;
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
    width: 23%;
    height: 25vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;

    tr {
      height: 6vw;
    }

    li {
      padding: 0 1vw;
    }

    ul {
      list-style-type: none;
      // text-align: center;
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      padding: 0;
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

  .card {
    display: inline-block;
    /*行内块元素*/
    // line-height: 300px;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff0 !important;
    background-clip: border-box;
    // border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 0.25rem;
    margin-top: 25px;
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
    background-image: linear-gradient(to bottom, #fff 491px, #ECF7FC 0);
    // margin: 132px 8vw;
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

    .content {
      padding: 1.5vw 1vw;
      display: flex;
      align-items: center;

    }

    .mbshow {
      display: none;
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
        height: 75px;
        /* line-height: 94px; */
        align-self: center;
        width: 75px;
        display: flex;
        border-radius: 100%;
        margin: 1px 74px;
        text-align: center;
        flex-wrap: wrap;
        align-content: space-around;
        justify-content: center;

        p {
          display: block;
          color: #57B2F3;
          margin-bottom: 0rem;
          font-family: 'Noto Sans CJK TC';
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 22px;
          display: flex;
          align-items: center;
          text-align: center;
          letter-spacing: 0.1em;
          // font-size: 1.2rem;
        }
      }
    }
  }

  .list_con {
    margin-top: 198px;
    width: 42%;
  }

  .list_dis {
    margin-top: 198px;
    // width: 41vw;
    padding-left: 5vw;

    ul {
      padding-top: 1vw;
      list-style-type: none;

      li {
        color: #9BA5B1;
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        text-align: justify;
        letter-spacing: 0.1em;

      }
    }
  }

  .texts {
    p {
      padding: 0 50px;
      font-size: 18px;
    }
  }

  .meun {
    padding-left: 146px;
    // margin-top: 1vw;
    display: flex;
    font-size: 16px;
  }

  .step_list {
    // margin: 0 20vw;

    img {
      padding: 0 20px;
      width: 414px;
      height: 272px;
    }

    ul {
      list-style-type: disc;
    }

    .jiaochi {
      text-align: left;
      color: #fff;
      // padding-left: 2vw;
      // margin: 0 3vw;
      display: flex;

      p {
        padding-left: 40px;
        padding-top: 14px;
        color: #9BA5B1;
        display: flex;
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 400;
        font-size: 17.5px;
        line-height: 22px;
        text-align: justify;
        letter-spacing: 0.1em;
      }

      strong {
        padding-left: 27px;
        color: #9BA5B1;
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-size: 20px;
        line-height: 30px;

        &:before {
          content: "";
          margin-left: 15px;
          padding-left: 15px;
          border-left: 11px solid #9BD0F5;
          height: 35px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }

  .list {
    height: 472px;
    margin-top: 82px;
    background-image: linear-gradient(to bottom, #fff 22%, #ECF7FC 0);
  }
}

//md
@media only screen and (max-width: 760px) {
  ::v-deep .swiper-pagination-bullet-active {
    background-color: #57B2F3;
    width: 15px;
    height: 15px;
  }

  ::v-deep .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    background-color: #9BD0F5;
  }

  .pcshow {
    display: none !important;
  }

  .texts {
    p {
      color: #79828D;
      padding: 1vw 4vw;
    }
  }

  .box {
    // height: 970px;
    // background: #eee;
    // padding: 10px 0;
    white-space: pre-line;
    /* 禁止超出自动换行 */
    // overflow-y: auto;
    /* 横向滑动 */
    // margin: 0 0 0 8vw;
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
    background-color: #fff0 !important;
    background-clip: border-box;
    border: 0px solid rgba(255, 255, 255, 0);
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

  // .py-5 {
  //   margin-top: 8rem !important;
  // }

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
      list-style-type: disc;
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      margin: 2vw 0;
      width: 56vw;
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
    height: 211vw;
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

  .mbshow-list {
    display: none !important;
  }

  .mbshow {
    padding: 1.5vw 1vw;
    display: flex;
    align-items: center;

    p {
      color: #9BA5B1 !important;
      font-size: 14px !important;
      margin-bottom: 1rem !important;
    }

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
    // justify-content: center;
     margin: 0 3vw;
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
      text-align: left;
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
    background-image: linear-gradient(to bottom, #fff 27%, #ECF7FC 0);
    margin-top: 90px;
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
    // width: 80%;
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

    .content {
      padding: 5.5vw 1vw;
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
    // width: 41vw;
  }

  .list_dis {
    margin-top: 9vw;
    // width: 41vw;
    // padding-left: 5vw;

    ul {
      list-style-type: disc;
      padding: 6vw 8vw;

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
      // width: 22vw;
      // height: 14vw;
      // margin-bottom: 12vw;
      // padding: 0 2vw;
    }

    .jiaochi {
      text-align: left;
      color: #fff;
      // padding-left: 2vw;
      // margin: 0 3vw;
      // display: flex;

      p {
        padding-left: 3vw;
        padding-top: 3vw;
        color: #9BA5B1;
        display: flex;
      }

      strong {
        // padding-left: 4vw;
        color: #9BA5B1;

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
  }

  p {
    padding: 1vw;
  }

  .list {
    margin-top: 5vw;
    background-image: linear-gradient(to bottom, #fff 22%, #ECF7FC 0);
  }
}
</style>
