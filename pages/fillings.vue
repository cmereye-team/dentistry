<template>
<div id="lay">
 
  <menuBar/>
  <Banner/>
  <filling/>
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
import Banner from "@/components/filling/banner/index.vue"
import serve from "@/components/filling/serve/index.vue"
import filling from "@/components/filling/filling/index.vue"
import problem from "@/components/filling/problem/index.vue"

export default {
   components: { 
    menuBar,
    footced,
    Banner,
    serve,
    mapGoogle,
    filling,
    foot,
    problem
    },
     mounted(){
       document.getElementsByTagName("body")[0].className="body-fillings";
    },
     head() {
    return {
      title: '補牙 | 牙科服務 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '當牙齒的硬組織（琺瑯質、象牙質）受到破壞後，容易造成小孔，形成蛀牙。為了修復破損的組織及防止蛀牙情況加劇，會以填充物填補牙齒，使牙齒能恢復原來形狀和功能。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '補牙 補牙過程 補牙材料 補牙常見問題  '
      },
      ]
    }
  }
  
}
</script>
<style>
 
</style>
