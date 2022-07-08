<template>
<div id="lay">
  <menuBar/>
  <Banner/>
  <toothStraighten/>
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
import Banner from "@/components/toothStraighten/banner/index.vue"
import serve from "@/components/toothStraighten/serve/index.vue"
import toothStraighten from "@/components/toothStraighten/toothStraighten/index.vue"
import problem from "@/components/toothStraighten/problem/index.vue"

export default {
   components: { 
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    toothStraighten,
    foot,
    problem
    }
  
}
</script>
<style>
 
</style>
