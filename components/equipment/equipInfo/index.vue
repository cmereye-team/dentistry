<template>
  <div class="bg-white py-5 pb-0 py-xs-2">
    <div class="meun">
      <p>首頁</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙齒健康</p>
    </div>
    <div class="flex justify-center selectEqu">
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="value1" placeholder="请选择">
        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="info">
      <img class="pic" src="https://static.cmereye.com/static/lkximg/image/equipment/post01pic.png" alt="">
      <div class="dateinfo">
      <img class="date2" src="https://static.cmereye.com/static/lkximg/image/equipment/date.png" alt="">
      </div>
      <div class="content">
        <h2>護齒食物你要知 #堅果 </h2>
        <p>食啲碳水化合物量低嘅堅果（例如腰果、花生、胡桃、杏仁）有助減低蛀牙機會🌰加上堅果含有豐富嘅鈣質、磷，呢兩個元素都對牙齒和牙齦健康好有益㗎😗</p>
        <p>不過記得進食堅果份量要適中，唔好最後因為食得太多堅硬食物令到牙齒磨損喇！🙌</p>
        <p class="label">護齒心得</p>
      </div>
      <img class="date" src="https://static.cmereye.com/static/lkximg/image/equipment/date.png" alt="">
    </div>
    <div class="info">
      <img class="pic" src="https://static.cmereye.com/static/lkximg/image/equipment/post02pic.png" alt="">
      <div class="dateinfo">
      <img class="date2" src="https://static.cmereye.com/static/lkximg/image/equipment/date.png" alt="">
      </div>
      <div class="content">
        <h2>漱口水可以取代牙刷及牙線？ </h2>
        <p>聽講漱口水可以清除口腔細菌🤔直接用咪可以唔使刷牙同用牙線囉？</p>
        <p>👩‍⚕️💥漱口水嘅作用係清潔口腔💦牙刷可以清走牙齒上嘅牙菌斑及食物殘渣；牙線係清潔牙縫及牙齦位置，單靠漱口水係不足以清潔到牙齒㗎💢</p>
        <p>市面上有好多漱口水選擇，記得睇清楚功能及成份，了解自己需要先選購🧐每日再配合正確嘅刷牙及牙線使用方式，維持牙齒及口腔清潔💪</p>
        <p class="label">護齒心得</p>
        <p class="label">補牙</p>
      </div>
      <img class="date" src="https://static.cmereye.com/static/lkximg/image/equipment/date.png" alt="">
    </div>
    <div class="info">
      <img class="pic" src="https://static.cmereye.com/static/lkximg/image/equipment/post03pic.png" alt="">
      <div class="dateinfo">
      <img class="date2" src="https://static.cmereye.com/static/lkximg/image/equipment/date.png" alt="">
      </div>
      <div class="content yagao">
        <h2>牙膏的秘密 </h2>
        <p>相信大家都試過刷牙嘅時候唔小心吞咗啲牙膏，擔心過食咗落肚會有咩影響😆其實吞咗少少牙膏一般都冇咩太大影響👌但如果當中嘅成份，如三氯沙、氟化物、色素等濃度太高，就對人體有害喇🙌</p>
        <p>💡 牙膏應該點樣揀？<br>想揀支適合自己嘅牙膏，一定要了解牙膏嘅成份有咩作用🤔</p>
        <p>🔍預防蛀牙<br>可揀含氟濃度多於>1000ppm、木醣醇成份嘅牙膏</p>
        <p>🔍敏感牙齒<br>選擇有硝酸鉀、氯化鍶嘅抗敏成份，以及含較細嘅研磨劑顆粒</p>
        <p>🔍牙周病牙膏<br>揀選含有殺菌或抗菌劑，例如IPMP、氯化十六烷基吡啶、異丙基甲基酚、鹽酸氯己定等成份牙膏，有助消滅牙周病菌</p>
        <p>買牙膏前先諗諗自己想要咩功能，睇清楚成份內容，咁就可以做個精明清費者啦😉</p>
        <p class="label">護齒心得</p>
        <p class="label">牙周病治療</p>
      </div>
      <img class="date" src="https://static.cmereye.com/static/lkximg/image/equipment/date.png" alt="">
    </div>
    <div class="info">
      <img class="pic" src="https://static.cmereye.com/static/lkximg/image/equipment/post04pic.png" alt="">
      <div class="dateinfo">
      <img class="date2" src="https://static.cmereye.com/static/lkximg/image/equipment/date.png" alt="">
      </div>
      <div class="content yagao">
        <h2>懷孕媽媽牙齒健康 #母親節 </h2>
        <p>母親節快樂💝可能大家都聽過坊間流傳，懷孕中嘅媽媽會被BB不斷吸收鈣質，令媽媽牙齒鈣質流失而甩牙🤰🏻 其實BB並唔會直接大量吸收媽媽牙齒鈣質👶🏻部份孕婦會發生甩牙情況，其實亦有不同因素導致：</p>
        <p>🔍口味改變<br>懷孕時變得鐘意食甜度高嘅食物，增加蛀牙、牙周病機會，所以甩牙風險上升🦷</p>
        <p>🔍進食次數<br>孕婦較容易感到餓，當進食次數增加，令口腔清潔難度上升，從而增加蛀牙機率📈</p>
        <p>🔍荷爾蒙變化<br>荷爾蒙於不同孕期會產生不同變化，令牙齦組織因血液循環豐富而更敏感，有機會出現牙齦腫或姙娠型牙齦瘤情況🤔</p>
        <p>備做媽媽嘅你，平時要關注BB同自己健康外，都要好好注意牙齒清潔，最好每3個月就要洗牙喇！</p>
      </div>
      <img class="date" src="https://static.cmereye.com/static/lkximg/image/equipment/date.png" alt="">
    </div>
    <div class="info">
      <img class="pic" src="https://static.cmereye.com/static/lkximg/image/equipment/post05pic.png" alt="">
      <div class="dateinfo">
      <img class="date2" src="https://static.cmereye.com/static/lkximg/image/equipment/date.png" alt="">
      </div>
      <div class="content">
        <h2>勞動節 勤刷牙 </h2>
        <p>今日勞動節，不如勤力啲刷牙，做好牙齒清潔🦷✨</p>
        <p>刷牙要用正確方式，次數亦同樣重要💡記得每日早晚各一次，如果午飯後能夠刷多一次就更完美🥳</p>
        <p>不過謹記用餐30分鐘後先刷，因為進食完嘅口腔PH值會呈酸性狀態，即刻刷會令牙齒受損㗎🏻‍♀️</p>
        <p>不如由今日開始，養成潔齒好習慣啦😉</p>
      </div>
      <img class="date" src="https://static.cmereye.com/static/lkximg/image/equipment/date.png" alt="">
    </div>
     <el-pagination
    layout="prev, pager, next"
    :total="100">
  </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [{
        value: '護齒心得',
        label: '護齒心得'
      }, {
        value: '植牙',
        label: '植牙'
      }, {
        value: 'Invisalign 隱適美',
        label: 'Invisalign 隱適美'
      }, {
        value: '牙齒美白',
        label: '牙齒美白'
      }, {
        value: '根管治療（杜牙根）',
        label: '根管治療（杜牙根）'
      },
      {
        value: '牙周病治療',
        label: '牙周病治療'
      },
      {
        value: '拔牙及智慧齒脫除',
        label: '拔牙及智慧齒脫除'
      },
      {
        value: '全瓷牙冠及全鋯牙冠',
        label: '全瓷牙冠及全鋯牙冠'
      },
      {
        value: '全口牙托及局部牙托',
        label: '全口牙托及局部牙托'
      },
      {
        value: '矯齒',
        label: '矯齒'
      },{
        value: '補牙',
        label: '補牙'
      },{
        value: '一般口腔檢查',
        label: '一般口腔檢查'
      },{
        value: '兒童牙科保健及治療',
        label: '兒童牙科保健及治療'
      }],
      value: '所有類別',
      options1: [{
        value: '一月',
        label: '一月'
      }, {
        value: '二月',
        label: '二月'
      }, {
        value: '三月',
        label: '三月'
      }, {
        value: '四月',
        label: '四月'
      }, {
        value: '五月',
        label: '五月'
      },{
        value: '六月',
        label: '六月'
      },{
        value: '七月',
        label: '七月'
      },{
        value: '八月',
        label: '八月'
      },{
        value: '九月',
        label: '九月'
      },{
        value: '十月',
        label: '十月'
      },{
        value: '十一月',
        label: '十一月'
      },{
        value: '十二月',
        label: '十二月'
      },],
      value1: '所有月份'
    }
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>

