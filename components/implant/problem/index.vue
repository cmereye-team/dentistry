<template>
  <div class="bg-white py-5 pb-0 py-xs-2">
    <div class="flex justify-center texts">
        <h2>植牙常見問題</h2>
        <img src="@/asset/image/about-me/serve/Vector.png" alt=""  >
    </div>
    <div class="coll-box">
      <el-collapse v-model="activeNames" @change="handleChange">
            <!-- <img src="@/asset/image/free/Q.png" alt="">  :class="judgeActive('1')!==-1? 'backgroud1':'backgroud2'"-->
              <el-collapse-item  name="1">
                  <template slot="title"  >
                    <div class="contents"  >
                    <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
                    <i class="title1"></i>
                    <p :class="judgeActive('1')!==-1? 'p2':'p1'">植牙手術會痛嗎？</p> 
                    </div>
                      <i :class="judgeActive('1')!==-1? 'downArrow2':'downArrow1'"></i>
                  </template>
                  <div class="discon">
                     <i class="title2"></i>
                   <span>
                   
                    <ul>
                      <li>以下人士未必適合接受植牙治療：</li>
                      <li>1. 未完成牙齒發育的青少年</li>
                      <li>2. 孕婦</li>
                      <li>3. 病歷複雜的病人</li>
                      <li>4. 有酒癮、煙癮的人士</li>
                      <li>5. 免疫系統病患者</li>
                      <li>6. 正服用抗凝血藥物人士</li>
                      <li>7. 高血壓或患有心血管疾病人士</li>
                      <li>接受治療前必須先作詳細檢查及評估，讓醫生能計劃治療建議。</li>
                    </ul>
                    </span>
                  </div>
              </el-collapse-item>
              <el-collapse-item  name="2">
                  <template slot="title"  >
                    <div class="contents"  >
                    <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
                    <i class="title1"></i>
                    <p :class="judgeActive('2')!==-1? 'p2':'p1'">甚麼人不適合接受植牙治療？</p> 
                    </div>
                      <i :class="judgeActive('2')!==-1? 'downArrow2':'downArrow1'"></i>
                  </template>
                  <div class="discon">
                     <i class="title2"></i>
                   <span>
                   
                    <ul>
                      <li>以下人士未必適合接受植牙治療：</li>
                      <li>1. 未完成牙齒發育的青少年</li>
                      <li>2. 孕婦</li>
                      <li>3. 病歷複雜的病人</li>
                      <li>4. 有酒癮、煙癮的人士</li>
                      <li>5. 免疫系統病患者</li>
                      <li>6. 正服用抗凝血藥物人士</li>
                      <li>7. 高血壓或患有心血管疾病人士</li>
                      <li>接受治療前必須先作詳細檢查及評估，讓醫生能計劃治療建議。</li>
                    </ul>
                    </span>
                  </div>
              </el-collapse-item>
              <el-collapse-item  name="3">
                  <template slot="title"  >
                    <div class="contents"  >
                    <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
                    <i class="title1"></i>
                    <p :class="judgeActive('3')!==-1? 'p2':'p1'">植牙手術會痛嗎？</p> 
                    </div>
                      <i :class="judgeActive('3')!==-1? 'downArrow2':'downArrow1'"></i>
                  </template>
                  <div class="discon">
                     <i class="title2"></i>
                   <span>
                   
                    <ul>
                      <li>以下人士未必適合接受植牙治療：</li>
                      <li>1. 未完成牙齒發育的青少年</li>
                      <li>2. 孕婦</li>
                      <li>3. 病歷複雜的病人</li>
                      <li>4. 有酒癮、煙癮的人士</li>
                      <li>5. 免疫系統病患者</li>
                      <li>6. 正服用抗凝血藥物人士</li>
                      <li>7. 高血壓或患有心血管疾病人士</li>
                      <li>接受治療前必須先作詳細檢查及評估，讓醫生能計劃治療建議。</li>
                    </ul>
                    </span>
                  </div>
              </el-collapse-item>
              <el-collapse-item  name="4">
                  <template slot="title"  >
                    <div class="contents"  >
                    <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
                    <i class="title1"></i>
                    <p :class="judgeActive('4')!==-1? 'p2':'p1'">植牙有甚麼風險？</p> 
                    </div>
                      <i :class="judgeActive('4')!==-1? 'downArrow2':'downArrow1'"></i>
                  </template>
                  <div class="discon">
                     <i class="title2"></i>
                   <span>
                   
                    <ul>
                      <li>以下人士未必適合接受植牙治療：</li>
                      <li>1. 未完成牙齒發育的青少年</li>
                      <li>2. 孕婦</li>
                      <li>3. 病歷複雜的病人</li>
                      <li>4. 有酒癮、煙癮的人士</li>
                      <li>5. 免疫系統病患者</li>
                      <li>6. 正服用抗凝血藥物人士</li>
                      <li>7. 高血壓或患有心血管疾病人士</li>
                      <li>接受治療前必須先作詳細檢查及評估，讓醫生能計劃治療建議。</li>
                    </ul>
                    </span>
                  </div>
              </el-collapse-item>
              <el-collapse-item  name="5">
                  <template slot="title"  >
                    <div class="contents"  >
                    <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
                    <i class="title1"></i>
                    <p :class="judgeActive('5')!==-1? 'p2':'p1'">植牙會有甚麼後遺症？</p> 
                    </div>
                      <i :class="judgeActive('5')!==-1? 'downArrow2':'downArrow1'"></i>
                  </template>
                  <div class="discon">
                     <i class="title2"></i>
                   <span>
                   
                    <ul>
                      <li>以下人士未必適合接受植牙治療：</li>
                      <li>1. 未完成牙齒發育的青少年</li>
                      <li>2. 孕婦</li>
                      <li>3. 病歷複雜的病人</li>
                      <li>4. 有酒癮、煙癮的人士</li>
                      <li>5. 免疫系統病患者</li>
                      <li>6. 正服用抗凝血藥物人士</li>
                      <li>7. 高血壓或患有心血管疾病人士</li>
                      <li>接受治療前必須先作詳細檢查及評估，讓醫生能計劃治療建議。</li>
                    </ul>
                    </span>
                  </div>
              </el-collapse-item>
              <el-collapse-item  name="6">
                  <template slot="title"  >
                    <div class="contents"  >
                    <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
                    <i class="title1"></i>
                    <p :class="judgeActive('6')!==-1? 'p2':'p1'">可否同時接受拔牙與植牙治療？</p> 
                    </div>
                      <i :class="judgeActive('6')!==-1? 'downArrow2':'downArrow1'"></i>
                  </template>
                  <div class="discon">
                     <i class="title2"></i>
                   <span>
                   
                    <ul>
                      <li>以下人士未必適合接受植牙治療：</li>
                      <li>1. 未完成牙齒發育的青少年</li>
                      <li>2. 孕婦</li>
                      <li>3. 病歷複雜的病人</li>
                      <li>4. 有酒癮、煙癮的人士</li>
                      <li>5. 免疫系統病患者</li>
                      <li>6. 正服用抗凝血藥物人士</li>
                      <li>7. 高血壓或患有心血管疾病人士</li>
                      <li>接受治療前必須先作詳細檢查及評估，讓醫生能計劃治療建議。</li>
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
 background-image: url(~@/asset/image/implant/Q.png) ;
 background-repeat: no-repeat;
}
.title2{
  display: inline-block;
  width: 40px;
  height: 25px;
  background-image: url(~@/asset/image/implant/A.png);
  background-repeat: no-repeat;
  color: #fff;
}
.downArrow1{
  display: inline-block;
  width: 12px;
  height: 12px;
  background-image: url(~@/asset/image/implant/+.png);
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
 background-image: url(~@/asset/image/implant/Q.png) ;
 background-repeat: no-repeat;
}
.title2{
  display: inline-block;
  width: 40px;
  height: 25px;
  background-image: url(~@/asset/image/implant/A.png);
  background-repeat: no-repeat;
  color: #fff;
}
.downArrow1{
  display: inline-block;
  width: 12px;
  height: 12px;
  background-image: url(~@/asset/image/implant/+.png);
}
.downArrow2{
  // display: inline-block;
  // width: 12px;
  // height: 12px;
  // background-image: url(~@/asset/image/implant/+.png);
  // transform: rotate(-180deg);
}
  
  
}
</style>
