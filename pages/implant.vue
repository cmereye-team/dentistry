<template>
<div id="lay">
  <menuBar/>
  <Banner/>
  <zhiya/>
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
import Banner from "@/components/implant/banner/index.vue"
import serve from "@/components/implant/serves/index.vue"
import zhiya from "@/components/implant/zhiya/index.vue"
import problem from "@/components/implant/problem/index.vue"

export default {
   components: { 
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    zhiya,
    foot,
    problem
    }
  
}
</script>
<style>
 
</style>
