<template>
  <div id="lay">
    <div>
      <menuBar />
      <Banner />
      <footce />
      <div class="context">
          <div class="context-t">每個閃爍時刻{{`\n`}}希瑪牙科為你送上美滿祝福</div>
          <h2>牙科服務</h2>
          <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="" />
          <p class="serve_con">希瑪牙科提供全方位牙科及美容牙科服務, 由洗牙, 補牙, 牙齒美白等治療, 幫助客人回復自信笑容。根據客人的實際口腔健康狀況, 制定嚴格且針對性的治療。同時, 我們亦注重口腔衛生教育, 希望透過推廣牙齒健康的重要性, 提高大眾對口腔護理的關注。</p>
      </div>
      <serveConcept />
      <div class="lecture">
            <div class="lecture-title">
                <h2>講座</h2>
                <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="" />
            </div>
            <div class="lecture-in">
              <div>
                <div><img src="https://static.cmereye.com/imgs/2023/06/13ae73ab533c2430.jpg" alt="" /></div>
                <div>
                  <div class="title">激光美白原理</div>
                  <div class="text">激光牙齒美白是一種利用激光照射牙齒表面，去除色素沈積物，使牙齒變白的方法。具體有關激光牙齒美白會在是次講座詳細講解。</div>
                  <div class="text">講座開始時間：有待公布敬請留意。</div>
                  <a href="https://bit.ly/3X0U0JH">
                    <div class="btn">立即預約講座</div>
                  </a>
                </div>
                <div class="lecture-in-box"><img src="https://static.cmereye.com/imgs/2023/06/c258a5998a4b4694.jpg"></div>
              </div>
              <div>
                <div><img src="https://static.cmereye.com/imgs/2023/06/08f42fac50ba942d.jpg" alt="" /></div>
                <div>
                  <div class="title">隱形牙箍矯正原理</div>
                  <div class="text">隱形牙箍是一種近年來比較流行的牙齒矯正方式，其原理是利用一組定制的透明牙套逐步調整牙齒位置，達到矯正牙齒的效果。具體有關隱形牙箍會在是次講座詳細講解。</div>
                  <div class="text">講座開始時間：有待公布敬請留意。</div>
                  <a href="https://bit.ly/3qsegY7">
                    <div class="btn">立即預約講座</div>
                  </a>
                </div>
                <div  class="lecture-in-box"><img src="https://static.cmereye.com/imgs/2023/06/632136f9b72d854a.png"></div>
              </div>
            </div>
      </div>
      <div class="boxAd">
        <div class="boxAd-title">*由即日起預約講座，每人可獲得7月婚展門票一張，數量有限。</div>
        <div class="boxAd-in">
          <img data-cfsrc="https://static.cmereye.com/imgs/2023/06/64533e1a2d337ace.jpg"
          srcset="https://static.cmereye.com/imgs/2023/06/a6c753b471c186b2.png 600w, https://static.cmereye.com/imgs/2023/06/64533e1a2d337ace.jpg"
          title="牙科服務" alt="牙科服務" src="https://static.cmereye.com/imgs/2023/06/64533e1a2d337ace.jpg" />
          <!-- <img src="https://static.cmereye.com/imgs/2023/06/64533e1a2d337ace.jpg" /> -->
        </div>
      </div>
      <foot />
    
    </div>
  </div>
</template>

