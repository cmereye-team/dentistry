<template>
  <div id="lay">
    <menuBar />
    <bannerInsidePage :bannerImg="bannerImg" />
    <!-- <Banner /> -->
    <footce />
    <mapGoogle />
    <!-- <contact /> -->
    <registration />
    <foot />
  </div>
</template>

<script>
import menuBar from "@/components/common/newMenuBar.vue";
import footce from "@/components/common/new-footce.vue"
import mapGoogle from "@/components/common/new-googleMap.vue"
import foot from "@/components/common/new-foot.vue"
import Banner from "@/components/about-me/banner/new-index.vue";
import registration from "@/components/common/new-registration-form.vue"
import bannerInsidePage from "@/components/common/new-banner-inside-page.vue";
// import contact from "@/components/contactUs/contact/index.vue"


export default {
  components: {
    menuBar,
    footce,
    Banner,
    bannerInsidePage,
    registration,
    mapGoogle,
    foot,
    // contact
  },
  data() {
    return {
      bannerImg: {
        link: 'https://static.cmereye.com/imgs/2023/12/275def470058d87b.jpg',
        linkAll: 'https://static.cmereye.com/imgs/2023/12/4b274fc4ecc424a6.jpg 400w,  https://static.cmereye.com/imgs/2023/12/4b274fc4ecc424a6.jpg 640w, https://static.cmereye.com/imgs/2023/12/275def470058d87b.jpg',
        title: '',
        alt: '',
      }
    }
  },
  mounted() {
    document.getElementsByTagName("body")[0].className = "body-contact-us";
  },
  head() {
    return {
      title: '聯絡我們｜希瑪牙科',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '希瑪牙科診所分佈港九新界，包括中環、尖沙咀、觀塘及沙田。提供安全、可靠的牙科服務，並根據客人的口腔健康狀況，度身訂造最適合的治療方案。現在就聯絡我們，預約你的牙科服務。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '希瑪牙科 Cmer Dental 香港希瑪牙科 牙科專科 牙科專科診所 香港希瑪 希瑪 希瑪牙科治療 希瑪牙科香港 牙科希瑪 牙科診所 牙科服務 牙科檢查 註冊牙醫 牙科醫生 牙醫 香港牙科 中環牙科 沙田牙科 觀塘牙科 尖沙咀牙科 香港牙醫 中環牙醫 沙田牙醫 觀塘牙醫 尖沙咀牙醫'
      },
      ]
    }
  }
}
</script>
<style></style>
