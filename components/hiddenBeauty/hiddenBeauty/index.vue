<template>
  <di class="step section">
    <div class="meun">
      <p style="color:#79828D">首頁</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙科服務</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">Invisalign 隱適美</p>
    </div>
    <div class="step">
      <div class="list">
        <ul class="step_list items-center ">
          <li>
            <img src="https://static.cmereye.com/static/lkximg/image/hiddenBeauty/apple.png" alt="">
            <div class="list_con">
              <strong>選擇我們</strong>
              <p>
                希瑪牙科擁有合資格牙醫負責矯齒個案。矯齒是一項持續療程，中心不斷優化牙齒矯正技術，提供隱適美透明配戴式牙箍矯齒方案，助你綻放自信美麗的燦爛笑容。
              </p>
            </div>
            <div class="list_dis">
              <strong>隱適美全方位矯齒療程</strong>
              <ul>
                <li>隱適美是一種透明配戴式牙箍，可自行配戴及除下。 相比傳統箍牙，隱適美牙箍更方便清潔牙齒及日常飲食習慣，適合不同年齡人士。</li>
                <li>其原理是透過先進數位科技，以電腦模擬牙齒移動過程，再按每個移動過程製作出一系列階段的專屬牙箍，利用牙箍的機械性力量令牙齒周圍組織產生移動，繼而將牙齒推向適當位置。</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="video pcshow" >
        <div class="flex justify-center texts">
          <h2 style="color: #ECF7FC;">隱適美流程</h2>
          <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
      </div>
      <div class="box_cruel">
        <img class="curve" src="https://static.cmereye.com/static/lkximg/image/hiddenBeauty/curve.svg" alt="">
        <div class="box">
        <img src="https://static.cmereye.com/static/lkximg/image/hiddenBeauty/cruel01.png" alt="">
        <h3>收集牙齒資料</h3>
        <p>與牙醫諮詢及溝通過後，專人會為你的牙齒進行拍照、X光片、口腔內掃瞄或牙模套印來建立你的牙齒資料，亦會透過詳細講解令你明白整個療程過程及效果。</p>
      </div>
      <div class="box box_center">
        <img src="https://static.cmereye.com/static/lkximg/image/hiddenBeauty/cruel02.png" alt="">
        <h3>收集牙齒資料</h3>
        <p>與牙醫諮詢及溝通過後，專人會為你的牙齒進行拍照、X光片、口腔內掃瞄或牙模套印來建立你的牙齒資料，亦會透過詳細講解令你明白整個療程過程及效果。</p>
      </div>
      <div class="box">
        <img src="https://static.cmereye.com/static/lkximg/image/hiddenBeauty/cruel03.png" alt="">
        <h3>收集牙齒資料</h3>
        <p>與牙醫諮詢及溝通過後，專人會為你的牙齒進行拍照、X光片、口腔內掃瞄或牙模套印來建立你的牙齒資料，亦會透過詳細講解令你明白整個療程過程及效果。</p>
      </div>
      </div>
      
      </div>
       <div class="video mbshow" >
        <div class="flex justify-center texts">
          <h2 style="color: #ECF7FC;">隱適美流程</h2>
          <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
      </div>
      <div class="box_cruel">
        <img class="curve" src="https://static.cmereye.com/static/lkximg/image/hiddenBeauty/curveMb.svg" alt="">
        <div class="box">
        <img class="boximgs" src="https://static.cmereye.com/static/lkximg/image/hiddenBeauty/cruel01.png" alt="">
        <div class="left">
          <h3>收集牙齒資料</h3>
          <p>與牙醫諮詢及溝通過後，專人會為你的牙齒進行拍照、X光片、口腔內掃瞄或牙模套印來建立你的牙齒資料，亦會透過詳細講解令你明白整個療程過程及效果。</p>
        </div>
      </div>
      <div class="box box_center">
        <img src="https://static.cmereye.com/static/lkximg/image/hiddenBeauty/cruel02.png" alt="">
         <div class="right">
            <h3>訂制矯齒計劃</h3>
            <p>牙醫會與廠商方面溝通，為你建立專屬的3D矯齒治療方案。</p>
         </div>
      </div>
      <div class="box">
        <img src="https://static.cmereye.com/static/lkximg/image/hiddenBeauty/cruel03.png" alt="">
        <div class="left">
          <h3>訂製牙套並開始療程</h3>
          <p>廠商用3D電腦雷射列印科技製成一系列訂製牙箍，寄送至牙醫診所。我們會聯絡客人安排到診進行試戴並評估效果。客人需要每6至8星期複診，與牙醫跟進矯齒進度及取得新牙箍。</p>
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
  padding: 8vw;
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
  ::v-deep ul {
      list-style-type: none !important;
    }
  .mbshow{
    display: none;
  }
  .box_cruel{
    display: flex;
    position: relative;
    .curve{
    position: absolute;
    width: 100%;

    }
  }
  .box_center{
    margin-top: -2vw !important;
  }
  .box{
    // display: flex;
    text-align: center;
    margin: 2vw 5vw;
    color: #fff;
    // z-index: 9999;
    position: inherit;
    h3{
      padding: 1vw 0;
    }
    p{
      text-align: left;
    }
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
      list-style-type: none !important;
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
.list_con {
    margin-top: 9vw;
    width: 60vw !important;
  }
  .video {
    background-image:url('https://static.cmereye.com/static/lkximg/image/hiddenBeauty/Blueboard.png');
    background-size: 100% 100%;
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
    }

    .content {
      padding: 1vw 1vw;
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
  

  .list_dis {
    margin-top: 9vw;
    // width: 58vw;
    padding-left: 5vw;

    ul {
      padding-top: 1vw;
      list-style-type: none;

      li {
        color: #9BA5B1;
        padding: 1vw 0;

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
        padding-left: 4.6vw;
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
  .boximgs{
    z-index: 9999;
  }
  .left{
    width: 63%;
    margin-top: 15vw;
  }
  .right{ 
    width: 63%;
    margin: 6vw 0 0 25vw;
  } 
  .box_cruel{
    // display: flex;
    position: relative;
    .curve{
    position: absolute;
    width: 100%;
    z-index: 0;
    }
  }
  .box{
    // display: flex;
    text-align: center;
    margin: 5vw 5vw;
    color: #fff;
    // z-index: 9999;
    padding-bottom: 8vw;
    position: inherit;
    h3{
      padding: 1vw 0;
    }
    p{
      text-align: left;
      color: #fff;
    }
  }
    .video {
    background-image:url('https://static.cmereye.com/static/lkximg/image/hiddenBeauty/BlueboardMb.png');
    background-size: 100% 100%;
  }
  .texts{
    margin-top: 15vw !important;
  }
  .pcshow{
    display: none;
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
