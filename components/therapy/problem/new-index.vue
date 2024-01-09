<template>
  <div class="bg-white py-5 pb-0 py-xs-2 main-container mb-padding">
    <div class="why_significance">杜牙根常見問題</div>
    <div class="coll-box collapse-mb">
      <el-collapse v-model="activeNames" accordion>
        <el-collapse-item name="1">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('1') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('1') !== -1 ? 'p2' : 'p1'">杜牙根會痛嗎？</div>
            </div>
          </template>
          <div class="discon">
            <div>杜牙根時，牙醫會為客人進行麻醉，可大大減低疼痛感。杜牙根後，牙齒稍有敏感屬於正常現象，一般會在三至五天內自然消退。牙醫會提供藥物予客人以減輕炎症和紓緩術後疼痛。</div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('2') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('2') !== -1 ? 'p2' : 'p1'">整個杜牙根治療過程大概需時多久？</div>
            </div>
          </template>
          <div class="discon">
            <div>杜牙根療程時間長短取決於牙齒的狀況和治療的複雜程度，一般需要覆診大約2至4次，每次相隔1至2星期。如果是形狀特殊的牙齒，則需要更長的時間。</div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('3') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('3') !== -1 ? 'p2' : 'p1'">杜牙根後會發生二次蛀牙嗎？</div>
            </div>
          </template>
          <div class="discon">
            <div>杜牙根後，牙神經被抽出，牙齒的琺瑯質及象牙質會被保留下來，所以仍有蛀牙的機會。因此完成治療後，應時刻保持口腔衛生，這樣可延長牙齒的壽命，大大提高治療成功率。</div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('4') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('4') !== -1 ? 'p2' : 'p1'">杜牙根後，為何要裝上牙套？</div>
            </div>
          </template>
          <div class="discon">
            <div>杜牙根後，牙齒失去了原有的神經和血管。牙套能夠穩固牙齒，避免因脆弱而導致破損，且能保持牙齒排列整齊，有助於維持咬合的正常，從而讓咀嚼更順暢。</div>
            <div><sup>*</sup>牙齒的狀況和牙套的選擇因人而異。進行杜牙根前，最好與牙醫深入溝通，以找到最合適的治療方案。</div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('5') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('5') !== -1 ? 'p2' : 'p1'">杜牙根後會感染復發嗎？</div>
            </div>
          </template>
          <div class="discon">
            <div>杜牙根後牙痛不止，通常是因治療過程中沒有徹底清除細菌，或者保養不當而引起的。平時應保持口腔衛生、避免進食過硬食物和定期覆診檢查，有助減少感染風險。</div>
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
<style lang="scss" scoped>
@media only screen and (max-width: 767px) {
  .collapse-mb {
    margin-top: 42px;
  }
  .mb-padding {
    padding-top: 0 !important;
  }

  .contents p {
    color: #79828D;
    font-size: 16px;
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
    background-color: transparent;

  }

  ::v-deep .el-collapse-item__content {
    font-weight: 400;
    font-size: 19px;
    padding-left: 2vw;
    // background-color: #DFDFDF;
  }

  .coll-box {
    padding: 3vw;
    width: 100%;
  }

  .contents {
    display: flex;
    align-items: center;

    &>i {
      margin-right: 20px;
    }

    &>div {
      color: #79828D;
      font-family: Noto Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.6px;
    }
  }

  .discon {
    margin: 1vw 0 0 0;
    display: flex;
    flex-direction: column;
    padding-left: 77px;

    &>div {
      color: #79828D;
      font-family: Noto Sans;
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.3px;
    }
  }

  .downArrow1 {
    display: inline-block;
    width: 36px;
    height: 36px;
    transition: all 0.3s;
    background-image: url(https://static.cmereye.com/imgs/2023/12/e5a7910bb0b35fd3.png);
    background-size: 100% 100%;
  }

  .downArrow2 {
    display: inline-block;
    width: 36px;
    height: 36px;
    background-image: url(https://static.cmereye.com/imgs/2023/12/72c48c3a0df2d2fa.png);
    background-size: 100% 100%;
    transition: all 0.3s;
  }

  .why_significance {
    color: #79828D;
    text-align: center;
    font-family: Noto Sans;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: .1563rem;
    padding-bottom: .9375rem;
    position: relative;
  }

  .why_significance::after {
    content: '';
    background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Vector.5u4eydocd6c0.png');
    display: inline-block;
    width: 3.25rem;
    height: 0.625rem;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
  }
}

@media only screen and (min-width: 768px) {

  .el-collapse-item__header {
    line-height: 23px !important;
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
    background-color: transparent;
    padding: 0 35px;
  }

  ::v-deep .el-collapse-item__content {
    font-weight: 400;
    font-size: 19px;
    // padding-left: 117px;
    padding: 0 100px;
    // background-color: #DFDFDF;
  }

  .coll-box {
    margin: 3vw auto;
    width: 840px;
  }

  .contents {
    display: flex;
    align-items: center;

    &>i {
      margin-right: 20px;
    }

    &>div {
      color: #79828D;
      font-family: Noto Sans;
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 2.1px;
    }
  }

  .discon {
    // margin: 1vw 0 0 0;
    display: flex;
    flex-direction: column;

    &>div {
      color: #79828D;
      font-family: Noto Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.6px;
      padding-bottom: 20px;
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
    width: 44px;
    height: 44px;
    transition: all 0.3s;
    background-image: url(https://static.cmereye.com/imgs/2023/12/e5a7910bb0b35fd3.png);
  }

  .downArrow2 {
    display: inline-block;
    width: 44px;
    height: 44px;
    background-image: url(https://static.cmereye.com/imgs/2023/12/72c48c3a0df2d2fa.png);
    transition: all 0.3s;
  }

  .why_significance {
    color: #79828D;
    text-align: center;
    font-family: Noto Sans;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 2.5px;
    position: relative;
    padding-bottom: 20px;
  }

  .isArrowQuestion {
    padding-left: 20px;
  }

  .why_significance::after {
    content: '';
    background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Vector.5u4eydocd6c0.png');
    display: inline-block;
    width: 52px;
    height: 10px;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
  }

}
</style>
