<template>
<div>
  <div class=" vedio_box md:font-black">
    <div class="flex justify-center texts">
      <h2>預約</h2>
      <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
    </div>
    <div class="form">
       <el-form :inline="true" label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-form-inline">
      <el-form-item label="姓名" prop="name" >
        <el-input v-model="ruleForm.name" placeholder="請選擇你的答案"></el-input>
      </el-form-item>
      <el-form-item label="稱呼" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="先生"></el-radio>
          <el-radio label="女士"></el-radio>
          <el-radio label="小姐"></el-radio>  
        </el-radio-group>
      </el-form-item>
      <el-form-item label="電話號碼" prop="name" >
        <el-input v-model="ruleForm.name" placeholder="請選擇你的答案"></el-input>
      </el-form-item>
       <el-form-item label="電郵地址" prop="name" >
        <el-input v-model="ruleForm.name" placeholder="請選擇你的答案"></el-input>
      </el-form-item>
      <el-form-item label="診症選擇">
    <el-select v-model="ruleForm.region" placeholder="請選擇你的答案">
      <el-option label="請選擇你的答案" value="shanghai"></el-option>
      <el-option label="請選擇你的答案" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  </el-form>
  </div>
     <div class="radioInfo">
      <div class="radiocon"><el-radio v-model="radio" label="1">閣下必須提前至少三個工作天進行網上預約；網上提交表格並不等於預約成功，<br>閣下將會在兩個工作天內以電話或電郵收取預約確認通知；閣下所提供的個人信息只會用於預約服務，所有內容皆會保密處理。</el-radio></div>
      <div class="radiocon"><el-radio v-model="radio" label="2">本人已閱讀，明白及同意收集個人資料及<span>私隱政策</span>。</el-radio></div>
      <div class="radiocon"><el-radio v-model="radio" label="3">本人願意日後收取希瑪醫療集團以及其關連公司之產品資料及宣傳資訊。如選擇拒絕，本人同時不會收到貴公司的任何禮品、<br>折扣及其他優惠資訊。</el-radio></div>
    </div>
  <div class="radioInfo1">
      <div class="radiocon"><el-radio v-model="radio" label="1">閣下必須提前至少三個工作天進行網上預約；<br>網上提交表格並不等於預約成功，閣下將會在兩<br>個工作天內以電話或電郵收取預約確認通知；<br>閣下所提供的個人信息只會用於預約服務，<br>所有內容皆會保密處理。</el-radio></div>
      <div class="radiocon"><el-radio v-model="radio" label="2">本人已閱讀，明白及同意收集個人資料及<br><span>私隱政策</span>。</el-radio></div>
      <div class="radiocon"><el-radio v-model="radio" label="3">本人願意日後收取希瑪醫療集團以及其關連<br>公司之產品資料及宣傳資訊。如選擇拒絕，本<br>人同時不會收到貴公司的任何禮品、折扣及其<br>他優惠資訊。</el-radio></div>
  </div>
  <div class="button">
    <nuxt-link class="link_more" to="">提交</nuxt-link>
  </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '1',
       ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      
    }
  },
  created() {
  },
   
  methods: {
 
  }
};
</script>
<style lang="scss" scoped>
.texts {
  text-align: center;

  h2 {
    font-weight: 300;
    color: #79828D;
    margin-bottom: 0vw;
  }

  image {
    text-align: center;
  }
}

//pc
@media only screen and (min-width: 768px) {
  ::v-deep .el-radio__label {
    padding-left: 10px;
    font-size: 1rem;
}
::v-deep .el-input{
    font-size: 1.2rem;

}
::v-deep .el-input__inner {
    // border: 0px;
    border: 2px solid #fff;
    border-radius: 10px;
    height: 52px;
    line-height: 52px;
    background-color: #fff;
    color: #9BD0F5;
 }
::v-deep .el-form--inline .el-form-item__label {
    float: none;
    display: inline-block;
    color: #fff;
    font-size: 1.5rem;
}
::v-deep  .el-select .el-input .el-select__caret {
    color: #9BD0F5;
    font-size: 1.5rem;
    margin-right: 0.6rem;
    transition: transform .3s;
    transform: rotateZ(180deg);
    cursor: pointer;
}
::v-deep .el-input__inner::placeholder {
  color:  #9BD0F5;

}
::v-deep  .el-radio__input.is-checked+.el-radio__label {
    color: #ffffff;
}
::v-deep .el-radio {
    color: #fff;
    }
  .button{
    background: #9BD0F5;
    padding-bottom: 15vw;
      .link_more {
        background: #fff;
        border: 2px solid #57B2F3;
        border-radius: 30px;
        transition: all 0.5s;
        color: #57B2F3;
        text-decoration: none;
        font-weight: 600;
        display: block;
        padding: 0.5vw;
        margin: 0 auto;
        width: 10vw;
        letter-spacing: 0.2vw;
        text-align: center;
        &:hover {
          animation: 3s ease-in 1s 2 reverse both paused slidein;
        }
      }
  }
  .radioInfo1{
    display: none;
  }
  .radioInfo{
    padding: 0 17vw;
    padding-bottom: 5vw;
    background: #9BD0F5;
    .radiocon{
      padding-bottom: 1vw;
      span{
        color: #FF000A;
        border-bottom: 1px solid #FF000A;
      }
    }
  }
  .form{
    display: flex;
    justify-content: center;
    // text-align: center;
    background: #9BD0F5;
    // background: radial-gradient(129vw 28vw at bottom, transparent 50%, #ECF7FC 50%);
    // height: 67vw;
    -webkit-clip-path: ellipse(100% 67% at 50% 70%);
    clip-path: ellipse(100% 67% at 50% 70%);
    left: -10%; 
//     border-radius: 50% 50% 0 0;
//     background-color: #9BD0F5;
//     display: flex;
//     justify-content: center;
    form{
      margin: 5vw 5.5vw 5vw 6.5vw;
    }
    .el-select {
    display: inline-block;
    position: relative;
    width: 19vw;
}
    .el-form-item {
    margin: 3vw 10vw;
    width: 19vw;
}
  }

}

