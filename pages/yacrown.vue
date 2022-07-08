<template>
<div id="lay">
  <menuBar/>
  <Banner/>
  <yacrown/>
  <footce/>
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
import Banner from "@/components/yacrown/banner/index.vue"
import serve from "@/components/yacrown/serve/index.vue"
import yacrown from "@/components/yacrown/yacrown/index.vue"

export default {
   components: { 
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    yacrown,
    foot
    }
  
}
</script>
<style>
 
</style>
