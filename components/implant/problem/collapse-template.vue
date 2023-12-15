<template>
  <div class="collapse-template main-container">
    <div class="why_significance">植牙常見問題</div>
    <div>
      <el-collapse v-model="activeNames" accordion>
        <el-collapse-item name="1">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('1') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('1') !== -1 ? 'p2' : 'p1'">什麼情況需要補骨？</div>
            </div>
          </template>
          <div class="discon">
            <span>
              <ul>
                <li>
                  補骨手術因人而異，通常在口腔狀況欠佳的情況下進行。如缺牙時間過長，導致齒槽骨流失，或嚴重牙周病，牙齦與牙槽骨之間出現萎縮。客人長期配戴假牙，壓迫牙床造成骨質流失等等。在這些情況下，醫生一般會建議進行補骨手術。
                </li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('2') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('2') !== -1 ? 'p2' : 'p1'">植牙會痛嗎？</div>
            </div>
          </template>
          <div class="discon">
            <span>
              <ul>
                <li>
                  植牙手術會進行局部麻醉，減輕術程中引起的痛楚。另外，随著技術日新月異，微創植牙可將痛感降至最低，相比傳統植牙無需翻開牙齦，對口腔組織的影響該小，有助減輕術後的不適感。
                </li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('3') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('3') !== -1 ? 'p2' : 'p1'">植牙有什麼風險？</div>
            </div>
          </template>
          <div class="discon">
            <span>
              <ul>
                <li>
                  植牙治療的成功率高達90％至97％。電腦掃描為術前的準備步驟，讓醫生了解口腔內的重要組織，如下齒槽神經和上顎實，以便更精確地定位植牙的位置和角度，提高手術的準確性。
                </li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('4') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('4') !== -1 ? 'p2' : 'p1'">植牙會有什麼後道症？</div>
            </div>
          </template>
          <div class="discon">
            <span>
              <ul>
                <li>
                  植牙基少引起不良反應或其他併發症。植牙後出現牙觀發炎，進而影響植體的穩定性，通常是由口腔衛生欠佳或傷口處理不當引起的。因此，術後保養至關重要，應注意口腔衛生，並定期覆診檢查，以確保植牙穩定耐用。
                </li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('5') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('5') !== -1 ? 'p2' : 'p1'">拔牙後可立即植牙嗎？</div>
            </div>
          </template>
          <div class="discon">
            <span>
              <ul>
                <li>
                  拔牙後是否能立即植牙，視個人情況和牙醫的評估而定。牙醫會考慮牙齦的健康狀況、口腔內的骨質情形，以及是否存在發炎或細菌感染等因素。如一切都適合，醫生會建讓進行「即剝即種」手術。然而，健康狀況因人而異，需由牙醫評估後才能決定最合適的治察方案。
                </li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="6">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('6') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('6') !== -1 ? 'p2' : 'p1'">植牙後還會蛀牙嗎？</div>
            </div>
          </template>
          <div class="discon">
            <span>
              <ul>
                <li>
                  雖然植牙與真牙的材質不同，抗蛀能力校高，但也不代表可以忽略保養，應如同真牙體對待，以免細菌滋生感染，進而導致「植體周圍炎」。<br
                    class="pcShow" />一旦植牙被感染，會出現流血、化膜，甚至植牙脫落。預防勝於治寮，植牙前應妥善治庶牙周病，定期覆診檢查植牙狀況，以確保口腔健康。
                </li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="7">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('7') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('7') !== -1 ? 'p2' : 'p1'">哪些人不適宜植牙？</div>
            </div>
          </template>
          <div class="discon">
            <span>
              <ul>
                <li>
                  心血管痰病，糖尿病、高血墜，骨質疏鬆，免疫系統疾病、正服用抗凝血藥物人士，或孕婦等為植牙的高危人士。<br class="pcShow" />*如有以上健康狀況，請諮詢牙科醫生的意見。
                </li>
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
  name: 'collapse-template',
  props: {
    collapseList: {
      type: Array,
      default: () => { }
    },
  },
  data() {
    return {
      activeNames: ['1'],
      showPlush: false,
    };
  },
  methods: {
    judgeActive(data) {
      return this.activeNames.indexOf(data)
    },
  }
}
</script>

<style  scoped lang='scss'>
@media screen and (min-width: 768px) {
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
    // margin: 1vw 0 0 0;
    display: flex;

    ul {
      padding-left: 0;
    }

    span {
      color: #9BA5B1;
      font-size: 16px;
    }
  }

  .collapse-template {
    margin-bottom: 90px;

    &>div:nth-child(2) {
      max-width: 870px;
      margin: 0 auto;
      margin-top: 75px;
    }
  }

  .contents {
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

  ::v-deep .el-collapse-item__content {
    font-weight: 400;
    font-size: 19px;
    padding: 5px 0 20px 105px;
  }

  ::v-deep .el-collapse-item__header.is-active {
    background-color: transparent;
  }

  .discon {
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
  .collapse-template {
    padding: 0 20px;
    margin-bottom: 61px;
    &>div:nth-child(2) {
      margin-top: 45px;
    }
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
    padding-bottom: 0;
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
    padding-left: 55px;
    color: #79828D;
    font-family: Noto Sans;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.3px;

    ul {
      padding-left: 0;
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
</style>