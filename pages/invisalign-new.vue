<template>
  <div id="lay">
    <Banner/>
    <hiddenBeauty/>
    <fit/>
    <problem/>
    <serve/>
    <mapGoogle/>
  
    
  </div>
  </template>
  
  <script>
  import mapGoogle from "@/components/common/new-googleMap.vue"
  import Banner from "@/components/hiddenBeauty/banner/index.vue"
  import serve from "@/components/hiddenBeauty/serve/index.vue"
  import hiddenBeauty from "@/components/hiddenBeauty/hiddenBeauty/index.vue"
  import fit from "@/components/hiddenBeauty/fit/index.vue"
  import problem from "@/components/hiddenBeauty/problem/index.vue"
  
  export default {
     components: { 
      Banner,
      serve,
      mapGoogle,
      hiddenBeauty,
      fit,
      problem
      },
      mounted(){
         document.getElementsByTagName("body")[0].className="body-invisalign";
      },
      head() {
      return {
        title: 'Invisalign 隱適美 | 牙科服務 | 希瑪牙科中心',
        meta: [{
          hid: 'description',
          name: 'description',
          content: '希瑪牙科擁有合資格牙醫負責矯齒個案。矯齒是一項持續療程，中心不斷優化牙齒矯正技術，提供隱適美透明配戴式牙箍矯齒方案，助你綻放自信美麗的燦爛笑容。'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: '透明牙套 隱適美 隱適美流程 誰人適合隱適美 為何選擇隱適美 隱適美常見問題'
        },
        ]
      }
    }
    
  }
  </script>
  <style>
   
  </style>
  