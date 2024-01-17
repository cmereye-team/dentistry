<template>
<div class="container">
  <div class="online footer">
    <div  v-if="isShow">
      <a id="zxzx" class="face-button d-block" href="https://api.whatsapp.com/send?phone=85236202428" aria-hidden="true" target="_blank">
            <div class="face-primary">
              <span class="icon"> <i class="fa fa-headphones ">
                <img src="https://static.cmereye.com/static/lkximg/image/footce/phone.png" alt="">
              </i></span>
              電話預約
            </div>
          </a>
    </div>
     <div v-else>
      <a id="zxzx" class="face-button d-block web_app_a gtm_app" href="tel:85236202428 " aria-hidden="true" target="_blank">
            <div class="face-primary">
              <span class="icon"> <i class="fa fa-headphones ">
                <img src="https://static.cmereye.com/static/lkximg/image/footce/phone.png" alt="">
              </i></span>
              電話預約
            </div>
          </a>
    </div>
   <div>
    <a class="face-button1 d-block" href="https://api.whatsapp.com/send?phone=85295153927" aria-hidden="true" target="_blank">
      <div class="face-primary">
        <span class="icon"> <i class="fa  fa-volume-control-phone ">
        <img class="what" src="https://static.cmereye.com/static/lkximg/image/footce/yuyue.png" alt="">
        </i></span>
        WhatsApp預約
      </div>
    </a>
   </div>
    
  </div>
</div>
  
</template>
<script>
export default {
  data() {
     return{
      isShow: true,
      screenWidth: ''
     }

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
  watch: {
        screenWidth: {
          handler: function (val, oldVal) {
            // console.log('val========',val);
            if (val < 768) {
              // console.log('屏幕宽度小于760px')
              this.isShow = false
            } else {
              // console.log('屏幕宽度大于760px')
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
