<template>
  <div id="lay">

    <menuBar />
    <Banner />
    <porcelain />
    <footce />
    <problem />
    <serve />
    <mapGoogle />
    <foot />

  </div>
</template>

<script>
import menuBar from "@/components/common/newMenuBar.vue";
import footce from "@/components/common/new-footce.vue"
import mapGoogle from "@/components/common/new-googleMap.vue"
import foot from "@/components/common/foot.vue"
import Banner from "@/components/porcelain/banner/index.vue"
import serve from "@/components/porcelain/serve/index.vue"
import porcelain from "@/components/porcelain/porcelain/index.vue"
import problem from "@/components/porcelain/problem/index.vue"

export default {
  components: {
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    porcelain,
    foot,
    problem
  },
  mounted() {
    document.getElementsByTagName("body")[0].className = "body-veneers";
  },
  head() {
    return {
      title: '全瓷貼片｜牙科服務｜希瑪牙科',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '提供全瓷貼片服務，微調牙齒形狀、排列、長度及顏色，達到牙齒整齊潔白效果，展現自信燦爛笑容，最快可即日完成療程。如對全瓷貼片有任何疑問，歡迎向本診所查詢費用詳情。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '全瓷貼片 陶瓷貼片 瓷貼片 瓷牙貼片 牙貼片 全瓷貼片費用 陶瓷貼片費用 瓷貼片費用 瓷牙貼片費用 牙貼片費用 全瓷貼片價錢 陶瓷貼片價錢 瓷貼片價錢 瓷牙貼片價錢 牙貼片價錢 全瓷貼片價格 陶瓷貼片價格 瓷貼片價格 瓷牙貼片價格 牙貼片價格 全瓷貼片後遺症 陶瓷貼片後遺症 瓷貼片後遺症 瓷牙貼片後遺症 牙貼片後遺症 全瓷貼片壽命 陶瓷貼片壽命 瓷貼片壽命 瓷牙貼片壽命 牙貼片壽命 全瓷貼片缺點 陶瓷貼片缺點 瓷貼片缺點 瓷牙貼片缺點 牙貼片缺點 全瓷貼片推薦 陶瓷貼片推薦 瓷貼片推薦 瓷牙貼片推薦 牙貼片推薦 全瓷貼片推介 陶瓷貼片推介 瓷貼片推介 瓷牙貼片推介 牙貼片推介 全瓷貼片效果 陶瓷貼片效果 瓷貼片效果 瓷牙貼片效果 牙貼片效果 全瓷貼片原理 陶瓷貼片原理 瓷貼片原理 瓷牙貼片原理 牙貼片原理 全瓷貼片後悔 陶瓷貼片後悔 瓷貼片後悔 瓷牙貼片後悔 牙貼片後悔 全瓷貼片蛀牙 陶瓷貼片蛀牙 瓷貼片蛀牙 瓷牙貼片蛀牙 牙貼片蛀牙 全瓷貼片磨牙 陶瓷貼片磨牙 瓷貼片磨牙 瓷牙貼片磨牙 牙貼片磨牙 全瓷貼片香港 全瓷貼片中環 全瓷貼片沙田 全瓷貼片觀塘 香港全瓷貼片 中環全瓷貼片 沙田全瓷貼片 觀塘全瓷貼片 希瑪全瓷貼片 陶瓷貼片香港 陶瓷貼片中環 陶瓷貼片沙田 陶瓷貼片觀塘 香港陶瓷貼片 中環陶瓷貼片 沙田陶瓷貼片 觀塘陶瓷貼片 希瑪陶瓷貼片 瓷貼片香港 瓷貼片中環 瓷貼片沙田 瓷貼片觀塘 香港瓷貼片 中環瓷貼片 沙田瓷貼片 觀塘瓷貼片 希瑪瓷貼片 瓷牙貼片香港 瓷牙貼片中環 瓷牙貼片沙田 瓷牙貼片觀塘 香港瓷牙貼片 中環瓷牙貼片 沙田瓷牙貼片 觀塘瓷牙貼片 希瑪瓷牙貼片 牙貼片香港 牙貼片中環 牙貼片沙田 牙貼片觀塘 香港牙貼片 中環牙貼片 沙田牙貼片 觀塘牙貼片 希瑪牙貼片 希瑪牙科 Cmer Dental 香港希瑪牙科 牙科專科 牙科專科診所 香港希瑪 希瑪 希瑪牙科治療 希瑪牙科收費 牙科收費 希瑪牙科香港 牙科希瑪 牙科診所 牙科服務 牙科檢查 註冊牙醫 牙科醫生 牙醫 香港牙科 中環牙科 沙田牙科 觀塘牙科 尖沙咀牙科 香港牙醫 中環牙醫 沙田牙醫 觀塘牙醫 尖沙咀牙醫'
      },
      ]
    }
  }

}
</script>
<style></style>
