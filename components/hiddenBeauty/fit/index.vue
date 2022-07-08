<template>
<div>
   <div class="bg-white py-5 pb-0 py-xs-2">
    <div class="flex justify-center texts">
      <h2>隱適美適合我嗎?</h2>
      <img src="@/asset/image/about-me/serve/Vector.png" alt="">
      <p>牙齒不齊有機會影響進食、發音、口腔清潔，更有機會引致蛀牙、牙周病等一系列牙齒問題。隱適美可以解決不同牙齒咬合問題，你有以下牙齒狀況嗎？</p>
    </div>
    <div class="coll-box">
      <div>
        <img src="@/asset/image/hiddenBeauty/teeth01.png" alt="">
        <p>咬合過深</p>
      </div>
      <div>
        <img src="@/asset/image/hiddenBeauty/teeth02.png" alt="">
        <p>倒及</p>
      </div>
    </div>
    <div class="coll-box coll-box-center">
      <div>
        <img src="@/asset/image/hiddenBeauty/teeth03.png" alt="">
        <p>錯咬/反咬合</p>
      </div>
      <div>
        <img src="@/asset/image/hiddenBeauty/teeth04.png" alt="">
        <p>牙縫過大</p>
      </div>
      <div>
        <img src="@/asset/image/hiddenBeauty/teeth05.png" alt="">
        <p>開咬</p>
      </div>
    </div>
    <div class="coll-box">
      <div>
        <img src="@/asset/image/hiddenBeauty/teeth06.png" alt="">
        <p>齒列擠擁</p>
      </div>
      <div>
        <img src="@/asset/image/hiddenBeauty/teeth07.png" alt="">
        <p>前排齒列擠擁</p>
      </div>
    </div>
  </div>
  <div class="table-bg">
    <div class="flex justify-center texts">
          <h2>為何選擇隱適美療程?</h2>
          <img class="icons" src="@/asset/image/about-me/serve/Vector.png" alt="">
        </div>
    <div class="table-box">
            <table class="tables">
              <tr>
                <td>舒適度</td>
              </tr>
              <tr style=" background: #ECF7FC">
                <td>療程跟進</td>
              </tr>
              <tr>
                <td>數據支援</td>
              </tr>
              <tr style=" background: #ECF7FC; ">
                <td >可處理療程</td>
              </tr>
               <tr>
                <td>預測技術</td>
              </tr>
            </table>
            <table class="tablesd">
              <tr style="height: 2vw;">
                <th>固定式假牙</th>
              </tr>
              <tr>
                <td>
                 <ul class="teshu">
                  <li>物料為具專利的復合層物料製造牙箍以U型剪裁貼合牙齦，舒適度最佳</li>
                </ul>
                </td>
              </tr>
              <tr style=" background: #ECF7FC">
              <td>
                <ul>
                  <li>由註冊及持續接手培訓的隱適美牙醫看診及制定療程每4-8星期回診，定期跟進矯齒效果及進度</li>
                </ul>
                </td>
              </tr>
              <tr>
                <td>
                 <ul>
                  <li>收集及擁有來自全球隱適美使用者資料庫，超過1,200萬大數據不斷更新及調整矯正技術，提高成效及舒適度</li>
                </ul>
                </td>
              </tr>
             
              <tr style=" background: #ECF7FC">
              <td >
                <ul>
                  <li>可處理輕微、中度至複雜的矯齒個案</li>
                </ul>
                </td>
              </tr>
               <tr>
                <td>
                 <ul>
                  <li>牙箍內附有SmartForce專利附件粒粒，預測及精準配合牙齒移動需要，同步將不同牙齒的牙冠和牙腳正確移動</li>
                </ul>
                </td>
              </tr>
            </table>
            <table class="tablesd">
              <tr style="height: 2vw;">
                <th>其他隱形牙箍品牌</th>
              </tr>
              <tr>
                <td>
                 <ul style="margin: 1.5vw 0;">
                  <li>使用無乳膠或醫用塑料牙箍剪裁較為平面，舒適度欠佳，有機會令牙齦受感染</li>
                </ul>
                </td>
              </tr>
              <tr style=" background: #ECF7FC">
              <td>
                <ul>
                  <li>獲註冊牙醫最少3次看診，只有註冊牙醫初次面診，甚至沒有註冊牙醫看診及跟進</li>
                </ul>
                </td>
              </tr>
              <tr>
                <td>
                 <ul>
                  <li>未有收集資料庫或使用者數據甚少</li>
                </ul>
                </td>
              </tr>
              <tr style=" background: #ECF7FC">
              <td>
                <ul style="margin: 0.6vw 0;">
                  <li>只可處理輕微至中度複雜個案</li>
                </ul>
                </td>
              </tr>
               <tr>
                <td>
                 <ul>
                  <li>未有使用附件或預測精準度低</li>
                </ul>
                </td>
              </tr>
            </table>
            
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
  methods: {
  }
}
</script>
<style lang="scss" scoped>
p {
  margin-bottom: 0;
}

