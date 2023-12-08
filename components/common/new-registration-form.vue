<template>
  <div>
    <div class="video_box md:font-black">
      <div class="flex justify-center texts">
        <h2>預約</h2>
        <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="" />
      </div>
      <div class="form">
        <div class="form-table">
          <div class="text-form">立即預約牙科服務，<br class="mbShow" />展現自信笑容！</div>
          <div class="table-message">
            <el-form label-position="top" label-width="80px" ref="ruleForm" :model="ruleForm" :rules="rules">
              <el-form-item prop="name" label="姓名">
                <el-input v-model="ruleForm.name" placeholder="請輸入你的姓名"></el-input>
              </el-form-item>
              <el-form-item prop="region" label="稱呼">
                <el-radio-group v-model="ruleForm.region">
                  <el-radio label="先生"></el-radio>
                  <el-radio label="女士"></el-radio>
                  <el-radio label="小姐"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item prop="phone" label="電話號碼">
                <el-input placeholder="請輸入你的電話號碼" v-model="ruleForm.phone" class="input-with-select">
                  <el-select style="max-width:100px" v-model="ruleForm.beforePhone" slot="prepend" placeholder="请选择">
                    <el-option label="+852" value="1"></el-option>
                    <el-option label="+853" value="2"></el-option>
                    <el-option label="+86" value="3"></el-option>
                  </el-select>
                </el-input>
              </el-form-item>
              <el-form-item prop="email" label="電郵地址">
                <el-input v-model="ruleForm.email" placeholder="請輸入你的電郵地址"></el-input>
              </el-form-item>
              <el-form-item prop="serve" label="診症服務"><span>（可選多於一項）</span>
                <el-checkbox-group v-model="ruleForm.serve">
                  <el-checkbox v-for="city in selectList" :label="city.itemName" :key="city.id">{{ city.itemName
                  }}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item prop="source" label="閣下從什麼途徑得知我們？">
                <el-radio-group v-model="ruleForm.source">
                  <el-radio v-for="(item) in selectSource" :key="item.id" :label="item.name"></el-radio>
                </el-radio-group>
              </el-form-item>
              <div class="radioInfo">
                <div class="radiocon">
                  <el-radio v-model="ruleForm.radio" name="confidentiality" value="我已知曉内容皆保密處理">
                    閣下必須提前至少三個工作天進行網上預約；網上提交表格並不等於預約成功，<br />閣下將會在兩個工作天內以電話或電郵收取預約確認通知；閣下所提供的個人信息只會用於預約服務，所有內容皆會保密處理。
                  </el-radio>
                </div>
                <div class="radiocon">
                  <el-radio v-model="ruleForm.radio1" name="privary" value="我已知曉同意收集個人資料及私隱">
                    本人已閱讀，明白及同意收集個人資料及<nuxt-link to="/policy#A1"><span>私隱政策</span></nuxt-link>。</el-radio>
                </div>
                <div class="radiocon">
                  <el-radio v-model="ruleForm.radio2" name="broadcast" value="本人願意日後收取希瑪醫療集團以及其關連公司之產品資料及宣傳資訊。">
                    本人願意日後收取希瑪醫療集團以及其關連公司之產品資料及宣傳資訊。如選擇拒絕，本人同時不會收到貴公司的任何禮品、<br />折扣及其他優惠資訊。</el-radio>
                </div>
              </div>
              <div class="radioInfo1">
                <div class="radiocon">
                  <el-radio v-model="ruleForm.radio" name="confidentiality" value="我已知曉内容皆保密處理">
                    閣下必須提前至少三個工作天進行網上預約；<br />網上提交表格並不等於預約成功，閣下將會在兩<br />個工作天內以電話或電郵收取預約確認通知；<br />閣下所提供的個人信息只會用於預約服務，<br />所有內容皆會保密處理。
                  </el-radio>
                </div>
                <div class="radiocon">
                  <el-radio v-model="ruleForm.radio1" name="privary" value="我已知曉同意收集個人資料及私隱">
                    本人已閱讀，明白及同意收集個人資料及<br /><nuxt-link to="/policy#A1"><span>私隱政策</span></nuxt-link>。</el-radio>
                </div>
                <div class="radiocon">
                  <el-radio v-model="ruleForm.radio2" name="broadcast" value="本人願意日後收取希瑪醫療集團以及其關連公司之產品資料及宣傳資訊。">
                    本人願意日後收取希瑪醫療集團以及其關連<br />公司之產品資料及宣傳資訊。如選擇拒絕，本<br />人同時不會收到貴公司的任何禮品、折扣及其<br />他優惠資訊。</el-radio>
                </div>
              </div>
              <el-form-item>
                <!-- <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button> -->
                <div class="form-btn" @click="submitForm('ruleForm')">提交</div>
                <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectList: [
        { itemName: "微創植牙/種植牙", id: 1 },
        { itemName: "全瓷貼片", id: 2 },
        { itemName: "杜牙根（根管治療）", id: 3 },
        { itemName: "矯齒", id: 4 },
        { itemName: "牙周病治療", id: 5 },
        { itemName: "隱形牙箍", id: 6 },
        { itemName: "拔牙及剝智慧齒", id: 7 },
        { itemName: "美白牙齒", id: 8 },
        { itemName: "洗牙", id: 9 },
        { itemName: "牙冠", id: 10 },
        { itemName: "補牙", id: 11 },
        { itemName: "牙托（假牙）", id: 12 },
        { itemName: "兒童牙科", id: 13 },
        { itemName: "一般口腔檢查", id: 14 },
      ],
      selectSource: [
        {
          name: '搜尋引擎', id: '1'
        },
        {
          name: '廣告 (Facebook/IG)', id: '2'
        },
        {
          name: '親友介紹', id: '3'
        },
        {
          name: '其他', id: '4'
        },
      ],
      ruleForm: {
        name: "",
        region: "",
        beforePhone: '+852',
        phone: "",
        serve: [],
        source: '',
        radio: false,
        radio1: false,
        radio2: false,
      },
      rules: {
        name: [
          { required: true, message: "必須輸入答案", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "必須輸入答案", trigger: "change" },
        ],

        source: [{ required: true, message: "請選擇一個來源", trigger: "change" }],
        phone: [{ required: true, message: "請輸入你的電話號碼", trigger: "blur" }],
        serve: [{ required: true, message: "請至少選擇一個症狀", trigger: "change" }],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ]
      },
    };
  },
  created() { },

  methods: {
    aa() {
      console.log("提交表单了");
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm, 'submit!');
          this.$refs[formName].resetFields(); // 重置表单 
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    submitButt() {
      if (
        this.ruleForm.name === "" ||
        this.ruleForm.region === "" ||
        this.ruleForm.phone === ""
      ) {
        alert("請完善信息！");
      } else if (
        localStorage.getItem("ruleForm") === JSON.stringify(this.ruleForm)
      ) {
        this.ruleForm = {};
        alert("我们已经收到啦~请不要重复提交");
        location.reload();
      } else {
        alert("提交成功！");
        localStorage.setItem("ruleForm", JSON.stringify(this.ruleForm));
        this.$refs.submitButt.click();
      }
    },

  },
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
    color: #79828d;
    margin-bottom: 0vw;
  }

  image {
    text-align: center;
  }
}

