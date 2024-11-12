<template>
<div id="lay">
 
  <menuBar/>
  <Banner/>
  <oralExamination/>
  <footce/>
  <problem/>
  <serve/>
  <mapGoogle/>
  <foot/>
  
</div>
</template>

<script>
import menuBar from "@/components/common/newMenuBar.vue";
// import footce from "@/components/common/footce.vue"
import footce from "@/components/common/new-footce.vue"
import mapGoogle from "@/components/common/new-googleMap.vue"
import foot from "@/components/common/foot.vue"
import Banner from "@/components/oralExamination/banner/index.vue"
import serve from "@/components/oralExamination/serve/index.vue"
import oralExamination from "@/components/oralExamination/oralExamination/index.vue"
import problem from "@/components/oralExamination/problem/index.vue"

export default {
   components: { 
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    oralExamination,
    foot,
    problem
    },
    mounted(){
       document.getElementsByTagName("body")[0].className="body-general-oral-examination";
    },
    head() {
    return {
      title: '一般口腔檢查 | 牙科服務 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '定期口腔檢查能確保牙齒、牙齦健康，預防各種口腔疾病。牙科醫生透過檢查評估牙齒、牙齦、面頜及口腔組織的健康情況，能確保沒有潛在蛀牙、牙齦發炎或其他口腔問題。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '口腔檢查 口腔檢查過程 口腔檢查常見問題 '
      },
      ]
    }
  }
  
}
</script>
<style>
 
</style>
