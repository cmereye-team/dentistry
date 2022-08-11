<template>
<div id="lay">
 
  <menuBar/>
  <Banner/>
  <whitening/>
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
import Banner from "@/components/whitening/banner/index.vue"
import serve from "@/components/whitening/serve/index.vue"
import problem from "@/components/whitening/problem/index.vue"
import whitening from "@/components/whitening/whitening/index.vue"

export default {
   components: { 
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    whitening,
    foot,
    problem
    },
      mounted(){
       document.getElementsByTagName("body")[0].className="body-teeth-whitening";
    },
     head() {
    return {
      title: '牙齒美白 | 牙科服務 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '想擁有更亮白的牙齒，可以考慮進行美白牙齒療程。美白牙齒療程能夠有效地把外在和內在的牙漬清除，令牙齒更加亮白。診所提供藍光美白牙齒及激光美白牙齒服務，助你建立閃亮笑容。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '美白牙齒 激光牙齒美白 藍光牙齒美白 激光牙齒美白過程 藍光牙齒美白過程 美白牙齒常見問題'
      },
      ]
    }
  }
  
}
</script>
<style>
 
</style>
