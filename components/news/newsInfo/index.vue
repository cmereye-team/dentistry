<template>
  <div class="bg-white comContent pb-0 py-xs-2 main-container">
    <div class="meun">
      <p>
        <nuxt-link style="color: #000; text-decoration: none;" to="/">首頁</nuxt-link>
      </p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">最新消息</p>
    </div>
    <div v-if="isShow" class="flex justify-center selectEqu">
      <el-select v-model="value" placeholder="请选择" @change="selectLei">
        <el-option v-for="item in options" :key="item.value" :id="item.label" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="value1" placeholder="请选择">
        <el-option v-for="item in options1" :key="item.value" :label="item.label" >
        </el-option>
      </el-select>
    </div>
    <div v-else>
      <div class="Top20_ProblemAnalysis">
        <div class="rightNav">
          <ul class="tab-nav">
            <li v-for="(i, index) in navList" :key="index">
              <div class="nav" @click="openNav(index, i.list.length)">
                <div><i>{{ i.title }}</i><img src="https://static.cmereye.com/static/lkximg/image/equipment/Polygon.svg"
                    alt=""></div>
              </div>
              <div class="nav-n-box">
                <div class="nav-n" v-for="(n, index) in i.list" :key="index" @click="handleClick(n)">{{ n.label }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div class="info">
      <img class="pic" src="https://static.cmereye.com/static/lkximg/image/news/post01pic.png" alt="">
      <div class="dateinfo">
        <img class="date2" src="https://static.cmereye.com/static/lkximg/image/equipment/date.png" alt="">
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
      <img class="date" src="https://static.cmereye.com/static/lkximg/image/equipment/date.png" alt="">
    </div> -->
 <div class="info" v-for="item in list">
      <img class="pic" :src="item._embedded[Object.keys(item._embedded)[1]][0].source_url" alt="">
      <div class="dateinfo">
        <!-- <img class="date2" src="https://static.cmereye.com/static/lkximg/image/equipment/date.png" alt=""> -->
        <div class="date01">
          <span class="linesy">{{ item.datas }}</span>
          <span>{{ item.month }}</span>
        </div>
      </div>
      <div class="content">
        <h2 v-html="item.title.rendered"></h2>
        <div  @click="showContent"><p :class="showitem === true ?'':'p_content_long'" v-html="item.content.rendered"></p></div>
        
        <div style="display: flex;" class="p_content_type">
          <div v-for="lab in item._embedded[Object.keys(item._embedded)[2]][1]" style=" margin: 0 0.5vw;">
            <p class="label">{{ lab.name }}</p>
          </div>
        </div>
      </div>
      <div class="date">
        <span class="linesy">{{ item.datas }}</span>
        <span>{{ item.month }}</span>
      </div>
      <!-- <img class="date" src="https://static.cmereye.com/static/lkximg/image/equipment/date.png" alt=""> -->
    </div>
  </div>
</template>
<script>
import { getList } from '@/api/index.js'
export default {
  watch: {
    screenWidth: {
      handler: function (val, oldVal) {
        console.log('val========', val);
        if (val < 768) {
          console.log('屏幕宽度小于760px')
          this.isShow = false
        } else {
          this.isShow = true
          console.log('屏幕宽度大于760px')
        }
      },
      immediate: true
    },
  },
  data() {
    return {
      showitem:false,
      navList: [
        {
          title: '所有類別',
          name: 'BusinessIntroduction',
          list: [
            {
          value: '0',
          label: '所有類別'
        },
        {
        value: '26',
        label: '消費券付款'
      }, {
        value: '6',
        label: '新店開幕'
      }, {
        value: '27',
        label: '營業時間安排'
      }
          ],
        },
        {
          title: '所有月份',
          list: [
            {
              label: '一月',
            },
            {
              label: '二月',
            },
            {
              label: '三月',
            },
            {
              label: '四月',
            },
            {
              label: '五月',
            },

            {
              label: '六月',
            },
            {
              label: '七月',
            },
            {
              label: '八月',
            },
            {
              label: '九月',
            },
            {
              label: '十月',
            },
            {
              label: '十一月',
            }, {
              label: '十二月',
            },
          ],

        }
      ],
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
      value1: '所有月份',
      screenWidth: '',
      isShow: true,
      options: [{
        value: '0',
        label: '所有類別'
      },{
        value: '26',
        label: '消費券付款'
      }, {
        value: '6',
        label: '新店開幕'
      }, {
        value: '27',
        label: '營業時間安排'
      }],
      value: '所有類別',
      list: []
    }
  },
  mounted() {
    this.getListDs()
    if (process.client) {
      this.screenWidth = document.body.clientWidth
      window.onresize = () => {
        return (() => {
          this.screenWidth = document.body.clientWidth
        })
      }
    }
  },
  methods: {
    showContent(){
      this.showitem = !this.showitem
      console.log(this.showitem);
    },
    selectLei(value) {
          console.log('value========', value);
          this.selectVal = value
          if (value === '0') {
            this.getListDs()
          } else {
              getList({ '_embed': true,  'tags': this.selectVal, 'categories': 25 }).then((res => {
                this.list = res.data
                this.addMonth(this.list)
                console.log(this.list);
              }))
            
          }

        },
       
    handleClick(value) {
      let nav = document.querySelectorAll('.nav'); //获取父级菜单栏，以便添加选中样式
      let items = document.querySelectorAll('.nav-n-box'); //获取容纳子级菜单栏的容器，以便动态设置高度，实现下拉效果
      for (let i = 0; i < nav.length; i++) {
          items[i].style.height = '0rem';
        }
      this.selectLei(value.value)
    },
    openNav(index, num, value) {
      let _this = this;
      let nav = document.querySelectorAll('.nav'); //获取父级菜单栏，以便添加选中样式
      let items = document.querySelectorAll('.nav-n-box'); //获取容纳子级菜单栏的容器，以便动态设置高度，实现下拉效果

      //-----------------可注释部分开始------注释后则不是手风琴效果------------------
      // 遍历菜单栏，移除所有选中后的样式   添加此段可实现手风琴效果，注释则实现多展示效果
      for (let i = 0; i < nav.length; i++) {
        if (
          items[i].style.height == '' ||
          items[i].style.height == '0rem' ||
          nav[index].classList.contains('nav-n-box-active') //判断标签内是否含有该class属性，以布尔值类型返回
        ) {
          let height = items[index].style.height;
          items[index].style.height = height;

        } else {
          items[i].style.height = '0rem';

        }
        nav[i].classList.remove('nav-n-box-active');

      }
      //-----------------可注释部分结束------------------------

      //根据子菜单栏的高度判断，是否展开菜单栏，若有进行遍历操作，那么每次点击某个菜单栏的时候 height 都为 0
      if (items[index].style.height == '' || items[index].style.height == '0rem') {
        //num 为子菜单栏的个数，根据子菜单栏确定容器的高度
        items[index].style.height = num * 3 + 'rem';
        console.log('num', num);
        //添加右箭头旋转样式
        nav[index].classList.add('nav-n-box-active');

      } else {
        items[index].style.height = '0rem';
        //移除右箭头旋转样式
        nav[index].classList.remove('nav-n-box-active');

      }
      //------------------------------------------

    },
    getListDs() {
      getList({ '_embed': true, 'categories': 25 }).then((res => {
        this.list = res.data
        this.addMonth(this.list)
        console.log(this.list);
      }))
    },
    addMonth(value){
      value.forEach((item, index) => {
          if (item.date.slice(5, 7) === '07') {
            item.month = 'July'
          } else if (item.date.slice(5, 7) === '01') {
            item.month = 'Jan'
          } else if (item.date.slice(5, 7) === '02') {
            item.month = 'Feb'
          } else if (item.date.slice(5, 7) === '03') {
            item.month = 'Mar'
          } else if (item.date.slice(5, 7) === '04') {
            item.month = 'Apr'
          } else if (item.date.slice(5, 7) === '05') {
            item.month = 'May'
          } else if (item.date.slice(5, 7) === '06') {
            item.month = 'June'
          } else if (item.date.slice(5, 7) === '08') {
            item.month = 'August'
          } else if (item.date.slice(5, 7) === '09') {
            item.month = 'Sep'
          } else if (item.date.slice(5, 7) === '10') {
            item.month = 'Oct'
          } else if (item.date.slice(5, 7) === '11') {
            item.month = 'Nov'
          } else if (item.date.slice(5, 7) === '12') {
            item.month = 'Dec'
          }
          item.datas = item.date.slice(8, 10)
        });
        return value
    },
  }
}

</script>
<style lang="scss" scoped>
.Top20_ProblemAnalysis {
  width: 100%;
  // height: calc(100vh - 160px);
  position: relative;
  // display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  .rightNav {

    .tab-nav {
      padding: 0rem;
      list-style: none;
      border-top: 1px solid #C2C7CD;

      li {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        cursor: pointer;
        user-select: none;
        border-bottom: 1px solid#C2C7CD;

        .nav {
          padding: 1rem 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: row;

          i {
            font-style: normal;
            transition: 0.3s;
            color: #79828D;
            padding: 0 2vw 0 5vw;
          }

          span {
            display: inline-block;
            width: 100%;
            text-align: left;
            color: #808080;
            font-size: 1rem;
            margin-left: 1rem;
          }
        }

        .nav-n-box {
          transition: 0.3s;
          width: 100%;
          height: 0;
          overflow: hidden;

          .nav-n {
            width: 100%;
            font-size: 0.88rem;
            color: #808080;
            height: 3rem;
            text-align: left;
            padding-left: 2rem;
            line-height: 3rem;
            transition: 0.3s;

            &:hover {
              background: #ECF7FC;
              color: 79828D;
              opacity: 0.5;
            }
          }
        }
      }
    }
  }

  //点击后右箭头的反转效果
  .nav-n-box-active {
    #right-btn {
      transform: rotate(90deg) !important;
    }
  }
}

