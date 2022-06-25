<template>
<div id="lay">
  <menuBar/>
  <Banner/>
  <comContent/>
  <ambient/>
  <footce/>
  <mapGoogle/>
  <foot/>
  
</div>
</template>

<script>
import menuBar from "@/components/common/menuBar.vue";
import Banner from "@/components/me/banner/index.vue";
import footce from "@/components/common/footce.vue"
import mapGoogle from "@/components/common/googleMap.vue"
import comContent from "@/components/me/comContent/index.vue"
import ambient from "@/components/me/ambient/index.vue"
import foot from "@/components/common/foot.vue"
export default {
   components: { 
    menuBar,
    footce,
    Banner,
    mapGoogle,
    comContent,
    ambient,
    foot
    }
  
}
</script>
<style>
 
</style>
