<template>
  <div class="Regular_dental_cleaning">
    <div class="main-container why_wash">
      <div class="why_significance isArrowQuestion">定期洗牙為何重要？</div>
      <div class="benefit">
        <div>
          <div>
            <img src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Group-1131.ox7y3z0mpdc.png"
              alt="預防牙周疾病">
          </div>
          <div>預防牙周疾病</div>
          <div>定期洗牙有效預防牙齦炎和牙<br class="pcShow" />周炎。這些疾病常由牙菌膜長<br class="pcShow" />期積聚而引起，如不及時清<br
              class="pcShow" />除，會導致牙齦紅腫流血、牙<br class="pcShow" />齒鬆脫等問題。</div>
        </div>
        <div>
          <div>
            <img src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Group-1130.26gcwaprzbvk.png"
              alt="防止蛀牙">
          </div>
          <div>防止蛀牙</div>
          <div>口腔中的細菌和食物殘渣是引<br class="pcShow" />起蛀牙的主要原因。定期洗牙<br class="pcShow" />可清除牙齒表面的牙菌膜和牙<br
              class="pcShow" />結石，減少蛀牙的風險。</div>
        </div>
        <div>
          <div>
            <img src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Group-1129.57kds2p8m380.png"
              alt="改善口氣及牙色">
          </div>
          <div>改善口氣及牙色</div>
          <div>牙菌膜的積聚為口臭的罪魁<br class="pcShow" />禍首。定期洗牙可清除口腔<br class="pcShow" />中的細菌，以保持口氣清新。</div>
        </div>
      </div>
    </div>
    <div class="procedure">
      <div class="main-container">
        <div class="why_significance">洗牙四步曲</div>
        <div class="step_four pcShow">
          <div class="hidden" :class="[flag == true ? 'show_box' : '']">
            <div><span>1</span></div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/12/6769c2cd162a065e.png" alt="清除牙結石及牙菌膜">
            </div>
            <div>利用超聲波震動儀器，清除牙結石及牙菌膜。</div>
          </div>
          <div class="hidden" :class="[flag == true ? 'show_box' : '']">
            <div><span>2</span></div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/12/152aee531c736d95.png" alt="利用刮牙石器去除牙結石">
            </div>
            <div>利用刮牙石器去除牙結石。</div>
          </div>
          <div class="hidden" :class="[flag == true ? 'show_box' : '']">
            <div><span>3</span></div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/12/5b7618e6a93618fd.png" alt="拋光打磨牙齒表面">
            </div>
            <div>拋光打磨牙齒表面，去除牙漬及強化牙齒外層，避免藏污納垢，減低患上牙周病的風險。</div>
          </div>
          <div class="hidden" :class="[flag == true ? 'show_box' : '']">
            <div><span>4</span></div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/12/d9e8d5230cea810c.png" alt="塗上牙面氟化物助鞏固琺瑯質">
            </div>
            <div>塗上牙面氟化物助鞏固琺瑯質。</div>
          </div>
        </div>
        <div class="mb_step_four mbShow">
          <div class="hidden" :class="[flagMb == true ? 'show_box' : '']">
            <div>
              <div>
                <img src="https://static.cmereye.com/imgs/2023/12/d52e23aad557311a.png" alt="清除牙結石及牙菌膜">
              </div>
              <div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/12/779289004a2dc385.png" alt="1">
                </div>
                <div>利用超聲波震動儀器，清除牙結石及牙菌膜。</div>
              </div>
            </div>
          </div>
          <div class="hidden" :class="[flagMb == true ? 'show_box' : '']">
            <div>
              <div>
                <img src="https://static.cmereye.com/imgs/2023/12/65e2d3775437a3f1.png" alt="利用刮牙石器去除牙結石">
              </div>
              <div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/12/cc37d29b318c00b6.png" alt="2">
                </div>
                <div>利用刮牙石器去除牙結石。</div>
              </div>
            </div>
          </div>
          <div class="hidden" :class="[flagMb == true ? 'show_box' : '']">
            <div>
              <div>
                <img src="https://static.cmereye.com/imgs/2024/01/9ff8dbf932e72958.png" alt="拋光打磨牙齒表面">
              </div>
              <div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/12/7fcf92c3e62095c0.png" alt="3">
                </div>
                <div>拋光打磨牙齒表面，去除牙漬及強化牙齒外層，避免藏污納垢，減低患上牙周病的風險。</div>
              </div>
            </div>
          </div>
          <div class="hidden" :class="[flagMb == true ? 'show_box' : '']">
            <div>
              <div>
                <img src="https://static.cmereye.com/imgs/2023/12/c5ea9b912f7946e9.png" alt="塗上牙面氟化物助鞏固琺瑯質">
              </div>
              <div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/12/83564b132e80b07f.png" alt="4">
                </div>
                <div>塗上牙面氟化物助鞏固琺瑯質。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <a href="https://api.whatsapp.com/send?phone=85295128192" target="_blank" class="toothWash">
      <div>
        立即預約洗牙
      </div>
    </a> -->
    <!-- <div style="margin: 90px 0" class="new-btn">
      <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize" :mb="mb"
        :paddingSizeMb="paddingSizeMb" :maxNum="3420" :minNum="2247"  :maxNumMb="5250" :minNumMb="4875"  :newSvg="newSvg" />
    </div> -->
  </div>
