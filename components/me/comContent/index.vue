<template>
  <div class="bg-white comContent main-container pb-0 py-xs-2">
    <div class="meun">
      <p><nuxt-link style="color: #000; text-decoration: none;" to="/">首頁</nuxt-link></p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">關於我們</p>
    </div>
    <div class="flex justify-center texts">
      <h2>公司簡介</h2>
      <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
      <!-- <h3>希瑪牙科</h3> -->
      <p class="serve_cons">
        為香港希瑪眼科醫療控股有限公司<br>
        （股份代號：3309）旗下的牙科中心，<br>
        分佈九龍新界，位於沙田及觀塘。
      </p>
    </div>
    <div class="city">
      <img src="https://static.cmereye.com/static/lkximg/image/me/CitySkyline.png" alt="">
    </div>
    <!-- <div class="textsd">
      <p class="ya">
        希瑪牙科提供<br></p>
      <h3>全方位牙科及美容牙科服務</h3>
      <p class="ya_con">
        由洗牙、補牙，牙齒美白等治療，<br>
        幫助客人恢復自信笑容。
      </p>
<<<<<<< HEAD
    </div> -->
    <div class="awards">
=======
    </div>
    <!-- <div class="awards">
>>>>>>> 2c5b5c36e46ebb9268a1c9e994bee545cbe28866
      <img src="https://static.cmereye.com/imgs/2023/07/084b7e4b0c0fad67.png" alt="奖项">
    </div> -->
    <div class="textsd" style="padding-top:1vw">
      <p class="ya yas">
        中心秉持<br></p>
      <h3>「整體分析」的原則</h3>
      <p class="ya_con">
        我司的宗旨是保障病人安全為基礎, 確保所有治療過程符合最高的安全標準。更設有關愛基金長者牙科服務資助及可使用醫療卷服務, 符合不同階層病人的需要。根據客人的實際口腔健康狀況，制定嚴格且針對性的治療。同時，我們亦注重口腔衛生和健康的重要性，提高病人對口腔護理的關注。
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
  }
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

//mb
@media only screen and (max-width: 760px) {
  .textsd {
    margin: 8vw 0;
    text-align: center;

    h3 {
      padding: 0;

    }

    .ya {
      color: #57B2F3;
      margin-bottom: 0.5vw;
    }
  }

  .meun {
    padding-left: 6vw;
    display: flex;

  }

  .ya_con {
    text-align: center;
    color: #9BA5B1;
    font-size: 13px;
    padding: 0 20vw;
  }

  .awards {
    width: 100%;
    display: flex;
    justify-content: center;

    &>img {
      width: 75%;
    }
  }

  .city {
    display: flex;
    text-align: center;
    justify-content: center;

    img {
      margin: 5vw;
      width: 92%;
      height: 92%;
    }
  }

  h3 {
    color: #57B2F3;
    padding-top: 5vw;
    font-weight: 600;

  }

  .serve_cons {
    text-align: center;
    padding: 2vw;
    color: #57B2F3;
  }
}

//pc
@media only screen and (min-width: 760px) {
  .awards {
    width: 100%;
    display: flex;
    justify-content: center;

    &>img {
      width: 65%;
    }
  }

  .textsd {
    text-align: center;

    //  margin: 8vw 0;
    .ya {
      color: #57B2F3;
      margin-bottom: 0.5vw;
      font-size: 1.3rem;
    }

    h3 {
      padding: 0;
      font-size: 1.5rem;
    }

    image {
      text-align: center;
    }
  }

  .texts {
    h2 {
      font-size: 2.3rem;
      font-weight: 300;
      color: #79828D;
      margin-bottom: 0vw;
    }

    h3 {
      text-align: center;
      color: #57B2F3;
      font-size: 1.5rem;
      padding-top: 80px;
    }
  }

  .comContent {
    width: calc(100% - 120px);
  }

  .yas {
    padding-top: 90px
  }

  .meun {
    padding-left: 100px;
    display: flex;

    p {
      font-size: 1rem;
      font-family: 'Noto Sans CJK TC';
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      text-align: justify;
      letter-spacing: 0.1em;

    }
  }

  .ya_con {
    text-align: center;
    color: #9BA5B1;
    font-size: 1.3rem;
  }

  .city {
    display: flex;
    text-align: center;
    justify-content: center;

    img {
      padding: 150px;
    }
  }

  h3 {
    color: #57B2F3;
    padding-top: 5vw;
  }

  .serve_cons {
    text-align: center;
    color: #57B2F3;
    font-size: 1.3rem;
  }
}
</style>
<style lang="scss" >
//pc
@media only screen and (min-width: 760px) {
  .comContent {
    margin-top: 56px !important;
  }
}
</style>