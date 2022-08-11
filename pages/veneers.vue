<template>
<div id="lay">
 
  <menuBar/>
  <Banner/>
  <porcelain/>
  <footce/>
  <problem/>
  <serve/>
  <mapGoogle/>
  <foot/>
  
</div>
</template>

<script>
import menuBar from "@/components/common/menuBar.vue";
import footce from "@/components/common/footce.vue"
import mapGoogle from "@/components/common/googleMap.vue"
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
    mounted(){
       document.getElementsByTagName("body")[0].className="body-veneers";
    },
    head() {
    return {
      title: '瓷貼片 | 牙科服務 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '瓷貼片有助改善牙齒的形狀、長度、外觀及顏色，達到牙齒整齊和美白的效果。把度身訂製的纖薄瓷貼片黏附於牙齒表層，效果自然，改善外觀。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '瓷貼片 適合使用瓷貼片的人士 瓷貼片治療過程 選擇瓷貼片療程前你要知 瓷貼片常見問題'
      },
      ]
    }
  }
  
}
</script>
<style>
 
</style>
