<template>
<div class="container">
  <div class="online footer">
    <div>
      <a id="zxzx" class="face-button d-block   ">
            <div class="face-primary">
              <span class="icon"> <i class="fa fa-headphones ">
                <img src="@/asset/image/footce/phone.png" alt="">
              </i></span>
              電話預約
            </div>
          </a>
    </div>
   <div>
    <a class="face-button1 d-block">
      <div class="face-primary">
        <span class="icon"> <i class="fa  fa-volume-control-phone ">
        <img class="what" src="@/asset/image/footce/yuyue.png" alt="">
        </i></span>
        WhatApps預約
      </div>
    </a>
   </div>
    
  </div>
</div>
  
</template>

<style lang="scss" scoped>
//pc
@media only screen and (min-width: 768px) {
  .face-primary{
    img{
      padding-left: 0.5vw;
    }
  }
  .online{
      position: fixed;
      right:0;
      margin-left:auto;
      margin-right:auto;
      bottom: 16vw;
      a{
        margin: 0;
      }
   }
   .face-button1 {
            width: 146px;
            height: 56px;
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
.face-button {
            width: 146px;
            height: 56px;
            display: inline-block;
            font-size: 20px;
            font-weight: 500;
            text-align: center;
            text-decoration: none;
            overflow: hidden;
            margin-bottom:10px;
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
//mb
@media only screen and (max-width: 768px) {
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
