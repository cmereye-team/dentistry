<template>
  <div class="bg-white py-5 pb-0 py-xs-2 main-container">
    <div class="flex justify-center texts">
      <h2>拔牙及智慧齒脫除<br>常見問題</h2>
      <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
    </div>
    <div class="coll-box">
      <el-collapse v-model="activeNames" @change="handleChange" accordion>
        <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt="">  :class="judgeActive('1')!==-1? 'backgroud1':'backgroud2'"-->
        <el-collapse-item name="1">
          <template slot="title">
            <div class="contents">
              <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('1') !== -1 ? 'p2' : 'p1'">拔牙後多久才能進食？</p>
            </div>
            <i :class="judgeActive('1') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>
              <ul>
                <li>需確保麻醉藥的藥力完全散退，以及傷口完全止血，一般建議拔牙後４小時後才可開始進食</li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <div class="contents">
              <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('2') !== -1 ? 'p2' : 'p1'">拔牙後可以刷牙嗎?</p>
            </div>
            <i :class="judgeActive('2') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>

              <ul>
                <li>拔牙當天可暫停刷牙，第二天可恢復刷牙程序，但應注意力度，避免觸碰到傷口，造成滲血。</li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <div class="contents">
              <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('3') !== -1 ? 'p2' : 'p1'">甚麼情況下需拔掉智慧齒？</p>
            </div>
            <i :class="judgeActive('3') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>

              <ul>
                <li>一般在智慧齒有機會引起其他口腔及牙齒問題，才會建議進行拔牙手術：</li>
                <li>1. 智慧齒旁的牙肉經常發炎腫痛</li>
                <li>2. 智慧齒橫生或斜生</li>
                <li>3. 智慧齒或附近牙齒出現蛀牙或裂縫</li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <div class="contents">
              <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('4') !== -1 ? 'p2' : 'p1'">拔智慧齒痛嗎？</p>
            </div>
            <i :class="judgeActive('4') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>

              <ul>
                <li>進行手術時，醫生會先在拔牙位置注射局部麻醉藥，大大減低不適感。手術後應按時服用醫生處方的止痛藥，處理手術後的腫痛不適。</li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template slot="title">
            <div class="contents">
              <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('5') !== -1 ? 'p2' : 'p1'">拔智慧齒需要照x光嗎？</p>
            </div>
            <i :class="judgeActive('5') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>

              <ul>
                <li>拔智慧齒前必須先照X光，必要時或要額外進行電腦掃瞄，了解牙根及神經線的位置，衡量風險，計劃拔智慧齒的方式。</li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
          <el-collapse-item name="6">
          <template slot="title">
            <div class="contents">
              <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('6') !== -1 ? 'p2' : 'p1'">為何拔智慧齒會比一般拔牙程序複雜？</p>
            </div>
            <i :class="judgeActive('6') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>

              <ul>
                <li>智慧齒生長於口腔內最後的位置，更有橫生、斜生的情況，拔除時有可能要翻起牙齦。為避免神經線受損，醫生亦有可能將智慧齒分成數個部分，再逐一清除，因此比一般拔牙程序複雜。</li>
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

@media only screen and (max-width: 760px) {
.contents p{
  color: #79828D;
    font-size: 18px;
    line-height: 23px;
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
