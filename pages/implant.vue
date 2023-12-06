<template>
  <div id="lay">
    <menuBar />
    <Banner />
    <zhiya />
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
import Banner from "@/components/implant/banner/index.vue"
import serve from "@/components/implant/serves/index.vue"
import zhiya from "@/components/implant/zhiya/index.vue"
import problem from "@/components/implant/problem/index.vue"

export default {
  components: {
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    zhiya,
    foot,
    problem
  },
  mounted() {
    document.getElementsByTagName("body")[0].className = "body-implant";
  },
  head() {
    return {
      title: '微創植牙、種植牙｜牙科服務｜希瑪牙科',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '提供植牙服務，包括傳統植牙、微創植牙、All-on-4 全口植牙、即剝即種植牙，透過將鈦金屬植體穩固地植入牙槽骨，作為假牙、牙橋或牙托的支撐，填補缺牙部分，幫助患者重拾健康的生活素質。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '植牙 種牙 種植牙 傳統植牙 微創植牙 All on 4 植牙 即剝即種 無痛植牙 全口植牙 全口重建 植牙服務 種牙服務 種植牙服務 植牙收費 種牙收費 種植牙收費 傳統植牙收費 微創植牙收費 All on 4 植牙收費 即剝即種收費 植牙價錢 種牙價錢 種植牙價錢 傳統植牙價錢 微創植牙價錢 All on 4 植牙價錢 即剝即種價錢 植牙過程 種牙過程 種植牙過程 植牙後遺症 種牙後遺症 種植牙後遺症 植牙手術 種牙手術 種植牙手術 植牙邊間好 種牙邊間好 種植牙邊間好 植牙種牙分別 補牙 無牙 缺牙 天生缺牙 缺牙怎麼辦 天生缺牙怎麼辦 植牙預約 種牙預約 種植牙預約 預約植牙 預約種牙 預約種植牙 植牙評價 種牙評價 種植牙評價 植牙推薦 種牙推薦 種植牙推薦 植牙推介 種牙推介 種植牙推介 植牙介紹 種牙介紹 種植牙品牌 植牙品牌 種牙品牌 種植牙品牌 植牙香港 植牙中環 植牙沙田 植牙觀塘 香港植牙 中環植牙 沙田植牙 觀塘植牙 希瑪植牙 希瑪牙科 Cmer Dental 香港希瑪牙科 牙科專科 牙科專科診所 香港希瑪 希瑪 希瑪牙科治療 希瑪牙科收費 牙科收費 希瑪牙科香港 牙科希瑪 牙科診所 牙科服務 牙科檢查 註冊牙醫 牙科醫生 牙醫 香港牙科 中環牙科 沙田牙科 觀塘牙科 尖沙咀牙科 香港牙醫 中環牙醫 沙田牙醫 觀塘牙醫 尖沙咀牙醫'
      },
      ]
    }
  }
}
</script>
<style></style>
