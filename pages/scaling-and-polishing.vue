<template>
  <div id="lay">

    <menuBar />
    <Banner />
    <scaleTeeth />
    <footce />
    <problem />
    <serve />
    <mapGoogle />
    <foot />

  </div>
</template>

<script>
import menuBar from "@/components/common/menuBar.vue";
import footce from "@/components/common/footce.vue"
import mapGoogle from "@/components/common/googleMap.vue"
import foot from "@/components/common/foot.vue"
import Banner from "@/components/scaleTeeth/banner/index.vue"
import serve from "@/components/scaleTeeth/serve/index.vue"
import scaleTeeth from "@/components/scaleTeeth/scaleTeeth/index.vue"
import problem from "@/components/scaleTeeth/problem/index.vue"

export default {
  components: {
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    scaleTeeth,
    foot,
    problem
  },
  mounted() {
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
<style></style>
