<template>
<div id="lay">
  <menuBar/>
  <Banner/>
  <dentures/>
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
import Banner from "@/components/dentures/banner/index.vue"
import serve from "@/components/dentures/serve/index.vue"
import problem from "@/components/dentures/problem/index.vue"
import dentures from "@/components/dentures/dentures/index.vue"

export default {
   components: { 
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    dentures,
    foot,
    problem
    }
  
}
</script>
<style>
 
</style>
