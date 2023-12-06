<template>
  <div id="new-home">
    <div>
      <menuBar />
      <Banner />
      <footce />
      <serve />
      <dentalExplain />
      <serveConcept />
      <debtistryHealth />
      <mapGoogle />
      <registration />
      <foot />
    </div>
  </div>
</template>

<script>
import menuBar from "@/components/common/newMenuBar.vue";
import Banner from "@/components/about-me/banner/new-index.vue";
import serve from "@/components/about-me/serve/new-index.vue";
import dentalExplain from '@/components/home/index.vue';
import serveConcept from "@/components/about-me/service-concept/new-index.vue"
import footce from "@/components/common/new-footce.vue"
import debtistryHealth from "@/components/about-me/debtistry-health/new-index.vue"
import mapGoogle from "@/components/common/new-googleMap.vue"
import registration from "@/components/common/new-registration-form.vue" 
import foot from "@/components/common/new-foot.vue"
export default {
  components: {
    menuBar,
    Banner,
    serve,
    dentalExplain,
    serveConcept,
    footce,
    debtistryHealth,
    mapGoogle,
    registration,
    foot
  },
  data() {
    return {
      head: '',
      link: ''
    }
  },
  mounted() {
    document.getElementsByTagName("body")[0].className = "body-index";
  },
  created() {
  },
  methods: {

  },
  head() {
    return {
      title: '希瑪牙科｜綜合牙科服務｜診所分佈港九新界',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '希瑪牙科（Cmer Dental）是香港主板上市公司「香港希瑪眼科集團」（股份代號：3309）旗下的牙科中心，由註冊牙醫主理，提供基本牙科、美容牙科及高階牙科服務，包括：洗牙、植牙、杜牙根、剝智慧齒、牙周病治療、瓷貼片、牙齒美白、隱適美矯齒療程等。希瑪牙科於港九新界設有分店，擁有優質牙科設備及先進技術，根據客人的實際口腔健康狀況制定嚴格且針對性的治療方案。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '希瑪牙科 Cmer Dental 香港希瑪牙科 牙科專科 牙科專科診所 香港希瑪 希瑪 希瑪牙科治療 希瑪牙科收費 牙科收費 希瑪牙科香港 牙科希瑪 牙科診所 牙科服務 牙科檢查 註冊牙醫 牙科醫生 牙醫 香港牙科 中環牙科 沙田牙科 觀塘牙科 尖沙咀牙科 香港牙醫 中環牙醫 沙田牙醫 觀塘牙醫 尖沙咀牙醫 洗牙 植牙 種植牙 微創植牙 傳統植牙 All on 4 植牙 補牙 隱形牙箍 傳統牙箍 矯齒 箍牙 全瓷貼片 瓷貼片 牙貼片 牙齒美白 藍光美白牙齒 激光美白牙齒 牙托 全口牙托 局部牙托 牙冠 全瓷牙冠 全皓牙冠 杜牙根 根管治療 脫牙 剝牙 牙痛 剝智慧齒 牙周病治療 牙周病 兒童牙科'
      },
      ]
    }
  },

}
</script>
<style></style>
