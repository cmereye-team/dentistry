<template>
  <div class="element_banner">
    <img :srcset="bannerImg.linkAll" :title="bannerImg.title" :alt="bannerImg.alt" :src="bannerImg.link" />
  </div>
</template>
<script>
// 接受父组件传入的bannerImg
export default {
  props: {
    bannerImg: {
      type: Object,
      default: ()=>{}
    }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .element_banner {
    max-width: 1440px;
    margin: 10px auto;

    &>img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 768px) {
  .element_banner {
    &>img {
      width: 100%;
      padding: 10px 20px 0;
    }
  }
}
</style>