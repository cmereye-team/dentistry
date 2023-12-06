<template>
  <div class="container">
    <div class="online footer">
      <div v-if="isShow" class="pc">
        <!-- <a id="zxzx" class="face-button d-block phone" href="tel:85236202428" aria-hidden="true" target="_blank">
          <div class="face-primary">
            <span class="icon"> <i class="fa fa-headphones ">
                <img src="https://static.cmereye.com/static/lkximg/image/footce/phone.png" alt="">
              </i></span>
            電話預約
          </div>
        </a> -->
        <nuxt-link to="https://api.whatsapp.com/send?phone=85295128192">
          <div class="whatsapp_pc">
            <div>
              <img
                src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/new-hkcmereye/Group-1008.60fyrl2mk7o0.png"
                alt="">
            </div>
            <div>
              <div>
                <div>立即</div>
                <div>預約</div>
              </div>
              <div>
                <img
                  src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/new-hkcmereye/whatsapp-logo-whatsapp-logo-transparent-whatsapp-icon-transparent-free-free-png-1.4v2ehchogae0.png"
                  alt="">
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div v-else>
        <a id="zxzx" class="face-button d-block web_app_a gtm_app phoneMd" href="tel:85236202428 " aria-hidden="true"
          target="_blank" style="line-height: 20px;">
          <div class="face-primary" style="display: flex;">
            <span class="icon" style="display: flex;align-items: center;padding-left: 18px;"> <i
                class="fa fa-headphones ">
                <img src="https://static.cmereye.com/static/lkximg/image/footce/phone.png" alt="">
              </i></span>
            <div style=" padding: 10px 0px 6px 14px;display: flex;flex-direction: column;align-items: flex-start;">
              <span>電話預約</span>
              <span>3620 2428</span>
            </div>
          </div>
        </a>
      </div>
      <div v-if="isShow">
        <!-- <a class="face-button1 d-block webapp" href="https://api.whatsapp.com/send?phone=85295128192" aria-hidden="true"
          target="_blank">
          <div class="face-primary">
            <span class="icon"> <i class="fa  fa-volume-control-phone ">
                <img class="what" src="https://static.cmereye.com/static/lkximg/image/footce/yuyue.png" alt="">
              </i></span>
            WhatsApp<br>預約
          </div>
        </a> -->
        <nuxt-link to="tel:85236202428">
          <div class="tel_pc">
            <img src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/new-hkcmereye/Group-4.1tvtfq5l99c0.png"
              alt="">
            <div>
              <div><span>電話預約:</span><span> 3620 2428</span></div>
              <div><svg xmlns="http://www.w3.org/2000/svg" width="41" height="38" viewBox="0 0 41 38" fill="none">
                  <path
                    d="M7.89237 0.646751C9.48619 0.238417 10.2633 1.30532 10.8561 2.83328C11.7386 5.11204 12.7002 7.36449 13.6617 9.60374C13.8449 9.94259 13.9251 10.3276 13.8923 10.7114C13.8595 11.0952 13.7153 11.4611 13.4773 11.764C12.687 12.8177 11.923 13.8979 11.0932 14.9121C10.8447 15.1692 10.6951 15.5059 10.671 15.8627C10.6469 16.2195 10.7498 16.5733 10.9615 16.8616C14.0076 22.1506 18.7651 26.2438 24.4497 28.4661C24.7805 28.6402 25.1633 28.688 25.5268 28.6008C25.8903 28.5136 26.2096 28.2972 26.4255 27.992C27.4002 26.767 28.4276 25.5814 29.3628 24.3301C29.5429 23.986 29.8503 23.726 30.2194 23.6054C30.5885 23.4848 30.9902 23.5133 31.3386 23.6847C34.1575 25.0019 36.9499 26.3191 39.7292 27.7153C39.8915 27.8271 40.0267 27.9739 40.1247 28.1449C40.2227 28.3159 40.2812 28.5067 40.2956 28.7032C40.4435 30.0751 40.2063 31.461 39.6107 32.7057C39.0151 33.9504 38.0847 35.0047 36.9236 35.7503C35.4434 36.7071 33.7685 37.3217 32.0208 37.5496C30.2731 37.7774 28.4966 37.6128 26.8206 37.0675C17.89 34.578 11.1064 29.1643 5.65313 21.8011C3.5541 19.2843 1.96982 16.3798 0.990216 13.2524C0.420903 11.4336 0.332796 9.49826 0.734487 7.63524C1.13618 5.77223 2.01394 4.04517 3.28215 2.62256C4.71791 0.857504 5.25796 0.620406 7.89237 0.646751Z"
                    fill="white" />
                </svg></div>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div v-else>
        <a class="face-button1 d-block webappMd" href="https://api.whatsapp.com/send?phone=85295128192" aria-hidden="true"
          target="_blank">
          <div class="face-primary">
            <span class="icon"> <i class="fa  fa-volume-control-phone ">
                <img class="what" src="https://static.cmereye.com/static/lkximg/image/footce/yuyue.png" alt="">
              </i></span>
            WhatsApp預約
          </div>
        </a>
      </div>
      <div v-if="isShow">
        <!-- <div class="face-button2 face-button4 d-block webapp">
          <div class="face-primary">
            <span class="icon"> <i class="fa  fa-volume-control-phone ">
                <img class="what1" src="https://static.cmereye.com/imgs/2023/06/6abf097c810dcb7b.png" alt="">
              </i></span>
            WeChat
          </div>
          <div class="face-button4-img">
            <img src="https://static.cmereye.com/imgs/2023/10/5506a80d21a79029.png" alt="">
          </div>
        </div> -->
        <div class="weChat_pc">
          <img src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/new-hkcmereye/image-11.2ushoad5pbq0.png"
            alt="">
          <div>
            <div>
              <div>WeChat預約</div>
              <div><img
                  src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/new-hkcmereye/image-11.2ushoad5pbq0.png"
                  alt="WeChat預約"></div>
            </div>
            <div>
              <img
                src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/new-hkcmereye/Screenshot-2023-11-29-at-5.54-1.7gfv4xeapy80.png"
                alt="WeChat Qr">
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="face-button3 face-button4" @click="drawerBool = true">
          <div class="face-primary">
            <img class="what" src="https://static.cmereye.com/imgs/2023/06/6abf097c810dcb7b.png" alt="">
            <span>WeChat</span>
          </div>
        </div>
      </div>
      <el-drawer title="我是标题" :visible.sync="drawerBool" :direction="'btt'" size="50%" :with-header="false">
        <div class="drawerImg">
          <img src="https://static.cmereye.com/imgs/2023/10/a7833e634c739f73.png" alt="">
        </div>
      </el-drawer>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
      screenWidth: '',
      drawerBool: false
    }

  },
  mounted() {
    this.dynamicLoadCss(`https://www.cmerdental.com/css/vikim.css?parms=${new Date()}`)
  },
  created() {
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
    dynamicLoadCss(url) {
      let head = document.getElementsByTagName('head')[0];
      let link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = url;
      head.appendChild(link);
    }
  },
  watch: {
    screenWidth: {
      handler: function (val, oldVal) {
        console.log('val========', val);
        if (val < 768) {
          console.log('屏幕宽度小于760px')
          this.isShow = false
        } else {
          console.log('屏幕宽度大于760px')
          this.isShow = true
        }
      },
      immediate: true
    },
  }
}
</script>
<style lang="scss" scoped>
//pc
@media only screen and (min-width: 760px) {
  .online {
    display: flex;
    flex-direction: column;
    align-items: center;

    &>div:nth-child(2) {
      margin: 1.5rem 0 1.125rem;
    }
  }

  .pc {
    a {
      text-decoration: none;
    }
  }

  .whatsapp_pc {
    display: flex;
    flex-direction: column;
    align-items: center;

    &>div:nth-child(2) {
      display: flex;
      align-items: flex-end;
      min-width: 220px;
      position: relative;
      border-radius: 100px;
      background: #57B2F3;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

      &>div:nth-child(1) {
        display: flex;
        width: 100%;
        justify-content: space-around;
        color: #FFF;
        text-align: center;
        font-family: Noto Sans TC;
        font-size: 26px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 2.6px;
        padding: 4px 4px;
      }

      &>div:nth-child(2) {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
      }
    }
  }

  .tel_pc,
  .weChat_pc {
    width: 83px;
    height: 83px;
    background: #57B2F3;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: relative;
  }

  .tel_pc {
    &>div:nth-child(2) {
      position: absolute;
      right: 120%;

      width: 0;
      padding: 0;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 176.28px;
      background: #57B2F3;
      display: flex;
      // width: 400px;
      // padding: 21.5px 30px;
      align-items: center;
      justify-content: space-between;
      transition: all 0.5s ease-in-out;

      &>div:nth-child(1) {
        color: #FFF;
        font-family: Noto Sans TC;
        // font-size: 28px;
        font-size: 0;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        &>span:nth-child(1) {
          text-align: right;

          letter-spacing: 2.8px;
        }

        &>span:nth-child(2) {
          letter-spacing: 0.28px;
        }
      }

      &>div:nth-child(2) {
        opacity: 0;
      }
    }
  }

  .weChat_pc {
    &>div:nth-child(2) {
      position: absolute;
      right: 120%;
      border-radius: 42.307px;
      background: #57B2F3;
      // width: 410px;
      // padding: 22px 0 14px;
      width: 0;
      padding: 0;
      transition: all 0.5s ease-in-out;

      &>div:nth-child(1) {
        display: none;
        padding-right: 20px;
        color: #FFF;
        text-align: right;
        font-family: Noto Sans TC;
        font-size: 0;
        font-style: normal;
        font-weight: 700;
        line-height: 0;
        /* 125.914% */
        letter-spacing: 2.8px;

        &>div:nth-child(2) {
          display: none;
          margin-left: 10px;
        }
      }

      &>div:nth-child(2) {
        display: none;
        &>img {
          width: 0;
        }
      }
    }
  }

  .weChat_pc:hover {
    &>div:nth-child(2) {
      width: 410px;
      padding: 22px 10px 14px;
      transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      &>div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 28px;
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        &>div:nth-child(2) {
          display: block;
        }
      }
      &>div:nth-child(2) {
        margin: 0 auto;
        margin-top: 18px;
        display: flex;
        justify-content: center;
        &>img {
          width: 100%;
        }
      }
    }
  }

  .tel_pc:hover {
    &>div:nth-child(2) {
      width: 400px;
      padding: 21.5px 26px;
      transition: all .3s ease-in-out;

      &>div:nth-child(1) {
        font-size: 28px;
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      &>div:nth-child(2) {
        opacity: 1;
        transition: all 0.2s ease-out;
      }
    }
  }

  .face-primary {
    img {
      // padding-left: 0.5vw;
    }
  }

  .online {
    position: fixed;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    bottom: 16vw;
    z-index: 999;
    padding-right: 30px;

    a {
      margin: 0;
    }
  }

  .face-button1 {
    width: 180px;
    height: 60px;
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    text-align: left;
    text-decoration: none;
    overflow: hidden;
    margin-bottom: 10px;
    // background: white;
  }

  .face-button1 .face-primary {
    background-color: #57B2F3;
    color: #fff;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 101%;
    height: 100%;
    border-radius: 16px 0 0 16px;
  }

  .what {
    padding: 0 0.5vw 0 1.5vw;
  }

  .face-button {
    width: 180px;
    height: 60px;
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    overflow: hidden;
    margin-bottom: 10px;
    // padding-right: 1vw;
    // background: white;
  }

  .face-button .icon {
    margin-right: 8px;
    font-size: 18px;
  }

  .face-button2 {
    width: 180px;
    height: 60px;
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    overflow: hidden;
    margin-bottom: 10px;
    // padding-right: 1vw;
    // background: white;
  }

  .face-button2 .face-primary {
    background-color: #FFB7B7;
    color: #fff;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 101%;
    height: 100%;
    border-radius: 16px 0 0 16px;

  }

  .face-button4 .face-primary {
    background-color: #9BD0F5;
  }

  .face-button4 {
    position: relative;
    overflow: visible;
    cursor: pointer;
  }

  .face-button4-img {
    position: absolute;
    top: 50%;
    left: -135%;
    padding-right: 35%;
    transform: translateY(-50%);
    display: none;
    z-index: 9999999999999;
  }

  .face-button4:hover .face-button4-img {
    display: block;
  }

  .face-button .face-primary {
    background-color: #9BD0F5;
    color: #fff;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 101%;
    height: 100%;
    border-radius: 16px 0 0 16px;

  }

  .what1 {
    padding-right: 0.5vw;
  }

}

