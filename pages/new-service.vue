<template>
  <div id="lay">
    <menuBar />
    <!-- <Banner /> -->
    <footce />
    <serve :isServePage=isServePage />
    <mapGoogle />
    <!-- <registration /> -->
    <foot />
  </div>
</template>

<script>
import menuBar from "@/components/common/newMenuBar.vue";
import footce from "@/components/common/new-footce.vue"
import mapGoogle from "@/components/common/new-googleMap.vue"
import foot from "@/components/common/new-foot.vue"
import serve from "@/components/about-me/serve/new-index.vue"
import registration from "@/components/common/new-test-registration-form.vue"
// import Banner from "@/components/service/banner/index.vue"

export default {
  components: {
    menuBar,
    footce,
    serve,
    mapGoogle,
    foot,
    registration
    // Banner
  },
  data() {
    return {
      isServePage: true,
    }
  },
  mounted() {
    document.getElementsByTagName("body")[0].className = "body-service";
  },
  head() {
    return {
      title: '牙科服務 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '希瑪牙科中心提供基本牙科、美容牙科及高階牙科服務，從一般口腔檢查、洗牙、補牙，剝智慧牙、植牙、箍牙、牙齒美白、全口修復及各種牙科治療等，幫助客人回復自信笑容。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '希瑪牙科 牙科服務 全面口腔照顧 基本牙科 美容牙科 高階牙科服務港島牙科 九龍牙科 新界牙科'
      },
      ]
    }
  }
}
</script>
<style></style>