</template>

<script>
import newBtn from '@/components/common/new-btn.vue';
export default {
  components: {
    newBtn
  },
  name: 'Regular-Dental-Cleaning',
  data() {
    return {
      linkHref: 'https://api.whatsapp.com/send?phone=85295128192',
      linkText: '立即預約洗牙',
      isShowSvg: false,
      mb: '',
      paddingSize: '10px 100px',
      paddingSizeMb: '6px 74px',
      newSvg: 'https://static.cmereye.com/imgs/2023/12/ff870ed05ae5440d.png',
      scrollY: 0,
      flagMb: false,
      flag: false,
    };
  },
  methods: {
    getScrollY() {
      this.scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      if (this.scrollY > 1800) {
        this.flag = true
      }
      if (this.scrollY > 2800) {
        this.flagMb = true
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.getScrollY);
    this.mb = window.innerWidth < 768 ? 'mb' : 'pc';
  }
}
</script>

<style   lang='scss' scoped>
@import url('https://static.cmereye.com/static/font/Yuanti.woff2');
@media screen and (min-width: 768px) {
  .hidden {
    opacity: 0;
    transition: opacity 1s;
  }

  .show_box:nth-child(1) {
    animation: fadeIn 1s 0s forwards;
  }

  .show_box:nth-child(2) {
    animation: fadeIn 1s .5s forwards;
  }

  .show_box:nth-child(3) {
    animation: fadeIn 1s 1s forwards;
  }

  .show_box:nth-child(4) {
    animation: fadeIn 1s 1.5s forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  .Regular_dental_cleaning {
    z-index: 99;
    position: relative;
  }

  .mbShow {
    display: none;
  }

  .why_wash {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .why_significance {
    color: #79828D;
    text-align: center;
    font-family: Noto Sans;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 2.5px;
    position: relative;
    padding-bottom: 15px;
  }

  .isArrowQuestion {
    padding-left: 20px;
  }

  .why_significance::after {
    content: '';
    background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Vector.5u4eydocd6c0.png');
    display: inline-block;
    width: 52px;
    height: 10px;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
  }

  .benefit {
    margin: 90px auto;
    display: flex;
    width: 100%;
    padding: 0 70px;

    &>div {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      &>div:nth-child(2) {
        margin: 5px 0;
        color: #57B2F3;
        font-family: Noto Sans TC;
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        /* 40px */
      }

      &>div:nth-child(3) {
        color: #79828D;
        font-family: Noto Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        max-width: 290px;
        text-wrap: nowrap;
        /* 28.8px */
      }
    }
  }

  .procedure {
    background: #ECF7FC;
    margin-top: 54px;
    padding: 90px 0;
  }

  .step_four {
    display: flex;
    padding: 70px 150px 0;

    &>div {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      &>div:nth-child(1) {
        span {
          width: 31.021px;
          height: 31.021px;
          border-radius: 50%;
          background: #57B2F3;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFF;
          font-family: Yuanti TC;
          font-size: 19.709px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%;
          letter-spacing: 0;
        }
      }

      &>div:nth-child(2) {
        margin: 40px 0 20px;
      }

      &>div:nth-child(3) {
        color: #79828D;
        font-family: Noto Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        width: 156px;
        /* 28.8px */
      }
    }

    &>div::after {
      content: '';
      background: url(https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Vector-166.6khetafnvb40.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: inline-block;
      width: 11px;
      height: 18px;
      position: absolute;
      right: 0;
      top: 7px;
    }

    &>div:last-child:after {
      content: none;
    }
  }

  .toothWash {
    max-width: 1440px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 140px auto 90px;
    width: fit-content;
    text-decoration: none;

    &>div {
      width: fit-content;
      background: #FFD333;
      color: #FFF;
      font-family: Noto Sans;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.92px;
      padding: 10px 101px;
      border-radius: 100px;
      position: relative;
    }
  }

  .toothWash {
    &>div::before {
      content: '';
      background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Layer_11.67atc8403ts0.png');
      background-repeat: no-repeat;
      width: 80px;
      height: 70px;
      display: inline-block;
      position: absolute;
      top: -100%;
      right: 13%;
    }
  }
}

@media screen and (max-width: 767px) {
  .hidden {
    opacity: 0;
    transition: opacity 1s;
  }

  .show_box:nth-child(1) {
    animation: fadeIn 1s 0s forwards;
  }

  .show_box:nth-child(2) {
    animation: fadeIn 1s .5s forwards;
  }

  .show_box:nth-child(3) {
    animation: fadeIn 1s 1s forwards;
  }

  .show_box:nth-child(4) {
    animation: fadeIn 1s 1.5s forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  ::v-deep .new-btn {
    .img_absolute {
      right: 13% !important;
      top: -140% !important;
      z-index: 11 !important;
    }
  }

  .procedure {
    margin-top: 54px;
  }

  .pcShow {
    display: none;
  }

  .why_significance {
    color: #79828D;
    text-align: center;
    font-family: Noto Sans;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 2.5px;
    padding-bottom: 15px;
    position: relative;
  }

  .why_significance::after {
    content: '';
    background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Vector.5u4eydocd6c0.png');
    display: inline-block;
    width: 52px;
    height: 10px;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);

  }

  .benefit {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .3125rem 1.25rem;

    &>div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 55px 0 0 0;

      &>div:nth-child(1) {
        width: 335px;

        &>img {
          width: 100%;
        }
      }

      &>div:nth-child(2) {
        margin: 20px auto;
        color: #57B2F3;
        font-family: Noto Sans TC;
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        /* 40px */
      }

      &>div:nth-child(3) {
        color: #79828D;
        font-family: Noto Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        max-width: 100%;
        width: 75%;
        /* 25.6px */
      }
    }
  }

  .mb_step_four {
    display: flex;
    flex-direction: column;
    margin: 2.1875rem 1.25rem 0;

    &>div {
      margin-top: 1.5625rem;

      &>div {
        width: 14rem;
        background: #ECF7FC;
        border-radius: 2.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 17rem;
        padding-bottom: 1.125rem;

        &>div:nth-child(1) {
          margin-top: 0.6875rem;
          margin-bottom: 0.9375rem;
        }

        &>div:nth-child(2) {
          display: flex;
          padding: 0 1.25rem;

          &>div:nth-child(1) {
            flex: 3;
            position: relative;

            &>img {
              position: absolute;
              left: -20%;
            }
          }

          &>div:nth-child(2) {
            flex: 7;
            color: #79828D;
            font-family: Noto Sans TC;
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 0.1rem;
          }
        }
      }
    }

    &>div:nth-child(1) {
      &>div {
        position: relative;

        &>div:nth-child(2) {
          &>div:nth-child(1) {
            &>img {
              top: -100%;
            }
          }
        }
      }

      &>div::after {
        content: '';
        background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/33Layer_1.xhbbrk9b6g0.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 88px;
        height: 88px;
        position: absolute;
        bottom: -10%;
        right: -40%;
      }
    }

    &>div:nth-child(2) {
      &>div {
        position: relative;

        &>div:nth-child(2) {
          &>div:nth-child(1) {
            &>img {
              top: -110%;
            }
          }
        }
      }

      &>div::after {
        content: '';
        background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/33Layer_1.xhbbrk9b6g0.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 88px;
        height: 88px;
        position: absolute;
        bottom: -10%;
        right: auto;
        left: -40%;
        transform: rotate(270deg);
      }
    }

    &>div:nth-child(3) {
      &>div {
        position: relative;

        &>div:nth-child(2) {
          &>div:nth-child(1) {
            &>img {
              top: -40%;
            }
          }
        }
      }

      &>div::after {
        content: '';
        background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/33Layer_1.xhbbrk9b6g0.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 88px;
        height: 88px;
        position: absolute;
        bottom: -10%;
        right: -40%;
      }
    }

    &>div:nth-child(4) {
      &>div {
        &>div:nth-child(2) {
          &>div:nth-child(1) {
            &>img {
              top: -130%;
            }
          }
        }
      }
    }

    &>div:nth-child(even) {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }


  .toothWash {
    max-width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 60px auto;
    width: fit-content;
    text-decoration: none;
    position: relative;

    &>div {
      color: #FFF;
      font-family: Noto Sans;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.44px;
      background: #FFD333;
      padding: 8px 76px;
      width: fit-content;
      border-radius: 100px;
      margin: auto;
    }
  }

  .toothWash {
    &>div::before {
      content: '';
      background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Layer_11.67atc8403ts0.png');
      background-repeat: no-repeat;
      width: 70px;
      height: 60px;
      display: inline-block;
      position: absolute;
      top: -120%;
      right: 12%;
    }
  }
}
</style>