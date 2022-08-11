<template>
<div id="lay">
 
  <menuBar/>
  <Banner/>
  <scaleTeeth/>
  <footced/>
  <problem/>
  <serve/>
  <mapGoogle/>
  <foot/>
  
</div>
</template>

<script>
import menuBar from "@/components/common/menuBar.vue";
import footced from "@/components/common/footced.vue"
import mapGoogle from "@/components/common/googleMap.vue"
import foot from "@/components/common/foot.vue"
import Banner from "@/components/scaleTeeth/banner/index.vue"
import serve from "@/components/scaleTeeth/serve/index.vue"
import scaleTeeth from "@/components/scaleTeeth/scaleTeeth/index.vue"
import problem from "@/components/scaleTeeth/problem/index.vue"

export default {
   components: { 
    menuBar,
    footced,
    Banner,
    serve,
    mapGoogle,
    scaleTeeth,
    foot,
    problem
    },
    mounted(){
       document.getElementsByTagName("body")[0].className="body-scaling-and-polishing";
    },
    head() {
    return {
      title: '洗牙 | 牙科服務 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '單靠刷牙並不能夠把牙垢完全清除，因此必須利用牙科儀器才能徹底清洗牙齒污垢，使牙齒回復平滑，減低細菌滋生的機會。醫生一般建議每半年至一年洗牙一次，以預防牙周、口腔及其他牙齒問題。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '洗牙 洗牙過程 洗牙常見問題 '
      },
      ]
    }
  }
  
}
</script>
<style>
 
</style>
