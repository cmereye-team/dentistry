<template>
  <div class="container">
    <div class="online footer">
      <div v-if="isShow" class="pc">
        <a target="_blank" href="https://api.whatsapp.com/send?phone=85295128192">
          <div class="whatsapp_pc">
            <div>
              <img
                src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Group-10081.2vvogt7bnx40.png"
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
        </a>
      </div>
      <!-- <div v-else>
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
      </div> -->
      <div v-if="isShow">
        <a target="_blank" href="tel:85236202428">
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
        </a>
      </div>
      <!-- <div v-else>
        <a class="face-button1 d-block webappMd" href="https://api.whatsapp.com/send?phone=85295128192" aria-hidden="true"
          target="_blank">
          <div class="face-primary">
            <span class="icon"> <i class="fa  fa-volume-control-phone ">
                <img class="what" src="https://static.cmereye.com/static/lkximg/image/footce/yuyue.png" alt="">
              </i></span>
            WhatsApp預約1
          </div>
        </a>
      </div> -->
      <div v-if="isShow">
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
      <!-- <div v-else>
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
      </el-drawer> -->
      <div v-if="!isShow" class="mb_height">
        <div class="mbNavigation">
          <a target="_blank" href="tel:85236202428">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                  d="M18.5599 21.2901C18.4685 21.2901 18.3746 21.2901 18.2819 21.2764C13.597 20.8051 9.21916 18.7288 5.88998 15.3992C2.5608 12.0697 0.48506 7.69157 0.0144543 3.00674C-0.0245647 2.63461 0.0156322 2.25844 0.132402 1.90296C0.249172 1.54747 0.439869 1.22073 0.691954 0.944224C0.962486 0.646592 1.29235 0.408918 1.66032 0.246508C2.02828 0.0840981 2.42618 0.000552684 2.8284 0.00125229H6.28602C6.89785 0.000561842 7.49434 0.192703 7.99072 0.550374C8.48711 0.908045 8.85815 1.41305 9.05113 1.99364L10.1782 5.35603C10.3502 5.86994 10.3749 6.42175 10.2494 6.94896C10.1239 7.47616 9.85326 7.95769 9.46814 8.33898L8.92715 8.87997C9.827 10.2772 11.019 11.4628 12.4211 12.3551L12.9521 11.8228C13.3351 11.4404 13.8169 11.172 14.3437 11.0478C14.8705 10.9235 15.4215 10.9482 15.9351 11.1191L19.2975 12.2461C19.8771 12.4387 20.3814 12.8088 20.739 13.304C21.0966 13.7991 21.2893 14.3942 21.29 15.0049V18.4625C21.3017 19.1991 21.0209 19.9104 20.5092 20.4404C19.9975 20.9704 19.2965 21.276 18.5599 21.2901ZM2.8284 1.9448C2.70092 1.94184 2.57427 1.96598 2.45683 2.01563C2.33938 2.06529 2.23382 2.13932 2.14714 2.23283C2.07499 2.31103 2.02 2.40345 1.98571 2.50417C1.95142 2.60489 1.93858 2.71167 1.94802 2.81765C2.37594 7.05602 4.25504 11.0164 7.26731 14.0286C10.2796 17.0409 14.2401 18.9199 18.4785 19.3478H18.5499C18.6534 19.3463 18.7556 19.3242 18.8504 19.2827C18.9452 19.2412 19.0308 19.1812 19.1022 19.1061C19.2663 18.9329 19.3562 18.7023 19.3526 18.4637V15.0049C19.3525 14.8009 19.2883 14.6021 19.1689 14.4367C19.0496 14.2713 18.8812 14.1476 18.6877 14.0832L15.3252 12.9624C15.1541 12.9053 14.9704 12.897 14.7948 12.9383C14.6192 12.9797 14.4585 13.0691 14.3309 13.1966L13.7936 13.7351C13.4296 14.0976 12.9373 14.3019 12.4236 14.3036C12.0396 14.3041 11.6644 14.1879 11.3479 13.9705C9.72152 12.9316 8.33806 11.5546 7.29163 9.93314C7.04935 9.56243 6.94223 9.11955 6.98831 8.6791C7.03438 8.23864 7.23084 7.82752 7.5446 7.51497L8.09436 6.96522C8.22251 6.83799 8.3123 6.6773 8.35348 6.50148C8.39467 6.32566 8.3856 6.14181 8.32729 5.9709L7.20772 2.60977C7.14389 2.41611 7.02053 2.24756 6.85524 2.12815C6.68996 2.00874 6.49118 1.94458 6.28728 1.9448H2.8284ZM20.3182 7.7742C20.0605 7.77387 19.8135 7.67138 19.6314 7.4892C19.4492 7.30703 19.3467 7.06005 19.3464 6.80242C19.345 5.51418 18.8327 4.27907 17.9217 3.36814C17.0108 2.45722 15.7757 1.94488 14.4874 1.94355C14.2297 1.94355 13.9825 1.84117 13.8002 1.65892C13.618 1.47668 13.5156 1.22951 13.5156 0.971775C13.5156 0.714044 13.618 0.466869 13.8002 0.284626C13.9825 0.102383 14.2297 3.84049e-09 14.4874 0C16.2909 0.0019888 18.02 0.719309 19.2953 1.99458C20.5706 3.26985 21.288 4.99892 21.29 6.80242C21.2896 7.06005 21.1871 7.30703 21.005 7.4892C20.8228 7.67138 20.5758 7.77387 20.3182 7.7742ZM16.436 7.7742C16.1784 7.77387 15.9314 7.67138 15.7492 7.4892C15.567 7.30703 15.4645 7.06005 15.4642 6.80242C15.4639 6.54479 15.3614 6.29781 15.1792 6.11564C14.997 5.93347 14.75 5.83098 14.4924 5.83065C14.2345 5.83065 13.9872 5.7282 13.8048 5.54584C13.6224 5.36348 13.52 5.11614 13.52 4.85825C13.52 4.60035 13.6224 4.35302 13.8048 4.17066C13.9872 3.98829 14.2345 3.88585 14.4924 3.88585C15.2656 3.88651 16.007 4.19404 16.5536 4.7409C17.1002 5.28776 17.4075 6.02922 17.4078 6.80242C17.4076 6.93041 17.3822 7.05711 17.333 7.17527C17.2838 7.29342 17.2118 7.40071 17.121 7.49098C17.0303 7.58125 16.9226 7.65273 16.8042 7.70133C16.6858 7.74993 16.559 7.77469 16.431 7.7742H16.436Z"
                  fill="#57B2F3" />
                <path
                  d="M4.5 1C3.66667 1.16667 1.9 1.6 1.5 2V6L5 13.5L16 20L19.5 20.5L20.5 18L20 14.5L18 13L15 12L12.5 13.5C11.5 12.6667 9.4 11 9 11C8.6 11 8.16667 9.33333 8 8.5L9 6.5L8 2C7.5 1.83333 6.4 1.5 6 1.5C5.6 1.5 4.83333 1.16667 4.5 1Z"
                  fill="#57B2F3" />
              </svg></div>
            <div>(852) 3620 2428</div>
          </a>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=85295128192">
            <div><img src="https://static.cmereye.com/imgs/2023/12/a23c2d545cd7e307.png" alt="WhatsApp"></div>
            <div>
              <div><img src="https://static.cmereye.com/imgs/2023/12/0649e51a337f3d8d.png" alt=""></div>
              <div><img src="https://static.cmereye.com/imgs/2023/12/6f3af11132d1e765.png" alt=""></div>
            </div>
          </a>
          <a @click="drawerBool = true">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M22.5587 18.2175C24.1576 17.0496 25.1791 15.3219 25.1791 13.4025C25.1791 9.88434 21.7837 7.03284 17.5949 7.03284C13.4065 7.03284 10.0107 9.88434 10.0107 13.4025C10.0107 16.9208 13.4065 19.7727 17.5949 19.7727C18.4602 19.7727 19.2959 19.648 20.0707 19.4236C20.1411 19.402 20.2159 19.3899 20.2937 19.3899C20.4391 19.3899 20.5714 19.4346 20.6963 19.5073L22.3563 20.4736C22.4028 20.5001 22.4477 20.521 22.5026 20.521C22.6424 20.521 22.7555 20.4068 22.7555 20.2664C22.7555 20.203 22.7304 20.1403 22.7147 20.0798C22.7051 20.0438 22.5008 19.275 22.3729 18.795C22.3583 18.741 22.3462 18.689 22.3462 18.6327C22.3462 18.4617 22.4301 18.3098 22.5587 18.2175ZM15.0671 12.3186C14.5443 12.3186 14.1202 11.8915 14.1202 11.3646C14.1202 10.8374 14.5443 10.4101 15.0671 10.4101C15.5902 10.4101 16.0141 10.8374 16.0141 11.3646C16.0141 11.8915 15.5902 12.3186 15.0671 12.3186ZM20.1231 12.3186C19.6 12.3186 19.1766 11.8915 19.1766 11.3646C19.1766 10.8374 19.6 10.4101 20.1231 10.4101C20.6461 10.4101 21.07 10.8374 21.07 11.3646C21.07 11.8915 20.6461 12.3186 20.1231 12.3186Z"
                  fill="#57B2F3" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.1009 0C4.07459 0 0 3.42244 0 7.64383C0 9.94743 1.22602 12.0207 3.14452 13.4219C3.29866 13.5327 3.39944 13.7144 3.39944 13.9203C3.39944 13.988 3.38508 14.0498 3.36729 14.115C3.21407 14.6912 2.96872 15.6137 2.95732 15.6568C2.93817 15.7293 2.90853 15.8046 2.90853 15.8803C2.90853 16.0492 3.0442 16.1858 3.21179 16.1858C3.27791 16.1858 3.33149 16.1614 3.3869 16.129L5.37973 14.9696C5.52931 14.8827 5.68778 14.8291 5.86266 14.8291C5.95592 14.8291 6.04553 14.843 6.13012 14.869C7.05973 15.1385 8.0623 15.2881 9.1009 15.2881C9.26871 15.2881 9.43516 15.2836 9.6007 15.2763C9.40279 14.6798 9.29516 14.0521 9.29516 13.4027C9.29516 9.55274 13.0111 6.43127 17.5953 6.43127C17.7613 6.43127 17.8037 6.43652 17.9672 6.4445C17.2818 2.79268 13.6413 0 9.1009 0ZM6.06732 6.28205C5.47266 6.28205 4.99087 5.79639 4.99087 5.19763C4.99087 4.59865 5.47266 4.11321 6.06732 4.11321C6.66107 4.11321 7.14286 4.59865 7.14286 5.19763C7.14286 5.79639 6.66107 6.28205 6.06732 6.28205ZM12.1336 6.28182C11.5394 6.28182 11.0576 5.79639 11.0576 5.19763C11.0576 4.59865 11.5394 4.11321 12.1336 4.11321C12.7278 4.11321 13.2096 4.59865 13.2096 5.19763C13.2096 5.79639 12.7278 6.28182 12.1336 6.28182Z"
                  fill="#57B2F3" />
              </svg></div>
            <div>WeChat</div>
          </a>
          <div class="drawerImg" v-if="drawerBool" @click="drawerBool = false">
            <div :class="[drawerBool ? 'drawerImgHeight' : '']">
              <div @click="drawerBool = false"><span></span><span></span></div>
              <div><img src="https://static.cmereye.com/imgs/2023/10/a7833e634c739f73.png" alt=""></div>
            </div>
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
      isShow: true,
      screenWidth: '',
      drawerBool: false,
      // documentIsShow: false
    }

  },
  mounted() {
    this.dynamicLoadCss(`https://www.cmerdental.com/css/vikim.css?parms=${new Date()}`)
  },
  created() {

    // var interval = setInterval(function () {
    //   console.log(0, document.readyState);
    // if (document.readyState === 'complete') {
    // console.log(1, document.readyState);
    // this.documentIsShow = true
    // clearInterval(interval);
    // }
    // }, 100);
    if (process.client) {
      console.log(process, 'process.client');
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
    position: relative;

    &>div:nth-child(1) {
      position: relative;
      bottom: -30px;
      right: 10px;
    }

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
        justify-content: space-between;
        color: #FFF;
        text-align: center;
        font-family: Noto Sans TC;
        font-size: 26px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 2.6px;
        padding: 6.5px 22px;
      }

      &>div:nth-child(2) {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-55%);
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
        display: block;
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
      width: 230px;
      padding: 22px 10px 14px;
      transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);

      &>div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 16px;
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
  .mb_height {}

  .mbNavigation {
    background: url(https://static.cmereye.com/imgs/2023/12/4cd06b2fb6ea5baa.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 80px;
    display: flex;
    margin: 110px 0 0 0;
    padding: 0 20px;

    &>a {
      flex: 1;
    }

    &>a:first-child,
    &>a:last-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &>div:nth-child(2) {
        color: #57B2F3;
        text-align: right;
        font-family: Noto Sans TC;
        font-size: 9.9px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.297px;
      }
    }

    &>a:nth-child(2) {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      top: -45%;
      transform: translate(-1%, 0);


      &>div:nth-child(1) {
        position: relative;
        z-index: 10;
        left: 1%;
      }

      &>div:nth-child(1)::before {
        content: '';
        width: 15px;
        height: 15px;
        background: #fff;
        box-shadow: 0px 0px 2px #57B2F3;
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        top: 22%;
        left: 6%;
        // animation: roundW 10s linear infinite;
      }

      &>div:nth-child(2) {
        display: flex;
        position: absolute;
        top: -55%;
        animation: breathe 5s linear infinite;

        &>div:nth-child(1) {
          position: relative;
          z-index: 10;
          left: 12%;
          z-index: 7;

          img {
            width: 100%;
          }
        }

        &>div:nth-child(2) {
          position: relative;
          left: -3%;
          z-index: 5;
          animation: widthW 5s linear infinite;

          img {
            width: 100%;
          }
        }
      }
    }

    @keyframes breathe {
      0% {
        width: 0;
        top: 0%;
      }

      30% {
        top: -55%;
        width: 144px;
      }

      100% {
        top: -55%;
        width: 144px;
      }
    }

    // @keyframes roundW {
    //   0% {
    //     opacity: 0;
    //     width: 0;
    //   }

    //   30% {
    //     width: 15px;
    //     opacity: 1;
    //   }

    //   100% {
    //     width: 15px;
    //     opacity: 1;
    //   }
    // }

    @keyframes widthW {
      0% {
        width: 0;
        opacity: 0;
      }

      30% {
        width: 82px;
        opacity: 1;
      }

      100% {
        width: 82px;
        opacity: 1;
      }
    }
  }

  .face-primary {
    .what {
      width: 6vw
    }
  }

  .container {
    position: fixed;
    bottom: 0;
    z-index: 50;
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
    position: fixed;
    background: #000000bf;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    &>div {
      width: 100%;
      background: #fff;
      padding: 80px 0;
      position: relative;
      height: 453px;

      &>div:nth-child(1) {
        position: absolute;
        right: 13%;
        top: 9%;

        &>span:nth-child(1) {
          transform: rotate(45deg);
        }

        &>span:nth-child(2) {
          transform: rotate(-45deg);
        }

        &>span {
          position: absolute;
          display: inline-block;
          width: 30px;
          height: 2px;
          background: #57B2F3;
        }
      }

      &>div:nth-child(2) {
        display: flex;
        justify-content: center;
      }
    }
  }

  .drawerImgHeight {
    animation: heightH .2s linear;
  }

  @keyframes heightH {
    0% {
      height: 0;
      padding: 0;
    }

    100% {
      padding: 80px 0;
      height: 453px;
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
