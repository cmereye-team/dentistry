<template>
  <div class="maintain main-container">
    <div class="why_significance">隱形牙箍日常保養</div>
    <div class="maintainList">
      <div v-for="item in maintainList" :key="item.id">
        <div><img :src="item.img" alt=""></div>
        <div>{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'maintain',
  data() {
    return {
      maintainList: [
        {
          id: 1,
          img: 'https://static.cmereye.com/imgs/2024/01/4bca2df99215753c.png',
          text: '每天須自律佩\n20至22小時',
        },
        {
          id: 2,
          img: 'https://static.cmereye.com/imgs/2024/01/15813bd1779f311c.png',
          text: '進食時須除下\n隱形牙箍',
        },
        {
          id: 3,
          img: 'https://static.cmereye.com/imgs/2024/01/77b854d09317d101.png',
          text: '避免進食染色食物',
        },
        {
          id: 4,
          img: 'https://static.cmereye.com/imgs/2024/01/2f3946c3fed3a181.png',
          text: '保持口腔衛生',
        },
      ]
    };
  },
  methods: {}
}
</script>

<style  scoped lang='scss'>
@media screen and (min-width: 768px) {
  .maintainList {
    display: flex;
    justify-content: space-between;
    padding: 64px 230px 0;

    &>div {
      &>div:nth-child(1) {
        display: flex;
        justify-content: center;
      }

      &>div:nth-child(2) {
        color: #79828D;
        text-align: center;
        font-family: Noto Sans TC;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        white-space: break-spaces;
      }
    }

    &>div:nth-child(3) {
      position: relative;

      &>div:nth-child(2) {
        text-wrap: nowrap;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
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
  .maintainList {
    margin-top: 43px;
    padding: 0 20px;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    justify-items: center;

    &>div {
      &>div:nth-child(1) {
        width: 42.133vw;

        &>img {
          width: 100%;
        }
      }

      &>div:nth-child(2) {
        color: #79828D;
        text-align: center;
        font-family: Noto Sans TC;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        text-wrap: balance;
      }
    }
  }

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