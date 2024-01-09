<template>
  <div class="main-container qoa">
    <div class="why_significance">全瓷貼片常見問題</div>
    <div class="coll-box">
      <el-collapse v-model="activeNames" @change="handleChange" accordion>
        <el-collapse-item name="1">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('1') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('1') !== -1 ? 'p2' : 'p1'">全瓷貼片一定要磨牙嗎？</div>
            </div>
          </template>
          <div class="discon">
            進行瓷貼片療程前，需進行輕微磨牙處理，以確保其穩定性和美觀度。這個過程盡量保留牙齒結構，追求效果自然。
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('2') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('2') !== -1 ? 'p2' : 'p1'">全瓷貼片會造成牙齒敏感嗎？</div>
            </div>
          </template>
          <div class="discon">
            術後牙齒可能會變得敏感，屬正常現象，一般會在短時間內逐漸消退，並慢慢適應新環境。
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('3') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('3') !== -1 ? 'p2' : 'p1'">全瓷貼片容易脫落嗎？</div>
            </div>
          </template>
          <div class="discon">
            裝上瓷貼片後，需注意保持良好的口腔清潔習慣，避免進食堅硬食物，並定期覆診檢查，確保瓷貼片的穩固性和壽命，以減低其脫落風險。
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <div class="contents">
              <i :class="judgeActive('4') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
              <div :class="judgeActive('4') !== -1 ? 'p2' : 'p1'">全瓷貼片實際效果跟期望有落差嗎？</div>
            </div>
          </template>
          <div class="discon">
            透過數位模擬技術，提前展示清晰的術後預覽，並製作實體模擬貼片供客人試戴。
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
  .qoa {
    &>div:nth-child(2) {
      margin-top: 42px;
      margin-bottom: 61px;
    }
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
    margin-top: 0 !important;
  }

  .coll-box {
    padding: 3vw;
    width: 100%;
  }

  .contents {
    display: flex;
    align-items: center;
    padding-left: 0;
    padding-right: 0;

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
      letter-spacing: 1.5px;
    }
  }

  .discon {
    color: #79828D;
    font-family: Noto Sans;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.3px;
    padding-left: 37px;
    padding-right: 5px;
    margin-top: 0;
  }

  .downArrow1 {
    display: inline-block;
    width: 36px;
    height: 36px;
    min-width: 36px;
    transition: all 0.3s;
    background-image: url(https://static.cmereye.com/imgs/2023/12/e5a7910bb0b35fd3.png);
    background-size: 100% 100%;
  }

  .downArrow2 {
    display: inline-block;
    width: 36px;
    height: 36px;
    min-width: 36px;
    background-image: url(https://static.cmereye.com/imgs/2023/12/72c48c3a0df2d2fa.png);
    background-size: 100% 100%;
    transition: all 0.3s;
  }
}

@media only screen and (min-width: 768px) {
  .qoa {
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
    margin: 75px auto;
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
    padding-left: 64px;
    color: #79828D;
    font-family: Noto Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.6px;
  }

  .downArrow1 {
    display: inline-block;
    width: 44px;
    height: 44px;
    background-image: url(https://static.cmereye.com/imgs/2023/12/e5a7910bb0b35fd3.png);
    transition: all 0.3s;
  }

  .downArrow2 {
    display: inline-block;
    width: 44px;
    height: 44px;
    transition: all 0.3s;
    background-image: url(https://static.cmereye.com/imgs/2023/12/72c48c3a0df2d2fa.png);
  }
}</style>
