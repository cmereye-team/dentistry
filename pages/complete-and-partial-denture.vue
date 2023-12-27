<template>
<div id="lay">
  <menuBar/>
  <Banner/>
  <dentures/>
  <footce/>
  <problem/>
  <serve/>
  <mapGoogle/>
  <foot/>
  
</div>
</template>

<script>
import menuBar from "@/components/common/newMenuBar.vue";
import footce from "@/components/common/footce.vue"
import mapGoogle from "@/components/common/googleMap.vue"
import foot from "@/components/common/foot.vue"
import Banner from "@/components/dentures/banner/index.vue"
import serve from "@/components/dentures/serve/index.vue"
import problem from "@/components/dentures/problem/index.vue"
import dentures from "@/components/dentures/dentures/index.vue"

export default {
  
   components: { 
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    dentures,
    foot,
    problem
    },
    mounted(){
       document.getElementsByTagName("body")[0].className="body-complete-and-partial-denture";
    },
     head() {
    return {
      title: '全口牙托及局部牙托 | 牙科服務 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '牙托即活動式假牙，分為局部及全口牙托兩種，可改善缺牙的影響。牙托底部有金屬鉤讓牙托能固定在真牙上，代替缺去的牙齒。活動式假牙可自行配戴，適合缺齒較多的人士使用。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '牙托 假牙 全口牙托 局部牙托 固定式假牙、活動式假牙點揀好 全口牙托及局部牙托常見問題'
      },
      ]
    }
  }
  
}
</script>
<style>
 
</style>
