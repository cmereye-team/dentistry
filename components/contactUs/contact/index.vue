<template>
  <div>
    <div class=" vedio_box md:font-black">
      <div class="flex justify-center texts">
        <h2>預約</h2>
        <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
      </div>
      <div class="form">
        <el-form :inline="true" label-position="top" :model="ruleForm" ref="ruleForm" label-width="100px"
          class="main-container demo-form-inline wpcf7-form invalid"
          action="https://send.pageclip.co/oLDloEgenkRMGb9ZYDIO4wlarrwjxsBu/Cmerdental" method="post">
          <div>
            <div style="display: none;">
              <input type="hidden" name="pageUrl" value="https://cmerdental.com/contact-us">
            </div>
            <el-form-item label="姓名" prop="name">
              <span class="wpcf7-form-control-wrap" data-name="your-name">
                <el-input v-model="ruleForm.name" type="text" placeholder="請輸入你的姓名" name="name" value="" size="40"
                  class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wpcf7-not-valid" aria-required="true"
                  aria-invalid="true" aria-describedby="wpcf7-f128-p130-o1-ve-your-name" /></span>
            </el-form-item>

            <span class="wpcf7-form-control-wrap" data-name="radio-511">
              <el-form-item label="稱呼" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                  <el-radio name="sex" label="先生"></el-radio>
                  <el-radio name="sex" label="女士"></el-radio>
                  <el-radio name="sex" label="小姐"></el-radio>
                </el-radio-group>
              </el-form-item>
            </span>
          </div>
          <div>
            <span class="wpcf7-form-control-wrap" data-name="tel-813">
              <el-form-item label="電話號碼" prop="phone">
                <el-input type="tel" name="phone" value="" v-model="ruleForm.phone" placeholder="請輸入你的電話號碼"
                  class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel" aria-invalid="false" />
                <!-- <el-input name="tel-813" v-model="ruleForm.phone" placeholder="請輸入你的答案"></el-input> -->
              </el-form-item>
            </span>
            <span class="wpcf7-form-control-wrap" data-name="your-email">
              <el-form-item label="電郵地址" prop="address">
                <el-input v-model="ruleForm.address" type="email" name="email" value="" placeholder="請輸入你的郵電地址"
                  class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email wpcf7-not-valid"
                  aria-required="true" aria-invalid="true" aria-describedby="wpcf7-f128-p130-o1-ve-your-email" />
                <!-- <el-input v-model="ruleForm.address" name="your-email" placeholder="請輸入你的答案"></el-input> -->
              </el-form-item>
            </span>
          </div>
          <span class="wpcf7-form-control-wrap" data-name="menu-809">
            <el-form-item label="診症選擇">
              <el-select name="symptom" v-model="ruleForm.region" class="wpcf7-form-control wpcf7-select" id="Options"
                aria-invalid="false" placeholder="請選擇你的症狀">
                <!-- <el-option value="植牙">植牙</el-option> -->
                <!-- <option value="根管治療(杜牙根)">根管治療(杜牙根)</option>
              <option value="Invisalign(隱形牙箍)">Invisalign(隱形牙箍)</option> -->
                <el-option v-for="item in selectList" :key="item.id" :label="item.itemName" :value="item.itemName" />
              </el-select>
            </el-form-item>
          </span>
          <!-- <span class="wpcf7-form-control-wrap" data-name="menu-685">
              <el-form-item label="診症選擇">
                <el-select name="menu-685" v-model="ruleForm.region" placeholder="請輸入你的答案">
                  <el-option v-for="item in selectList" :key="item.id" :label="item.itemName" :value="item.itemName">
                  </el-option>
                </el-select>
              </el-form-item>
            </span> -->
          <div class="radioInfo">
            <div class="radiocon">
              <el-radio v-model="radio" name="confidentiality" value="我已知曉内容皆保密處理">
                閣下必須提前至少三個工作天進行網上預約；網上提交表格並不等於預約成功，<br>閣下將會在兩個工作天內以電話或電郵收取預約確認通知；閣下所提供的個人信息只會用於預約服務，所有內容皆會保密處理。
              </el-radio>
            </div>
            <div class="radiocon">
              <el-radio v-model="radio1" name="privary" value="我已知曉同意收集個人資料及私隱">
                本人已閱讀，明白及同意收集個人資料及<nuxt-link to="/policy#A1"><span>私隱政策</span></nuxt-link>。</el-radio>
            </div>
            <div class="radiocon">
              <el-radio v-model="radio2" name="broadcast" value="本人願意日後收取希瑪醫療集團以及其關連公司之產品資料及宣傳資訊。">
                本人願意日後收取希瑪醫療集團以及其關連公司之產品資料及宣傳資訊。如選擇拒絕，本人同時不會收到貴公司的任何禮品、<br>折扣及其他優惠資訊。</el-radio>
            </div>
          </div>
          <div class="radioInfo1">
            <div class="radiocon">
              <el-radio v-model="radio" name="confidentiality" value="我已知曉内容皆保密處理">
                閣下必須提前至少三個工作天進行網上預約；<br>網上提交表格並不等於預約成功，閣下將會在兩<br>個工作天內以電話或電郵收取預約確認通知；<br>閣下所提供的個人信息只會用於預約服務，<br>所有內容皆會保密處理。
              </el-radio>
            </div>
            <div class="radiocon">
              <el-radio v-model="radio1" name="privary" value="我已知曉同意收集個人資料及私隱">
                本人已閱讀，明白及同意收集個人資料及<br><nuxt-link to="/policy#A1"><span>私隱政策</span></nuxt-link>。</el-radio>
            </div>
            <div class="radiocon">
              <el-radio v-model="radio2" name="broadcast" value="本人願意日後收取希瑪醫療集團以及其關連公司之產品資料及宣傳資訊。">
                本人願意日後收取希瑪醫療集團以及其關連<br>公司之產品資料及宣傳資訊。如選擇拒絕，本<br>人同時不會收到貴公司的任何禮品、折扣及其<br>他優惠資訊。</el-radio>
            </div>
          </div>
          <div class="button">
            <!-- @click="submitButt()" -->
            <button class="link_more submitButt" type="submit" value="Submit">提交</button>
            <!-- <div class="link_more submitButt" @click="submitButt">提交</div> -->
          </div>
        </el-form>
        
        <div style="display: none;">
          <iframe src="" frameborder="0" name="frameName"></iframe>
        </div>
      </div>


      <!-- 
        
        
        
        <form action="https://api.cmerdental.com/index.php/ces/#wpcf7-f128-p130-o1" method="post" class="wpcf7-form failed" novalidate="novalidate" data-status="failed">
    <div class="form">
    <el-form :inline="true" label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-form-inline">
          <el-form-item label="姓名" prop="name" >
            <el-input v-model="ruleForm.name" name="your-name" placeholder="請輸入你的答案"></el-input>
          </el-form-item>
          <el-form-item label="稱呼" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio   name="radio-511" label="先生"></el-radio>
              <el-radio   name="radio-511" label="女士"></el-radio>
              <el-radio   name="radio-511" label="小姐"></el-radio>  
            </el-radio-group>
          </el-form-item>
          <el-form-item label="電話號碼" prop="phone" >
            <el-input name="tel-813" v-model="ruleForm.phone" placeholder="請輸入你的答案"></el-input>
          </el-form-item>
          <el-form-item label="電郵地址" prop="address" >
            <el-input v-model="ruleForm.address" name="your-email" placeholder="請輸入你的答案"></el-input>
          </el-form-item>
          <el-form-item label="診症選擇">
        <el-select name="menu-685" v-model="ruleForm.region" placeholder="請輸入你的答案">
          <el-option 
            v-for="item in selectList"
            :key="item.id"
            :label="item.itemName"
            :value="item.itemName"
          ></el-option>
        </el-select>
      </el-form-item>
      </el-form>
  </div>
     <div class="radioInfo">
      <div class="radiocon"><el-radio v-model="radio" @click.native.prevent="clickitem(1)" :label="1">閣下必須提前至少三個工作天進行網上預約；網上提交表格並不等於預約成功，<br>閣下將會在兩個工作天內以電話或電郵收取預約確認通知；閣下所提供的個人信息只會用於預約服務，所有內容皆會保密處理。</el-radio></div>
      <div class="radiocon"><el-radio v-model="radio1" @click.native.prevent="clickitem(2)" :label="2">本人已閱讀，明白及同意收集個人資料及<span>私隱政策</span>。</el-radio></div>
      <div class="radiocon"><el-radio v-model="radio2" @click.native.prevent="clickitem(3)" :label="3">本人願意日後收取希瑪醫療集團以及其關連公司之產品資料及宣傳資訊。如選擇拒絕，本人同時不會收到貴公司的任何禮品、<br>折扣及其他優惠資訊。</el-radio></div>
    </div>
  <div class="radioInfo1">
      <div class="radiocon"><el-radio v-model="radio" @click.native.prevent="clickitem(1)" :label="1">閣下必須提前至少三個工作天進行網上預約；<br>網上提交表格並不等於預約成功，閣下將會在兩<br>個工作天內以電話或電郵收取預約確認通知；<br>閣下所提供的個人信息只會用於預約服務，<br>所有內容皆會保密處理。</el-radio></div>
      <div class="radiocon"><el-radio v-model="radio1" @click.native.prevent="clickitem(2)" :label="2">本人已閱讀，明白及同意收集個人資料及<br><span>私隱政策</span>。</el-radio></div>
      <div class="radiocon"><el-radio v-model="radio2" @click.native.prevent="clickitem(3)" :label="3">本人願意日後收取希瑪醫療集團以及其關連<br>公司之產品資料及宣傳資訊。如選擇拒絕，本<br>人同時不會收到貴公司的任何禮品、折扣及其<br>他優惠資訊。</el-radio></div>
  </div>
  <div class="button">
    <button class="link_more" type="submit" value="Submit">提交</button>
  </div>
 </form> -->
    </div>
  </div>
