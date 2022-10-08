<template>
   <div class="bg-white comContent py-xs-2 main-container">
    <div class="meun">
      <p><nuxt-link style="color: #000; text-decoration: none;" to="/">首頁</nuxt-link></p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">我們的團隊</p>
    </div>
    <div class="flex justify-center texts">
        <h2>我們的團隊</h2>
        <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt=""  >
    </div>
    <div class="team">
       <div class="doctor" v-for="item in doctorTeam">
      <div class="name">
        <img src="https://static.cmereye.com/static/lkximg/image/doctorTeam/star.svg" alt="">
        <p><span :class="item.title.rendered === 'Dr. Khawaja Abrar Tahir'?'en-doctor':''">{{item.title.rendered}}<i class="doctor-text" style="font-style:normal;margin-left:5px;font-size: 22px;">醫生</i> </span></p>
      </div>
      <div class="conts" v-html="item.content.rendered">
      </div>
    </div>
    </div>

 
  </div>
</template>
<script>
import { getList } from '@/api/index.js'
export default {
  data() {
    return {
      doctorTeam:[]
    }
  },
  mounted() {
    this.getDoctorList()
  },
  methods: {
    getDoctorList() {
      getList({'categories': 31, 'per_page': 100 }).then((res => {
        this.doctorTeam = res.data
        console.log(this.doctorTeam);
      }))
    },
  }
}
</script>
<style lang="scss" scoped>

.textsd{
   text-align: center;
    .ya{
         color:#57B2F3;
    }
  h3{
    padding:0;
  }
  image{
    text-align: center;
  }
}
.texts{
    text-align: center;
    h2{
    font-weight: 300;
    color: #79828D;
    margin-bottom: 1vw;
  }
  image{
    text-align: center;
  }
}
//mb
@media only screen and (max-width: 768px) {
  .en-doctor{
    font-size: 15px !important;
    .doctor-text{
      display: none;
    }
  }
  .doctor-text{
    font-size: 14px !important;
  }
  .texts{
    text-align: center;
    padding-top: 40px;
}
  .team{
    margin: 0 5vw;
    justify-content: center;
  }
  .doctor{
    margin: 0 2vw;
    display: inline-block;
    margin-bottom: 12vw;
    .name{
      display: flex;
    }
    .conts{
    border: 1px solid #57B2F3;
    overflow: auto;
    margin-top: 0.3vw;
    width: 87vw;
    color: #79828D;
    border-radius: 15px;
    }
    img{
      width: 12vw;
      height: 12vw;
      margin-bottom: 1vw;
    }
    ul{
      margin: 1vw;
      list-style-type: disc ;
    }
    p{
      margin-top: 0.4vw;
      font-size: 14px;
      font-weight: 800;
      color: #57B2F3;
      span{
      font-size: 24px;
      }
    }
  }
  .meun{
    padding-left:6vw;
    display: flex;
  }
  .ya_con{
    text-align: center;
    color: #9BA5B1;
    font-size: 13px;
  }
  .city{
    display: flex;
    text-align: center;
    justify-content: center;
    img{
      padding:1vw;
    }
  }
    h3{
    color: #57B2F3;
    padding-top:2vw;
  }
 .serve_con{

    text-align: center;
    padding: 2vw;
    color: #57B2F3;
}
}
//pc
@media only screen and (min-width: 768px) {
  .comContent{
    width: calc(100% - 120px);
  }
  ::-webkit-scrollbar {
    width: 20px;
    height: 8px;
}

::-webkit-scrollbar-thumb {
    border-radius: 12px;
    border: 6px solid rgba(0, 0, 0, 0);
    box-shadow: 8px 0 0 #9BD0F5 inset;
}

::-webkit-scrollbar-thumb:hover {
    box-shadow: 8px 0 0 #9BD0F5 inset;
}
  /* 设置滚动条的样式 */
// ::-webkit-scrollbar {
// width:12px;
// }
// /* 滚动槽 */
// ::-webkit-scrollbar-track {
// -webkit-box-shadow:inset006pxrgba(0,0,0,0.3);
// border-radius:10px;
// }
// /* 滚动条滑块 */
// ::-webkit-scrollbar-thumb {
// border-radius:10px;
// background:#9BD0F5;
// -webkit-box-shadow:inset006pxrgba(0,0,0,0.5);
// }
// ::-webkit-scrollbar-thumb:window-inactive {
// background:rgba(255,0,0,0.4);
// }
  .team{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 68px;
    margin-left: 38px;
  }
  .en-doctor{
      font-size: 22px !important;
      .doctor-text{
        display: none;
      }
  }
  .doctor{
    margin: 0 44px;
    display: inline-block;
    margin-bottom: 95px;
    .name{
      display: flex;
      align-items: baseline;
    }
    .conts{
      border: 1px solid #57B2F3;
      border-radius: 1vw;
      height: 11vw;
      overflow:auto;
      margin-top: 0.3vw;
      width: 368px;
      color: #79828D;
      ::v-deep ul{
        margin-top: 15px;
        list-style-type: disc !important;
        font-size: 1.2rem;
      }
      
    }
    // ::v-deep .wp-container-1{
    //     margin-top: 15px;
    //     ul{
    //       list-style-type: disc !important;
    //       font-size: 1.2rem;
    //     }
    //   }
    img{
      width: 3.5vw;
      padding-bottom: 0.6vw;
    }
    
    p{
      margin-top: 0.4vw;
      font-size: 22px;
      font-weight: 800;
      color: #57B2F3;
      margin-left: -17px;
      letter-spacing: 0em;
      span{
      font-size: 34px;
      }
    }
  }
  .meun{
    padding-left:6vw;
    display: flex;
  }
  .ya_con{
    text-align: center;
    color: #9BA5B1;
  }
  .city{
    display: flex;
    text-align: center;
    justify-content: center;
    img{
      padding:1vw;
    }
  }
    h3{
      color: #57B2F3;
       padding-top:2vw;
      }
    .serve_con{
    text-align: center;
    color: #57B2F3;
    }
}
</style>
<style lang="scss" >

</style>