@media only screen and (min-width: 1000px) and (max-width: 1440px) {
  .online {
    z-index: 9999;
  }
}

//mb
@media only screen and (max-width: 760px) {
  .face-primary {
    .what {
      width: 6vw
    }
  }

  .container {
    position: fixed;
    bottom: 0;
    z-index: 9999;
    padding: 0;
    overflow-y: hidden;
    // display: flex;
    // justify-content: center;
  }

  a {
    margin: 0;
    padding: 0 !important;
  }

  .face-button3 {
    width: 80px;
    height: 80px;
    position: fixed;
    right: 20px;
    bottom: 170px;
    border-radius: 50% !important;
    text-decoration: none;
    background: #FFB7B7;
  }

  .face-button3 .face-primary {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }

  .face-button4 {
    bottom: 80px;
    background: #9BD0F5;
  }

  .face-button4 .face-primary img {
    width: 34px;
  }

  .face-button4 .face-primary span {
    color: #fff;
  }

  .drawerImg {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    img {
      max-height: 100%;
    }
  }

  .face-button1 {
    width: 50%;
    // height: 60px;
    line-height: 56px;
    display: block;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    color: #fff;
    overflow: hidden;
    margin-bottom: 10px;
    margin: 0 !important;
    background-color: #57B2F3;
    border-radius: 18px 18px 0 0;
    // background: white;
  }

  .face-button {
    width: 50%;
    // height: 60px;
    line-height: 56px;
    display: block;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    overflow: hidden;
    margin-bottom: 10px;
    float: left;
    margin: 0 !important;
    background-color: #9BD0F5;
    color: #fff;
    border-radius: 18px 18px 0 0;
    // background: white;
  }
}
</style>
