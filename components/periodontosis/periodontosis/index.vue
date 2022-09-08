<template>
  <di class="step comContent section">
    <div class="comContent meun main-container">
      <p><nuxt-link style="color: #000; text-decoration: none;" to="/">首頁</nuxt-link></p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙科服務</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙周病治療</p>
    </div>
    <div class="step">
      <div class="list">
        <ul class="step_list items-center main-container">
          <li>
            <div class="list_con">
              <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/apple.png" alt="">
              <!-- <h3> 牙周病屬慢性炎症，</h3> -->
              <p>牙周病屬慢性炎症，分為輕微的牙齦炎及嚴重的牙周炎兩種。會令牙齒鬆脫、移位，影響外貌及口腔健康。</p>
              <div class="listcons">
                <div class="list_d">
                  <strong>牙齦炎如何形成？</strong>
                  <span>牙齦及牙齒邊緣長期積聚牙菌膜，細菌會分泌毒素刺激牙齦，引致發炎。牙齦發炎時，牙肉會紅腫，刷牙時會流牙血，牙齒表面也會積聚十分粗糙的牙石。</span>
                </div>
                <div class="list_d list_right">
                  <strong>牙周病如何形成？</strong>
                  <span>當牙齦炎情況持續，形成「牙周袋」，食物殘渣、牙菌膜和牙石等更易堆積在內，使牙周組織持續受破壞，而出現牙周炎。如牙齦邊緣滲出膿液，甚至長出牙瘡，牙齦和牙槽骨會慢慢萎縮，以致部分牙根外露，牙齒失去支撐，甚至脫落。</span>
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
      <div class="bg-white  pb-0 py-xs-2 main-container">
        <div class="flex justify-center texts">
          <h2>牙周病的症狀</h2>
          <img class="icons" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
        </div>
        <div class="coin_box">
          <div class="coin">
            <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/coin1.svg" alt="">
            <p>刷牙時牙齦<br>出血</p>
          </div>
          <div class="coin">
            <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/coin2.svg" alt="">
            <p>牙肉紅腫</p>
          </div>
          <div class="coin">
            <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/coin3.svg" alt="">
            <p>口臭異味</p>
          </div>
          <div class="coin">
            <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/coin4.svg" alt="">
            <p>牙齒鬆動</p>
          </div>
          <div class="coin">
            <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/coin5.svg" alt="">
            <p>牙齦腫脹</p>
          </div>
        </div>
        <div class="coin_box">
          <div class="coin">
            <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/coin6.svg" alt="">
            <p>牙齒對冷熱<br>敏感</p>
          </div>
          <div class="coin">
            <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/coin7.svg" alt="">
            <p>容易流牙血</p>
          </div>
          <div class="coin">
            <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/coin8.svg" alt="">
            <p>牙齦萎縮</p>
          </div>
          <div class="coin">
            <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/coin9.svg" alt="">
            <p>牙齦從粉紅色<br>變為暗紅色</p>
          </div>
          <div class="coin">
            <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/coin10.svg" alt="">
            <p>牙齒移位</p>
          </div>
        </div>
      </div>
      <div v-if='currentIndex == 0 ? true : false'>
        <div class="boxs main-container">
          <div class="Advantage">
            <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/AdvantageBG.png" alt="">
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
                  <p>口腔檢查</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num2.svg" height="50vw" width="50vw" alt="">
                  <p>利用牙科儀器深入牙齦發炎的底部</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/3.svg" height="50vw" width="50vw" alt="">
                  <p>刮除乾淨牙結石及發炎的牙肉組織</p>
                </div>
              </div>
            </div>
          </div>
          <div class="video ">
            <div class="cons-box">
              <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/quote.png" alt="">
              <div class="porcelain—con">
                <p>牙周病一定要進行手術嗎？</p>
              </div>
              <div class="porcelain—cons">
                <p>一般牙周病治療可分為非手術性和手術性。醫生會透過檢查及評估，再按照病人的病情，擬定適切的治療方案。</p>
                <p>非手術治療即牙根刮治（深層洗牙），通過儀器刮除發炎組織，讓牙周健康的組織能在短時間內長回來。</p>
                <p>對於較嚴重的牙周病，或是牙齦厚實經由非手術治療不易達到良好效果者，就會進行牙周手術改善牙周病的情況。</p>
                <p>牙周病手術主要分成兩類，牙肉翻瓣手術及牙周再生手術，更深入地把發炎組織處理乾淨，防止發炎繼續惡化。</p>
              </div>
              <div  class="quote">
                <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/quote2.png" alt="">
              </div>
              
            </div>
            <!-- <div class="lists">
              <div class="list_disd">
                <strong>療程後注意事項</strong>
                <div class="list_cons">
                  <li>避免進食太硬的食物</li>
                  <li>需定期覆診，檢查植牙的狀況</li>
                  <li>需要徹底清潔牙齒，避免植體發炎，導致植體鬆動</li>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <div v-else-if='currentIndex == 1 ? true : false'>
        <div class="boxs main-container">
          <div class="Advantage">
            <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/AdvantageBG1.png" alt="">
            <div class="Advanbutton" style="box-sizing: content-box;">
              <ul>
                <li @click='handleClick(index)' class="guoc" :class='currentIndex == index ? "active" : ""'
                  :key='item.id' v-for='(item, index) in list' style="box-sizing: content-box;">
                  <p>{{ item.title }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="contents">
            <div class="gcond">
              <div class="gcon gcon_left_content">
                <div class="content left">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num1.svg" height="50vw" width="50vw" alt="">
                  <p>局部麻醉</p>
                </div>
                <div class="content left">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num2.svg" height="50vw" width="50vw" alt="">
                  <p>切開牙齦組織，分開牙齦組織與牙齒</p>
                </div>
                <div class="content left">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/3.svg" height="50vw" width="50vw" alt="">
                  <p>用超聲波徹底清潔牙根表面及牙周囊袋下的牙垢、牙菌斑和生物膜</p>
                </div>
              </div>
              <div class="gcon">
                <div class="content right">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num4.svg" height="50vw" width="50vw" alt="">
                  <p>修整牙周骨缺損</p>
                </div>
                <div class="content right">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num5.svg" height="50vw" width="50vw" alt="">
                  <p>縫合傷口</p>
                </div>
              </div>
            </div>
          </div>
          <div class="video">
            <div class="cons-box">
              <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/quote.png" alt="">
              <div class="porcelain—con">
                <p>牙周病一定要進行手術嗎？</p>
              </div>
              <div class="porcelain—cons">
                <p>一般牙周病治療可分為非手術性和手術性。醫生會透過檢查及評估，再按照病人的病情，擬定適切的治療方案。</p>
                <p>非手術治療即牙根刮治（深層洗牙），通過儀器刮除發炎組織，讓牙周健康的組織能在短時間內長回來。</p>
                <p>對於較嚴重的牙周病，或是牙齦厚實經由非手術治療不易達到良好效果者，就會進行牙周手術改善牙周病的情況。</p>
                <p>牙周病手術主要分成兩類，牙肉翻瓣手術及牙周再生手術，更深入地把發炎組織處理乾淨，防止發炎繼續惡化。</p>
              </div>
              <div  class="quote">
                <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/quote2.png" alt=""></img>
              </div>
              
            </div>
            <!-- <div class="lists">
              <div class="list_disd">
                <strong>療程後注意事項</strong>
                <div class="list_cons">
                  <li>避免進食太硬的食物</li>
                  <li>需定期覆診，檢查植牙的狀況</li>
                  <li>需要徹底清潔牙齒，避免植體發炎，導致植體鬆動</li>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <div v-else-if='currentIndex == 2 ? true : false'>
        <div class="boxs main-container">
          <div class="Advantage">
            <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/AdvantageBG3.png" alt="">
            <div class="Advanbutton" style="box-sizing: content-box;">
              <ul>
                <li @click='handleClick(index)' class="guoc" :class='currentIndex == index ? "active" : ""'
                  :key='item.id' v-for='(item, index) in list' style="box-sizing: content-box;">
                  <p>{{ item.title }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="contents">
            <div class="gcond">
              <div class="gcon">
                <div class="content left">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num1.svg" height="50vw" width="50vw" alt="">
                  <p>評估是否適合進行牙周組織擴增、增生手術</p>
                </div>
                <div class="content left">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num2.svg" height="50vw" width="50vw" alt="">
                  <p>根據牙肉狀態及骨頭的再生狀況，設計牙周再生計劃</p>
                </div>
                <div class="content left">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/3.svg" height="50vw" width="50vw" alt="">
                  <p>在骨缺損處以骨粉填充</p>
                </div>
              </div>
              <div class="gcon">
                <div class="content right">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num4.svg" height="50vw" width="50vw" alt="">
                  <p>覆蓋再生膜，提供牙周組織的生長空間</p>
                </div>
                <div class="content right">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num5.svg" height="50vw" width="50vw" alt="">
                  <p>牙周組織增加，使牙周更鞏固，牙齒存活時間更長</p>
                </div>
              </div>
            </div>
          </div>
          <div class="video">
            <div class="cons-box">
              <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/quote.png" alt="">
              <div class="porcelain—con">
                <p>牙周病一定要進行手術嗎？</p>
              </div>
              <div class="porcelain—cons">
                <p>一般牙周病治療可分為非手術性和手術性。醫生會透過檢查及評估，再按照病人的病情，擬定適切的治療方案。</p>
                <p>非手術治療即牙根刮治（深層洗牙），通過儀器刮除發炎組織，讓牙周健康的組織能在短時間內長回來。</p>
                <p>對於較嚴重的牙周病，或是牙齦厚實經由非手術治療不易達到良好效果者，就會進行牙周手術改善牙周病的情況。</p>
                <p>牙周病手術主要分成兩類，牙肉翻瓣手術及牙周再生手術，更深入地把發炎組織處理乾淨，防止發炎繼續惡化。</p>
              </div>
              <div  class="quote">
                <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/quote2.png" alt="">
              </div>
              
            </div>
            <!-- <div class="lists">
              <div class="list_disd">
                <strong>療程後注意事項</strong>
                <div class="list_cons">
                  <li>避免進食太硬的食物</li>
                  <li>需定期覆診，檢查植牙的狀況</li>
                  <li>需要徹底清潔牙齒，避免植體發炎，導致植體鬆動</li>
                </div>
              </div>
            </div> -->
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
  margin-top: 148px;

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
  .listcons{
    display: flex;
    margin: 35px 0;
  }
  .porcelain—con{
    // display: flex;
    text-align:center;
    p{
      padding: 1vw 0;
      color:#57B2F3;
      font-weight: 500;
      font-size: 22px;
    }
  }
  .porcelain—cons{
    padding: 0 95px;
    p{
      color:#9BA5B1;
      font-size: 16px;
    }
  }
  .quote{
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
  }
  .boxs {
    background-image: linear-gradient(to bottom, #fff 615px, #ECF7FC 0);

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
    padding: 10px 20px;
    display: block;
    text-align: center;

    p {
      color: #79828D;
      font-size: 16px;
      padding: 1vw 0;
    }
  }
  .list_right{
      padding-left: 40px !important;
    }
  .list_d {
    padding-left: 92px;
    text-align: left;
    
    strong {
      color: #9BA5B1;
      font-weight: 500;
      padding: 0vw !important;
      font-family: 'Noto Sans CJK TC';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
      /* identical to box height */

      letter-spacing: 0.1em;

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

    span {
      display: block;
      padding-left: 0.7vw;
      padding-top: 1vw;
      color: #9BA5B1;
      font-family: 'Noto Sans CJK TC';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 22px;
      text-align: justify;
      letter-spacing: 0.1em;
    }
  }

  .lists {
    display: flex;
    margin: 2vw 18vw;
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
    margin: 80px 212px;
    .cons-box{
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
    padding: 2vw 1vw 2vw 2vw !important;

  }

  .right {
    // padding-left: 14vw !important;
    padding: 2vw 4vw 2vw 2vw !important;

  }
.gconds {
      display: flex;
      margin: 0 auto;
      width: 65%;
      background: #fff;
      text-align: center;
      justify-content: center;
      .gcon{
        margin: 1vw 0;
        
      }
      
    }
    .gcon_left_content{
        width: 50%;
      }
  .contents {

    // background-color: #fff;
    .gcond {
      display: flex;
      margin: 0 auto;
      width: 65%;
      background: #fff;
    }

    .content {
      padding: 1vw;
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
        margin: 1px 42px;
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
          font-size: 12px;
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
        font-size: 15px;
        line-height: 22px;
        text-align: justify;
        letter-spacing: 0.1em;

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
@media only screen and (max-width: 768px) {
  .py-5 {
    margin-top: 7rem !important;
    padding-top: 0rem!important;
  }
  .coin_box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .list_disd{
    padding: 5vw 5vw;
  }
  .list_d{
    display: grid;
    justify-items: start;
    strong {
      font-size: 20px;
    }
    span{
      text-align: left;
      padding: 1vw 4vw;
      color: #9BA5B1;
    }
  }
  .list_con{
    text-align: center;
    h3{
      padding-top: 4vw;
      color: #57B2F3;
      font-size: 26px;
    }
    p{
      color: #57B2F3;

    }
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
    }
  .porcelain—con{
    // display: flex;
    text-align:center;
    p{
      padding: 1vw 0;
      color:#57B2F3;
      font-weight: 500;
      font-size: 22px;
      
    }
  }
  .porcelain—cons{
    padding: 0 12vw;
    p{
      color:#9BA5B1;

    }
  }
  .quote{
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
  }
  .boxs {
    background-image: linear-gradient(to bottom, #fff 47%, #ECF7FC 0);

  }
.cons-box{
  background: #ECF7FC;
  img{
    padding: 2vw;
  }
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
        padding: 6.5vw;
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
.list_con{
  text-align: center;
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
      padding: 4vw;
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
      width: 90%;
      // padding-left: 9vw;
      // padding-bottom: 6vw;
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
