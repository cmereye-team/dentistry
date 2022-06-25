<template>
<div id="lay">
  <menuBar/>
  <Banner/>
  <newsInfo/>
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
import Banner from "@/components/news/banner/index.vue"
import newsInfo from "@/components/news/newsInfo/index.vue"
export default {
   components: { 
    menuBar,
    footce,
    Banner,
    mapGoogle,
    newsInfo,
    foot
    }
  
}
</script>
<style>
 
</style>
