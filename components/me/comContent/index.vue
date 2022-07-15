<template>
   <div class="bg-white py-5 pb-0 py-xs-2">
    <div class="meun">
      <p>首頁</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">關於我們</p>
    </div>
    <div class="flex justify-center texts">
        <h2>公司簡介</h2>
        <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt=""  >
        <h3>希瑪牙科</h3>
        <p class="serve_con" >
          為香港希瑪眼科醫療控股有限公司<br>
          （股份代號：3309）旗下的牙科中心，<br>
          分佈港九新界，位於中環、尖沙咀、銅鑼灣﹑灣仔、沙田﹑鑽石山及觀塘。
        </p>
    </div>
     <div class="city">
        <img src="https://static.cmereye.com/static/lkximg/image/me/CitySkyline.png" alt=""  >
      </div>
      <div class="textsd">
        <p class="ya" >
          希瑪牙科提供<br></p>
        <h3>全方位牙科及美容牙科服務</h3>
        <p class="ya_con" >
          由洗牙、補牙，牙齒美白等治療，<br>
          幫助客人回復自信笑容。
        </p>
      </div>
       <div class="textsd" style="padding-top:1vw">
        <p class="ya yas" >
          中心秉持<br></p>
        <h3>「整體分析」的原則 </h3>
        <p class="ya_con" >
          根據客人的實際口腔健康狀況，制定嚴格且針對性的治療。同時，我們亦注重<br>口腔衛生教育，希望透過推廣牙齒健康的重要性，提高大眾對口腔護理的關注。
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
.textsd{
   text-align: center;
   margin: 8vw 0;
    .ya{
         color:#57B2F3;
         margin-bottom:0.5vw;
    }
  h3{
    padding:0;
  }
  image{
    text-align: center;
  }
}
.texts{
    text-align: center;
    h2{
    font-weight: 300;
    color: #79828D;
    margin-bottom: 0vw;
  }
  image{
    text-align: center;
  }
}
//mb
@media only screen and (max-width: 768px) {
  .meun{
    padding-left:6vw;
    display: flex;
  }
  .ya_con{
    text-align: center;
    color: #9BA5B1;
    font-size: 13px;
    padding: 0 20vw;
  }
  .city{
    display: flex;
    text-align: center;
    justify-content: center;
    img{
      margin:5vw;
      width: 92%;
    }
  }
    h3{
    color: #57B2F3;
    padding-top:5vw;
    font-weight: 600;

  }
 .serve_con{

    text-align: center;
    padding: 2vw;
    color: #57B2F3;
}
}
//pc
@media only screen and (min-width: 768px) {
  .yas{
    padding-top: 5vw;
    margin-bottom: 0.5vw;
  }
  .meun{
    padding-left:6vw;
    display: flex;
  }
  .ya_con{
    text-align: center;
    color: #9BA5B1;
  }
  .city{
    display: flex;
    text-align: center;
    justify-content: center;
    img{
      padding:5vw;
    }
  }
    h3{
      color: #57B2F3;
       padding-top:5vw;
      }
    .serve_con{
    text-align: center;
    color: #57B2F3;
    }
}
</style>
<style lang="scss" >

</style>