<template>
<div>
  <div class="online">
    <a id="zxzx" class="face-button d-block   ">
      <div class="face-primary">
        <span class="icon"> <i class="fa fa-headphones "></i></span>
        在線查詢
      </div>

    </a>
    <a class="face-button1 d-block">
      <div class="face-primary">
        <span class="icon"> <i class="fa  fa-volume-control-phone "></i></span>
        立即致電
      </div>
    </a>
  </div>
</div>
  
</template>

<style lang="scss" scoped>
//pc
@media only screen and (min-width: 768px) {
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
            text-align: center;
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
  
}
</style>
