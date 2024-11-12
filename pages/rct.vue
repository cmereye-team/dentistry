<template>
<div id="lay">
 
  <menuBar/>
  <Banner/>
  <therapy/>
  <footce/>
  <problem/>
  <serve/>
  <mapGoogle/>
  <foot/>
  
</div>
</template>

<script>
import menuBar from "@/components/common/menuBar.vue";
import footce from "@/components/common/new-footce.vue"
import mapGoogle from "@/components/common/new-googleMap.vue"
import foot from "@/components/common/foot.vue"
import Banner from "@/components/therapy/banner/index.vue"
import serve from "@/components/therapy/serve/index.vue"
import therapy from "@/components/therapy/therapy/index.vue"
import problem from "@/components/therapy/problem/index.vue"

export default {
   components: { 
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    therapy,
    foot,
    problem
    },
    mounted(){
       document.getElementsByTagName("body")[0].className="body-rct";
    },
    head() {
    return {
      title: '根管治療（杜牙根）| 牙科服務 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '根管治療（杜牙根）是治療嚴重蛀牙或牙根受細菌感染的手術，當蛀牙菌的感染深入牙髓，以致牙齒內的神經發炎，便需要以杜牙根手術徹底清除感染的部分。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '根管治療 杜牙根 杜牙根過程 杜牙根的原因 杜牙根後注意事項 杜牙根常見問題'
      },
      ]
    }
  }
  
}
</script>
<style>
 
</style>
