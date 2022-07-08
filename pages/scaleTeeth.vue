<template>
<div id="lay">
  <menuBar/>
  <Banner/>
  <scaleTeeth/>
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
import Banner from "@/components/scaleTeeth/banner/index.vue"
import serve from "@/components/scaleTeeth/serve/index.vue"
import scaleTeeth from "@/components/scaleTeeth/scaleTeeth/index.vue"
import problem from "@/components/scaleTeeth/problem/index.vue"

export default {
   components: { 
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    scaleTeeth,
    foot,
    problem
    }
  
}
</script>
<style>
 
</style>
