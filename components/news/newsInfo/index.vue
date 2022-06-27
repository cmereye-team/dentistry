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
      <img class="pic" src="@/asset/image/news/post01pic.png" alt="">
      <div class="dateinfo">
      <img class="date2" src="@/asset/image/equipment/date.png" alt="">
      </div>
      <div class="content yagao">
        <h2>睇牙都可以用消費劵? </h2>
        <p>尖沙咀K11旗艦店位處K11 ATELIER甲級商廈，除咗提供一站式牙科服務，亦同樣著重整體感官享受，診所等候區配置時尚傢俱🛋及休閒刊物📰，為客人打造舒適放鬆嘅環境，讓每位客人享受整個體驗👍</p>
        <p>希瑪牙科旗艦店接受以下消費券支付方式：</p>
        <p>✅AlipayHK支付寶</p>
        <p>✅WeChat Pay HK微信支付</p>
        <p>✅Tap & Go拍住賞</p>
        <p>想了解更多支付方式，歡迎向我哋查詢💬</p>
      </div>
      <img class="date" src="@/asset/image/equipment/date.png" alt="">
    </div>
    <div class="info">
      <img class="pic" src="@/asset/image/news/post02pic.png" alt="">
      <div class="dateinfo">
      <img class="date2" src="@/asset/image/equipment/date.png" alt="">
      </div>
      <div class="content">
        <h2>復活節連假休診通知</h2>
        <p>預祝大家復活節快樂🗿</p>
        <p>復活節連假期間所有牙科診所都會休息💡4月19號正常營業，千祈唔好摸門釘呀😉</p>
      </div>
      <img class="date" src="@/asset/image/equipment/date.png" alt="">
    </div>
    <div class="info">
      <img class="pic" src="@/asset/image/news/post03pic.png" alt="">
      <div class="dateinfo">
      <img class="date2" src="@/asset/image/equipment/date.png" alt="">
      </div>
      <div class="content yagao">
        <h2>希瑪牙科接受消費券支付方式</h2>
        <p>想用消費券睇牙？緊係冇問題啦👌我哋大部份嘅牙科診所都接受消費券支付方式，無論你做邊種牙科療程，都可以用㗎😉</p>
        <p>想嚟睇牙嘅你，記得預先向診所預約喇🦷🙌</p>
        <p>接受AlipayHK支付寶及WeChat Pay HK微信支付方式：</p>
        <p>🟢灣仔莊士敦道197號廣亞大樓地下</p>
        <p>🔵尖沙咀梳士巴利道18-24號K11 ATELIER辦公大樓1906室</p>
        <p>🟢觀塘開源道79號鱷魚恤中心16樓1601室</p>
        <p>🔵沙田正街11-17號偉華中心2樓1C-1F號舖</p>
        <p>🟢觀塘開源道79號鱷魚恤中心16樓1601室</p>
        <p>接受八達通支付方式：</p>
        <p>🟠觀塘開源道79號鱷魚恤中心16樓1601室</p>
        <p>🟠沙田正街11-17號偉華中心2樓1C-1F號舖</p>
        <p>想了解更多支付方式，歡迎向我哋或分店查詢💬</p>
      </div>
      <img class="date" src="@/asset/image/equipment/date.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [{
        value: '消費券付款',
        label: '消費券付款'
      }, {
        value: '新店開幕',
        label: '新店開幕'
      }, {
        value: '營業時間安排',
        label: '營業時間安排'
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
  .dateinfo{
    display: none;
  }
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