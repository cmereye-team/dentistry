<template>
  <di class="step comContent section">
    <div class="comContent meun main-container">
      <p><nuxt-link style="color: #000; text-decoration: none;" to="/">首頁</nuxt-link></p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙科服務</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">拔牙及智慧齒脫除</p>
    </div>
    <div class="step">
      <div class="list">
        <div class="coin_box main-container">
          <div class="coin">
            <img src="https://static.cmereye.com/static/lkximg/image/exelcymosis/apple.png" alt="">
          </div>
          <div class="list-dis">
            <strong>一般需要拔牙的原因</strong>
            <ul>
              <li> 牙齒嚴重蛀壞或崩裂，無法修補</li>
              <li> 嚴重牙周病，牙齒變得十分鬆動
              </li>
              <li> 牙齒生長於不理想位置，令附近組織受損及感染
              </li>
              <li> 牙齒外觀及結構出現問題
              </li>
              <li> 配合牙齒矯正治療
              </li>
            </ul>
          </div>
        </div>
        <!-- <ul class="step_list items-center ">
          <li>
            <div class="list_con">
              <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/apple.png" alt="">
              <h3> 牙周病屬慢性炎症，</h3>
              <p>分為輕微的牙齦炎及嚴重的牙周炎兩種。會令牙齒鬆脫、移位，影響外貌及口腔健康。</p>
              <div style="display: flex; margin: 3vw 0;">
                <div class="list_d">
                  <strong>牙齦炎如何形成？</strong>
                  <span>牙齦及牙齒邊緣長期積聚牙菌膜，細菌會分泌毒素刺激牙齦，引致發炎。牙齦發炎時，牙肉會紅腫，刷牙時會流牙血，牙齒表面也會積聚十分粗糙的牙石。</span>
                </div>
                <div class="list_d">
                  <strong>牙周病如何形成？</strong>
                  <span>當牙齦炎情況持續，形成「牙周袋」，食物殘渣、牙菌膜和牙石等更易堆積在內，使牙周組織持續受破壞，而出現牙周炎。如牙齦邊緣滲出膿液，甚至長出牙瘡，牙齦和牙槽骨會慢慢萎縮，以致部分牙根外露，牙齒失去支撐，甚至脫落。</span>
                </div>
              </div>
            </div>
          </li>
        </ul> -->
      </div>
      <div class="bg-white py-5 pb-0 py-xs-2 main-container">
        <div class="flex justify-center texts">
          <h2>智慧齒脫除</h2>
          <img class="icons" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
        </div>
        <div class="coin_box">
          <div class="coin">
            <img src="https://static.cmereye.com/static/lkximg/image/exelcymosis/Maskgroup.png" alt="">
          </div>
          <div class="list_dis">
            <strong>智慧齒可能導致的口腔問題</strong>
            <ul>
              <li>由於智慧齒生長位置較後，難以清潔，容易積聚牙菌膜，引致蛀牙</li>
              <li>當智慧齒出現橫生或斜生情況，鄰近的牙齒會受到壓力，嚴重更會令牙槽骨萎縮，甚至鬆脫</li>
              <li>如出現智慧齒阻生情況，牙齒會被牙齦覆蓋，因而令食物渣滓和細菌藏在牙齦和牙冠之間，造成牙齦發炎和腫脹。嚴重更會使整個面頰出現腫脹，進食時亦會感到痛楚，阻生的智慧齒一般需要進行手術方可拔除</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex justify-center texts  main-container">
        <h2>拔牙及智慧齒脫除過程</h2>
        <img class="icons" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
        <p>拔牙一般不需要進行手術，但若牙齒歪生或非常接近神經，則有機會需要進行手術式脫牙。</p>
      </div>
      <div v-if='currentIndex == 0 ? true : false'>
        <div class="boxs">
          <div class="Advantage">
            <img src="https://static.cmereye.com/static/lkximg/image/exelcymosis/AdvantageBG.png" alt="">
            <div class="Advanbutton" style="box-sizing: content-box;">
              <ul>
                <li @click='handleClick(index)' class="guoc" :class='currentIndex == index ? "active" : ""'
                  :key='item.id' v-for='(item, index) in list' style="box-sizing: content-box;">
                  <p>{{ item.title }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="contents  main-container">
            <div class="gconds">
              <div class="gcon">
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num1.svg" height="50vw" width="50vw" alt="">
                  <p>透過口腔檢查及口腔全景X光片，了解智慧齒生長的狀況及準確位置</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num2.svg" height="50vw" width="50vw" alt="">
                  <p>注射局部麻醉藥</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/3.svg" height="50vw" width="50vw" alt="">
                  <p>如智慧齒出現阻生，需把牙齦割開、翻起，將智慧齒切成數個部分再逐一移除</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num4.svg" height="50vw" width="50vw" alt="">
                  <p>清潔及縫合傷口</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num5.svg" height="50vw" width="50vw" alt="">
                  <p>預約覆診<br><span style="color:#57B2F3 !important;">手術後腫痛的情況會維持兩至三日，醫生會處方止痛藥和抗生素（需要時服用）舒緩情況，一般約一星期後便完全康復。</span></p>
                </div>
              </div>
            </div>
          </div>
          <div class="video main-container">
            <div class="lists">
              <div class="list_disd">
                <strong>療程後注意事項</strong>
                <div class="list_cons">
                  <li>一般需咬緊棉花或紗布約三十分鐘至一小時止血，其間可如常吞口水</li>
                  <li>進食後以溫水或鹽水輕輕漱口，保持傷口清潔</li>
                  <li>避免觸碰傷口上的凝固血塊，引致出血</li>
                  <li>避免食用堅硬和粗糙的食物</li>
                  <li>避免飲用含酒精飲品</li>
                  <li>避免吃過冷或過熱的食物</li>
                  <li>避免大力漱口或吐痰</li>
                  <p>*拔牙後，傷口有機會出現腫脹，一般會數天後消退，可按醫生處方服藥或以冷敷消腫及紓緩不適。如傷口持續或大量出血，需盡快聯絡醫生，或視乎嚴重程度前往就近急症室求診。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if='currentIndex == 1 ? true : false'>
        <div class="boxs">
          <div class="Advantage">
            <img src="https://static.cmereye.com/static/lkximg/image/exelcymosis/AdvantageBG2.png" alt="">
            <div class="Advanbutton" style="box-sizing: content-box;">
              <ul>
                <li @click='handleClick(index)' class="guoc" :class='currentIndex == index ? "active" : ""'
                  :key='item.id' v-for='(item, index) in list' style="box-sizing: content-box;">
                  <p>{{ item.title }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="contents main-container">
            <div class="gconds">
              <div class="gcon">
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num1.svg" height="50vw" width="50vw" alt="">
                  <p>注射局部麻醉或全身麻醉藥（特殊情況下）</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num2.svg" height="50vw" width="50vw" alt="">
                  <p>翻起牙齦</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/3.svg" height="50vw" width="50vw" alt="">
                  <p>除去部分覆蓋牙齒的牙槽骨，使牙根外露</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num4.svg" height="50vw" width="50vw" alt="">
                  <p>把牙齒搖鬆或分割成幾部分取出</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num5.svg" height="50vw" width="50vw" alt="">
                  <p>縫合傷口</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/6.svg" height="50vw" width="50vw" alt="">
                  <p>咬緊棉花或紗布止血</p>
                </div>
              </div>
            </div>
          </div>
          <div class="video main-container">
            <div class="lists">
              <div class="list_disd">
                <strong>療程後注意事項</strong>
                <div class="list_cons">
                  <li>一般需咬緊棉花或紗布約三十分鐘至一小時止血，其間可如常吞口水</li>
                  <li>進食後以溫水或鹽水輕輕漱口，保持傷口清潔</li>
                  <li>避免觸碰傷口上的凝固血塊，引致出血</li>
                  <li>避免食用堅硬和粗糙的食物</li>
                  <li>避免飲用含酒精飲品</li>
                  <li>避免吃過冷或過熱的食物</li>
                  <li>避免大力漱口或吐痰</li>
                  <p>*拔牙後，傷口有機會出現腫脹，一般會數天後消退，可按醫生處方服藥或以冷敷消腫及紓緩不適。如傷口持續或大量出血，需盡快聯絡醫生，或視乎嚴重程度前往就近急症室求診。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if='currentIndex == 2 ? true : false'>
        <div class="boxs">
          <div class="Advantage">
            <img src="https://static.cmereye.com/static/lkximg/image/exelcymosis/AdvantageBG3.png" alt="">
            <div class="Advanbutton" style="box-sizing: content-box;">
              <ul>
                <li @click='handleClick(index)' class="guoc" :class='currentIndex == index ? "active" : ""'
                  :key='item.id' v-for='(item, index) in list' style="box-sizing: content-box;">
                  <p>{{ item.title }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="contents main-container">
            <div class="gconds">
              <div class="gcon">
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num1.svg" height="50vw" width="50vw" alt="">
                  <p>局部麻醉</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num2.svg" height="50vw" width="50vw" alt="">
                  <p>把牙齒搖鬆，拔掉</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/3.svg" height="50vw" width="50vw" alt="">
                  <p>咬緊棉花或紗布止血</p>
                </div>
              </div>
            </div>
          </div>
          <div class="video main-container">
            <div class="lists">
              <div class="list_disd">
                <strong>療程後注意事項</strong>
                <div class="list_cons">
                  <li>一般需咬緊棉花或紗布約三十分鐘至一小時止血，其間可如常吞口水</li>
                  <li>進食後以溫水或鹽水輕輕漱口，保持傷口清潔</li>
                  <li>避免觸碰傷口上的凝固血塊，引致出血</li>
                  <li>避免食用堅硬和粗糙的食物</li>
                  <li>避免飲用含酒精飲品</li>
                  <li>避免吃過冷或過熱的食物</li>
                  <li>避免大力漱口或吐痰</li>
                  <p>*拔牙後，傷口有機會出現腫脹，一般會數天後消退，可按醫生處方服藥或以冷敷消腫及紓緩不適。如傷口持續或大量出血，需盡快聯絡醫生，或視乎嚴重程度前往就近急症室求診。</p>
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
        title: '非手術性脫牙'
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

  p {
    color: #79828D;
    padding: 30px 0;
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
    padding: 100px 0;
  }

  .coin {
    padding: 1vw 2vw;
    display: block;
    text-align: center;
    img{
      padding: 0 20px;
      // width: 414px;
      // height: 272px;
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
      font-size: 21px;
      color: #79828D;
      margin-left: 1vw;
    }
    p{
      color: #9BA5B1;
      padding: 2vw 0 4vw 0.5vw;
      font-size: 16px;
    }
  }

  .list_cons {
    margin: 1vw 0;
  }

  .video {
    // background-image: linear-gradient(to bottom, #fff 27%, #ECF7FC 0);
    padding: 36px 0 0 223px;
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
    width: 67%;
    background: #fff;
    // padding-left: 8vw;
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
      // align-items: center;

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
        height: 64px;
        /* line-height: 94px; */
        align-self: center;
        width: 64px;
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
        font-size: 20px;
      }
    }
  }

  .list_dis {
    margin-top: 1vw;
    width: 34%;
    // width: 41vw;
    // padding-left: 5vw;
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
        font-size: 18px;
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
    background-image: linear-gradient(to bottom, #fff 234px, #ECF7FC 0);
  }
}

//md
@media only screen and (max-width: 760px) {
  .video {
    background-color: #ECF7FC;
    padding: 5vw 0;
    // margin: 6vw 16vw;

    .cons-box {
      padding-bottom: 6vw;
    }
  }
  .coin{
    img{
      width: 89%;
    }
      display: block;
    text-align: center;

    p {
      color: #79828D;
      font-size: 16px;
      padding: 1vw 0;
    }
  }
  .py-5{
    padding-top: 0rem!important;
  }
  .list_cons{
    p{
      padding-top: 2vw;
    }
  }
   .coin_box {
    // display: flex;
    justify-content: center;
    text-align: center;
    padding: 7vw 0;
  }
  .list-dis {
    width: 100%;
    text-align: left !important;
    padding: 7vw 5vw 14vw 5vw;
    ul{
        color: #9BA5B1;
        list-style-type: disc;
        padding: 3.5vw 8vw 3.5vw 4vw;
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
        height: 6vw;
        display: inline-block;
        vertical-align: middle;
      }
    }
    }
  
  .list {
    // margin-top: 5vw;
    background-image: linear-gradient(to bottom, #fff 29%, #ECF7FC 0);
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
  .lists {
    display: flex;
    margin: 0 1vw;
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
    margin: 2vw 2vw;
  }

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
    // background-image: linear-gradient(to top, #fff 37%, #ECF7FC 0);
    // margin-top: 15vw;

    img {
      width: 126%;
    }

  }
.texts p{
  padding: 3vw 12vw;
}
.gconds{
  padding: 2vw;
}
  .list_con {
    p {
      padding: 3vw 7vw;
    }
  }

    .list_dis {
    margin-top: 3vw;
    width: 100%;
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
         border-left: 1.8vw solid #9BD0F5;
        height: 7vw;
        display: inline-block;
        vertical-align: middle;
      }
    }

    ul {
      padding: 4vw 8vw;
      list-style-type: disc;

      li {
        color: #9BA5B1;

      }
    }
  }
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

  // li {
  //   background-image: linear-gradient(to bottom, #fff 30%, #ECF7FC 0);
  // }

  p {
    // padding: 2vw 4vw 9vw 4vw;
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
