<template>
  <di class="step comContent  section">
    <div class="comContent meun  main-container">
      <p>
        <nuxt-link style="color: #000; text-decoration: none;" to="/">首頁</nuxt-link>
      </p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙科服務</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">植牙</p>
    </div>
    <div class="step">
      <div class="list">
        <div class="step_list items-center main-container">
          <div class="bac-box">
            <img src="https://static.cmereye.com/static/lkximg/image/implant/Group1.png" alt="">
            <div class="list_con">
              <strong>植牙</strong>
              <p>植牙，俗稱為「種牙」，是處理缺牙的一種治療方法。牙醫會把植體植入病人的牙槽骨內，待骨整合後用以支撐上面的牙套。</p>
            </div>
            <div class="list_dis">
              <strong style="padding: 0;">常見植牙的原因</strong>
              <ul>
                <div>
                  <li>傳統治療方法（牙套、牙橋及假牙托等）無法修復缺牙的情況</li>
                  <li>缺牙影響儀容，嚴重甚至會令面部變形</li>
                  <li>缺牙容易令牙齒移位，影響咬合、發音</li>
                  <li>改善咀嚼問題，回復正常飲食</li>
                </div>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div v-show='currentIndex == 0'>
        <div class="Advantage">
          <img src="https://static.cmereye.com/static/lkximg/image/implant/Advantage.png" alt="">
          <div class="Advanbutton" style="box-sizing: content-box;">
            <ul>
              <li @click='handleClick(index)' class="guoc" :class='currentIndex == index ? "active" : ""' :key='item.id'
                v-for='(item, index) in list' style="box-sizing: content-box;">
                <p>{{ item.title }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="contents main-container">
          <div class="gcond">
            <div class="gcon">
              <div class=" left">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/num1.svg" height="50vw" width="50vw"
                  alt="">
                <p>進行全面口腔檢查、X光或3D電腦掃描，確定植體的安裝位置，同時需確認患者的身體狀況及病歷</p>
              </div>
              <div class="num left">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/num2.svg" height="50vw" width="50vw"
                  alt="">
                <p>注射麻醉藥</p>
              </div>
              <div class=" left">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/3.svg" height="50vw" width="50vw"
                  alt="">
                <p>翻開牙齦在適合安裝的位置鑽孔，植入植體，作為假牙的牙根，有需要時可以利用手術導航系統輔助植入理想位置，再縫合傷口</p>
              </div>
            </div>
            <div class="gcon">
              <div class="num content ">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/num4.svg" height="50vw" width="50vw"
                  alt="">
                <p>2至3個月後，當牙骨與植體癒合，牙醫會安放癒合帽</p>
              </div>
              <div class="content">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/num5.svg" height="50vw" width="50vw"
                  alt="">
                <p>牙齦癒合後，再進行下一階段的療程進行掃描式印模，再由牙科技師製作義齒</p>
              </div>
              <div class="content">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/6.svg" height="50vw" width="50vw"
                  alt="">
                <p>將義齒固定在植體上，補上缺去的牙齒</p>
              </div>
            </div>
          </div>
        </div>
        <div class="video main-container">
          <div class="video_con" v-loading="loading">
            <iframe class="iframesty" ref="Iframe" src="https://www.youtube.com/embed/loJSJebtxG8"
              title="【拆解植牙全過程】#希小牙實驗室" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
          <div class="flex justify-center texts">
            <h2>植牙、假牙點揀好？</h2>
            <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
            <p class="serve_con">想解決缺牙問題，但又唔太了解，唔知揀邊種好？解決缺牙嘅方法可以分為「植牙」及「假牙」兩大類。想知自己適合邊種方法？記住要諮詢牙科醫生嘅專業意見。</p>
          </div>
          <div v-swiper:mySwiper="swiperOptions" class="swiperWrap mbshow">
            <div class="swiper-wrapper ">
              <div class="swiper-slide box">
                <div class="table-box py-5" id="move_div">
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
                </div>
              </div>
              <div class="swiper-slide box swiper-slideB">
                <div class="py-5">
                  <table class="tablesd tabledd">
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
            <div class="swiper-pagination"></div>
          </div>
          <div class="box pcshow" id="notice">
            <div class="card">
              <div class="table-box" id="move_div" @click="drawBegin(judgeActive)">
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
                  <tr style="height: 47px;">
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
                  <tr style="height: 47px;">
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
          <!-- <div class="carousel-indicators mbshow">
              <button type="button" data-bs-target="#demo" :class="judgeActive === 1 ? 'active' : ''" ></button>
              <button type="button" data-bs-target="#demo" :class="judgeActive === 2 ? 'active' : ''"></button>
            </div> -->
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
      <div v-show='currentIndex == 1'>
        <div class="Advantage">
          <img src="https://static.cmereye.com/static/lkximg/image/implant/AdvantageBG.png" alt="">
          <div class="Advanbutton" style="box-sizing: content-box;">
            <ul>
              <li @click='handleClick(index)' class="guoc" :class='currentIndex == index ? "active" : ""' :key='item.id'
                v-for='(item, index) in list' style="box-sizing: content-box;">
                <p>{{ item.title }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="contents main-container">
          <div class="gcond">
            <div class="gcon">
              <div class="content lefts">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/num1.svg" height="50vw" width="50vw"
                  alt="">
                <p>清理牙齒外觀，於相鄰牙齒上打磨出可以讓牙橋放置的空間</p>
              </div>
              <div class="content lefts">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/num2.svg" height="50vw" width="50vw"
                  alt="">
                <p>進行牙齒印模，製作臨時牙橋</p>
              </div>
              <div class="content  lefts">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/3.svg" height="50vw" width="50vw"
                  alt="">
                <p>牙醫建議牙橋的材質，理想顏色、形狀和色澤</p>
              </div>
            </div>
            <div class="gcon">
              <div class="content right" style="margin-bottom: 1.6rem;">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/num4.svg" height="50vw" width="50vw"
                  alt="">
                <p>取得病人共識後，牙醫會把牙齒印模及其他資料交給牙科技師訂製假牙</p>
              </div>
              <div class="content right">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/num5.svg" height="50vw" width="50vw"
                  alt="">
                <p>牙橋訂製一般需要多個工作天，期間病人只能使用臨時牙橋。臨時牙橋只為保護牙齒，並不能照常進食</p>
              </div>
              <div class="content right">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/6.svg" height="50vw" width="50vw"
                  alt="">
                <p>成品製作完成後，牙醫會作最後微調，令牙橋與病人口腔有完全的密合度</p>
              </div>
            </div>
          </div>
        </div>
        <div class="videos main-container">
          <div class="video_con">
            <div class="cosn"></div>
            <!-- <img src="https://static.cmereye.com/static/lkximg/image/implant/vedio.png" alt=""> -->
          </div>
          <div class="flex justify-center texts" style="padding-top: 1vw;">
            <h2>植牙、假牙點揀好？</h2>
            <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
            <p class="serve_con">想解決缺牙問題，但又唔太了解，唔知揀邊種好？解決缺牙嘅方法可以分為「植牙」及「假牙」兩大類。<br>想知自己適合邊種方法？記住要諮詢牙科醫生嘅專業意見。</p>
          </div>
          <div v-swiper:mySwiper2="swiperOptions2" class="swiperWrap mbshow">
            <div class="swiper-wrapper ">
              <div class="swiper-slide box">
                <div class="table-box py-5" id="move_div">
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
                </div>
              </div>
              <div class="swiper-slide box swiper-slideB">
                <div class="py-5">
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
            <div class="swiper-pagination" id="swiper2"></div>
          </div>
          <div class="box pcshow">
            <div class="card">
              <div class="table-box" @touchmove="touchMove($event, item)" @click="drawBegin(judgeActive)">
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
                  <tr style="height: 47px;">
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
                  <tr style="height: 47px;">
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
      swiperOptions: {
        // centeredSlides: true,
        // spaceBetween: 10,
        slidesPerView: "1.1",
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
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
      swiperOptions2: {
        // centeredSlides: true,
        // spaceBetween: 10,
        slidesPerView: "1.1",
        pagination: {
          el: '#swiper2',
          dynamicBullets: true,
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
      flags: false,
      position: { x: 0, y: 0, left: 0, top: 0 },
      top: 0,
      left: 0,
      judgeActive: 1,
      loading: false, //默认不显示loading
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
  mounted() {
    this.iframeLoad();

  },
  methods: {

    // 手指在屏幕上移动
    touchMove(ev) {
      // 未到达500毫秒就移动则不触发长按，清空按时器
      console.log(ev);
      clearTimeout(this.timeOutEvent);
    },
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
    end() { // 拖动结束的操作
      this.flags = false
    },
    getOffsetLeft(obj) {
      let tmp = obj.offsetLeft;
      let val = obj.offsetParent;
      while (val != null) {
        tmp += val.offsetLeft;
        val = val.offsetParent;
      }
      return tmp;
    },
    // 调用方法
    iframeLoad() {
      this.loading = true;
      const iframe = this.$refs.Iframe;
      // 兼容处理
      if (iframe.attachEvent) {
        // IE
        iframe.attachEvent("onload", () => {
          this.loading = false;
        });
      } else {
        // 非IE
        iframe.onload = () => {
          this.loading = false;
        };
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

  .num {
    margin-bottom: 1.5rem;
  }

  .bac-box {
    display: flex;
  }

  .mbshow {
    display: none;
  }

  .iframesty {
    width: 80%;
    height: 690px
  }

  .cosn {
    background-color: #fff;
    width: 80%;
    height: 100px;
  }

  .serve_con {
    color: #79828D;
    margin-top: 46px;
    // margin-bottom: 2vw;
    font-size: 18px;
    padding: 0 285px;
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
    padding-top: 32px;  
    // margin: 2vw 0;

  }

  .lists {
    display: flex;
    padding: 43px 342px;
  }

  .texts {
    margin-top: 80px;
  }

  .tablesd {
    margin-left: 30px;
    color: #57B2F3;
    background-color: #fff;
    border: 3px solid #9BD0F5;
    border-radius: 32px;
    border-collapse: separate;
    border-spacing: 0;
    box-shadow: 13px 15px 0 #a2d4f7;
    border-spacing: 0;
    width: 20%;
    height: 500px;
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
    height: 428px;
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
        border-left: 14px solid #9BD0F5;
        height: 44px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  .list_cons {
    margin: 20px 0;
  }

  .video {
    background-image: linear-gradient(to bottom, #fff 375px, #ECF7FC 0);
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

  .left {
    display: flex;
    padding: 30px 10px 70px 20px !important;
  }

  .lefts {
    padding: 5vw 0vw 5vw 11vw !important;
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
      padding: 30px 10px 56px 20px !important;
      display: flex;
      align-items: self-start;

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
    // float: inherit;
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
      width: 932px;
    }

  }

  ::v-deep .Advanbutton {
    display: flex;
    position: absolute;
    bottom: 5rem;

    ul {
      display: flex;

      li {
        padding: 30px;
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
    // width: 41vw;
  }

  .list_dis {
    margin-top: 198px;
    // width: 41vw;
    padding-left: 5vw;

    ul {
      padding-top: 1vw;
      list-style-type: disc;

      li {
        color: #9BA5B1;
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 400;
        font-size: 17.5px;
        line-height: 22px;
        text-align: justify;
        letter-spacing: 0.1em;
      }
    }
  }

  .card {
    background-color: #fff0;
    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 0.25rem;
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

    .bac-box {

      text-align: left;
      color: #fff;
      // padding-left: 2vw;
      // margin: 0 3vw;
      // display: flex;

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
        /* identical to box height */

        letter-spacing: 0.1em;
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
@media only screen and (max-width: 768px) {
  .swiper-container {
    margin-top: -37px;
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

  .tableBox {
    width: 100%;
  }

  .left {
    padding: 5vw 1vw;
    display: flex;
    align-items: center;
  }

  .iframesty {
    width: 100%;
    height: 234px
  }

  .box {
    //  height: 380px;
    // background: #eee;
    // padding: 10px 0;
    white-space: nowrap;
    /* 禁止超出自动换行 */
    // overflow-y: auto;
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
    // align-items: flex-end;
    // justify-content: center;
    padding: 6vw 3vw;
    // justify-content: center;
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
    // border: 10px solid hsla(204, 68%, 65%, 0.3) !important;
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
      margin-top: 10vw;
      width: 126%;
      height: 100%;
    }

  }

  .list_con {
    margin: 8vw 0;

    p {
      padding: 3vw 4vw;
    }
  }

  .list_dis {
    li {
      color: #9BA5B1;
    }

    ul {
      padding: 3vw 8vw;
      list-style-type: disc;
      // padding: 3vw 7vw;
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

    img {
      display: flex;
      margin: 0 auto;
    }
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