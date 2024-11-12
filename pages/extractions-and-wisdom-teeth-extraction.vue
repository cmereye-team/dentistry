<template>
  <div id="lay">

    <menuBar />
    <Banner />
    <exelcymosis />
    <footce />
    <problem />
    <serve />
    <mapGoogle />
    <foot />

  </div>
</template>

<script>
import menuBar from "@/components/common/newMenuBar.vue";
// import footce from "@/components/common/footce.vue"
import footce from "@/components/common/new-footce.vue"
import mapGoogle from "@/components/common/new-googleMap.vue"
import foot from "@/components/common/foot.vue"
import Banner from "@/components/exelcymosis/banner/index.vue"
import serve from "@/components/exelcymosis/serve/index.vue"
import problem from "@/components/exelcymosis/problem/index.vue"
import exelcymosis from "@/components/exelcymosis/exelcymosis/index.vue"

export default {
  components: {
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    exelcymosis,
    foot,
    problem
  },
  mounted() {
    document.getElementsByTagName("body")[0].className = "body-extractions-and-wisdom-teeth-extraction";
  },
  head() {
    return {
      title: '拔牙及剝智慧齒｜牙科服務｜希瑪牙科',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '提供拔牙及剝智慧齒手術，將受到嚴重損害或無法修復的牙齒取出，以解決牙齒疾病及預防潛在口腔健康問題．若出現牙痛症狀，歡迎向本診所預約及查詢。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '拔牙 剝牙 脫牙 智慧齒 拔智慧齒 剝智慧齒 脫智慧齒 拔牙費用 剝牙費用 脫牙費用 智慧齒費用 拔智慧齒費用 剝智慧齒費用 脫智慧齒費用 拔牙價錢 剝牙價錢 脫牙價錢 智慧齒價錢 拔智慧齒價錢 剝智慧齒價錢 脫智慧齒價錢 拔牙價格 剝牙價格 脫牙價格 智慧齒價格 拔智慧齒價格 剝智慧齒價格 脫智慧齒價格 拔牙過程 剝牙過程 脫牙過程 拔智慧齒過程 剝智慧齒過程 脫智慧齒過程 拔牙後遺症 剝牙後遺症 脫牙後遺症 拔智慧齒後遺症 剝智慧齒後遺症 脫智慧齒後遺症 拔牙痛 剝牙痛 脫牙痛 拔智慧齒痛 剝智慧齒痛 脫智慧齒痛 拔牙 剝牙 脫牙 拔智慧齒 剝智慧齒 脫智慧齒 智慧齒幾時生 智慧齒位置 智慧齒橫生 智慧齒阻生 拔牙手術 剝牙手術 脫牙手術 拔智慧齒手術 剝智慧齒手術 脫智慧齒手術 拔牙後注意 剝牙後注意 脫牙後注意 拔智慧齒後注意 剝智慧齒後注意 脫智慧齒後注意 拔牙後護理 剝牙後護理 脫牙後護理 拔智慧齒後護理 剝智慧齒後護理 脫智慧齒後護理 拔牙後處理 剝牙後處理 脫牙後處理 拔智慧齒後處理 剝智慧齒後處理 脫智慧齒後處理 拔牙預約 剝牙預約 脫牙預約 拔智慧齒預約 剝智慧齒預約 脫智慧齒預約 拔牙推介 剝牙推介 脫牙推介 拔智慧齒推介 剝智慧齒推介 脫智慧齒推介 拔牙推薦 剝牙推薦 脫牙推薦 拔智慧齒推薦 剝智慧齒推薦 脫智慧齒推薦 拔牙香港 拔牙中環 拔牙沙田 拔牙觀塘 香港拔牙 中環拔牙 沙田拔牙 觀塘拔牙 希瑪拔牙 剝牙香港 剝牙中環 剝牙沙田 剝牙觀塘 香港剝牙 中環剝牙 沙田剝牙 觀塘剝牙 希瑪剝牙 脫牙香港 脫牙中環 脫牙沙田 脫牙觀塘 香港脫牙 中環脫牙 沙田脫牙 觀塘脫牙 希瑪脫牙 拔智慧齒香港 拔智慧齒中環 拔智慧齒沙田 拔智慧齒觀塘 香港拔智慧齒 中環拔智慧齒 沙田拔智慧齒 觀塘拔智慧齒 希瑪拔智慧齒 剝智慧齒香港 剝智慧齒中環 剝智慧齒沙田 剝智慧齒觀塘 香港剝智慧齒 中環剝智慧齒 沙田剝智慧齒 觀塘剝智慧齒 希瑪剝智慧齒 脫智慧齒香港 脫智慧齒中環 脫智慧齒沙田 脫智慧齒觀塘 香港脫智慧齒 中環脫智慧齒 沙田脫智慧齒 觀塘脫智慧齒 希瑪脫智慧齒 希瑪牙科 Cmer Dental 香港希瑪牙科 牙科專科 牙科專科診所 香港希瑪 希瑪 希瑪牙科治療 希瑪牙科收費 牙科收費 希瑪牙科香港 牙科希瑪 牙科診所 牙科服務 牙科檢查 註冊牙醫 牙科醫生 牙醫 香港牙科 中環牙科 沙田牙科 觀塘牙科 尖沙咀牙科 香港牙醫 中環牙醫 沙田牙醫 觀塘牙醫 尖沙咀牙醫'
      },
      ]
    }
  }

}
</script>
<style></style>
