<template>
  <di class="step comContent section">
    <div class=" comContent meun main-container">
      <p><nuxt-link style="color: #000; text-decoration: none;" to="/">首頁</nuxt-link></p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙科服務</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙齒美白</p>
    </div>
    <div class="step">
      <div class="list">
      <ul class="step_list items-center main-container">
        <li class="bac-box">
          <div  class="list_con">
            <img src="https://static.cmereye.com/static/lkximg/image/whitening/apple.png" alt="">
            <!-- <h3>想擁有更亮白的牙齒，</h3> -->
            <p>想擁有更亮白的牙齒，可以考慮進行美白牙齒療程。美白牙齒療程能夠有效地把外在和內在的牙漬清除，令牙齒更加亮白。診所提供藍光美白牙齒及激光美白牙齒服務，助你建立閃亮笑容。</p>
            <div class="listcons" >
            <div class="list_d" >
            <strong>激光牙齒美白</strong>
            <span>激光美白是利用激光能量激活美白劑，將適量的過氧化氫（hydrogen peroxide，即是美白劑），透過氧化原理滲入象牙質，將色素分子打碎，排除沉澱的色素。相比其他美白牙齒的方式，激光美白屬較安全、快速、效果較持久及較亮白的方法。過程約 30分鐘，即時見效，可維持至少1年。</span>
          </div>
          <div class="list_d">
            <strong>藍光牙齒美白</strong>
            <span>藍光美白是將專用美白溶液塗上牙齒表面，以藍光照射數次，進行氧化還原作用，達到美白的效果。過程約1小時，效果可維持約1年。</span>
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
      <div v-if='currentIndex == 0 ? true : false'>
        <div class="Advantage">
          <img src="https://static.cmereye.com/static/lkximg/image/whitening/AdvantageBG.png" alt="">
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
              <div class="content left">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/num1.svg" height="50vw" width="50vw" alt="">
                <p>醫生評估病人口腔及牙齦狀況，了解病人需求，解釋漂牙的程序及風險等</p>
              </div>
              <div class="content left">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/num2.svg" height="50vw" width="50vw" alt="">
                <p>進行簡單清潔</p>
              </div>
              <div class="content left">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/3.svg" height="50vw" width="50vw" alt="">
                <p>以牙齒專用色階進行對色，記錄療程前牙齒顏色的色號</p>
              </div>
              <div class="content left">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/num4.svg" height="50vw" width="50vw" alt="">
                <p>套上口腔張口器及保護眼罩</p>
              </div>
              <div class="content left">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/num5.svg" height="50vw" width="50vw" alt="">
                <p>在牙齦塗上牙齦保護劑，以免激光及美白劑刺激牙齦</p>
              </div>
            </div>
            <div class="gcon">
              <div class="content right">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/6.svg" height="50vw" width="50vw" alt="">
                <p>在牙齒表面均勻塗上激光專用美白劑</p>
              </div>
              <div class="content right">
                <img src="https://static.cmereye.com/static/lkximg/image/whitening/7.svg" height="50vw" width="50vw" alt="">
                <p>以激光儀器照射牙齒</p>
              </div>
              <div class="content right">
                <img src="https://static.cmereye.com/static/lkximg/image/whitening/8.svg" height="50vw" width="50vw" alt="">
                <p>療程完成後，清除美白劑與牙齦保護劑</p>
              </div>
              <div class="content right">
                <img src="https://static.cmereye.com/static/lkximg/image/whitening/9.svg" height="50vw" width="50vw" alt="">
                <p>以牙齒專用色階進行對色，比對療程前後效果</p>
              </div>
            </div>
          </div>
        </div>
        <div class="video main-container">
          <div class="video_con" v-loading="loading">
           <iframe class="iframesty" ref="Iframe" src="https://www.youtube.com/embed/Rvh7T1pvqUM" title="【激光美白牙齒你要知】🦷✨" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           <!-- <video width="100%" height="100%" controls="controls" src="https://youtu.be/loJSJebtxG8">
            
              你的浏览器不支持HTML5视频。
            </video> -->
          </div>
          <div class="lists">
            <div class="list_disd">
              <strong>療程後注意事項</strong>
              <div class="list_cons">
              <li>1星期內避免進食刺激性食物及飲品</li>
              <li>3星期內避免進食色素較多的食物及飲品</li>
              <li>養成健康生活習慣，盡量避免吸煙</li>
              <li>早晚刷牙，進食後清潔口腔，保持口腔清潔衛生</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
         <div class="Advantage">
          <img src="https://static.cmereye.com/static/lkximg/image/whitening/AdvantageBG1.png" alt="">
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
              <div class="content left">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/num1.svg" height="50vw" width="50vw" alt="">
                <p>醫生評估病人口腔及牙齦狀況，了解病人需求，解釋漂牙的程序及風險等</p>
              </div>
              <div class="content left">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/num2.svg" height="50vw" width="50vw" alt="">
                <p>進行簡單清潔</p>
              </div>
              <div class="content left">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/3.svg" height="50vw" width="50vw" alt="">
                <p>以牙齒專用色階進行對色，記錄療程前牙齒顏色的色號</p>
              </div>
              <div class="content left">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/num4.svg" height="50vw" width="50vw" alt="">
                <p>套上口腔張口器及保護眼罩</p>
              </div>
              <div class="content left">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/num5.svg" height="50vw" width="50vw" alt="">
                <p>在牙齦塗上牙齦保護劑，以免藍光及美白劑刺激牙齦</p>
              </div>
            </div>
            <div class="gcon">
              <div class="content right">
                <img src="https://static.cmereye.com/static/lkximg/image/implant/6.svg" height="50vw" width="50vw" alt="">
                <p>在牙齒表面均勻塗上藍光專用美白劑</p>
              </div>
              <div class="content right">
                <img src="https://static.cmereye.com/static/lkximg/image/whitening/7.svg" height="50vw" width="50vw" alt="">
                <p>以藍光燈開始照射牙齒，整個過程大概需要照射2-3次</p>
              </div>
              <div class="content right">
                <img src="https://static.cmereye.com/static/lkximg/image/whitening/8.svg" height="50vw" width="50vw" alt="">
                <p>療程完成後，清除美白劑與牙齦保護劑</p>
              </div>
              <div class="content right">
                <img src="https://static.cmereye.com/static/lkximg/image/whitening/9.svg" height="50vw" width="50vw" alt="">
                <p>以牙齒專用色階進行對色，比對療程前後效果</p>
              </div>
              </div>
          </div>
        </div>
        <div class="videos main-container">
          <div class="video_con">
            <div class="cosn" ></div>
            <!-- <img src="https://static.cmereye.com/static/lkximg/image/implant/vedio.png" alt=""> -->
          </div>
          
          <div class="lists">
            <div class="list_disd">
              <strong>療程後注意事項</strong>
              <div class="list_cons">
              <li>1星期內避免進食刺激性食物及飲品</li>
              <li>3星期內避免進食色素較多的食物及飲品</li>
              <li>養成健康生活習慣，盡量避免吸煙</li>
              <li>早晚刷牙，進食後清潔口腔，保持口腔清潔衛生</li>
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
      loading: false, //默认不显示loading
      list: [{
        id: 0,
        title: '激光牙齒美白過程'
      },
      {
        id: 1,
        title: '藍光牙齒美白過程'
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
  .iframesty{
     width: 80%; 
     height: 690px
  }
   .cosn{
    background-color: #fff;
    width:80%;
    height: 6vw;
  }
  .listcons{
    display: flex;
    margin: 3vw 0;
  }
  .list_d{
    width: 123%;
    padding-right: 42px;
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
    span{
        padding-left: 10px;
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
  }
  .table-box {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin: 2vw 0;
  }
  .lists{
    display: flex;
    padding: 50px 0 50px 130px;
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
    ul{
      list-style-type: disc;
      margin: 0;
      font-weight: 500;
      font-size: 17px;
    }
    th{
      text-align: center;
      color: #fff;
      background-color: #57B2F3;
      border-radius: 17px 17px 0 0;
    }
    .thd{
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
    tr{
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
    color: #9BA5B1;
    font-size: 24px;  
    font-weight: 500;
    padding: 0vw !important;
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
  .list_cons{

    margin: 2vw 0;
  }
  .video{
    background-image: linear-gradient(to bottom, #fff 27%, #ECF7FC 0);
    // margin: 0 8vw;
  }
  .videos{
    background-image: linear-gradient(to bottom, #fff 0%, #ECF7FC 0);
    // background-color: #ECF7FC;
    // margin: 0 8vw;
    height: 26vw;
  }
  .video_con {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    // background-image: linear-gradient(to bottom, #fff 65%, #ECF7FC 0);
  }

  .left {
    padding: 2vw 3vw 2vw 2vw !important;

  }
.right{
  // padding-left: 14vw !important;
    padding: 2vw 0vw 2vw 5vw !important;

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
    margin-top: 7vw;
    margin-bottom: 6vw;
    // width: 41vw;
    width: 63%;
    h3{
      margin-top: 1vw;
      color: #57B2F3;
    }
    p{
      color: #57B2F3 !important;
    }
    img{
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
      padding: 0 20px;
      width: 414px;
      height: 272px;
    }

    li {
      text-align: center;
      justify-content: center;
      color: #fff;
      // padding-left: 2vw;
      // margin: 0 3vw;
      display: flex;

      p {
        padding-top: 10px;
        color: #9BA5B1;
        display: flex;
        font-size: 20px;
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
    // margin-top: 5vw;
    background-image: linear-gradient(to bottom, #fff 305px, #ECF7FC 0);
  }
}

//md
@media only screen and (max-width: 768px) {
   .iframesty{
     width: 100%; 
     height: 234px
  }
  .list_disd{
    padding: 5vw 5vw;
  }
  .list_d{
    margin: 8vw 5vw;
    display: grid;
    justify-items: start;
    strong {
      font-size: 20px;
    }
    span{
      text-align: left;
      padding: 2vw 0vw;
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
      margin-top: 5vw;
      width: 126%;
      height: 100%;
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

   .list_cons {
    margin: 2vw 0;
    color: #79828D;
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
.bac-box {
    background-image: linear-gradient(to bottom, #fff 17%, #ECF7FC 0);
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
    // margin-left: 15px;
    padding-left: 15px;
    border-left: 1.8vw solid #9BD0F5;
    height: 7vw;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
