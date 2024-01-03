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
              <span>隱適美療程並沒有特別的年齡限制，只要有足夠牙齒數量及經牙醫評估你的狀況合適就可以。</span>
              <span>兒童為最理想的矯齒黃金期，由於兒童的骨質較軟，令移動速度及效果較好。家長可考慮於小</span>
              <span>童7歲左右的換牙階段，找牙醫作檢查及評估，及早針對牙冠及早期矯正需要。</span>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('3') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('3') !== -1 ? 'p2' : 'p1'">戴上隱適美牙箍會有痛楚嗎？</div>
            </div>
          </template>
          <div class="discon">
            <div>
              <span>隱適美牙箍以漸進緩和的矯正力道移動你的牙齒，相比其他矯正療程引起的痛楚較低。</span>
              <span>而某些使用者會於剛戴上新牙箍數天內或會感到緊繃的感覺，此為牙齒移動的跡象，不適感亦會於數天後消失。</span>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('4') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('4') !== -1 ? 'p2' : 'p1'">隱適美的全方位矯齒療程同副線隱適美‧易（Invisalign Go）有什麼分別？</div>
            </div>
          </template>
          <div class="discon">
            <div>
              <span>隱適美的全方位矯齒療程可解決輕微至複雜的矯齒個案，包括開咬、深咬、錯咬、倒及、哨牙等較複雜的牙齒問題。</span>
              <span>隱適美‧易（Invisalign Go）矯齒療程主要處理較輕微至中度的牙齒問題，適合想於較短時間內改善牙縫、牙齒擠擁等牙齒排列問題，價格亦較為優惠。</span>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('5') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('5') !== -1 ? 'p2' : 'p1'">對小朋友而言，隱適美兒童專線 (Invisalign First) 矯齒療程安全嗎？</div>
            </div>
          </template>
          <div class="discon">
            <div>
              <span>Invisalign First 矯齒牙箍採用已獲專利的SmartTrack材料，並且得到美國FDA認證其安全性。</span>
              <span>Invisalign First更根據兒童的短小牙齒進行優化，使用相應附件，提供穩定力度。牙箍亦可加上藍色依從性顯示點，方便檢查及監察牙箍佩戴時間，達致最佳療程效果。</span>
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
    width: 60%;
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
