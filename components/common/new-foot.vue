<template>
  <div>
    <div class="main_footer pcShow">
      <div class="section">
        <div>
          <img src="https://static.cmereye.com/imgs/2023/12/13a36beccc3107ed.png" alt="logo">
        </div>
        <div>
          <div class="icon_text">
            <div>立即追蹤我哋獲取更多牙科資訊</div>
          </div>
          <div class="media_icon">
            <a href="https://www.facebook.com/dental.cmer/" class="Facebook">
              <img src="https://static.cmereye.com/imgs/2023/12/18730f4dbc34b795.png" alt="" />
            </a>
            <a href="https://www.instagram.com/cmerdental/" class="IG">
              <img src="https://static.cmereye.com/imgs/2023/12/d668802f40b1ebae.png" alt="" />
            </a>
            <a href="https://www.youtube.com/channel/UChTznjEW5KXzeubsUeW91tQ/videos" class="Youtube">
              <img src="https://static.cmereye.com/imgs/2023/12/b7b177dc7458c379.png" alt="" />
            </a>
          </div>
          <div class="copyright">
            <span>
              <nuxt-link to="/policy#A1">隱私政策</nuxt-link>
            </span>
            &nbsp; &nbsp; &nbsp;
            <span>
              <!-- <nuxt-link to="/policy#A2">免責條款</nuxt-link> -->
              <a href="/policy#A2">免責條款</a>
            </span>
          </div>
          <div class="copyright long">
            ©2023 希瑪牙科（希瑪醫療集團旗下牙科中心）
          </div>
        </div>
      </div>
      <div class="mascot" :class="[isCouldAnimate == true ? 'couldAnimate afterMain' : 'couldVanish afterVanish']">
        <img src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/new-hkcmereye/小牙向左指.1h5gu7c9wstc.gif"
          alt="希小牙">
      </div>
    </div>
    <div class="main_footer mbShow">
      <div>
        <img src="https://static.cmereye.com/imgs/2023/12/13a36beccc3107ed.png" alt="logo">
      </div>
      <div>
        立即追蹤我哋獲取更多牙科資訊
      </div>
      <div>
        <div>
          <a target="_blank" href="https://www.facebook.com/dental.cmer/"><img
              src="https://static.cmereye.com/imgs/2023/12/18730f4dbc34b795.png" alt="" /></a>
          <a target="_blank" href="https://www.instagram.com/cmerdental/"><img
              src="https://static.cmereye.com/imgs/2023/12/d668802f40b1ebae.png" alt="" /></a>
          <a target="_blank" href="https://www.youtube.com/channel/UChTznjEW5KXzeubsUeW91tQ/videos"><img
              src="https://static.cmereye.com/imgs/2023/12/b7b177dc7458c379.png" alt="" /></a>
        </div>
        <div>
          <nuxt-link to="/policy#A1">隱私政策</nuxt-link>
          <nuxt-link to="/policy#A2">免責條款</nuxt-link>
        </div>
        <div>©2022 希瑪牙科（希瑪醫療集團旗下牙科中心）</div>
      </div>
      <div class="mascot" :class="[isCouldAnimate == true ? 'couldAnimate afterMain' : 'couldVanish afterVanish']">
        <img src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/new-hkcmereye/小牙向左指.1h5gu7c9wstc.gif"
          alt="希小牙">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCouldAnimate: false,
    };
  },
  created() { },
  mounted() {
    // 获取文档宽度
    window.addEventListener('scroll', this.checkScroll);
  },
  methods: {
    // 检测滚动条到底部
    checkScroll() {
      const condition = document.documentElement.clientWidth > 767;
      let heightNum = 0
      if (condition) {
        heightNum = 100;
      } else {
        heightNum = 300
      }
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      if (scrollTop + windowHeight >= scrollHeight - heightNum) {
        this.isCouldAnimate = true;
      } else {
        this.isCouldAnimate = false;
      }
    }
  },
};
</script>
<style lang="scss" scoped>
a {
  color: #57b2f3;
  text-decoration: none;
}

