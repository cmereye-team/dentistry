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
    },
    mounted(){
       document.getElementsByTagName("body")[0].className="body-news";
    },
    head() {
    return {
      title: '最新消息 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '希瑪牙科提供全方位牙科及美容牙科服務，由洗牙、補牙，牙齒美白等治療，幫助客人回復自信笑容。中心診所位於中環、尖沙咀、銅鑼灣、灣仔、沙田、鑽石山及觀塘，交通方便，照顧不同客人的需要。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '牙齒健康 護齒心得'
      },
      ]
    }
  }
  
}
</script>
<style>
 
</style>
