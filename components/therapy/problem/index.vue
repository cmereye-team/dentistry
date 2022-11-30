<template>
  <div class="bg-white py-5 pb-0 py-xs-2 main-container">
    <div class="flex justify-center texts">
      <h2> 根管治療（杜牙根）常見問題</h2>
      <img src="@/asset/image/about-me/serve/Vector.png" alt="">
    </div>
    <div class="coll-box">
      <el-collapse v-model="activeNames" @change="handleChange" accordion>
        <!-- <img src="@/asset/image/free/Q.png" alt="">  :class="judgeActive('1')!==-1? 'backgroud1':'backgroud2'"-->
        <el-collapse-item name="1">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('1') !== -1 ? 'p2' : 'p1'">杜牙根會很痛嗎？</p>
            </div>
            <i :class="judgeActive('1') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>

              <ul>
                <li>進行手術時，醫生會先在杜牙根位置注射局部麻醉藥，大大減低不適感。手術後應按時服用醫生處方的止痛藥，處理手術後的腫痛不適。</li>
                <li>麻醉藥過後，杜牙根的牙齒仍有機會有少許痛楚，如有需要可服食止痛藥，一般幾天後不適便會慢慢舒緩。</li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('2') !== -1 ? 'p2' : 'p1'">杜牙根過程需時多久？</p>
            </div>
            <i :class="judgeActive('2') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>

              <ul>
                <li>由於牙根消炎需時，中間過程或要多次替換消炎藥，因此通常要覆診2至4次，<br>每次相距1-2星期，當中或會因不同的牙齒狀況而有所不同。</li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('3') !== -1 ? 'p2' : 'p1'">杜牙根後是否不會再蛀牙？ </p>
            </div>
            <i :class="judgeActive('3') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>

              <ul>
                <li>杜牙根後，牙神經被抽出，牙齒的琺瑯質及象牙質會被保留下來，所以仍有蛀牙的機會。<br> 因此完成治療後，應時刻保持口腔衛生，這樣可延長牙齒的壽命，大大提高治療成功率。</li>

              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('4') !== -1 ? 'p2' : 'p1'">完成杜牙根後，為何要裝上牙套？ </p>
            </div>
            <i :class="judgeActive('4') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>

              <ul>
                <li>根管治療後的牙齒較為脆弱，有機會斷裂，套上牙套能有效地保護該牙齒。</li>

              </ul>
            </span>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ['1']
    }
  },
  methods: {
    //判断是否打开
    judgeActive(data) {
      console.log(data);
      return this.activeNames.indexOf(data)
    }
  }
}
</script>
<style lang="scss">
  @media only screen and (min-width: 760px) and (max-width: 4096px) {
    .el-collapse-item__header{
      line-height: 23px !important;
    }
  }
</style>
<style lang="scss" scoped>
p {
  margin-bottom: 0;
}

.texts {
  text-align: center;

  h2 {
    font-weight: 500;
    color: #79828D;
    margin-bottom: 0vw;
  }

  image {
    text-align: center;
  }
}

@media only screen and (max-width: 760px) {
  .contents p{
  color: #79828D;
    font-size: 16px;
}
   ::v-deep .el-collapse-item__arrow{
  display: none;
}
 ::v-deep .el-collapse-item__header {
  font-weight: 400;
  font-size: 19px;
  height: 82px;
  padding: 0 2vw;
  justify-content: space-between;
}
::v-deep .el-collapse-item__header.is-active{
  background-color: #ECF7FC;

}

 ::v-deep .el-collapse-item__content{
  font-weight: 400;
  font-size: 19px;
  padding-left: 2vw;
  // background-color: #DFDFDF;
}
.coll-box{
  padding: 3vw;
  width: 100%;
}
.contents{
  display: flex;
  align-items: center;
  p{
    color: #79828D;
  }
  span{
    color: #9BA5B1;

  }
}
.discon{
  margin: 1vw 0 0 0;
  display: flex;
  ul{
    padding-left: 0.2vw;
  }
   span{
    color: #9BA5B1;
    font-size: 16px;
    width: 84%;
  }
}
.title1{
  display: inline-block;
  width: 40px;
  height: 25px;
 background-image: url(~@/asset/image/implant/Q.png) ;
 background-repeat: no-repeat;
}
.title2{
  display: inline-block;
  width: 40px;
  height: 25px;
  background-image: url(~@/asset/image/implant/A.png);
  background-repeat: no-repeat;
  color: #fff;
}
.downArrow1{
  display: inline-block;
  width: 12px;
  height: 12px;
  background-image: url(~@/asset/image/implant/+.png);
}
}

@media only screen and (min-width: 760px) and (max-width: 4096px) {
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
    width: 60%;
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
      li:nth-child(2){
        padding-top: 1vw;
      }
    }

    span {
      color: #9BA5B1;
      font-size: 16px;
      width: 85%;
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
