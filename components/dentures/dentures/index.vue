<template>
  <di class="step comContent section">
    <div class="comContent meun main-container">
      <p>
        <nuxt-link style="color: #000; text-decoration: none;" to="/">首頁</nuxt-link>
      </p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙科服務</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">全口牙托及局部牙托</p>
    </div>

    <div class="step ">
      <div class="list">
        <ul class="step_list items-center main-container">
          <li>
            <div class="list_con">
              <img src="https://static.cmereye.com/static/lkximg/image/dentures/apple.png" alt="">
              <!-- <h3> 牙托即活動式假牙，</h3> -->
              <p>牙托即活動式假牙，分為局部及全口牙托兩種，可改善缺牙的影響。牙托底部有金屬鉤讓牙托能固定在真牙上，代替缺去的牙齒。活動式假牙可自行配戴，適合缺齒較多的人士使用。</p>
              <div class="cons">
                <div class="list_d">
                  <strong>局部牙托</strong>
                  <img src="https://static.cmereye.com/static/lkximg/image/dentures/Maskgroup1.png" alt="">
                  <span>局部牙托適用於口腔內尚有健康牙齒的人士，一般以金屬支架或金屬勾設計，以健康牙齒固定牙托，方便自行配戴。</span>
                </div>
                <div class="list_d quankou">
                  <strong>全口牙托&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                  <img src="https://static.cmereye.com/static/lkximg/image/dentures/Maskgroup2.png" alt="">
                  <span>全口牙托適用於所有牙齒已脫落的人士，利用口中黏膜和齒槽骨脊固定，可自行配戴。但全口牙托的咬合感與真牙相差甚大，需以口腔內肌肉及舌頭動作等移動假牙，容易產生不適，需要時間適應。</span>
                </div>
              </div>
            </div>
            <!-- <div class="list_dis">
            <strong>常見植牙的原因</strong>
            <ul>
              <li>傳統治療方法（牙套、牙橋及假牙托等）無法修復缺牙的情況</li>
              <li>缺牙影響儀容，嚴重甚至會令面部變形</li>
              <li>缺牙容易令牙齒移位，影響咬合、發音</li>
              <li>改善咀嚼問題，回復正常飲食</li>
            </ul>
          </div> -->
          </li>
        </ul>
      </div>
      <div class="bg-white pb-0 py-xs-2 main-container">
        <div class="flex justify-center texts">
          <h2>固定式假牙、活動式假牙<br>點揀好？</h2>
          <img class="icons" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
          <p>固定式假牙與活動式假牙各有其優缺點及適用的情況，通常會經由牙醫評估口內缺牙的情況及剩下牙齒的狀況，再進一步進行全面的考量及建議。</p>
        </div>
        <div class="boxs ">
          <p style="color: #57B2F3;">以下為你分析固定式/活動式假牙的優缺點：</p>
          <div class="box pcshow">
            <div class="card" @click="drawBegin(judgeActive)">
              <div class="table-box">
                <table class="tables">
                  <tr>
                    <td>適用人士</td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>物料</td>
                  </tr>
                  <tr>
                    <td>優點</td>
                  </tr>
                  <tr style=" background: #ECF7FC; ">
                    <td style="border-radius:  0 0 30px 30px;">缺點</td>
                  </tr>
                </table>
                <table class="tablesd">
                  <tr style="height: 2vw;">
                    <th>固定式假牙</th>
                  </tr>
                  <tr style="background: #ECF7FC;text-align: center;">
                    <td style="height: 2vw !important">牙套</td>
                  </tr>
                  <tr>
                    <td>
                      <ul class="teshu">
                        <li>牙根健康</li>
                        <li>牙齒損耗範圍太大</li>
                        <li>已接受杜牙根治療</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>
                      <ul>
                        <li>全金屬、全鋯、全瓷</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>保留真牙牙根</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td style="border-radius:  0 0 30px 30px;">
                      <ul>
                        <li>需修磨牙齒</li>
                      </ul>
                    </td>
                  </tr>
                </table>
                <table class="tablesd">
                  <tr style="height: 2vw;">
                    <th>固定式假牙</th>
                  </tr>
                  <tr style="height: 2vw; background: #9BD0F5;text-align: center; color: #fff;">
                    <td style="height: 2vw !important">牙橋</td>
                  </tr>
                  <tr>
                    <td>
                      <ul style="margin: 1.5vw 0;">
                        <li>缺牙兩旁尚有健康牙齒</li>
                        <li>牙齒連牙根被全隻拔起</li>

                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>
                      <ul>
                        <li>全金屬、全鋯、全瓷</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>提高假牙穩定度</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td style="border-radius:  0 0 30px 30px;">
                      <ul style="margin: 0.6vw 0;">
                        <li>需修磨兩側牙齒，若其中一顆牙齒出現問題，需重新製作整組牙橋</li>
                      </ul>
                    </td>
                  </tr>
                </table>

              </div>
              <div class="table-box">
                <table class="tables tableTo">
                  <tr>
                    <td>適用人士</td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>物料</td>
                  </tr>
                  <tr>
                    <td>優點</td>
                  </tr>
                  <tr style=" background: #ECF7FC; ">
                    <td style="border-radius:  0 0 30px 30px;">缺點</td>
                  </tr>
                </table>
                <table class="tablesd">
                  <tr style="height: 2vw;">
                    <th>活動式假牙</th>
                  </tr>
                  <tr style="background: #ECF7FC;text-align: center;">
                    <td style="height: 2vw !important">局部牙托</td>
                  </tr>
                  <tr style="  height: 6vw;">
                    <td>
                      <ul class="teshu">
                        <li>口腔內尚有健康牙齒</li>

                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>
                      <ul>
                        <li>金屬支架或金屬勾</li>
                        <li>牙齒部分多由塑膠材料製造</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" height: 8vw; ">
                    <td>
                      <ul>
                        <li>自由裝取</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td style="border-radius:  0 0 30px 30px;">
                      <ul>
                        <li>容易磨損口腔內璧，造成潰瘍及疼痛</li>
                        <li>適應期較長</li>
                      </ul>
                    </td>
                  </tr>
                </table>
                <table class="tablesd">
                  <tr style="height: 2vw;">
                    <th>活動式假牙</th>
                  </tr>
                  <tr style="height: 2vw; background: #9BD0F5;text-align: center; color: #fff;">
                    <td style="height: 2vw !important">全口牙托</td>
                  </tr>
                  <tr style="  height: 6vw;">
                    <td>
                      <ul style="margin: 1.5vw 0; ">
                        <li>口腔內已沒有健康牙齒</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC;     height: 7vw; ">
                    <td>
                      <ul>
                        <li>塑膠支架</li>
                        <li>牙齒部分多由塑膠製造</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" height: 8vw; ">
                    <td>
                      <ul>
                        <li>自由裝取</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC;  height: 8vw;">
                    <td style="border-radius:  0 0 30px 30px;">
                      <ul style="margin: 0.6vw 0;">
                        <li>咬合感覺與真牙的感覺相差甚大，適應期長</li>
                        <li>假牙容易晃動及移位</li>
                      </ul>
                    </td>
                  </tr>
                </table>

              </div>
            </div>
          </div>
        </div>
        <div id="mySwiper-one">
          <div v-swiper:mySwiper="swiperOptions" class="swiperWrap mbshow">
            <div class="swiper-wrapper ">
              <div class="swiper-slide box">
                <div class="table-box py-5" id="move_div">
                  <table class="tables">
                    <tr>
                      <td>適用人士</td>
                    </tr>
                    <tr style=" background: #ECF7FC">
                      <td>物料</td>
                    </tr>
                    <tr>
                      <td>優點</td>
                    </tr>
                    <tr style=" background: #ECF7FC; ">
                      <td style="border-radius:  0 0 30px 30px;">缺點</td>
                    </tr>
                  </table>
                  <table class="tablesd">
                    <tr style="height: 2vw;">
                      <th>固定式假牙</th>
                    </tr>
                    <tr style="background: #ECF7FC;text-align: center;">
                      <td style="height: 2vw !important">牙套</td>
                    </tr>
                    <tr>
                      <td>
                        <ul class="teshu">
                          <li>牙根健康</li>
                          <li>牙齒損耗範圍太大</li>
                          <li>已接受杜牙根治療</li>
                        </ul>
                      </td>
                    </tr>
                    <tr style=" background: #ECF7FC">
                      <td>
                        <ul>
                          <li>全金屬、全鋯、全瓷</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li>保留真牙牙根</li>
                        </ul>
                      </td>
                    </tr>
                    <tr style=" background: #ECF7FC">
                      <td style="border-radius:  0 0 30px 30px;">
                        <ul>
                          <li>需修磨牙齒</li>
                        </ul>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="swiper-slide box swiper-slideB">
                <div class="py-5">
                  <table class="tablesd">
                    <tr style="height: 2vw;">
                      <th>固定式假牙</th>
                    </tr>
                    <tr style="height: 2vw; background: #9BD0F5;text-align: center; color: #fff;">
                      <td style="height: 2vw !important">牙橋</td>
                    </tr>
                    <tr>
                      <td>
                        <ul style="margin: 1.5vw 12px;">
                          <li>缺牙兩旁尚有健康牙齒</li>
                          <li>牙齒連牙根被全隻拔起</li>

                        </ul>
                      </td>
                    </tr>
                    <tr style=" background: #ECF7FC">
                      <td>
                        <ul>
                          <li>全金屬、全鋯、全瓷</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li>提高假牙穩定度</li>
                        </ul>
                      </td>
                    </tr>
                    <tr style=" background: #ECF7FC">
                      <td style="border-radius:  0 0 30px 30px;">
                        <ul style="margin: 0.6vw 0;">
                          <li>需修磨兩側牙齒，若其中一顆牙齒出現問題，需重新製作整組牙橋</li>
                        </ul>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div id="mySwiper-two">
          <div v-swiper:mySwiper2="swiperOptionsTwo" class="swiperWrapTwo mbshow">
            <div class="swiper-wrapper">
              <div class="swiper-slide box">
                <div class="table-box py-5" id="move_div">
                  <table class="tables tableTo">
                  <tr>
                    <td>適用人士</td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>物料</td>
                  </tr>
                  <tr>
                    <td>優點</td>
                  </tr>
                  <tr style=" background: #ECF7FC; ">
                    <td style="border-radius:  0 0 30px 30px;">缺點</td>
                  </tr>
                </table>
                <table class="tablesd">
                  <tr style="height: 2vw;">
                    <th>活動式假牙</th>
                  </tr>
                  <tr style="background: #ECF7FC;text-align: center;">
                    <td style="height: 2vw !important">局部牙托</td>
                  </tr>
                  <tr style="  height: 6vw;">
                    <td>
                      <ul class="teshu">
                        <li>口腔內尚有健康牙齒</li>

                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>
                      <ul>
                        <li>金屬支架或金屬勾</li>
                        <li>牙齒部分多由塑膠材料製造</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" height: 8vw; ">
                    <td>
                      <ul>
                        <li>自由裝取</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td style="border-radius:  0 0 30px 30px;">
                      <ul>
                        <li>容易磨損口腔內璧，造成潰瘍及疼痛</li>
                        <li>適應期較長</li>
                      </ul>
                    </td>
                  </tr>
                </table>
                </div>
              </div>
              <div class="swiper-slide box swiper-slideB">
                <div class="py-5">

                  <table class="tablesd">
                  <tr style="height: 2vw;">
                    <th>活動式假牙</th>
                  </tr>
                  <tr style="height: 2vw; background: #9BD0F5;text-align: center; color: #fff;">
                    <td style="height: 2vw !important">全口牙托</td>
                  </tr>
                  <tr style="  height: 6vw;">
                    <td>
                      <ul style="margin: 1.5vw 0; ">
                        <li>口腔內已沒有健康牙齒</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC;     height: 7vw; ">
                    <td>
                      <ul>
                        <li>塑膠支架</li>
                        <li>牙齒部分多由塑膠製造</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" height: 8vw; ">
                    <td>
                      <ul>
                        <li>自由裝取</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC;  height: 8vw;">
                    <td style="border-radius:  0 0 30px 30px;">
                      <ul style="margin: 0.6vw 0;">
                        <li>咬合感覺與真牙的感覺相差甚大，適應期長</li>
                        <li>假牙容易晃動及移位</li>
                      </ul>
                    </td>
                  </tr>
                </table>
                </div>
               
                </div>
                
              </div>
               <div class="swiper-pagination swiper2" ></div>
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
        // navigation: {
        //   nextEl: "#mySwiper-one .swiper-button-next", //下一页dom节点
        //   prevEl: "#mySwiper-one .swiper-button-prev", //前一页dom节点
        // },
        on: {
          slideChange() {
            console.log('onSlideChangeEnd', this);
          },
          tap() {
            console.log('onTap', this);
          }
        }
      },
      swiperOptionsTwo: {
        // centeredSlides: true,
        // spaceBetween: 36,
        slidesPerView: "1.1",
        pagination: {
          el: '.swiper2',
          dynamicBullets: true,
        },
        // navigation: {
        //   nextEl: "#mySwiper-two .swiper-button-next", //下一页dom节点
        //   prevEl: "#mySwiper-two .swiper-button-prev", //前一页dom节点
        // },
        on: {
          slideChange() {
            console.log('onSlideChangeEnd', this);
          },
          tap() {
            console.log('onTap', this);
          }
        }
      },
      list: [{
        id: 0,
        title: '牙根刮治(深層洗牙)'
      },
      {
        id: 1,
        title: '牙肉翻瓣\n手術'
      },
      {
        id: 2,
        title: '牙周再生\n手術'
      }
      ],
      currentIndex: 0,   // 当前点击的tab的索引
      judgeActive: 1,
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
      // this.$nextTick(() => {
      //       // dom元素更新后执行，因此这里能正确打印更改之后的值
      //       if (this.judgeActive === 2 ) {
      //         this.judgeActive= 1
      //       }
      //   })
      //   console.log(this.judgeActive);
      // const objLeft = this.getOffsetLeft(document.getElementById("move_div"));//对象y位置
      // const mouseX = event.clientX+document.body.scrollLeft;//鼠标x位置
      // //计算点击的相对位置
      // const objX = mouseX-objLeft;
      // console.log(objX);
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
  .texts{
    margin-top: 136px;
  }
  .mbshow {
    display: none;
  }

  .card {
    border: 0px solid rgba(0, 0, 0, .125);
  }

  .cons {
    display: flex;
    margin: 3vw 0;
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

  .list_d {
    padding-left: 3vw;
    text-align: left;

    img {
      padding: 28px 28px 28px 17px!important;
}
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
      padding-left: 20px;
      padding-top: 10px;
      color: #9BA5B1;
      font-family: 'Noto Sans CJK TC';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;
      text-align: justify;
      letter-spacing: 0.1em;
    }


  .table-box {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin: 2vw 2vw;
    text-align: left !important;
  }

  .lists {
    display: flex;
    margin: 2vw 18vw;
  }

  .tableTo {
    height: 31vw !important;
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
      margin: 2vw 0;
    }

    .teshu {
      margin: 1vw 0;
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

    td:nth-child(3) {
      border-radius: 0 0 30px 30px;
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
    height: 22vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;

    // td:last-of-type(0){
    //   background-color: #79828D;
    //     border-radius:  0 0 10px 10px ;
    //   }
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
  }

  .list_cons {
    margin: 2vw 0;
  }

  .video {
    // background-image: linear-gradient(to bottom, #fff 27%, #ECF7FC 0);
    margin: 2vw 16vw;

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
    text-align: center;
    justify-content: center;
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
    margin-top: 198px;
    margin-bottom: 60px;
    // width: 41vw;
    width: 80%;

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
        padding: 18px 104px;
        font-size: 16px;
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
          border-left: 14px solid #9BD0F5;
          height: 44px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }

  .list {
    // margin-top: 5vw;
    background-image: linear-gradient(to bottom, #fff 341px, #ECF7FC 0);
  }
}

//md
@media only screen and (max-width: 760px) {

  .swiper-slideB{
    margin-left: -4.5vw;
  }
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
    display: none;
  }

  .box {
    // height: 1189px;
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

  // .py-5 {
  //   margin-top: 8rem!important;
  // }
  .quankou{
    padding-bottom: 86px !important;
  }
  .list_d {
    padding: 3vw;
    text-align: left;
    padding-bottom: 9vw ;
  
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

  .table-box {
    display: flex;
    align-items: flex-end;
    // justify-content: center;
    margin: 2vw 2vw;
    text-align: left !important;
    padding-bottom: 5vw;
  }

  .lists {
    display: flex;
    margin: 2vw 18vw;
  }

  .tablesd {
    margin-left: 3vw;
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
      margin: 2vw 0;
      width: 50vw;
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
      border-radius: 30px 30px 0 0;
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
    border-radius: 30px;
    border-collapse: separate;
    border-spacing: 0;
    border-spacing: 1;
    box-shadow: 13px 15px 0 #a2d4f7;
    border-spacing: 0;
    width: 7%;
    height: 121vw;
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

  .list_disd {
    li {
      font-size: 16px;
      color: #79828D;
      margin-left: 2vw;
    }
  }

  .list_cons {
    margin: 2vw 0;
  }

  .video {
    // background-image: linear-gradient(to bottom, #fff 27%, #ECF7FC 0);
    margin: 2vw 16vw;

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
    text-align: center;
    justify-content: center;
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

  .texts {
    p {
      color: #79828D;
      padding: 0vw 10vw;
    }
  }

  .list_con {
    margin-top: 7vw;
    margin-bottom: 6vw;
    // width: 41vw;
    // width: 63%;

    h3 {
      margin-top: 8vw;
      color: #57B2F3;
    }

    p {

      color: #57B2F3 !important;
    }

    img {
      margin: 0 !important;
    }
  }

  .list_dis {
    margin-top: 7vw;
    // width: 41vw;
    padding-left: 5vw;

    ul {
      padding: 4vw;
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
      width: 92%;
      margin-bottom: 12vw;
      padding: 0 2vw;
    }

    li {
      text-align: center;
      justify-content: center;
      color: #fff;
      // padding-left: 2vw;
      // margin: 0 3vw;
      // display: flex;
      align-content: center;


      p {

        // padding-left: 4vw;
        padding-top: 1vw;
        color: #9BA5B1;
        display: flex;
        align-content: center;
        text-align: center;
        justify-content: center;
        padding: 2vw 6vw;
      }

      strong {

        color: #9BA5B1;
        font-size: 23px;
        font-weight: 500;

        &:before {
          content: "";
          margin-left: 15px;
          padding-left: 15px;
          border-left: 1.8vw solid #9BD0F5;
          height: 6vw;
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
    // margin-top: 5vw;
    background-image: linear-gradient(to bottom, #fff 12%, #ECF7FC 0);

    ul {
      padding-left: 0rem;
    }
  }
}
</style>
