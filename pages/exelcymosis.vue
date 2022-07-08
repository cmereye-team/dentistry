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
import menuBar from "@/components/common/menuBar.vue";
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
    }
  
}
</script>
<style>
 
</style>
