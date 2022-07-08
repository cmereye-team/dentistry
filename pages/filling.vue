<template>
<div id="lay">
  <menuBar/>
  <Banner/>
  <filling/>
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
import Banner from "@/components/filling/banner/index.vue"
import serve from "@/components/filling/serve/index.vue"
import filling from "@/components/filling/filling/index.vue"
import problem from "@/components/filling/problem/index.vue"

export default {
   components: { 
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    filling,
    foot,
    problem
    }
  
}
</script>
<style>
 
</style>
