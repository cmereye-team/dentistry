<template>
   <div class="bg-white comContent pb-0 py-xs-2">
    <div class="meun main-container">
      <p><nuxt-link style="color: #000; text-decoration: none;" to="/">首頁</nuxt-link></p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">診所設備</p>
    </div>
    <div class="flex justify-center main-container texts">
        <h2>診所設備</h2>
        <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt=""  >
    </div>
    <div class="facilities-bag">
      <div class="facilities main-container">
      <div class="Machine MacOne">
      <div class="dec"><h3>CBCT錐狀射束<br>電腦斷層掃描</h3></div>
      <img src="https://static.cmereye.com/static/lkximg/image/facilities/Machine01.png" alt=""  >
      <p>CBCT的輻射量較低，大約20秒的單次旋轉已能拍攝出立體的牙齒結構影像，精準呈現出牙齒狀態，提供針對性治療</p>
    </div>
     <div class="Machine">
      <div class="dec"><h3>CEREC</h3></div><br>
      <img src="https://static.cmereye.com/static/lkximg/image/facilities/Machine02.png" alt=""  >
      <p>有別於傳統的全瓷牙齒製作，CEREC利用3D攝影、電腦輔助設計與製作即日完成牙齒修復，客人毋須多次覆診及配戴臨時牙套。CEREC使用的瓷塊是接近真牙的材質，確保自然美觀。</p>
    </div>
     <div class="Machine">
      <div class="dec"><h3>Class B 高壓滅菌器<br>及高溫消毒儀器</h3></div>
      <img src="https://static.cmereye.com/static/lkximg/image/facilities/Machine03.png" alt=""  >
      <p>牙科儀器在使用後，會先以高溫消毒儀器清洗，放入消毒袋，再使用符合Class B標準的高壓滅菌器徹底消毒。</p>
    </div>
    </div> 
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
    .ya{
         color:#57B2F3;
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
@media only screen and (max-width: 760px) {
  .meun{
    padding-left:6vw;
    display: flex;
  }
  .facilities{
    img{
        padding-top:1vw;
      }
  }
  .facilities{
    justify-content: center;
    text-align: center;
    clip-path: ellipse(151% 53% at 50% 54%);
    background: radial-gradient(134vw 68vw at bottom, transparent 50%, #ECF7FC 50%) !important;
    height: 429vw;
    .MacOne{
      padding-top:26vw !important;
      margin-top: 0 !important;

    }
    .Machine{
      margin-top:6vw;
      padding:7vw;
      img{
        padding-top:1vw;
      }
    }
    p{
      padding-top:6vw;
      color:#57B2F3;
      text-align: left;
    }
    h3{
      color:#57B2F3;
    }
    .dec{
      display:flex;
      justify-content: center;
       &:before {
         content: "";
          margin-left: 16px;
          padding-left: 15px;
          border-left: 9.3vw solid #9BD0F5;
          height: 1.9vw;
          display: inline-block;
          vertical-align: middle;
          transform: rotate(52deg);
          margin-top: 5vw;
        }
         &:after {
              content: "";
              margin-left: 6px;
              padding-left: 15px;
              border-left: 9.3vw solid #9BD0F5;
              height: 1.9vw;
              display: inline-block;
              vertical-align: middle;
              transform: rotate(-58deg);
              margin-top: 6px;
        }
    }
  }

}
//pc
@media only screen and (min-width: 760px) {
 
  .meun{
    padding-left:6vw;
    display: flex;
    font-size: 1rem;
  }
  .facilities-bag{
    background: radial-gradient(129vw 21vw at bottom, transparent 50%, #ECF7FC 50%);
  // background: #ECF7FC !important;
    //  border-radius: 37% 37% 0 0;
    height: 1000px;
     -webkit-clip-path: ellipse(100% 67% at 50% 70%);
      clip-path: ellipse(100% 67% at 50% 70%);
  }
  .facilities{
    display: flex;
    justify-content: center;
    text-align: center;

   
    .Machine{
      // margin-top:6vw;
      padding:70px;
      padding-top: 150px;
      img{
        padding-top:1vw;
      }
    }
    p{
      padding-top:1vw;
      color:#57B2F3;
      text-align: left;
      font-size: 1.1rem;
    }
    h3{
      color:#57B2F3;
      font-size: 0.9rem;
    }
    .dec{
      display:flex;
      justify-content: center;
       &:before {
          content: "";
          margin-left: 15px;
          padding-left: 15px;
          border-left: 0.3vw solid #9BD0F5;
          height: 1.9vw;
          display: inline-block;
          vertical-align: middle;
          transform: rotate(-16deg);
        }
         &:after {
          content: "";
          margin-left: 15px;
          padding-left: 15px;
          border-left: 0.3vw solid #9BD0F5;
          height: 2.1vw;
          display: inline-block;
          vertical-align: middle;
          transform: rotate(16deg);
          margin-top: 5px;
        }
    }
  }

  
}
</style>
<style lang="scss" >

</style>