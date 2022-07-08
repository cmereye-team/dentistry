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
import menuBar from "@/components/common/menuBar.vue";
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
    }
  
}
</script>
<style>
 
</style>
