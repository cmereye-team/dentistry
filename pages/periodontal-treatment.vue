<template>
<div id="lay">
 
  <menuBar/>
  <Banner/>
  <periodontosis/>
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
     mounted(){
       document.getElementsByTagName("body")[0].className="body-periodontal-treatment";
    },
     head() {
    return {
      title: '牙周病治療 | 牙科服務 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '牙周病屬慢性炎症，分為輕微的牙齦炎及嚴重的牙周炎兩種。會令牙齒鬆脫、移位，影響外貌及口腔健康。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '牙周病 牙齦炎如何形成 牙周病如何形成 牙周病的症狀 牙根刮治(深層洗牙)  牙肉翻瓣手術 牙周再生手術 牙周病常見問題'
      },
      ]
    }
  }
  
}
</script>
<style>
 
</style>
