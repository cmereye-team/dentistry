<template>
<div id="lay">
 
  <menuBar/>
  <Banner/>
  <toothStraighten/>
  <footce/>
  <problem/>
  <serve/>
  <mapGoogle/>
  <foot/>
  
</div>
</template>

<script>
import menuBar from "@/components/common/newMenuBar.vue";
import footce from "@/components/common/footce.vue"
import mapGoogle from "@/components/common/googleMap.vue"
import foot from "@/components/common/foot.vue"
import Banner from "@/components/toothStraighten/banner/index.vue"
import serve from "@/components/toothStraighten/serve/index.vue"
import toothStraighten from "@/components/toothStraighten/toothStraighten/index.vue"
import problem from "@/components/toothStraighten/problem/index.vue"

export default {
   components: { 
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    toothStraighten,
    foot,
    problem
    },
    mounted(){
       document.getElementsByTagName("body")[0].className="body-orthodontics";
    },
    head() {
    return {
      title: '矯齒 | 牙科服務 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '矯齒（箍牙）治療除了能矯正不整齊排列的牙齒，改善外觀外，更能有助減低患上各種牙齒問題的風險。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '矯齒 箍牙 矯齒目的 矯齒過程 矯齒後注意事項 矯齒常見問題'
      },
      ]
    }
  }
  
}
</script>
<style>
 
</style>
