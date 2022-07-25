<template>
  <div class="bg-white py-5 pb-0 py-xs-2">
    <div class="meun">
      <p>首頁</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙齒健康</p>
    </div>
    <div class="flex justify-center selectEqu">
      <el-select v-model="value" placeholder="请选择" @change="selectLei">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="value1" placeholder="请选择">
        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="info" v-for="item in list">
      <img class="pic" :src="item._embedded[Object.keys(item._embedded)[1]][0].source_url" alt="">
      <div class="dateinfo">
      <img class="date2" src="https://static.cmereye.com/static/lkximg/image/equipment/date.png" alt="">
      </div>
      <div class="content" >
        <h2 v-html="item.title.rendered"></h2>
        <p v-html="item.content.rendered"></p>
        <!-- <p>食啲碳水化合物量低嘅堅果（例如腰果、花生、胡桃、杏仁）有助減低蛀牙機會🌰加上堅果含有豐富嘅鈣質、磷，呢兩個元素都對牙齒和牙齦健康好有益㗎😗</p> -->
        <!-- <p>不過記得進食堅果份量要適中，唔好最後因為食得太多堅硬食物令到牙齒磨損喇！🙌</p> -->
        <!-- <p class="label">護齒心得</p> -->
        <div style="display: flex;">
        <div v-for="lab in item._embedded[Object.keys(item._embedded)[2]][1]"  style=" margin: 0 0.5vw;">
        <p class="label">{{lab.name}}</p>
        </div>
        </div>
      </div>
      <div class="date">
        <span class="linesy">{{item.datas}}</span>
        <span>{{item.month}}</span>
      </div>
      <!-- <img class="date" src="https://static.cmereye.com/static/lkximg/image/equipment/date.png" alt=""> -->
    </div>
     <el-pagination
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
         :current-page="currentPage"
        :page-size="pagesize"
        :total="total">
  </el-pagination>
  </div>
</template>
<script>
import { getList } from '@/api/index.js'
import { get } from 'http'

export default {
  data() {
    return {
      options: [
        {
        value: 0,
        label: '所有類別'
      }, 
      {
        value: '3',
        label: '護齒心得'
      }, {
        value: '12',
        label: '植牙'
      }, {
        value: '13',
        label: 'Invisalign 隱適美'
      }, {
        value: '8',
        label: '牙齒美白'
      }, {
        value: '9',
        label: '根管治療（杜牙根）'
      },
      {
        value: '14',
        label: '牙周病治療'
      },
      {
        value: '15',
        label: '拔牙及智慧齒脫除'
      },
      {
        value: '16',
        label: '全瓷牙冠及全鋯牙冠'
      },
      {
        value: '17',
        label: '全口牙托及局部牙托'
      },
      {
        value: '18',
        label: '矯齒'
      },{
        value: '4',
        label: '補牙'
      },{
        value: '19',
        label: '一般口腔檢查'
      },{
        value: '20',
        label: '兒童牙科保健及治療'
      }],
      value: '所有類別',
      options1: [
        {
        value: '0',
        label: '所有月份'
      },
        {
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
      value1: '所有月份',
      list:[],
      total:'',
      pagesize: 5,
      currentPage: 1,
    }
  },
  mounted() {
    this.getTotal()
    this.getListDs()
    
  },
  methods:{
    selectLei(value){
        // console.log('value========',value);
      if(value === 0){
        // console.log('121');
        this.getListDs()
        this.getTotal()
      }else{
        getList({'tags': value}).then((res=>{ this.total =  res.data.length}))
        getList({'_embed':true,'per_page': this.pagesize, 'page':this.currentPage, 'tags': value}).then((res=>{
          this.list = res.data
          this.list.forEach((item, index) => {
          if(item.date.slice(5, 7) === '07'){
            item.month = 'July'
          } else if(item.date.slice(5, 7) === '01'){
            item.month = 'Jan'
          }else if(item.date.slice(5, 7) === '02'){
            item.month = 'Feb'            
          }else if(item.date.slice(5, 7) === '03'){
            item.month = 'Mar'           
          }else if(item.date.slice(5, 7) === '04'){
            item.month = 'Apr'           
          }else if(item.date.slice(5, 7) === '05'){
            item.month = 'May'            
          }else if(item.date.slice(5, 7) === '06'){
            item.month = 'June'            
          }else if(item.date.slice(5, 7) === '08'){
            item.month = 'August'            
          }else if(item.date.slice(5, 7) === '09'){
            item.month = 'Sep'           
          }else if(item.date.slice(5, 7) === '10'){
            item.month = 'Oct'            
          }else if(item.date.slice(5, 7) === '11'){
            item.month = 'Nov'            
          }else if(item.date.slice(5, 7) === '12'){
            item.month = 'Dec'            
          }
          item.datas = item.date.slice(8, 10)
        });
          
          }))
      }
     
    },
    getTotal(){
      getList().then((res=>{ this.total =  res.data.length}))
    },
     getListDs(){
      getList({'_embed':true,'per_page': this.pagesize, 'page':this.currentPage}).then((res=>{
        this.list = res.data
        this.list.forEach((item, index) => {
          if(item.date.slice(5, 7) === '07'){
            item.month = 'July'
          } else if(item.date.slice(5, 7) === '01'){
            item.month = 'Jan'
          }else if(item.date.slice(5, 7) === '02'){
            item.month = 'Feb'            
          }else if(item.date.slice(5, 7) === '03'){
            item.month = 'Mar'           
          }else if(item.date.slice(5, 7) === '04'){
            item.month = 'Apr'           
          }else if(item.date.slice(5, 7) === '05'){
            item.month = 'May'            
          }else if(item.date.slice(5, 7) === '06'){
            item.month = 'June'            
          }else if(item.date.slice(5, 7) === '08'){
            item.month = 'August'            
          }else if(item.date.slice(5, 7) === '09'){
            item.month = 'Sep'           
          }else if(item.date.slice(5, 7) === '10'){
            item.month = 'Oct'            
          }else if(item.date.slice(5, 7) === '11'){
            item.month = 'Nov'            
          }else if(item.date.slice(5, 7) === '12'){
            item.month = 'Dec'            
          }
          item.datas = item.date.slice(8, 10)
        });
        console.log(this.list);
      }))
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage;
      this.getListDs()
      // console.log('点击第几页===', this.currentPage); 
    }
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
      background-color: #9BD0F5;
      border-radius: 50%;
      margin: 1vw;  
      display: flex;
      text-align: center;
      color: #FFF;
      font-weight: 600;
      justify-content: center;
      flex-direction: column;
      .linesy{
        font-size: 32px;
        border-bottom: 3px solid #FFF;
        margin: 0 1vw;
      }
    }
.yagao{
      margin-top: 1.5vw !important;
      }
    .content {
      display: inline-block;
      margin-top: 4vw;
      margin-left: 3vw;
      width: 44vw;
      .label{
        display: inline-block;
        border: 1px solid #57B2F3;
        border-radius: 60px;
        width: 7vw;
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