//mb
@media only screen and (max-width: 768px) {
  ::v-deep .el-input__inner {
    border: 2px solid #fff;
    border-radius: 10px;
    height: 52px;
    line-height: 52px;
    background-color: #fff;
    color: #9BD0F5;
 }
::v-deep .el-form--inline .el-form-item__label {
    float: none;
    display: inline-block;
    color: #fff;
        font-size: 1.2rem;

}
::v-deep  .el-select .el-input .el-select__caret {
    color: #9BD0F5;
    font-size: 1.2rem;
    margin-right: 0.6rem;
    transition: transform .3s;
    transform: rotateZ(180deg);
    cursor: pointer;
}
::v-deep .el-input__inner::placeholder {
  color:  #9BD0F5;

}
::v-deep  .el-radio__input.is-checked+.el-radio__label {
    color: #ffffff;
}
::v-deep .el-radio {
    color: #fff;
    }
  ::v-deep .el-radio__label {
    padding-left: 10px;
    font-size: 14px;
}
// ::v-deep .el-input__inner {
//     border: 0px;
//     border-bottom: 2px solid #fff;
//     border-radius: 0px;
//     background-color: #fff0;
//     color: #ffffff;
//  }
// ::v-deep .el-form--inline .el-form-item__label {
//     float: none;
//     display: inline-block;
//     color: #fff;
//     font-size: 18px;
// }
// ::v-deep  .el-select .el-input .el-select__caret {
//     color: #fff;
//     font-size: 14px;
//     transition: transform .3s;
//     transform: rotateZ(180deg);
//     cursor: pointer;
// }
// ::v-deep .el-input__inner::placeholder {
//   color:  #fff;

// }
// ::v-deep  .el-radio__input.is-checked+.el-radio__label {
//     color: #ffffff;
// }
// ::v-deep .el-radio {
//     color: #fff;
//     }
//   ::v-deep .el-form--inline .el-form-item {
//     display:grid;
//   }
  .button{
    background: #9BD0F5;
    padding-bottom: 15vw;
      .link_more {
        background: #fff;
        border: 2px solid #57B2F3;
        border-radius: 15px 15px 15px 15px;
        transition: all 0.5s;
        color: #57B2F3;
        text-decoration: none;
        font-weight: 600;
        display: block;
        padding: 0.5vw;
        margin: 0 auto;
        width: 20vw;
        letter-spacing: 0.2vw;
        text-align: center;

        &:hover {
          animation: 3s ease-in 1s 2 reverse both paused slidein;
        }
      }
  }
  .radioInfo{
    display:none;
    padding: 0 17vw;
    padding-bottom: 5vw;
    background: #9BD0F5;
    .radiocon{
      padding-bottom: 1vw;
      span{
        color: #FF000A;
        border-bottom: 1px solid #FF000A;
      }
    }
  }
  .radioInfo1{
    padding: 0 17vw;
    padding-bottom: 5vw;
    background: #9BD0F5;
    .radiocon{
      padding-bottom: 1vw;
      span{
        color: #FF000A;
        border-bottom: 1px solid #FF000A;
      }
    }
  }
  .form{
    left: -10%; 
    border-radius: 36% 36% 0 0;
    background-color: #9BD0F5;
    display: grid;
    // justify-content: center;
    form{
      margin: 5vw 5.5vw 5vw 6.5vw;
    }
    .el-select {
    display: inline-block;
    position: relative;
    // width: 19vw;
}
    .el-form-item {
    margin: 3vw 10vw;
    // width: 19vw;
}
  }
  
}
</style>
<style lang="scss" scoped>

</style>