//pc
@media only screen and (min-width: 760px) {
  .mbShow {
    display: none !important;
  }

  // ::v-deep .el-radio__label {
  //   padding-left: 10px;
  //   font-size: 1rem;
  // }

  // ::v-deep .el-input {
  //   font-size: 1.2rem;
  // }

  ::v-deep .el-input__inner {
    // border: 0px;
    border: 2px solid #fff;
    border-radius: 10px;
    height: 52px;
    line-height: 52px;
    background-color: #fff;
    color: #9bd0f5;
  }

  ::v-deep .el-input-group__prepend {
    background: #fff;
    border-radius: 10px 0 0 10px;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
  }

  ::v-deep .el-form--label-top .el-form-item__label {
    color: #FFF;
    text-align: justify;
    font-family: Noto Sans TC;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 2.4px;
    position: relative;
  }

  ::v-deep .el-form--label-top .el-form-item__label::before {
    position: absolute;
    right: -20px;
  }
  ::v-deep .el-form {
    &>div:nth-child(3) {
      &>div:nth-child(2) {
        &>div:nth-child(1) {
          &>input {
            border-radius: 0 10px 10px 0;
          }
          &>div:nth-child(1) {
            &>div:nth-child(1) {
              &>div:nth-child(1) {
                input {
                  color: #86c1e8;
                }
              }
            }
          }
        }
      }
    }

    &>div:nth-child(5) {
      position: relative !important;

      &>label {
        position: relative !important;
      }

      &>div:nth-child(2) {
        &>span {
          position: absolute;
          top: 0;
          left: 0px;
          transform: translate(70%, -150%);
          color: #EC1212;
          font-family: Noto Sans TC;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 1.8px;
        }
      }
    }

    &>div:nth-child(5)::after {
      content: '*為必填';
      color: #EC1212;
      text-align: justify;
      font-family: Noto Sans TC;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.8px;
      padding-top: 20px;
    }

    &>div:nth-child(6) {
      &>div:nth-child(2) {
        &>div:nth-child(1) {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }

  ::v-deep .el-select .el-input .el-select__caret {
    color: #9bd0f5;
    font-size: 1.5rem;
    margin-right: 0.6rem;
    transition: transform 0.3s;
    transform: rotateZ(180deg);
    cursor: pointer;
  }

  ::v-deep .el-input__inner::placeholder {
    color: #9bd0f5;
  }

  ::v-deep .el-radio__input.is-checked+.el-radio__label {
    color: #ffffff;
  }

  ::v-deep.el-checkbox {
    color: #ffffff;
  }

  ::v-deep .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #ffffff;
  }

  ::v-deep .el-checkbox__inner {
    border-radius: 50%;
  }

  ::v-deep .el-checkbox {
    min-width: 190px;
    width: 190px;
  }

  ::v-deep .el-checkbox-group .el-checkbox .el-checkbox__label {
    color: #FFF;
    text-align: justify;
    font-family: Noto Sans TC;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.8px;
  }

  ::v-deep .el-radio-group .el-radio .el-radio__label {
    color: #FFF;
    text-align: justify;
    font-family: Noto Sans TC;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.8px;
  }

  ::v-deep .el-radio {
    color: #fff;
    height: 40px;
  }

  .button {
    background: #9bd0f5;
    // padding-bottom: 15vw;

    .link_more {
      background: #fff;
      border: 2px solid #57b2f3;
      border-radius: 30px;
      transition: all 0.5s;
      color: #57b2f3;
      text-decoration: none;
      font-weight: 600;
      display: block;
      padding: 0.5vw;
      margin: 0 auto;
      width: 10vw;
      letter-spacing: 0.2vw;
      text-align: center;
      cursor: pointer;

      &:hover {
        animation: 3s ease-in 1s 2 reverse both paused slidein;
      }
    }
  }

  .radioInfo1 {
    display: none;
  }

  .radioInfo {
    // padding-bottom: 5vw;
    background: #9bd0f5;
    padding-top: 50px;

    .radiocon {
      padding-bottom: 1vw;

      span {
        color: #ff000a;
        border-bottom: 1px solid #ff000a;
      }
    }
  }

  .form-p {
    color: #EC1212;
    text-align: justify;
    font-family: Noto Sans TC;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.8px;
  }

  .form-btn {
    margin: 92px auto;
    color: #FFF;
    font-family: Noto Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.92px;
    width: fit-content;
    padding: 8px 92px 12px;
    background: #FFD333;
    border-radius: 100px;
    position: relative;
    z-index: 10;
    cursor: pointer;
  }

  .form-btn::before {
    content: '';
    background: url('https://cdn.statically.io/gh/CMER-SZ/picx-images-hosting@master/new-hkcmereye/Layer_1.3w7a4yvapcg0.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 104px;
    height: 92px;
    display: inline-block;
    position: absolute;
    top: -125%;
    left: 0;
    z-index: 1;
  }

  .form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #9bd0f5;
    -webkit-clip-path: ellipse(100% 67% at 50% 70%);
    clip-path: ellipse(100% 67% at 50% 70%);
    padding: 5vw 0;

    .form-table {
      max-width: 1440px;
      margin: 0 auto;
    }

    .text-form {
      margin-top: 120px;
      text-align: center;
      color: #fff;
      font-size: 2.2rem;
      font-weight: 600;
    }

    .table-message {
      form {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    .el-select {
      display: inline-block;
      position: relative;
      width: 19vw;
    }

    .el-form-item {
      margin: 30px 65px;
      width: 450px;
    }
  }
}

//mb
@media only screen and (max-width: 760px) {
  .text-form {
    margin-top: 20vw;
    text-align: center;
    color: #fff;
    font-size: 25px;
    font-weight: 300;
  }

  ::v-deep .el-input__inner {
    border: 2px solid #fff;
    border-radius: 10px;
    height: 52px;
    line-height: 52px;
    background-color: #fff;
    color: #9bd0f5;
    width: 76vw;
  }

  ::v-deep .el-select .el-input .el-select__caret {
    color: #9bd0f5;
    font-size: 1.2rem;
    margin-right: 0.6rem;
    transition: transform 0.3s;
    transform: rotateZ(180deg);
    cursor: pointer;
  }

  ::v-deep .el-input__inner::placeholder {
    color: #9bd0f5;
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
    background: #9bd0f5;
    padding-bottom: 15vw;
    display: flex;
    justify-content: center;

    .link_more {
      background: #fff;
      border-radius: 15px 15px 15px 15px;
      transition: all 0.5s;
      color: #57b2f3;
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
    background: #9bd0f5;

    .radiocon {
      padding-bottom: 1vw;

      span {
        color: #ff000a;
        border-bottom: 1px solid #ff000a;
      }
    }
  }

  .radioInfo1 {
    margin: 3vw 9vw;
    display: grid;
    justify-content: center;
    // background: #9bd0f5;

    .radiocon {
      padding-bottom: 5vw;

      span {
        color: #ff000a;
        border-bottom: 1px solid #ff000a;
      }
    }
  }

  .form {
    // border-radius: 36% 36% 0 0;
    clip-path: ellipse(140% 54% at 51% 54%);
    // background: radial-gradient(108vw 68vw at bottom, transparent 50%, #9BD0F5 50%) !important;
    background-color: #97c8ed;
    display: grid;

    // justify-content: center;
    form {
      margin: 9vw auto 5vw;
    }

    ::v-deep .el-scrollbar {
      background: hotpink;

      .el-select-dropdown__item {
        color: #86c1e8;
      }
    }

    ::v-deep .el-form {
      &>div:nth-child(3) {
        &>div:nth-child(2) {
          &>div:nth-child(1) {
            &>div:nth-child(1) {
              &>div:nth-child(1) {
                &>div:nth-child(1) {
                  input {
                    color: #86c1e8;
                  }
                }
              }
            }

            &>input {
              width: 52vw;
              border-radius: 0 10px 10px 0;
            }
          }
        }
      }

      &>div:nth-child(5) {
        position: relative !important;

        &>label {
          position: relative !important;
        }

        &>div:nth-child(2) {
          &>span {
            position: absolute;
            top: 0;
            left: 0px;
            transform: translate(80%, -150%);
            color: #EC1212;
            font-family: Noto Sans TC;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 1.3px;
          }
        }
      }

      &>div:nth-child(6) {
        &>div:nth-child(2) {
          &>div:nth-child(1) {
            display: flex;
            flex-direction: column;
          }

          label {
            margin: 16px 0;
          }
        }
      }

      &>div:nth-child(6)::after {
        content: '*為必填';
        color: #EC1212;
        text-align: justify;
        font-family: Noto Sans TC;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.6px;
        padding-top: 20px;
      }
    }

    ::v-deep .el-input-group__prepend {
      background: #fff;
      border-radius: 10px 0 0 10px;
      border-top: 2px solid #fff;
      border-bottom: 2px solid #fff;
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

  ::v-deep .el-form--label-top .el-form-item__label {
    color: #FFF;
    text-align: justify;
    letter-spacing: 2.4px;
    color: #FFF;
    font-family: Noto Sans TC;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: relative;
  }

  ::v-deep .el-form--label-top .el-form-item__label::before {
    position: absolute;
    right: -20px;
  }

  ::v-deep .el-checkbox-group {
    display: flex;
    flex-wrap: wrap;

    &>label {
      min-width: 140px;
      width: 140px;
    }

    &>label:nth-child(odd) {
      margin-right: 30px;
    }

    &>label:nth-child(even) {
      margin-right: 0;
    }
  }

  ::v-deep .el-checkbox-group .el-checkbox .el-checkbox__label {
    color: #FFF;
    text-align: justify;
    font-family: Noto Sans TC;
    font-size: 14.63px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.463px;
  }

  ::v-deep .el-checkbox__inner {
    border-radius: 50%;
  }

  .form-btn {
    margin: 5rem auto 3.875rem;
    color: #FFF;
    font-family: Noto Sans;
    font-size: 1.0532rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.0843rem;
    width: fit-content;
    padding: 0.5rem 5.75rem 0.75rem;
    background: #FFD333;
    border-radius: 100px;
    position: relative;
    z-index: 10;
    cursor: pointer;
  }

  .form-btn::before {
    content: '';
    background: url('https://cdn.statically.io/gh/CMER-SZ/picx-images-hosting@master/new-hkcmereye/Layer_1.3w7a4yvapcg0.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 73px;
    height: 64px;
    display: inline-block;
    position: absolute;
    top: -105%;
    left: 0;
    z-index: 1;
  }
}</style>
<style lang="scss" scoped></style>
