<template>
  <div class="main-container qa">
    <div class="why_significance">隱形牙箍常見問題</div>
    <div class="coll-box">
      <el-collapse v-model="activeNames" accordion>
        <el-collapse-item name="1">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('1') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div>隱形矯正療程時多久？</div>
            </div>
          </template>
          <div class="discon">
            視乎個別患者的矯齒複雜程度、牙齒移動速度，隱形牙箍療程時間因人而異。一般而言，最快大約3個月就可以見到矯齒成效，而整個療程就平均需要1年至2年，如個案較為複雜，就可能需2年或以上。
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('2') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('2') !== -1 ? 'p2' : 'p1'">隱適美療程有年齡限制嗎?</div>
            </div>
          </template>
          <div class="discon">
            <div>
              隱形矯正無明確年齡界線，只需經牙科醫生評估適合便可進行療程。
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('3') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('3') !== -1 ? 'p2' : 'p1'">戴上隱形牙箍會有痛楚嗎？</div>
            </div>
          </template>
          <div class="discon">
            <div>
              隱形牙箍以漸進緩和的力道移動牙齒，痛感較其他矯正療程低。初期戴新牙箍可能感到緊繃，此為牙齒移動的跡象，數日後會自然消退。
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('4') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('4') !== -1 ? 'p2' : 'p1'">小朋友應在換牙後進行隱形矯正嗎？</div>
            </div>
          </template>
          <div class="discon">
            <div>
              小朋友的牙齒排列問題不容小覷，愈遲改善，影響範圍就愈廣泛。及早矯正牙齒有助減低治療難度或避免情況惡化。 建議家長考慮在小朋友7歲的換牙期，尋求牙醫的協助並接受檢查和評估。
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('5') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('5') !== -1 ? 'p2' : 'p1'">兒童專線隱形矯正療程安全嗎？</div>
            </div>
          </template>
          <div class="discon">
            <div>
              我們選用的隱形牙箍得到美國FDA認證其安全性，採用獲專利物料及專屬附件粒粒，可針對小朋友細小的牙冠，給予輕柔持續的移動力，亦能控制牙冠及牙腳安全移動。
            </div>
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
    },
  },
}
</script>
<style lang="scss" scoped>
@media only screen and (max-width: 760px) {
  ::v-deep .el-collapse-item__arrow {
    display: none;
  }

  ::v-deep .el-collapse-item__header {
    font-weight: 400;
    font-size: 19px;
    height: 82px;
    padding: 0 2vw;
    justify-content: space-between;
    line-height: 24px;
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
    padding: 3vw;
    width: 100%;
  }

  .contents {
    display: flex;
    align-items: center;
    width: fit-content;

    p {
      color: #79828D;
      width: 87%;
      text-align: -webkit-left;
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
      width: 84%;
    }
  }

  .title1 {
    display: inline-block;
    width: 40px;
    height: 25px;
    background-image: url(https://static.cmereye.com/static/lkximg/image/implant/Q.png);
    background-repeat: no-repeat;
  }

  .title2 {
    display: inline-block;
    width: 40px;
    height: 25px;
    background-image: url(https://static.cmereye.com/static/lkximg/image/implant/A.png);
    background-repeat: no-repeat;
    color: #fff;
  }

  .downArrow1 {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-image: url(https://static.cmereye.com/static/lkximg/image/implant/+.png);
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
    background-color: transparent;
  }

  ::v-deep .el-collapse-item__content {
    font-weight: 400;
    font-size: 19px;
    padding: 0 2vw;
    // background-color: #DFDFDF;
  }

  .coll-box {
    margin: 30px auto;
    // width: 60%;
  }

  .contents {
    display: flex;
    align-items: center;

    &>i {
      margin: 20px;
    }

    &>div {
      color: #79828D;
      font-family: Noto Sans;
      font-size: 21px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 2.1px;
    }
  }

  .discon {
    // margin: 1vw 0 0 0;
    display: flex;
    padding-left: 84px;
    padding-bottom: 30px;
    color: #79828D;
    font-family: Noto Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.6px;
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


}

@media screen and (min-width: 768px) {
  .qa {
    max-width: 840px !important;
    margin: auto;
    margin-top: 109px;
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

@media screen and (max-width: 767px) {
  ::v-deep .el-collapse-item__header.is-active {
    background-color: transparent;
  }

  .qa {
    margin-top: 61px;
  }

  .coll-box {
    margin-top: 42px;
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

  .discon {
    color: #79828D;
    font-family: Noto Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.6px;
    padding-left: 56px;
  }

  .contents {
    &>div {
      color: #79828D;
      font-family: Noto Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.6px;
    }
  }

  .downArrow1 {
    display: inline-block;
    width: 2.25rem;
    height: 2.25rem;
    min-width: 2.25rem;
    transition: all .5s;
    background-size: 100% 100%;
    background-image: url(https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Group-1018+.55g66fshwgc0.png);
    margin-right: 1.25rem;
  }

  .downArrow2 {
    display: inline-block;
    width: 2.25rem;
    min-width: 2.25rem;
    height: 2.25rem;
    transition: all .5s;
    background-size: 100% 100%;
    background-image: url(https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Group-1018.77gibtpj4xw0.png);
    margin-right: 1.25rem;
  }
}</style>
