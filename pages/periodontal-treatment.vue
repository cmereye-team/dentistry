<template>
  <div id="lay">

    <menuBar />
    <Banner />
    <periodontosis />
    <footce />
    <problem />
    <serve />
    <mapGoogle />
    <foot />

  </div>
</template>

<script>
import menuBar from "@/components/common/newMenuBar.vue";
import footce from "@/components/common/footce.vue"
import mapGoogle from "@/components/common/googleMap.vue"
import foot from "@/components/common/foot.vue"
import Banner from "@/components/periodontosis/banner/index.vue"
import serve from "@/components/periodontosis/serve/index.vue"
import problem from "@/components/periodontosis/problem/index.vue"
import periodontosis from "@/components/periodontosis/periodontosis/index.vue"

export default {
  components: {
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    periodontosis,
    foot,
    problem
  },
  mounted() {
    document.getElementsByTagName("body")[0].className = "body-periodontal-treatment";
  },
  head() {
    return {
      title: '牙周病治療｜牙科服務｜希瑪牙科',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '提供牙周病治療，包括牙根刮治、牙周翻瓣手術、牙周再生手術，徹底清除牙根表面及牙周袋下的發炎組織。牙周病初期症狀難以察覺，應及早發現並對症下藥，確保牙周健康。若已出現牙周病症狀，歡迎向本診所預約及查詢。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '牙周病 牙周疾病 牙齦炎 牙周炎 牙周病成因 牙周疾病成因 牙齦炎成因 牙周炎成因 牙周病症狀 牙周疾病症狀 牙齦炎症狀 牙周炎症狀 牙周病治療 牙周疾病治療 牙齦炎治療 牙周炎治療 牙周病治療費用 牙周疾病治療費用 牙齦炎治療費用 牙周炎治療費用 牙周病治療價錢 牙周疾病治療價錢 牙齦炎治療價錢 牙周炎治療價錢 牙周病治療價格 牙周疾病治療價格 牙齦炎治療價格 牙周炎治療價格 牙周病治療後遺症 牙周疾病治療後遺症 牙齦炎治療後遺症 牙周炎治療後遺症 牙周病治療多久 牙周疾病治療多久 牙齦炎治療多久 牙周炎治療多久 牙周病治療方法 牙周疾病治療方法 牙齦炎治療方法 牙周炎治療方法 牙周病治療推介 牙周疾病治療推介 牙齦炎治療推介 牙周炎治療推介 牙周病治療推薦 牙周疾病治療推薦 牙齦炎治療推薦 牙周炎治療推薦 牙周病治療預約 牙周疾病治療預約 牙齦炎治療預約 牙周炎治療預約 我自己治好了我的牙周病 牙周病治療香港 牙周病治療中環 牙周病治療沙田 牙周病治療觀塘 香港牙周病治療 中環牙周病治療 沙田牙周病治療 觀塘牙周病治療 希瑪牙周病治療 牙周疾病治療香港 牙周疾病治療中環 牙周疾病治療沙田 牙周疾病治療觀塘 香港牙周疾病治療 中環牙周疾病治療 沙田牙周疾病治療 觀塘牙周疾病治療 希瑪牙周疾病治療 牙齦炎治療香港 牙齦炎治療中環 牙齦炎治療沙田 牙齦炎治療觀塘 香港牙齦炎治療 中環牙齦炎治療 沙田牙齦炎治療 觀塘牙齦炎治療 希瑪牙齦炎治療 牙周炎治療香港 牙周炎治療中環 牙周炎治療沙田 牙周炎治療觀塘 香港牙周炎治療 中環牙周炎治療 沙田牙周炎治療 觀塘牙周炎治療 希瑪牙周炎治療 希瑪牙科 Cmer Dental 香港希瑪牙科 牙科專科 牙科專科診所 香港希瑪 希瑪 希瑪牙科治療 希瑪牙科收費 牙科收費 希瑪牙科香港 牙科希瑪 牙科診所 牙科服務 牙科檢查 註冊牙醫 牙科醫生 牙醫 香港牙科 中環牙科 沙田牙科 觀塘牙科 尖沙咀牙科 香港牙醫 中環牙醫 沙田牙醫 觀塘牙醫 尖沙咀牙醫'
      },
      ]
    }
  }

}
</script>
<style></style>
