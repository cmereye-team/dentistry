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
import footce from "@/components/common/new-footce.vue"
import mapGoogle from "@/components/common/new-googleMap.vue"
import foot from "@/components/common/foot.vue"
import Banner from "@/components/doctorTeam/banner/index.vue"
import doctor from "@/components/doctorTeam/doctor/index.vue"
export default {
   components: { 
    menuBar,
    footce,
    Banner,
    mapGoogle,
    doctor,
    foot
    },
     mounted(){
       document.getElementsByTagName("body")[0].className="body-our-medical-team";
    },
    head() {
    return {
      title: '我們的團隊 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '我們的醫生團隊為客人提供安全可靠及全方位牙科服務，由口腔檢查、植牙、矯齒服務等多種牙科服務。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '牙科團隊 牙科醫生 專科醫生 姚本基醫生'
      },
      ]
    }
  }
  
}
</script>
<style>
 
</style>
