<template>
<div id="lay">
 
  <menuBar/>
  <Banner/>
  <footce/>
  <mapGoogle/>
  <contact/>
  <foot/>

  
</div>
</template>

<script>
import menuBar from "@/components/common/menuBar.vue";
import footce from "@/components/common/footce.vue"
import mapGoogle from "@/components/common/googleMap.vue"
import foot from "@/components/common/foot.vue"
import Banner from "@/components/contactUs/Banner/index.vue"
import contact from "@/components/contactUs/contact/index.vue"


export default {
   components: { 
    menuBar,
    footce,
    Banner,
    mapGoogle,
    foot,
    contact
    },
    mounted(){
       document.getElementsByTagName("body")[0].className="body-contact-us";
    },
    head() {
    return {
      title: '聯絡我們 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '中心診所位於中環、尖沙咀、銅鑼灣、灣仔、沙田、鑽石山及觀塘，交通方便，照顧不同客人的需要。預約及查詢Whatsapp : 95128192'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '希瑪牙科 中環牙科 尖沙咀牙科 銅鑼灣牙科 灣仔牙科 沙田牙科 鑽石山牙科 觀塘牙科'
      },
      ]
    }
  }
  
}
</script>
<style>
 
</style>
