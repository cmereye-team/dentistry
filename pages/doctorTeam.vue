<template>
<div id="lay">
  <menuBar/>
  <Banner/>
  <doctor/>
  <footce/>
  <mapGoogle/>
  <foot/>
  
</div>
</template>

<script>
import menuBar from "@/components/common/menuBar.vue";
import footce from "@/components/common/footce.vue"
import mapGoogle from "@/components/common/googleMap.vue"
import foot from "@/components/common/foot.vue"
import Banner from "@/components/doctorTeam/Banner/index.vue"
import doctor from "@/components/doctorTeam/doctor/index.vue"
export default {
   components: { 
    menuBar,
    footce,
    Banner,
    mapGoogle,
    doctor,
    foot
    }
  
}
</script>
<style>
 
</style>
