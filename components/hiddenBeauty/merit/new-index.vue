<template>
  <div class="merit">
    <div class="why_significance">隱形牙箍三大優點</div>
    <div></div>
    <div>
      <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize" :mb="mb"
        :paddingSizeMb="paddingSizeMb" :newSvg="newSvg" :maxNum="1745" :minNum="580" />
    </div>
  </div>
</template>

<script>
import newBtn from '@/components/common/new-btn.vue';
export default {
  components: {
    newBtn
  },
  name: 'merit',
  data() {
    return {
      linkHref: 'https://api.whatsapp.com/send?phone=85295128192',
      linkText: '立即預約及諮詢',
      isShowSvg: false,
      mb: '',
      paddingSize: '10px 88px',
      paddingSizeMb: '6px 64px',
      newSvg: 'https://static.cmereye.com/imgs/2023/12/ff870ed05ae5440d.png',
    };
  },
  methods: {}
}
</script>

<style  scoped lang='scss'>
@media screen and (min-width: 768px) {
  .merit {
    margin: 109px auto;
  }

  .mbShow {
    display: none;
  }

  .why_significance {
    color: #79828D;
    text-align: center;
    font-family: Noto Sans;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 2.5px;
    position: relative;
    padding-bottom: 20px;
  }

  .why_significance::after {
    content: '';
    background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Vector.5u4eydocd6c0.png');
    display: inline-block;
    width: 52px;
    height: 10px;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
  }
}

@media screen and (max-width: 767px) {
  .pcShow {
    display: none;
  }

  .why_significance {
    color: #79828D;
    text-align: center;
    font-family: Noto Sans;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: .1563rem;
    padding-bottom: .9375rem;
    position: relative;
  }

  .why_significance::after {
    content: '';
    background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Vector.5u4eydocd6c0.png');
    display: inline-block;
    width: 3.25rem;
    height: 0.625rem;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
  }
}
</style>