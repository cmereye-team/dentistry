<template>
  <div id="lay">
    <menuBar />
    <bannerInsidePage :bannerImg="bannerImg" />
    <therapy />
    <stepConditionAttention />
    <footce />
    <problem />
    <mapGoogle />
      <!-- <registration  /> -->
    <foot />
  </div>
</template>

<script>
import menuBar from "@/components/common/newMenuBar.vue";
import footce from "@/components/common/new-footce.vue"
import mapGoogle from "@/components/common/new-googleMap.vue"
import foot from "@/components/common/new-foot.vue"
import registration from "@/components/common/new-test-registration-form.vue"
import bannerInsidePage from "@/components/common/new-banner-inside-page.vue";
import stepConditionAttention from '@/components/therapy/step-condition-attention/index.vue';
import therapy from "@/components/therapy/therapy/new-index.vue"
import problem from "@/components/therapy/problem/new-index.vue"

export default {
  components: {
    menuBar,
    footce,
    bannerInsidePage,
    mapGoogle,
    therapy,
    foot,
    problem,
    registration,
    stepConditionAttention
  },
  data() {
    return {
      bannerImg: {
        link: 'https://static.cmereye.com/imgs/2023/12/cbe830c0ae9f7247.png',
        linkAll: 'https://static.cmereye.com/imgs/2023/12/2351e3773da31640.png 400w,  https://static.cmereye.com/imgs/2023/12/2351e3773da31640.png 640w, https://static.cmereye.com/imgs/2023/12/cbe830c0ae9f7247.png',
        title: '',
        alt: '',
      }
    }
  },
  mounted() {
    document.getElementsByTagName("body")[0].className = "body-rct";
  },
  head() {
    return {
      title: '根管治療（杜牙根）| 牙科服務 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '根管治療（杜牙根）是治療嚴重蛀牙或牙根受細菌感染的手術，當蛀牙菌的感染深入牙髓，以致牙齒內的神經發炎，便需要以杜牙根手術徹底清除感染的部分。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '根管治療 杜牙根 杜牙根過程 杜牙根的原因 杜牙根後注意事項 杜牙根常見問題'
      },
      ]
    }
  }

}
</script>
<style></style>
