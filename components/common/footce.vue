<template>
<div class="container">
  <div class="online footer">
    <div v-if="isShow && ($route.path !== '/weddingExpo')">
      <a class="face-button2 d-block webapp" href="/weddingExpo" aria-hidden="true" target="_blank">
        <div class="face-primary">
          <span class="icon"> <i class="fa  fa-volume-control-phone ">
          <img class="what1" src="https://static.cmereye.com/imgs/2023/06/e0d212c1cfc43966.png" alt="">
          </i></span>
          婚展講座
        </div>
      </a>
   </div>
   <div v-if="!isShow && ($route.path !== '/weddingExpo')">
      <a class="face-button3" href="/weddingExpo" aria-hidden="true" target="_blank">
        <div class="face-primary">
          <img class="what" src="https://static.cmereye.com/imgs/2023/06/e0d212c1cfc43966.png" alt="">
          <span>婚展講座</span>
        </div>
      </a>
   </div>
    <div v-if="isShow">
      <a id="zxzx" class="face-button d-block phone" href="tel:85236202428" aria-hidden="true" target="_blank">
            <div class="face-primary">
              <span class="icon"> <i class="fa fa-headphones ">
                <img src="https://static.cmereye.com/static/lkximg/image/footce/phone.png" alt="">
              </i></span>
              電話預約
            </div>
          </a>
    </div>
    <div v-else>
      <a id="zxzx" class="face-button d-block web_app_a gtm_app phoneMd" href="tel:85236202428 " aria-hidden="true" target="_blank"
      style="line-height: 20px;">
            <div class="face-primary" style="display: flex;">
              <span class="icon" style="display: flex;align-items: center;padding-left: 18px;"> <i class="fa fa-headphones ">
                <img src="https://static.cmereye.com/static/lkximg/image/footce/phone.png" alt="">
              </i></span>
              <div style=" padding: 10px 0px 6px 14px;display: flex;flex-direction: column;align-items: flex-start;">
                <span>電話預約</span>
                <span >3620 2428</span>
              </div>
            </div>
          </a>
    </div>
   <div v-if="isShow">
    <a class="face-button1 d-block webapp" href="https://api.whatsapp.com/send?phone=85295128192" aria-hidden="true" target="_blank">
      <div class="face-primary">
        <span class="icon"> <i class="fa  fa-volume-control-phone ">
        <img class="what" src="https://static.cmereye.com/static/lkximg/image/footce/yuyue.png" alt="">
        </i></span>
        WhatApps<br>預約
      </div>
    </a>
   </div>
   <div v-else>
     <a class="face-button1 d-block webappMd" href="https://api.whatsapp.com/send?phone=85295128192" aria-hidden="true" target="_blank">
      <div class="face-primary">
        <span class="icon"> <i class="fa  fa-volume-control-phone ">
        <img class="what" src="https://static.cmereye.com/static/lkximg/image/footce/yuyue.png" alt="">
        </i></span>
        WhatApps預約
      </div>
    </a>
   </div>
   <div v-if="isShow">
     <div class="face-button2 face-button4 d-block webapp">
       <div class="face-primary">
         <span class="icon"> <i class="fa  fa-volume-control-phone ">
         <img class="what1" src="https://static.cmereye.com/imgs/2023/06/6abf097c810dcb7b.png" alt="">
         </i></span>
         WeChat
       </div>
       <div class="face-button4-img">
         <img src="https://static.cmereye.com/imgs/2023/06/0e3459a98e20a0ba.png" alt="">
       </div>
     </div>
   </div>
   <div v-else>
      <div class="face-button3 face-button4" @click="drawerBool = true">
        <div class="face-primary">
          <img class="what" src="https://static.cmereye.com/imgs/2023/06/6abf097c810dcb7b.png" alt="">
          <span>WeChat</span>
        </div>
      </div>
   </div>
    <el-drawer
      title="我是标题"
      :visible.sync="drawerBool"
      :direction="'btt'"
      size="50%"
      :with-header="false">
      <div class="drawerImg">
        <img src="https://static.cmereye.com/imgs/2023/06/b41f78d76531f6e5.jpg" alt="">
      </div>
    </el-drawer>
  </div>
</div>
  
