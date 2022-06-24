<template>
   <div class="bg-white py-5 pb-0 py-xs-2">
    <div class="meun">
      <p>首頁</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">我們的團隊</p>
    </div>
    <div class="flex justify-center texts">
        <h2>我們的團隊介</h2>
        <img src="@/asset/image/about-me/serve/Vector.png" alt=""  >
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
    margin-bottom: 1vw;
  }
  image{
    text-align: center;
  }
}
//mb
@media only screen and (max-width: 768px) {
  .ya_con{
    text-align: center;
    color: #9BA5B1;
    font-size: 13px;
  }
  .city{
    display: flex;
    text-align: center;
    justify-content: center;
    img{
      padding:1vw;
    }
  }
    h3{
    color: #57B2F3;
    padding-top:2vw;
  }
 .serve_con{

    text-align: center;
    padding: 2vw;
    color: #57B2F3;
}
}
//pc
@media only screen and (min-width: 768px) {
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
      padding:1vw;
    }
  }
    h3{
      color: #57B2F3;
       padding-top:2vw;
      }
    .serve_con{
    text-align: center;
    color: #57B2F3;
    }
}
</style>
<style lang="scss" >

</style>