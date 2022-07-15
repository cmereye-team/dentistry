<template>
  <div class="bg-white py-5 pb-0 py-xs-2">
    <div class="flex justify-center texts">
      <h2> 補牙常見問題</h2>
      <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
    </div>
    <div class="coll-box">
      <el-collapse v-model="activeNames" @change="handleChange">
        <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt="">  :class="judgeActive('1')!==-1? 'backgroud1':'backgroud2'"-->
        <el-collapse-item name="1">
          <template slot="title">
            <div class="contents">
              <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('1') !== -1 ? 'p2' : 'p1'">補牙後為何會出現牙齒敏感及酸痛？</p>
            </div>
            <i :class="judgeActive('1') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>

              <ul>
                <li>
                  在洗牙後幾天內感到輕微酸痛，甚至有牙齦出血的情況，是由於牙齦在洗牙前<br>出現發炎情況，因此在清除口中細菌時，會引起牙齦紅腫及充血。只要繼續注<br>意口腔衛生，口腔不適及牙齦出血的現象就會逐漸消失，牙齦亦會回復健康。
                </li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <div class="contents">
              <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('2') !== -1 ? 'p2' : 'p1'">補牙後就不會再蛀牙嗎?</p>
            </div>
            <i :class="judgeActive('2') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>
              <ul>
                <li>
                  一般醫生會按蛀牙區域進行補牙。補牙時間不單取決於蛀牙的面積大小，還需<br>減低治療後的不適感,以及避免因咀嚼而令影響補牙的穩定性。因此，不同程度<br>的蛀牙需時不同，需要按流程分開完成。
                </li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <div class="contents">
              <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('3') !== -1 ? 'p2' : 'p1'">為何不能一次過處理所有蛀牙? </p>
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
              <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('4') !== -1 ? 'p2' : 'p1'">可修補水銀補牙後的效果? </p>
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

@media only screen and (max-width: 768px) {
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

  }
}
.title1{
  display: inline-block;
  width: 40px;
  height: 25px;
 background-image: url(https://static.cmereye.com/static/lkximg/image/implant/Q.png) ;
 background-repeat: no-repeat;
}
.title2{
  display: inline-block;
  width: 40px;
  height: 25px;
  background-image: url(https://static.cmereye.com/static/lkximg/image/implant/A.png);
  background-repeat: no-repeat;
  color: #fff;
}
.downArrow1{
  display: inline-block;
  width: 12px;
  height: 12px;
  background-image: url(https://static.cmereye.com/static/lkximg/image/implant/+.png);
}
}

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

  .downArrow2 {
    // display: inline-block;
    // width: 12px;
    // height: 12px;
    // background-image: url(https://static.cmereye.com/static/lkximg/image/implant/+.png);
    // transform: rotate(-180deg);
  }


}
</style>