//mb
@media only screen and (max-width: 768px) {
   .label{
        display: inline-block;
        border: 1px solid #57B2F3;
        border-radius: 60px;
        width: 21vw;
        text-align: center;
        background-color: #fff;
        padding: 0.5vw;
      }
  .dateinfo{
    display: flex;
    justify-content: center;
    position: absolute;
    left: 32vw;
    top: 71vw;
    .date2 {
      width: 14vw;
      height: 14vw;
    }
  }
  .el-pagination {
    text-align: center;}
   .meun {
    padding-left: 6vw;
    display: flex;
  }
  .selectEqu {
    text-align: end;
    justify-content: end;
    margin: 2vw;
  }

  .el-select {
    display: flex;
    position: relative;
    margin: 0 1vw;
  }

  .info {
    border-radius: 30px 30px 30px 30px;
    background-color: #ECF7FC;
    margin: 3vw 9vw 3vw 9vw;
    position: relative;
    img {
      width: 25vw;
      height: 25vw;
      margin: 1vw;
    }
    .pic{
      width: 80vw;
      height: 80vw;
      margin: auto;
      padding: 1vw;
    }

    .date {
      width: 6vw;
      height: 6vw;
      display:none;
      
    }
.yagao{
      margin-top: 8.5vw !important;
      }
    .content {
      display: inline-block;
      margin-top: 7vw;
      margin-left: 3vw;
      
      h2 {
        padding: 0;
        text-align: left;
        margin-bottom: 2vw;
        justify-content: left;
        color: #57B2F3;
        font-weight: 600;
        &:before {
          content: "";
          border-left: 1vw solid #9BD0F5;
          margin-right: 1vw;
          height: 4vw;
          display: inline-block;
          vertical-align: middle;
      }
    }

    p {
      color: #57B2F3;
    }
  }
}
}

