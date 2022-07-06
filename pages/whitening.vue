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
    }
  
}
</script>
<style>
 
</style>
