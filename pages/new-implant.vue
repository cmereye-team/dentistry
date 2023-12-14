<template>
  <div id="lay">
    <menuBar />
    <bannerInsidePage :bannerImg="bannerImg" />
    <zhiya />
    <agomphiasisYouth />
    <newStep />
    <newDifference />
    <newVideoBrandAttention />
    <footce />
    <collapseTemplate />
    <!-- <problem /> -->
    <mapGoogle />
    <foot />
  </div>
</template>

<script>
import menuBar from "@/components/common/newMenuBar.vue";
import bannerInsidePage from "@/components/common/new-banner-inside-page.vue";
import footce from "@/components/common/new-footce.vue"
import mapGoogle from "@/components/common/new-googleMap.vue"
import foot from "@/components/common/new-foot.vue"
import newBtn from '@/components/common/new-btn.vue';
import zhiya from "@/components/implant/zhiya/new-index.vue"
import agomphiasisYouth from '@/components/implant/agomphiasis-youth/index.vue';
import newStep from '@/components/implant/new-step/index.vue';
import newDifference from '@/components/implant/new-difference/index.vue';
import newVideoBrandAttention from '@/components/implant/new-video-brand-attention/index.vue';
import collapseTemplate from '@/components/implant/problem/collapse-template.vue';
import Banner from "@/components/implant/banner/index.vue"
import problem from "@/components/implant/problem/index.vue"

export default {
  components: {
    menuBar,
    bannerInsidePage,
    footce,
    Banner,
    newBtn,
    mapGoogle,
    zhiya,
    foot,
    problem,
    agomphiasisYouth,
    newStep,
    newDifference,
    newVideoBrandAttention,
    collapseTemplate
  },
  mounted() {
    document.getElementsByTagName("body")[0].className = "body-implant";
  },
  data() {
    return {
      linkHref: 'https://api.whatsapp.com/send?phone=85295128192',
      linkText: 'WhatsApp 預約',
      isShowSvg: true,
      bannerImg: {
        link: 'https://static.cmereye.com/imgs/2023/12/cbe58105a59b7ac4.png',
        linkAll: 'https://static.cmereye.com/imgs/2023/12/e1262a587c1de5e0.png 400w,  https://static.cmereye.com/imgs/2023/12/e1262a587c1de5e0.png 640w, https://static.cmereye.com/imgs/2023/12/cbe58105a59b7ac4.png',
        title: '',
        alt: '',
      },
      collapseList: [
        {
          question: '什麼情況需要補骨？',
          answer: '補骨手術因人而異，通常在口腔狀況欠佳的情況下進行。如缺牙時間過長，導致齒槽骨流失，或嚴重牙周病，牙齦與牙槽骨之間出現萎縮。客人長期配戴假牙，壓迫牙床造成骨質流失等等。在這些情況下，醫生一般會建議進行補骨手術。'
        },
        {
          question: '植牙會痛嗎？',
          answer: '植牙手術會進行局部麻醉，減輕術程中引起的痛楚。另外，随著技術日新月異，微創植牙可將痛感降至最低，相比傳統植牙無需翻開牙齦，對口腔組織的影響該小，有助減輕術後的不適感。',
        },
        {
          question: '植牙有什麼風險？',
          answer: '植牙治療的成功率高達90％至97％。電腦掃描為術前的準備步驟，讓醫生了解口腔內的重要組織，如下齒槽神經和上顎實，以便更精確地定位植牙的位置和角度，提高手術的準確性。',
        },
        {
          question: '植牙會有什麼後道症？',
          answer: '植牙基少引起不良反應或其他併發症。植牙後出現牙觀發炎，進而影響植體的穩定性，通常是由口腔衛生欠佳或傷口處理不當引起的。因此，術後保養至關重要，應注意口腔衛生，並定期覆診檢查，以確保植牙穩定耐用。',
        },
        {
          question: '拔牙後可立即植牙嗎？',
          answer: '拔牙後是否能立即植牙，視個人情況和牙醫的評估而定。牙醫會考慮牙齦的健康狀況、口腔內的骨質情形，以及是否存在發炎或細菌感染等因素。如一切都適合，醫生會建讓進行「即剝即種」手術。然而，健康狀況因人而異，需由牙醫評估後才能決定最合適的治察方案。',
        },
        {
          question: '植牙後還會蛀牙嗎？',
          answer: '雖然植牙與真牙的材質不同，抗蛀能力校高，但也不代表可以忽略保養，應如同真牙體對待，以免細菌滋生感染，進而導致「植體周圍炎」。\n一旦植牙被感染，會出現流血、化膜，甚至植牙脫落。預防勝於治寮，植牙前應妥善治庶牙周病，定期覆診檢查植牙狀況，以確保口腔健康。',
        },
        {
          question: '哪些人不適宜植牙？',
          answer: '心血管痰病，糖尿病、高血墜，骨質疏鬆，免疫系統疾病、正服用抗凝血藥物人士，或孕婦等為植牙的高危人士。\n*如有以上健康狀況，請諮詢牙科醫生的意見。',
        },
      ]
    };
  },
  head() {
    return {
      title: '微創植牙、種植牙｜牙科服務｜希瑪牙科',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '提供植牙服務，包括傳統植牙、微創植牙、All-on-4 全口植牙、即剝即種植牙，透過將鈦金屬植體穩固地植入牙槽骨，作為假牙、牙橋或牙托的支撐，填補缺牙部分，幫助患者重拾健康的生活素質。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '植牙 種牙 種植牙 傳統植牙 微創植牙 All on 4 植牙 即剝即種 無痛植牙 全口植牙 全口重建 植牙服務 種牙服務 種植牙服務 植牙收費 種牙收費 種植牙收費 傳統植牙收費 微創植牙收費 All on 4 植牙收費 即剝即種收費 植牙價錢 種牙價錢 種植牙價錢 傳統植牙價錢 微創植牙價錢 All on 4 植牙價錢 即剝即種價錢 植牙過程 種牙過程 種植牙過程 植牙後遺症 種牙後遺症 種植牙後遺症 植牙手術 種牙手術 種植牙手術 植牙邊間好 種牙邊間好 種植牙邊間好 植牙種牙分別 補牙 無牙 缺牙 天生缺牙 缺牙怎麼辦 天生缺牙怎麼辦 植牙預約 種牙預約 種植牙預約 預約植牙 預約種牙 預約種植牙 植牙評價 種牙評價 種植牙評價 植牙推薦 種牙推薦 種植牙推薦 植牙推介 種牙推介 種植牙推介 植牙介紹 種牙介紹 種植牙品牌 植牙品牌 種牙品牌 種植牙品牌 植牙香港 植牙中環 植牙沙田 植牙觀塘 香港植牙 中環植牙 沙田植牙 觀塘植牙 希瑪植牙 希瑪牙科 Cmer Dental 香港希瑪牙科 牙科專科 牙科專科診所 香港希瑪 希瑪 希瑪牙科治療 希瑪牙科收費 牙科收費 希瑪牙科香港 牙科希瑪 牙科診所 牙科服務 牙科檢查 註冊牙醫 牙科醫生 牙醫 香港牙科 中環牙科 沙田牙科 觀塘牙科 尖沙咀牙科 香港牙醫 中環牙醫 沙田牙醫 觀塘牙醫 尖沙咀牙醫'
      },
      ]
    }
  }
}
</script>
<style></style>