//pc
@media only screen and (min-width: 768px) {
 ::v-deep .el-pager .more::before {
    line-height: 30px;
    color: #9BD0F5;
}
  ::v-deep .el-pagination {
    white-space: nowrap;
    padding: 2px 5px;
    color: #9BD0F5;
    font-weight: 700;
}
  ::v-deep .el-pagination button, .el-pagination span:not([class*=suffix]) {
    display: inline-block;
    font-size: 16px;
    min-width: 35.5px;
    height: 34px;
    line-height: 28px;
    vertical-align: top;
    box-sizing: border-box;
}
  ::v-deep .el-pager li.active {
    color: #57B2F3;
    cursor: default;
  }
  ::v-deep .el-pager li {
    padding: 2px 25px;
    background: #FFF;
    font-size: 23px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    box-sizing: border-box;
}
  
    
  ::v-deep .el-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: initial;
    height: 48px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 16vw;
}
  .date2{
    display: none;
  }
  .el-pagination {
    text-align: center;}
  .meun {
    padding-left: 6vw;
    display: flex;
  }

  .selectEqu {
    display: flex;
    text-align: end;
    justify-content: end;
    margin-right: 5vw;
  }

  .el-select {
    display: inline-block;
    position: relative;
    margin: 0 1vw;
  }

  .info {
    display: flex;
    border-radius: 30px 30px 30px 30px;
    background-color: #ECF7FC;
    margin: 3vw 9vw 3vw 9vw;

    img {
      width: 25vw;
      height: 25vw;
      margin: 1vw;
    }
    .pic{
      width: 25vw;
      height: 25vw;
      margin: auto;
      padding: 1vw;
    }

    .date {
      width: 6vw;
      height: 6vw;
    }
.yagao{
      margin-top: 1.5vw !important;
      }
    .content {
      display: inline-block;
      margin-top: 4vw;
      margin-left: 3vw;
      .label{
        display: inline-block;
        border: 1px solid #57B2F3;
        border-radius: 60px;
        width: 8vw;
        text-align: center;
        background-color: #fff;
        padding: 0.5vw;
      }
      h2 {
        padding: 0;
        text-align: left;
        margin-bottom: 2vw;
        justify-content: left;
        color: #57B2F3;
        font-weight: 600;
        &:before {
          content: "";
          border-left: 1vw solid #9BD0F5;
          margin-right: 1vw;
          height: 4vw;
          display: inline-block;
          vertical-align: middle;
      }
    }

    p {
      color: #57B2F3;
    }
  }
}
}
</style>
<style lang="scss" >
</style>