<template>
  <div id="lay">
    <div>
      <menuBar />
      <Banner />
      <footce />
      <serve />
      <serveConcept />
      <debtistryHealth />
      <mapGoogle />
      <foot />
    
    </div>
  </div>
</template>

<script>
// import menuBar from "@/components/about-me/menu-bar/index.vue";
import menuBar from "@/components/common/menuBar.vue";
import Banner from "@/components/about-me/banner/index.vue";
import serve from "@/components/about-me/serve/index.vue"
import serveConcept from "@/components/about-me/service-concept/index.vue"
import footce from "@/components/common/footce.vue"
import debtistryHealth from "@/components/about-me/debtistry-health/index.vue"
import mapGoogle from "@/components/common/googleMap.vue"
import foot from "@/components/common/foot.vue"
import dynamicLoadCss from "@/tools/cssLink.js"
export default {
  components: {
    menuBar,
    Banner,
    serve,
    serveConcept,
    footce,
    debtistryHealth,
    mapGoogle,
    foot
  },
  data(){
    return{
      head:'',
      link:''
    }
  },
  mounted() {
     document.getElementsByTagName("body")[0].className = "body-index";
  },
  created(){
  },
  methods: {

},
  head() {
    return {
      title: '希瑪牙科中心 | 提供全方位牙科服務 | 診所分佈港九新界',
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
  },

}
</script>
<style>
</style>
