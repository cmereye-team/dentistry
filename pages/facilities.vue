<template>
<div id="lay">
 
  <menuBar/>
  <Banner/>
  <facilities/>
  <footce/>
  <mapGoogle/>
  <foot/>
  
</div>
</template>

<script>
import menuBar from "@/components/common/newMenuBar.vue";
import footce from "@/components/common/new-footce.vue"
import mapGoogle from "@/components/common/new-googleMap.vue"
import foot from "@/components/common/foot.vue"
import Banner from "@/components/facilities/banner/index.vue"
import facilities from "@/components/facilities/facilities/index.vue"
export default {
   components: { 
    menuBar,
    footce,
    Banner,
    facilities,
    mapGoogle,

    foot
    },
     mounted(){
       document.getElementsByTagName("body")[0].className="body-facilities";
    },
    head() {
    return {
      title: '診所設備 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '希瑪牙科為客人提供安全可靠及全方位牙科服務，由口腔檢查、植牙及牙周病治療等多種牙科服務。中心診所位於中環、尖沙咀、銅鑼灣、灣仔、沙田、鑽石山及觀塘，交通方便，照顧不同客人的需要。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'CBCT錐狀射束電腦斷層掃描 CEREC Class B 高壓滅菌器 診所設備 '
      },
      ]
    }
  }
  
}
</script>
<style>
 
</style>