</template>
<script>
export default {
  data() {
     return{
      isShow: true,
      screenWidth: '',
      drawerBool: false
     }

  },
  mounted(){
    this.dynamicLoadCss(`https://www.cmerdental.com/css/vikim.css?parms=${new Date()}`)
  },
   created() {
        if (process.client) {
          this.screenWidth = document.body.clientWidth
          window.onresize = () => {
            return (() => {
              this.screenWidth = document.body.clientWidth
            })
          }
        }
      
      },
      methods: {
         dynamicLoadCss(url) {
          let head = document.getElementsByTagName('head')[0];
          let link = document.createElement('link');
          link.type = 'text/css';
          link.rel = 'stylesheet';
          link.href = url;
          head.appendChild(link);
        }
      },
  watch: {
        screenWidth: {
          handler: function (val, oldVal) {
            console.log('val========',val);
            if (val < 768) {
              console.log('屏幕宽度小于760px')
              this.isShow = false
            } else {
              console.log('屏幕宽度大于760px')
              this.isShow = true
            }
          },
          immediate: true
        },
      }
}
</script>
<style lang="scss" scoped>
//pc
@media only screen and (min-width: 760px) {
  .face-primary{
    img{
      // padding-left: 0.5vw;
    }
  }
  .online{
      position: fixed;
      right:0;
      margin-left:auto;
      margin-right:auto;
      bottom: 16vw;
      z-index: 999;
      a{
        margin: 0;
      }
   }
   .face-button1 {
            width: 180px;
            height: 60px;
            display: inline-block;
            font-size: 20px;
            font-weight: 500;
            text-align: left;
            text-decoration: none;
            overflow: hidden;
            margin-bottom:10px;
            // background: white;
        }
   .face-button1 .face-primary {
            background-color: #57B2F3;
            color: #fff;
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 101%;
            height: 100%;
             border-radius: 16px 0 0 16px;
        }
        .what{
              padding: 0 0.5vw 0 1.5vw;
        }
.face-button {
              width: 180px;
            height: 60px;
            display: inline-block;
            font-size: 20px;
            font-weight: 500;
            text-align: center;
            text-decoration: none;
            overflow: hidden;
            margin-bottom:10px;
            // padding-right: 1vw;
            // background: white;
        }

        .face-button .icon {
            margin-right: 8px;
            font-size: 18px; 
        }
        .face-button2 {
              width: 180px;
            height: 60px;
            display: inline-block;
            font-size: 20px;
            font-weight: 500;
            text-align: center;
            text-decoration: none;
            overflow: hidden;
            margin-bottom:10px;
            // padding-right: 1vw;
            // background: white;
        }

        .face-button2 .face-primary {
            background-color: #FFB7B7;
            color: #fff;
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 101%;
            height: 100%;
            border-radius: 16px 0 0 16px;

        }
        .face-button4 .face-primary{
            background-color: #9BD0F5;
        }
        .face-button4{
          position: relative;
          overflow: visible;
          cursor: pointer;
        }
        .face-button4-img{
          position: absolute;
          top: 50%;
          left: -135%;
          padding-right: 35%;
          transform: translateY(-50%);
          display: none;
          z-index: 9999999999999;
        }
        .face-button4:hover .face-button4-img{
          display: block;
        }
        .face-button .face-primary {
            background-color: #9BD0F5;
            color: #fff;
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 101%;
            height: 100%;
            border-radius: 16px 0 0 16px;

        }
        .what1{
          padding-right: 0.5vw;
        }

}
@media only screen and (min-width: 1000px) and (max-width: 1440px) {
  .online{
    z-index: 9999;
  }
}
//mb
@media only screen and (max-width: 760px) {
  .face-primary{
    .what{
      width:6vw
      }
  }
  .container{
    position: fixed;
    bottom: 0;
    z-index: 9999;
    padding: 0;
    overflow-y: hidden;
    // display: flex;
    // justify-content: center;
  }
  a{
    margin: 0;
    padding: 0 !important;
  }
  .face-button3{
    width: 80px;
    height: 80px;
    position: fixed;
    right: 20px;
    bottom: 170px;
    border-radius: 50% !important;
    text-decoration: none;
    background: #FFB7B7;
  }
  .face-button3 .face-primary{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }
  .face-button4{
    bottom: 80px;
    background: #9BD0F5;
  }
  .face-button4 .face-primary img{
    width: 34px;
  }
  .face-button4 .face-primary span{
    color: #fff;
  }
  .drawerImg{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    img{
      max-height: 100%;
    }
  }
.face-button1 {
            width: 50%;
            // height: 60px;
            line-height: 56px ;
            display: block;
            font-size: 20px;
            font-weight: 500;
            text-align: center;
            text-decoration: none;
            color: #fff;
            overflow: hidden;
            margin-bottom:10px;
            margin: 0 !important;
            background-color: #57B2F3;
            border-radius: 18px 18px 0 0;
            // background: white;
        }
.face-button {
            width: 50%;
            // height: 60px;
            line-height: 56px ;
            display: block;
            font-size: 20px;
            font-weight: 500;
            text-align: center;
            text-decoration: none;
            overflow: hidden;
            margin-bottom:10px;
            float: left;
            margin: 0 !important;
            background-color: #9BD0F5;
            color: #fff;
            border-radius: 18px 18px 0 0;
            // background: white;
        }
}
</style>
