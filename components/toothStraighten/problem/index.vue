<template>
  <div class="bg-white py-5 pb-0 py-xs-2">
    <div class="flex justify-center texts">
      <h2> 矯齒（箍牙）常見問題</h2>
      <img src="@/asset/image/about-me/serve/Vector.png" alt="">
    </div>
    <div class="coll-box">
      <el-collapse v-model="activeNames" @change="handleChange">
        <!-- <img src="@/asset/image/free/Q.png" alt="">  :class="judgeActive('1')!==-1? 'backgroud1':'backgroud2'"-->
        <el-collapse-item name="1">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('1') !== -1 ? 'p2' : 'p1'">甚麼年紀適合接受矯齒治療？</p>
            </div>
            <i :class="judgeActive('1') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>

              <ul>
                <li>完美笑容的黃金方程式包括：牙齒排列整齊、大小適中、色澤自然亮白，中間線上下對齊及牙齦健康。</li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('2') !== -1 ? 'p2' : 'p1'">甚麼是完美笑容的黃金方程式？</p>
            </div>
            <i :class="judgeActive('2') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>

              <ul>
                <li>完美笑容的黃金方程式包括：牙齒排列整齊、大小適中、色澤自然亮白，中間線上下對齊及牙齦健康。</li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('3') !== -1 ? 'p2' : 'p1'">透明牙箍是否有效? </p>
            </div>
            <i :class="judgeActive('3') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>

              <ul>
                <li>由於牙根消炎需時，中間過程或要多次替換消炎藥，因此通常要複診2至4次，<br>每次相距1-2星期，當中或會因不同的牙齒狀況而有所不同。</li>

              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('4') !== -1 ? 'p2' : 'p1'">透明牙箍如何矯正牙齒？ </p>
            </div>
            <i :class="judgeActive('4') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>

              <ul>
                <li>由於牙根消炎需時，中間過程或要多次替換消炎藥，因此通常要複診2至4次，<br>每次相距1-2星期，當中或會因不同的牙齒狀況而有所不同。</li>

              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('5') !== -1 ? 'p2' : 'p1'">佩戴透明牙箍前有甚麼要注意？ </p>
            </div>
            <i :class="judgeActive('5') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>

              <ul>
                <li>由於牙根消炎需時，中間過程或要多次替換消炎藥，因此通常要複診2至4次，<br>每次相距1-2星期，當中或會因不同的牙齒狀況而有所不同。</li>

              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="6">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('6') !== -1 ? 'p2' : 'p1'">透明牙箍的療程要多長時間？ </p>
            </div>
            <i :class="judgeActive('6') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>

              <ul>
                <li>由於牙根消炎需時，中間過程或要多次替換消炎藥，因此通常要複診2至4次，<br>每次相距1-2星期，當中或會因不同的牙齒狀況而有所不同。</li>

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

@media only screen and (max-width: 768px) {}

@media only screen and (min-width: 768px) and (max-width: 4096px) {
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
