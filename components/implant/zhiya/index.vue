<template>
  <di class="step section">
    <div class="meun">
      <p style="color:#79828D">首頁</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙科服務</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">植牙</p>
    </div>
    <div class="list" >
      <ul class="step_list items-center ">
        <li>
          <img src="@/asset/image/implant/Group1.png" alt="">
          <div class="list_con">
          <strong>植牙</strong>
          <p>植牙，俗稱為「種牙」，是處理缺牙的一種治療方法。牙醫會把植體植入病人的牙槽骨內，待骨整合後用以支撐上面的牙套。</p>
          </div>
          <div class="list_dis">
          <strong>常見植牙的原因</strong>
          <ul>
            <li>傳統治療方法（牙套、牙橋及假牙托等）無法修復缺牙的情況</li>
            <li>缺牙影響儀容，嚴重甚至會令面部變形</li>
            <li>缺牙容易令牙齒移位，影響咬合、發音</li>
            <li>改善咀嚼問題，回復正常飲食</li>
          </ul>
          </div>    
        </li>     
      </ul>
    </div>
    <div class="Advantage">
     <img src="@/asset/image/implant/AdvantageBG.png" alt="">
    </div>
    <div class="Advanbutton">
    <div class="guoc">
    <a href="">2131</a>
    </div>
    <div class="guoc">
    <a href="">12312</a>
    </div>
    </div>
  </di>
</template>
<script>
export default {
  data() {
    return {   

    }
  },
  computed: {

  },
 
}

</script>

<style lang="scss" scoped>
.texts {
  text-align: center;

  h2 {
    font-weight: 300;
    color: #79828D;
    margin-bottom: 1vw;
  }

  image {
    text-align: center;
  }
}

//pc
@media only screen and (min-width: 768px) {
  .Advantage{
    display: flex;
    justify-content: center;
    position: absolute;
    left: 29vw;
    z-index: 1;
    top: 60vw;
  }
  .Advanbutton{
   position: absolute;
    left: 35vw;
    z-index: 1;
    top: 73vw;
    display: flex;
    .guoc{
      background: #57B2F3;
      height: 6vw;
      width: 6vw;
      border-radius: 100%;
      margin: 0 1vw;
      a{
        text-decoration: none;
        line-height: 10vw;
        text-align: center;
        display: flex;
        justify-content: center;

      }
    }
    
  }
  .list_con{
    margin-top: 7vw;
    width: 41vw;
  }
  .list_dis{
    margin-top: 7vw;
    // width: 41vw;
    padding-left:5vw;
    ul{
      padding-top: 1vw;
      list-style-type: disc;
      li{
        color:#9BA5B1;

      }
    }
  }
  .meun{
    padding-left:6vw;
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
        padding-left: 4vw;
        padding-top: 1vw;
        color: #9BA5B1;
        display:flex;
      }

      strong {
        padding-left: 4vw;
        color: #9BA5B1;
      
        &:before {
          content: "";
          margin-left: 15px;
          padding-left: 15px;
          border-left: 0.3vw solid #9BD0F5;
          height: 1vw;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }

  .list {
    margin-top:5vw;
    background-image: linear-gradient(to bottom, #fff 23%, #ECF7FC 0);
  }
}

//md
@media only screen and (max-width: 768px) {
    .meun{
    padding-left:6vw;
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

  li {
    background-image: linear-gradient(to bottom, #fff 30%, #ECF7FC 0);
  }

  p {
    padding: 2vw 4vw 9vw 4vw;
    color: #9BA5B1;
  }

  strong {
    padding-top: 2vw;
    padding-left: 4vw;
    color: #9BA5B1;
  }

  strong:before {
    content: "";
    margin-left: 15px;
    padding-left: 15px;
    border-left: 2vw solid #9BD0F5;
    height: 6vw;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
