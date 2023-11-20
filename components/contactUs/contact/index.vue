<template>
  <div>
    <div class="vedio_box md:font-black">
      <div class="flex justify-center texts">
        <h2>預約</h2>
        <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="" />
      </div>
      <div class="form">
        <a class="btn-form" href="https://api.whatsapp.com/send?phone=85295128192" target="_blank">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
              <path
                d="M0 32.2737C0.342011 31.0165 0.673335 29.8238 0.993971 28.6257C1.39655 27.168 1.79022 25.7102 2.17498 24.2525C2.21215 24.084 2.19142 23.9079 2.1162 23.7528C0.513392 20.8558 -0.150835 17.5285 0.216027 14.2341C0.582889 10.9397 1.96257 7.84238 4.16292 5.37347C6.80288 2.29372 10.5466 0.387725 14.5782 0.0708132C16.7373 -0.134084 18.9152 0.106806 20.9783 0.778709C23.0414 1.45061 24.9461 2.53936 26.5755 3.97808C28.205 5.4168 29.5247 7.17515 30.4538 9.14518C31.3828 11.1152 31.9015 13.2554 31.9781 15.4342C32.0547 17.6131 31.6876 19.7848 30.8992 21.8158C30.1108 23.8469 28.9178 25.6945 27.3934 27.2453C25.8691 28.796 24.0456 30.0172 22.0348 30.8339C20.0241 31.6505 17.8685 32.0454 15.7005 31.9943C13.239 31.9561 10.8216 31.3319 8.64648 30.173C8.49982 30.1094 8.33643 30.0962 8.18155 30.1353C5.57015 30.8123 2.96232 31.4964 0.358044 32.1877L0 32.2737ZM3.82625 28.4699L4.02932 28.4215C5.47218 28.0401 6.92039 27.6694 8.35791 27.2772C8.50235 27.23 8.65542 27.2156 8.80605 27.2352C8.95669 27.2547 9.10113 27.3076 9.22897 27.39C13.114 29.6411 17.17 29.9795 21.2849 28.1905C24.0266 26.9997 26.2867 24.9111 27.6973 22.2645C29.108 19.618 29.5862 16.5694 29.054 13.6148C28.5219 10.6603 27.0108 7.97379 24.7666 5.99257C22.5225 4.01135 19.6774 2.85205 16.6944 2.70335C14.2595 2.58747 11.84 3.14952 9.7025 4.3276C7.56498 5.50568 5.79239 7.25408 4.58 9.38016C3.36761 11.5062 2.76248 13.9275 2.83127 16.3772C2.90006 18.8269 3.64009 21.21 4.96985 23.2639C5.03729 23.3563 5.0813 23.4637 5.09806 23.577C5.11483 23.6903 5.10383 23.806 5.06604 23.914C4.64922 25.4129 4.24842 26.9118 3.82625 28.4699Z"
                fill="white" />
              <path
                d="M10.9762 8.60753C11.6228 8.44099 11.9381 8.87614 12.1785 9.49933C12.5366 10.4288 12.9267 11.3474 13.3167 12.2607C13.3911 12.3989 13.4236 12.556 13.4103 12.7125C13.397 12.8691 13.3385 13.0183 13.2419 13.1418C12.9213 13.5716 12.6114 14.0121 12.2747 14.4258C12.1739 14.5307 12.1132 14.668 12.1034 14.8135C12.0937 14.959 12.1354 15.1034 12.2213 15.2209C13.457 17.3781 15.3871 19.0476 17.6933 19.954C17.8275 20.0249 17.9828 20.0445 18.1303 20.0089C18.2778 19.9733 18.4073 19.8851 18.4949 19.7606C18.8903 19.2609 19.3071 18.7774 19.6865 18.267C19.7596 18.1267 19.8843 18.0206 20.0341 17.9715C20.1838 17.9223 20.3468 17.9339 20.4881 18.0038C21.6317 18.541 22.7646 19.0783 23.8921 19.6477C23.958 19.6933 24.0128 19.7532 24.0525 19.8229C24.0923 19.8927 24.116 19.9705 24.1219 20.0507C24.1819 20.6102 24.0856 21.1755 23.844 21.6831C23.6024 22.1908 23.2249 22.6208 22.7539 22.9249C22.1534 23.3151 21.4739 23.5658 20.7649 23.6587C20.0559 23.7517 19.3351 23.6845 18.6552 23.4621C15.0321 22.4468 12.2801 20.2387 10.0677 17.2356C9.21617 16.2091 8.57344 15.0244 8.17603 13.7489C7.94506 13.0071 7.90932 12.2177 8.07228 11.4579C8.23524 10.698 8.59134 9.99362 9.10584 9.41339C9.68832 8.69349 9.90741 8.59679 10.9762 8.60753Z"
                fill="white" />
            </svg>
          </div>
          <div>&nbsp;WhatsApp 預約</div>
        </a>
        <el-form :inline="true" label-position="top" :model="ruleForm" ref="ruleForm" label-width="100px"
          class="main-container demo-form-inline wpcf7-form invalid"
          action="https://send.pageclip.co/oLDloEgenkRMGb9ZYDIO4wlarrwjxsBu/Cmerdental" method="post">
          <div>
            <div style="display: none">
              <input type="hidden" name="pageUrl" value="https://cmerdental.com/contact-us" />
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
                閣下必須提前至少三個工作天進行網上預約；網上提交表格並不等於預約成功，<br />閣下將會在兩個工作天內以電話或電郵收取預約確認通知；閣下所提供的個人信息只會用於預約服務，所有內容皆會保密處理。
              </el-radio>
            </div>
            <div class="radiocon">
              <el-radio v-model="radio1" name="privary" value="我已知曉同意收集個人資料及私隱">
                本人已閱讀，明白及同意收集個人資料及<nuxt-link to="/policy#A1"><span>私隱政策</span></nuxt-link>。</el-radio>
            </div>
            <div class="radiocon">
              <el-radio v-model="radio2" name="broadcast" value="本人願意日後收取希瑪醫療集團以及其關連公司之產品資料及宣傳資訊。">
                本人願意日後收取希瑪醫療集團以及其關連公司之產品資料及宣傳資訊。如選擇拒絕，本人同時不會收到貴公司的任何禮品、<br />折扣及其他優惠資訊。</el-radio>
            </div>
          </div>
          <div class="radioInfo1">
            <div class="radiocon">
              <el-radio v-model="radio" name="confidentiality" value="我已知曉内容皆保密處理">
                閣下必須提前至少三個工作天進行網上預約；<br />網上提交表格並不等於預約成功，閣下將會在兩<br />個工作天內以電話或電郵收取預約確認通知；<br />閣下所提供的個人信息只會用於預約服務，<br />所有內容皆會保密處理。
              </el-radio>
            </div>
            <div class="radiocon">
              <el-radio v-model="radio1" name="privary" value="我已知曉同意收集個人資料及私隱">
                本人已閱讀，明白及同意收集個人資料及<br /><nuxt-link to="/policy#A1"><span>私隱政策</span></nuxt-link>。</el-radio>
            </div>
            <div class="radiocon">
              <el-radio v-model="radio2" name="broadcast" value="本人願意日後收取希瑪醫療集團以及其關連公司之產品資料及宣傳資訊。">
                本人願意日後收取希瑪醫療集團以及其關連<br />公司之產品資料及宣傳資訊。如選擇拒絕，本<br />人同時不會收到貴公司的任何禮品、折扣及其<br />他優惠資訊。</el-radio>
            </div>
          </div>
          <div class="button">
            <!-- @click="submitButt()" -->
            <button ref="submitButt" v-show="false" class="link_more submitButt" type="submit" value="Submit" @click="aa">
              提交
            </button>
            <div class="link_more submitButt" @click="submitButt">提交</div>
          </div>
        </el-form>

        <div style="display: none">
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
// import { postFormData }from '@/api/index.js'
export default {
  data() {
    return {
      selectList: [
        { itemName: "植牙", id: 1 },
        { itemName: "根管治療(杜牙根)", id: 2 },
        { itemName: "Invisalign(隱形牙箍)", id: 3 },
        { itemName: "瓷貼片", id: 4 },
        { itemName: "牙齒美白", id: 5 },
        { itemName: "全瓷牙冠及全鋯牙冠", id: 6 },
        { itemName: "拔牙及智慧齒拔除", id: 7 },
        { itemName: "牙周病治療", id: 8 },
        { itemName: "全口牙托及局部牙托", id: 9 },
        { itemName: "矯齒", id: 10 },
        { itemName: "補牙", id: 11 },
        { itemName: "洗牙", id: 12 },
        { itemName: "一般口腔檢查", id: 13 },
        { itemName: "兒童牙科保健及治療", id: 14 },
      ],
      radio: true,
      radio1: true,
      radio2: true,
      ruleForm: {
        name: "",
        region: "",
        phone: "",
        address: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "必須輸入答案", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "必須輸入答案", trigger: "change" },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个診症",
            trigger: "change",
          },
        ],
        phone: [{ required: true, message: "必須輸入答案", trigger: "blur" }],
        address: [{ required: true, message: "必須輸入答案", trigger: "blur" }],
        resource: [
          { required: true, message: "必須輸入答案", trigger: "blur" },
        ],
      },
    };
  },
  created() { },

  methods: {
    aa() {
      console.log("提交表单了");
    },
    submitButt() {
      if (
        this.ruleForm.name === "" ||
        this.ruleForm.region === "" ||
        this.ruleForm.phone === "" ||
        this.ruleForm.address === "" ||
        this.ruleForm.resource === ""
      ) {
        alert("請完善信息！");
        // return false;
      } else if (
        localStorage.getItem("ruleForm") === JSON.stringify(this.ruleForm)
      ) {
        this.ruleForm = {};
        alert("我们已经收到啦~请不要重复提交");
        location.reload();

        // return false;
      } else {
        alert("提交成功！");
        localStorage.setItem("ruleForm", JSON.stringify(this.ruleForm));
        this.$refs.submitButt.click();
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
    color: #9bd0f5;
  }

  ::v-deep .el-form--inline .el-form-item__label {
    float: none;
    display: inline-block;
    color: #fff;
    font-size: 1.5rem;
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

  ::v-deep .el-radio {
    color: #fff;
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
    padding-bottom: 5vw;
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

  .form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    // text-align: center;
    background: #9bd0f5;
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
      margin: 5vw auto;

      &>div:nth-child(1) {
        display: flex;
        justify-content: space-around;
      }

      &>div:nth-child(2) {
        display: flex;
        justify-content: space-around;
      }

    }

    .btn-form {
      width: fit-content;
      text-decoration: none;
      margin: 9vw auto 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background: #57B2F3;
      border-radius: 99px;
      padding: 8px 55px;
    }
    .btn-form:hover {
      width: fit-content;
      text-decoration: none;
      margin: 9vw auto 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #57B2F3;
      background: #fff;
      border-radius: 99px;
      padding: 8px 55px;
    }
    .btn-form:hover {
      svg {
        path {
          fill: #57B2F3 !important;
        }
      }
    }

    .el-select {
      display: inline-block;
      position: relative;
      width: 19vw;
    }

    .el-form-item {
      margin: 30px 95px;
      width: 19vw;
    }
  }
}

//mb
@media only screen and (max-width: 760px) {
  .btn-form {
      width: fit-content;
      text-decoration: none;
      margin: 20vw auto 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background: #57B2F3;
      border-radius: 99px;
      padding: 8px 55px;
    }
    .btn-form:hover {
      width: fit-content;
      text-decoration: none;
      margin: 9vw auto 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #57B2F3;
      background: #fff;
      border-radius: 99px;
      padding: 8px 55px;
    }
    .btn-form:hover {
      svg {
        path {
          fill: #57B2F3 !important;
        }
      }
    }
  ::v-deep .el-input__inner {
    border: 2px solid #fff;
    border-radius: 10px;
    height: 52px;
    line-height: 52px;
    background-color: #fff;
    color: #9bd0f5;
    width: 68vw;
  }

  ::v-deep .el-form--inline .el-form-item__label {
    float: none;
    display: inline-block;
    color: #fff;
    font-size: 1.2rem;
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
    background: #9bd0f5;

    .radiocon {
      padding-bottom: 5vw;

      span {
        color: #ff000a;
        border-bottom: 1px solid #ff000a;
      }
    }
  }

  .form {
    left: -10%;
    // border-radius: 36% 36% 0 0;
    clip-path: ellipse(100% 54% at 51% 54%);
    // background: radial-gradient(108vw 68vw at bottom, transparent 50%, #9BD0F5 50%) !important;
    background-color: #9bd0f5;
    display: grid;

    // justify-content: center;
    form {
      margin: 9vw auto 5vw;
    }

    .el-select {
      display: inline-block;
      position: relative;
      // width: 19vw;
    }

    .el-form-item {
      margin: 3vw 16vw;
      // width: 19vw;
    }
  }
}
</style>
<style lang="scss" scoped></style>
