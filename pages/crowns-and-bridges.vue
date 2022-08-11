<template>
<div id="lay">
 
  <menuBar/>
  <Banner/>
  <yacrown/>
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
import Banner from "@/components/yacrown/banner/index.vue"
import serve from "@/components/yacrown/serve/index.vue"
import yacrown from "@/components/yacrown/yacrown/index.vue"

export default {
   components: { 
    menuBar,
    footce,
    Banner,
    serve,
    mapGoogle,
    yacrown,
    foot
    },
    mounted(){
       document.getElementsByTagName("body")[0].className="body-crowns-and-bridges";
    },
       head() {
    return {
      title: '全瓷牙冠及全鋯牙冠 | 牙科服務 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '牙冠（牙套）是一種修復牙齒的方法，用於覆蓋形狀參差不齊或變色的牙齒。當牙齒因不同情況受到損壞，例如沒有足夠的牙齒結構進行補牙或需要修復裂縫的牙齒或保護脆弱的牙齒時，牙醫便會建議使用牙冠（牙套）。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '全瓷牙冠 全鋯牙冠 牙套 如何選擇全瓷牙冠及全鋯牙冠'
      },
      ]
    }
  }
  
}
</script>
<style>
 
</style>
