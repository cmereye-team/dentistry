<template>
<div id="lay">
  <menuBar/>
  <Banner/>
  <porcelain/>
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
import Banner from "@/components/porcelain/banner/index.vue"
import serve from "@/components/porcelain/serve/index.vue"
import porcelain from "@/components/porcelain/porcelain/index.vue"
import problem from "@/components/porcelain/problem/index.vue"

export default {
   components: { 
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    porcelain,
    foot,
    problem
    }
  
}
</script>
<style>
 
</style>
