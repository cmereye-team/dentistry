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
    },
       mounted(){
       document.getElementsByTagName("body")[0].className="body-children-dentistry";
    },
     head() {
    return {
      title: '兒童牙科保健及治療 | 牙科服務 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '小朋友擁有第一隻牙開始，就可以定期檢查牙齒。定期進行牙科保健，從小了解保持口腔健康的知識和重要性，家長們亦可以緊貼小朋友的牙齒發育進度，及早發現兒童牙齒的潛在問題，作出針對性治療。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '兒童牙科保健 兒童定期牙科保健的重要性 '
      },
      ]
    }
  }
  
}
</script>
<style>
 
</style>
