<template>
<div>
  <menuBar/>
  <Banner/>
  <footce/>
  <serve/>
  <serveConcept/>
  
</div>
</template>

<script>
import menuBar from "@/components/about-me/menu-bar/index.vue";
import Banner from "@/components/about-me/banner/index.vue";
import serve from "@/components/about-me/serve/index.vue"
import serveConcept from "@/components/about-me/service-concept/index.vue"
import footce from "@/components/footce.vue"

export default {
   components: { 
    menuBar,
    Banner, 
    serve,
    serveConcept,
    footce
    }
  
}
</script>
