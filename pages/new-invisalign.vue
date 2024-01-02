<template>
  <div id="lay">
    <menuBar />
    <bannerInsidePage :bannerImg="bannerImg" />
    <hiddenBeauty />
    <fit />
    <child />
    <merit />
    <footce />
    <problem />
    <mapGoogle />
    <registration />
    <foot />
  </div>
</template>

<script>
import menuBar from "@/components/common/newMenuBar.vue";
import bannerInsidePage from "@/components/common/new-banner-inside-page.vue";
import footce from "@/components/common/new-footce.vue"
import registration from "@/components/common/new-test-registration-form.vue"
import mapGoogle from "@/components/common/new-googleMap.vue"
import foot from "@/components/common/new-foot.vue"
import hiddenBeauty from "@/components/hiddenBeauty/hiddenBeauty/new-index.vue"
import fit from "@/components/hiddenBeauty/fit/new-index.vue"
import child from '@/components/hiddenBeauty/child/index.vue';
import merit from '@/components/hiddenBeauty/merit/new-index.vue';
import problem from "@/components/hiddenBeauty/problem/index.vue"

export default {
  components: {
    menuBar,
    footce,
    bannerInsidePage,
    mapGoogle,
    hiddenBeauty,
    registration,
    foot,
    fit,
    child,
    merit,
    problem
  },
  data() {
    return {
      bannerImg: {
        link: 'https://static.cmereye.com/imgs/2023/12/0e31493a93bd5414.png',
        linkAll: 'https://static.cmereye.com/imgs/2023/12/c5610bedb8002da1.png 400w,  https://static.cmereye.com/imgs/2023/12/c5610bedb8002da1.png 640w, https://static.cmereye.com/imgs/2023/12/0e31493a93bd5414.png',
        title: '',
        alt: '',
      }
    }
  },
  mounted() {
    document.getElementsByTagName("body")[0].className = "body-invisalign";
  },
  head() {
    return {
      title: '隱形牙箍｜牙科服務｜希瑪牙科',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '提供隱形矯正服務，採用獨特透明設計，舒適且方便除戴，可避免刮傷口腔，建議家長把握小朋友7歲起矯齒黃金期，以及早處理牙齒排列和咬合問題，展露自信笑容。如對隱形矯正有任何疑問，歡迎向本診所查詢費用詳情。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '隱形牙箍 隱形牙套 隱形矯正 透明牙箍 透明牙套 隱適美 Invisalign 牙箍 箍牙 牙套 隱形牙箍費用 隱形牙套費用 隱形矯正費用 透明牙箍費用 透明牙套費用 隱適美費用 Invisalign費用 牙箍費用 箍牙費用 牙套費用 隱形牙箍價錢 隱形牙套價錢 隱形矯正價錢 透明牙箍價錢 透明牙套價錢 隱適美價錢 Invisalign價錢 牙箍價錢 箍牙價錢 牙套價錢 隱形牙箍價格 隱形牙套價格 隱形矯正價格 透明牙箍價格 透明牙套價格 隱適美價格 Invisalign價格 牙箍價格 箍牙價格 牙套價格 隱形牙箍效果 隱形牙套效果 隱形矯正效果 透明牙箍效果 透明牙套效果 隱適美效果 Invisalign效果 牙箍效果 箍牙效果 牙套效果 隱形牙箍邊間好 隱形牙套邊間好 隱形矯正邊間好 透明牙箍邊間好 透明牙套邊間好 隱適美邊間好 Invisalign邊間好 牙箍邊間好 箍牙邊間好 牙套邊間好 隱形牙箍失敗 隱形牙套失敗 隱形矯正失敗 透明牙箍失敗 透明牙套失敗 隱適美失敗 Invisalign失敗 牙箍失敗 箍牙失敗 牙套失敗 隱形牙箍推薦 隱形牙套推薦 隱形矯正推薦 透明牙箍推薦 透明牙套推薦 隱適美推薦 Invisalign推薦 牙箍推薦 箍牙推薦 牙套推薦 隱形牙箍推介 隱形牙套推介 隱形矯正推介 透明牙箍推介 透明牙套推介 隱適美推介 Invisalign推介 牙箍推介 箍牙推介 牙套推介 隱形牙箍原理 隱形牙套原理 隱形矯正原理 透明牙箍原理 透明牙套原理 隱適美原理 Invisalign原理 牙箍原理 箍牙原理 牙套原理 隱形牙箍比較 隱形牙套比較 隱形矯正比較 透明牙箍比較 透明牙套比較 隱適美比較 Invisalign比較 牙箍比較 箍牙比較 牙套比較 隱形牙箍缺點 隱形牙套缺點 隱形矯正缺點 透明牙箍缺點 透明牙套缺點 隱適美缺點 Invisalign缺點 牙箍缺點 箍牙缺點 牙套缺點 隱形牙箍優惠 隱形牙套優惠 隱形矯正優惠 透明牙箍優惠 透明牙套優惠 隱適美優惠 Invisalign優惠 牙箍優惠 箍牙優惠 牙套優惠 隱形牙箍後遺症 隱形牙套後遺症 隱形矯正後遺症 透明牙箍後遺症 透明牙套後遺症 隱適美後遺症 Invisalign後遺症 牙箍後遺症 箍牙後遺症 牙套後遺症 隱形牙箍要戴多久 隱形牙套要戴多久 透明牙箍要戴多久 透明牙套要戴多久 隱適美要戴多久 Invisalign要戴多久 牙箍要戴多久 牙套要戴多久 隱形牙箍清潔 隱形牙套清潔 透明牙箍清潔 透明牙套清潔 隱適美清潔 Invisalign清潔 牙箍清潔 牙套清潔 隱形牙箍預約 隱形牙套預約 隱形矯正預約 透明牙箍預約 透明牙套預約 隱適美預約 Invisalign預約 牙箍預約 箍牙預約 牙套預約 隱形牙箍香港 隱形牙箍中環 隱形牙箍沙田 隱形牙箍觀塘 香港隱形牙箍 中環隱形牙箍 沙田隱形牙箍 觀塘隱形牙箍 希瑪隱形牙箍 隱形牙套香港 隱形牙套中環 隱形牙套沙田 隱形牙套觀塘 香港隱形牙套 中環隱形牙套 沙田隱形牙套 觀塘隱形牙套 希瑪隱形牙套 透明牙箍香港 透明牙箍中環 透明牙箍沙田 透明牙箍觀塘 香港透明牙箍 中環透明牙箍 沙田透明牙箍 觀塘透明牙箍 希瑪透明牙箍 透明牙套香港 透明牙套中環 透明牙套沙田 透明牙套觀塘 香港透明牙套 中環透明牙套 沙田透明牙套 觀塘透明牙套 希瑪透明牙套 隱適美香港 隱適美中環 隱適美沙田 隱適美觀塘 香港隱適美 中環隱適美 沙田隱適美 觀塘隱適美 希瑪隱適美 隱形矯正香港 隱形矯正中環 隱形矯正沙田 隱形矯正觀塘 香港隱形矯正 中環隱形矯正 沙田隱形矯正 觀塘隱形矯正 希瑪隱形矯正 Invisalign香港 Invisalign中環 Invisalign沙田 Invisalign觀塘 香港Invisalign 中環Invisalign 沙田Invisalign 觀塘Invisalign 希瑪Invisalign 牙箍香港 牙箍中環 牙箍沙田 牙箍觀塘 香港牙箍 中環牙箍 沙田牙箍 觀塘牙箍 希瑪牙箍 箍牙香港 箍牙中環 箍牙沙田 箍牙觀塘 香港箍牙 中環箍牙 沙田箍牙 觀塘箍牙 希瑪箍牙 牙套香港 牙套中環 牙套沙田 牙套觀塘 香港牙套 中環牙套 沙田牙套 觀塘牙套 希瑪牙套 希瑪牙科 Cmer Dental 香港希瑪牙科 牙科專科 牙科專科診所 香港希瑪 希瑪 希瑪牙科治療 希瑪牙科收費 牙科收費 希瑪牙科香港 牙科希瑪 牙科診所 牙科服務 牙科檢查 註冊牙醫 牙科醫生 牙醫 香港牙科 中環牙科 沙田牙科 觀塘牙科 尖沙咀牙科 香港牙醫 中環牙醫 沙田牙醫 觀塘牙醫 尖沙咀牙醫'
      },
      ]
    }
  }

}
</script>
<style></style>
