<template>
  <di class="step comContent section ">
    <div class="comContent meun main-container">
      <p><nuxt-link style="color: #000; text-decoration: none;" to="/">首頁</nuxt-link></p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙科服務</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">全瓷牙冠及全鋯牙冠</p>
    </div>
    <div class="step">
      <div class="list">
        <div class="coin_box main-container">
          <div class="coin">
            <img src="https://static.cmereye.com/static/lkximg/image/yacrown/apple.png" alt="">
          </div>
          <div class="list-dis">
            <strong>全瓷牙冠及全鋯牙冠</strong>
            <p>牙冠（牙套）是一種修復牙齒的方法，用於覆蓋形狀參差不齊或變色的牙齒。當牙齒因不同情況受到損壞，例如沒有足夠的牙齒結構進行補牙或需要修復裂縫的牙齒或保護脆弱的牙齒時，牙醫便會建議使用牙冠（牙套）。</p>
          </div>
        </div>
      </div>
      <div class="bg-white py-5 pb-0 py-xs-2 main-container">
        <div class="flex justify-center texts">
          <h2>全瓷牙冠及全鋯牙冠<br>點揀好？</h2>
          <img class="icons" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
          <p>有多種製作牙冠的物料，包括：金屬、全鋯及全瓷。每種物料各有優點，可讓患者按需要選擇。</p>
          <p style="color: #57B2F3;">以下為你分析全瓷牙冠及全鋯牙冠的優缺點：</p>
        </div>
        <div v-swiper:mySwiper="swiperOptions" class="swiperWrap mbshow" >
        <div class="swiper-wrapper ">
          <div class="swiper-slide box ">
            <div class="table-box py-5" id="move_div">
               <table class="tables">
                <tr>
                  <td>優點</td>
                </tr>
                <tr style=" background: #ECF7FC">
                  <td class="newsty">缺點</td>
                </tr>
              </table>
              <table class="tablesd">
                <tr style="height: 3vw;">
                  <th>金屬牙冠</th>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>耐用度高，適合需要咬合力較強的後牙</li>
                      <li>損耗度與真牙非常接近</li>
                      <li>堅固穩定，不用大幅度磨小牙齒，可保留大部分原牙</li>
                    </ul>
                  </td>
                </tr>
                <tr style=" background: #ECF7FC">
                  <td class="newsty">
                    <ul>
                      <li>金屬顏色，不適合用於前牙，影響外觀</li>
                      <li>價格較為昂貴</li>
                      <li>有致癌疑慮</li>
                      <li>較容易發炎或出現過敏</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="swiper-slide box swiper-slideB">
            <div class=" table-box py-5">
              <table class="tablesd tableKao">
                <tr style="height: 3vw;">
                  <th class="thd">烤瓷合金牙冠</th>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li style="padding: 3.4vw 0;">內層金屬，外層陶瓷，可以選擇外層顏色，較為美觀</li>
                    </ul>
                  </td>
                </tr>
                <tr style=" background: #ECF7FC">
                  <td class="newsty">
                    <ul>
                      <li>由於有內外兩層，相對較厚，需磨掉較多牙齒</li>
                      <li>牙套顏色不夠自然</li>
                      <li>牙套邊緣會顯出金屬黑影，影響外觀</li>
                      <li>表層陶瓷較金屬容易剝落或斷裂</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="swiper-slide box swiper-slideB">
            <div class="py-5 box-a">
               <table class="tablesd tablesdB">
                <tr style="height: 3vw;">
                  <th>全鋯牙冠</th>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>耐用度高，咬合力與金屬牙冠相近</li>
                      <li>自然，不影響美觀</li>
                    </ul>
                  </td>
                </tr>
                <tr style=" background: #ECF7FC">
                  <td class="newsty">
                    <ul>
                      <li>較全瓷牙冠厚，需磨掉較多牙齒</li>
                      <br>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="swiper-slide box swiper-slideC">
            <div class="py-5">
              <table class="tablesd">
                <tr style="height: 3vw;">
                  <th class="thd">全瓷牙冠</th>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>仿真度最高，透光度高，顏色相似，自然</li>
                      <li>適合用於前牙，外觀與真牙相似，不影響美觀</li>
                      <li>可根據需要的堅固度，選擇不同強度的物料</li>
                    </ul>
                  </td>
                </tr>
                <tr style=" background: #ECF7FC">
                  <td class="newsty">
                    <ul>
                      <li style="padding: 3.4vw 0 ;">比金屬牙套的強度較低</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          
        </div>
        <div class="swiper-pagination"></div>
      </div>
        <!-- <div id="table" class="carousel mbshow" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item box active ">
                <div class="table-box py-5" id="move_div">
                  <table class="tables">
                <tr>
                  <td>優點</td>
                </tr>
                <tr style=" background: #ECF7FC">
                  <td class="newsty">缺點</td>
                </tr>
              </table>
              <table class="tablesd">
                <tr style="height: 3vw;">
                  <th>金屬牙冠</th>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>耐用度高，適合需要咬合力較強的後牙</li>
                      <li>損耗度與真牙非常接近</li>
                      <li>堅固穩定，不用大幅度磨小牙齒，可保留大部分原牙</li>
                    </ul>
                  </td>
                </tr>
                <tr style=" background: #ECF7FC">
                  <td class="newsty">
                    <ul>
                      <li>金屬顏色，不適合用於前牙，影響外觀</li>
                      <li>價格較為昂貴</li>
                      <li>有致癌疑慮</li>
                      <li>較容易發炎或出現過敏</li>
                    </ul>
                  </td>
                </tr>
              </table>
                </div>
              </div>
              <div class="carousel-item box  py-5">
                <div class="table-box py-5" id="move_div">
                  <table class="tablesd">
                <tr style="height: 3vw;">
                  <th class="thd">烤瓷合金牙冠</th>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li style="padding: 3.4vw 0;">內層金屬，外層陶瓷，可以選擇外層顏色，較為美觀</li>
                    </ul>
                  </td>
                </tr>
                <tr style=" background: #ECF7FC">
                  <td class="newsty">
                    <ul>
                      <li>由於有內外兩層，相對較厚，需磨掉較多牙齒</li>
                      <li>牙套顏色不夠自然</li>
                      <li>牙套邊緣會顯出金屬黑影，影響外觀</li>
                      <li>表層陶瓷較金屬容易剝落或斷裂</li>
                    </ul>
                  </td>
                </tr>
              </table>
                </div>
                 
            </div>
            <div class="carousel-item box py-5">
              <table class="tablesd">
                <tr style="height: 3vw;">
                  <th>全鋯牙冠</th>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>耐用度高，咬合力與金屬牙冠相近</li>
                      <li>自然，不影響美觀</li>
                    </ul>
                  </td>
                </tr>
                <tr style=" background: #ECF7FC">
                  <td class="newsty">
                    <ul>
                      <li>較全瓷牙冠厚，需磨掉較多牙齒</li>
                      <br>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>
            <div class="carousel-item box py-5">
              <table class="tablesd">
                <tr style="height: 3vw;">
                  <th class="thd">全瓷牙冠</th>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>仿真度最高，透光度高，顏色相似，自然</li>
                      <li>適合用於前牙，外觀與真牙相似，不影響美觀</li>
                      <li>可根據需要的堅固度，選擇不同強度的物料</li>
                    </ul>
                  </td>
                </tr>
                <tr style=" background: #ECF7FC">
                  <td class="newsty">
                    <ul>
                      <li style="padding: 3.4vw 0 ;">比金屬牙套的強度較低</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>
            </div>
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#table" data-bs-slide-to="0" class="active"></button>
              <button type="button" data-bs-target="#table" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#table" data-bs-slide-to="2" ></button>
              <button type="button" data-bs-target="#table" data-bs-slide-to="3"></button>
            </div>
          </div> -->
        <div class="box pcshow">
          <div class="card" @click="drawBegin(judgeActive)">
            <div class="table-box">
              <table class="tables">
                <tr>
                  <td>優點</td>
                </tr>
                <tr style=" background: #ECF7FC">
                  <td class="newsty">缺點</td>
                </tr>
              </table>
              <table class="tablesd">
                <tr style="height: 57px;">
                  <th>金屬牙冠</th>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>耐用度高，適合需要咬合力較強的後牙</li>
                      <li>損耗度與真牙非常接近</li>
                      <li>堅固穩定，不用大幅度磨小牙齒，可保留大部分原牙</li>
                    </ul>
                  </td>
                </tr>
                <tr style=" background: #ECF7FC">
                  <td class="newsty">
                    <ul>
                      <li>金屬顏色，不適合用於前牙，影響外觀</li>
                      <li>價格較為昂貴</li>
                      <li>有致癌疑慮</li>
                      <li>較容易發炎或出現過敏</li>
                    </ul>
                  </td>
                </tr>
              </table>
              <table class="tablesd">
                <tr style="height: 57px;">
                  <th class="thd">烤瓷合金牙冠</th>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li style="padding: 3.4vw 0;">內層金屬，外層陶瓷，可以選擇外層顏色，較為美觀</li>
                    </ul>
                  </td>
                </tr>
                <tr style=" background: #ECF7FC">
                  <td class="newsty">
                    <ul>
                      <li>由於有內外兩層，相對較厚，需磨掉較多牙齒</li>
                      <li>牙套顏色不夠自然</li>
                      <li>牙套邊緣會顯出金屬黑影，影響外觀</li>
                      <li>表層陶瓷較金屬容易剝落或斷裂</li>
                    </ul>
                  </td>
                </tr>
              </table>
              <table class="tablesd">
                <tr style="height: 57px;">
                  <th>全鋯牙冠</th>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>耐用度高，咬合力與金屬牙冠相近</li>
                      <li>自然，不影響美觀</li>
                    </ul>
                  </td>
                </tr>
                <tr style=" background: #ECF7FC">
                  <td class="newsty">
                    <ul>
                      <li>較全瓷牙冠厚，需磨掉較多牙齒</li>
                      <br>
                    </ul>
                  </td>
                </tr>
              </table>
              <table class="tablesd">
                <tr style="height: 57px;">
                  <th class="thd">全瓷牙冠</th>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>仿真度最高，透光度高，顏色相似，自然</li>
                      <li>適合用於前牙，外觀與真牙相似，不影響美觀</li>
                      <li>可根據需要的堅固度，選擇不同強度的物料</li>
                    </ul>
                  </td>
                </tr>
                <tr style=" background: #ECF7FC">
                  <td class="newsty">
                    <ul>
                      <li style="padding: 3.4vw 0 ;">比金屬牙套的強度較低</li>
                    </ul>
                  </td>
                </tr>
              </table>
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
            // spaceBetween: -10,
            // speed: 1500,
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
        title: '智慧齒脫除'
      },
      {
        id: 1,
        title: '手術性脫牙'
      },
      {
        id: 2,
        title: '非手術性\n脫牙'
      }
      ],
      currentIndex: 0,   // 当前点击的tab的索引
    }
  },
  computed: {

  },
  methods: {
     drawBegin (e){
      if( e === 1){
      this.judgeActive = 2
      }else{
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
.texts {
  text-align: center;
  margin-top: 2vw;

  p {
    color: #79828D;
    padding: 10px 0;
    font-size: 16px;
  }

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
@media only screen and (min-width: 760px) {
  .mbshow{
    display: none;
  }
  .card {
    border: 0px solid rgba(0, 0, 0, .125);
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
    background-image: linear-gradient(to bottom, #fff 53%, #ECF7FC 0);

  }

  // .icons {
  //   margin-bottom: 3.5vw;
  //   margin-top: 0.5vw;
  // }

  .coin_box {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 80px 0;
  }

  .coin {
    padding: 1vw 2vw;
    display: block;
    text-align: center;
    img{
      padding: 0 20px;
      width: 414px;
      height: 272px;
    }

    p {
      color: #79828D;
      font-size: 16px;
      padding: 1vw 0;
    }
  }

  .list_d {
    padding-left: 3vw;
    text-align: left;

    strong {
      color: #9BA5B1;
      font-size: 24px;
      font-weight: 500;
      padding: 0vw !important;

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

  .table-box {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin: 2vw 0;
  }

  .lists {
    display: flex;

    // margin: 2vw 18vw;
    strong {
      color: #79828D;
      font-size: 26px;
      font-weight: 500;
      padding: 0vw !important;

      &:before {
        content: "";
        margin-left: 15px;
        padding-left: 15px;
        border-left: 0.8vw solid #9BD0F5;
        height: 2vw;
        display: inline-block;
        vertical-align: middle;
      }
    }
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

    td {
      border-radius: 0 0 30px 30px;
      height: 306px !important;
    }
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
    height: 620px;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;

    td {

      border-radius: 0 0 30px 30px;
    }

    tr {
      text-align: center;


    }
  }

  .list_disd {
    li {
      font-size: 21px;
      color: #79828D;
      margin-left: 2vw;
    }

    p {
      color: #9BA5B1;
      padding: 2vw 0 4vw 0.5vw;
    }
  }

  .list_cons {
    margin: 1vw 0;
  }

  .video {
    // background-image: linear-gradient(to bottom, #fff 27%, #ECF7FC 0);
    margin: 6vw 16vw;

    .cons-box {
      padding-bottom: 6vw;
    }
  }

  .videos {
    background-image: linear-gradient(to bottom, #fff 0%, #ECF7FC 0);
    // background-color: #ECF7FC;
    margin: 0 8vw;
    height: 26vw;
  }

  .video_con {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    // background-image: linear-gradient(to bottom, #fff 65%, #ECF7FC 0);
  }

  .left {
    padding: 2vw 5vw 2vw 2vw !important;

  }

  .right {
    // padding-left: 14vw !important;
    padding: 2vw 0vw 2vw 2vw !important;

  }

  .gconds {
    display: flex;
    margin: 0 auto;
    width: 68%;
    background: #fff;
    padding-left: 8vw;
    // text-align: center;
    // justify-content: center;
  }

  .contents {

    // background-color: #fff;
    .gcond {
      display: flex;
      margin: 0 auto;
      width: 68%;
      background: #fff;
    }

    .content {
      padding: 2vw 1vw;
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
    // background-image: linear-gradient(to top, #fff 37%, #ECF7FC 0);

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
          font-size: initial;
          // font-size: 1.2rem;
        }
      }
    }
  }

  .list_con {
    margin-top: 7vw;
    margin-bottom: 6vw;
    // width: 41vw;
    width: 63%;

    h3 {
      margin-top: 1vw;
      color: #57B2F3;
    }

    p {
      color: #57B2F3 !important;
    }

    img {
      margin: 0 !important;
    }
  }

  .list-dis {
    margin-top: 179px;
    width: 42%;
    padding-left: 15px;
    text-align: left !important;

    p {
        padding-left: 11px;
        padding-top: 22px;
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
      // padding-left: 4vw;
      color: #9BA5B1;
      font-size: 23px;
      font-weight: 500;

      &:before {
        content: "";
        margin-left: 15px;
        padding-left: 15px;
        border-left: 0.8vw solid #9BD0F5;
        height: 2vw;
        display: inline-block;
        vertical-align: middle;
      }
    }

    ul {
      padding-top: 1vw;
      list-style-type: disc;

      li {
        color: #9BA5B1;

      }
    }
  }

  .list_dis {
    margin-top: 1vw;
    width: 34%;
    // width: 41vw;
    padding-left: 5vw;
    text-align: left !important;
    ;

    strong {
      // padding-left: 4vw;
      color: #9BA5B1;
      font-size: 23px;

      &:before {
        content: "";
        margin-left: 15px;
        padding-left: 15px;
        border-left: 0.8vw solid #9BD0F5;
        height: 2vw;
        display: inline-block;
        vertical-align: middle;
      }
    }

    ul {
      padding-top: 1vw;
      list-style-type: disc;

      li {
        color: #9BA5B1;

      }
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
      // width: 32vw;
      // height: 24vw;
      margin-bottom: 12vw;
      padding: 0 2vw;
    }

    li {
      text-align: center;
      justify-content: center;
      color: #fff;
      // padding-left: 2vw;
      // margin: 0 3vw;
      display: flex;
      align-content: center;


      p {
        // padding-left: 4vw;
        padding-top: 1vw;
        color: #9BA5B1;
        display: flex;
        align-content: center;
        text-align: center;
        justify-content: center;


      }

      strong {
        padding-left: 4vw;
        color: #9BA5B1;

        &:before {
          content: "";
          margin-left: 15px;
          padding-left: 15px;
          border-left: 0.8vw solid #9BD0F5;
          height: 2vw;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }

  .list {
    // margin-top: 5vw;
    background-image: linear-gradient(to bottom, #fff 40%, #ECF7FC 0);
  }
}

//md
@media only screen and (max-width: 760px) {
  ::v-deep .swiper-pagination-bullet-active{
    background-color: #57B2F3;
    width: 15px ;
    height: 15px ;
}
::v-deep .swiper-pagination-bullet{
  width: 15px ;
  height: 15px ;
   background-color:#9BD0F5;
}
  .pcshow{
    display: none; 
  }
  .newsty {
    background: #ECF7FC;
    border-radius: 0 0 9px 9px !important;

  }

  .py-5 {
    padding-top: 0rem !important;
  }

  .box {
    // height: 480px;
    // background: #eee;
    // padding: 10px 0;
    white-space: pre-line;
    /* 禁止超出自动换行 */
    // overflow-y: auto;
    /* 横向滑动 */
    .box-a{
      // margin: 0 4vw;
    }
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
    // margin-top: 13vw;
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
    // justify-content: center;
    margin: 0vw 4vw;
    width: 100%;
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
      width: 50vw;
    }

    td {
      height: 50vw !important;
    }

    th {
      text-align: center;
      color: #fff;
      background-color: #57B2F3;
      border-radius: 18px 18px 0 0;
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
    height: 101vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;
    word-wrap: break-word;
    word-break: break-all;
    width: 18vw;

    tr {
      text-align: center;
    }
  }

  .texts {
    p {
      color: #79828D;
      padding: 1vw 9vw !important;
    }

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
    background-image: linear-gradient(to bottom, #fff 53%, #ECF7FC 0);

  }

  // .icons {
  //   margin-bottom: 3.5vw;
  //   margin-top: 0.5vw;
  // }

  .coin_box {
    // display: flex;
    justify-content: center;
    text-align: center;
    padding: 7vw 0;
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

  .list_d {
    padding-left: 3vw;
    text-align: left;

    strong {
      color: #9BA5B1;
      font-size: 24px;
      font-weight: 500;
      padding: 0vw !important;

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



  .list_disd {
    li {
      font-size: 21px;
      color: #79828D;
      margin-left: 2vw;
    }

    p {
      color: #9BA5B1;
      padding: 2vw 0 4vw 0.5vw;
    }
  }

  .list_cons {
    margin: 1vw 0;
  }

  .video {
    // background-image: linear-gradient(to bottom, #fff 27%, #ECF7FC 0);
    margin: 6vw 16vw;

    .cons-box {
      padding-bottom: 6vw;
    }
  }

  .videos {
    background-image: linear-gradient(to bottom, #fff 0%, #ECF7FC 0);
    // background-color: #ECF7FC;
    margin: 0 8vw;
    height: 26vw;
  }

  .video_con {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    // background-image: linear-gradient(to bottom, #fff 65%, #ECF7FC 0);
  }


  .gconds {
    display: flex;
    margin: 0 auto;
    width: 68%;
    background: #fff;
    padding-left: 8vw;
    // text-align: center;
    // justify-content: center;
  }

  .contents {

    // background-color: #fff;
    .gcond {
      display: flex;
      margin: 0 auto;
      width: 68%;
      background: #fff;
    }

    .content {
      padding: 2vw 1vw;
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

  // .active {
  //   float: inherit;
  //   border: 10px solid hsla(204, 68%, 65%, 0.3) !important;
  //   // background-clip:content-box;
  //   background-clip: padding-box;
  // }

  .Advantage {
    display: flex;
    justify-content: center;
    position: relative;
    // background-image: linear-gradient(to top, #fff 37%, #ECF7FC 0);

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
          font-size: initial;
          // font-size: 1.2rem;
        }
      }
    }
  }

  .list_con {
    margin-top: 7vw;
    margin-bottom: 6vw;
    // width: 41vw;
    width: 63%;

    h3 {
      margin-top: 1vw;
      color: #57B2F3;
    }

    p {
      color: #57B2F3 !important;
    }

    img {
      margin: 0 !important;
    }
  }

  .list-dis {
    margin-top: 8vw;
    // width: 34%;
    // width: 41vw;
    padding-left: 5vw;
    text-align: left !important;
    ;

    p {
      color: #9BA5B1;
      padding: 3vw;

    }

    strong {
      // padding-left: 4vw;
      color: #9BA5B1;
      font-size: 23px;
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

    ul {
      padding-top: 1vw;
      list-style-type: disc;

      li {
        color: #9BA5B1;

      }
    }
  }

  .list_dis {
    margin-top: 1vw;
    width: 34%;
    // width: 41vw;
    padding-left: 5vw;
    text-align: left !important;
    ;

    strong {
      // padding-left: 4vw;
      color: #9BA5B1;
      font-size: 23px;

      &:before {
        content: "";
        margin-left: 15px;
        padding-left: 15px;
        border-left: 0.8vw solid #9BD0F5;
        height: 2vw;
        display: inline-block;
        vertical-align: middle;
      }
    }

    ul {
      padding-top: 1vw;
      list-style-type: disc;

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
      // width: 32vw;
      // height: 24vw;
      margin-bottom: 12vw;
      padding: 0 2vw;
    }

    li {
      text-align: center;
      justify-content: center;
      color: #fff;
      // padding-left: 2vw;
      // margin: 0 3vw;
      display: flex;
      align-content: center;


      p {
        // padding-left: 4vw;
        padding-top: 1vw;
        color: #9BA5B1;
        display: flex;
        align-content: center;
        text-align: center;
        justify-content: center;


      }

      strong {
        padding-left: 4vw;
        color: #9BA5B1;

        &:before {
          content: "";
          margin-left: 15px;
          padding-left: 15px;
          border-left: 0.8vw solid #9BD0F5;
          height: 2vw;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }

  .list {
    // margin-top: 5vw;
    background-image: linear-gradient(to bottom, #fff 40%, #ECF7FC 0);
  }

  .meun {
    padding-left: 6vw;
    display: flex;
  }

  ul {
    padding: 0;

    img {
      // width: 24vw;
      // padding-left: 9vw;
      // padding-bottom: 6vw;
    }
  }

  // li {
  //   background-image: linear-gradient(to bottom, #fff 30%, #ECF7FC 0);
  // }

  p {
    padding: 1vw;
    padding-top: 1vw;
    color: #9BA5B1;
  }

  strong {
    // padding-top: 2vw;
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

  .list {
    margin-top: 5vw;
    background-image: linear-gradient(to bottom, #fff 22%, #ECF7FC 0);
  }
::v-deep .carousel-indicators .active {
  opacity: 1 !important;
  background-color: #57B2F3;
  width: 14px;
  height: 14px;
}
}
</style>