</template>
<script>
import { postFormData }from '@/api/index.js'
export default {
  data() {
    return {

      selectList: [
        { itemName: '植牙', id: 1 },
        { itemName: '根管治療(杜牙根)', id: 2 },
        { itemName: 'Invisalign(隱形牙箍)', id: 3 },
        { itemName: '瓷貼片', id: 4 },
        { itemName: '牙齒美白', id: 5 },
        { itemName: '全瓷牙冠及全鋯牙冠', id: 6 },
        { itemName: '拔牙及智慧齒拔除', id: 7 },
        { itemName: '牙周病治療', id: 8 },
        { itemName: '全口牙托及局部牙托', id: 9 },
        { itemName: '矯齒', id: 10 },
        { itemName: '補牙', id: 11 },
        { itemName: '洗牙', id: 12 },
        { itemName: '一般口腔檢查', id: 13 },
        { itemName: '兒童牙科保健及治療', id: 14 },

      ],
      radio: true,
      radio1: true,
      radio2: true,
      ruleForm: {
        name: '',
        region: '',
        phone: '',
        address: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '必須輸入答案', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '必須輸入答案', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个診症', trigger: 'change' }
        ],
        phone: [
          { required: true, message: '必須輸入答案', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '必須輸入答案', trigger: 'blur' }
        ],
        resource: [
          { required: true, message: '必須輸入答案', trigger: 'blur' }
        ]
      }

    }
  },
  created() {
  },

  methods: {
    submitButt(e){
      // console.log(this.ruleForm,e)
      // return
      if(this.ruleForm.name === '' || this.ruleForm.region === '' || this.ruleForm.phone === '' || this.ruleForm.address === '' ||
      this.ruleForm.resource === ''){
        alert("請完善信息！");
        // return false;
      }else if(localStorage.getItem("ruleForm") === JSON.stringify(this.ruleForm)){
        this.ruleForm = {}      
        alert("我们已经收到啦~请不要重复提交");
        location.reload();

        // return false;


      }else{
        
        let _params = {
          pageUrl: 'https://cmerdental.com/contact-us',
          name: this.ruleForm.name || '',
          sex: this.ruleForm.resource || '',
          phone: this.ruleForm.phone || '',
          email: this.ruleForm.address || '',
          symptom: this.ruleForm.region || '',
          confidentiality: !this.radio ? '我已知曉内容皆保密處理' : '',
          privary: !this.radio1 ? '我已知曉同意收集個人資料及私隱' : '',
          broadcast: !this.radio2 ? '本人願意日後收取希瑪醫療集團以及其關連公司之產品資料及宣傳資訊。': ''
        }
        // console.log(_params)
        postFormData(_params).then((res)=>{
          // console.log(res)
          alert("提交成功！");
          localStorage.setItem("ruleForm", JSON.stringify(this.ruleForm));
          location.reload();
        }).catch((err)=>{
          alert("提交失败！");
        })
        // location.reload();
        // return true;


      }
    },
    // clickitem(e) {
    //   console.log(e);
    //   console.log(this.radio, this.radio2, this.radio3);
    //   if (e === 1) {
    //     e === this.radio ? this.radio = '' : this.radio = e
    //   } else if (e === 2) {
    //     e === this.radio1 ? this.radio1 = '' : this.radio1 = e
    //   } else if (e === 3) {
    //     e === this.radio2 ? this.radio2 = '' : this.radio2 = e
    //   }
    // }
  }
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}

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
@media only screen and (min-width: 760px) {
  ::v-deep .el-radio__label {
    padding-left: 10px;
    font-size: 1rem;
  }

  ::v-deep .el-input {
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

  ::v-deep .el-select .el-input .el-select__caret {
    color: #9BD0F5;
    font-size: 1.5rem;
    margin-right: 0.6rem;
    transition: transform .3s;
    transform: rotateZ(180deg);
    cursor: pointer;
  }

  ::v-deep .el-input__inner::placeholder {
    color: #9BD0F5;

  }

  ::v-deep .el-radio__input.is-checked+.el-radio__label {
    color: #ffffff;
  }

  ::v-deep .el-radio {
    color: #fff;
  }

  .button {
    background: #9BD0F5;
    // padding-bottom: 15vw;

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

  .radioInfo1 {
    display: none;
  }

  .radioInfo {
    padding-bottom: 5vw;
    background: #9BD0F5;
    padding-top: 50px;

    .radiocon {
      padding-bottom: 1vw;

      span {
        color: #FF000A;
        border-bottom: 1px solid #FF000A;
      }
    }
  }

  .form {
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
    form {
      margin: 9vw 2.5vw 5vw 8.5vw;
    }

    .el-select {
      display: inline-block;
      position: relative;
      width: 19vw;
    }

    .el-form-item {
      margin: 30px 60px;
      width: 19vw;
    }
  }

}

//mb
@media only screen and (max-width: 760px) {



  ::v-deep .el-input__inner {
    border: 2px solid #fff;
    border-radius: 10px;
    height: 52px;
    line-height: 52px;
    background-color: #fff;
    color: #9BD0F5;
    width: 68vw;
  }

  ::v-deep .el-form--inline .el-form-item__label {
    float: none;
    display: inline-block;
    color: #fff;
    font-size: 1.2rem;

  }

  ::v-deep .el-select .el-input .el-select__caret {
    color: #9BD0F5;
    font-size: 1.2rem;
    margin-right: 0.6rem;
    transition: transform .3s;
    transform: rotateZ(180deg);
    cursor: pointer;
  }

  ::v-deep .el-input__inner::placeholder {
    color: #9BD0F5;

  }

  ::v-deep .el-radio__input.is-checked+.el-radio__label {
    color: #ffffff;
  }

  ::v-deep .el-radio {
    color: #fff;
  }

  ::v-deep .el-radio__label {
    padding-left: 10px;
    font-size: 14px;
  }

  .button {
    background: #9BD0F5;
    padding-bottom: 15vw;

    .link_more {
      background: #fff;
      border-radius: 15px 15px 15px 15px;
      transition: all 0.5s;
      color: #57B2F3;
      text-decoration: none;
      font-weight: 600;
      display: block;
      padding: 2.5vw;
      margin: 0 26%;
      width: 32vw;
      letter-spacing: 0.2vw;
      text-align: center;
      border: 1px;

      &:hover {
        animation: 3s ease-in 1s 2 reverse both paused slidein;
      }
    }
  }

  .radioInfo {
    display: none;
    padding: 0 17vw;
    padding-bottom: 5vw;
    background: #9BD0F5;

    .radiocon {
      padding-bottom: 1vw;

      span {
        color: #FF000A;
        border-bottom: 1px solid #FF000A;
      }
    }
  }

  .radioInfo1 {
    margin: 3vw 9vw;
    display: grid;
    justify-content: center;
    background: #9bd0f5;

    .radiocon {
      padding-bottom: 5vw;

      span {
        color: #FF000A;
        border-bottom: 1px solid #FF000A;
      }
    }
  }

  .form {
    left: -10%;
    // border-radius: 36% 36% 0 0;
    clip-path: ellipse(100% 54% at 51% 54%);
    // background: radial-gradient(108vw 68vw at bottom, transparent 50%, #9BD0F5 50%) !important;
    background-color: #9BD0F5;
    display: grid;

    // justify-content: center;
    form {
      margin: 14vw 5.5vw 5vw 6.5vw;
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
<style lang="scss" scoped></style>