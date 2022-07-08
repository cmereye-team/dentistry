<template>
<div id="lay">
  <menuBar/>
  <Banner/>
  <hiddenBeauty/>
  <fit/>
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
import Banner from "@/components/hiddenBeauty/banner/index.vue"
import serve from "@/components/hiddenBeauty/serve/index.vue"
import hiddenBeauty from "@/components/hiddenBeauty/hiddenBeauty/index.vue"
import fit from "@/components/hiddenBeauty/fit/index.vue"
import problem from "@/components/hiddenBeauty/problem/index.vue"

export default {
   components: { 
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    hiddenBeauty,
    foot,
    fit,
    problem
    }
  
}
</script>
<style>
 
</style>
