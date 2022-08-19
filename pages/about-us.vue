<template>
<div id="lay">
 
  <menuBar/>
  <Banner/>
  <comContent/>
  <ambient/>
  <footce/>
  <mapGoogle style="margin-top: 0vw;"/>
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
    },
      mounted(){
       document.getElementsByTagName("body")[0].className="body-about-us";
    },
   head() {
    return {
      title: '關於我們 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '希瑪牙科為香港希瑪眼科醫療控股有限公司（股份代號：3309）旗下的牙科中心，分佈港九新界，位於中環、尖沙咀、銅鑼灣﹑灣仔、沙田﹑鑽石山及觀塘。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '香港希瑪眼科醫療控股有限公司 全方位牙科服務 美容牙科服務 中心環境'
      },
      ]
    }
  }
}
</script>
<style>
 
</style>
