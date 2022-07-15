<template>
  <div class="bg-white py-5 pb-0 py-xs-2">
    <div class="flex justify-center texts">
        <h2>全口牙托及局部牙托<br>常見問題</h2>
        <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt=""  >
    </div>
    <div class="coll-box">
      <el-collapse v-model="activeNames" @change="handleChange">
            <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt="">  :class="judgeActive('1')!==-1? 'backgroud1':'backgroud2'"-->
              <el-collapse-item  name="1">
                  <template slot="title"  >
                    <div class="contents"  >
                    <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
                    <i class="title1"></i>
                    <p :class="judgeActive('1')!==-1? 'p2':'p1'">甚麼情況需要更換牙托？</p> 
                    </div>
                      <i :class="judgeActive('1')!==-1? 'downArrow2':'downArrow1'"></i>
                  </template>
                  <div class="discon">
                     <i class="title2"></i>
                   <span>
                    <ul>
                      <li>牙托需要每日清潔及浸洗。1. 先假牙清潔劑清洗牙托2. 以假牙清潔片溶劑浸<br>泡牙托清毒切勿過度刷洗牙托，以免在牙托表面形成凹槽，令細菌積聚。</li>
                      
                    </ul>
                    </span>
                  </div>
              </el-collapse-item>
              <el-collapse-item  name="2">
                  <template slot="title"  >
                    <div class="contents"  >
                    <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
                    <i class="title1"></i>
                    <p :class="judgeActive('2')!==-1? 'p2':'p1'">甚麼情況需要更換牙托？</p> 
                    </div>
                      <i :class="judgeActive('2')!==-1? 'downArrow2':'downArrow1'"></i>
                  </template>
                  <div class="discon">
                     <i class="title2"></i>
                   <span>
                   
                    <ul>
                        <li>牙托需要每日清潔及浸洗。1. 先假牙清潔劑清洗牙托2. 以假牙清潔片溶劑浸<br>泡牙托清毒切勿過度刷洗牙托，以免在牙托表面形成凹槽，令細菌積聚。</li>
                    </ul>
                    </span>
                  </div>
              </el-collapse-item>
              <el-collapse-item  name="3">
                  <template slot="title"  >
                    <div class="contents"  >
                    <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
                    <i class="title1"></i>
                    <p :class="judgeActive('3')!==-1? 'p2':'p1'">如何選擇適合的牙托？</p> 
                    </div>
                      <i :class="judgeActive('3')!==-1? 'downArrow2':'downArrow1'"></i>
                  </template>
                  <div class="discon">
                     <i class="title2"></i>
                   <span>
                   
                     <ul>
                      <li>2. 沒有定期口腔檢查及洗牙</li>
                      <li>3. 全身性疾病患者（如：AIDS、糖尿病等）</li>
                      <li>4. 長期服用藥物人士</li>
                    </ul>
                    </span>
                  </div>
              </el-collapse-item>
              <el-collapse-item  name="4">
                  <template slot="title"  >
                    <div class="contents"  >
                    <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
                    <i class="title1"></i>
                    <p :class="judgeActive('4')!==-1? 'p2':'p1'">如何護理牙托？</p> 
                    </div>
                      <i :class="judgeActive('4')!==-1? 'downArrow2':'downArrow1'"></i>
                  </template>
                  <div class="discon">
                     <i class="title2"></i>
                   <span>
                   
                     <ul>
                      <li>2. 沒有定期口腔檢查及洗牙</li>
                      <li>3. 全身性疾病患者（如：AIDS、糖尿病等）</li>
                      <li>4. 長期服用藥物人士</li>
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
