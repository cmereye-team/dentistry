<template>
  <div id="lay">
    <menuBar />
    <!-- <Banner /> -->
    <bannerInsidePage :bannerImg="bannerImg" />
    <scaleTeeth />
    <regularDentalCleaning />
    <footce />
    <problem />
    <!-- <serve /> -->
    <mapGoogle />
    <!-- <div class="new_btn_scaling" style="margin:90px 0">
      <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize" :mb="mb"
        :paddingSizeMb="paddingSizeMb" :maxNum="6240" :minNum="5034" :maxNumMb="7910" :minNumMb="7575"  :newSvg="newSvg" />
    </div> -->
    <registration />
    <foot />
  </div>
</template>

<script>
import newBtn from '@/components/common/new-btn.vue';
import menuBar from "@/components/common/newMenuBar.vue";
import bannerInsidePage from "@/components/common/new-banner-inside-page.vue";
import mapGoogle from "@/components/common/new-googleMap.vue"
import footce from "@/components/common/new-footce.vue"
import registration from "@/components/common/new-test-registration-form.vue"
import foot from "@/components/common/new-foot.vue"
import Banner from "@/components/about-me/banner/new-index.vue";
import serve from "@/components/about-me/serve/new-index.vue";
import scaleTeeth from "@/components/scaleTeeth/scaleTeeth/new-index.vue"
import regularDentalCleaning from "@/components/scaleTeeth/regular-dental-cleaning/new-index.vue";
import problem from "@/components/scaleTeeth/problem/new-index.vue"

export default {
  components: {
    menuBar,
    bannerInsidePage,
    regularDentalCleaning,
    footce,
    Banner,
    serve,
    mapGoogle,
    scaleTeeth,
    foot,
    registration,
    problem,
    newBtn
  },
  data() {
    return {
      linkHref: 'https://api.whatsapp.com/send?phone=85295128192',
      linkText: '立即預約洗牙',
      isShowSvg: false,
      mb: '',
      paddingSize: '10px 100px',
      paddingSizeMb: '6px 74px',
      newSvg: 'https://static.cmereye.com/imgs/2023/12/ff870ed05ae5440d.png',
      bannerImg: {
        link: 'https://static.cmereye.com/imgs/2023/12/cb6b24b8deb4079d.png',
        linkAll: 'https://static.cmereye.com/imgs/2023/12/6ce9dfd0420ee24d.png 400w,  https://static.cmereye.com/imgs/2023/12/6ce9dfd0420ee24d.png 640w, https://static.cmereye.com/imgs/2023/12/cb6b24b8deb4079d.png',
        title: '',
        alt: '',
      }
    }
  },
  mounted() {
    this.mb = window.innerWidth < 768 ? 'mb' : 'pc';
    document.getElementsByTagName("body")[0].className = "body-scaling-and-polishing";
  },
  head() {
    return {
      title: '洗牙｜牙科服務｜希瑪牙科',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '提供洗牙和深層洗牙服務，定期洗牙有效清除牙齒上的牙菌膜、牙結石和牙漬，預防牙周疾病、防止蛀牙及改善口氣問題，牙醫建議每半年至一年洗牙一次，若患有牙周病、吸煙、佩戴假牙、或正接受矯齒人士，則建議每三個月至半年洗牙一次，以保持口腔衛生。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '洗牙 洗牙服務 深層洗牙 超聲波洗牙 牙結石 牙菌膜 牙垢 牙漬 洗牙預約 預約洗牙 洗牙評價 洗牙推薦 洗牙推介 洗牙介紹 洗牙費用 洗牙價錢 洗牙價格 洗牙香港 洗牙中環 洗牙沙田 洗牙觀塘 香港洗牙 中環洗牙 沙田洗牙 觀塘洗牙 洗牙即日 即日洗牙 洗牙邊間好 希瑪洗牙 希瑪牙科 Cmer Dental 香港希瑪牙科 牙科專科 牙科專科診所 香港希瑪 希瑪 希瑪牙科治療 希瑪牙科收費 牙科收費 希瑪牙科香港 牙科希瑪 牙科診所 牙科服務 牙科檢查 註冊牙醫 牙科醫生 牙醫 香港牙科 中環牙科 沙田牙科 觀塘牙科 尖沙咀牙科 香港牙醫 中環牙醫 沙田牙醫 觀塘牙醫 尖沙咀牙醫 洗牙送X Ray 口腔檢查'
      },
      ]
    }
  }

}
</script>
<style lang="scss" scoped>
@media screen and(min-width: 768px) {
  #lay {
    overflow: hidden;
  }
  ::v-deep .new_btn_scaling {
    .img_absolute {
      right: 68% !important;
    }
  }

  .toothWash {
    max-width: 1440px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: auto;
    margin-bottom: 90px;
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
      left: 10%;
    }
  }
}

@media screen and(max-width: 767px) {
  ::v-deep .new_btn_scaling {
    .img_absolute {
      right: 13% !important;
      top: -140% !important;
      z-index: 11 !important;
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
