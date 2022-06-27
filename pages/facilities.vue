<template>
<div id="lay">
  <menuBar/>
  <Banner/>
  <facilities/>
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
import Banner from "@/components/facilities/banner/index.vue"
import facilities from "@/components/facilities/facilities/index.vue"
export default {
   components: { 
    menuBar,
    footce,
    Banner,
    facilities,
    mapGoogle,

    foot
    }
  
}
</script>
<style>
 
</style>
