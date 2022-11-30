<template>
<div>
  <div class="step section main-container">
      <div class="flex justify-center texts section">
        <h2>服務理念</h2>
        <img src="@/asset/image/about-me/serve/Vector.png" alt="">
      </div>
     </div>
     <div class="list">
      <div class="main-container">
            <ul class="step_list flex justify-between items-center ">
                    <li v-for="(stepItem, index) in serContentList" :key="index" cals>
                      <img  :src="stepItem.src" alt="">
                      <strong>{{ stepItem.des }}</strong>
                      <p>{{ stepItem.content }}</p>
                    </li>
                  </ul>
      </div>
     </div> 
      
</div>


  
</template>
<script>
export default {
  data() {
    return {
      serContentList: [
        { src: require("@/asset/image/about-me/service-concept/Pic01.png"), link: "", des: '全面口腔照顧', content: '中心提供基本牙科、美容牙科及高階牙科服務，從一般口腔檢查、洗牙、補牙，到牙齒美白、全口修復及各種牙科治療，幫助客人回復自信笑容。' },
        { src: require("@/asset/image/about-me/service-concept/Pic021.png"), link: "", des: '整體分析牙齒及口腔狀況', content: '進行治療前，牙科醫生會先整體分析客人的口腔健康狀況，了解其病歷，根據實際情況制定嚴格且針對性的治療方案。' },
        { src: require("@/asset/image/about-me/service-concept/Pic03.png"), link: "", des: '注重感染控制措施', content: '中心使用高溫消毒儀器及最高規格的高壓滅菌器，確保徹底洗淨及消毒牙科用具。每週亦會進行一次生物監測及驗證，確保機器運作正常。' },
      ],
    }
  },
  computed: {
    clientHeight: {
      get() {
        return this.$store.getters.windowHeight
      }
    }
  },

}

</script>

<style lang="scss" scoped>
.texts {
  text-align: center;

  h2 {
    font-weight: 300;
    color: #79828D;
    margin-bottom: 0vw;
  }

  image {
    text-align: center;
  }
}

//pc
@media only screen and (min-width: 740px) {
  .step_list {
    // width: 80vw;
    padding-left: 0px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;

    img {
      // width:auto;
      // height:auto;
      // max-width:100%;
      // max-height:100%;
      margin-bottom: 2vw;
      padding: 0 2vw;
    }

    li {
      text-align: left;
      color: #fff;
      // padding-left: 2vw;
      margin: 0 2vw;

      p {
        padding-left: 2.5vw;
        padding-top: 1vw;
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        text-align: justify;
        letter-spacing: 0.1em;
        padding-bottom: 37px;
      }

      strong {
        padding-left: 2vw;
        font-weight: 400;
        font-size: 19px;
        
        &:before {
          content: "";
          margin-left: 15px;
          padding-left: 15px;
          border-left: 8px solid #ECF7FC;
          height: 30px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }

  .list {
    background-image: linear-gradient(to bottom, #fff 30%, #9BD0F5 0);
  }
}

//mb
@media only screen and (max-width: 740px) {
  .step.section .step_list li {
    padding: 40px 5vw;
  }

  ul {
    padding: 0;

    img {
      padding-left: 9vw;
      padding-bottom: 6vw;
    }
  }

  li {
    background-image: linear-gradient(to bottom, #fff 30%, #9BD0F5 0);
  }

  p {
    padding: 2vw 4vw 9vw 4vw;
    color: #fff;
  }

  strong {
    padding-top: 2vw;
    padding-left: 4vw;
    color: #fff;
    font-weight: 400;
  }

  strong:before {
    content: "";
    margin-left: 15px;
    padding-left: 15px;
    border-left: 2vw solid #ECF7FC;
    height: 6vw;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
