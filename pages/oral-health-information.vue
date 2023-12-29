<template>
  <div id="lay">
    <menuBar />
    <Banner />
    <equipInfo />
    <footce />
    <mapGoogle />
    <foot />
  </div>
</template>

<script>
import menuBar from "@/components/common/newMenuBar.vue";
import footce from "@/components/common/footce.vue"
import mapGoogle from "@/components/common/googleMap.vue"
import foot from "@/components/common/foot.vue"
import Banner from "@/components/equipment/banner/index.vue"
import equipInfo from "@/components/equipment/equipInfo/index.vue"
export default {
  components: {
    menuBar,
    footce,
    Banner,
    mapGoogle,
    equipInfo,
    foot
  },
  mounted() {
    document.getElementsByTagName("body")[0].className = "body-oral-health-information";
  },
  head() {
    return {
      title: '牙齒健康 | 健康資訊 | 希瑪牙科中心',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '希瑪牙科注重口腔衛生教育，透過推廣牙齒健康的重要性，提高大眾對口腔護理的關注。'
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
<style></style>
