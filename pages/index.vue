<template>
<div id="lay">
  <menuBar/>
  <Banner/>
  <footce/>
  <serve/>
  <serveConcept/>
  <debtistryHealth/>
  <mapGoogle/>
  <foot/>
  
</div>
</template>

<script>
import menuBar from "@/components/about-me/menu-bar/index.vue";
import Banner from "@/components/about-me/banner/index.vue";
import serve from "@/components/about-me/serve/index.vue"
import serveConcept from "@/components/about-me/service-concept/index.vue"
import footce from "@/components/common/footce.vue"
import debtistryHealth from "@/components/about-me/debtistry-health/index.vue"
import mapGoogle from "@/components/about-me/map-google/index.vue"
import foot from "@/components/common/foot.vue"
export default {
   components: { 
    menuBar,
    Banner, 
    serve,
    serveConcept,
    footce,
    debtistryHealth,
    mapGoogle,
    foot
    }
  
}
</script>
<style>
 
</style>
