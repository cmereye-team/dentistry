<template>
<div id="lay">
  <menuBar/>
  <Banner/>
  <zhiya/>
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
    mounted(){
       document.getElementsByTagName("body")[0].className="body-implant";
    },
    head() {
    return {
      title: '植牙 | 牙科服務 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '植牙，俗稱為「種牙」，是處理缺牙的一種治療方法。牙醫會把植體植入病人的牙槽骨內，待骨整合後用以支撐上面的牙套。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '植牙 植牙過程 植牙的原因 植牙與假牙分別 植牙常見問題'
      },
      ]
    }
  }
  
}
</script>
<style>
 
</style>
