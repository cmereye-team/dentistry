<template>
<div id="lay">
  <menuBar/>
  <Banner/>
  <oralExamination/>
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
import Banner from "@/components/oralExamination/banner/index.vue"
import serve from "@/components/oralExamination/serve/index.vue"
import oralExamination from "@/components/oralExamination/oralExamination/index.vue"
import problem from "@/components/oralExamination/problem/index.vue"

export default {
   components: { 
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    oralExamination,
    foot,
    problem
    }
  
}
</script>
<style>
 
</style>
