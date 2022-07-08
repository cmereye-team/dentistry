<template>
<div id="lay">
  <menuBar/>
  <Banner/>
  <healthcare/>
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
import Banner from "@/components/healthcare/banner/index.vue"
import serve from "@/components/healthcare/serve/index.vue"
import healthcare from "@/components/healthcare/healthcare/index.vue"


export default {
   components: { 
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    healthcare,
    foot
    }
  
}
</script>
<style>
 
</style>