<script>
// import menuBar from "@/components/about-me/menu-bar/index.vue";
import menuBar from "@/components/common/menuBar.vue";
import Banner from "@/components/weddingExpo/banner/index.vue";
import serveConcept from "@/components/weddingExpo/service-concept/index.vue"
import footce from "@/components/common/footce.vue"
import foot from "@/components/common/foot.vue"
import dynamicLoadCss from "@/tools/cssLink.js"
export default {
  components: {
    menuBar,
    Banner,
    footce,
    serveConcept,
    foot
  },
  data(){
    return{
      head:'',
      link:''
    }
  },
  mounted() {
     document.getElementsByTagName("body")[0].className = "body-index";
  },
  created(){
  },
  methods: {

},
  head() {
    return {
      title: '婚展禮遇 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '希瑪牙科中心提供基本牙科、美容牙科及高階牙科服務，從一般口腔檢查、洗牙、補牙，剝智慧牙、植牙、箍牙、牙齒美白、全口修復及各種牙科治療等，幫助客人回復自信笑容。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '希瑪牙科 牙科服務 全面口腔照顧 基本牙科 美容牙科 高階牙科服務港島牙科 九龍牙科 新界牙科'
      },
      ]
    }
  },

}
</script>
<style lang="scss" scoped>
.context{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 58px;
    &-t{
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.1em;
        color: #79828D;
        white-space: pre-wrap;
    }
    h2{
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 37px;
        text-align: center;
        letter-spacing: 0.1em;
        color: #79828D;
        margin-top: 61px;
        margin-bottom: 0;
    }
    p{
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.1em;
        color: #79828D;
        width: 100%;
        max-width: 587px;
        margin-top: 17.72px;
    }
   
}
.lecture{
  margin-top: 117px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
      font-family: 'Noto Sans CJK TC';
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 37px;
      text-align: center;
      letter-spacing: 0.1em;
      color: #79828D;
      margin-bottom: 0;
    }
  }
  &-in{
    margin-top: 19.72px;
    width: 100%;
    max-width: 980px;
    display: flex;
    flex-direction: column;
    &>div{
      margin-top: 40px;
      background: #ECF7FC;
      border-radius: 20px;
      display: flex;
      padding: 10px;
      box-sizing: border-box;
      align-items: center;
      position: relative;
      &>div{
        &:first-child{
          margin-right: 55px;
          img{
            border-radius: 15px;
          }
          filter: drop-shadow(0px 0px 4.2766px rgba(155, 208, 245, 0.53));
        }
        .title{
          font-family: 'Noto Sans CJK TC';
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 30px;
          letter-spacing: 0.1em;
          color: #57B2F3;
          margin-top: 0;
          border-left: 10px solid #9BD0F5;
          padding-left: 15px;
        }
        .text{
          font-family: 'Noto Sans CJK TC';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          text-align: justify;
          letter-spacing: 0.1em;
          color: #57B2F3;
          padding-right: 70px;
          margin-top: 22.62px;
        }
        .btn{
          font-family: 'Noto Sans CJK TC';
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
          text-align: center;
          letter-spacing: 0.1em;
          color: #57B2F3;
          background: #FFFFFF;
          border: 1px solid #57B2F3;
          border-radius: 100px;
          margin-top: 25px;
          padding: 10px 20px;
        }
        // flex: 1;
      }
    }
    .lecture-in-box{
      position: absolute;
      top: 10px;
      right: 10px;
      img{
        border-radius: 50%;
      }
    }
    
  }
}
.boxAd{
  margin-top: 118px;
  margin-bottom: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-title{
    font-family: 'Noto Sans CJK TC';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #79828D;
  }
  &-in{
    margin-top: 118px;
    width: 100%;
    max-width: 1020px;
    img{
      width: 100%;
    }
  }
}
@media only screen and (max-width: 740px) {
  .context{
    margin-top: 20px;
    &-t{
      font-size: 16px;
      width: 100%;
      text-align: left;
      padding-left: 5vw;
    }
    h2{
      font-size: 20px;
      margin-top: 40px;
    }
    p{
      padding: 0 30px;
      text-align: justify !important;
    }
  }
  .lecture{
    // margin-top: 90px;
    &-title{
      h2{
        font-size: 28px;
      }
    }
    &-in{
      padding: 0 5vw;
      margin-top: 0;
      &>div{
        margin-top: 40px;
        padding: 10px;
        flex-direction: column;
        align-items: center;
        &>div{
          display: flex;
          flex-direction: column;
          align-items: center;
          &:first-child{
            width: 100%;
            margin-right: 0;
            img{
              width: 100%;
            }
          }
          .title{
            font-size: 24px;
            margin-top: 45px;
            width: 100%;
            margin-bottom: 20px;
          }
          .text{
            font-size: 14px;
            margin-top: 15px;
            padding-right: 0px;
            width: 100%;
          }
          .btn{
            font-size: 20px;
            padding: 10px 20px;
            margin: 20px auto 0;
          }
        }
        
      }
      .lecture-in-box{
        position: absolute;
        top: 300px;
        left: 50%;
        transform: translateX(-50%);
        img{
          border-radius: 50%;
        }
      }
    }
    
  }
  .boxAd{
    margin-top: 30px;
    margin-bottom: 67px;
    &-title{
      padding: 0 5vw;
      font-size: 15px;
    }
    &-in{
      margin-top: 37px;
    }
  }
}
</style>
