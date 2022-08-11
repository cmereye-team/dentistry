<template>
  <div class="bg-white py-5 pb-0 py-xs-2">
    <div class="flex justify-center texts">
        <h2>牙周病常見問題</h2>
        <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt=""  >
    </div>
    <div class="coll-box">
      <el-collapse v-model="activeNames" @change="handleChange" accordion>
            <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt="">  :class="judgeActive('1')!==-1? 'backgroud1':'backgroud2'"-->
              <el-collapse-item  name="1">
                  <template slot="title"  >
                    <div class="contents"  >
                    <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
                    <i class="title1"></i>
                    <p :class="judgeActive('1')!==-1? 'p2':'p1'">牙肉腫脹及刷牙流牙血是牙周病的徵兆嗎？</p> 
                    </div>
                      <i :class="judgeActive('1')!==-1? 'downArrow2':'downArrow1'"></i>
                  </template>
                  <div class="discon">
                     <i class="title2"></i>
                   <span>
                    <ul>
                      <li>牙周病的主要原因是口腔衛生狀態不好，令牙垢膜長期積聚，分泌出毒素感染牙周組織，導致牙肉腫脹或流牙血。如發炎情況持續，令牙槽骨受到侵蝕，形成「牙周袋」，當情況持續惡化的時候，便會令牙齒變得鬆動，移位，甚至脫落。</li>
                    </ul>
                    </span>
                  </div>
              </el-collapse-item>
              <el-collapse-item  name="2">
                  <template slot="title"  >
                    <div class="contents"  >
                    <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
                    <i class="title1"></i>
                    <p :class="judgeActive('2')!==-1? 'p2':'p1'">甚麼人較容易有牙周病?</p> 
                    </div>
                      <i :class="judgeActive('2')!==-1? 'downArrow2':'downArrow1'"></i>
                  </template>
                  <div class="discon">
                     <i class="title2"></i>
                   <span>
                   
                    <ul>
                      <li>1. 吸煙人士</li>
                      <li>2. 沒有定期口腔檢查及洗牙</li>
                      <li>3. 全身性疾病患者（如：AIDS、糖尿病等）</li>
                      <li>4. 長期服用藥物人士</li>
                    </ul>
                    </span>
                  </div>
              </el-collapse-item>
              <el-collapse-item  name="3">
                  <template slot="title"  >
                    <div class="contents"  >
                    <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
                    <i class="title1"></i>
                    <p :class="judgeActive('3')!==-1? 'p2':'p1'">為何定期洗牙，早晚刷牙，也會患上牙周病？</p> 
                    </div>
                      <i :class="judgeActive('3')!==-1? 'downArrow2':'downArrow1'"></i>
                  </template>
                  <div class="discon">
                     <i class="title2"></i>
                   <span>
                   
                     <ul>
                      <li>定期洗牙的確能維持口腔健康，但牙周病並不只是牙齦出現問題，牙周骨質受到破壞也有影響。最近亦有研究顯示，牙周病與糖尿病有若干關係。因此，定期口腔檢查及洗牙是必須的。</li>
                    </ul>
                    </span>
                  </div>
              </el-collapse-item>
              <el-collapse-item  name="4">
                  <template slot="title"  >
                    <div class="contents"  >
                    <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
                    <i class="title1"></i>
                    <p :class="judgeActive('4')!==-1? 'p2':'p1'">接受牙周治療後，牙齒為何會變酸軟或敏感？</p> 
                    </div>
                      <i :class="judgeActive('4')!==-1? 'downArrow2':'downArrow1'"></i>
                  </template>
                  <div class="discon">
                     <i class="title2"></i>
                   <span>
                   
                     <ul>
                      <li>由於牙周病令牙齦萎縮，牙根外露，因此接受牙根刮治後，有些牙齒會變得更敏感，但這些情況一般會在三至四天後慢慢消退。</li>
                    </ul>
                    </span>
                  </div>
              </el-collapse-item>
              <el-collapse-item  name="5">
                  <template slot="title"  >
                    <div class="contents"  >
                    <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
                    <i class="title1"></i>
                    <p :class="judgeActive('5')!==-1? 'p2':'p1'">接受牙周治療後，需要多久覆診一次？</p> 
                    </div>
                      <i :class="judgeActive('5')!==-1? 'downArrow2':'downArrow1'"></i>
                  </template>
                  <div class="discon">
                     <i class="title2"></i>
                   <span>
                   
                     <ul>
                      <li>牙醫會按病況的嚴重程度，患者的配合程度而預計覆診時間。一般建議情況受控的患者每三個月覆診一次，監察牙周康復進程。</li>
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
    judgeActive(data){
      console.log(data);
      return this.activeNames.indexOf(data)
    }
    }
  }
</script>
<style lang="scss" scoped>
p{
      margin-bottom: 0;
}
.texts{
    text-align: center;
    h2{
    font-weight: 500;
    color: #79828D;
    margin-bottom: 0vw;
  }
  image{
    text-align: center;
  }
}

@media only screen and (max-width: 768px) {
 .contents p{
  color: #79828D;
    font-size: 16px;
     line-height: 21px;
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

@media only screen and (min-width: 768px) and (max-width: 4096px) {
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
  margin:3vw auto;
  width: 60%;
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
.downArrow2{
  // display: inline-block;
  // width: 12px;
  // height: 12px;
  // background-image: url(https://static.cmereye.com/static/lkximg/image/implant/+.png);
  // transform: rotate(-180deg);
}
  
  
}
</style>
