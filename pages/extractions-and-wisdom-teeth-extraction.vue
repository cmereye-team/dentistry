<template>
<div id="lay">
 
  <menuBar/>
  <Banner/>
  <exelcymosis/>
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
import Banner from "@/components/exelcymosis/banner/index.vue"
import serve from "@/components/exelcymosis/serve/index.vue"
import problem from "@/components/exelcymosis/problem/index.vue"
import exelcymosis from "@/components/exelcymosis/exelcymosis/index.vue"

export default {
   components: { 
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    exelcymosis,
    foot,
    problem
    },
    mounted(){
       document.getElementsByTagName("body")[0].className="body-extractions-and-wisdom-teeth-extraction";
    },
      head() {
    return {
      title: '拔牙及智慧齒脫除 | 牙科服務 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '拔牙一般不需要進行手術，但若牙齒歪生或非常接近神經，則有機會需要進行手術式脫牙。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '拔牙 智慧齒脫除 拔牙的原因 智慧齒可能導致的口腔問題 拔牙過程 智慧齒脫除過程 拔牙後注意事項 拔牙常見問題 智慧齒脫除常見問題'
      },
      ]
    }
  }
  
}
</script>
<style>
 
</style>
