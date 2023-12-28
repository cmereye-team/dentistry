<template>
  <div class="child">
    <div class="child_bg">
      <div class="main-container bubble">
        <div>
          <img src="https://static.cmereye.com/imgs/2023/12/ad71e1d6f86b1529.png" alt="">
        </div>
        <div>
          <div><img src="https://static.cmereye.com/imgs/2023/12/d1f99bcd3aff5ebd.png" alt=""></div>
          <div><img src="https://static.cmereye.com/imgs/2023/12/63668eed6619c30f.png" alt=""></div>
          <div><img src="https://static.cmereye.com/imgs/2023/12/3f654ed56a2419ea.png" alt=""></div>
        </div>
        <div class="new_btn">
          <newBtn :linkHref="linkHref" :linkText="linkText" :isShowSvg="isShowSvg" :paddingSize="paddingSize" :mb="mb"
            :paddingSizeMb="paddingSizeMb" :newSvg="newSvg" :maxNum="1745" :minNum="580" />
        </div>
      </div>
      <div class="age_gap">
        <div><img src="https://static.cmereye.com/imgs/2023/12/3f00f54861c5d157.png" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
import newBtn from '@/components/common/new-btn.vue';

export default {
  components: {
    newBtn
  },
  name: 'child',
  data() {
    return {
      linkHref: 'https://api.whatsapp.com/send?phone=85295128192',
      linkText: '立即預約及諮詢',
      isShowSvg: false,
      mb: '',
      paddingSize: '10px 88px',
      paddingSizeMb: '6px 64px',
      newSvg: 'https://static.cmereye.com/imgs/2023/12/d0209184f5c3c712.png',
    };
  },
}
</script>

<style  scoped lang='scss'>
@media screen and (min-width: 768px) {
  .child_bg {
    background: url('https://static.cmereye.com/imgs/2023/12/e4a5e880add655b2.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 1670px;
    position: relative;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 220px 0;
  }

  ::v-deep .new_btn {
    .img_absolute {
      right: -12% !important;
      top: -160% !important;
    }

    .btn1,
    .btn2 {
      background: #57B2F3 !important;
    }
  }

  .bubble {
    &>div {
      display: flex;
      justify-content: center;
    }

    &>div:nth-child(2) {
      position: relative;
      margin: 64px auto 0;

      &>div:nth-child(1) {
        position: absolute;
        left: -40%;
        top: -10%;
      }

      &>div:nth-child(3) {
        position: absolute;
        right: -30%;
        bottom: 0%;
      }
    }
  }
  .age_gap {
    margin-top: 110px;
  }
}

@media screen and (max-width: 767px) {}
</style>