.texts {
  text-align: center;
  padding-top: 9rem!important;
  h2 {
    font-weight: 500;
    color: #79828D;
    margin-bottom: 0vw;
  }

  image {
    text-align: center;
  }
}

@media only screen and (max-width: 768px) {}

@media only screen and (min-width: 768px) and (max-width: 4096px) {
  td{
    height: 10vw;
  }

.table-box {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 7vw 0;
    text-align: left !important;
  }
.table-bg{
    background: #ECF7FC;
}
  .lists {
    display: flex;
    margin: 2vw 18vw;
  }

   .tablesd {
    margin-left: 4vw;
    color: #57B2F3;
    background-color: #fff;
    border: 3px solid #9BD0F5;
    border-radius: 20px;
    border-collapse: separate;
    border-spacing: 0;
    box-shadow: 13px 15px 0 #a2d4f7;
    border-spacing: 0;
    width: 16%;
    height: 35vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;

    ul {
      list-style-type: disc;
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      margin: 2vw 0;
    }
  .teshu{
    margin: 1vw 0;
  }
    th {
      text-align: center;
      color: #fff;
      background-color: #57B2F3;
      border-radius: 17px 17px 0 0;
    }

    .thd {
      color: #57B2F3;
      background-color: #ECF7FC;
      border-radius: 20px 20px 0 0;
    }
    td:nth-child(3){
        border-radius:  0 0 20px 20px;
      }
  }

  .tables {
    color: #57B2F3;
    background-color: #fff;
    border: 2px solid #9BD0F5;
    border-radius: 10px;
    border-collapse: separate;
    border-spacing: 0;
    border-spacing: 1;
    box-shadow: 13px 15px 0 #a2d4f7;
    border-spacing: 0;
    width: 7%;
    height: 30vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;
    // td:last-of-type(0){
    //   background-color: #79828D;
    //     border-radius:  0 0 10px 10px ;
    //   }
    tr {
      text-align: center;
      
      
    }
  }

  .coll-box-center{
    width: 100% !important;
  }
  .coll-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    p{
      color: #57B2F3;
      padding-top: 1vw;
    }
  }
  .bg-white{
    width: 66%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
  }
  ::v-deep .el-collapse-item__arrow {
    display: none;
  }

  ::v-deep .el-collapse-item__header {
    font-weight: 400;
    font-size: 19px;
    height: 82px;
    padding: 0 2vw;
    justify-content: space-between;
  }

  ::v-deep .el-collapse-item__header.is-active {
    background-color: #ECF7FC;

  }

  ::v-deep .el-collapse-item__content {
    font-weight: 400;
    font-size: 19px;
    padding-left: 2vw;
    // background-color: #DFDFDF;
  }

  .coll-box {
    margin: 3vw auto;
    width: 76%;
  }

  .contents {
    display: flex;
    align-items: center;

    p {
      color: #79828D;
    }

    span {
      color: #9BA5B1;

    }
  }

  .discon {
    margin: 1vw 0 0 0;
    display: flex;

    ul {
      padding-left: 0.2vw;
    }

    span {
      color: #9BA5B1;
      font-size: 16px;

    }
  }

  .title1 {
    display: inline-block;
    width: 40px;
    height: 25px;
    background-image: url(~@/asset/image/implant/Q.png);
    background-repeat: no-repeat;
  }

  .title2 {
    display: inline-block;
    width: 40px;
    height: 25px;
    background-image: url(~@/asset/image/implant/A.png);
    background-repeat: no-repeat;
    color: #fff;
  }

  .downArrow1 {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-image: url(~@/asset/image/implant/+.png);
  }

  .downArrow2 {
    // display: inline-block;
    // width: 12px;
    // height: 12px;
    // background-image: url(~@/asset/image/implant/+.png);
    // transform: rotate(-180deg);
  }


}
</style>
