<template>
  <div class="video-brand-attention">
    <!-- <div class="video">
      <div class="why_significance">植牙技術動畫</div>
      <div class="pcShow video-img main-container">
        <iframe width="744" height="418" src="https://www.youtube.com/embed/xX_R8poOb9w?si=I8D__j3RTjfOv7Kt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="mbShow video-img main-container">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xX_R8poOb9w?si=I8D__j3RTjfOv7Kt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div> -->
    <!-- <div class="advantage-bg main-container">
      <div class="why_significance">我們的優勢</div>
      <div class="advantage">
        <div>
          <div><img src="https://static.cmereye.com/imgs/2023/12/01c7952f1fcc0a0a.png" alt=""></div>
          <div>選材講究</div>
        </div>
        <div>
          <div><img src="https://static.cmereye.com/imgs/2023/12/30ce2b31529c4fa8.png" alt=""></div>
          <div>自選牙冠</div>
        </div>
        <div>
          <div><img src="https://static.cmereye.com/imgs/2023/12/1be8a668d20be89b.png" alt=""></div>
          <div>客製化設計</div>
        </div>
        <div>
          <div><img src="https://static.cmereye.com/imgs/2023/12/efbcad69a74d20c4.png" alt=""></div>
          <div>全程跟進</div>
        </div>
        <div>
          <div><img src="https://static.cmereye.com/imgs/2023/12/c5166f957109852b.png" alt=""></div>
          <div>先進技術</div>
        </div>
        <div class="mbShow"></div>
      </div>
    </div> -->
    <!-- <div class="brand">
      <div class="why_significance">合作品牌</div>
      <div class="main-container">
        <div><img src="https://static.cmereye.com/imgs/2023/12/5570126989dfe532.png" alt=""></div>
        <div><img src="https://static.cmereye.com/imgs/2023/12/4d2a7a5362539dbc.png" alt=""></div>
        <div><img src="https://static.cmereye.com/imgs/2023/12/7ab1c1384547d1cd.png" alt=""></div>
        <div><img src="https://static.cmereye.com/imgs/2023/12/9c0bb60a3bddbc91.png" alt=""></div>
        <div><img src="https://static.cmereye.com/imgs/2023/12/d462a2ef6d03353c.png" alt=""></div>
      </div>
    </div> -->
    <div class="attention-bg main-container">
      <div class="why_significance">植牙後注意事項</div>
      <div class="attention">
        <div v-for="(item, index) in attentionList" :key="index">
          <div><img :src="item.imgSrc" alt=""></div>
          <div>{{ item.text }}</div>
        </div>
      </div>
    </div>
    <!-- <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize" :mb="mb"
        :paddingSizeMb="paddingSizeMb"  :maxNum="8246" :minNum="7080"  :maxNumMb="8250" :minNumMb="7910"  /> -->
  </div>
</template>

<script>
import newBtn from '@/components/common/new-btn.vue';
export default {
  name: 'new-video-brand-attention',
  components: {
    newBtn
  },
  data() {
    return {
      linkHref: 'https://api.whatsapp.com/send?phone=85295128192',
      linkText: '立即預約植牙',
      isShowSvg: false,
      mb:'',
      paddingSize: '10px 100px',
      paddingSizeMb: '6px 74px',
      newSvg:'https://static.cmereye.com/imgs/2023/12/ff870ed05ae5440d.png',
      attentionList: [
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/d7eccec962e22b96.png',
          text: '注意口腔清潔'
        },
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/3f5becf27a40c2b8.png',
          text: '按時服用藥物'
        },
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/d27481b6ddba0ab1.png',
          text: '避免劇烈運動'
        },
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/306fb1c32c27a3f0.png',
          text: '避免吸煙和飲酒'
        },
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/2d5283c8b60c8ea7.png',
          text: '定期覆診檢查'
        },
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/196b133ae3e46f37.png',
          text: '充足睡眠與休息'
        },
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/d819fb511aaa30c8.png',
          text: '進食流質食物'
        },
        {
          imgSrc: 'https://static.cmereye.com/imgs/2023/12/281de148c2badc67.png',
          text: '忌吃堅硬食物'
        },
      ]
    };
  },
  methods: {},
  mounted() {
    // 获取屏幕宽度
    this.mb = window.innerWidth < 768 ? 'mb' : 'pc';
  },
}
</script>

