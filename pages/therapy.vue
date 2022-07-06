<template>
<div id="lay">
  <menuBar/>
  <Banner/>
  <therapy/>
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
import Banner from "@/components/therapy/banner/index.vue"
import serve from "@/components/therapy/serve/index.vue"
import therapy from "@/components/therapy/therapy/index.vue"
import problem from "@/components/therapy/problem/index.vue"

export default {
   components: { 
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    therapy,
    foot,
    problem
    }
  
}
</script>
<style>
 
</style>