//mb
@media only screen and (max-width: 760px) {
  .label {
    display: inline-block;
    border: 1px solid #57B2F3;
    border-radius: 60px;
    width: 21vw;
    text-align: center;
    background-color: #fff;
    padding: 0.5vw;
  }
 .date {
      width: 6vw;
      height: 6vw;
      display: none;
    }

    .date01 {
      width: 21vw;
      height: 21vw;
      background-color: #9BD0F5;
      border-radius: 50%;
      margin: 1vw;
      display: flex;
      text-align: center;
      color: #FFF;
      font-weight: 600;
      justify-content: center;
      flex-direction: column;

      .linesy {
        font-size: 27px;
        border-bottom: 3px solid #FFF;
        margin: 0 3vw;
      }
    }

    .yagao {
      margin-top: 8.5vw !important;
    }
  .dateinfo {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 33vw;
    top: 73vw;

    .date2 {
      width: 14vw;
      height: 14vw;
    }
  }

  .el-pagination {
    text-align: center;
  }

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

    .pic {
      width: 80vw;
      height: 80vw;
      margin: auto;
      padding: 1vw;
    }

    .date {
      width: 6vw;
      height: 6vw;
      display: none;

    }

    .yagao {
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
@media only screen and (min-width: 760px) {
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
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    // width: 16vw;
  }

  .dateinfo {
    display: none;
  }

  .meun {
    padding-left: 146px;
    display: flex;
    font-size: 16px;
  }

  .selectEqu {
    display: flex;
    text-align: end;
    justify-content: end;
    // margin-right: 5vw;
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
    margin: 35px;

    img {
      width: 25vw;
      height: 25vw;
      margin: 1vw;
    }

    .pic {
      width: 400px;
      height: 400px;
      margin: auto;
      padding: 16px;
    }

    .date {
      width: 5.5vw;
      height: 100px;
      background-color: #9BD0F5;
      border-radius: 50%;
      margin: 20px;
      display: flex;
      text-align: center;
      color: #FFF;
      font-weight: 600;
      justify-content: center;
      flex-direction: column;
      span{
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 38px;
        /* identical to box height */
        text-align: center;
        letter-spacing: 0.1em;
      }
      .linesy {
        font-size: 32px;
        border-bottom: 3px solid #FFF;
        margin: 0 8px;
      }
    }

    .yagao {
      margin-top: 1.5vw !important;
    }

    .content {
      display: inline-block;
      margin-top: 74px;
      margin-left: 30px;
      width: 44vw;

      .label {
        display: inline-block;
        border: 1px solid #57B2F3;
        border-radius: 60px;
        width: fit-content;
        text-align: center;
        background-color: #fff;
        padding: 18px;
      }

      h2 {
        padding: 0;
        text-align: left;
        margin-bottom: 28px;
        justify-content: left;
        color: #57B2F3;
        font-weight: 600;
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-size: 30px;
        line-height: 30px;
        /* identical to box height */

        letter-spacing: 0.1em;

        &:before {
          content: "";
          border-left: 15px solid #9BD0F5;
          margin-right: 1vw;
          height: 50px;
          display: inline-block;
          vertical-align: middle;
        }
      }

      p {
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-size: 20px;
        line-height: 22px;
        text-align: justify;
        letter-spacing: 0.1em;
        color: #57B2F3;
      }
    }
  }
}
</style>
<style lang="scss" >
</style>