<style  scoped lang='scss'>
@media screen and (min-width: 768px) {
  .mbShow {
    display: none !important;
  }
  .video-brand-attention {
    margin: 90px auto;
  }

  .video {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ECF7FC;
    padding: 60px 0 87px;
  }

  .video-img {
    margin-top: 50px;
    position: relative;
    cursor: pointer;
  }

  .video-img::after {
    content: '';
    background: url(https://static.cmereye.com/imgs/2023/12/f6bb149bc136a178.gif);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 256px;
    height: 256px;
    position: absolute;
    bottom: -15%;
    right: -23%;
  }

  .advantage-bg {
    margin-top: 90px;
  }

  .advantage {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px 235px 80px;

    &>div {
      width: 33.33333%;
      display: flex;
      flex-direction: column;
      align-items: center;

      &>div:nth-child(2) {
        color: #57B2F3;
        font-family: Noto Sans TC;
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        margin-top: 5px;
      }
    }

    &>div:nth-child(n+4) {
      margin-top: 60px;
    }
  }

  .brand {
    background: #ECF7FC;
    padding: 48px 0 60px;

    &>div:nth-child(2) {
      display: flex;
      align-items: flex-end;
      justify-content: space-evenly;
      margin-top: 42px;
    }
  }

  .attention-bg {
    padding-top: 90px;
  }

  .attention {
    padding: 50px 200px 0;
    display: flex;
    flex-wrap: wrap;

    &>div {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;

      &>div:nth-child(1) {}

      &>div:nth-child(2) {
        padding-top: 5px;
        color: #79828D;
        text-align: center;
        font-family: Noto Sans TC;
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        /* 40px */
      }
    }

    &>div:nth-child(n+5) {
      margin-top: 60px;
    }
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
    padding-bottom: 20px;
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
}

@media screen and (max-width: 767px) {
  .pcShow {
    display: none;
  }
  .video {
    background: #ECF7FC;
    padding: 60px 0;

    &>div:nth-child(2) {
      width: 300px;
      margin: 30px auto 0;

      &>img {
        width: 100%;
      }
    }
  }
  .video-img {
    margin: 50px auto 0;
    position: relative;
    cursor: pointer;
    width: 299px;
    height: 168px;
    iframe {
      width: 100%;
      height: 100%;
    }
  }

  .video-img::after {
    content: '';
    background: url(https://static.cmereye.com/imgs/2023/12/f6bb149bc136a178.gif);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 88px;
    height: 88px;
    position: absolute;
    bottom: -22%;
    right: -15%;
  }
  .advantage-bg {
    margin: 61px auto;
  }

  .advantage {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    &>div {
      flex: 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 35px;

      &>div:nth-child(1) {
        width: 42.133vw;

        &>img {
          width: 100%;
        }
      }

      &>div:nth-child(2) {
        color: #57B2F3;
        font-family: Noto Sans TC;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        margin-top: 10px;
      }
    }
  }

  .brand {
    margin: 60px auto;
    background: #ECF7FC;
    padding: 60px 0;

    &>div:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 20px;

      &>div {
        width: 33.3333%;
        display: flex;
        justify-content: center;

        &>img {
          margin-top: 26px;
          width: 94px;
        }
      }

      &>div:nth-child(1),
      &>div:nth-child(2) {
        width: 50%;
      }
    }
  }

  .attention-bg {
    margin: 60px auto;
  }

  .attention {
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;

    &>div {
      flex: 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;

      &>div:nth-child(1) {
        width: 42.1333vw;

        &>img {
          width: 100%;
        }
      }

      &>div:nth-child(2) {
        color: #79828D;
        text-align: center;
        font-family: Noto Sans TC;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        margin-top: 8px;
      }
    }
  }

  .why_significance {
    color: #79828D;
    text-align: center;
    font-family: Noto Sans;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: .1563rem;
    padding-bottom: .9375rem;
    position: relative;
  }

  .why_significance::after {
    content: '';
    background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Vector.5u4eydocd6c0.png');
    display: inline-block;
    width: 3.25rem;
    height: 0.625rem;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
  }
}
</style>