@media only screen and (min-width: 768px) {
  .couldVanish {
    height: 320px;

    img {
      animation: .5s vanish linear;
      animation-fill-mode: forwards;
    }
  }

  .couldAnimate {
    height: 320px;

    img {
      animation: .7s identifier cubic-bezier(0, 0.29, 0.48, 1.28);
      animation-fill-mode: forwards;
    }
  }

  @keyframes identifier {
    0% {
      height: 320px;
      z-index: -1;
      opacity: 0;
      top: -20px !important;
      transform: translate(-20px, -150px) rotate(-5deg);
    }

    50% {
      height: 320px;
      z-index: 5;
      opacity: 0.7;
      top: -20px !important;
      transform: translateX(0, -20px) rotate(-5deg);
    }

    100% {
      height: 320px;
      z-index: 5;
      opacity: 1;
      top: -20px !important;
      transform: translateX(20px, 0) rotate(-5deg);
    }
  }

  @keyframes vanish {
    0% {
      height: 320px;
      z-index: 5;
      opacity: 1;
      top: -20px !important;
      transform: translateX(20px, 0) rotate(-5deg);
    }

    50% {
      height: 320px;
      z-index: 5;
      opacity: 0.5;
      top: -20px !important;
      transform: translateX(0, -20px) rotate(-5deg);
    }

    100% {
      height: 320px;
      z-index: -1;
      opacity: 0;
      top: -20px !important;
      transform: translate(-20px, -150px) rotate(-5deg);
    }
  }

  .afterMain::after {
    height: 292px;
    animation: .9s afterImg linear;
    animation-fill-mode: forwards;
  }


  @keyframes afterImg {
    0% {
      opacity: 0;
      height: 1px;
    }

    70% {
      height: 146;
      opacity: 0.3;
    }

    100% {
      height: 292px;
      opacity: 1;
    }
  }

  .afterVanish::after {
    height: 292px;
    animation: .9s afterImgVanish linear;
    animation-fill-mode: forwards;
  }

  @keyframes afterImgVanish {
    0% {
      height: 292px;
      opacity: 1;
    }

    70% {
      height: 146;
      opacity: 0.7;
    }

    100% {
      opacity: 0;
      height: 1px;
    }
  }

  .mbShow {
    display: none !important;
  }

  .main_footer {
    display: flex;
  }

  .section {
    flex: 6;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .icon_text {
      background: #fff;
      color: #57B2F3;

      text-align: justify;
      font-family: Noto Sans TC;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.8px;
      padding: 6px 8px;
      width: fit-content;
      margin-bottom: 17px;
    }

    .media_icon {
      display: flex;
      align-items: center;
      justify-content: center;

      &>a:nth-child(2) {
        margin: 0 42px;
      }
    }

    &>div:nth-child(2) {
      margin-left: 68px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .mascot {
    flex: 4;
    display: flex;
    justify-content: center;
    position: relative;
    height: 320px;

    img {
      width: 312px;
      height: 0;
      transform: rotate(-5deg);
      position: relative;
      z-index: 10;
      top: -20px;
    }
  }



  .mascot::after {
    content: "";
    background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/new-hkcmereye/Group-1070.4wsfn8i2qv80.png');
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 685px;
    display: inline-block;
    // height: 292px;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .main_footer {
    background: #ecf7fc;
    position: relative;
    // padding: 5.5vw 0 2vw;

    .section {
      margin: 0 auto;

      &>div:nth-child(2) {
        img {
          width: 32px;
        }

      }

      .main_menu {
        letter-spacing: 0.2vw;

        .child_menu {
          li {
            margin: 1vw 0;

            &:hover {
              color: #4570b6;
            }
          }
        }
      }

      .copyright {
        cursor: pointer;
        display: flex;
        justify-content: center;
        margin-top: 1vw;
        color: #57B2F3;
        text-align: justify;
        font-family: Noto Sans;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.3px;

        span {
          border-bottom: 1px solid;
        }
      }

      .long {
        color: #57B2F3;
        text-align: center;
        font-family: Noto Sans;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1px;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .couldVanish {
    height: 154px;

    img {
      animation: .5s vanish linear;
      animation-fill-mode: forwards;
    }
  }

  .couldAnimate {
    height: 154px;

    img {
      animation: .7s identifier cubic-bezier(0, 0.29, 0.48, 1.28);
      animation-fill-mode: forwards;
    }
  }

  @keyframes identifier {
    0% {
      height: 154px;
      z-index: -1;
      opacity: 0;
      top: -20px !important;
      transform: translate(-20px, -250px) rotate(-5deg);
    }

    50% {
      height: 154px;
      z-index: 5;
      opacity: 0.7;
      top: -20px !important;
      transform: translateX(0, -20px) rotate(-5deg);
    }

    100% {
      height: 154px;
      z-index: 5;
      opacity: 1;
      top: -20px !important;
      transform: translateX(20px, 0) rotate(-5deg);
    }
  }

  @keyframes vanish {
    0% {
      height: 154px;
      z-index: 5;
      opacity: 1;
      top: -20px !important;
      transform: translateX(20px, 0) rotate(-5deg);
    }

    50% {
      height: 154px;
      z-index: 5;
      opacity: 0.5;
      top: -20px !important;
      transform: translateX(0, -20px) rotate(-5deg);
    }

    100% {
      height: 154px;
      z-index: -1;
      opacity: 0;
      top: -20px !important;
      transform: translate(-20px, -250px) rotate(-5deg);
    }
  }

  .afterMain::after {
    height: 264px;
    animation: .9s afterImg linear;
    animation-fill-mode: forwards;
  }


  @keyframes afterImg {
    0% {
      opacity: 0;
      height: 1px;
    }

    70% {
      height: 132px;
      opacity: 0.3;
    }

    100% {
      height: 264px;
      opacity: 1;
    }
  }

  .afterVanish::after {
    height: 264px;
    animation: .9s afterImgVanish linear;
    animation-fill-mode: forwards;
  }

  @keyframes afterImgVanish {
    0% {
      height: 264px;
      opacity: 1;
    }

    70% {
      height: 146;
      opacity: 0.7;
    }

    100% {
      opacity: 0;
      height: 1px;
    }
  }
  .pcShow {
    display: none !important;
  }

  .main_footer {
    overflow: hidden;
    padding: 3.75rem 2.375rem 13.5rem;
    background: #e8f6fb;
    position: relative;

    &>div:nth-child(1) {
      width: 11.0625rem;
      margin: auto;

      &>img {
        width: 100%;
      }
    }

    &>div:nth-child(2) {
      margin-top: 1.875rem;
      color: #57B2F3;
      text-align: justify;
      font-family: Noto Sans TC;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.6px;
      background: #fff;
      text-align: center;
      padding: 6px 18px;
    }

    &>div:nth-child(3) {
      &>div:nth-child(1) {
        margin: 30px 0;
        display: flex;

        a {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 100%;
          }
        }

        a:nth-child(2) {
          margin: 0 2.625rem;
        }
      }

      &>div:nth-child(2) {
        display: flex;
        margin-bottom: .4375rem;
        color: #57B2F3;

        text-align: justify;
        font-family: Noto Sans;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.3px;

        &>a {
          width: fit-content;
          display: inline-block;
          text-decoration: underline;
        }

        &>a:nth-child(1) {
          margin-right: 20px;
        }
      }

      &>div:nth-child(3) {
        color: #57B2F3;
        font-family: Noto Sans;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1px;
      }
    }
  }

  .mascot {
    width: 154px;
    position: absolute;
    top: 47%;
    right: 0%;

    &>img {
      width: 100%;
      transform: rotate(-5deg);
      position: relative;
      z-index: 10;
      top: -50px;
      right: -10px;
    }
  }

  .mascot::after {
    content: "";
    background: url('https://static.cmereye.com/imgs/2023/12/eac68ef91ffba77f.png');
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100vw;
    display: inline-block;
    height: 16.5rem;
    position: absolute;
    bottom: -100%;
    right: 0;
  }
}
</style>
